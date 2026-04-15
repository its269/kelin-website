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

import PromotionalDisplayClient from "./PromotionalDisplayClient";

export const metadata = {
    title: "Promotional Display & Exhibition Systems Philippines | Kelin Graphics System",
    description: "Browse Kelin Philippines' full range of promotional display and exhibition systems — banner stands, poster displays, X-banners, pop-up displays, and specialty exhibition systems.",
    keywords: "promotional display Philippines, banner stand, exhibition display, X-banner, pop-up display, Kelin Philippines display systems",
    openGraph: {
        title: "Promotional Display & Exhibition Systems Philippines | Kelin Graphics System",
        description: "Browse Kelin Philippines' full range of promotional display and exhibition systems — banner stands, poster displays, X-banners, pop-up displays, and specialty exhibition systems.",
        images: [{ url: "/promotional-display/x-banner.jpg", width: 1200, height: 630, alt: "Promotional Display & Exhibition Systems Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/promotional-display",
    },
};

export default function Page() {
    return <PromotionalDisplayClient />;
}
