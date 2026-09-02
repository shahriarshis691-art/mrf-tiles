"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Brand } from "@/lib/brands";

type FeaturedBrandCarouselProps = {
  brands: Brand[];
};

const AUTO_ADVANCE_MS = 3000;
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

    const slides = Array.from(track.children) as HTMLElement[];
    const nearestIndex = slides.reduce((currentNearest, slide, index) =>
      Math.abs(slide.offsetLeft - track.scrollLeft) <
      Math.abs(slides[currentNearest].offsetLeft - track.scrollLeft)
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
        className="grid grid-flow-col auto-cols-[84vw] grid-rows-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid-flow-row md:auto-cols-auto md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0 lg:gap-5"
      >
        {brands.map((brand, index) => (
          <div key={brand.slug} className="snap-start">
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
                    sizes="(max-width: 767px) 84vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>

                <div className="px-3 py-4 text-center sm:px-4 sm:py-5 md:px-6 md:py-6">
                  <h3 className="font-sans text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.12em] text-[#0F0F0F]">
                    {String(index + 1).padStart(2, "0")} / {brand.name}
                  </h3>
                  <span className="mx-auto mt-3 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14 md:mt-4" />
                  <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-500 sm:text-[10px] md:mt-4 md:text-[11px] md:tracking-[0.32em]">
                    {brand.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-700 transition-colors duration-300 group-hover:text-gold sm:text-[10px] md:mt-5 md:tracking-[0.32em]">
                    View Products
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
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
