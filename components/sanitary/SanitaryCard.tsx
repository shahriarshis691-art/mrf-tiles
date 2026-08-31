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
      className="group relative block aspect-[3/4] overflow-hidden bg-[#0a0a0a]"
    >
      <Image
        src={category.image}
        alt={category.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[#050505]/20 transition-colors duration-500 group-hover:bg-[#050505]/50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#050505]/95 via-[#050505]/50 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="mb-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />
        <h3 className="text-[11px] font-medium tracking-[0.26em] text-white/95 sm:text-xs">
          {category.label}
        </h3>
        <p className="mt-2.5 max-w-[16rem] text-[11px] font-light leading-relaxed text-white/50 sm:text-[12px]">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
