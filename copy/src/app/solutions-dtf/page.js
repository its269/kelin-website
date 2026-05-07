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

import SolutionsDTFClient from "./SolutionsDTFClient";

export const metadata = {
    title: "DTF Printing Solutions Philippines | Direct to Film Printers | Kelin Graphics System",
    description: "Explore Kelin Philippines' DTF (Direct to Film) printing solutions — DTF printers, powder shakers, and heat press systems for garment decoration.",
    keywords: "DTF printing Philippines, direct to film printer, DTF powder shaker, garment printing Philippines, Kelin Philippines DTF",
    openGraph: {
        title: "DTF Printing Solutions Philippines | Direct to Film Printers | Kelin Graphics System",
        description: "Explore Kelin Philippines' DTF (Direct to Film) printing solutions — DTF printers, powder shakers, and heat press systems for garment decoration.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "DTF Printing Solutions Philippines | Direct to Film Printers | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-dtf",
    },
};

export default function Page() {
    return <SolutionsDTFClient />;
}
