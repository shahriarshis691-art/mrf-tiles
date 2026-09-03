import Navbar from "@/components/Navbar";
import RoomProductGrid from "@/components/rooms/RoomProductGrid";
import { getRoomProducts } from "@/components/rooms/rooms-data";
import { contactHref } from "@/lib/contact";
import { createPageMetadata } from "@/lib/metadata";
import {
  getAllRoomSlugs,
  getRoomCategoryBySlug,
} from "@/lib/roomCategories";
import { OUTLETS } from "@/components/outlet-data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type RoomPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllRoomSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomCategoryBySlug(slug);
  if (!room) return { title: "Room Not Found" };

  return createPageMetadata({
    title: `${room.label} Tiles Collection`,
    description: room.description,
    path: `/rooms/${room.id}`,
    image: room.image,
    imageAlt: room.alt,
  });
}

const secondaryButtonClass =
  "inline-flex min-h-[44px] items-center justify-center border border-neutral-300 bg-transparent px-8 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-fit";

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = getRoomCategoryBySlug(slug);
  if (!room) notFound();

  const products = getRoomProducts(room.id);
  const primaryOutlet = OUTLETS[0];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main">
        <section
          aria-label={`${room.label} hero`}
          className="relative h-[46vh] min-h-[28rem] w-full overflow-hidden bg-zinc-950 sm:h-[58vh] sm:min-h-0 lg:h-[64vh]"
        >
          <Image
            src={room.image}
            alt={room.alt}
            fill
            preload
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/75"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-[1440px] px-6 pb-10 sm:px-10 sm:pb-14 lg:px-14 lg:pb-16">
              <nav
                aria-label="Breadcrumb"
                className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-stone-300"
              >
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href="/" className="transition-colors hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/#brands" className="transition-colors hover:text-white">
                      Collection
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-white">
                    {room.label}
                  </li>
                </ol>
              </nav>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-200 sm:text-[11px]">
                Tiles Collection
              </p>
              <h1 className="mt-3 font-serif text-[2rem] font-semibold uppercase tracking-[0.18em] text-white sm:text-[2.6rem] lg:text-[3rem]">
                {room.label} Tiles Collection
              </h1>
              <span className="mt-5 block h-px w-12 bg-white/60" />
              <p className="mt-5 max-w-2xl text-[12px] leading-relaxed text-stone-200 sm:text-sm">
                {room.description}. Curated porcelain surfaces, slabs, and finishes
                selected for {room.label.toLowerCase()} interiors.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500 sm:text-[11px]">
                Curated Selection
              </p>
              <h2 className="mt-3 font-serif text-[1.6rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[2rem] lg:text-[2.2rem]">
                Designed for the {room.label}
              </h2>
              <span className="mx-auto mt-5 block h-px w-12 bg-neutral-300" />
              <p className="mt-5 text-[12px] leading-relaxed text-neutral-600 sm:text-sm">
                Refine the selection by finish, size, material, and color to find
                tiles that match the mood and performance of your {room.label.toLowerCase()}.
              </p>
            </header>

            <div className="mt-10 lg:mt-12">
              <RoomProductGrid products={products} roomLabel={room.label} />
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500 sm:text-[11px]">
                Next Steps
              </p>
              <h3 className="mt-3 font-serif text-[1.4rem] font-semibold uppercase tracking-[0.16em] text-neutral-900 sm:text-[1.75rem]">
                Plan your {room.label}
              </h3>
              <p className="mt-4 text-[12px] leading-relaxed text-neutral-600 sm:text-sm">
                Speak with our design team about samples, specification sheets, and
                on-site consultation for your upcoming project.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={contactHref(`${room.label} Tiles Collection`)}
                className={secondaryButtonClass}
              >
                Enquire Now
              </Link>
              <a
                href={primaryOutlet.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButtonClass}
              >
                Visit Showroom
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
