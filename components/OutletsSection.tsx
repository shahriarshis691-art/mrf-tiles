"use client";

import Image from "next/image";
import { useState } from "react";
import { OUTLETS, SHOWROOM_GALLERY_SLIDES } from "./outlet-data";
import ScrollReveal from "@/components/ScrollReveal";

function NavArrow({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-controls="showroom-gallery"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-[#0F0F0F] transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
    >
      <span className="text-lg leading-none" aria-hidden="true">
        {direction === "prev" ? "‹" : "›"}
      </span>
    </button>
  );
}

function BranchBlock({
  outlet,
  index,
}: {
  outlet: (typeof OUTLETS)[number];
  index: number;
}) {
  return (
    <article className="flex gap-4 sm:gap-5">
      <span
        className="w-px shrink-0 bg-neutral-300"
        aria-hidden="true"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
          Branch {index + 1}
        </p>
        <p className="mt-2 text-[13px] font-semibold leading-snug text-neutral-900 sm:text-sm">
          {outlet.locationLine}
        </p>
        <p className="mt-2 text-[11px] tracking-[0.06em] text-neutral-600">
          Branch Incharge:{" "}
          <a
            href={`tel:${outlet.phone}`}
            className="font-medium text-neutral-900 transition-colors hover:text-neutral-600"
          >
            {outlet.phoneDisplay}
          </a>
        </p>
        <p className="mt-3 inline-block border border-neutral-200 bg-white px-2.5 py-1 text-[9px] font-medium tracking-[0.18em] text-neutral-700">
          {outlet.tag}
        </p>
      </div>
    </article>
  );
}

export default function OutletsSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = SHOWROOM_GALLERY_SLIDES.length;
  const currentPair = SHOWROOM_GALLERY_SLIDES[slideIndex];

  const goPrev = () =>
    setSlideIndex((i) => (i - 1 + totalSlides) % totalSlides);
  const goNext = () => setSlideIndex((i) => (i + 1) % totalSlides);

  return (
    <section
      id="outlets"
      aria-labelledby="outlets-heading"
      className="relative overflow-hidden bg-[#F9F9FB] px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          <ScrollReveal variant="slideInLeft" className="flex flex-col justify-between lg:col-span-5 lg:min-h-[32rem]">
            <div>
              <header>
                <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
                  01 / Outlets
                </p>
                <p className="mt-2 text-[10px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
                  MRF Galaxy Tiles &amp; Sanitary
                </p>
                <h2
                  id="outlets-heading"
                  className="mt-6 max-w-md text-[clamp(1.75rem,3.2vw,2.65rem)] font-normal leading-[1.12] tracking-[-0.01em] text-[#0F0F0F]"
                >
                  A Space That{" "}
                  <span className="font-bold">Inspires</span> Your{" "}
                  <span className="font-bold">Luxury Home</span>
                </h2>
              </header>

              <div className="mt-12 lg:mt-0">
                <p className="max-w-md text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
                  Experience our curated collections in realistic showroom
                  environments, designed to visualize grandeur for today and
                  enduring elegance for tomorrow.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <NavArrow direction="prev" onClick={goPrev} label="Previous showroom images" />
                  <NavArrow direction="next" onClick={goNext} label="Next showroom images" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideInRight" delay={0.15} className="lg:col-span-7">
            <div className="flex flex-col gap-8 sm:gap-10">
              {OUTLETS.map((outlet, index) => (
                <BranchBlock key={outlet.name} outlet={outlet} index={index} />
              ))}
            </div>

             <div
               id="showroom-gallery"
               role="region"
               aria-label="Showroom gallery"
               aria-roledescription="carousel"
               className="mt-10 grid grid-cols-2 gap-4 md:gap-6 sm:mt-12"
             >
               <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
                 Showing showroom image set {slideIndex + 1} of {totalSlides}.
               </p>
               {currentPair.map((image) => (
                 <figure
                   key={image.src}
                   className="relative aspect-[4/5] overflow-hidden w-full h-full bg-neutral-100 border border-neutral-200/60"
                 >
                   <Image
                     src={image.src}
                     alt={image.alt}
                     fill
                     quality={90}
                     sizes="(max-width: 768px) 45vw, 28vw"
                     className="object-cover object-center"
                   />
                 </figure>
               ))}
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
