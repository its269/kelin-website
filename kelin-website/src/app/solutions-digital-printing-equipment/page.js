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

import SolutionsDigitalPrintingClient from "./SolutionsDigitalPrintingClient";

export const metadata = {
    title: "Digital Printing Equipment Solutions Philippines | Kelin Graphics System",
    description: "Discover Kelin Philippines' digital printing equipment solutions — eco-solvent printers, UV printers, DTF systems, and sublimation machines for wide-format production.",
    keywords: "digital printing equipment Philippines, eco-solvent printer, UV printer, DTF system, sublimation printer Philippines, Kelin Graphics System",
    openGraph: {
        title: "Digital Printing Equipment Solutions Philippines | Kelin Graphics System",
        description: "Discover Kelin Philippines' digital printing equipment solutions — eco-solvent printers, UV printers, DTF systems, and sublimation machines for wide-format production.",
        images: [{ url: "/eco-solvent-machines/SMART.webp", width: 1200, height: 630, alt: "Digital Printing Equipment Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-digital-printing-equipment",
    },
};

export default function Page() {
    return <SolutionsDigitalPrintingClient />;
}
