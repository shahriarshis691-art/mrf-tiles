"use client";

type HeroSlide = {
  src?: string;
  alt?: string;
  heading?: string;
  subtitle?: string;
};

const fallbackImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80";

export default function Hero({ slides }: { slides?: HeroSlide[] }) {
  const heroImage = slides?.[0]?.src || fallbackImage;
  const altText = slides?.[0]?.alt || "Luxury bathroom interior";

  return (
    <section className="luxury-hero" aria-label="Luxury interior hero">
      <div
        className="luxury-hero-bg"
        style={{ backgroundImage: `url("${heroImage}")` }}
        aria-hidden="true"
      />
      <div className="luxury-hero-overlay" aria-hidden="true" />

      <div className="luxury-hero-inner">
        <div className="luxury-hero-copy">
          <h1>
            <span>Transform Your Space,</span>
            <span>Transform Your Life</span>
          </h1>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="luxury-hero-actions">
            <a href="#contact" className="luxury-hero-primary">
              Schedule a Consultation
            </a>
            <a
              href="/mrf-galaxy-tiles.apk"
              download="MRF-Galaxy-Tiles.apk"
              className="luxury-hero-apk"
              aria-label="Download App (Android APK)"
            >
              Download App
            </a>
          </div>
        </div>

        <div className="luxury-hero-stats" aria-label="Key company statistics">
          <div>
            <strong>100+</strong>
            <span>Success projects</span>
          </div>
          <div>
            <strong>3000+</strong>
            <span>Materials</span>
          </div>
          <div>
            <strong>100+</strong>
            <span>Happy customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
