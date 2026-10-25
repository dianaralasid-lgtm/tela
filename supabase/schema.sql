-- tela database: run this once in Supabase (Dashboard → SQL Editor → New query → paste → Run).
-- Safe to re-run: it drops and recreates tela's tables, so it also wipes tela's data.
--
-- Sign-in uses Supabase Auth with usernames: an account "samlee" is the auth user
-- student.samlee@tela.example.com (tutors: tutor.<username>@…). No emails are ever sent, so
-- Authentication → Sign In / Providers → Email → "Confirm email" must be turned OFF.
--
-- Times are stored as milliseconds since 1970 (bigint), the same numbers the pages use.

drop table if exists public.account_invites, public.reads, public.group_messages, public.group_members, public.groups,
  public.messages, public.homework, public.student_kv, public.student_data, public.tutor_students, public.profiles cascade;
drop function if exists public.handle_new_user, public.is_admin, public.teaches, public.is_tutor,
  public.in_group, public.delete_student, public.admin_delete_account cascade;

-- ---------- Accounts ----------
-- One row per person, made automatically when they sign up (see handle_new_user).
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  username text not null check (username ~ '^[a-z0-9._-]{3,20}$'),
  display_name text not null check (length(display_name) between 1 and 40),
  role text not null check (role in ('student', 'tutor')),
  created_at bigint not null default (extract(epoch from now()) * 1000)::bigint,
  unique (username, role)
);

-- Which tutors teach which students.
create table public.tutor_students (
  tutor_id uuid not null references public.profiles on delete cascade,
  student_id uuid not null references public.profiles on delete cascade,
  added_at bigint not null default (extract(epoch from now()) * 1000)::bigint,
  primary key (tutor_id, student_id)
);

-- ---------- A student's own data ----------
-- Their dashboard topics (the same list the page used to keep in the browser).
create table public.student_data (
  student_id uuid primary key references public.profiles on delete cascade,
  topics jsonb not null default '[]'::jsonb,
  updated_at bigint not null default (extract(epoch from now()) * 1000)::bigint
);
-- Everything else a student saves, by key: practice answers ("practice.<topic>"), questions seen ("seen.<topic>").
create table public.student_kv (
  student_id uuid not null references public.profiles on delete cascade,
  key text not null,
  value jsonb not null,
  updated_at bigint not null default (extract(epoch from now()) * 1000)::bigint,
  primary key (student_id, key)
);

-- ---------- Homework ----------
create table public.homework (
  id text primary key,
  student_id uuid not null references public.profiles on delete cascade,
  title text not null,
  subject text not null default '',
  grade text not null default '',
  set_by uuid references public.profiles on delete set null,
  set_by_name text not null default '',
  set_at bigint not null,
  due text not null default '',
  note text not null default '',
  questions int not null default 0
);

-- ---------- Messages ----------
-- One-to-one: each message belongs to the conversation between one student and one tutor.
create table public.messages (
  id text primary key,
  student_id uuid not null references public.profiles on delete cascade,
  tutor_id uuid not null references public.profiles on delete cascade,
  from_role text not null check (from_role in ('student', 'tutor')),
  text text not null check (length(text) between 1 and 4000),
  at bigint not null
);
create index on public.messages (student_id, tutor_id, at);

-- Group chats a tutor makes with some of their students.
create table public.groups (
  id text primary key,
  tutor_id uuid not null references public.profiles on delete cascade,
  name text not null check (length(name) between 1 and 40),
  created_at bigint not null
);
create table public.group_members (
  group_id text not null references public.groups on delete cascade,
  student_id uuid not null references public.profiles on delete cascade,
  primary key (group_id, student_id)
);
create table public.group_messages (
  id text primary key,
  group_id text not null references public.groups on delete cascade,
  sender_id uuid references public.profiles on delete set null,
  role text not null check (role in ('student', 'tutor')),
  text text not null check (length(text) between 1 and 4000),
  at bigint not null
);
create index on public.group_messages (group_id, at);

