import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function OurServicesSection() {
  return (
    <section className="relative w-full bg-[#F9F9FB] overflow-hidden my-0 pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-10 md:pb-12">
      <div className="grid grid-cols-2 items-center gap-3 sm:gap-6 md:gap-12 w-full max-w-7xl mx-auto px-4">
        {/* Left Column (Text) */}
        <ScrollReveal variant="slideInLeft" className="flex min-w-0 flex-col">
          {/* Mobile Category Subhead */}
          <span className="block text-[8px] sm:text-[10px] md:text-xs tracking-[0.2em] text-neutral-400 uppercase mb-1 md:mb-2 md:hidden">
            PORCELAIN SLABS · SANITARY SOLUTIONS
          </span>
          {/* Desktop Animated Marquee */}
          <div className="mb-2 hidden overflow-hidden md:block">
            <div className="flex whitespace-nowrap animate-marquee">
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                Porcelain Slabs
              </span>
              <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                Sanitary Solutions
              </span>
              <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                Luxury Tiles
              </span>
              <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                Porcelain Slabs
              </span>
              <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                Sanitary Solutions
              </span>
              <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                Luxury Tiles
              </span>
              <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
            </div>
          </div>

          {/* Header Title */}
          <h2 className="font-serif font-extrabold uppercase text-base sm:text-2xl md:text-4xl lg:text-5xl tracking-[0.15em] leading-tight text-neutral-950 mb-2 md:mb-4">
            OUR SERVICES
          </h2>

          {/* Description Body */}
          <p className="text-[10px] sm:text-xs md:text-sm text-neutral-600 leading-relaxed line-clamp-4 md:line-clamp-none mb-3 md:mb-6">
            MRF Galaxy Tiles & Sanitary brings together premium porcelain surfaces,
            refined sanitary solutions, and architectural expertise to transform
            residential and commercial environments across Bangladesh. From
            large-format slabs to bespoke bathroom installations, every project
            reflects our commitment to material quality, timeless design, and
            lasting craftsmanship.
          </p>

          {/* CTA Link */}
          <Link
            href="/about#products-heading"
            className="text-[9px] sm:text-xs font-semibold tracking-widest uppercase text-neutral-950 underline underline-offset-4"
          >
            EXPLORE SERVICES
          </Link>
        </ScrollReveal>

        {/* Right Column (Image) */}
        <ScrollReveal variant="slideInRight" delay={0.15} className="flex min-w-0">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden">
            <Image
              src="/service-image/service.jpg"
              alt="Service Showcase"
              fill
              quality={90}
              sizes="50vw"
              className="object-cover w-full h-full border-0 rounded-none block md:transition-transform md:duration-500 md:ease-out md:hover:scale-[1.02]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
