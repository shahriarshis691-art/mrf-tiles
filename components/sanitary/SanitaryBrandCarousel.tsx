"use client";

import { useEffect, useRef, useState } from "react";
import type { SanitaryBrand } from "@/lib/sanitaryBrands";
import SanitaryBrandCard from "./SanitaryBrandCard";

type SanitaryBrandCarouselProps = {
  brands: SanitaryBrand[];
};

const AUTO_ADVANCE_MS = 3600;
const INTERACTION_PAUSE_MS = 6000;

export default function SanitaryBrandCarousel({
  brands,
}: SanitaryBrandCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;

    if (!track || !card) return;

    track.scrollTo({ left: card.offsetLeft, behavior });
    setActiveIndex(index);
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const advance = () => {
      if (!mobileQuery.matches || reducedMotionQuery.matches || Date.now() < pauseUntilRef.current) {
        return;
      }

      const track = trackRef.current;
      if (!track) return;

      const cards = Array.from(track.children) as HTMLElement[];
      const currentIndex = cards.reduce((nearestIndex, card, index) =>
        Math.abs(card.offsetLeft - track.scrollLeft) <
        Math.abs(cards[nearestIndex].offsetLeft - track.scrollLeft)
          ? index
          : nearestIndex,
      0);

      scrollToIndex((currentIndex + 1) % brands.length);
    };

    const interval = window.setInterval(advance, AUTO_ADVANCE_MS);
    return () => window.clearInterval(interval);
  }, [brands.length]);

  const pauseForInteraction = () => {
    pauseUntilRef.current = Date.now() + INTERACTION_PAUSE_MS;
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const nearestIndex = cards.reduce((currentNearest, card, index) =>
      Math.abs(card.offsetLeft - track.scrollLeft) <
      Math.abs(cards[currentNearest].offsetLeft - track.scrollLeft)
        ? index
        : currentNearest,
    0);

    setActiveIndex(nearestIndex);
  };

  return (
    <div>
      <div
        ref={trackRef}
        onPointerDown={pauseForInteraction}
        onScroll={handleScroll}
        className="mt-14 grid grid-flow-col auto-cols-[calc(100vw-2rem)] grid-rows-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-16 sm:gap-3 lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:gap-6"
      >
        {brands.map((brand) => (
          <div key={brand.slug} className="snap-center">
            <SanitaryBrandCard brand={brand} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2 md:hidden" aria-label="Sanitary brand slides">
        {brands.map((brand, index) => (
          <button
            key={brand.slug}
            type="button"
            aria-label={`Show ${brand.name}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => {
              pauseForInteraction();
              scrollToIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
              index === activeIndex ? "w-5 bg-neutral-900" : "w-1.5 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
