import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getSanitaryCategoryBySlug,
  getSanitaryProductById,
  formatPriceBdt,
  buildProductWhatsAppUrl,
  SANITARY_PRODUCTS,
} from "@/lib/sanitaryData";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string; id: string }>;
};

export async function generateStaticParams() {
  return SANITARY_PRODUCTS.map((product) => ({
    slug: product.category,
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, id } = await params;
  const category = getSanitaryCategoryBySlug(slug);
  const product = getSanitaryProductById(id);

  if (!category || !product || product.category !== slug) {
    return { title: "Product Not Found" };
  }

  return createPageMetadata({
    title: `${product.title} | ${category.label}`,
    description: product.description,
    path: `/sanitary/${category.id}/${product.id}`,
    image: product.image,
    imageAlt: product.title,
  });
}

export default async function SanitaryProductPage({ params }: Props) {
  const { slug, id } = await params;
  const category = getSanitaryCategoryBySlug(slug);
  const product = getSanitaryProductById(id);

  if (!category || !product || product.category !== slug) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main
        id="main"
        className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14 lg:pb-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[12px] text-neutral-500">
              <li>
                <Link href="/" className="hover:text-neutral-900">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/sanitary" className="hover:text-neutral-900">
                  Sanitary
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/sanitary/${slug}`} className="hover:text-neutral-900">
                  {category.label}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900">{product.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 sm:gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                quality={90}
                preload
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
                {category.label}
              </p>
              <h1 className="mt-3 font-sans text-[2rem] font-semibold uppercase tracking-[0.06em] text-[#0F0F0F] sm:text-[2.35rem]">
                {product.title}
              </h1>
              <p className="mt-2 text-[12px] font-medium tracking-[0.06em] text-neutral-500">
                Brand: {product.brand}
              </p>
              <p className="mt-6 text-[28px] font-semibold tracking-[0.04em] text-neutral-900">
                {formatPriceBdt(product.price)}
              </p>
              <span className="mt-6 block h-px w-12 bg-neutral-300" />
              <p className="mt-6 text-[13px] leading-relaxed text-neutral-700">
                {product.description}
              </p>

              <div className="mt-8">
                <h2 className="text-[11px] font-semibold tracking-[0.2em] text-neutral-900 uppercase">
                  Specifications
                </h2>
                <ul className="mt-4 space-y-2">
                  {product.specs.map((spec, index) => (
                    <li
                      key={index}
                      className="flex text-[12px] text-neutral-700"
                    >
                      <span className="mr-3 h-px w-3 bg-neutral-900 mt-2 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={buildProductWhatsAppUrl(product.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-neutral-900 px-8 text-[12px] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-neutral-800"
                >
                  Inquire on WhatsApp
                </Link>
                <Link
                  href={`/sanitary/${slug}`}
                  className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-8 text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
                >
                  Back to Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
