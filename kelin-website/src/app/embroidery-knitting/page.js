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

import EmbroideryKnittingClient from "./EmbroideryKnittingClient";

export const metadata = {
    title: "Embroidery & Knitting Machines Philippines | Kelin Graphics System",
    description: "Explore Kelin Philippines' embroidery and knitting machine lineup — multi-head embroidery systems and computerized knitting machines for garment production.",
    keywords: "embroidery machine Philippines, knitting machine, multi-head embroidery, computerized embroidery Philippines, Kelin Graphics System",
    openGraph: {
        title: "Embroidery & Knitting Machines Philippines | Kelin Graphics System",
        description: "Explore Kelin Philippines' embroidery and knitting machine lineup — multi-head embroidery systems and computerized knitting machines for garment production.",
        images: [{ url: "/embroidery_knitting/promaker-embroidery.webp", width: 1200, height: 630, alt: "Embroidery & Knitting Machines Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/embroidery-knitting",
    },
};

export default function Page() {
    return <EmbroideryKnittingClient />;
}
