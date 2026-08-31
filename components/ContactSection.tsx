"use client";

import { useEffect, useState, type FormEvent } from "react";
import { buildWhatsAppUrl } from "@/lib/contact";
import { OUTLETS } from "./outlet-data";
import ScrollReveal from "@/components/ScrollReveal";

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const inputClass =
  "w-full border border-neutral-200 bg-white px-4 py-3.5 text-[13px] text-[#0F0F0F] placeholder:text-neutral-400 transition-colors outline-none focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900/30";

const outlineButtonClass =
  "mt-8 inline-flex h-14 min-w-[44px] items-center justify-center border border-[#0F0F0F] bg-transparent px-8 text-[12px] font-medium uppercase tracking-[0.08em] text-[#0F0F0F] transition-colors duration-300 hover:bg-[#0F0F0F] hover:text-white focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 sm:w-auto";

export default function ContactSection() {
  const [interest, setInterest] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [branchIndex, setBranchIndex] = useState(0);
  const selectedOutlet = OUTLETS[branchIndex] ?? OUTLETS[0];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setInterest(params.get("interest")?.trim() ?? "");
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const topic = String(data.get("interest") ?? "").trim();

    if (!name || !phone || !message) return;

    const url = buildWhatsAppUrl(selectedOutlet.whatsapp, {
      name,
      phone,
      message,
      interest: topic || undefined,
    });

    setWhatsappUrl(url);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.assign(url);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <ScrollReveal variant="slideInLeft">
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
                Get In Touch
              </p>

              <h2
                id="contact-heading"
                className="mt-5 font-sans text-[2rem] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-[#0F0F0F] sm:text-[2.35rem]"
              >
                Contact Us
              </h2>

              <span className="mt-5 block h-px w-12 bg-neutral-900" />

              <p className="mt-7 max-w-md text-[13px] leading-relaxed text-neutral-600 sm:text-sm">
                Visit our showrooms, request a consultation, or send a WhatsApp
                message. Our team is ready to help you select the perfect
                surfaces for your space.
              </p>

              <div className="mt-10 space-y-8">
                {OUTLETS.map((outlet) => (
                  <div key={outlet.name}>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-[#0F0F0F] uppercase">
                      {outlet.name.toUpperCase()}
                    </p>
                    <address className="mt-2 not-italic">
                      <p className="text-[12px] leading-relaxed text-neutral-600 sm:text-[13px]">
                        {outlet.address.map((line, index) => (
                          <span key={line}>
                            {line}
                            {index < outlet.address.length - 1 ? <br /> : null}
                          </span>
                        ))}
                      </p>
                    </address>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <a
                        href={`tel:${outlet.phone}`}
                        className="inline-flex min-h-[44px] items-center gap-2 text-[12px] font-medium tracking-[0.08em] text-neutral-900 transition-colors hover:text-neutral-600 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                      >
                        <PhoneIcon />
                        {outlet.phoneDisplay}
                      </a>
                      <a
                        href={`https://wa.me/${outlet.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center text-[12px] text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={outlet.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center text-[12px] text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1"
                      >
                        Map
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideInRight" delay={0.15}>
            <div>
              {whatsappUrl ? (
                <div className="flex h-full min-h-[20rem] flex-col items-center justify-center border border-neutral-200 bg-white px-8 py-16 text-center">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-neutral-500 uppercase">
                    Continue In WhatsApp
                  </p>
                  <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-neutral-600">
                    Your message is ready to send. Complete it in WhatsApp so our
                    showroom team can reply.
                  </p>
                  <a href={whatsappUrl} className={outlineButtonClass}>
                    Open WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-neutral-200 bg-white px-6 py-10 sm:px-8 sm:py-12"
                >
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-[#0F0F0F] uppercase">
                    Send A Message
                  </p>

                  {interest ? (
                    <p className="mt-3 text-[12px] text-neutral-600">
                      Enquiry: {interest}
                    </p>
                  ) : null}

                  <div className="mt-8 space-y-4">
                    <input type="hidden" name="interest" value={interest} />
                    <div>
                      <label htmlFor="contact-name" className="sr-only">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="sr-only">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="Phone number"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-branch" className="sr-only">
                        Showroom
                      </label>
                      <select
                        id="contact-branch"
                        name="branch"
                        value={branchIndex}
                        onChange={(event) =>
                          setBranchIndex(Number(event.target.value))
                        }
                        className={inputClass}
                      >
                        {OUTLETS.map((outlet, index) => (
                          <option key={outlet.name} value={index}>
                            {outlet.name} — {outlet.locationLine}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  <button type="submit" className={outlineButtonClass}>
                    Send on WhatsApp
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
