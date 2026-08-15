import type { MetadataRoute } from "next";
import { SITE_URL, INDEXABLE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) {
    // Demo build. The practice has a real public site; a second indexed copy of
    // the same content would compete with her own domain.
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
  };
}
