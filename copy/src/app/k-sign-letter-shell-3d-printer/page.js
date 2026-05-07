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

import KSignLetterShell3DPrinterClient from "./KSignLetterShell3DPrinterClient";

export const metadata = {
    title: "K-Sign Letter Shell 3D Printer | Kelin Graphics System Philippines",
    description: "The K-Sign Letter Shell 3D Printer produces channel letter shells and 3D signage components for backlit signage fabrication. Available at Kelin Philippines.",
    keywords: "K-Sign letter shell 3D printer Philippines, channel letter machine, 3D signage printer, backlit letter fabrication, Kelin Graphics System",
    openGraph: {
        title: "K-Sign Letter Shell 3D Printer | Kelin Graphics System Philippines",
        description: "The K-Sign Letter Shell 3D Printer produces channel letter shells and 3D signage components for backlit signage fabrication. Available at Kelin Philippines.",
        images: [{ url: "/laser-machines/k-sign-b330.webp", width: 1200, height: 630, alt: "K-Sign Letter Shell 3D Printer | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/k-sign-letter-shell-3d-printer",
    },
};

export default function Page() {
    return <KSignLetterShell3DPrinterClient />;
}
