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

import LaminatorClient from "./LaminatorClient";

export const metadata = {
    title: "Laminators Philippines | Cold & Warm Laminators | Kelin Graphics System",
    description: "Browse Kelin Philippines' laminator lineup — cold laminators, warm automatic laminators, and flatbed laminators for wide-format graphic finishing.",
    keywords: "laminator Philippines, cold laminator, warm laminator, wide format laminator, graphic laminator Philippines, Kelin Graphics System",
    openGraph: {
        title: "Laminators Philippines | Cold & Warm Laminators | Kelin Graphics System",
        description: "Browse Kelin Philippines' laminator lineup — cold laminators, warm automatic laminators, and flatbed laminators for wide-format graphic finishing.",
        images: [{ url: "/laminator/fulei-laminator.webp", width: 1200, height: 630, alt: "Laminators Philippines | Cold & Warm Laminators | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/laminator",
    },
};

export default function Page() {
    return <LaminatorClient />;
}
