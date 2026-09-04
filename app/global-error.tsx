"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#ffffff",
          color: "#09090b",
          fontFamily:
            "var(--font-montserrat), Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        <main
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "6rem 1.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#71717a",
            }}
          >
            Critical Error
          </p>
          <h1
            style={{
              marginTop: 24,
              fontSize: "2.5rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            We Hit a Hard Surface
          </h1>
          <p
            style={{
              marginTop: 16,
              maxWidth: 480,
              fontSize: 14,
              lineHeight: 1.6,
              color: "#52525b",
            }}
          >
            A critical error broke this page. Please retry or return to the
            homepage.
          </p>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                minHeight: 44,
                padding: "0 32px",
                border: "1px solid #0A3826",
                background: "#0A3826",
                color: "#ffffff",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            {/* global-error renders outside the root layout, so next/link is unavailable */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                minHeight: 44,
                padding: "0 32px",
                display: "inline-flex",
                alignItems: "center",
                border: "1px solid #e4e4e7",
                color: "#09090b",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Back to Home
            </a>
          </div>
          {error.digest ? (
            <p
              style={{
                marginTop: 24,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#a1a1aa",
              }}
            >
              Reference · {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
