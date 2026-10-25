-- Update for an existing tela database: only admins can make accounts. Run once in the SQL Editor.
-- (Safe to run again; it keeps all existing accounts and data. schema.sql already includes this for new projects.)
--
-- Supabase Auth still lets anyone with the page's public key call "sign up", so the database checks every
-- new account against an invite: the admin page writes an invite (username, role, name) and then signs the
-- account up; an account without a matching invite is refused.

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
