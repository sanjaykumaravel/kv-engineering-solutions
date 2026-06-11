-- Create the contact_submissions table to collect contact form submissions
create table if not exists public.contact_submissions (
    id serial primary key,
    name text not null,
    email text not null,
    company text,
    message text not null,
    submitted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.contact_submissions enable row level security;

-- Policy to allow anonymous/public users to submit the contact form
drop policy if exists "Allow public insert access to contact_submissions" on public.contact_submissions;
create policy "Allow public insert access to contact_submissions" on public.contact_submissions
    for insert with check (true);

-- Policy to allow authenticated (admin) users to read all contact submissions
drop policy if exists "Allow authenticated select access to contact_submissions" on public.contact_submissions;
create policy "Allow authenticated select access to contact_submissions" on public.contact_submissions
    for select using (auth.role() = 'authenticated');
