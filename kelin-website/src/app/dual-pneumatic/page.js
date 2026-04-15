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

import DualPneumaticClient from "./DualPneumaticClient";

export const metadata = {
    title: "Dual Pneumatic Heat Press Machine | Kelin Graphics System Philippines",
    description: "The Dual Pneumatic Heat Press delivers consistent pressure and temperature for high-volume garment and sublimation transfer printing. Available at Kelin Philippines.",
    keywords: "dual pneumatic heat press Philippines, pneumatic heat press machine, sublimation heat press, garment heat transfer Philippines, Kelin Graphics System",
    openGraph: {
        title: "Dual Pneumatic Heat Press Machine | Kelin Graphics System Philippines",
        description: "The Dual Pneumatic Heat Press delivers consistent pressure and temperature for high-volume garment and sublimation transfer printing. Available at Kelin Philippines.",
        images: [{ url: "/heatpress/dual-pneumatic.webp", width: 1200, height: 630, alt: "Dual Pneumatic Heat Press Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/dual-pneumatic",
    },
};

export default function Page() {
    return <DualPneumaticClient />;
}
