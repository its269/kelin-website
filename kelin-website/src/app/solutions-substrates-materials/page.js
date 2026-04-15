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

import SolutionsSubstratesMaterialsClient from "./SolutionsSubstratesMaterialsClient";

export const metadata = {
    title: "Substrates & Materials Philippines | Printable Media | Kelin Graphics System",
    description: "Browse Kelin Philippines' complete range of printing substrates and materials — sticker vinyl, tarpaulin, sublimation paper, backlit film, and rigid boards.",
    keywords: "substrates Philippines, printable media, sticker vinyl, tarpaulin, sublimation paper, backlit film, rigid board Philippines, Kelin Graphics System",
    openGraph: {
        title: "Substrates & Materials Philippines | Printable Media | Kelin Graphics System",
        description: "Browse Kelin Philippines' complete range of printing substrates and materials — sticker vinyl, tarpaulin, sublimation paper, backlit film, and rigid boards.",
        images: [{ url: "/dummy-image-square.jpg", width: 1200, height: 630, alt: "Substrates & Materials Philippines | Printable Media | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-substrates-materials",
    },
};

export default function Page() {
    return <SolutionsSubstratesMaterialsClient />;
}
