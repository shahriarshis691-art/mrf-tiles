import Image from "next/image";
import Link from "next/link";
import ImageWash, { imageLiftClass } from "../ImageWash";
import type { SanitaryCategory } from "./sanitary-data";

type SanitaryCardProps = {
  category: SanitaryCategory;
  priority?: boolean;
};

export default function SanitaryCard({
  category,
  priority = false,
}: SanitaryCardProps) {
  return (
    <Link
      href={`/sanitary/${category.id}`}
      className="group relative block aspect-[3/4] overflow-hidden border border-zinc-200 bg-white"
    >
      <Image
        src={category.image}
        alt={category.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className={`object-cover ${imageLiftClass} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
      />

      <ImageWash />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-white via-white/75 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="mb-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />
        <h3 className="text-[11px] font-semibold tracking-[0.26em] text-zinc-950 sm:text-xs">
          {category.label}
        </h3>
        <p className="mt-2.5 max-w-[16rem] text-[11px] leading-relaxed text-zinc-800 sm:text-[12px]">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
