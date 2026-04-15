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

import R2000RollerClient from "./R2000RollerClient";

export const metadata = {
    title: "R2000 Roller Heat Press Machine | Kelin Graphics System Philippines",
    description: "The R2000 Roller Heat Press is a continuous roller-style heat transfer machine for high-volume sublimation and garment printing. Available at Kelin Philippines.",
    keywords: "R2000 roller heat press Philippines, roller sublimation machine, continuous heat press, garment sublimation Philippines, Kelin Graphics System",
    openGraph: {
        title: "R2000 Roller Heat Press Machine | Kelin Graphics System Philippines",
        description: "The R2000 Roller Heat Press is a continuous roller-style heat transfer machine for high-volume sublimation and garment printing. Available at Kelin Philippines.",
        images: [{ url: "/heatpress/dual-pneumatic.webp", width: 1200, height: 630, alt: "R2000 Roller Heat Press Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/r2000-roller",
    },
};

export default function Page() {
    return <R2000RollerClient />;
}
