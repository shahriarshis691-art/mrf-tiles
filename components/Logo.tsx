import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-3">
      <span className="relative grid h-[3.35rem] w-[3.35rem] shrink-0 place-items-center sm:h-[3.85rem] sm:w-[3.85rem]">
        <svg
          viewBox="0 0 80 80"
          className="absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="40"
            cy="40"
            r="31"
            stroke="#C4A56A"
            strokeWidth="1.7"
          />
        </svg>
        <span className="relative text-[1.15rem] font-semibold leading-none tracking-[0.06em] text-white sm:text-[1.28rem]">
          MRF
        </span>
      </span>
      <span className="flex flex-col justify-center">
        <span className="text-[1.28rem] font-medium leading-none tracking-[0.18em] text-white sm:text-[1.42rem]">
          GALAXY
        </span>
        <span className="mt-[0.38rem] whitespace-nowrap text-[0.52rem] font-medium tracking-[0.28em] text-white/70 sm:text-[0.58rem] sm:tracking-[0.32em]">
          TILES &amp; SANITARY
        </span>
      </span>
    </Link>
  );
}
