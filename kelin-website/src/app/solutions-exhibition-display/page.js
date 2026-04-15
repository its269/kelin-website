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

import SolutionsExhibitionDisplayClient from "./SolutionsExhibitionDisplayClient";

export const metadata = {
    title: "Exhibition Display Solutions Philippines | Kelin Graphics System",
    description: "Browse Kelin Philippines' exhibition display solutions — banner stands, poster displays, pop-up displays, and specialty exhibition systems for events and trade shows.",
    keywords: "exhibition display Philippines, banner stand, pop-up display, trade show display Philippines, Kelin Graphics System exhibition",
    openGraph: {
        title: "Exhibition Display Solutions Philippines | Kelin Graphics System",
        description: "Browse Kelin Philippines' exhibition display solutions — banner stands, poster displays, pop-up displays, and specialty exhibition systems for events and trade shows.",
        images: [{ url: "/promotional-display/x-banner.jpg", width: 1200, height: 630, alt: "Exhibition Display Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-exhibition-display",
    },
};

export default function Page() {
    return <SolutionsExhibitionDisplayClient />;
}
