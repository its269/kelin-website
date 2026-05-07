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

import EventsClient from "./EventsClient";

export const metadata = {
    title: "News & Events | Kelin Graphics System Philippines",
    description: "Stay updated with the latest news, product launches, trade show appearances, and events from Kelin Graphics System Philippines.",
    keywords: "Kelin Philippines events, news, product launch, trade show Philippines, Kelin Graphics System events",
    openGraph: {
        title: "News & Events | Kelin Graphics System Philippines",
        description: "Stay updated with the latest news, product launches, trade show appearances, and events from Kelin Graphics System Philippines.",
        images: [{ url: "/marquee-logo/kelin-logo.png", width: 1200, height: 630, alt: "News & Events | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/events",
    },
};

export default function Page() {
    return <EventsClient />;
}
