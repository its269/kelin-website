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

import GCCExpert52LXClient from "./GCCExpert52LXClient";

export const metadata = {
    title: "GCC Expert 52LX Vinyl Cutter Plotter | Kelin Graphics System Philippines",
    description: "The GCC Expert 52LX is a wide-body vinyl cutter plotter for large sticker, signage, and vehicle graphics production. Available at Kelin Philippines.",
    keywords: "GCC Expert 52LX vinyl cutter Philippines, wide format cutter plotter, GCC Philippines, Kelin Graphics System cutter",
    openGraph: {
        title: "GCC Expert 52LX Vinyl Cutter Plotter | Kelin Graphics System Philippines",
        description: "The GCC Expert 52LX is a wide-body vinyl cutter plotter for large sticker, signage, and vehicle graphics production. Available at Kelin Philippines.",
        images: [{ url: "/cutting-machines/gcc-expert-lx.webp", width: 1200, height: 630, alt: "GCC Expert 52LX Vinyl Cutter Plotter | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/gcc-expert-52lx",
    },
};

export default function Page() {
    return <GCCExpert52LXClient />;
}
