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

import BlogsClient from "./BlogsClient";

export const metadata = {
    title: "Blog | Printer & Cutter Reviews, Buying Guides | Kelin Graphics System",
    description: "Read in-depth reviews, buying guides, and product comparisons for wide-format printers, cutters, and finishing equipment from Kelin Philippines.",
    keywords: "Kelin Philippines blog, printer reviews, cutter reviews, wide format printer buying guide, Kelin Graphics System blog",
    openGraph: {
        title: "Blog | Printer & Cutter Reviews, Buying Guides | Kelin Graphics System",
        description: "Read in-depth reviews, buying guides, and product comparisons for wide-format printers, cutters, and finishing equipment from Kelin Philippines.",
        images: [{ url: "/eco-solvent-machines/SMART.webp", width: 1200, height: 630, alt: "Blog | Printer & Cutter Reviews, Buying Guides | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/blogs",
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "headline": "Printing Materials Blog | Vinyl, Tarpaulin, Canvas & Substrates | Kelin Graphics System",
                "description": "Explore guides and reviews on wide format printing materials including vinyl, tarpaulin, canvas, backlit film, one-way vision, and specialty substrates from Kelin Philippines.",
                "url": "https://kelinph.com/blogs-1-materials",
                "publisher": { "@type": "Organization", "name": "Kelin Graphics System", "logo": { "@type": "ImageObject", "url": "https://kelinph.com/marquee-logo/inks/kelin-logo.png" } }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What printing materials does Kelin supply for wide format printing?", "acceptedAnswer": { "@type": "Answer", "text": "Kelin supplies a comprehensive range of wide format printing materials including vinyl banners, self-adhesive vinyl, backlit film, tarpaulin, canvas, one-way vision film, mesh banner, and specialty substrates suitable for eco-solvent, UV, sublimation, and DTF printing." } },
                    { "@type": "Question", "name": "What is the difference between frontlit and backlit tarpaulin?", "acceptedAnswer": { "@type": "Answer", "text": "Frontlit tarpaulin is designed to be illuminated from the front and is ideal for outdoor banners and billboards. Backlit tarpaulin is translucent, designed to be lit from behind in lightboxes and illuminated signage for vibrant, glowing display output." } },
                    { "@type": "Question", "name": "How do I choose the right printing substrate for outdoor signage?", "acceptedAnswer": { "@type": "Answer", "text": "For outdoor signage, consider UV and weather resistance, substrate weight, and intended lifespan. PVC vinyl and mesh banners are popular for outdoor use. For long-term outdoor applications, UV-laminated or solvent-printed vinyl with reinforced hems is recommended." } }
                ]
            }
        ]
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <BlogsClient />
        </>
    );
}