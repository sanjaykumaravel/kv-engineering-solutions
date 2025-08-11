import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/functions';

// This config ensures the middleware runs on all paths except for static files,
// images, the favicon, and the /blocked page itself to avoid redirect loops.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|blocked).*)'],
};

// Define the list of countries that are allowed to access the website.
const ALLOWED_COUNTRIES = ['AE', 'SG']; // Allow UAE and Singapore

export function middleware(request: NextRequest) {
  // Extract the country code from the incoming request.
  const { country } = geolocation(request);

  // Check if the user's country is NOT in the allowed list.
  // This condition is true if the country is null or not 'AE' or 'SG'.
  if (!country || !ALLOWED_COUNTRIES.includes(country)) {
    // If the user is from a restricted country, rewrite the request
    // to show the content of the /blocked page.
    const url = request.nextUrl.clone();
    url.pathname = '/blocked';
    return NextResponse.rewrite(url);
  }

  // If the user's country is in the allowed list, continue to the requested page.
  return NextResponse.next();
}