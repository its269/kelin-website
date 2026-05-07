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

import LiyuXLineDQSClient from "./LiyuXLineDQSClient";

export const metadata = {
    title: "Liyu X-Line DQS UV Hybrid Printer | Kelin Graphics System Philippines",
    description: "The Liyu X-Line DQS is a UV hybrid flatbed and roll-to-roll printer for rigid and flexible media. Discover full specs and applications at Kelin Philippines.",
    keywords: "Liyu X-Line DQS UV hybrid printer Philippines, UV flatbed printer, UV roll to roll printer, Liyu Philippines, Kelin Graphics System UV",
    openGraph: {
        title: "Liyu X-Line DQS UV Hybrid Printer | Kelin Graphics System Philippines",
        description: "The Liyu X-Line DQS is a UV hybrid flatbed and roll-to-roll printer for rigid and flexible media. Discover full specs and applications at Kelin Philippines.",
        images: [{ url: "/uv-machines/luxor-rtr-uv.webp", width: 1200, height: 630, alt: "Liyu X-Line DQS UV Hybrid Printer | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/liyu-x-line-dqs-uv-hybrid-printer",
    },
};

export default function Page() {
    return <LiyuXLineDQSClient />;
}
