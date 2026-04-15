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

import SolutionsUVDTFClient from "./SolutionsUVDTFClient";

export const metadata = {
    title: "UV DTF Printing Solutions Philippines | Kelin Graphics System",
    description: "Explore Kelin Philippines' UV DTF printing solutions — UV DTF printers, laminators, and accessories for label, sticker, and specialty printing.",
    keywords: "UV DTF printing Philippines, UV DTF printer, UV transfer sticker, UV DTF solutions, Kelin Philippines UV DTF",
    openGraph: {
        title: "UV DTF Printing Solutions Philippines | Kelin Graphics System",
        description: "Explore Kelin Philippines' UV DTF printing solutions — UV DTF printers, laminators, and accessories for label, sticker, and specialty printing.",
        images: [{ url: "/uv-machines/luxor-rtr-uv.webp", width: 1200, height: 630, alt: "UV DTF Printing Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-uv-dtf",
    },
};

export default function Page() {
    return <SolutionsUVDTFClient />;
}
