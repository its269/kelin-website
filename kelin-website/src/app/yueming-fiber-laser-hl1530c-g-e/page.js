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

import YuemingHL1530CClient from "./YuemingHL1530CClient";

export const metadata = {
    title: "Yueming Fiber Laser HL1530C-G-E | Kelin Graphics System Philippines",
    description: "The Yueming Fiber Laser HL1530C-G-E is a high-powered fiber laser cutting machine for metal sheet cutting and industrial applications. Available at Kelin Philippines.",
    keywords: "Yueming fiber laser HL1530C Philippines, fiber laser cutting machine, metal laser cutter Philippines, industrial laser cutting, Kelin Graphics System",
    openGraph: {
        title: "Yueming Fiber Laser HL1530C-G-E | Kelin Graphics System Philippines",
        description: "The Yueming Fiber Laser HL1530C-G-E is a high-powered fiber laser cutting machine for metal sheet cutting and industrial applications. Available at Kelin Philippines.",
        images: [{ url: "/laser-machines/hanniu-k1390.webp", width: 1200, height: 630, alt: "Yueming Fiber Laser HL1530C-G-E | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/yueming-fiber-laser-hl1530c-g-e",
    },
};

export default function Page() {
    return <YuemingHL1530CClient />;
}
