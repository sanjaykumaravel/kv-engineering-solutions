import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const SITE_URL = 'https://www.ksvengineering.com';
const IMAGES_DIR = 'public/diagrams';
const OUTPUT_FILE = 'public/sitemap-images.xml';

// Helper to format filename into a title
function formatTitle(filename) {
  const name = path.parse(filename).name;
  // Replace hyphens/underscores with spaces, remove file extensions if somehow present
  let title = name.replace(/[-_]/g, ' ');
  // Capitalize first letter of each word
  title = title.replace(/\b\w/g, (l) => l.toUpperCase());
  return title;
}

async function generateImageSitemap() {
  console.log(`Scanning ${IMAGES_DIR} for images...`);

  try {
    // Find all images in the directory
    // We use cwd: process.cwd() to ensure we're looking from the root
    const images = await glob(`${IMAGES_DIR}/**/*.{jpg,jpeg,png,webp,gif,svg}`, {
      ignore: '**/private/**', // Example ignore
      windowsPathsNoEscape: true, // Handle Windows paths correctly
    });

    if (images.length === 0) {
      console.warn('No images found in public/diagrams!');
      return;
    }

    console.log(`Found ${images.length} images.`);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    // We'll group all images under a single URL for the gallery page, 
    // OR if these images belong to specific pages, we should map them.
    // Since the request implies these are "in /public/diagrams" and we want them indexable,
    // and they likely appear on a gallery page or similar, we can associate them with the home page 
    // or a specific gallery page. 
    // For now, I will associate them with the root URL or a /gallery URL if it existed.
    // However, Google recommends associating images with the page they are on.
    // Assuming they might be used on the home page or a specific project page.
    // Let's list them all under the home page for now, or create a separate entry for each if they were individual pages.
    // But usually, image sitemaps group images by the page they appear on.
    // Since I don't know exactly which page *uses* which image, I will assume they are all potentially on the main site.
    // A common pattern for "gallery" folders is to list them under the main URL or a gallery URL.
    // Let's use the root URL for now as a safe default, or better, if there's a specific page like /projects/diagrams.
    // The user didn't specify a page, just "discoverable".
    // I'll put them all under the root URL for maximum discoverability, or split them if there are too many (limit is 1000 images per URL).
    
    // Actually, it's better to just list the images.
    // But the sitemap format requires <url> <loc>page_url</loc> <image:image>...</image:image> </url>
    
    // Let's assume they are all on the home page for now, or I can create a generic entry.
    // To be safe and follow spec, I'll add them to the root URL entry.
    
    xml += `  <url>
    <loc>${SITE_URL}</loc>
`;

    images.forEach((imagePath) => {
      // Convert local path to public URL
      // public/diagrams/foo.jpg -> https://www.ksvengineering.com/diagrams/foo.jpg
      // We need to strip 'public/' from the start
      const relativePath = imagePath.replace(/^public[\\/]/, '').replace(/\\/g, '/');
      const imageUrl = `${SITE_URL}/${relativePath}`;
      const title = formatTitle(path.basename(imagePath));

      xml += `    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${title}</image:title>
      <image:caption>${title}</image:caption>
    </image:image>
`;
    });

    xml += `  </url>
</urlset>`;

    fs.writeFileSync(OUTPUT_FILE, xml);
    console.log(`Sitemap generated at ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('Error generating image sitemap:', error);
    process.exit(1);
  }
}

generateImageSitemap();