-- When each person last read each conversation ("t:<tutor id>", "s:<student id>" or "g:<group id>").
create table public.reads (
  user_id uuid not null references public.profiles on delete cascade,
  convo text not null,
  read_at bigint not null,
  primary key (user_id, convo)
);

-- ---------- Helpers used by the access rules ----------
create function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, username, display_name, role)
  values (new.id, lower(new.raw_user_meta_data ->> 'username'), new.raw_user_meta_data ->> 'display_name', new.raw_user_meta_data ->> 'role');
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- Admins (tutors with these usernames) can read every conversation.
create function public.is_admin() returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'tutor' and username in ('dayan', 'ilham'))
$$;
create function public.is_tutor() returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'tutor')
$$;
-- Does the signed-in tutor teach this student?
create function public.teaches(student uuid) returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from tutor_students where tutor_id = auth.uid() and student_id = student)
$$;
-- Is the signed-in person in this group: its tutor, or a member whose tutor still teaches them?
create function public.in_group(g text) returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from groups where id = g and tutor_id = auth.uid())
      or exists (select 1 from group_members m join groups gr on gr.id = m.group_id
                 join tutor_students ts on ts.tutor_id = gr.tutor_id and ts.student_id = m.student_id
                 where m.group_id = g and m.student_id = auth.uid())
$$;

-- A tutor removing a student: if the student has other tutors only this tutor's link goes;
-- if this was their only tutor, the whole account (and everything saved for it) is deleted.
create function public.delete_student(student uuid) returns text language plpgsql security definer set search_path = public as $$
begin
  if not public.teaches(student) then raise exception 'not your student'; end if;
  delete from tutor_students where tutor_id = auth.uid() and student_id = student;
  if exists (select 1 from tutor_students where student_id = student) then return 'unlinked'; end if;
  delete from auth.users where id = student;
  return 'deleted';
end $$;
revoke all on function public.delete_student from public, anon;
grant execute on function public.delete_student to authenticated;

-- ---------- Access rules (row level security) ----------
alter table public.profiles enable row level security;
alter table public.tutor_students enable row level security;
alter table public.student_data enable row level security;
alter table public.student_kv enable row level security;
alter table public.homework enable row level security;
alter table public.messages enable row level security;
alter table public.groups enable row level security;
alter table public.group_members enable row level security;
alter table public.group_messages enable row level security;
alter table public.reads enable row level security;

-- Names and usernames are visible to signed-in people (to add a student by username, and to show who wrote what).
create policy "read profiles" on public.profiles for select to authenticated using (true);
create policy "edit own name" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

create policy "see own links" on public.tutor_students for select to authenticated
  using (tutor_id = auth.uid() or student_id = auth.uid() or public.is_admin());
create policy "tutor adds student" on public.tutor_students for insert to authenticated
  with check (tutor_id = auth.uid() and public.is_tutor()
              and exists (select 1 from public.profiles p where p.id = student_id and p.role = 'student'));
create policy "tutor removes student" on public.tutor_students for delete to authenticated using (tutor_id = auth.uid());

create policy "student owns data" on public.student_data for all to authenticated
  using (student_id = auth.uid()) with check (student_id = auth.uid());
create policy "tutor reads data" on public.student_data for select to authenticated using (public.teaches(student_id));
create policy "student owns kv" on public.student_kv for all to authenticated
  using (student_id = auth.uid()) with check (student_id = auth.uid());
create policy "tutor reads kv" on public.student_kv for select to authenticated using (public.teaches(student_id));

create policy "read homework" on public.homework for select to authenticated using (student_id = auth.uid() or public.teaches(student_id));
create policy "tutor sets homework" on public.homework for insert to authenticated with check (public.teaches(student_id) and set_by = auth.uid());
create policy "tutor edits homework" on public.homework for update to authenticated using (public.teaches(student_id)) with check (public.teaches(student_id));
create policy "tutor cancels homework" on public.homework for delete to authenticated using (public.teaches(student_id));

create policy "read messages" on public.messages for select to authenticated
  using (student_id = auth.uid() or tutor_id = auth.uid() or public.is_admin());
