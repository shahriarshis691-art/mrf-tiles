import type { MetadataRoute } from "next";
import { CATALOG_PRODUCTS } from "@/components/collection/collection-data";
import { PROJECTS } from "@/components/projects/projects-data";
import { SANITARY_CATEGORIES } from "@/components/sanitary/sanitary-data";
import { getAllBrandSlugs } from "@/lib/brands";
import { getAllSanitaryBrandSlugs } from "@/lib/sanitaryBrands";
import { SANITARY_PRODUCTS } from "@/lib/sanitaryData";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const pages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/calculator`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/collection`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/projects`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/sanitary`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${base}/brands`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${base}/sanitary/brands`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  for (const product of CATALOG_PRODUCTS) {
    pages.push({
      url: `${base}/collection/${product.id}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const project of PROJECTS) {
    pages.push({
      url: `${base}/projects/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const category of SANITARY_CATEGORIES) {
    pages.push({
      url: `${base}/sanitary/${category.id}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const product of SANITARY_PRODUCTS) {
    pages.push({
      url: `${base}/sanitary/${product.category}/${product.id}`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const slug of getAllBrandSlugs()) {
    pages.push({
      url: `${base}/brands/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const slug of getAllSanitaryBrandSlugs()) {
    pages.push({
      url: `${base}/sanitary/brands/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return pages;
}
