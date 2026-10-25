-- Update for an existing tela database: makes the tutor "ilham" an admin as well as "dayan". Run once in the SQL Editor.
-- (Safe to run again; it keeps all existing accounts and data. schema.sql already includes this for new projects.)

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'tutor' and username in ('dayan', 'ilham'))
$$;
