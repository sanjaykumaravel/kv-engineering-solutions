import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PRIMARY_ROUTES } from "../../../next-seo.config";

const SITE_URL = "https://www.ksvengineering.com";

type RouteItem = {
  loc: string;
  priority: string;
  changefreq: string;
  filePath?: string;
};

function formatDate(date: Date) {
  return date.toISOString();
}

function changefreqForPriority(p: number) {
  if (p >= 0.9) return "daily";
  if (p >= 0.8) return "weekly";
  if (p >= 0.6) return "monthly";
  return "yearly";
}

function priorityForPath(loc: string) {
  if (loc === "") return 1.0;
  if (loc === "services") return 0.9;
  if (loc === "about") return 0.8;
  if (loc === "contact") return 0.6;
  return 0.5;
}

// Escape XML special characters
function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function collectPagesFromDir(dir: string, baseUrl = ""): RouteItem[] {
  const results: RouteItem[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const pageTsx = path.join(full, "page.tsx");
      const pageJsx = path.join(full, "page.jsx");
      if (fs.existsSync(pageTsx) || fs.existsSync(pageJsx)) {
        const relPath = path.relative(
          process.cwd(),
          fs.existsSync(pageTsx) ? pageTsx : pageJsx
        );
        const loc = path.join(baseUrl, entry.name).replace(/\\/g, "/");
        const priority = priorityForPath(entry.name);
        const changefreq = changefreqForPriority(priority);
        results.push({
          loc,
          priority: priority.toFixed(1),
          changefreq,
          filePath: relPath,
        });
      }
      results.push(...collectPagesFromDir(full, path.join(baseUrl, entry.name)));
    } else if (/^page\.(tsx|jsx)$/.test(entry.name)) {
      const relPath = path.relative(process.cwd(), full);
      const loc = baseUrl.replace(/\\/g, "/");
      const priority = priorityForPath(loc);
      const changefreq = changefreqForPriority(priority);
      results.push({
        loc,
        priority: priority.toFixed(1),
        changefreq,
        filePath: relPath,
      });
    }
  }
  return results;
}

function collectImagesFromPublic(dirPath: string, webPath = "/"): string[] {
  if (!fs.existsSync(dirPath)) return [];
  const images: string[] = [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dirPath, entry.name);
    const urlPath = path.join(webPath, entry.name).replace(/\\/g, "/");
    if (entry.isDirectory()) {
      images.push(...collectImagesFromPublic(full, urlPath));
    } else if (/\.(jpg|jpeg|png|gif|webp|avif)$/i.test(entry.name)) {
      images.push(urlPath);
    }
  }
  return images;
}

export async function GET() {
  const pages: RouteItem[] = [];
  pages.push(...collectPagesFromDir(path.join(process.cwd(), "src", "app"), ""));
  pages.push(...collectPagesFromDir(path.join(process.cwd(), "src", "pages"), ""));

  // Ensure homepage is present with empty loc
  if (!pages.find((p) => p.loc === "")) {
    pages.push({ loc: "", priority: "1.0", changefreq: "daily" });
  }

  const map = new Map<string, RouteItem>();
  // Add PRIMARY_ROUTES with higher priority if provided
  if (Array.isArray(PRIMARY_ROUTES)) {
    for (const r of PRIMARY_ROUTES) {
      const loc = r.replace(/^\//, "");
      if (!map.has(loc)) {
        const priority = priorityForPath(loc);
        map.set(loc, { loc, priority: priority.toFixed(1), changefreq: changefreqForPriority(priority) });
      }
    }
  }
  for (const p of pages) if (!map.has(p.loc)) map.set(p.loc, p);

  const trenchesDir = path.join(process.cwd(), "public", "trenches");
  const trenchImages = collectImagesFromPublic(trenchesDir, "/trenches");

  const urlset = Array.from(map.values())
    .filter((r) => r.loc !== "blocked" && r.loc !== "/blocked")
    .map((r) => {
      let lastmod: string | undefined;
      if (r.filePath) {
        try {
          const full = path.join(process.cwd(), r.filePath);
          const stat = fs.statSync(full);
          lastmod = formatDate(stat.mtime);
        } catch {}
      }

      // Build canonical URL (avoid double slashes)
      const pathPart = r.loc === "" ? "" : `/${r.loc}`;
      const encodedLoc = encodeURI(`${SITE_URL}${pathPart}`.replace(/\/\\/g, "/"));
      return `  <url>
    <loc>${escapeXml(encodedLoc)}</loc>
    ${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ""}
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`;
    })
    .join("\n");

  const imageEntries = trenchImages
    .map((imgPath) => {
      const encodedUrl = encodeURI(SITE_URL + imgPath);
      const safeUrl = escapeXml(encodedUrl);
      const title = escapeXml(
        path.basename(imgPath, path.extname(imgPath))
      );
      return `  <url>
    <loc>${safeUrl}</loc>
    <image:image>
      <image:loc>${safeUrl}</image:loc>
      <image:title>${title}</image:title>
    </image:image>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urlset}\n${imageEntries}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
