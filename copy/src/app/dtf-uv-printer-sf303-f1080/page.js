// =============================================================
// STATIC SITE GENERATION (SSG)
// -------------------------------------------------------------
// This file is a Next.js Server Component (no "use client" at
// the top). Because next.config.mjs sets output: 'export',
// Next.js pre-renders this entire page to a static HTML file
// at build time (next build). No JavaScript server is needed
// at runtime -- the page is served as plain HTML/CSS/JS from
// any static host or CDN.
//
// Two things make SSG work here:
//  1. No "use client" directive  -- keeps this a Server Component
//  2. export const metadata      -- Next.js reads this at build
//     time to inject <title>, <meta>, and OpenGraph tags into
//     the static HTML <head> automatically.
// =============================================================

import DTFUVPrinterSF303F1080Client from "./DTFUVPrinterSF303F1080Client";

export const metadata = {
    title: "DTF UV Printer SF303-F1080 | Kelin Graphics System Philippines",
    description: "The SF303-F1080 is a compact DTF UV printer for direct-to-film and UV flatbed printing on garments and rigid substrates. Available at Kelin Philippines.",
    keywords: "DTF UV printer SF303 Philippines, F1080 DTF UV printer, direct to film UV, compact UV printer Philippines, Kelin Graphics System",
    openGraph: {
        title: "DTF UV Printer SF303-F1080 | Kelin Graphics System Philippines",
        description: "The SF303-F1080 is a compact DTF UV printer for direct-to-film and UV flatbed printing on garments and rigid substrates. Available at Kelin Philippines.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "DTF UV Printer SF303-F1080 | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/dtf-uv-printer-sf303-f1080",
    },
};

export default function Page() {
    return <DTFUVPrinterSF303F1080Client />;
}
