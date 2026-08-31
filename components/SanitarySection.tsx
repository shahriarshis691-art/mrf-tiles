import Link from "next/link";
import SanitaryCard from "./sanitary/SanitaryCard";
import { SANITARY_CATEGORIES } from "./sanitary/sanitary-data";

export default function SanitarySection() {
  return (
    <section
      id="sanitary"
      aria-labelledby="sanitary-heading"
      className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
            SANITARY SOLUTIONS
          </p>
          <h2
            id="sanitary-heading"
            className="mt-5 font-sans text-[2rem] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-zinc-950 sm:text-[2.35rem]"
          >
            Premium Fixtures
          </h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-gold/70" />
          <p className="mt-6 text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
            From designer basins to spa-inspired bathing, MRF Galaxy offers
            sanitary selections that complement our tile collections with
            enduring quality and refined aesthetics.
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
            href="/#contact"
            className="inline-flex h-14 items-center justify-center border border-gold bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-zinc-900 transition-colors duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
          >
            Request Sanitary Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
