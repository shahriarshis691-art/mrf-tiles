import Image from "next/image";
import Link from "next/link";

export default function OurStorySection() {
  return (
    <section className="relative w-full bg-zinc-950">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column: Dark luxury content section */}
          <div className="bg-[#1C1A18] p-8 md:p-16 lg:p-20">
            <div className="flex h-full flex-col justify-center max-w-lg">
              {/* Header Title */}
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F2EB] leading-tight">
                Our Services
              </h2>
              
              {/* Service Metadata */}
              <div className="mt-8 space-y-3">
                <div className="text-sm md:text-base font-semibold tracking-wider text-[#D4C5A5]">
                  PORCELAIN SLABS / SANITARY SOLUTIONS / LUXURY TILES
                </div>
              </div>
              
              {/* Description Body */}
              <p className="mt-8 text-base md:text-lg text-zinc-300 leading-relaxed">
                MRF Galaxy Tiles & Sanitary offers premium tile installation services, showcasing our expertise in luxury porcelain surfaces and refined sanitary design solutions across Bangladesh.
              </p>
              
              {/* CTA Link */}
              <div className="mt-10">
                <Link 
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-[#F5F2EB] underline underline-offset-8 hover:opacity-80 transition-opacity duration-300"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column: Full-height image container */}
          <div className="relative w-full h-full min-h-[500px] overflow-hidden">
            <Image
              src="/images/our-story-tile-interior.jpg"
              alt="Luxury porcelain tile interior with refined architectural details"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover w-full h-full min-h-[500px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
