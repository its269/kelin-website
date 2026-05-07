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

import KirinClient from "./KirinClient";

export const metadata = {
    title: "Kirin DA182T Plus DTF Printer | Kelin Graphics System Philippines",
    description: "The Kirin DA182T Plus is a compact DTF printer designed for on-demand garment printing. Discover full specs and applications at Kelin Philippines.",
    keywords: "Kirin DA182T Plus DTF printer Philippines, compact DTF printer, garment printing machine, Kelin Philippines DTF",
    openGraph: {
        title: "Kirin DA182T Plus DTF Printer | Kelin Graphics System Philippines",
        description: "The Kirin DA182T Plus is a compact DTF printer designed for on-demand garment printing. Discover full specs and applications at Kelin Philippines.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "Kirin DA182T Plus DTF Printer | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/kirin",
    },
};

export default function Page() {
    return <KirinClient />;
}
