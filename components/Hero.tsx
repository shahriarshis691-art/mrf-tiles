"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contactHref } from "@/lib/contact";

const SLIDES = [
  {
    src: "/images/hero-display-centre.jpg",
    alt: "Luxury tiles display centre with large-format porcelain slabs",
    objectPosition: "object-center",
  },
  {
    src: "/images/projects/architectural-tile-experience.jpg",
    alt: "Architectural showroom corridor with premium porcelain flooring",
    objectPosition: "object-[center_40%]",
  },
  {
    src: "/images/projects/luxury-villa.jpg",
    alt: "Luxury villa terrace with premium porcelain surfaces",
    objectPosition: "object-[center_40%]",
  },
  {
    src: "/images/villa-sun.jpg",
    alt: "Galaxy villa in daylight with landscaped garden",
    objectPosition: "object-center",
  },
  {
    src: "/images/projects/modern-sanitary-space.jpg",
    alt: "Modern sanitary interior with premium fixtures and tile surfaces",
    objectPosition: "object-center",
  },
];

const FEATURE_CARDS = [
  {
    title: "Galaxy Showroom",
    description:
      "Visit our luxury tiles display centre and experience the full Galaxy collection.",
    href: contactHref("Galaxy Showroom"),
    icon: ShowroomIcon,
  },
  {
    title: "Galaxy Collection",
    description:
      "Explore premium porcelain surfaces curated for residential and commercial interiors.",
    href: "/collection",
    icon: CollectionIcon,
  },
  {
    title: "Galaxy Projects",
    description:
      "Discover completed architectural spaces crafted with Galaxy tiles and sanitary fittings.",
    href: "/projects",
    icon: ProjectsIcon,
  },
];

function ShowroomIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-7h4v7" />
    </svg>
  );
}

function CollectionIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="14" />
      <path d="M3 18h18" />
      <path d="M8 22h8" />
    </svg>
  );
}

function SlideIndicators({
  index,
  onSelect,
  className,
}: {
  index: number;
  onSelect: (i: number) => void;
  className?: string;
}) {
  return (
    <ol className={className} aria-label="Hero slides">
      {SLIDES.map((_, i) => {
        const n = String(i + 1).padStart(2, "0");
        const active = i === index;
        return (
          <li key={n}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Show slide ${n}`}
              aria-current={active ? "true" : undefined}
              className={`flex items-center gap-3 text-[12px] tracking-[0.18em] transition-colors ${
                active ? "text-gold" : "text-white/70 hover:text-white"
              }`}
            >
              {n}
              <span
                className={`h-px transition-all duration-300 ${
                  active ? "w-8 bg-gold" : "w-8 bg-transparent"
                }`}
              />
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  return (
    <section className="relative isolate flex min-h-svh flex-col bg-zinc-950">
      <div className="absolute inset-0 overflow-hidden">
        {SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={i === index ? slide.alt : ""}
            fill
            priority={i === 0}
            quality={i === 0 ? 90 : 75}
            sizes="100vw"
            aria-hidden={i !== index}
            className={`object-cover transition-opacity duration-700 ${slide.objectPosition} ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35"
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1440px] flex-1 flex-col">
        <div className="relative flex flex-1 items-center px-6 pt-24 sm:px-10 lg:px-14">
          <div className="max-w-[46rem]">
            <h1 className="font-sans text-[clamp(2.4rem,7vw,6.1rem)] font-bold uppercase leading-[0.88] tracking-[0.04em] text-white">
              GALAXY
              <br />
              TILES
            </h1>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center border border-gold px-7 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-white transition-colors duration-300 hover:bg-gold hover:text-zinc-950 sm:mt-9 sm:px-9 sm:py-4 sm:text-[12px]"
            >
              VISIT SHOWROOM
            </Link>
          </div>
        </div>

        <SlideIndicators
          index={index}
          onSelect={setIndex}
          className="flex gap-5 px-6 pb-2 sm:absolute sm:right-10 sm:top-[42%] sm:-translate-y-1/2 sm:flex-col sm:gap-3 sm:px-0 sm:pb-0 lg:right-14"
        />

        <div className="grid shrink-0 grid-cols-1 gap-3 px-6 pb-6 sm:px-10 md:grid-cols-3 md:gap-4 lg:px-14 lg:pb-8">
          {FEATURE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="flex flex-col border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md sm:px-6 sm:py-5"
              >
                <span className="text-gold">
                  <Icon />
                </span>
                <h2 className="mt-3 text-[14px] font-semibold tracking-[0.08em] text-white sm:text-[15px]">
                  {card.title}
                </h2>
                <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-white/90 sm:text-[13px]">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex text-[11px] font-semibold tracking-[0.18em] text-gold transition-colors hover:text-white"
                >
                  Learn more about {card.title}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
