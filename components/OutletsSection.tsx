"use client";

import Image from "next/image";
import { useState } from "react";
import { OUTLETS, SHOWROOM_GALLERY_SLIDES } from "./outlet-data";

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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-400/80 bg-white/60 text-zinc-900 transition-colors hover:border-zinc-900 hover:bg-white"
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
        className="w-px shrink-0 bg-gold/70"
        aria-hidden="true"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium tracking-[0.24em] text-zinc-600">
          BRANCH {index + 1}
        </p>
        <p className="mt-2 text-[13px] font-semibold leading-snug text-zinc-900 sm:text-sm">
          {outlet.locationLine}
        </p>
        <p className="mt-2 text-[11px] tracking-[0.06em] text-zinc-700">
          Branch Incharge:{" "}
          <a
            href={`tel:${outlet.phone}`}
            className="font-medium text-zinc-900 transition-colors hover:text-gold"
          >
            {outlet.phoneDisplay}
          </a>
        </p>
        <p className="mt-3 inline-block border border-zinc-300/80 bg-white/50 px-2.5 py-1 text-[9px] font-medium tracking-[0.18em] text-zinc-800">
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
      className="relative overflow-hidden bg-stone-200 px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
      style={{
        backgroundImage: [
          "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.55) 0%, transparent 42%)",
          "radial-gradient(circle at 82% 78%, rgba(0,0,0,0.04) 0%, transparent 38%)",
          "linear-gradient(165deg, rgba(255,255,255,0.12) 0%, transparent 48%)",
        ].join(", "),
      }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          <div className="flex flex-col justify-between lg:col-span-5 lg:min-h-[32rem]">
            <header>
              <p className="text-[11px] font-medium tracking-[0.22em] text-zinc-700">
                01/ Outlets
              </p>
              <p className="mt-2 text-[10px] font-medium tracking-[0.28em] text-zinc-600">
                GALAXY TILES &amp; CERAMIC
              </p>
              <h2
                id="outlets-heading"
                className="mt-6 max-w-md text-[clamp(1.75rem,3.2vw,2.65rem)] font-normal leading-[1.12] tracking-[-0.01em] text-zinc-900"
              >
                A Space That{" "}
                <span className="font-bold">Inspires</span> Your{" "}
                <span className="font-bold">Luxury Home</span>
              </h2>
            </header>

            <div className="mt-12 lg:mt-0">
              <p className="max-w-md text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
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

          <div className="lg:col-span-7">
            <div className="flex flex-col gap-8 sm:gap-10">
              {OUTLETS.map((outlet, index) => (
                <BranchBlock key={outlet.name} outlet={outlet} index={index} />
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4">
              {currentPair.map((image) => (
                <figure
                  key={image.src}
                  className="relative aspect-[4/5] overflow-hidden border border-zinc-300/70 bg-stone-300/40 sm:aspect-[5/6]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 45vw, 28vw"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
