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

import SublimationPrinterFD6198EClient from "./SublimationPrinterFD6198EClient";

export const metadata = {
    title: "Sublimation Printer FD6198E | Kelin Graphics System Philippines",
    description: "The FD6198E is a high-speed sublimation printer for fabric, sportswear, and soft signage production. Discover full specs and applications at Kelin Philippines.",
    keywords: "sublimation printer Philippines, FD6198E, fabric printer, sportswear sublimation, dye sublimation printer Philippines, Kelin Graphics System",
    openGraph: {
        title: "Sublimation Printer FD6198E | Kelin Graphics System Philippines",
        description: "The FD6198E is a high-speed sublimation printer for fabric, sportswear, and soft signage production. Discover full specs and applications at Kelin Philippines.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "Sublimation Printer FD6198E | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/sublimation-printer-fd6198e",
    },
};

export default function Page() {
    return <SublimationPrinterFD6198EClient />;
}
