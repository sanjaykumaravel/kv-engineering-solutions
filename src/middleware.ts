import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED = ["IN", "DE"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // ✅ Skip Next.js internals and static paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/images") ||
    // pathname === "/blocked" ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  // ✅ Read environment toggle
  const isDev = process.env.NODE_ENV === "development";
  const enableGeoBlock = process.env.ENABLE_GEO_BLOCK === "true";

  // ✅ Detect country from request headers or Vercel geo
  let country =
    (req.geo?.country || req.headers.get("x-vercel-ip-country") || "").toUpperCase();

  // ✅ Optional: simulate country locally (only if enabled)
  if (isDev && enableGeoBlock && !country) {
    country = "IN"; // Simulate India
  }

  // ✅ If blocking is off locally, skip blocking
  if (isDev && !enableGeoBlock) {
    return NextResponse.next();
  }

  // ✅ Block logic
  if (BLOCKED.includes(country)) {
    const redirectUrl = new URL("/blocked", req.url);
    redirectUrl.searchParams.set("country", country);
    const response = NextResponse.redirect(redirectUrl);
    response.headers.set("x-middleware-debug", `blocked:${country}`);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
