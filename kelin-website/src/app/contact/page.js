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

import ContactClient from "./ContactClient";

export const metadata = {
    title: "Contact Kelin Graphics System Philippines | Get a Quote",
    description: "Contact Kelin Graphics System Philippines for product inquiries, demo bookings, technical support, and pricing. Located in Quezon City.",
    keywords: "contact Kelin Philippines, Kelin Graphics System contact, get a quote Philippines, printing machine inquiry Philippines",
    openGraph: {
        title: "Contact Kelin Graphics System Philippines | Get a Quote",
        description: "Contact Kelin Graphics System Philippines for product inquiries, demo bookings, technical support, and pricing. Located in Quezon City.",
        images: [{ url: "/marquee-logo/kelin-logo.png", width: 1200, height: 630, alt: "Contact Kelin Graphics System Philippines | Get a Quote" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/contact",
    },
};

export default function Page() {
    return <ContactClient />;
}
