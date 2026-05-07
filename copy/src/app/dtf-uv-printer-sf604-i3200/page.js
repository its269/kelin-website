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

import DTFUVPrinterSF604I3200Client from "./DTFUVPrinterSF604I3200Client";

export const metadata = {
    title: "DTF UV Printer SF604-i3200 | Kelin Graphics System Philippines",
    description: "The SF604-i3200 is a wide-format DTF UV printer with EPSON I3200 printhead for high-speed direct-to-film and UV printing. Available at Kelin Philippines.",
    keywords: "DTF UV printer SF604 Philippines, I3200 DTF UV printer, wide format DTF UV, EPSON I3200 UV printer, Kelin Graphics System",
    openGraph: {
        title: "DTF UV Printer SF604-i3200 | Kelin Graphics System Philippines",
        description: "The SF604-i3200 is a wide-format DTF UV printer with EPSON I3200 printhead for high-speed direct-to-film and UV printing. Available at Kelin Philippines.",
        images: [{ url: "/sublimation_dtf/smart-dtf.webp", width: 1200, height: 630, alt: "DTF UV Printer SF604-i3200 | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/dtf-uv-printer-sf604-i3200",
    },
};

export default function Page() {
    return <DTFUVPrinterSF604I3200Client />;
}
