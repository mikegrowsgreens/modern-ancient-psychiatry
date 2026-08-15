import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/content/shared";
import { SITE_URL } from "@/lib/site";

// Generated from NAV_ITEMS so it cannot drift out of sync with the real routes.
export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_ITEMS.map((item) => ({
    url: new URL(item.href, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
