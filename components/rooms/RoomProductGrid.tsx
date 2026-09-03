"use client";

import { useMemo, useState } from "react";
import RoomProductCard from "./RoomProductCard";
import {
  ROOM_FILTER_OPTIONS,
  type RoomFilterId,
  type RoomProduct,
} from "./rooms-data";

type RoomProductGridProps = {
  products: RoomProduct[];
  roomLabel: string;
};

type SelectedFilters = Record<RoomFilterId, string | null>;

const EMPTY_FILTERS: SelectedFilters = {
  finish: null,
  size: null,
  material: null,
  color: null,
};

const FILTER_LABELS: Record<RoomFilterId, string> = {
  finish: "Finish",
  size: "Size",
  material: "Material",
  color: "Color",
};

function FilterChip({
  label,
  value,
  onClear,
}: {
  label: string;
  value: string;
  onClear: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClear}
      className="inline-flex items-center gap-2 border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-neutral-800"
    >
      <span>
        {label}: {value}
      </span>
      <span aria-hidden="true">×</span>
    </button>
  );
}

export default function RoomProductGrid({
  products,
  roomLabel,
}: RoomProductGridProps) {
  const [filters, setFilters] = useState<SelectedFilters>(EMPTY_FILTERS);
  const [openFilter, setOpenFilter] = useState<RoomFilterId | null>(null);

  const setFilter = (id: RoomFilterId, value: string | null) => {
    setFilters((prev) => ({ ...prev, [id]: value }));
    setOpenFilter(null);
  };

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (filters.finish && product.finish !== filters.finish) return false;
      if (filters.size && product.size !== filters.size) return false;
      if (filters.material && product.material !== filters.material) return false;
      if (filters.color && product.color !== filters.color) return false;
      return true;
    });
  }, [products, filters]);

  const activeChips = (Object.entries(filters) as [RoomFilterId, string | null][])
    .filter((entry): entry is [RoomFilterId, string] => entry[1] !== null);

  return (
    <div>
      <div className="sticky top-20 z-10 -mx-6 border-y border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14">
        <div className="flex flex-wrap items-center gap-2">
          {(Object.keys(ROOM_FILTER_OPTIONS) as RoomFilterId[]).map((filterId) => {
            const isActive = filters[filterId] !== null;
            const isOpen = openFilter === filterId;
            const value = filters[filterId];

            return (
              <div key={filterId} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenFilter(isOpen ? null : filterId)}
                  className={`inline-flex min-h-[40px] items-center gap-2 border px-4 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-300 bg-white text-neutral-900 hover:border-neutral-900"
                  }`}
                  aria-expanded={isOpen}
                  aria-haspopup="listbox"
                >
                  <span>{FILTER_LABELS[filterId]}</span>
                  {value ? <span className="opacity-80">· {value}</span> : null}
                  <span aria-hidden="true" className="text-[10px]">▾</span>
                </button>

                {isOpen ? (
                  <ul
                    role="listbox"
                    className="absolute left-0 top-[calc(100%+6px)] z-20 max-h-72 w-56 overflow-y-auto border border-neutral-200 bg-white shadow-lg"
                  >
                    {ROOM_FILTER_OPTIONS[filterId].map((option) => (
                      <li key={option}>
                        <button
                          type="button"
                          onClick={() => setFilter(filterId, option)}
                          className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.12em] transition-colors hover:bg-neutral-50 ${
                            value === option ? "text-neutral-900" : "text-neutral-700"
                          }`}
                        >
                          <span>{option}</span>
                          {value === option ? (
                            <span aria-hidden="true" className="text-neutral-900">✓</span>
                          ) : null}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}

          {activeChips.length > 0 ? (
            <div className="ml-auto flex flex-wrap items-center gap-2">
              {activeChips.map(([id, value]) => (
                <FilterChip
                  key={id}
                  label={FILTER_LABELS[id]}
                  value={value}
                  onClear={() => setFilter(id, null)}
                />
              ))}
              <button
                type="button"
                onClick={() => setFilters(EMPTY_FILTERS)}
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
              >
                Clear all
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex items-baseline justify-between">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600">
          Showing <span className="text-neutral-900">{filtered.length}</span> of {products.length} tiles
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <RoomProductCard
              key={product.id}
              product={product}
              roomLabel={roomLabel}
            />
          ))}
        </div>
      ) : (
        <div className="mt-16 border border-dashed border-neutral-300 px-6 py-16 text-center">
          <p className="font-serif text-lg uppercase tracking-[0.18em] text-neutral-900">
            No tiles match these filters
          </p>
          <p className="mt-3 text-[12px] text-neutral-600">
            Try removing a filter or contact our team for bespoke recommendations.
          </p>
          <button
            type="button"
            onClick={() => setFilters(EMPTY_FILTERS)}
            className="mt-6 inline-flex min-h-[40px] items-center border border-neutral-900 px-6 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
