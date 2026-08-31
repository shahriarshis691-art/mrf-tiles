"use client";

import Image from "next/image";
import { useState } from "react";
import { OUTLETS } from "./outlet-data";

const firstOutlet = OUTLETS[0];
const secondOutlet = OUTLETS[1];

const SLIDES = [
  {
    src: "/images/villa-dusk.jpg",
    alt: "MRF Galaxy villa at dusk, front elevation",
    objectPosition: "object-[12%_34%] sm:object-[16%_32%]",
  },
  {
    src: "/images/villa-sun.jpg",
    alt: "MRF Galaxy villa in daylight with landscaped garden",
    objectPosition: "object-center",
  },
  {
    src: "/images/projects/luxury-villa.jpg",
    alt: "Luxury villa terrace with premium porcelain surfaces",
    objectPosition: "object-[center_40%]",
  },
  {
    src: "/images/projects/modern-sanitary-space.jpg",
    alt: "Modern sanitary interior with premium fixtures and tile surfaces",
    objectPosition: "object-center",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(1);

  return (
    <section className="absolute inset-0 overflow-hidden bg-[#0b0d10]">
      <Image
        src={SLIDES[index].src}
        alt={SLIDES[index].alt}
        fill
        priority
        quality={100}
        sizes="100vw"
        className={`object-cover ${SLIDES[index].objectPosition}`}
      />

      <div className="pointer-events-none absolute inset-0 bg-[#0b1018]/20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07090d]/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#07080a] via-[#07080a]/95 to-transparent" />
      <div className="pointer-events-none absolute bottom-[12%] left-0 h-[42%] w-[40%] bg-gradient-to-r from-[#07090d]/75 via-[#07090d]/30 to-transparent" />

      <div className="absolute bottom-[38%] left-6 z-10 max-w-[34rem] sm:bottom-[28%] sm:left-10 lg:bottom-[25%] lg:left-[3.5rem]">
        <p className="font-sans text-[0.95rem] font-normal italic tracking-wide text-gold sm:text-[1.05rem]">
          Elegance in every detail
        </p>

        <h1 className="mt-3 font-sans text-[2.45rem] font-light uppercase leading-[0.96] tracking-[0.06em] text-white sm:text-[3.4rem] lg:text-[4.05rem]">
          GALAXY
          <br />
          COLLECTION
        </h1>

        <span className="mt-4 block h-px w-10 bg-gold" />

        <p className="mt-5 font-sans text-[0.95rem] font-light leading-snug text-white/90 sm:text-[1.05rem]">
          Designed for a
          <br />
          better tomorrow
        </p>
      </div>

      <ol className="absolute right-[5%] top-[46%] z-10 hidden -translate-y-1/2 flex-col gap-2.5 sm:flex">
        {SLIDES.map((_, i) => {
          const n = String(i + 1).padStart(2, "0");
          const active = i === index;
          return (
            <li key={n}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${n}`}
                aria-current={active ? "true" : undefined}
                className={`flex items-center gap-2 text-[12px] tracking-[0.16em] transition-colors ${
                  active ? "text-gold" : "text-white/35 hover:text-white/60"
                }`}
              >
                {n}
                {active ? (
                  <span className="h-px w-6 bg-gold" />
                ) : (
                  <span className="w-6" />
                )}
              </button>
            </li>
          );
        })}
      </ol>

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-7 sm:px-10 sm:pb-9 lg:px-14 lg:pb-11">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:justify-between lg:pr-[12%]">
          <div className="max-w-[17rem]">
            <h2 className="text-[11px] font-medium tracking-[0.22em] text-gold">
              First Branch
            </h2>
            <address className="mt-2.5 not-italic">
              <p className="text-[12px] font-light leading-relaxed text-white/70 sm:text-[13px]">
                {firstOutlet.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <a href={`tel:${firstOutlet.phone}`}>{firstOutlet.phoneDisplay}</a>
              </p>
            </address>
          </div>
          <div className="max-w-[17rem] sm:mr-[8%]">
            <h2 className="text-[11px] font-medium tracking-[0.22em] text-gold">
              Second Branch
            </h2>
            <address className="mt-2.5 not-italic">
              <p className="text-[12px] font-light leading-relaxed text-white/70 sm:text-[13px]">
                {secondOutlet.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <a href={`tel:${secondOutlet.phone}`}>
                  {secondOutlet.phoneDisplay}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
