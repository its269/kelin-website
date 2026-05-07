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

import SmartDTFPowderShakerClient from "./SmartDTFPowderShakerClient";

export const metadata = {
    title: "Smart DTF Powder Shaker & Dryer | Kelin Graphics System Philippines",
    description: "The Smart DTF Powder Shaker and Dryer automates DTF powder application and curing for high-volume garment printing. Available at Kelin Philippines.",
    keywords: "DTF powder shaker Philippines, DTF dryer, direct to film powder shaker, DTF machine Philippines, Kelin Graphics System",
    openGraph: {
        title: "Smart DTF Powder Shaker & Dryer | Kelin Graphics System Philippines",
        description: "The Smart DTF Powder Shaker and Dryer automates DTF powder application and curing for high-volume garment printing. Available at Kelin Philippines.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "Smart DTF Powder Shaker & Dryer | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/smart-dtf-powder-shaker",
    },
};

export default function Page() {
    return <SmartDTFPowderShakerClient />;
}
