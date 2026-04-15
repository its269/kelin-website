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

import SublimationDTFClient from "./SublimationDTFClient";

export const metadata = {
    title: "Sublimation & DTF Printers Philippines | Kelin Graphics System",
    description: "Explore Kelin Philippines' sublimation and DTF printer lineup for garment decoration, fabric printing, and textile production.",
    keywords: "sublimation printer Philippines, DTF printer, garment printer, fabric printer, textile printing Philippines, Kelin Graphics System",
    openGraph: {
        title: "Sublimation & DTF Printers Philippines | Kelin Graphics System",
        description: "Explore Kelin Philippines' sublimation and DTF printer lineup for garment decoration, fabric printing, and textile production.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "Sublimation & DTF Printers Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/sublimation-dtf",
    },
};

export default function Page() {
    return <SublimationDTFClient />;
}
