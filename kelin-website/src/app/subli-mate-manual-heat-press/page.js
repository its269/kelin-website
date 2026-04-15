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

import SubliMateHeatPressClient from "./SubliMateHeatPressClient";

export const metadata = {
    title: "Subli-Mate Manual Heat Press Machine | Kelin Graphics System Philippines",
    description: "The Subli-Mate Manual Heat Press is a reliable manual heat transfer machine for sublimation and garment decoration at small to medium volume. Available at Kelin Philippines.",
    keywords: "Subli-Mate manual heat press Philippines, manual heat press machine, sublimation heat press, garment heat transfer Philippines, Kelin Graphics System",
    openGraph: {
        title: "Subli-Mate Manual Heat Press Machine | Kelin Graphics System Philippines",
        description: "The Subli-Mate Manual Heat Press is a reliable manual heat transfer machine for sublimation and garment decoration at small to medium volume. Available at Kelin Philippines.",
        images: [{ url: "/heatpress/dual-pneumatic.webp", width: 1200, height: 630, alt: "Subli-Mate Manual Heat Press Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/subli-mate-manual-heat-press",
    },
};

export default function Page() {
    return <SubliMateHeatPressClient />;
}
