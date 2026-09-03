"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { RoomCategory } from "@/lib/roomCategories";

type RoomCategoriesCarouselProps = {
  categories: RoomCategory[];
};

function getIsMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}

export default function RoomCategoriesCarousel({
  categories,
}: RoomCategoriesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const slides = Array.from(track.children) as HTMLElement[];
      const next = (activeIndex + 1) % categories.length;
      const slide = slides[next];
      if (!slide) return;

      track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
      setActive(next);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isMobile, activeIndex, categories.length]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children) as HTMLElement[];
    const nearest = slides.reduce((best, slide, idx) =>
      Math.abs(slide.offsetLeft - track.scrollLeft) < Math.abs(slides[best].offsetLeft - track.scrollLeft) ? idx : best,
      0,
    );
    setActive(nearest);
  };

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActive(index);
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="grid grid-flow-col auto-cols-[calc(50vw-8px)] grid-rows-1 gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid-flow-row md:auto-cols-auto md:grid-cols-6 md:overflow-visible md:pb-0 md:gap-4"
      >
        {categories.map((cat) => (
          <article key={cat.id} className="snap-center">
            <Link
              href={cat.path}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
              aria-label={`Explore ${cat.label} tiles collection`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 767px) calc(50vw - 8px), 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="absolute bottom-3 left-3 translate-y-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore →
                </span>
              </div>
              <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-sm">
                {cat.label}
              </p>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2 md:hidden" aria-label="Room category slides">
        {categories.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Show slide ${idx + 1}`}
            aria-current={idx === activeIndex ? "true" : undefined}
            onClick={() => scrollTo(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
              idx === activeIndex ? "w-5 bg-neutral-900" : "w-1.5 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
