"use client";

import { useState } from "react";
import BrandProductCard from "./BrandProductCard";
import type { BrandProduct } from "@/lib/brands";
import { SHARIF_PRICE_CHECKED_ON } from "@/lib/sharif-fittings";

const categories = ["All", "Basin", "Bath & Shower", "Kitchen"] as const;

export default function SharifProductGrid({ products }: { products: BrandProduct[] }) {
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState("featured");
  const visible = products.filter((product) => category === "All" || product.category === category);
  if (sort !== "featured") visible.sort((a, b) => sort === "price-low" ? (a.priceBdt ?? Infinity) - (b.priceBdt ?? Infinity) : (b.priceBdt ?? -Infinity) - (a.priceBdt ?? -Infinity));

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-5 border-y border-neutral-200 py-5 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} aria-controls="sharif-products" onClick={() => setCategory(item)} className={`min-h-11 border px-4 py-2 text-sm transition-colors ${category === item ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-900"}`}>
              {item} <span className="ml-1 opacity-70">({item === "All" ? products.length : products.filter((p) => p.category === item).length})</span>
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-sm text-neutral-600">
          Sort by
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="min-h-11 border border-neutral-300 bg-white px-3 text-neutral-900">
            <option value="featured">Collection order</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>
      <p className="mb-5 text-sm text-neutral-600" role="status" aria-live="polite">Showing {visible.length} of {products.length} fittings</p>
      <div id="sharif-products" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((product) => <BrandProductCard key={product.id} product={product} brandName="Sharif Fittings" />)}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-neutral-600">
        Approximate Bangladesh retail prices, checked <time dateTime={SHARIF_PRICE_CHECKED_ON}>8 September 2026</time>. Final showroom prices and availability may vary. Images are illustrative and do not represent exact models. Please confirm finish, dimensions and included accessories before ordering.
      </p>
    </div>
  );
}
