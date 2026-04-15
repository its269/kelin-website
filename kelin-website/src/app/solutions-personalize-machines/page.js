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

import SolutionsPersonalizeMachinesClient from "./SolutionsPersonalizeMachinesClient";

export const metadata = {
    title: "Personalization Machine Solutions Philippines | Kelin Graphics System",
    description: "Explore Kelin Philippines' personalization machine solutions — UV printers, laser markers, DTF systems, and heat presses for custom product printing.",
    keywords: "personalization machine Philippines, custom product printing, UV printer Philippines, laser marking Philippines, Kelin Graphics System personalization",
    openGraph: {
        title: "Personalization Machine Solutions Philippines | Kelin Graphics System",
        description: "Explore Kelin Philippines' personalization machine solutions — UV printers, laser markers, DTF systems, and heat presses for custom product printing.",
        images: [{ url: "/uv-machines/luxor-rtr-uv.webp", width: 1200, height: 630, alt: "Personalization Machine Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-personalize-machines",
    },
};

export default function Page() {
    return <SolutionsPersonalizeMachinesClient />;
}
