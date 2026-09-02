import Navbar from "@/components/Navbar";
import SanitaryBrandCard from "@/components/sanitary/SanitaryBrandCard";
import { SANITARY_BRANDS } from "@/lib/sanitaryBrands";
import Link from "next/link";

export default function SanitaryBrandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main
        id="main"
        className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14 lg:pb-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              Sanitary Partners
            </p>
            <h1 className="mt-4 font-serif text-[1.85rem] font-bold uppercase leading-[1.05] tracking-[0.08em] text-[#0F0F0F] sm:text-[2.35rem] lg:text-[2.6rem]">
              Sanitary Brands
            </h1>
            <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
            <p className="mt-6 text-[13px] leading-relaxed tracking-[0.04em] text-neutral-600 sm:text-sm">
              Explore the world-class sanitary partners curated for MRF Galaxy
              luxury bathrooms.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
            {SANITARY_BRANDS.map((brand, index) => (
              <SanitaryBrandCard
                key={brand.slug}
                brand={brand}
                priority={index < 2}
              />
            ))}
          </div>

          <div className="mt-14 text-center sm:mt-16">
            <Link
              href="/sanitary"
              className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
            >
              Back to Sanitary Solutions
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
