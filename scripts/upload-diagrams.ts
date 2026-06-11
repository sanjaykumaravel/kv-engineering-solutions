import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { galleryItems } from '../src/data/gallery-images';

// Load .env file manually to support running via raw node/tsx
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const index = trimmed.indexOf('=');
      if (index !== -1) {
        const key = trimmed.substring(0, index).trim();
        const value = trimmed.substring(index + 1).trim().replace(/^['"]|['"]$/g, '');
        process.env[key] = value;
      }
    }
  });
}

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl) {
  console.error('Error: SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL is not set in .env');
  process.exit(1);
}

if (!supabaseKey || supabaseKey.startsWith('YOUR_')) {
  console.error('Error: Please set SUPABASE_SERVICE_ROLE_KEY or SUPABASE_KEY in your .env file.');
  console.error('To write to the database and upload to storage, the service_role key is required.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const DIAGRAMS_DIR = path.join(process.cwd(), 'public', 'diagrams');
const BUCKET_NAME = 'diagrams';

async function uploadAll() {
  console.log('Starting migration to Supabase...');
  console.log(`Supabase URL: ${supabaseUrl}`);

  // 1. Ensure storage bucket exists
  console.log(`Checking storage bucket "${BUCKET_NAME}"...`);
  const { data: bucketData, error: bucketError } = await supabase.storage.getBucket(BUCKET_NAME);
  
  if (bucketError) {
    console.log(`Bucket "${BUCKET_NAME}" not found or inaccessible. Attempting to create it...`);
    const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    });
    if (createError) {
      console.error('Failed to create bucket:', createError.message);
      console.error('Please make sure you are using the service_role key (SUPABASE_KEY).');
      process.exit(1);
    }
    console.log(`Successfully created public bucket "${BUCKET_NAME}".`);
  } else {
    console.log(`Bucket "${BUCKET_NAME}" already exists.`);
  }

  // 2. Loop through and upload all items
  let successCount = 0;
  let errorCount = 0;

  for (const item of galleryItems) {
    const filename = path.basename(item.url);
    const localFilePath = path.join(DIAGRAMS_DIR, filename);

    if (!fs.existsSync(localFilePath)) {
      console.error(`[ERROR] Local file not found for item #${item.index}: ${localFilePath}`);
      errorCount++;
      continue;
    }

    console.log(`\n[${item.index}/${galleryItems.length}] Uploading ${filename}...`);

    // Upload to Storage
    const fileBody = fs.readFileSync(localFilePath);
    let mimeType = 'image/jpeg';
    if (filename.toLowerCase().endsWith('.png')) mimeType = 'image/png';
    else if (filename.toLowerCase().endsWith('.webp')) mimeType = 'image/webp';
    else if (filename.toLowerCase().endsWith('.gif')) mimeType = 'image/gif';

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filename, fileBody, {
        contentType: mimeType,
        upsert: true,
      });

    if (uploadError) {
      console.error(`[ERROR] Failed to upload image ${filename}:`, uploadError.message);
      errorCount++;
      continue;
    }

    // Get Public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filename);

    console.log(`Uploaded! Public URL: ${publicUrl}`);

    // Insert metadata into the table
    console.log(`Upserting database record for "${item.name}"...`);
    const { error: dbError } = await supabase
      .from('gallery_items')
      .upsert({
        index: item.index,
        name: item.name,
        slug: item.slug,
        url: publicUrl,
        alt: item.alt,
        description: item.description,
        location: item.location || null,
        material: item.material || null,
        specifications: item.specifications || null,
        detailed_content: item.detailedContent || null,
      });

    if (dbError) {
      console.error(`[ERROR] Failed to save metadata for ${item.name}:`, dbError.message);
      errorCount++;
    } else {
      console.log(`[SUCCESS] Saved database record for "${item.name}".`);
      successCount++;
    }
  }

  console.log(`\n=== Migration Summary ===`);
  console.log(`Successfully migrated: ${successCount} items`);
  console.log(`Errors encountered: ${errorCount} items`);
  if (errorCount === 0) {
    console.log('All items migrated successfully!');
  } else {
    console.warn('Migration finished with some errors. Please inspect the log.');
  }
}

uploadAll().catch(err => {
  console.error('Unhandled execution error:', err);
});
