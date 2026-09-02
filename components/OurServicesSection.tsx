import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function OurServicesSection() {
  return (
    <section className="relative w-full bg-[#F9F9FB] overflow-hidden">
      <div className="mx-auto flex max-w-[1440px] w-full items-center justify-between overflow-hidden px-6 sm:px-10 lg:px-14">
        <div className="flex w-full flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
          {/* Left Card (Text) */}
          <ScrollReveal variant="slideInLeft" className="flex min-w-0 w-1/2 flex-col">
            <div className="h-full border border-neutral-200/60 bg-[#F9F9FB] p-4 shadow-sm shadow-neutral-900/[0.03] transition-shadow duration-500 hover:shadow-md hover:shadow-neutral-900/[0.06] sm:p-8 md:p-16 lg:p-20">
              <div className="flex h-full flex-col justify-center">
                {/* Animated Marquee */}
                <div className="mb-5 overflow-hidden sm:mb-8">
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
                <h2 className="font-serif text-[1.75rem] font-bold leading-tight text-[#0F0F0F] sm:text-[clamp(1.75rem,4vw,4rem)]">
                  Our Services
                </h2>
                
                {/* Description Body */}
                <p className="mt-5 text-[13px] leading-relaxed text-neutral-600 sm:mt-8 sm:text-[clamp(0.8rem,2.2vw,1.125rem)] md:line-clamp-6">
                  MRF Galaxy Tiles & Sanitary brings together premium porcelain surfaces, refined sanitary solutions, and architectural expertise to transform residential and commercial environments across Bangladesh. From large-format slabs to bespoke bathroom installations, every project reflects our commitment to material quality, timeless design, and lasting craftsmanship.
                </p>
                
                {/* CTA Link */}
                <div className="mt-6 sm:mt-10">
                  <Link 
                    href="/about#products-heading"
                    className="inline-flex min-h-[44px] items-center text-[11px] font-semibold text-[#0F0F0F] underline underline-offset-4 transition-all duration-300 hover:translate-x-1 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:text-[clamp(0.65rem,1vw,0.875rem)] sm:underline-offset-8"
                  >
                    EXPLORE SERVICES
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Right Card (Image) */}
          <ScrollReveal variant="slideInRight" delay={0.15} className="flex min-w-0 w-1/2 items-stretch">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-neutral-200/60 transition-transform duration-500 ease-out hover:scale-[1.02] md:aspect-auto md:min-h-full">
              <Image
                src="/service-image/service.jpg"
                alt="Service Showcase"
                width={800}
                height={600}
                quality={90}
                sizes="50vw"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
