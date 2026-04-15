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

import SolutionsCuttingMachinesClient from "./SolutionsCuttingMachinesClient";

export const metadata = {
    title: "Cutting Machine Solutions Philippines | Kelin Graphics System",
    description: "Browse Kelin Philippines' cutting machine solutions — IECHO flatbed cutters, GCC vinyl cutters, and intelligent cutting systems for signage and packaging.",
    keywords: "cutting machine solutions Philippines, flatbed cutter, vinyl cutter, intelligent cutting system Philippines, Kelin Graphics System cutter",
    openGraph: {
        title: "Cutting Machine Solutions Philippines | Kelin Graphics System",
        description: "Browse Kelin Philippines' cutting machine solutions — IECHO flatbed cutters, GCC vinyl cutters, and intelligent cutting systems for signage and packaging.",
        images: [{ url: "/cutting-machines/PK1209 (1).webp", width: 1200, height: 630, alt: "Cutting Machine Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-cutting-machines",
    },
};

export default function Page() {
    return <SolutionsCuttingMachinesClient />;
}
