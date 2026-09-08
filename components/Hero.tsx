"use client";

import Image from "next/image";
import { useState } from "react";

const defaultViews = [
  { src: "/images/projects/luxury-villa.jpg", alt: "Luxury villa architecture" },
  { src: "/images/villa-sun.jpg", alt: "Contemporary white villa with natural stone walls and warm architectural lighting" },
  { src: "/images/projects/modern-residence.jpg", alt: "Modern residence exterior" },
  { src: "/images/projects/architectural-tile-experience.jpg", alt: "Architectural tile finishes" },
];

export default function Hero({slides}:{slides?:{src:string;alt:string;heading?:string;subtitle?:string}[]}) {
 const views=slides ?? defaultViews;
  const [active, setActive] = useState(slides ? 0 : 1);

  if(!views.length) return null;
  const view=views[Math.min(active,views.length-1)];
  return (
    <section aria-label="Galaxy Collection" className="galaxy-hero">
      <div className="galaxy-hero-stage">
        <Image
          key={view.src}
          src={view.src}
          alt={view.alt}
          fill
          preload={active === 1}
          sizes="100vw"
          className="galaxy-hero-image"
        />
        <div className="galaxy-hero-fade" />
        <div className="galaxy-hero-copy">
          <p className="galaxy-hero-eyebrow">{slides ? slides[Math.min(active,slides.length-1)]?.subtitle : "Elegance in every detail"}</p>
          <h1>{slides ? <span>{slides[Math.min(active,slides.length-1)]?.heading}</span> : <><span>GALAXY</span><span>COLLECTION</span></>}</h1>
          <div className="galaxy-hero-rule" />
          <p className="galaxy-hero-tagline">Designed for a<br />better tomorrow</p>
        </div>
        <div className="galaxy-hero-pagination" role="group" aria-label="Select architectural view">
          {views.map((view, index) => (
            <button key={view.src} type="button" aria-label={`View ${index + 1}: ${view.alt}`} aria-pressed={active === index} onClick={() => setActive(index)}>
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
      <div className="galaxy-floor-details">
        <div className="galaxy-floor">
          <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M9 42v-9q0-5 5-5h12q5 0 5 5v12m0-12q0-5 5-5h11q5 0 5 5v9M7 39q-5 0-5 5v12h55V44q0-5-5-5t-5 5v5H12v-5q0-5-5-5ZM7 56v6m45-6v6M61 60V18m-8 0h16L66 3H56l-3 15Zm3 42h11" /></svg>
          <div><h2>GROUND FLOOR</h2><p>Living Room, Dining Room,<br />Kitchen, Guest Room,<br />Common Bath, Garden Area.</p></div>
        </div>
        <div className="galaxy-floor">
          <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 31V12h48v19M8 51l7-20h42l7 20v8H8v-8Zm0 0h56M18 31v-7h15v7m5 0v-7h15v7M12 59v5h5v-5m38 0v5h5v-5" /></svg>
          <div><h2>FIRST FLOOR</h2><p>3 Bedrooms, 2 Bathrooms,<br />Family Lounge, Balcony,<br />Terrace.</p></div>
        </div>
      </div>
    </section>
  );
}
