"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { contactHref } from "@/lib/contact";

const SLIDES = [
  {
    src: "/images/hero-tile-showroom.jpg",
    alt: "Luxury porcelain slab display showroom with architectural lighting",
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
              className={`flex min-h-[44px] min-w-[44px] items-center gap-1 text-[12px] tracking-[0.18em] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 sm:gap-3 ${
                active ? "text-gold" : "text-white/70 hover:text-white"
              }`}
            >
              {n}
              <span
                className={`h-px transition-all duration-300 ${
                  active ? "w-4 bg-gold sm:w-8" : "w-4 bg-transparent sm:w-8"
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="MRF Galaxy highlights"
      aria-roledescription="carousel"
      className="relative isolate flex min-h-[34rem] w-full flex-col overflow-hidden bg-zinc-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        {SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={i === index ? slide.alt : ""}
            fill
            preload={i === 0}
            loading={i === 0 ? undefined : i === index ? "eager" : "lazy"}
            quality={90}
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

      <div className="relative z-10 flex w-full flex-1 flex-col">
<motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }
            }
            className="relative flex flex-1 items-center px-6 pt-28 sm:px-10 sm:pt-32 lg:px-14 lg:pt-24"
          >
          <div className="max-w-[46rem]">
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.8, ease: "easeOut", delay: 0.4 }
              }
              className="font-sans text-[3rem] font-bold uppercase leading-[0.88] tracking-[0.04em] text-white sm:text-[4.5rem] lg:text-[6.1rem]"
            >
              GALAXY
              <br />
              TILES
            </motion.h1>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.8, ease: "easeOut", delay: 0.6 }
              }
            >
              <Link
                href="/#contact"
                className="mt-9 inline-flex min-h-[44px] items-center justify-center border border-gold px-9 py-4 text-[12px] font-semibold tracking-[0.22em] text-white transition-colors duration-300 hover:bg-gold hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
              >
                VISIT SHOWROOM
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <SlideIndicators
          index={index}
          onSelect={setIndex}
          className="flex shrink-0 items-center justify-center gap-1 px-6 pb-4 sm:gap-3 sm:px-10 sm:pb-6 lg:absolute lg:right-14 lg:top-[42%] lg:-translate-y-1/2 lg:flex-col lg:px-0 lg:pb-0"
        />
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          Showing slide {index + 1} of {SLIDES.length}: {SLIDES[index].alt}
        </p>

        <div className="mx-auto flex w-full max-w-[62rem] shrink-0 gap-2 overflow-x-auto px-6 pb-3 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:px-10 sm:pb-5 lg:px-14">
          {FEATURE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="flex w-[9.5rem] shrink-0 flex-col border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-md sm:w-auto sm:px-4 sm:py-3"
              >
                <span className="text-gold [&>svg]:h-4 [&>svg]:w-4">
                  <Icon />
                </span>
                <h2 className="mt-2 text-[11px] font-semibold tracking-[0.06em] text-white sm:text-[13px]">
                  {card.title}
                </h2>
                <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-white/90 sm:text-[11px]">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-2 inline-flex text-[9px] font-semibold tracking-[0.12em] text-gold transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:text-[10px]"
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
