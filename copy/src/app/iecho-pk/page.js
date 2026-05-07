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

import IEchoPKClient from "./IEchoPKClient";

export const metadata = {
    title: "IECHO PK Automatic Intelligent Cutting System | Kelin Graphics System",
    description: "The IECHO PK Automatic Intelligent Cutting System delivers 1000 mm/s precision cutting with CCD auto-positioning, barcode management, and auto-feeding. Available at Kelin Philippines.",
    keywords: "IECHO PK cutting system, automatic intelligent cutter Philippines, CCD cutting, barcode cutter, 1000mm/s cutter, Kelin Philippines",
    openGraph: {
        title: "IECHO PK Automatic Intelligent Cutting System | Kelin Graphics System",
        description: "The IECHO PK Automatic Intelligent Cutting System delivers 1000 mm/s precision cutting with CCD auto-positioning, barcode management, and auto-feeding. Available at Kelin Philippines.",
        images: [{ url: "/cutting-machines/PK1209 (1).webp", width: 1200, height: 630, alt: "IECHO PK Automatic Intelligent Cutting System | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/iecho-pk",
    },
};

export default function Page() {
    return <IEchoPKClient />;
}
