"use client";

import { useCallback, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CollectionFilter, {
  type SelectedValues,
} from "./CollectionFilter";
import CollectionCatalogCard from "./CollectionCatalogCard";
import { CATALOG_PRODUCTS, type FilterId } from "./collection-data";

const FILTER_PARAM_MAP: Record<string, FilterId> = {
  look: "look",
  formats: "formats",
  material: "material",
};

function getInitialValues(searchParams: URLSearchParams): Partial<SelectedValues> {
  const initial: Partial<SelectedValues> = {};

  for (const [param, filterId] of Object.entries(FILTER_PARAM_MAP)) {
    const value = searchParams.get(param);
    if (value) {
      initial[filterId] = value;
    }
  }

  return initial;
}

function matchesFilters(
  product: (typeof CATALOG_PRODUCTS)[number],
  filters: SelectedValues,
) {
  if (filters.look && product.look !== filters.look) return false;
  if (filters.formats && product.format !== filters.formats) return false;
  if (filters.material && product.material !== filters.material) return false;
  return true;
}

function toQuery(values: SelectedValues) {
  const params = new URLSearchParams();
  if (values.look) params.set("look", values.look);
  if (values.formats) params.set("formats", values.formats);
  if (values.material) params.set("material", values.material);
  return params.toString();
}

export default function CollectionCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialValues = useMemo(
    () => getInitialValues(searchParams),
    [searchParams],
  );

  const [activeFilters, setActiveFilters] = useState<SelectedValues>({
    look: initialValues.look ?? null,
    formats: initialValues.formats ?? null,
    material: initialValues.material ?? null,
  });

  const handleFilterChange = useCallback(
    (values: SelectedValues) => {
      setActiveFilters(values);
      const qs = toQuery(values);
      if (qs === searchParams.toString()) return;
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const filteredProducts = useMemo(
    () => CATALOG_PRODUCTS.filter((product) => matchesFilters(product, activeFilters)),
    [activeFilters],
  );

  const hasActiveFilters = Object.values(activeFilters).some(Boolean);

  return (
    <>
      <CollectionFilter
        initialValues={initialValues}
        onFilterChange={handleFilterChange}
      />

      <div className="mt-10 flex items-center justify-between sm:mt-12">
        <p className="text-[11px] tracking-[0.16em] text-zinc-800">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "COLLECTION" : "COLLECTIONS"}
          {hasActiveFilters ? " FOUND" : ""}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-5">
          {filteredProducts.map((product, index) => (
            <CollectionCatalogCard
              key={product.id}
              product={product}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        <div className="mt-16 border border-zinc-200 bg-white px-8 py-16 text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-gold">
            NO MATCHES
          </p>
          <p className="mt-4 text-[13px] text-zinc-800">
            Try adjusting your filters to discover more collections.
          </p>
        </div>
      )}
    </>
  );
}
