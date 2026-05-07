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

import IEchoBK4Client from "./IEchoBK4Client";

export const metadata = {
    title: "IECHO BK4 Flatbed Cutting System | Kelin Graphics System Philippines",
    description: "The IECHO BK4 is a high-performance flatbed digital cutting system for rigid and flexible media. Discover full specs and applications at Kelin Philippines.",
    keywords: "IECHO BK4 flatbed cutter Philippines, digital cutting system, IECHO Philippines, Kelin Graphics System cutter",
    openGraph: {
        title: "IECHO BK4 Flatbed Cutting System | Kelin Graphics System Philippines",
        description: "The IECHO BK4 is a high-performance flatbed digital cutting system for rigid and flexible media. Discover full specs and applications at Kelin Philippines.",
        images: [{ url: "/cutting-machines/BK4 (1).webp", width: 1200, height: 630, alt: "IECHO BK4 Flatbed Cutting System | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/iecho-bk4",
    },
};

export default function Page() {
    return <IEchoBK4Client />;
}
