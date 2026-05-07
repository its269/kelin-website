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

import SolutionsIndustrialSublimationClient from "./SolutionsIndustrialSublimationClient";

export const metadata = {
    title: "Industrial Sublimation Printing Solutions Philippines | Kelin Graphics System",
    description: "Discover Kelin Philippines' industrial sublimation printing solutions — high-speed sublimation printers, heat presses, and accessories for fabric and textile production.",
    keywords: "industrial sublimation Philippines, sublimation printing solutions, fabric sublimation machine, Kelin Philippines sublimation",
    openGraph: {
        title: "Industrial Sublimation Printing Solutions Philippines | Kelin Graphics System",
        description: "Discover Kelin Philippines' industrial sublimation printing solutions — high-speed sublimation printers, heat presses, and accessories for fabric and textile production.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "Industrial Sublimation Printing Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-industrial-sublimation",
    },
};

export default function Page() {
    return <SolutionsIndustrialSublimationClient />;
}
