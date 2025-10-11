import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Countries to block (two-letter ISO codes)
const BLOCKED = ["IN", "DE"];

export function middleware(req: NextRequest) {
  try {
    const url = req.nextUrl.clone();
    const pathname = url.pathname;

    // Don't rewrite API, Next internals, static assets, or the blocked page itself
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/static") ||
      pathname === "/blocked" ||
      pathname.startsWith("/images")
    ) {
      return;
    }

  // Best-effort to detect country: read Vercel header 'x-vercel-ip-country'
  // (If you deploy on Vercel this header will be present). Avoid using req.geo to prevent typing issues.
  const country = (req.headers.get("x-vercel-ip-country") || "").toString();
    if (!country) return;

    const upper = country.toString().toUpperCase();
    if (BLOCKED.includes(upper)) {
      // redirect visitors from blocked countries to /blocked so the URL shows the blocked page
      const redirectUrl = new URL("/blocked", req.url);
      redirectUrl.searchParams.set("country", upper);
      return NextResponse.redirect(redirectUrl);
    }
  } catch (err) {
    // If anything goes wrong, don't block; allow normal routing
    console.error("middleware geo check failed:", err);
    return;
  }
}

export const config = {
  // Run middleware for all paths (we early-return for assets/api/etc.)
  matcher: "/:path*",
};
