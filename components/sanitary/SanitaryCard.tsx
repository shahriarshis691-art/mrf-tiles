import Image from "next/image";
import Link from "next/link";
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
      className="group relative block overflow-hidden border border-neutral-200/60 bg-white transition-transform duration-500 ease-out hover:scale-[1.02]"
    >
      <div className="relative aspect-[3/4] w-full h-full bg-neutral-100">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          priority={priority}
          quality={95}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-white via-white/90 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="mb-3 block h-px w-0 bg-neutral-900 transition-all duration-500 group-hover:w-8" />
        <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#0F0F0F] sm:text-xs">
          {category.label}
        </h3>
        <p className="mt-2.5 max-w-[16rem] text-[11px] leading-relaxed text-neutral-600 sm:text-[12px]">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
