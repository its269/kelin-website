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

import AccessoriesClient from "./AccessoriesClient";

export const metadata = {
    title: "Printing & Cutting Accessories Philippines | Kelin Graphics System",
    description: "Browse Kelin Philippines' complete accessories lineup — cutting tools, ink cartridges, squeegees, maintenance kits, and consumables for wide-format printers and cutters.",
    keywords: "printing accessories Philippines, cutting accessories, ink cartridges Philippines, squeegee, maintenance kit, Kelin Graphics System accessories",
    openGraph: {
        title: "Printing & Cutting Accessories Philippines | Kelin Graphics System",
        description: "Browse Kelin Philippines' complete accessories lineup — cutting tools, ink cartridges, squeegees, maintenance kits, and consumables for wide-format printers and cutters.",
        images: [{ url: "/marquee-logo/kelin-logo.png", width: 1200, height: 630, alt: "Printing & Cutting Accessories Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/accessories",
    },
};

export default function Page() {
    return <AccessoriesClient />;
}
