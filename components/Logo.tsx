import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
  className?: string;
};

export default function Logo({ light = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center focus-visible:ring-2 focus-visible:ring-offset-2 ${className ?? ""} ${
        light
          ? "focus-visible:ring-white focus-visible:ring-offset-zinc-950"
          : "focus-visible:ring-neutral-900 focus-visible:ring-offset-white"
      }`}
    >
      <Image
        src="/images/logo.png"
        alt="MRF Galaxy Tiles & Sanitary"
        width={1122}
        height={1402}
        quality={90}
        sizes="28px"
        className="h-7 w-auto object-contain"
      />
    </Link>
  );
}
