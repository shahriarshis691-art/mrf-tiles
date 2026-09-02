import Navbar from "@/components/Navbar";
import { SANITARY_CATEGORIES } from "@/components/sanitary/sanitary-data";
import { contactHref } from "@/lib/contact";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
              <h1 className="text-center text-[1.5rem] font-semibold uppercase tracking-[0.14em] text-neutral-900 sm:text-left sm:text-[2.35rem] sm:tracking-[0.34em] lg:text-[2.6rem]">
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

          {/* Sanitary Categories Showcase */}
          <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {SANITARY_CATEGORIES.map((category) => (
                  <div key={category.id} className="group bg-white border border-neutral-200/60">
                    <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden w-full h-full">
                      <Image
                        src={category.image}
                        alt={category.alt}
                        fill
                        quality={90}
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                        className={`object-cover object-center transition-transform duration-700 group-hover:scale-105 ${category.imagePosition ?? ""}`}
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-[14px] font-semibold tracking-[0.22em] text-neutral-900 uppercase mb-2">
                        {category.label}
                      </h3>
                      <p className="text-[11px] leading-relaxed text-neutral-600">
                        {category.description}
                      </p>
                      <Link 
                        href={`/sanitary/${category.id}`}
                        className="mt-4 inline-block min-h-[44px] inline-flex items-center text-[11px] font-medium tracking-[0.18em] text-neutral-900 underline underline-offset-4 hover:underline-offset-8 transition-all focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                      >
                        Explore Collection
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Consultation CTA */}
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row sm:gap-5">
            <Link
              href="/sanitary/brands"
              className="inline-flex min-h-[44px] items-center justify-center border border-neutral-200 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-700 transition-colors duration-300 hover:border-neutral-900 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
            >
              Explore Sanitary Brands
            </Link>
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

