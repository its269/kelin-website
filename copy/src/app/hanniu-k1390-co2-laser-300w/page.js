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

import HanniuK1390CO2Laser300WClient from "./HanniuK1390CO2Laser300WClient";

export const metadata = {
    title: "Hanniu K1390 CO2 Laser 300W | Kelin Graphics System Philippines",
    description: "The Hanniu K1390 CO2 Laser 300W is a high-power laser cutting and engraving machine for thick acrylic, wood, MDF, and industrial signage. Available at Kelin Philippines.",
    keywords: "Hanniu K1390 CO2 laser 300W Philippines, high power laser cutting machine, acrylic laser cutter Philippines, Kelin Graphics System laser",
    openGraph: {
        title: "Hanniu K1390 CO2 Laser 300W | Kelin Graphics System Philippines",
        description: "The Hanniu K1390 CO2 Laser 300W is a high-power laser cutting and engraving machine for thick acrylic, wood, MDF, and industrial signage. Available at Kelin Philippines.",
        images: [{ url: "/laser-machines/hanniu-k1390.webp", width: 1200, height: 630, alt: "Hanniu K1390 CO2 Laser 300W | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/hanniu-k1390-co2-laser-300w",
    },
};

export default function Page() {
    return <HanniuK1390CO2Laser300WClient />;
}
