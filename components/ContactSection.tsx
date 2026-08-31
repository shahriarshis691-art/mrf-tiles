"use client";

import { useState, type FormEvent } from "react";
import { OUTLETS } from "./outlet-data";

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
      className="shrink-0 text-gold/80"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const inputClass =
  "w-full border border-zinc-200 bg-white px-4 py-3.5 text-[13px] text-zinc-950 placeholder:text-zinc-500 transition-colors outline-none focus:border-gold/60 focus-visible:ring-1 focus-visible:ring-gold/30";

const outlineButtonClass =
  "mt-8 inline-flex h-14 w-full items-center justify-center border border-gold bg-transparent px-8 text-[12px] font-medium uppercase tracking-[0.08em] text-zinc-900 transition-colors duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white sm:w-auto";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const primaryOutlet = OUTLETS[0];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-gold">
              GET IN TOUCH
            </p>

            <h2
              id="contact-heading"
              className="mt-5 font-sans text-[2rem] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-zinc-950 sm:text-[2.35rem]"
            >
              Contact Us
            </h2>

            <span className="mt-5 block h-px w-12 bg-gold/70" />

            <p className="mt-7 max-w-md text-[13px] leading-relaxed text-zinc-800 sm:text-sm">
              Visit our showrooms, request a consultation, or reach out for
              project guidance. Our team is ready to help you select the
              perfect surfaces for your space.
            </p>

            <div className="mt-10 space-y-6">
              {OUTLETS.map((outlet) => (
                <div key={outlet.name}>
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-zinc-950">
                    {outlet.name.toUpperCase()}
                  </p>
                  <address className="mt-2 not-italic">
                    <p className="text-[12px] leading-relaxed text-zinc-800 sm:text-[13px]">
                      {outlet.address.map((line, index) => (
                        <span key={line}>
                          {line}
                          {index < outlet.address.length - 1 ? (
                            <br />
                          ) : null}
                        </span>
                      ))}
                    </p>
                  </address>
                </div>
              ))}
            </div>

            <a
              href={`tel:${primaryOutlet.phone}`}
              className="mt-10 inline-flex items-center gap-2.5 text-[12px] font-medium tracking-[0.08em] text-gold transition-colors hover:text-zinc-900"
            >
              <PhoneIcon />
              {primaryOutlet.phoneDisplay}
            </a>
          </div>

          <div>
            {submitted ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center border border-zinc-200 bg-white px-8 py-16 text-center">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-gold">
                  MESSAGE RECEIVED
                </p>
                <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-zinc-800">
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-zinc-200 bg-white px-6 py-10 sm:px-8 sm:py-12"
              >
                <p className="text-[11px] font-semibold tracking-[0.22em] text-zinc-950">
                  SEND A MESSAGE
                </p>

                <div className="mt-8 space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
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
                      placeholder="Phone number"
                      className={inputClass}
                    />
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
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
