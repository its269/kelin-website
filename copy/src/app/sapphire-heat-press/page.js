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

import SapphireHeatPressClient from "./SapphireHeatPressClient";

export const metadata = {
    title: "Sapphire Heat Press Machine | Kelin Graphics System Philippines",
    description: "The Sapphire Heat Press is a precision manual heat press for sublimation transfers and garment decoration. Available at Kelin Philippines.",
    keywords: "Sapphire heat press Philippines, manual heat press machine, sublimation heat press, garment heat transfer Philippines, Kelin Graphics System",
    openGraph: {
        title: "Sapphire Heat Press Machine | Kelin Graphics System Philippines",
        description: "The Sapphire Heat Press is a precision manual heat press for sublimation transfers and garment decoration. Available at Kelin Philippines.",
        images: [{ url: "/heatpress/dual-pneumatic.webp", width: 1200, height: 630, alt: "Sapphire Heat Press Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/sapphire-heat-press",
    },
};

export default function Page() {
    return <SapphireHeatPressClient />;
}
