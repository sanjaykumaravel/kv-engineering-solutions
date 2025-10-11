// middleware.js
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Countries to block
const BLOCKED = ["IN", "DE"];

export function middleware(req: NextRequest) {
  try {
    const url = req.nextUrl.clone();
    const pathname = url.pathname;

    // Skip API, Next internals, static assets, or the blocked page itself
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/static") ||
      pathname === "/blocked" ||
      pathname.startsWith("/images")
    ) {
      return;
    }

    // Detect country from Vercel header
    const country = (req.headers.get("x-vercel-ip-country") || "").toUpperCase();
    if (!country) return;

    if (BLOCKED.includes(country)) {
      const redirectUrl = new URL("/blocked", req.url);
      redirectUrl.searchParams.set("country", country);
      const resp = NextResponse.redirect(redirectUrl);
      resp.headers.set("x-middleware-debug", `blocked:${country}`);
      return resp;
    }
  } catch (err) {
    console.error("middleware geo check failed:", err);
    return;
  }
}

export const config = {
  matcher: "/:path*",
};
