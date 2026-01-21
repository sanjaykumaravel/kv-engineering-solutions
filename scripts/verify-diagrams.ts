
import fs from 'fs';
import path from 'path';
import { galleryItems } from '../src/data/gallery-images';

const DIAGRAMS_DIR = path.join(process.cwd(), 'public', 'diagrams');

function verifyDiagrams() {
    console.log('Verifying diagrams...');

    // 1. Get all files in public/diagrams
    if (!fs.existsSync(DIAGRAMS_DIR)) {
        console.error(`Error: Directory not found: ${DIAGRAMS_DIR}`);
        return;
    }

    const files = fs.readdirSync(DIAGRAMS_DIR).filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    });

    console.log(`Found ${files.length} images in public/diagrams.`);

    // 2. Get all configured URLs
    const configuredUrls = new Set(galleryItems.map(item => item.url));
    const configuredSlugs = new Set(galleryItems.map(item => item.slug));

    console.log(`Found ${galleryItems.length} items in gallery-images.ts.`);

    // 3. Check for untracked files
    const untrackedFiles = files.filter(file => !configuredUrls.has(`/diagrams/${file}`));

    if (untrackedFiles.length > 0) {
        console.error(`\n[WARNING] The following ${untrackedFiles.length} files are NOT tracked in gallery-images.ts:`);
        untrackedFiles.forEach(file => console.log(` - ${file}`));
    } else {
        console.log('\n[SUCCESS] All diagram files are tracked in gallery-images.ts.');
    }

    // 4. Check for broken links (configured but missing)
    const brokenLinks = galleryItems.filter(item => {
        const filePath = path.join(process.cwd(), 'public', item.url);
        return !fs.existsSync(filePath);
    });

    if (brokenLinks.length > 0) {
        console.error(`\n[ERROR] The following ${brokenLinks.length} configured items point to missing files:`);
        brokenLinks.forEach(item => console.log(` - URL: ${item.url} (Slug: ${item.slug})`));
    } else {
        console.log('[SUCCESS] All gallery items point to valid files.');
    }
    
    // 5. Check for duplicate slugs
    const slugCounts = galleryItems.reduce((acc, item) => {
        acc[item.slug] = (acc[item.slug] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
    
    const duplicateSlugs = Object.entries(slugCounts).filter(([_, count]) => count > 1);
    
    if (duplicateSlugs.length > 0) {
        console.error(`\n[ERROR] Duplicate slugs found:`);
        duplicateSlugs.forEach(([slug, count]) => console.log(` - ${slug}: ${count} times`));
    } else {
         console.log('[SUCCESS] All slugs are unique.');
    }

}

verifyDiagrams();
