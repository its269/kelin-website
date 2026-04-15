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

import ThreeDPrinterClient from "./ThreeDPrinterClient";

export const metadata = {
    title: "3D Printer & Letter Shell Machines Philippines | Kelin Graphics System",
    description: "Discover Kelin Philippines' 3D printer and letter shell machine lineup for channel letter production, signage fabrication, and promotional display manufacturing.",
    keywords: "3D printer Philippines, letter shell 3D printer, channel letter machine, signage fabrication Philippines, Kelin Graphics System 3D",
    openGraph: {
        title: "3D Printer & Letter Shell Machines Philippines | Kelin Graphics System",
        description: "Discover Kelin Philippines' 3D printer and letter shell machine lineup for channel letter production, signage fabrication, and promotional display manufacturing.",
        images: [{ url: "/uv-machines/luxor-rtr-uv.webp", width: 1200, height: 630, alt: "3D Printer & Letter Shell Machines Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/3d-printer",
    },
};

export default function Page() {
    return <ThreeDPrinterClient />;
}
