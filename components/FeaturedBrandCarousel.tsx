"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Brand } from "@/lib/brands";

type FeaturedBrandCarouselProps = {
  brands: Brand[];
};

const AUTO_ADVANCE_MS = 3500;
const INTERACTION_PAUSE_MS = 6000;

export default function FeaturedBrandCarousel({
  brands,
}: FeaturedBrandCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;

    track.scrollTo({ left: slide.offsetLeft, behavior });
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

      const slides = Array.from(track.children) as HTMLElement[];
      const currentIndex = slides.reduce((nearestIndex, slide, index) =>
        Math.abs(slide.offsetLeft - track.scrollLeft) <
        Math.abs(slides[nearestIndex].offsetLeft - track.scrollLeft)
          ? index
          : nearestIndex,
        0,
      );

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

    const slides = Array.from(track.children) as HTMLElement[];
    const nearestIndex = slides.reduce((currentNearest, slide, index) =>
      Math.abs(slide.offsetLeft - track.scrollLeft) <
      Math.abs(slides[currentNearest].offsetLeft - track.scrollLeft)
        ? index
        : currentNearest,
      0,
    );

    setActiveIndex(nearestIndex);
  };

  return (
    <div>
      <div
        ref={trackRef}
        onPointerDown={pauseForInteraction}
        onScroll={handleScroll}
        className="grid grid-flow-col auto-cols-[calc(50vw-8px)] grid-rows-1 gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid-flow-row md:auto-cols-auto md:grid-cols-4 md:overflow-visible md:pb-0 md:gap-4"
      >
        {brands.map((brand) => (
          <div key={brand.slug} className="snap-center">
            <Link
              href={brand.href}
              aria-label={`Explore ${brand.name} brand products`}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1E8]"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={brand.cardImage}
                    alt={brand.cardAlt}
                    fill
                    quality={90}
                    sizes="(max-width: 767px) calc(50vw - 8px), 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-center text-xs font-semibold uppercase tracking-widest text-neutral-950 md:text-sm">
                  {brand.name}
                </p>
              </article>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2 md:hidden" aria-label="Featured brand slides">
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
