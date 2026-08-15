/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ships a self-contained server bundle. Note: .next/standalone does NOT
  // include .next/static or public/ — deploy.sh copies both explicitly.
  output: "standalone",

  // Don't advertise the framework version.
  poweredByHeader: false,

  images: {
    // AVIF first, WebP fallback. Requires `sharp` at runtime — without it Next
    // logs an error and silently serves the ORIGINAL file at full weight
    // (a 640px request returned the untouched 554 KB source before this).
    formats: ["image/avif", "image/webp"],
    // The site's real breakpoints; the default list requests sizes nothing uses.
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
