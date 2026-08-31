"use client";

import { useCallback, useEffect, useState } from "react";
import {
  COLLECTION_FILTERS,
  type FilterId,
} from "./collection-data";
import FilterDropdown from "./FilterDropdown";

export type SelectedValues = Record<FilterId, string | null>;

const INITIAL_VALUES: SelectedValues = {
  look: null,
  formats: null,
  material: null,
};

type CollectionFilterProps = {
  initialValues?: Partial<SelectedValues>;
  onFilterChange?: (values: SelectedValues) => void;
};

export default function CollectionFilter({
  initialValues,
  onFilterChange,
}: CollectionFilterProps = {}) {
  const [openFilterId, setOpenFilterId] = useState<FilterId | null>(null);
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({
    ...INITIAL_VALUES,
    ...initialValues,
  });

  useEffect(() => {
    onFilterChange?.(selectedValues);
  }, [selectedValues, onFilterChange]);

  const handleToggle = useCallback((filterId: FilterId) => {
    setOpenFilterId((current) => (current === filterId ? null : filterId));
  }, []);

  const handleClose = useCallback(() => {
    setOpenFilterId(null);
  }, []);

  const handleSelect = useCallback((filterId: FilterId, value: string) => {
    setSelectedValues((current) => ({ ...current, [filterId]: value }));
    setOpenFilterId(null);
  }, []);

  const handleClear = useCallback(() => {
    setSelectedValues(INITIAL_VALUES);
    setOpenFilterId(null);
  }, []);

  const hasActiveFilters = Object.values(selectedValues).some(Boolean);

  return (
    <div className="overflow-visible rounded-sm border border-neutral-200 bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      <p className="text-center text-[13px] tracking-[0.08em] text-neutral-800 sm:text-sm">
        Find your collection
      </p>

      <div className="relative mt-7 grid grid-cols-1 gap-3 overflow-visible sm:mt-8 sm:grid-cols-3 sm:gap-5 lg:gap-8">
        {COLLECTION_FILTERS.map((filter) => (
          <FilterDropdown
            key={filter.id}
            placeholder={filter.label}
            options={filter.options}
            value={selectedValues[filter.id]}
            isOpen={openFilterId === filter.id}
            onToggle={() => handleToggle(filter.id)}
            onSelect={(value) => handleSelect(filter.id, value)}
            onClose={handleClose}
          />
        ))}
      </div>

      {hasActiveFilters ? (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleClear}
            className="text-[10px] min-h-[44px] min-w-[44px] font-semibold tracking-[0.24em] text-neutral-800 transition-colors hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
          >
            CLEAR FILTERS
          </button>
        </div>
      ) : null}
    </div>
  );
}
