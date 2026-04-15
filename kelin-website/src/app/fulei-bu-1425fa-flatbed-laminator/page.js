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

import FuleiBU1425FAClient from "./FuleiBU1425FAClient";

export const metadata = {
    title: "Fulei BU-1425FA Flatbed Laminator | Kelin Graphics System Philippines",
    description: "The Fulei BU-1425FA is a flatbed cold laminator for wide-format graphic lamination. Discover full specs and applications at Kelin Philippines.",
    keywords: "Fulei BU-1425FA flatbed laminator Philippines, cold laminator, graphic laminator, wide format laminator Philippines, Kelin Graphics System",
    openGraph: {
        title: "Fulei BU-1425FA Flatbed Laminator | Kelin Graphics System Philippines",
        description: "The Fulei BU-1425FA is a flatbed cold laminator for wide-format graphic lamination. Discover full specs and applications at Kelin Philippines.",
        images: [{ url: "/laminator/fulei-laminator.webp", width: 1200, height: 630, alt: "Fulei BU-1425FA Flatbed Laminator | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/fulei-bu-1425fa-flatbed-laminator",
    },
};

export default function Page() {
    return <FuleiBU1425FAClient />;
}