create policy "send messages" on public.messages for insert to authenticated with check (
  (from_role = 'student' and student_id = auth.uid() and exists (select 1 from public.tutor_students t where t.tutor_id = messages.tutor_id and t.student_id = auth.uid()))
  or (from_role = 'tutor' and tutor_id = auth.uid() and public.teaches(student_id)));

create policy "read groups" on public.groups for select to authenticated using (public.in_group(id) or public.is_admin());
create policy "tutor makes groups" on public.groups for insert to authenticated with check (tutor_id = auth.uid() and public.is_tutor());
create policy "tutor edits groups" on public.groups for update to authenticated using (tutor_id = auth.uid()) with check (tutor_id = auth.uid());
create policy "tutor deletes groups" on public.groups for delete to authenticated using (tutor_id = auth.uid());

create policy "read members" on public.group_members for select to authenticated using (public.in_group(group_id) or public.is_admin());
create policy "tutor adds members" on public.group_members for insert to authenticated with check (
  exists (select 1 from public.groups g where g.id = group_id and g.tutor_id = auth.uid()) and public.teaches(student_id));
create policy "tutor removes members" on public.group_members for delete to authenticated using (
  exists (select 1 from public.groups g where g.id = group_id and g.tutor_id = auth.uid()));

create policy "read group messages" on public.group_messages for select to authenticated using (public.in_group(group_id) or public.is_admin());
create policy "send group messages" on public.group_messages for insert to authenticated with check (
  sender_id = auth.uid() and public.in_group(group_id)
  and role = (select p.role from public.profiles p where p.id = auth.uid()));

create policy "own reads" on public.reads for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------- Live updates ----------
-- New messages, homework and group changes reach open pages straight away.
alter publication supabase_realtime add table public.messages, public.group_messages, public.homework,
  public.groups, public.group_members, public.tutor_students, public.student_data;

-- ---------- Only admins make accounts ----------
-- (The same as admin-accounts.sql, which updates a database made before this was added.)
create table if not exists public.account_invites (
  username text not null,
  role text not null check (role in ('student', 'tutor')),
  display_name text not null check (length(display_name) between 1 and 40),
  created_at bigint not null default (extract(epoch from now()) * 1000)::bigint,
  primary key (username, role)
);
alter table public.account_invites enable row level security;
drop policy if exists "admin invites" on public.account_invites;
create policy "admin invites" on public.account_invites for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- New sign-ups need an invite; the name and role come from the invite, not from whoever signed up.
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
declare inv public.account_invites;
begin
  select * into inv from public.account_invites
   where username = lower(new.raw_user_meta_data ->> 'username') and role = new.raw_user_meta_data ->> 'role';
  if not found then raise exception 'Accounts can only be made by an admin'; end if;
  insert into public.profiles (id, username, display_name, role) values (new.id, inv.username, inv.display_name, inv.role);
  delete from public.account_invites where username = inv.username and role = inv.role;
  return new;
end $$;

-- Admins can put any student with any tutor (and take them off).
drop policy if exists "admin manages links" on public.tutor_students;
create policy "admin manages links" on public.tutor_students for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- A tutor removing a student now only takes the student off their own list; the account stays.
create or replace function public.delete_student(student uuid) returns text language plpgsql security definer set search_path = public as $$
begin
  if not public.teaches(student) then raise exception 'not your student'; end if;
  delete from tutor_students where tutor_id = auth.uid() and student_id = student;
  return 'unlinked';
end $$;

-- Admins delete accounts (a student's or a tutor's, with everything saved for it). Not their own.
create or replace function public.admin_delete_account(target uuid) returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'only an admin can delete accounts'; end if;
  if target = auth.uid() then raise exception 'you can''t delete your own account'; end if;
  delete from auth.users where id = target;
end $$;
revoke all on function public.admin_delete_account from public, anon;
grant execute on function public.admin_delete_account to authenticated;

-- The first admin's invite, so the admin account can be signed up before anyone can make invites.
insert into public.account_invites (username, role, display_name) values ('dayan', 'tutor', 'Dayan') on conflict do nothing;
