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

import PromakerEmbroidery1201Client from "./PromakerEmbroidery1201Client";

export const metadata = {
    title: "Promaker Embroidery Machine 1201 (Single Head) | Kelin Graphics System Philippines",
    description: "The Promaker Embroidery 1201 is a single-head computerized embroidery machine for garment decoration and textile embroidery. Available at Kelin Philippines.",
    keywords: "Promaker embroidery machine 1201 Philippines, single head embroidery machine, computerized embroidery Philippines, garment embroidery, Kelin Graphics System",
    openGraph: {
        title: "Promaker Embroidery Machine 1201 (Single Head) | Kelin Graphics System Philippines",
        description: "The Promaker Embroidery 1201 is a single-head computerized embroidery machine for garment decoration and textile embroidery. Available at Kelin Philippines.",
        images: [{ url: "/embroidery_knitting/promaker-embroidery.webp", width: 1200, height: 630, alt: "Promaker Embroidery Machine 1201 (Single Head) | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/promaker-embroidery-1201",
    },
};

export default function Page() {
    return <PromakerEmbroidery1201Client />;
}
