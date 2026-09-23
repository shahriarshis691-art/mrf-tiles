"use client";

import { useEffect, useState } from "react";
import type { SanitaryBrand } from "@/lib/sanitaryBrands";
import SanitaryBrandCard from "./SanitaryBrandCard";

type SanitaryBrandCarouselProps = {
  brands: SanitaryBrand[];
};

const AUTO_ADVANCE_MS = 3000;

export default function SanitaryBrandCarousel({
  brands,
}: SanitaryBrandCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsPerView = 2;
  const maxIndex = Math.max(0, brands.length - cardsPerView);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const updateMobileState = () => setIsMobile(mobileQuery.matches);
    updateMobileState();

    mobileQuery.addEventListener("change", updateMobileState);
    return () => mobileQuery.removeEventListener("change", updateMobileState);
  }, []);

  useEffect(() => {
    if (!isMobile || brands.length <= 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % (maxIndex + 1));
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [brands.length, isMobile, maxIndex]);

  return (
    <div className="mt-14 sm:mt-16">
      <div className="overflow-hidden">
        <div
          className={`${isMobile ? "flex transition-transform duration-500 ease-out" : "md:grid md:grid-cols-4 md:gap-6"}`}
          style={
            isMobile
              ? { transform: `translateX(-${activeIndex * 50}%)` }
              : undefined
          }
        >
          {brands.map((brand) => (
            <div
              key={brand.slug}
              className={isMobile ? "w-1/2 flex-none px-1.5" : "w-full md:w-auto"}
            >
              <SanitaryBrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2 md:hidden" aria-label="Sanitary brand slides">
        {brands.map((brand, index) => (
          <button
            key={brand.slug}
            type="button"
            aria-label={`Show ${brand.name}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => {
              setActiveIndex(Math.min(index, maxIndex));
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
