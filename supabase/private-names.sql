-- Update for an existing tela database: names and usernames are only visible to people who need them.
-- Run once in the SQL Editor. (Safe to run again; it keeps all existing accounts and data. schema.sql already
-- includes this for new projects.)
--
-- Before this, everyone signed in could read every profile, so any student could list every other student.
-- Now someone can see a profile when it's:
--   * their own;
--   * one of their students (for a tutor) or one of their tutors (for a student);
--   * someone in a group chat they're in (its tutor or its members);
--   * anyone at all, for an admin.

create or replace function public.can_see_profile(p uuid) returns boolean language sql stable security definer set search_path = public as $$
  select p = auth.uid()
      or public.is_admin()
      or exists (select 1 from tutor_students
                 where (tutor_id = auth.uid() and student_id = p) or (student_id = auth.uid() and tutor_id = p))
      or exists (select 1 from group_members m where m.student_id = p and public.in_group(m.group_id))
      or exists (select 1 from groups g where g.tutor_id = p and public.in_group(g.id))
$$;

drop policy if exists "read profiles" on public.profiles;
create policy "read profiles" on public.profiles for select to authenticated using (public.can_see_profile(id));
