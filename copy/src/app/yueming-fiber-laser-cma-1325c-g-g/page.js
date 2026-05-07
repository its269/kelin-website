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

import YuemingFiberLaserCMA1325Client from "./YuemingFiberLaserCMA1325Client";

export const metadata = {
    title: "Yueming Fiber Laser CMA-1325C-G-G | Kelin Graphics System Philippines",
    description: "The Yueming Fiber Laser CMA-1325C-G-G is a large-format CO2 and fiber laser cutting machine for metal, acrylic, wood, and signage materials. Available at Kelin Philippines.",
    keywords: "Yueming fiber laser CMA-1325C Philippines, CO2 laser cutting machine, fiber laser Philippines, large format laser cutter, Kelin Graphics System",
    openGraph: {
        title: "Yueming Fiber Laser CMA-1325C-G-G | Kelin Graphics System Philippines",
        description: "The Yueming Fiber Laser CMA-1325C-G-G is a large-format CO2 and fiber laser cutting machine for metal, acrylic, wood, and signage materials. Available at Kelin Philippines.",
        images: [{ url: "/laser-machines/hanniu-k1390.webp", width: 1200, height: 630, alt: "Yueming Fiber Laser CMA-1325C-G-G | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/yueming-fiber-laser-cma-1325c-g-g",
    },
};

export default function Page() {
    return <YuemingFiberLaserCMA1325Client />;
}
