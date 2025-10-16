import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

function collectPagesFromDir(dir: string, baseUrl = ""): RouteItem[] {
  const results: RouteItem[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // if directory contains page.tsx or page.jsx or route.tsx create an entry
      const pageTsx = path.join(full, "page.tsx");
      const pageTs = path.join(full, "page.jsx");
      if (fs.existsSync(pageTsx) || fs.existsSync(pageTs)) {
        const relPath = path.relative(process.cwd(), fs.existsSync(pageTsx) ? pageTsx : pageTs);
        const loc = path.join(baseUrl, entry.name).replace(/\\/g, "/");
        const priority = priorityForPath(entry.name);
        const changefreq = changefreqForPriority(priority);
        results.push({ loc, priority: priority.toFixed(1), changefreq, filePath: relPath });
      }

      // Recurse into nested directories to find nested pages
      results.push(...collectPagesFromDir(full, path.join(baseUrl, entry.name)));
    } else {
      // top-level page file (e.g., src/app/page.tsx)
      if (/^page\.(tsx|jsx)$/.test(entry.name)) {
        const relPath = path.relative(process.cwd(), full);
        const loc = baseUrl.replace(/\\/g, "/");
        const priority = priorityForPath(loc);
        const changefreq = changefreqForPriority(priority);
        results.push({ loc, priority: priority.toFixed(1), changefreq, filePath: relPath });
      }
    }
  }

  return results;
}

export async function GET() {
  // collect from src/app and src/pages
  const pages: RouteItem[] = [];
  pages.push(...collectPagesFromDir(path.join(process.cwd(), "src", "app"), ""));
  pages.push(...collectPagesFromDir(path.join(process.cwd(), "src", "pages"), ""));

  // dedupe by loc
  const map = new Map<string, RouteItem>();
  for (const p of pages) {
    if (!map.has(p.loc)) map.set(p.loc, p);
  }

  const urlset = Array.from(map.values())
    .map((r) => {
      let lastmod = undefined;
      if (r.filePath) {
        try {
          const full = path.join(process.cwd(), r.filePath);
          const stat = fs.statSync(full);
          lastmod = formatDate(stat.mtime);
        } catch (e) {
          // ignore
        }
      }

      return `  <url>
    <loc>${SITE_URL}/${r.loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
