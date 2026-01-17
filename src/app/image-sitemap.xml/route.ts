import { NextResponse } from "next/server";
import { galleryItems } from "@/data/gallery-images";

const SITE_URL = "https://www.ksvengineering.com";

/**
 * Escape XML special characters to prevent malformed XML
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Generate Google-compatible Image Sitemap XML
 * Reference: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 */
export async function GET() {
  // Generate URL entries from gallery items
  const urlEntries = galleryItems
    .map((item) => {
      const pageUrl = `${SITE_URL}/images/${item.slug}`;
      const imageUrl = `${SITE_URL}${item.url}`;
      
      return `  <url>
    <loc>${escapeXml(encodeURI(pageUrl))}</loc>
    <image:image>
      <image:loc>${escapeXml(encodeURI(imageUrl))}</image:loc>
      <image:title>${escapeXml(item.name)}</image:title>
      <image:caption>${escapeXml(item.description || item.alt)}</image:caption>
    </image:image>
  </url>`;
    })
    .join("\n");

  // Build complete XML document
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
