import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function OurServicesSection() {
  return (
    <section className="relative w-full bg-[#E7E5E4]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col-reverse md:flex-row md:items-stretch gap-6 md:gap-8">
          {/* Left Card (Text) */}
          <ScrollReveal variant="slideInLeft" className="w-full md:w-[60%] lg:w-[65%]">
            <div className="bg-[#E7E5E4] p-8 md:p-16 lg:p-20 h-full border border-stone-200/60 shadow-sm shadow-stone-900/[0.03] transition-shadow duration-500 hover:shadow-md hover:shadow-stone-900/[0.06]">
              <div className="flex h-full flex-col justify-center max-w-lg">
                {/* Animated Marquee */}
                <div className="mb-8 overflow-hidden">
                  <div className="flex whitespace-nowrap animate-marquee">
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-stone-500 uppercase mx-4">
                      PORCELAIN SLABS
                    </span>
                    <span className="text-stone-400 mx-2">•</span>
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-stone-500 uppercase mx-4">
                      SANITARY SOLUTIONS
                    </span>
                    <span className="text-stone-400 mx-2">•</span>
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-stone-500 uppercase mx-4">
                      LUXURY TILES
                    </span>
                    <span className="text-stone-400 mx-2">•</span>
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-stone-500 uppercase mx-4">
                      PORCELAIN SLABS
                    </span>
                    <span className="text-stone-400 mx-2">•</span>
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-stone-500 uppercase mx-4">
                      SANITARY SOLUTIONS
                    </span>
                    <span className="text-stone-400 mx-2">•</span>
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-stone-500 uppercase mx-4">
                      LUXURY TILES
                    </span>
                    <span className="text-stone-400 mx-2">•</span>
                  </div>
                </div>

                {/* Header Title */}
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1A18] leading-tight">
                  Our Services
                </h2>
                
                {/* Description Body */}
                <p className="mt-8 text-base md:text-lg text-zinc-700 leading-relaxed">
                  MRF Galaxy Tiles & Sanitary brings together premium porcelain surfaces, refined sanitary solutions, and architectural expertise to transform residential and commercial environments across Bangladesh. From large-format slabs to bespoke bathroom installations, every project reflects our commitment to material quality, timeless design, and lasting craftsmanship.
                </p>
                
                {/* CTA Link */}
                <div className="mt-10">
                  <Link 
                    href="#"
                    className="inline-flex items-center text-sm font-semibold text-zinc-900 underline underline-offset-8 hover:opacity-70 transition-all duration-300 hover:translate-x-1"
                  >
                    EXPLORE SERVICES
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Right Card (Image) */}
          <ScrollReveal variant="slideInRight" delay={0.15} className="w-full md:w-[40%] lg:w-[35%] flex items-stretch">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg shadow-stone-900/[0.08] transition-transform duration-700 ease-out hover:scale-[1.02]">
              <Image
                src="/service-image/service.png"
                alt="Service Showcase"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

