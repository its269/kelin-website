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

import CuttingMachineClient from "./CuttingMachineClient";

export const metadata = {
    title: "Cutting Machines Philippines | Vinyl Cutters & Flatbed Cutters | Kelin Graphics System",
    description: "Browse Kelin Philippines' complete cutting machine lineup — vinyl cutters, flatbed cutters, and intelligent cutting systems for signage, sticker, and packaging production.",
    keywords: "cutting machine Philippines, vinyl cutter, flatbed cutter, intelligent cutting system, Kelin Philippines cutting machine",
    openGraph: {
        title: "Cutting Machines Philippines | Vinyl Cutters & Flatbed Cutters | Kelin Graphics System",
        description: "Browse Kelin Philippines' complete cutting machine lineup — vinyl cutters, flatbed cutters, and intelligent cutting systems for signage, sticker, and packaging production.",
        images: [{ url: "/cutting-machines/PK1209 (1).webp", width: 1200, height: 630, alt: "Cutting Machines Philippines | Vinyl Cutters & Flatbed Cutters | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/cutting-machine",
    },
};

export default function Page() {
    return <CuttingMachineClient />;
}
