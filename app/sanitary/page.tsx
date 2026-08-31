import Navbar from "@/components/Navbar";
import { SANITARY_CATEGORIES } from "@/components/sanitary/sanitary-data";
import { contactHref } from "@/lib/contact";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

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
          {/* Light-beige top header with 3 vertical service columns */}
          <header className="bg-[#FAF8F5] py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
              <h1 className="text-[2rem] font-semibold uppercase tracking-[0.34em] text-neutral-900 text-center sm:text-left sm:text-[2.35rem] lg:text-[2.6rem]">
                SANITARY SOLUTIONS
              </h1>
              <span className="mx-auto sm:mx-0 mt-5 block h-px w-12 bg-neutral-300" />
              <p className="mt-6 text-[13px] leading-relaxed tracking-[0.04em] text-neutral-600 max-w-2xl mx-auto sm:mx-0">
                Premium fixtures selected to complement Galaxy tile surfaces,
                <br className="hidden sm:block" />
                from sculptural basins to spa-inspired bathing.
              </p>
              
              {/* 3 vertical service columns in light-beige header */}
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {SANITARY_CATEGORIES.map((category) => (
                  <div key={category.id} className="text-center lg:text-left">
                    <h3 className="text-[12px] font-semibold tracking-[0.26em] text-neutral-900 uppercase">
                      {category.label}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-neutral-600">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* Dark bottom frame with 3-image showcase grid */}
          <section className="bg-[#0F0F0F] py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SANITARY_CATEGORIES.map((category, index) => (
                  <div key={category.id} className="group relative overflow-hidden">
                    <div className="aspect-square bg-neutral-900 relative">
                      <Image
                        src={category.image}
                        alt={category.alt}
                        fill
                        quality={95}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-[14px] font-semibold tracking-[0.22em] text-white uppercase mb-2">
                          {category.label}
                        </h3>
                        <p className="text-[11px] leading-relaxed text-neutral-300">
                          {category.description}
                        </p>
                        <Link 
                          href={`/sanitary/${category.id}`}
                          className="mt-4 inline-block min-h-[44px] inline-flex items-center text-[11px] font-medium tracking-[0.18em] text-white underline underline-offset-4 hover:underline-offset-8 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
                        >
                          Explore Collection
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Consultation CTA */}
          <div className="mt-14 text-center sm:mt-16">
            <Link
              href={contactHref("Sanitary consultation")}
              className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
            >
              Request Sanitary Consultation
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

