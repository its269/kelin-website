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
    return <BlogsClient />;
}
