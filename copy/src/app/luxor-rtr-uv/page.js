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

import LuxorRTRUVClient from "./LuxorRTRUVClient";

export const metadata = {
    title: "Luxor RTR UV Roll-to-Roll UV Printer | Kelin Graphics System Philippines",
    description: "The Luxor RTR UV is a roll-to-roll UV printer for flexible media, labels, and backlit film. Discover full specs and applications at Kelin Philippines.",
    keywords: "Luxor RTR UV printer Philippines, roll to roll UV printer, UV flexible media printer, UV label printer Philippines, Kelin Graphics System",
    openGraph: {
        title: "Luxor RTR UV Roll-to-Roll UV Printer | Kelin Graphics System Philippines",
        description: "The Luxor RTR UV is a roll-to-roll UV printer for flexible media, labels, and backlit film. Discover full specs and applications at Kelin Philippines.",
        images: [{ url: "/uv-machines/luxor-rtr-uv.webp", width: 1200, height: 630, alt: "Luxor RTR UV Roll-to-Roll UV Printer | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/luxor-rtr-uv",
    },
};

export default function Page() {
    return <LuxorRTRUVClient />;
}
