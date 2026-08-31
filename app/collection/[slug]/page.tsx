import Navbar from "@/components/Navbar";
import RelatedCollections from "@/components/collection/RelatedCollections";
import {
  CATALOG_PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
} from "@/components/collection/collection-data";
import { contactHref } from "@/lib/contact";
import { OUTLETS } from "@/components/outlet-data";
import ImageWash, { imageLiftClass } from "@/components/ImageWash";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type CollectionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const actionButtonClass =
  "inline-flex h-14 w-full items-center justify-center border border-gold bg-transparent px-8 text-[12px] font-medium uppercase tracking-[0.08em] text-zinc-900 transition-colors duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white sm:w-fit";

export function generateStaticParams() {
  return CATALOG_PRODUCTS.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({
  params,
}: CollectionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Collection Not Found" };
  }

  return {
    title: product.label,
    description: product.description,
  };
}

export default async function CollectionDetailPage({
  params,
}: CollectionDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const primaryOutlet = OUTLETS[0];

  const specs = [
    { label: "FORMAT", value: product.format },
    { label: "MATERIAL", value: product.material },
    { label: "FINISH", value: product.finish },
    { label: "LOOK", value: product.look },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main" className="px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.24em] text-zinc-800 transition-colors hover:text-gold sm:text-[11px]"
          >
            <span aria-hidden="true">←</span>
            BACK TO COLLECTION
          </Link>

          <header className="mt-10 max-w-3xl">
            <p className="text-[10px] font-medium tracking-[0.26em] text-gold sm:text-[11px]">
              {product.material.toUpperCase()}
            </p>
            <h1 className="mt-4 text-[1.85rem] font-semibold uppercase tracking-[0.22em] text-zinc-950 sm:text-[2.4rem] lg:text-[2.75rem]">
              {product.label}
            </h1>
            <span className="mt-5 block h-px w-12 bg-gold/70" />
            <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
              {product.longDescription}
            </p>
          </header>

          <div className="relative mt-12 aspect-[16/10] overflow-hidden border border-zinc-200 bg-white sm:mt-14">
            <Image
              src={product.image}
              alt={product.alt}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className={`object-cover ${imageLiftClass}`}
            />
            <ImageWash />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 border-y border-zinc-200 py-12 sm:mt-14 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
                SPECIFICATIONS
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-[9px] font-medium tracking-[0.24em] text-zinc-800">
                      {spec.label}
                    </dt>
                    <dd className="mt-2 text-[13px] text-zinc-950 sm:text-sm">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
                APPLICATIONS
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {product.applications.map((application) => (
                  <li
                    key={application}
                    className="border border-zinc-200 px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] text-zinc-800"
                  >
                    {application.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {product.gallery.length > 0 ? (
            <div className="mt-12 sm:mt-14">
              <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
                IN CONTEXT
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {product.gallery.map((image) => (
                  <figure
                    key={image.src}
                    className="relative aspect-[4/3] overflow-hidden border border-zinc-200 bg-white"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover ${imageLiftClass}`}
                    />
                    <ImageWash />
                  </figure>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-16 border border-zinc-200 bg-white px-8 py-12 sm:px-12 sm:py-14">
            <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
              NEXT STEPS
            </p>
            <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
              Experience {product.label} in person at our showroom or request
              guidance from our team for your upcoming project.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
              <Link href={contactHref(product.label)} className={actionButtonClass}>
                Request Sample
              </Link>
              <a
                href={primaryOutlet.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonClass}
              >
                Visit Showroom
              </a>
            </div>
          </div>

          <RelatedCollections products={relatedProducts} />
        </div>
      </main>
    </div>
  );
}
