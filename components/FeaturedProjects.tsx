import Image from "next/image";
import { OUTLETS, type Outlet } from "./outlet-data";

function MapPinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="inline shrink-0 text-gold/80"
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function NavigationIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 opacity-80"
    >
      <path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 opacity-80"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0 opacity-80"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const actionButtonClass =
  "inline-flex h-16 w-full items-center justify-center gap-2.5 rounded-none border border-gold bg-transparent px-8 text-[12px] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#050505] sm:w-fit";

function OutletActions({ outlet }: { outlet: Outlet }) {
  return (
    <div className="mt-8 flex w-full flex-col items-start gap-4 sm:mt-10">
      <a
        href={outlet.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={actionButtonClass}
      >
        <NavigationIcon />
        Get Directions
      </a>
      <div className="flex w-full flex-col items-start gap-2 sm:w-auto">
        <a href={`tel:${outlet.phone}`} className={actionButtonClass}>
          <PhoneIcon />
          Call Outlet
        </a>
        <p className="pl-1 text-[12px] font-light tracking-wide text-white/45">
          {outlet.phoneDisplay}
        </p>
      </div>
      <a
        href={`https://wa.me/${outlet.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={actionButtonClass}
      >
        <WhatsAppIcon />
        WhatsApp Us
      </a>
    </div>
  );
}

function OutletImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative m-0 min-h-[62vw] w-full overflow-hidden md:min-h-0 md:h-full">
      <Image
        src={src}
        alt={alt}
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="block object-cover"
      />
    </figure>
  );
}

function OutletInfo({ outlet }: { outlet: Outlet }) {
  return (
    <div className="flex w-full flex-col justify-center bg-[#050505] px-10 py-16 md:h-full md:px-[9vw] md:py-[8vw]">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
        MRF Galaxy Outlet
      </p>

      <h2 className="mt-5 font-normal tracking-tight text-white [font-size:clamp(32px,3vw,56px)]">
        {outlet.name}
      </h2>

      <address className="mt-6 max-w-[20rem] not-italic">
        <p className="flex items-start gap-2 text-[12px] font-light leading-relaxed text-white/55 sm:text-[13px]">
          <MapPinIcon />
          <span>
            {outlet.address.map((line, index) => (
              <span key={line}>
                {line}
                {index < outlet.address.length - 1 ? <br /> : null}
              </span>
            ))}
          </span>
        </p>
      </address>

      <OutletActions outlet={outlet} />
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section aria-label="MRF Galaxy outlets" className="w-full">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:auto-rows-[minmax(32rem,min(50vw,85vh))]">
        {OUTLETS.map((outlet, index) => {
          const imageOnRight = index % 2 === 1;

          return (
            <div key={outlet.name} className="contents">
              <div
                className={
                  imageOnRight
                    ? "order-1 md:order-2 md:col-start-2"
                    : "order-1 md:order-none"
                }
              >
                <OutletImage src={outlet.image} alt={outlet.alt} />
              </div>
              <div
                className={
                  imageOnRight
                    ? "order-2 md:order-1 md:col-start-1 md:row-start-1"
                    : "order-2 md:order-none"
                }
              >
                <OutletInfo outlet={outlet} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
