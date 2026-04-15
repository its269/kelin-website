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

import SmartDTFMachineClient from "./SmartDTFMachineClient";

export const metadata = {
    title: "Smart DTF Printer Machine | Kelin Graphics System Philippines",
    description: "The Smart DTF Machine is a direct-to-film printer built for high-volume garment and textile decoration. Discover full specs at Kelin Philippines.",
    keywords: "Smart DTF printer Philippines, direct to film machine, DTF garment printer, Kelin Philippines DTF machine",
    openGraph: {
        title: "Smart DTF Printer Machine | Kelin Graphics System Philippines",
        description: "The Smart DTF Machine is a direct-to-film printer built for high-volume garment and textile decoration. Discover full specs at Kelin Philippines.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "Smart DTF Printer Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/smart-dtf-machine",
    },
};

export default function Page() {
    return <SmartDTFMachineClient />;
}
