import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ==========================================================================
  // IMAGE OPTIMIZATION (Netlify Image CDN Integration)
  // ==========================================================================
  // Netlify automatically handles next/image with Netlify Image CDN
  // No custom loader needed - it's built-in for Next.js 13.5+
  images: {
    // Define allowed remote image domains
    remotePatterns: [
      // Add external image sources if needed
      // {
      //   protocol: "https",
      //   hostname: "images.unsplash.com",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "cdn.example.com",
      //   pathname: "/**",
      // },
    ],
    // Image formats for optimization (Netlify handles this automatically)
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for srcset generation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize layout shift with blur placeholder
    // dangerouslyAllowSVG: true, // Enable if using SVG images
  },

  // ==========================================================================
  // REDIRECTS (Alternative to netlify.toml redirects)
  // ==========================================================================
  async redirects() {
    return [
      // Example redirects - uncomment and modify as needed
      // {
      //   source: "/old-path",
      //   destination: "/new-path",
      //   permanent: true, // 308 permanent redirect
      // },
    ];
  },

  // ==========================================================================
  // REWRITES (Proxy requests without URL change)
  // ==========================================================================
  async rewrites() {
    return [
      // Example rewrites - uncomment and modify as needed
      // {
      //   source: "/api/proxy/:path*",
      //   destination: "https://external-api.com/:path*",
      // },
    ];
  },

  // ==========================================================================
  // HEADERS (Alternative to netlify.toml headers)
  // ==========================================================================
  async headers() {
    return [
      // Security headers for all routes
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Cache headers for static data files
      {
        source: "/data/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // ==========================================================================
  // EXPERIMENTAL FEATURES
  // ==========================================================================
  experimental: {
    // Enable optimized package imports for better tree-shaking
    optimizePackageImports: ["@mui/material", "@mui/icons-material"],
  },

  // ==========================================================================
  // WEBPACK CONFIGURATION (if needed)
  // ==========================================================================
  // webpack: (config, { isServer }) => {
  //   // Custom webpack config here
  //   return config;
  // },
};

export default nextConfig;
