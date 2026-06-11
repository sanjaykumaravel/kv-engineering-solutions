import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Load .env file manually
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

const SITE_URL = 'https://www.ksvengineering.com';
const OUTPUT_FILE = 'public/sitemap-images.xml';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

async function generateImageSitemap() {
  console.log(`Fetching gallery data from Supabase...`);

  try {
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase URL or Key not found in environment.');
    }
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data: galleryItems, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('index', { ascending: true });

    if (error) {
      throw error;
    }

    if (!galleryItems || galleryItems.length === 0) {
      console.warn('No items found in database!');
      return;
    }

    console.log(`Found ${galleryItems.length} gallery items.`);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    galleryItems.forEach((item) => {
      const pageUrl = `${SITE_URL}/images/${item.slug}`;
      const imageUrl = item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`;
      
      // Escape special characters for XML
      const escapeXml = (unsafe) => (unsafe || '').replace(/[<>&'"]/g, (c) => {
        switch (c) {
          case '<': return '&lt;';
          case '>': return '&gt;';
          case '&': return '&amp;';
          case '\'': return '&apos;';
          case '"': return '&quot;';
        }
      });

      const title = escapeXml(item.name || '');
      const caption = escapeXml(item.description || item.alt || '');

      xml += `  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${title}</image:title>
      <image:caption>${caption}</image:caption>
    </image:image>
  </url>
`;
    });

    xml += `</urlset>`;

    fs.writeFileSync(OUTPUT_FILE, xml);
    console.log(`✅ Sitemap generated successfully at ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('❌ Error generating image sitemap:', error);
    process.exit(1);
  }
}

generateImageSitemap();
