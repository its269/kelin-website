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

import GCCPumaIVClient from "./GCCPumaIVClient";

export const metadata = {
    title: "GCC Puma IV Vinyl Cutter Plotter | Kelin Graphics System Philippines",
    description: "The GCC Puma IV is a professional vinyl cutter plotter for signage, vehicle graphics, and sticker production. Discover full specs at Kelin Philippines.",
    keywords: "GCC Puma IV vinyl cutter Philippines, cutter plotter, signage cutter, GCC Philippines, Kelin Graphics System",
    openGraph: {
        title: "GCC Puma IV Vinyl Cutter Plotter | Kelin Graphics System Philippines",
        description: "The GCC Puma IV is a professional vinyl cutter plotter for signage, vehicle graphics, and sticker production. Discover full specs at Kelin Philippines.",
        images: [{ url: "/cutting-machines/GCC PUMA IV.webp", width: 1200, height: 630, alt: "GCC Puma IV Vinyl Cutter Plotter | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/gcc-puma-iv",
    },
};

export default function Page() {
    return <GCCPumaIVClient />;
}
