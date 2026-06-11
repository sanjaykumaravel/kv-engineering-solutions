-- 1. Allow authenticated users to perform all operations on gallery_items table
drop policy if exists "Allow authenticated insert/update on gallery_items" on public.gallery_items;
create policy "Allow authenticated insert/update on gallery_items" on public.gallery_items
    for all to authenticated using (true) with check (true);

-- 2. Allow authenticated users to perform all operations on lsp_tools table
drop policy if exists "Allow authenticated insert/update on lsp_tools" on public.lsp_tools;
create policy "Allow authenticated insert/update on lsp_tools" on public.lsp_tools
    for all to authenticated using (true) with check (true);

-- 3. Allow authenticated users to upload and manage files in the diagrams bucket
drop policy if exists "Allow authenticated uploads to diagrams" on storage.objects;
create policy "Allow authenticated uploads to diagrams" on storage.objects
    for all to authenticated using (bucket_id = 'diagrams') with check (bucket_id = 'diagrams');

-- 4. Allow authenticated users to upload and manage files in the lsp bucket
drop policy if exists "Allow authenticated uploads to lsp" on storage.objects;
create policy "Allow authenticated uploads to lsp" on storage.objects
    for all to authenticated using (bucket_id = 'lsp') with check (bucket_id = 'lsp');
