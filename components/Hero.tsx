"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  { src: "/hero images/heroimage.png", alt: "MRF Galaxy Tiles Showcase" },
  { src: "/hero images/hero-image.jpg", alt: "MRF Galaxy Sanitary Showcase" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Hero Content & Auto Slider Image */}
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

        {/* Action Buttons & Badges */}
        <div className="absolute inset-x-0 bottom-8 z-20 flex flex-col items-center justify-center gap-3 px-4">
          <a
            href="/mrf-galaxy-tiles.apk"
            download="MRF-Galaxy-Tiles.apk"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900/90 hover:bg-black text-white text-sm font-semibold rounded-xl border border-white/20 transition-all backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download App <span className="text-xs text-neutral-400 font-normal">Android APK</span>
          </a>

          {/* Slider Indicators */}
          <div className="flex gap-2 mt-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
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
