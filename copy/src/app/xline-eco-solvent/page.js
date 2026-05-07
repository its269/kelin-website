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

import XlineEcoSolventClient from "./XlineEcoSolventClient";

export const metadata = {
    title: "XLine Eco-Solvent Printer PN3302-EC / PN3304-EC | Kelin Graphics System",
    description: "The XLine Eco-Solvent printer delivers up to 85 m2/h with EPSON I3200 printheads, infrared drying, and a 6-zone adsorption platform. Available at Kelin Philippines.",
    keywords: "XLine eco-solvent printer, PN3302-EC, PN3304-EC, EPSON I3200 large format printer Philippines, Kelin Philippines eco-solvent",
    openGraph: {
        title: "XLine Eco-Solvent Printer PN3302-EC / PN3304-EC | Kelin Graphics System",
        description: "The XLine Eco-Solvent printer delivers up to 85 m2/h with EPSON I3200 printheads, infrared drying, and a 6-zone adsorption platform. Available at Kelin Philippines.",
        images: [{ url: "/eco-solvent-machines/Apollo.webp", width: 1200, height: 630, alt: "XLine Eco-Solvent Printer PN3302-EC / PN3304-EC | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/xline-eco-solvent",
    },
};

export default function Page() {
    return <XlineEcoSolventClient />;
}
