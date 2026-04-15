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

import SolutionsLaserMachinesClient from "./SolutionsLaserMachinesClient";

export const metadata = {
    title: "Laser Machine Solutions Philippines | Kelin Graphics System",
    description: "Browse Kelin Philippines' laser machine solutions — CO2 laser cutters, fiber laser markers, and desktop laser machines for signage, fabric, and industrial use.",
    keywords: "laser machine solutions Philippines, CO2 laser cutter, fiber laser marker, desktop laser Philippines, Kelin Graphics System laser",
    openGraph: {
        title: "Laser Machine Solutions Philippines | Kelin Graphics System",
        description: "Browse Kelin Philippines' laser machine solutions — CO2 laser cutters, fiber laser markers, and desktop laser machines for signage, fabric, and industrial use.",
        images: [{ url: "/laser-machines/hanniu-k1390.webp", width: 1200, height: 630, alt: "Laser Machine Solutions Philippines | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/solutions-laser-machines",
    },
};

export default function Page() {
    return <SolutionsLaserMachinesClient />;
}
