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

import SmartRJ24Client from "./SmartRJ24Client";

export const metadata = {
    title: "SMART RJ24-2004-i3200 Eco-Solvent Printer | Kelin Graphics System",
    description: "The SMART RJ24-2004-i3200 is a dual-head eco-solvent large format printer delivering up to 112 m2/h with EPSON I3200 printheads. Available at Kelin Philippines.",
    keywords: "SMART RJ24 eco-solvent printer, RJ24-2004-i3200, EPSON I3200 printer Philippines, large format eco-solvent, Kelin Philippines printer",
    openGraph: {
        title: "SMART RJ24-2004-i3200 Eco-Solvent Printer | Kelin Graphics System",
        description: "The SMART RJ24-2004-i3200 is a dual-head eco-solvent large format printer delivering up to 112 m2/h with EPSON I3200 printheads. Available at Kelin Philippines.",
        images: [{ url: "/eco-solvent-machines/SMART.webp", width: 1200, height: 630, alt: "SMART RJ24-2004-i3200 Eco-Solvent Printer | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/smart-rj24-2004-i3200-eco-solvent",
    },
};

export default function Page() {
    return <SmartRJ24Client />;
}
