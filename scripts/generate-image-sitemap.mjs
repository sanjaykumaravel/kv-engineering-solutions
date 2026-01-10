import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.ksvengineering.com';
const DATA_FILE = 'src/data/gallery-images.ts';
const OUTPUT_FILE = 'public/sitemap-images.xml';

async function generateImageSitemap() {
  console.log(`Reading gallery data from ${DATA_FILE}...`);

  try {
    const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
    
    // 🛡️ Robust Parsing of TypeScript Data File
    // We strip the "export const galleryItems =" part and eval the array.
    // This works because the file is a simple object literal without complex TS syntax.
    const dataContent = fileContent
      .replace(/export const galleryItems =/, '') // Remove export
      .replace(/;$/, '') // Remove trailing semicolon
      .trim();

    // specific tweak: if there are any TS types (like ': GalleryItem[]'), remove them
    // But we know the file structure is simple.
    
    // Use Function constructor to safely evaluate the array literal
    const galleryItems = new Function(`return ${dataContent}`)();

    if (!galleryItems || galleryItems.length === 0) {
      console.warn('No items found in gallery data!');
      return;
    }

    console.log(`Found ${galleryItems.length} gallery items.`);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    galleryItems.forEach((item) => {
      const pageUrl = `${SITE_URL}/images/${item.slug}`;
      const imageUrl = `${SITE_URL}${item.url}`;
      
      // Escape special characters for XML
      const escapeXml = (unsafe) => unsafe.replace(/[<>&'"]/g, (c) => {
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
      const alt = escapeXml(item.alt || '');

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
