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

import ApolloMaxPlusIIClient from "./ApolloMaxPlusIIClient";

export const metadata = {
    title: "ApolloMax Plus II PZG3208-KV High-Speed Printer | Kelin Graphics System",
    description: "The ApolloMax Plus II PZG3208-KV is a high-speed UV hybrid large format printer. Discover full specs, features, and applications at Kelin Philippines.",
    keywords: "ApolloMax Plus II, PZG3208-KV, high speed UV printer Philippines, large format hybrid printer, Kelin Philippines UV printer",
    openGraph: {
        title: "ApolloMax Plus II PZG3208-KV High-Speed Printer | Kelin Graphics System",
        description: "The ApolloMax Plus II PZG3208-KV is a high-speed UV hybrid large format printer. Discover full specs, features, and applications at Kelin Philippines.",
        images: [{ url: "/eco-solvent-machines/Apollo.webp", width: 1200, height: 630, alt: "ApolloMax Plus II PZG3208-KV High-Speed Printer | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/apollomax-plus-II",
    },
};

export default function Page() {
    return <ApolloMaxPlusIIClient />;
}
