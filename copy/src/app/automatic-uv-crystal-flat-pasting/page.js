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

import AutomaticUVCrystalFlatPastingClient from "./AutomaticUVCrystalFlatPastingClient";

export const metadata = {
    title: "Automatic UV Crystal Flat Pasting Machine | Kelin Graphics System Philippines",
    description: "The Automatic UV Crystal Flat Pasting Machine applies UV crystal resin coatings to labels, stickers, and promotional items automatically. Available at Kelin Philippines.",
    keywords: "UV crystal flat pasting machine Philippines, epoxy dome machine, UV resin coating machine, label finishing Philippines, Kelin Graphics System",
    openGraph: {
        title: "Automatic UV Crystal Flat Pasting Machine | Kelin Graphics System Philippines",
        description: "The Automatic UV Crystal Flat Pasting Machine applies UV crystal resin coatings to labels, stickers, and promotional items automatically. Available at Kelin Philippines.",
        images: [{ url: "/uv-machines/luxor-rtr-uv.webp", width: 1200, height: 630, alt: "Automatic UV Crystal Flat Pasting Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/automatic-uv-crystal-flat-pasting",
    },
};

export default function Page() {
    return <AutomaticUVCrystalFlatPastingClient />;
}
