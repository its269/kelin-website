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

import SolutionsThreadworkClient from "./SolutionsThreadworkClient";

export const metadata = {
    title: "Threadwork & Embroidery Solutions Philippines | Kelin Graphics System",
    description: "Discover Kelin Philippines' threadwork and embroidery solutions — multi-head embroidery machines and knitting systems for garment and textile production.",
    keywords: "threadwork solutions Philippines, embroidery machine Philippines, knitting machine, garment embroidery Philippines, Kelin Graphics System threadwork",
    openGraph: {
        title: "Threadwork & Embroidery Solutions Philippines | Kelin Graphics System",
        description: "Discover Kelin Philippines' threadwork and embroidery solutions — multi-head embroidery machines and knitting systems for garment and textile production.",
        images: [{ url: "/embroidery_knitting/promaker-embroidery.webp", width: 1200, height: 630, alt: "Threadwork & Embroidery Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-threadwork",
    },
};

export default function Page() {
    return <SolutionsThreadworkClient />;
}
