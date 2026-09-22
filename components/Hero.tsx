"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  { src: "/hero images/heroimage.png", alt: "MRF Galaxy Tiles Showcase" },
  { src: "/hero images/hero-image.jpg", alt: "MRF Galaxy Sanitary Showcase" },
];

export default function Hero(props: any) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full h-[65vh] min-h-[460px] max-h-[720px]">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={idx === 0}
              className="object-cover object-center"
            />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-8 z-20 flex flex-col items-center justify-center gap-3 px-4">
          <a
            href="/mrf-galaxy-tiles.apk"
            download="MRF-Galaxy-Tiles.apk"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900/90 hover:bg-black text-white text-sm font-semibold rounded-xl border border-white/20 transition-all backdrop-blur-sm"
          >
            Download App <span className="text-xs text-neutral-400 font-normal">Android APK</span>
          </a>

          <div className="flex gap-2 mt-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === i ? "bg-white scale-110" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
