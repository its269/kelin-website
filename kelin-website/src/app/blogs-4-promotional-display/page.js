import BlogsClient from "./BlogsClient";

export const metadata = {
    title: "Promotional Display Blog | Banners, Booths & Trade Show Displays | Kelin Graphics System",
    description: "Explore guides on roll-up banners, pop-up booths, feather banners, easel stands, and more promotional display solutions from Kelin Philippines.",
    keywords: "promotional display Philippines, roll up banner guide, pop up booth, trade show display, Kelin Graphics System blog",
    openGraph: {
        title: "Promotional Display Blog | Banners, Booths & Trade Show Displays | Kelin Graphics System",
        description: "Explore guides on roll-up banners, pop-up booths, feather banners, easel stands, and more promotional display solutions from Kelin Philippines.",
        images: [{ url: "/promotional-display/roll-up-banner.webp", width: 1200, height: 630, alt: "Promotional Display Blog | Kelin Graphics System" }],
        type: "website",
    },
    alternates: {
        canonical: "https://kelinph.com/blogs-4-promotional-display",
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "headline": "Promotional Display Blog | Banners, Booths & Trade Show Displays | Kelin Graphics System",
                "description": "Explore guides on roll-up banners, pop-up booths, feather banners, easel stands, and more promotional display solutions from Kelin Philippines.",
                "url": "https://kelinph.com/blogs-4-promotional-display",
                "publisher": { "@type": "Organization", "name": "Kelin Graphics System", "logo": { "@type": "ImageObject", "url": "https://kelinph.com/marquee-logo/inks/kelin-logo.png" } }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What types of promotional displays does Kelin offer?", "acceptedAnswer": { "@type": "Answer", "text": "Kelin offers a wide range of promotional display solutions including roll-up retractable banners, pop-up booth displays, feather banners, X-banners, L-banners, easel stands, and tension fabric systems for trade shows, events, and retail environments." } },
                    { "@type": "Question", "name": "What is a roll-up banner and when should I use it?", "acceptedAnswer": { "@type": "Answer", "text": "A roll-up banner (also called a retractable banner) is a portable display stand where the printed graphic rolls up into the base for easy transport and storage. It is ideal for trade shows, presentations, retail promotions, and events where quick setup and portability are important." } },
                    { "@type": "Question", "name": "What are pop-up booth displays best used for?", "acceptedAnswer": { "@type": "Answer", "text": "Pop-up booth displays create a large branded backdrop for trade show booths, exhibitions, corporate events, and product launches. They are lightweight, easy to assemble, and can be printed with full-color graphics for maximum visual impact." } }
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
