import Link from 'next/link';
import Image from 'next/image';

export default function OurStorySection() {
  return (
    <section className="relative w-full bg-[#E7E5E4]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col-reverse md:flex-row md:items-stretch gap-6 md:gap-8">
          {/* Left Card (Text) */}
          <div className="w-full md:w-[60%] lg:w-[65%]">
            <div className="bg-[#E7E5E4] p-8 md:p-16 lg:p-20 h-full">
              <div className="flex h-full flex-col justify-center max-w-lg">
                {/* Header Title */}
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1A18] leading-tight">
                  Our Story
                </h2>
                
                {/* Service Metadata */}
                <div className="mt-8 space-y-3">
                  <div className="text-sm md:text-base font-semibold tracking-wider text-stone-600">
                    PORCELAIN SLABS / SANITARY SOLUTIONS / LUXURY TILES
                  </div>
                </div>
                
                {/* Description Body */}
                <p className="mt-8 text-base md:text-lg text-zinc-700 leading-relaxed">
                  MRF Galaxy Tiles & Sanitary brings together premium porcelain surfaces, refined sanitary solutions, and architectural expertise to transform residential and commercial environments across Bangladesh. From large-format slabs to bespoke bathroom installations, every project reflects our commitment to material quality, timeless design, and lasting craftsmanship.
                </p>
                
                {/* CTA Link */}
                <div className="mt-10">
                  <Link 
                    href="#"
                    className="inline-flex items-center text-sm font-semibold text-zinc-900 underline underline-offset-8 hover:opacity-80 transition-opacity duration-300"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Card (Image) */}
          <div className="w-full md:w-[40%] lg:w-[35%] flex items-stretch">
            <Image
              src="/service-image/service.png"
              alt="Service Showcase"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-2xl aspect-[4/3] md:aspect-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

