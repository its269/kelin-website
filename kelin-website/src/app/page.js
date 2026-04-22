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

import HomeClient from "./HomeClient";

export const metadata = {
    title: "Kelin Graphics System Philippines | Wide Format Printers, Cutters & Finishing Equipment",
    description: "Kelin Graphics System Philippines is the leading distributor of wide-format printers, cutting machines, UV printers, DTF systems, sublimation machines, laser machines, and finishing equipment. Located in Santa Cruz, Manila.",
    keywords: "Kelin Philippines, wide format printer Philippines, eco-solvent printer, UV printer, cutting machine Philippines, DTF printer, sublimation printer, laser machine Philippines, Kelin Graphics System",
    openGraph: {
        title: "Kelin Graphics System Philippines | Wide Format Printers, Cutters & Finishing Equipment",
        description: "Leading distributor of wide-format printers, cutters, UV printers, DTF systems, sublimation machines, and laser machines in the Philippines.",
        images: [{ url: "/KELIN-LOGO-01.png", width: 1200, height: 630, alt: "Kelin Graphics System Philippines" }],
        type: "website",
        locale: "en_PH",
        siteName: "Kelin Graphics System",
    },
    alternates: {
        canonical: "https://www.kelinph.com",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.kelinph.com",
    name: "Kelin Graphics System",
    description: "Leading distributor of wide-format printers, cutting machines, UV printers, DTF systems, sublimation machines, and laser machines in the Philippines.",
    url: "https://www.kelinph.com",
    logo: "https://www.kelinph.com/KELIN-LOGO-01.png",
    image: "https://www.kelinph.com/machines.png",
    telephone: "+63-2-KELIN",
    address: {
        "@type": "PostalAddress",
        streetAddress: "2115 Felix Huertas Rd",
        addressLocality: "Santa Cruz, Manila",
        addressRegion: "Metro Manila",
        addressCountry: "PH",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 14.6037,
        longitude: 120.9836,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:30",
            closes: "17:30",
        },
    ],
    sameAs: [
        "https://www.facebook.com/KelinGraphicsPH",
    ],
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HomeClient />
        </>
    );
}
