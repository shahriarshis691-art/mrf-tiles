import type { MetadataRoute } from "next";
import { CATALOG_PRODUCTS } from "@/components/collection/collection-data";
import { PROJECTS } from "@/components/projects/projects-data";
import { SANITARY_CATEGORIES } from "@/components/sanitary/sanitary-data";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/collection`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/sanitary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const product of CATALOG_PRODUCTS) {
    pages.push({
      url: `${base}/collection/${product.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const project of PROJECTS) {
    pages.push({
      url: `${base}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const category of SANITARY_CATEGORIES) {
    pages.push({
      url: `${base}/sanitary/${category.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return pages;
}
