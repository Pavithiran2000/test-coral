/**
 * Netlify Edge Function: Geo-based Routing
 *
 * This edge function demonstrates geographic-based URL rewriting.
 * It runs at CDN edge locations for ultra-low latency.
 *
 * Use cases:
 * - Show region-specific content
 * - Geo-targeted promotions
 * - Language detection
 * - Country-specific legal requirements
 *
 * NOTE: Edge functions run in Deno runtime, not Node.js.
 * This file uses JavaScript to avoid TypeScript compilation issues.
 *
 * @see https://docs.netlify.com/edge-functions/overview/
 */

export default async function handler(request, context) {
  // Get geographic information from the request
  const geo = context.geo;
  const country = geo?.country?.code || "UNKNOWN";
  const city = geo?.city || "Unknown City";

  // Example: Rewrite to country-specific page
  // You can customize this logic based on your needs

  // Log geographic info (visible in Netlify logs)
  console.log(`Request from: ${city}, ${country}`);

  // Example routing logic:
  // - UAE visitors get Arabic content option
  // - Other visitors get default content

  // You can modify the response, add headers, or rewrite the URL
  // For this example, we'll just pass through with geo headers

  const response = await context.next();

  // Add geo information as headers (useful for client-side logic)
  response.headers.set("X-Geo-Country", country);
  response.headers.set("X-Geo-City", city);

  return response;
}

// Configuration for this edge function
export const config = {
  // Specify which paths this edge function should handle
  // Uncomment and modify as needed:
  // path: "/geo/*"

  // Or exclude specific paths:
  // excludedPath: ["/_next/*", "/api/*"]

  // For now, this is a template - configure path when you want to use it
  path: "/edge-geo",
};
