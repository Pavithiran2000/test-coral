import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js Middleware
 * 
 * Runs before every request, allowing you to modify the request and response.
 * On Netlify, this is automatically deployed as an Edge Function for ultra-low latency.
 * 
 * Use cases:
 * - Security headers
 * - Request logging
 * - Authentication checks
 * - Path protection
 * - API versioning
 * - A/B testing
 * - Geo-based routing
 */

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  // =========================================================================
  // SECURITY HEADERS
  // =========================================================================
  // These headers are also set in netlify.toml but middleware gives more control
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // =========================================================================
  // REQUEST LOGGING (Development)
  // =========================================================================
  // Log requests in development for debugging
  if (process.env.NODE_ENV === "development") {
    console.log(`[${new Date().toISOString()}] ${request.method} ${pathname}`);
  }

  // =========================================================================
  // PATH PROTECTION
  // =========================================================================
  // Block access to sensitive paths
  const protectedPaths = ["/admin", "/_internal"];
  
  for (const protectedPath of protectedPaths) {
    if (pathname.startsWith(protectedPath)) {
      // Redirect to homepage for protected paths
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  // =========================================================================
  // API VERSIONING
  // =========================================================================
  // Add version header to API responses
  if (pathname.startsWith("/api")) {
    response.headers.set("X-API-Version", "1.0");
  }

  // =========================================================================
  // CACHE CONTROL FOR SPECIFIC ROUTES
  // =========================================================================
  // Add cache headers for specific content types
  if (pathname.startsWith("/data/")) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=3600, stale-while-revalidate=86400"
    );
  }

  return response;
}

/**
 * Matcher Configuration
 * 
 * Specify which paths the middleware should run on.
 * Using negative lookahead to exclude static files and images.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2)$).*)",
  ],
};
