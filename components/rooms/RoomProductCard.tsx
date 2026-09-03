import Image from "next/image";
import Link from "next/link";
import { contactHref } from "@/lib/contact";
import type { RoomProduct } from "./rooms-data";

type RoomProductCardProps = {
  product: RoomProduct;
  roomLabel: string;
};

const actionButtonClass =
  "inline-flex min-h-[40px] w-full items-center justify-center border border-neutral-900 bg-transparent px-5 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-fit";

export default function RoomProductCard({ product, roomLabel }: RoomProductCardProps) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 border border-neutral-200/60">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 bg-white/90 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-900">
          {product.finish}
        </span>
      </div>

      <div className="mt-4 flex flex-col">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
          {product.material}
        </p>
        <h3 className="mt-2 font-serif text-[1.05rem] font-semibold uppercase tracking-[0.14em] text-neutral-900 sm:text-base">
          {product.name}
        </h3>
        <dl className="mt-3 grid grid-cols-3 gap-3 border-t border-neutral-200 pt-3 text-[11px]">
          <div>
            <dt className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-500">Size</dt>
            <dd className="mt-1 text-neutral-900">{product.size}</dd>
          </div>
          <div>
            <dt className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-500">Color</dt>
            <dd className="mt-1 text-neutral-900">{product.color}</dd>
          </div>
          <div>
            <dt className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-500">Finish</dt>
            <dd className="mt-1 text-neutral-900">{product.finish}</dd>
          </div>
        </dl>
        <div className="mt-5 flex">
          <Link
            href={contactHref(`${roomLabel} — ${product.name}`)}
            className={actionButtonClass}
          >
            Enquire / Details
          </Link>
        </div>
      </div>
    </article>
  );
}
