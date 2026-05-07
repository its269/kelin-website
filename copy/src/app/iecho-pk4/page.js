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

import IEchoPK4Client from "./IEchoPK4Client";

export const metadata = {
    title: "IECHO PK4 Automatic Intelligent Cutting System | Kelin Graphics System",
    description: "The IECHO PK4 delivers industrial-grade precision cutting with automatic feeding, CCD positioning, and oscillating knife technology. Available at Kelin Philippines.",
    keywords: "IECHO PK4 cutting system, automatic cutter Philippines, CCD cutting machine, intelligent cutting system, Kelin Philippines",
    openGraph: {
        title: "IECHO PK4 Automatic Intelligent Cutting System | Kelin Graphics System",
        description: "The IECHO PK4 delivers industrial-grade precision cutting with automatic feeding, CCD positioning, and oscillating knife technology. Available at Kelin Philippines.",
        images: [{ url: "/cutting-machines/PK4 (2).webp", width: 1200, height: 630, alt: "IECHO PK4 Automatic Intelligent Cutting System | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/iecho-pk4",
    },
};

export default function Page() {
    return <IEchoPK4Client />;
}
