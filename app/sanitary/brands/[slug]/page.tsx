import Navbar from "@/components/Navbar";
import SanitaryBrandProductCard from "@/components/sanitary/SanitaryBrandProductCard";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllSanitaryBrandSlugs,
  getSanitaryBrandBySlug,
} from "@/lib/sanitaryBrands";
import { contactHref } from "@/lib/contact";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSanitaryBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getSanitaryBrandBySlug(slug);

  if (!brand) {
    return { title: "Brand Not Found" };
  }

  return {
    title: `${brand.name} | Sanitary Solutions`,
    description: brand.description,
  };
}

export default async function SanitaryBrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = getSanitaryBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main">
        <section
          aria-label={`${brand.name} banner`}
          className="relative h-[42vh] min-h-[26rem] w-full overflow-hidden bg-zinc-950 sm:h-[52vh] sm:min-h-0 lg:h-[58vh]"
        >
          <Image
            src={brand.banner}
            alt={brand.bannerAlt}
            fill
            preload
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-[1440px] px-6 pb-10 sm:px-10 sm:pb-14 lg:px-14 lg:pb-16">
              <nav
                aria-label="Breadcrumb"
                className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-stone-300"
              >
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-white">
                      ← Back to Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/sanitary/brands" className="hover:text-white">
                      Sanitary Brands
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-white">{brand.name}</li>
                </ol>
              </nav>

              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
                {brand.tagline}
              </p>
              <h1 className="mt-3 font-serif text-[2.25rem] font-bold uppercase leading-[1.02] tracking-[0.08em] text-white sm:text-[3rem] lg:text-[3.75rem]">
                {brand.name}
              </h1>
              <span className="mt-6 block h-px w-16 bg-gold" />
              <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-stone-200 sm:text-sm">
                {brand.bio}
              </p>
            </div>
          </div>
        </section>

        <section
          aria-label={`${brand.name} products`}
          className="bg-[#F9F9FB] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
        >
          <div className="mx-auto max-w-[1440px]">
            <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
                {brand.name} Collection
              </p>
              <h2 className="mt-4 font-serif text-[1.65rem] font-bold uppercase leading-[1.1] tracking-[0.08em] text-[#0F0F0F] sm:text-[2.1rem] lg:text-[2.4rem]">
                Curated Premium Products
              </h2>
              <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
              <p className="mt-6 text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
                Explore the signature {brand.name} range, featuring intelligent
                toilets, thermostatic showers, vessel basins, and concealed
                faucets engineered for refined luxury bathrooms.
              </p>
            </header>

            {brand.products.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
                {brand.products.map((product) => (
                  <SanitaryBrandProductCard
                    key={product.id}
                    product={product}
                    brandName={brand.name}
                  />
                ))}
              </div>
            ) : (
              <p className="mt-12 text-center text-[13px] text-neutral-600">
                Products for this brand will be available soon.
              </p>
            )}

            <div className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:mt-16">
              <Link
                href="/sanitary/brands"
                className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
              >
                Back to Sanitary Brands
              </Link>
              <Link
                href={contactHref(`${brand.name} consultation`)}
                className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-neutral-900 px-10 text-[12px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-neutral-800"
              >
                Request Brand Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
