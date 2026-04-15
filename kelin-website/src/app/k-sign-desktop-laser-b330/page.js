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

import KSignDesktopLaserB330Client from "./KSignDesktopLaserB330Client";

export const metadata = {
    title: "K-Sign Desktop Laser B330 | Kelin Graphics System Philippines",
    description: "The K-Sign Desktop Laser B330 is a compact desktop CO2 laser cutter and engraver for acrylic, wood, leather, and signage materials. Available at Kelin Philippines.",
    keywords: "K-Sign B330 desktop laser Philippines, compact laser cutter, CO2 laser engraver Philippines, desktop laser machine, Kelin Graphics System",
    openGraph: {
        title: "K-Sign Desktop Laser B330 | Kelin Graphics System Philippines",
        description: "The K-Sign Desktop Laser B330 is a compact desktop CO2 laser cutter and engraver for acrylic, wood, leather, and signage materials. Available at Kelin Philippines.",
        images: [{ url: "/laser-machines/k-sign-b330.webp", width: 1200, height: 630, alt: "K-Sign Desktop Laser B330 | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/k-sign-desktop-laser-b330",
    },
};

export default function Page() {
    return <KSignDesktopLaserB330Client />;
}
