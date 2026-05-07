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

import SmartexKnittingClient from "./SmartexKnittingClient";

export const metadata = {
    title: "Smartex Knitting Machine GSCE 1-52 | Kelin Graphics System Philippines",
    description: "The Smartex GSCE 1-52 is a computerized flat knitting machine for knitwear and textile production. Available at Kelin Philippines.",
    keywords: "Smartex knitting machine Philippines, GSCE 1-52, flat knitting machine, computerized knitting Philippines, Kelin Graphics System",
    openGraph: {
        title: "Smartex Knitting Machine GSCE 1-52 | Kelin Graphics System Philippines",
        description: "The Smartex GSCE 1-52 is a computerized flat knitting machine for knitwear and textile production. Available at Kelin Philippines.",
        images: [{ url: "/embroidery_knitting/promaker-embroidery.webp", width: 1200, height: 630, alt: "Smartex Knitting Machine GSCE 1-52 | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/smartex-knitting-gsce-1-52",
    },
};

export default function Page() {
    return <SmartexKnittingClient />;
}
