import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Countries to block
const BLOCKED = ["IN", "DE"];

export function middleware(req: NextRequest) {
  try {
    const url = req.nextUrl.clone();
    const pathname = url.pathname;

    // ✅ Exclude static files, API routes, blocked page, sitemap.xml, etc.
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/static") ||
      pathname.startsWith("/images") ||
      pathname === "/blocked" ||
      pathname === "/sitemap.xml" ||   // <-- Exclude sitemap
      pathname === "/robots.txt"       // <-- Optional: exclude robots.txt too
    ) {
      return NextResponse.next();
    }

    // Detect country from Vercel header
    let country = (req.headers.get("x-vercel-ip-country") || "").toUpperCase();

    // DEV / local preview fallback
    if (!country && process.env.NODE_ENV === "development") {
      country = "IN"; // simulate blocked country locally
    }

    if (BLOCKED.includes(country)) {
      const redirectUrl = new URL("/blocked", req.url);
      redirectUrl.searchParams.set("country", country);
      const resp = NextResponse.redirect(redirectUrl);

      // Debug header to verify middleware ran
      resp.headers.set("x-middleware-debug", `blocked:${country}`);
      return resp;
    }
  } catch (err) {
    console.error("middleware geo check failed:", err);
    return NextResponse.next();
  }
}

// ✅ Apply middleware to all paths except Next internals (matcher stays the same)
export const config = {
  matcher: "/:path*",
};
