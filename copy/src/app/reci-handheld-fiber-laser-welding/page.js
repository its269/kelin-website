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

import ReciHandheldFiberLaserWeldingClient from "./ReciHandheldFiberLaserWeldingClient";

export const metadata = {
    title: "RECI Handheld Fiber Laser Welding Machine | Kelin Graphics System Philippines",
    description: "The RECI Handheld Fiber Laser Welding Machine delivers portable, precision laser welding for stainless steel, aluminum, and metal fabrication. Available at Kelin Philippines.",
    keywords: "RECI handheld fiber laser welding Philippines, portable laser welder, fiber laser welding machine Philippines, metal laser welding, Kelin Graphics System",
    openGraph: {
        title: "RECI Handheld Fiber Laser Welding Machine | Kelin Graphics System Philippines",
        description: "The RECI Handheld Fiber Laser Welding Machine delivers portable, precision laser welding for stainless steel, aluminum, and metal fabrication. Available at Kelin Philippines.",
        images: [{ url: "/laser-machines/handheld-fiber-laser.webp", width: 1200, height: 630, alt: "RECI Handheld Fiber Laser Welding Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/reci-handheld-fiber-laser-welding",
    },
};

export default function Page() {
    return <ReciHandheldFiberLaserWeldingClient />;
}
