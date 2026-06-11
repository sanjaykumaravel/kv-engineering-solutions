-- Create the gallery_items table
create table if not exists public.gallery_items (
    index integer primary key,
    name text not null,
    slug text not null unique,
    url text not null,
    alt text not null,
    description text not null,
    location text,
    material text,
    specifications text[],
    detailed_content text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.gallery_items enable row level security;

-- Drop existing policy if it exists and create new one
drop policy if exists "Allow public read access" on public.gallery_items;
create policy "Allow public read access" on public.gallery_items
    for select using (true);

-- Drop existing policy if it exists and create new one for storage
-- Note: The 'diagrams' bucket should be created first in the Supabase Storage dashboard.
-- Once created, this policy allows anyone to read files from the diagrams bucket.
drop policy if exists "Allow public read access to diagrams" on storage.objects;
create policy "Allow public read access to diagrams" on storage.objects
    for select using (bucket_id = 'diagrams');
