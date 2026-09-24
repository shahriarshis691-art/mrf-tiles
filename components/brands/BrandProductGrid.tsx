"use client";

import { useState } from "react";
import BrandProductCard from "./BrandProductCard";
import type { BrandProduct } from "@/lib/brands";

const filters = ["All", "Wall", "Floor", "Sanitary", "Fittings"] as const;
type Filter = (typeof filters)[number];

function getProductCategory(product: BrandProduct, brandTagline: string): Exclude<Filter, "All"> {
  const searchable = [product.title, product.category, product.description, ...product.specifications]
    .join(" ")
    .toLowerCase();
  const tagline = brandTagline.toLowerCase();

  if (tagline.includes("fitting") || tagline.includes("brassware")) return "Fittings";
  if (tagline.includes("sanitary") || /basin|bathtub|water closet|wc|vanity|toilet/.test(searchable)) return "Sanitary";
  if (/wall|feature wall|cladding/.test(searchable)) return "Wall";
  return "Floor";
}

type BrandProductGridProps = {
  products: BrandProduct[];
  brandName: string;
  brandTagline: string;
};

export default function BrandProductGrid({ products, brandName, brandTagline }: BrandProductGridProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<"newest" | "popular">("newest");
  const categorized = products.map((product, index) => ({
    product,
    index,
    category: getProductCategory(product, brandTagline),
  }));
  const visible = categorized
    .filter((item) => filter === "All" || item.category === filter)
    .sort((a, b) => sort === "newest" ? b.index - a.index : a.index - b.index);

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-5 border-y border-neutral-200 py-5 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
          {filters.map((item) => {
            const count = item === "All" ? products.length : categorized.filter((product) => product.category === item).length;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={`min-h-11 border px-4 py-2 text-sm transition-colors ${filter === item ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-900"}`}
              >
                {item} <span className="ml-1 opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
        <label className="flex items-center gap-3 text-sm text-neutral-600">
          Sort by
          <select value={sort} onChange={(event) => setSort(event.target.value as "newest" | "popular")} className="min-h-11 border border-neutral-300 bg-white px-3 text-neutral-900">
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
          </select>
        </label>
      </div>

      <p className="mb-5 text-sm text-neutral-600" role="status" aria-live="polite">
        Showing {visible.length} of {products.length} items
      </p>
      {visible.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
          {visible.map(({ product }) => (
            <BrandProductCard key={product.id} product={product} brandName={brandName} />
          ))}
        </div>
      ) : (
        <p className="border border-dashed border-neutral-300 px-6 py-12 text-center text-sm text-neutral-600">
          No {filter.toLowerCase()} products are currently listed for this brand.
        </p>
      )}
    </div>
  );
}