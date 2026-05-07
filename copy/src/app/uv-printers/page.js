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

import UVPrintersClient from "./UVPrintersClient";

export const metadata = {
    title: "UV Printers Philippines | Flatbed & Roll-to-Roll UV | Kelin Graphics System",
    description: "Explore Kelin Philippines' UV printer lineup — flatbed UV, roll-to-roll UV, and UV hybrid printers for rigid substrates, glass, acrylic, and specialty media.",
    keywords: "UV printer Philippines, flatbed UV printer, roll to roll UV printer, UV hybrid printer, Kelin Philippines UV printing",
    openGraph: {
        title: "UV Printers Philippines | Flatbed & Roll-to-Roll UV | Kelin Graphics System",
        description: "Explore Kelin Philippines' UV printer lineup — flatbed UV, roll-to-roll UV, and UV hybrid printers for rigid substrates, glass, acrylic, and specialty media.",
        images: [{ url: "/uv-machines/luxor-rtr-uv.webp", width: 1200, height: 630, alt: "UV Printers Philippines | Flatbed & Roll-to-Roll UV | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/uv-printers",
    },
};

export default function Page() {
    return <UVPrintersClient />;
}
