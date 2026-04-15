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

import InksClient from "./InksClient";

export const metadata = {
    title: "Printing Inks Philippines | DTF, Sublimation, Eco-Solvent Inks | Kelin Graphics System",
    description: "Explore Kelin Philippines' complete ink lineup — DTF inks, sublimation inks, eco-solvent inks, UV inks, and cleaning solutions for wide-format printing.",
    keywords: "printing inks Philippines, DTF ink, sublimation ink, eco-solvent ink, UV ink, Kelin Philippines inks",
    openGraph: {
        title: "Printing Inks Philippines | DTF, Sublimation, Eco-Solvent Inks | Kelin Graphics System",
        description: "Explore Kelin Philippines' complete ink lineup — DTF inks, sublimation inks, eco-solvent inks, UV inks, and cleaning solutions for wide-format printing.",
        images: [{ url: "/inks/BRILLIANT DTF INK 1L/brilliant-dtf-ink-1l.webp", width: 1200, height: 630, alt: "Printing Inks Philippines | DTF, Sublimation, Eco-Solvent Inks | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/inks",
    },
};

export default function Page() {
    return <InksClient />;
}
