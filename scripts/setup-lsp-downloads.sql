-- Create the lsp_downloads table to track downloads and emails
create table if not exists public.lsp_downloads (
    id serial primary key,
    email text not null,
    tool_name text not null,
    downloaded_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.lsp_downloads enable row level security;

-- Policy to allow anonymous/public users to insert new download logs
drop policy if exists "Allow public insert access to lsp_downloads" on public.lsp_downloads;
create policy "Allow public insert access to lsp_downloads" on public.lsp_downloads
    for insert with check (true);

-- Policy to allow authenticated (admin) users to read all download logs
drop policy if exists "Allow authenticated select access to lsp_downloads" on public.lsp_downloads;
create policy "Allow authenticated select access to lsp_downloads" on public.lsp_downloads
    for select using (auth.role() = 'authenticated');
