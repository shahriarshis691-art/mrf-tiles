import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function OurServicesSection() {
  return (
    <section className="relative w-full bg-[#F9F9FB] overflow-hidden">
      <div className="mx-auto flex max-w-[1440px] w-full items-center justify-between overflow-hidden px-3 sm:px-10 lg:px-14">
        <div className="flex w-full items-center justify-between gap-2 sm:gap-6 md:gap-8">
          {/* Left Card (Text) */}
          <ScrollReveal variant="slideInLeft" className="flex flex-col min-w-0 w-1/2">
            <div className="bg-[#F9F9FB] p-[3vw] sm:p-8 md:p-16 lg:p-20 h-full border border-neutral-200/60 shadow-sm shadow-neutral-900/[0.03] transition-shadow duration-500 hover:shadow-md hover:shadow-neutral-900/[0.06]">
              <div className="flex h-full flex-col justify-center">
                {/* Animated Marquee */}
                <div className="mb-2 overflow-hidden sm:mb-8">
                  <div className="flex whitespace-nowrap animate-marquee">
                    <span className="text-[1.5vw] sm:text-xs md:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Porcelain Slabs
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[1.5vw] sm:text-xs md:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Sanitary Solutions
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[1.5vw] sm:text-xs md:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Luxury Tiles
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[1.5vw] sm:text-xs md:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Porcelain Slabs
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[1.5vw] sm:text-xs md:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Sanitary Solutions
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                    <span className="text-[1.5vw] sm:text-xs md:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.2em] text-neutral-500 uppercase mx-0.5 sm:mx-4">
                      Luxury Tiles
                    </span>
                    <span className="text-neutral-300 mx-0.5 sm:mx-2">•</span>
                  </div>
                </div>

                {/* Header Title */}
                <h2 className="font-serif text-[clamp(0.75rem,1.8vw,4rem)] sm:text-[clamp(1.1rem,4vw,4rem)] font-bold text-[#0F0F0F] leading-tight">
                  Our Services
                </h2>
                
                {/* Description Body */}
                <p className="mt-1 sm:mt-8 text-[clamp(0.55rem,1.6vw,1.125rem)] sm:text-[clamp(0.65rem,2.2vw,1.125rem)] text-neutral-600 leading-relaxed">
                  MRF Galaxy Tiles & Sanitary brings together premium porcelain surfaces, refined sanitary solutions, and architectural expertise to transform residential and commercial environments across Bangladesh. From large-format slabs to bespoke bathroom installations, every project reflects our commitment to material quality, timeless design, and lasting craftsmanship.
                </p>
                
                {/* CTA Link */}
                <div className="mt-1 sm:mt-10">
                  <Link 
                    href="#"
                    className="inline-flex min-h-[32px] sm:min-h-[44px] items-center text-[clamp(0.35rem,0.8vw,0.875rem)] sm:text-[clamp(0.4rem,1vw,0.875rem)] font-semibold text-[#0F0F0F] underline underline-offset-4 sm:underline-offset-8 hover:opacity-70 transition-all duration-300 hover:translate-x-1 focus-visible:ring-2 focus:visible:ring-neutral-900 focus-visible:ring-offset-1"
                  >
                    EXPLORE SERVICES
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Right Card (Image) */}
          <ScrollReveal variant="slideInRight" delay={0.15} className="flex items-stretch min-w-0 w-1/2">
            <div className="relative w-full min-h-full overflow-hidden border border-neutral-200/60 transition-transform duration-500 ease-out hover:scale-[1.02]">
              <Image
                src="/service-image/service.png"
                alt="Service Showcase"
                width={800}
                height={600}
                quality={95}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
