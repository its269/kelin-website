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

import IEchoTK4SClient from "./IEchoTK4SClient";

export const metadata = {
    title: "IECHO TK4S Large Format Cutting System | Kelin Graphics System Philippines",
    description: "The IECHO TK4S is a large format flatbed digital cutting system engineered for high-volume production of signage, displays, and packaging. Available at Kelin Philippines.",
    keywords: "IECHO TK4S large format cutter Philippines, flatbed digital cutting system, IECHO Philippines, Kelin Graphics System cutter",
    openGraph: {
        title: "IECHO TK4S Large Format Cutting System | Kelin Graphics System Philippines",
        description: "The IECHO TK4S is a large format flatbed digital cutting system engineered for high-volume production of signage, displays, and packaging. Available at Kelin Philippines.",
        images: [{ url: "/cutting-machines/TK4S Large format cutting system.webp", width: 1200, height: 630, alt: "IECHO TK4S Large Format Cutting System | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/iecho-tk4s",
    },
};

export default function Page() {
    return <IEchoTK4SClient />;
}
