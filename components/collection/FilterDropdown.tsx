"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

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
      className={`shrink-0 text-zinc-800 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const returnFocusOnCloseRef = useRef(false);
  const listboxId = useId();
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const displayText = value ?? placeholder;
  const hasSelection = value !== null;
  const selectedIndex = Math.max(
    options.findIndex((option) => option === value),
    0,
  );

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
        returnFocusOnCloseRef.current = true;
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

  useEffect(() => {
    if (isOpen && focusedIndex !== null) {
      const frame = window.requestAnimationFrame(() => {
        optionRefs.current[focusedIndex]?.focus();
      });
      return () => window.cancelAnimationFrame(frame);
    }

    if (!isOpen && returnFocusOnCloseRef.current) {
      returnFocusOnCloseRef.current = false;
      triggerRef.current?.focus();
    }
  }, [focusedIndex, isOpen]);

  const openWithKeyboard = (index: number) => {
    if (!isOpen) onToggle();
    setFocusedIndex(index);
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openWithKeyboard(value ? selectedIndex : 0);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      openWithKeyboard(value ? selectedIndex : options.length - 1);
    }
  };

  const handleOptionKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown") {
      nextIndex = (index + 1) % options.length;
    } else if (event.key === "ArrowUp") {
      nextIndex = (index - 1 + options.length) % options.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = options.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setFocusedIndex(nextIndex);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={listboxId}
        onClick={onToggle}
        onKeyDown={handleTriggerKeyDown}
        className={`group flex h-14 min-w-[44px] items-center justify-between border px-5 text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 ${
          isOpen
            ? "border-neutral-900 bg-white"
            : "border-neutral-200 bg-white hover:border-neutral-400"
        }`}
      >
        <span
          className={`truncate text-[11px] font-medium sm:text-xs ${
            hasSelection
              ? "tracking-[0.06em] text-neutral-900"
              : "tracking-[0.24em] text-neutral-600"
          }`}
        >
          {displayText}
        </span>
        <ChevronDownIcon open={isOpen} />
      </button>

      {isOpen ? (
        <ul
          id={listboxId}
          aria-label={`${placeholder} options`}
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-56 overflow-y-auto border border-zinc-200 bg-white"
        >
          {options.map((option, index) => {
            const selected = value === option;
            return (
              <li key={option}>
                <button
                  ref={(element) => {
                    optionRefs.current[index] = element;
                  }}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    returnFocusOnCloseRef.current = true;
                    onSelect(option);
                  }}
                  onKeyDown={(event) => handleOptionKeyDown(event, index)}
                  className={`flex min-h-[44px] w-full items-center px-4 py-3 text-left text-[12px] tracking-[0.04em] transition-colors duration-150 outline-none focus-visible:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-900 sm:text-[13px] ${
                    selected
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                  }`}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
