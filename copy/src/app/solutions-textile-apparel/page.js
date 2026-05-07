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

import SolutionsTextileApparelClient from "./SolutionsTextileApparelClient";

export const metadata = {
    title: "Textile & Apparel Printing Solutions Philippines | Kelin Graphics System",
    description: "Discover Kelin Philippines' complete textile and apparel printing solutions — DTF printers, sublimation machines, embroidery systems, and heat press equipment.",
    keywords: "textile printing Philippines, apparel printing solutions, DTF printer, sublimation printer, embroidery machine, Kelin Philippines textile",
    openGraph: {
        title: "Textile & Apparel Printing Solutions Philippines | Kelin Graphics System",
        description: "Discover Kelin Philippines' complete textile and apparel printing solutions — DTF printers, sublimation machines, embroidery systems, and heat press equipment.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "Textile & Apparel Printing Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-textile-apparel",
    },
};

export default function Page() {
    return <SolutionsTextileApparelClient />;
}
