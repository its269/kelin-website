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

import HeatPressClient from "./HeatPressClient";

export const metadata = {
    title: "Heat Press Machines Philippines | Sublimation & Transfer | Kelin Graphics System",
    description: "Explore Kelin Philippines' heat press machine lineup — manual, pneumatic, and automatic heat presses for sublimation transfer and garment decoration.",
    keywords: "heat press machine Philippines, sublimation heat press, garment heat transfer, pneumatic heat press, Kelin Philippines heat press",
    openGraph: {
        title: "Heat Press Machines Philippines | Sublimation & Transfer | Kelin Graphics System",
        description: "Explore Kelin Philippines' heat press machine lineup — manual, pneumatic, and automatic heat presses for sublimation transfer and garment decoration.",
        images: [{ url: "/heatpress/dual-pneumatic.webp", width: 1200, height: 630, alt: "Heat Press Machines Philippines | Sublimation & Transfer | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/heatpress",
    },
};

export default function Page() {
    return <HeatPressClient />;
}
