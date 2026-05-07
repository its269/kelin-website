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
                "headline": "Printing Accessories Blog | Cutting Mats, Blades, Tapes & Tools | Kelin Graphics System",
                "description": "Browse guides and reviews on wide format printing accessories including cutting mats, blades, banner tapes, acrylic benders, and finishing tools from Kelin Philippines.",
                "url": "https://kelinph.com/blogs-2-accessories",
                "publisher": { "@type": "Organization", "name": "Kelin Graphics System", "logo": { "@type": "ImageObject", "url": "https://kelinph.com/marquee-logo/inks/kelin-logo.png" } }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What printing accessories does Kelin carry?", "acceptedAnswer": { "@type": "Answer", "text": "Kelin carries a wide selection of printing accessories including cutting mats, vinyl cutter blades, banner tapes, squeegees, acrylic benders, heat guns, grommets, banner poles, and maintenance tools for wide format printers and cutters." } },
                    { "@type": "Question", "name": "What is a cutting mat used for in a print shop?", "acceptedAnswer": { "@type": "Answer", "text": "Cutting mats protect work surfaces and extend blade life when trimming vinyl, paper, and film by hand. Self-healing cutting mats are essential tools in any print finishing and sign-making workshop." } },
                    { "@type": "Question", "name": "What type of banner tape is best for outdoor signage?", "acceptedAnswer": { "@type": "Answer", "text": "For outdoor signage, heavy-duty double-sided banner tape or reinforcing mesh tape with strong UV-resistant adhesive is recommended. These ensure banners remain securely mounted even in wind, rain, and prolonged sun exposure." } }
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