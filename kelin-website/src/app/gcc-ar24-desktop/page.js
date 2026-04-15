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

import GCCAR24DesktopClient from "./GCCAR24DesktopClient";

export const metadata = {
    title: "GCC AR-24 Desktop Vinyl Cutter | Kelin Graphics System Philippines",
    description: "The GCC AR-24 is a desktop vinyl cutter plotter ideal for stickers, decals, and labels. Compact, precise, and reliable. Available at Kelin Philippines.",
    keywords: "GCC AR-24 desktop vinyl cutter Philippines, cutter plotter, sticker cutter, GCC Philippines, Kelin Graphics System cutter",
    openGraph: {
        title: "GCC AR-24 Desktop Vinyl Cutter | Kelin Graphics System Philippines",
        description: "The GCC AR-24 is a desktop vinyl cutter plotter ideal for stickers, decals, and labels. Compact, precise, and reliable. Available at Kelin Philippines.",
        images: [{ url: "/cutting-machines/GCC AR-24 Desktop (1).webp", width: 1200, height: 630, alt: "GCC AR-24 Desktop Vinyl Cutter | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/gcc-ar24-desktop",
    },
};

export default function Page() {
    return <GCCAR24DesktopClient />;
}
