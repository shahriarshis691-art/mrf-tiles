import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getSanitaryCategoryBySlug,
  getSanitaryListingsByCategory,
  formatPriceBdt,
  buildProductWhatsAppUrl,
  SANITARY_CATEGORIES,
} from "@/lib/sanitaryData";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SANITARY_CATEGORIES.map((category) => ({
    slug: category.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getSanitaryCategoryBySlug(slug);
  if (!category) {
    return { title: "Category Not Found" };
  }
  return {
    title: `${category.label} | Sanitary Solutions`,
    description: category.description,
  };
}

export default async function SanitaryCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getSanitaryCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getSanitaryListingsByCategory(slug);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main
        id="main"
        className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14 lg:pb-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <header className="mb-12 sm:mb-16">
            <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
              Sanitary Solutions
            </p>
            <h1 className="mt-5 font-sans text-[2rem] font-semibold uppercase tracking-[0.06em] text-[#0F0F0F] sm:text-[2.35rem]">
              {category.label}
            </h1>
            <span className="mt-5 block h-px w-12 bg-neutral-900" />
            <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-neutral-600">
              {category.description}
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col border border-neutral-200/60 bg-white transition-all duration-300 hover:border-neutral-900"
              >
                <Link href={`/sanitary/${slug}/${product.id}`} className="block">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-[13px] font-semibold tracking-[0.08em] text-[#0F0F0F]">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-neutral-600 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="mt-3 text-[12px] font-semibold tracking-[0.06em] text-neutral-900">
                      {formatPriceBdt(product.price)}
                    </p>
                  </div>
                </Link>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <Link
                    href={buildProductWhatsAppUrl(product.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-6 text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
                  >
                    Inquire on WhatsApp
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {products.length === 0 && (
            <p className="mt-12 text-center text-[13px] text-neutral-600">
              No products found in this category.
            </p>
          )}

          <div className="mt-14 text-center sm:mt-16">
            <Link
              href="/sanitary"
              className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-10 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
            >
              Back to All Categories
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
