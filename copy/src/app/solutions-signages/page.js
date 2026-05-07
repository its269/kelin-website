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

import SolutionsSignagesClient from "./SolutionsSignagesClient";

export const metadata = {
    title: "Signage Printing Solutions Philippines | Kelin Graphics System",
    description: "Explore Kelin Philippines' signage printing solutions — eco-solvent printers, UV printers, cutters, and laminators for outdoor and indoor signage production.",
    keywords: "signage printing solutions Philippines, outdoor signage printer, UV signage printer, cutter plotter Philippines, Kelin Graphics System signage",
    openGraph: {
        title: "Signage Printing Solutions Philippines | Kelin Graphics System",
        description: "Explore Kelin Philippines' signage printing solutions — eco-solvent printers, UV printers, cutters, and laminators for outdoor and indoor signage production.",
        images: [{ url: "/eco-solvent-machines/SMART.webp", width: 1200, height: 630, alt: "Signage Printing Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-signages",
    },
};

export default function Page() {
    return <SolutionsSignagesClient />;
}
