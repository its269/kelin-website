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

import SmartUVPrinterClient from "./SmartUVPrinterClient";

export const metadata = {
    title: "Smart UV Printer | Kelin Graphics System Philippines",
    description: "The Smart UV Printer is a flatbed UV printing machine for rigid and flexible substrates including acrylic, glass, wood, and PVC board. Available at Kelin Philippines.",
    keywords: "Smart UV printer Philippines, flatbed UV printer, UV printing machine, acrylic UV printer Philippines, Kelin Graphics System UV",
    openGraph: {
        title: "Smart UV Printer | Kelin Graphics System Philippines",
        description: "The Smart UV Printer is a flatbed UV printing machine for rigid and flexible substrates including acrylic, glass, wood, and PVC board. Available at Kelin Philippines.",
        images: [{ url: "/uv-machines/luxor-rtr-uv.webp", width: 1200, height: 630, alt: "Smart UV Printer | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/smart-uv-printer",
    },
};

export default function Page() {
    return <SmartUVPrinterClient />;
}
