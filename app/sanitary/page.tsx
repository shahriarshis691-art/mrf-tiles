import Navbar from "@/components/Navbar";
import SanitaryCard from "@/components/sanitary/SanitaryCard";
import { SANITARY_CATEGORIES } from "@/components/sanitary/sanitary-data";
import { contactHref } from "@/lib/contact";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sanitary",
  description:
    "Browse MRF Galaxy sanitary collections — basins, water closets, showers, faucets, and spa bathtubs in Rangpur.",
};

export default function SanitaryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main
        id="main"
        className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14 lg:pb-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <header className="mx-auto max-w-3xl text-center">
            <h1 className="text-[2rem] font-semibold uppercase tracking-[0.34em] text-zinc-950 sm:text-[2.35rem] lg:text-[2.6rem]">
              SANITARY
            </h1>
            <span className="mx-auto mt-5 block h-px w-12 bg-gold/70" />
            <p className="mt-6 text-[13px] leading-relaxed tracking-[0.04em] text-zinc-800 sm:text-sm">
              Premium fixtures selected to complement Galaxy tile surfaces,
              <br className="hidden sm:block" />
              from sculptural basins to spa-inspired bathing.
            </p>
          </header>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
            {SANITARY_CATEGORIES.map((category, index) => (
              <SanitaryCard
                key={category.id}
                category={category}
                priority={index < 2}
              />
            ))}
          </div>

          <div className="mt-14 text-center sm:mt-16">
            <Link
              href={contactHref("Sanitary consultation")}
              className="inline-flex h-14 items-center justify-center border border-gold bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-zinc-900 transition-colors duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
            >
              Request Sanitary Consultation
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
