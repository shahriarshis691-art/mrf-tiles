import Image from "next/image";
import Link from "next/link";
import { OUTLETS } from "@/components/outlet-data";
import { formatPriceBdt, type BrandProduct } from "@/lib/brands";

type BrandProductCardProps = {
  product: BrandProduct;
  brandName: string;
};

function buildInquiryUrl(brandName: string, productTitle: string): string {
  const outlet = OUTLETS[0];
  const message = `Hello MRF Galaxy,\n\nI am interested in the following product:\nBrand: ${brandName}\nProduct: ${productTitle}\n\nPlease share availability, pricing, and specifications.`;
  return `https://wa.me/${outlet.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function BrandProductCard({
  product,
  brandName,
}: BrandProductCardProps) {
  return (
    <article className="group flex h-full flex-col border border-neutral-200/70 bg-white transition-all duration-500 hover:border-neutral-900">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          quality={95}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex items-center bg-white/95 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-900 backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-[1.05rem] font-bold uppercase leading-[1.1] tracking-[0.16em] text-[#0F0F0F] sm:text-[1.15rem]">
          {product.title}
        </h3>

        <p className="mt-3 text-[12px] leading-relaxed text-neutral-600 sm:text-[13px]">
          {product.description}
        </p>

        <div className="mt-4 border-t border-neutral-200 pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Specifications
          </p>
          <ul className="mt-3 space-y-1.5">
            {product.specifications.map((spec, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-[11px] leading-relaxed text-neutral-700 sm:text-[12px]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] inline-block h-px w-3 shrink-0 bg-neutral-900"
                />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex items-baseline justify-between border-t border-neutral-200 pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Price
          </p>
          <p className="font-serif text-[1.25rem] font-bold tracking-[0.04em] text-[#0F0F0F] sm:text-[1.35rem]">
            {formatPriceBdt(product.priceBdt)}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={buildInquiryUrl(brandName, product.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] flex-1 items-center justify-center border border-neutral-900 bg-neutral-900 px-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-neutral-800"
          >
            Inquire / Order
          </Link>
          <Link
            href="#contact"
            className="inline-flex min-h-[44px] items-center justify-center border border-neutral-900 bg-transparent px-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}