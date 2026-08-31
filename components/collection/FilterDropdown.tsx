"use client";

import { useEffect, useId, useRef } from "react";

type FilterDropdownProps = {
  placeholder: string;
  options: readonly string[];
  value: string | null;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
  onClose: () => void;
};

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-white/45 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M3 5.5L7 9.5L11 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FilterDropdown({
  placeholder,
  options,
  value,
  isOpen,
  onToggle,
  onSelect,
  onClose,
}: FilterDropdownProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const displayText = value ?? placeholder;
  const hasSelection = value !== null;

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        onClick={onToggle}
        className={`group flex h-14 w-full items-center justify-between border px-5 text-left transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-gold/40 ${
          isOpen
            ? "border-gold/40 bg-[#101010]"
            : "border-white/12 bg-[#080808] hover:border-gold/30 hover:bg-[#0c0c0c]"
        }`}
      >
        <span
          className={`truncate text-[11px] font-medium sm:text-xs ${
            hasSelection
              ? "tracking-[0.06em] text-white"
              : "tracking-[0.24em] text-white/85"
          }`}
        >
          {displayText}
        </span>
        <ChevronDownIcon open={isOpen} />
      </button>

      <ul
        id={listboxId}
        role="listbox"
        aria-label={placeholder}
        className={`absolute left-0 right-0 top-[calc(100%+6px)] z-40 max-h-56 overflow-y-auto border border-white/10 bg-[#101010] shadow-[0_16px_48px_rgba(0,0,0,0.65)] transition-all duration-200 ease-out ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        {options.map((option) => {
          const selected = value === option;
          return (
            <li key={option} role="none">
              <button
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => onSelect(option)}
                className={`flex w-full items-center px-4 py-3 text-left text-[12px] font-light tracking-[0.04em] transition-colors duration-150 outline-none focus-visible:bg-gold/10 sm:text-[13px] ${
                  selected
                    ? "bg-gold/10 text-gold"
                    : "text-white/75 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
