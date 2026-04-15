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

import IEchoBK3Client from "./IEchoBK3Client";

export const metadata = {
    title: "IECHO BK3 Flatbed Cutting System | Kelin Graphics System Philippines",
    description: "The IECHO BK3 is a compact flatbed digital cutting system for signage, packaging, and display production. Discover full specs and applications at Kelin Philippines.",
    keywords: "IECHO BK3 flatbed cutter Philippines, digital cutting system, IECHO Philippines, Kelin Graphics System cutter",
    openGraph: {
        title: "IECHO BK3 Flatbed Cutting System | Kelin Graphics System Philippines",
        description: "The IECHO BK3 is a compact flatbed digital cutting system for signage, packaging, and display production. Discover full specs and applications at Kelin Philippines.",
        images: [{ url: "/cutting-machines/bk3.webp", width: 1200, height: 630, alt: "IECHO BK3 Flatbed Cutting System | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/iecho-bk3",
    },
};

export default function Page() {
    return <IEchoBK3Client />;
}
