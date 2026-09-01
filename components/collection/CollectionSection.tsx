import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

type CollectionCard = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  href: string;
};

const COLLECTION_CARDS: CollectionCard[] = [
  {
    id: "art-of-flooring",
    title: "THE ART OF FLOORING",
    subtitle: "Porcelain Slabs",
    image: "/images/collection/modern-dark.jpg",
    alt: "Dark modern porcelain slab collection",
    href: "/collection",
  },
  {
    id: "luxury-living",
    title: "LUXURY LIVING",
    subtitle: "Designer Tiles",
    image: "/images/collection/natural-luxury.jpg",
    alt: "Natural luxury designer tile collection",
    href: "/collection",
  },
  {
    id: "urban-elegance",
    title: "URBAN ELEGANCE",
    subtitle: "Premium Surfaces",
    image: "/images/collection/urban-elegance.jpg",
    alt: "Urban elegance premium surface collection",
    href: "/collection",
  },
  {
    id: "sanitary-solutions",
    title: "SANITARY SOLUTIONS",
    subtitle: "Bespoke Bathrooms",
    image: "/images/projects/modern-sanitary-space.jpg",
    alt: "Modern sanitary space with premium fixtures",
    href: "/sanitary",
  },
];

export default function CollectionSection() {
  return (
    <section
      id="collection"
      aria-label="Collection"
      className="relative w-full bg-zinc-950 px-4 py-16 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal variant="fadeInUp">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {COLLECTION_CARDS.map((card, index) => (
              <Link
                key={card.id}
                href={card.href}
                className="group relative block overflow-hidden bg-neutral-900"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    priority={index < 2}
                    quality={95}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
