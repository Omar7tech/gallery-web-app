import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPaths = [
    "",
    "/about",
    "/collections",
    "/new-arrivals",
    "/best-sellers",
    "/materials",
    "/craftsmanship",
    "/sustainability",
    "/interior-design-service",
    "/projects",
    "/lookbook",
    "/blog",
    "/buying-guide",
    "/furniture-care-guide",
    "/faq",
    "/testimonials",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...collections.map((c) => ({
      url: `${base}/collections/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...products.map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
