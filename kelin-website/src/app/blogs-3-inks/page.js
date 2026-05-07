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
                "headline": "Blog | Printer & Cutter Reviews, Buying Guides | Kelin Graphics System",
                "description": "Read in-depth reviews, buying guides, and product comparisons for wide-format printers, cutters, and finishing equipment from Kelin Philippines.",
                "url": "https://kelinph.com/blogs-3-inks",
                "publisher": { "@type": "Organization", "name": "Kelin Graphics System", "logo": { "@type": "ImageObject", "url": "https://kelinph.com/marquee-logo/inks/kelin-logo.png" } }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What types of printing inks does Kelin carry?", "acceptedAnswer": { "@type": "Answer", "text": "Kelin carries a wide range of printing inks including sublimation inks, DTF inks, eco-solvent inks, UV inks, and cleaning solutions from brands like Vivid, Eagle V2, Phoenix, Brilliant, and Papijet — compatible with major wide format printer brands." } },
                    { "@type": "Question", "name": "What is the difference between sublimation ink and DTF ink?", "acceptedAnswer": { "@type": "Answer", "text": "Sublimation ink is used for dye-sublimation printing on polyester fabrics and coated hard surfaces, bonding through heat and pressure. DTF (Direct to Film) ink is printed on PET film and transferred to garments via adhesive powder and a heat press, enabling vibrant prints on cotton and mixed fabrics." } },
                    { "@type": "Question", "name": "How do I choose the right ink for my wide format printer?", "acceptedAnswer": { "@type": "Answer", "text": "Choosing the right ink depends on your printer model, printhead type, and application. Kelin\'s team can recommend compatible inks for eco-solvent, sublimation, UV, and DTF printers to ensure optimal print quality, color gamut, and printhead longevity." } }
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
