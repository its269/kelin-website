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

import ColdLaminatorClient from "./ColdLaminatorClient";

export const metadata = {
    title: "Cold Laminator Philippines | Fulei & Wide Format Laminators | Kelin Graphics System",
    description: "Explore Kelin Philippines' cold laminator lineup — wide format cold laminators for protecting printed graphics, vehicle wrap, and display media.",
    keywords: "cold laminator Philippines, wide format laminator, graphic laminator, Fulei laminator, Kelin Philippines laminator",
    openGraph: {
        title: "Cold Laminator Philippines | Fulei & Wide Format Laminators | Kelin Graphics System",
        description: "Explore Kelin Philippines' cold laminator lineup — wide format cold laminators for protecting printed graphics, vehicle wrap, and display media.",
        images: [{ url: "/laminator/fulei-laminator.webp", width: 1200, height: 630, alt: "Cold Laminator Philippines | Fulei & Wide Format Laminators | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/cold-laminator",
    },
};

export default function Page() {
    return <ColdLaminatorClient />;
}
