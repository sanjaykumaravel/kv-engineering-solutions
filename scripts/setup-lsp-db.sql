-- Create the lsp_tools table
create table if not exists public.lsp_tools (
    id serial primary key,
    name text not null,
    cmd text not null,
    url text not null,
    filename text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.lsp_tools enable row level security;

-- Drop existing policy if it exists and create new one
drop policy if exists "Allow public read access to lsp_tools" on public.lsp_tools;
create policy "Allow public read access to lsp_tools" on public.lsp_tools
    for select using (true);

-- Drop existing policy if it exists and create new one for storage
-- Note: The 'lsp' bucket should be created first in the Supabase Storage dashboard.
-- Once created, this policy allows anyone to download files from the lsp bucket.
drop policy if exists "Allow public read access to lsp" on storage.objects;
create policy "Allow public read access to lsp" on storage.objects
    for select using (bucket_id = 'lsp');
