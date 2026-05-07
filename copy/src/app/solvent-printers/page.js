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

import SolventPrintersClient from "./SolventPrintersClient";

export const metadata = {
    title: "Eco-Solvent & Solvent Printers Philippines | Kelin Graphics System",
    description: "Explore Kelin Philippines' eco-solvent and solvent printer lineup for outdoor signage, vehicle graphics, and wide-format production printing.",
    keywords: "eco-solvent printer Philippines, solvent printer, wide format printer Philippines, outdoor signage printer, Kelin Philippines printer",
    openGraph: {
        title: "Eco-Solvent & Solvent Printers Philippines | Kelin Graphics System",
        description: "Explore Kelin Philippines' eco-solvent and solvent printer lineup for outdoor signage, vehicle graphics, and wide-format production printing.",
        images: [{ url: "/eco-solvent-machines/SMART.webp", width: 1200, height: 630, alt: "Eco-Solvent & Solvent Printers Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solvent-printers",
    },
};

export default function Page() {
    return <SolventPrintersClient />;
}
