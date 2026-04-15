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

import BlogsClient from "./BlogsClient";

export const metadata = {
    title: "Blog | Printer & Cutter Reviews, Buying Guides | Kelin Graphics System",
    description: "Read in-depth reviews, buying guides, and product comparisons for wide-format printers, cutters, and finishing equipment from Kelin Philippines.",
    keywords: "Kelin Philippines blog, printer reviews, cutter reviews, wide format printer buying guide, Kelin Graphics System blog",
    openGraph: {
        title: "Blog | Printer & Cutter Reviews, Buying Guides | Kelin Graphics System",
        description: "Read in-depth reviews, buying guides, and product comparisons for wide-format printers, cutters, and finishing equipment from Kelin Philippines.",
        images: [{ url: "/eco-solvent-machines/SMART.webp", width: 1200, height: 630, alt: "Blog | Printer & Cutter Reviews, Buying Guides | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/blogs",
    },
};

export default function Page() {
    return <BlogsClient />;
}
