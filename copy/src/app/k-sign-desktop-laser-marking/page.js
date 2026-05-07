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

import KSignDesktopLaserMarkingClient from "./KSignDesktopLaserMarkingClient";

export const metadata = {
    title: "K-Sign Desktop Laser Marking Machine | Kelin Graphics System Philippines",
    description: "The K-Sign Desktop Laser Marking Machine delivers precise laser marking for metal, plastic, and promotional products. Available at Kelin Philippines.",
    keywords: "K-Sign desktop laser marking machine Philippines, laser marker, metal laser marking, promotional product laser, Kelin Graphics System",
    openGraph: {
        title: "K-Sign Desktop Laser Marking Machine | Kelin Graphics System Philippines",
        description: "The K-Sign Desktop Laser Marking Machine delivers precise laser marking for metal, plastic, and promotional products. Available at Kelin Philippines.",
        images: [{ url: "/laser-machines/k-sign-b330.webp", width: 1200, height: 630, alt: "K-Sign Desktop Laser Marking Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/k-sign-desktop-laser-marking",
    },
};

export default function Page() {
    return <KSignDesktopLaserMarkingClient />;
}
