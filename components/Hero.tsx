"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE = {
  src: "/images/hero-tile-showroom.jpg",
  alt: "Luxury porcelain slab display showroom with architectural lighting",
  objectPosition: "object-center",
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="MRF Galaxy highlights"
      className="relative isolate flex min-h-[40rem] w-full flex-col overflow-hidden bg-zinc-950 md:min-h-[44rem] lg:min-h-[48rem]"
    >
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className={`object-cover ${HERO_IMAGE.objectPosition}`}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35"
      />

      <div className="relative z-10 flex w-full flex-1 items-center justify-center px-6 py-24 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }
          }
          className="mx-auto flex max-w-[46rem] flex-col items-center text-center"
        >
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.8, ease: "easeOut", delay: 0.4 }
            }
            className="font-sans text-[clamp(2rem,10vw,3rem)] font-bold uppercase leading-[0.88] tracking-[0.04em] text-white md:text-[4.5rem] lg:text-[6.1rem]"
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
        </motion.div>
      </div>
    </section>
  );
}