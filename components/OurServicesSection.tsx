import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function OurServicesSection() {
  return (
    <section className="relative w-full bg-[#F9F9FB] overflow-hidden">
      <div className="mx-auto flex max-w-[1440px] w-full items-center justify-between overflow-hidden px-6 pr-0 sm:px-10 sm:pr-10 lg:px-14 lg:pr-14">
        <div className="grid w-full min-h-[17rem] grid-cols-[1fr_1.15fr] items-stretch gap-0 md:flex md:items-center md:justify-between md:gap-8">
          {/* Left Card (Text) */}
          <ScrollReveal variant="slideInLeft" className="h-full flex min-w-0 flex-col md:w-1/2">
            <div className="h-full bg-[#F9F9FB] pt-[20px] pr-[12px] pb-[20px] pl-[16px] md:p-16 lg:p-20">
              <div className="flex h-full flex-col justify-center">
                {/* Mobile Category Subhead */}
                <span className="block text-[10px] tracking-[0.1em] text-[#737373] uppercase md:hidden">
                  PORCELAIN SLABS · SANITARY SOLUTIONS
                </span>
                {/* Desktop Animated Marquee */}
                <div className="mb-5 hidden overflow-hidden sm:mb-8 md:block">
                  <div className="flex whitespace-nowrap animate-marquee">
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Porcelain Slabs
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Sanitary Solutions
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Luxury Tiles
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Porcelain Slabs
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Sanitary Solutions
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Luxury Tiles
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                  </div>
                </div>

                {/* Header Title */}
                <h2 className="font-serif font-semibold text-[1.5rem] leading-[1.2] text-[#0F0F0F] my-2 md:font-bold md:text-[clamp(1.75rem,4vw,4rem)]">
                  Our Services
                </h2>

                {/* Description Body */}
                <p className="line-clamp-4 text-[11px] leading-[1.45] text-neutral-600 md:line-clamp-6 md:text-[clamp(0.8rem,2.2vw,1.125rem)] md:leading-relaxed">
                  MRF Galaxy Tiles & Sanitary brings together premium porcelain surfaces, refined sanitary solutions, and architectural expertise to transform residential and commercial environments across Bangladesh. From large-format slabs to bespoke bathroom installations, every project reflects our commitment to material quality, timeless design, and lasting craftsmanship.
                </p>

                {/* CTA Link */}
                <Link
                  href="/about#products-heading"
                  className="mt-[14px] block text-[10px] font-bold tracking-[0.08em] text-[#0F0F0F] no-underline border-0 transition-all duration-300 hover:translate-x-1 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 md:mt-10 md:min-h-[44px] md:text-[clamp(0.65rem,1vw,0.875rem)] md:font-semibold"
                >
                  EXPLORE SERVICES
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Card (Image) */}
          <ScrollReveal variant="slideInRight" delay={0.15} className="h-full flex min-w-0 items-stretch md:w-1/2">
            <div className="relative h-full w-full overflow-hidden md:aspect-auto md:min-h-full">
              <Image
                src="/service-image/service.jpg"
                alt="Service Showcase"
                width={800}
                height={600}
                quality={90}
                sizes="(max-width: 767px) 55vw, 50vw"
                className="object-cover object-left w-full h-full border-0 rounded-none block md:object-center md:transition-transform md:duration-500 md:ease-out md:hover:scale-[1.02]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
