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

import HandheldFiberLaserClient from "./HandheldFiberLaserClient";

export const metadata = {
    title: "Handheld Fiber Laser Marking Machine | Kelin Graphics System Philippines",
    description: "The Handheld Fiber Laser Marking Machine delivers portable, precise laser marking on metal, stainless steel, and industrial parts. Available at Kelin Philippines.",
    keywords: "handheld fiber laser Philippines, portable laser marking machine, fiber laser marker, metal laser marking Philippines, Kelin Graphics System",
    openGraph: {
        title: "Handheld Fiber Laser Marking Machine | Kelin Graphics System Philippines",
        description: "The Handheld Fiber Laser Marking Machine delivers portable, precise laser marking on metal, stainless steel, and industrial parts. Available at Kelin Philippines.",
        images: [{ url: "/laser-machines/handheld-fiber-laser.webp", width: 1200, height: 630, alt: "Handheld Fiber Laser Marking Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/handheld-fiber-laser",
    },
};

export default function Page() {
    return <HandheldFiberLaserClient />;
}
