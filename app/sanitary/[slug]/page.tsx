import Navbar from "@/components/Navbar";
import SanitaryListingCard from "@/components/sanitary/SanitaryListingCard";
import {
  getSanitaryCategoryBySlug,
  getSanitaryListingsByCategory,
  SANITARY_CATEGORIES,
} from "@/components/sanitary/sanitary-data";
import { contactHref } from "@/lib/contact";
import ImageWash, { imageLiftClass } from "@/components/ImageWash";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type SanitaryListingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SANITARY_CATEGORIES.map((category) => ({ slug: category.id }));
}

export async function generateMetadata({
  params,
}: SanitaryListingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getSanitaryCategoryBySlug(slug);

  if (!category) {
    return { title: "Sanitary Category Not Found" };
  }

  return {
    title: category.label,
    description: category.description,
  };
}

export default async function SanitaryListingPage({
  params,
}: SanitaryListingPageProps) {
  const { slug } = await params;
  const category = getSanitaryCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const listings = getSanitaryListingsByCategory(category.id);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main" className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/sanitary"
            className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.24em] text-zinc-800 transition-colors hover:text-gold sm:text-[11px]"
          >
            <span aria-hidden="true">←</span>
            BACK TO SANITARY
          </Link>

          <header className="mt-10 max-w-3xl">
            <p className="text-[10px] font-medium tracking-[0.26em] text-gold sm:text-[11px]">
              SANITARY SOLUTIONS
            </p>
            <h1 className="mt-4 text-[1.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-950 sm:text-[2.2rem] lg:text-[2.5rem]">
              {category.label}
            </h1>
            <span className="mt-5 block h-px w-12 bg-gold/70" />
            <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
              {category.description}
            </p>
          </header>

          <div className="relative mt-12 aspect-[16/10] overflow-hidden border border-zinc-200 bg-white sm:mt-14">
            <Image
              src={category.image}
              alt={category.alt}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className={`object-cover ${imageLiftClass} ${category.imagePosition ?? "object-center"}`}
            />
            <ImageWash />
          </div>

          <div className="mt-12 sm:mt-14">
            <p className="text-[11px] tracking-[0.16em] text-zinc-800">
              {listings.length} LUXURY{" "}
              {listings.length === 1 ? "PRODUCT" : "PRODUCTS"}
            </p>
            <p className="mt-2 text-[12px] text-zinc-800">
              Prices shown in BDT. Visit showroom or enquire for installation
              guidance.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
              {listings.map((item, index) => (
                <SanitaryListingCard
                  key={item.id}
                  item={item}
                  priority={index < 3}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 border border-zinc-200 bg-white px-8 py-12 sm:px-12 sm:py-14">
            <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
              NEED GUIDANCE?
            </p>
            <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
              Visit our showroom to view {category.label.toLowerCase()} in
              person or speak with our team about specifications and installation.
            </p>
            <Link
              href={contactHref(category.label)}
              className="mt-8 inline-flex h-14 items-center justify-center border border-gold bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-zinc-900 transition-colors duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
