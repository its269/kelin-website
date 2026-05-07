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

import GCCExpert24LXClient from "./GCCExpert24LXClient";

export const metadata = {
    title: "GCC Expert 24LX Vinyl Cutter Plotter | Kelin Graphics System Philippines",
    description: "The GCC Expert 24LX is a desktop-class vinyl cutter plotter with precision cutting for stickers, labels, and decals. Available at Kelin Philippines.",
    keywords: "GCC Expert 24LX vinyl cutter Philippines, cutter plotter, desktop cutter, GCC Philippines, Kelin Graphics System",
    openGraph: {
        title: "GCC Expert 24LX Vinyl Cutter Plotter | Kelin Graphics System Philippines",
        description: "The GCC Expert 24LX is a desktop-class vinyl cutter plotter with precision cutting for stickers, labels, and decals. Available at Kelin Philippines.",
        images: [{ url: "/cutting-machines/GCC Expert LX  EX-24LX  Without Stand (1).webp", width: 1200, height: 630, alt: "GCC Expert 24LX Vinyl Cutter Plotter | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/gcc-expert-24lx",
    },
};

export default function Page() {
    return <GCCExpert24LXClient />;
}
