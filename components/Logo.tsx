import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  priority?: boolean;
};

export default function Logo({ priority = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src="/images/logo.png"
        alt="MRF Galaxy Tiles & Sanitary"
        width={1122}
        height={1402}
        priority={priority}
        sizes="80px"
        className="h-12 w-auto max-h-12 object-contain sm:h-[3.35rem] sm:max-h-[3.35rem]"
      />
    </Link>
  );
}
