import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for may have been moved or no longer exists. Return to explore our curated tile, sanitary, and architectural surface collections.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main
        id="main"
        className="relative flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-28 text-center sm:px-10 sm:pt-32 lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#EBE1D4]/30 via-transparent to-[#EFF1F3]/40"
        />

        <ScrollReveal variant="fadeInUp" className="relative">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden="true" className="block h-px w-8 bg-[#8b5a12]/60" />
            <p className="text-[11px] font-medium tracking-[0.32em] text-neutral-500 uppercase">
              Error 404 · Off the Map
            </p>
            <span aria-hidden="true" className="block h-px w-8 bg-[#8b5a12]/60" />
          </div>

          <h1 className="mt-6 font-serif text-[3.5rem] font-semibold uppercase leading-none tracking-[0.16em] text-neutral-900 sm:text-[6rem] lg:text-[8rem]">
            404
          </h1>

          <h2 className="mt-2 font-sans text-[1.4rem] font-semibold uppercase tracking-[0.2em] text-neutral-900 sm:text-[1.8rem]">
            This Surface Is Not Found
          </h2>

          <span className="mx-auto mt-6 block h-px w-12 bg-neutral-300" />

          <p className="mx-auto mt-7 max-w-md text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
            The page you are looking for may have been moved, retired, or never
            existed. Return home to explore our curated collections of porcelain,
            slabs, and architectural surfaces.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-neutral-900 bg-neutral-900 px-10 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#0A3826] hover:border-[#0A3826] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3826] focus-visible:ring-offset-2 sm:w-auto"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>
            <Link
              href="/collection"
              className="inline-flex min-h-[44px] items-center justify-center border border-neutral-300 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.18em] text-neutral-900 transition-colors duration-300 hover:border-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-auto"
            >
              Browse Collection
            </Link>
          </div>

          <p className="mt-12 text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500">
            MRF Galaxy · Curated Architectural Surfaces
          </p>
        </ScrollReveal>
      </main>
    </div>
  );
}
