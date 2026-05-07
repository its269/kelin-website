// app/blogs-4-promotional-display/BlogsClient.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import "./blogs.css";
import Header from '../components/Header';

export default function BlogsPage() {
    const blogPosts = [
        { id: 1, title: "Roll Up Banner", category: "Banner Stands", excerpt: "The go-to portable display for trade shows, events, and retail — easy setup, compact, and highly impactful.", date: "March 2026", image: '/promotional-display/roll-up-banner.webp' },
        { id: 2, title: "X Banner Stand", category: "Banner Stands", excerpt: "Lightweight and budget-friendly, the X banner stand is ideal for indoor promotions and storefront displays.", date: "March 2026", image: '/promotional-display/x-banner-stand.webp' },
        { id: 3, title: "Adjustable Banner Stand", category: "Banner Stands", excerpt: "Versatile height-adjustable stand that accommodates various banner sizes for flexible display setups.", date: "March 2026", image: '/promotional-display/Adjustable Banner Stand.webp' },
        { id: 4, title: "Feather Wing Banner", category: "Outdoor Displays", excerpt: "Eye-catching feather-shaped banners designed to withstand outdoor conditions and attract attention from a distance.", date: "February 2026", image: '/promotional-display/Feather Wing Banner.webp' },
        { id: 5, title: "Teardrop Banner Stand", category: "Outdoor Displays", excerpt: "Aerodynamic teardrop design keeps your banner taut and visible even in windy outdoor environments.", date: "February 2026", image: '/promotional-display/teardrop-banner-stand.webp' },
        { id: 6, title: "Single Sided Poster Stand", category: "Poster Stands", excerpt: "Clean, professional single-sided poster display ideal for lobbies, malls, and point-of-sale areas.", date: "February 2026", image: '/promotional-display/single-sided-poster-stand-printed.webp' },
        { id: 7, title: "Double Sided Poster Stand", category: "Poster Stands", excerpt: "Maximize visibility from both directions — perfect for high-traffic areas and corridor placements.", date: "January 2026", image: '/promotional-display/double-sided-poster-stand.webp' },
        { id: 8, title: "Iron Poster Stand", category: "Poster Stands", excerpt: "Sturdy iron construction provides a durable and stable base for heavy-duty poster displays.", date: "January 2026", image: '/promotional-display/iron poster stand.webp' },
        { id: 9, title: "Round Base Poster Banner", category: "Poster Stands", excerpt: "Stable round base design ensures your poster banner stands firm on any flat surface.", date: "January 2026", image: '/promotional-display/round-base-poster-banner.webp' },
        { id: 10, title: "Aluminum Easel Stand", category: "Easel Stands", excerpt: "Lightweight aluminum easel with adjustable angle — perfect for signage, artworks, and event displays.", date: "December 2025", image: '/promotional-display/Aluminum Easel Stand.webp' },
        { id: 11, title: "Wooden Easel Stand", category: "Easel Stands", excerpt: "Classic wooden easel providing an elegant presentation for photos, canvases, and promotional boards.", date: "December 2025", image: '/promotional-display/wooden-easel-stand.webp' },
        { id: 12, title: "Triangle Banner Easel Stand", category: "Easel Stands", excerpt: "Unique triangular frame combines an easel and a banner stand into one compact, attention-grabbing display.", date: "December 2025", image: '/promotional-display/triangle-banner-easel-stand.webp' },
        { id: 13, title: "Human Standee", category: "Specialty Displays", excerpt: "Life-size human-shaped cutout standees for immersive brand experiences, photo ops, and store promotions.", date: "November 2025", image: '/promotional-display/human-standee.webp' },
        { id: 14, title: "Pop Up Structure", category: "Exhibition Displays", excerpt: "Modular pop-up fabric structures for large exhibition booths — fast assembly, stunning full-color graphics.", date: "November 2025", image: '/promotional-display/pop-up-structure.webp' },
        { id: 15, title: "Portable Backdrop", category: "Exhibition Displays", excerpt: "Collapsible fabric backdrop ideal for photo shoots, press walls, and event stage branding.", date: "November 2025", image: '/promotional-display/portable-backdrop.webp' },
        { id: 16, title: "Mini Promotional Booth", category: "Promotional Booths", excerpt: "Compact booth solution perfect for mall events, product launches, and sampling campaigns.", date: "October 2025", image: '/promotional-display/promotional-booth-small.webp' },
        { id: 17, title: "Regular Promotional Booth", category: "Promotional Booths", excerpt: "Standard-size promotional booth with full branding potential for trade shows and exhibits.", date: "October 2025", image: '/promotional-display/promotional-booth-regular.webp' },
        { id: 18, title: "Semi Circle Promotional Booth", category: "Promotional Booths", excerpt: "Curved semi-circle design creates an inviting, open booth layout that draws visitors in.", date: "October 2025", image: '/promotional-display/promotional-booth-semi-circle.webp' },
        { id: 19, title: "Door Frame Banner Stand", category: "Banner Stands", excerpt: "Attention-grabbing door frame display that turns any entrance into a powerful branding opportunity.", date: "September 2025", image: '/promotional-display/door-frame-banner-stand.webp' },
        { id: 20, title: "Aluminum Data Rack", category: "Specialty Displays", excerpt: "Organized and stylish aluminum rack for displaying brochures, catalogs, and printed materials.", date: "September 2025", image: '/promotional-display/data-rack-aluminum.webp' },
        { id: 21, title: "Iron Data Rack", category: "Specialty Displays", excerpt: "Heavy-duty iron data rack for high-volume literature distribution at events and offices.", date: "September 2025", image: '/promotional-display/data-rack-iron.webp' },
        { id: 22, title: "New Rotating Lightbox", category: "Lightboxes", excerpt: "Dynamic rotating LED lightbox that showcases your brand 360° — ideal for retail and exhibition use.", date: "August 2025", image: '/promotional-display/Rotating Lightbox Round 3 (1).webp' },
        { id: 23, title: "LED Menu Lightbox Double Poles Stand", category: "Lightboxes", excerpt: "Slim LED-illuminated menu lightbox on a double pole stand — perfect for restaurants and cafes.", date: "August 2025", image: '/promotional-display/lead menu lightbox double poles stand.webp' },
        { id: 24, title: "New Windproof Display", category: "Outdoor Displays", excerpt: "Engineered for outdoor environments, this windproof display keeps your graphics stable and visible in all conditions.", date: "August 2025", image: '/promotional-display/Windproof Display  (2).webp' },
    ];

    // Data for the 'You Might Also Like' section
    const suggestedPosts = [
        {
            id: 's1',
            title: "Machine Guides & Operational Tips",
            category: "Machines",
            excerpt: "Browse technical guides and operational insights for all Kelin printing machines, cutters, laser systems, and more.",
            image: "/machines.png",
            link: "/blogs"
        },
        {
            id: 's2',
            title: "Printable Media & Substrates Guide",
            category: "Materials",
            excerpt: "Explore guides on vinyl stickers, tarpaulins, sublimation papers, and specialty films for your printing projects.",
            image: "/materials.png",
            link: "/blogs-1-materials"
        },
        {
            id: 's3',
            title: "Accessories & Maintenance Kits",
            category: "Accessories",
            excerpt: "Find the right cleaning kits, spare parts, and accessories to keep your machines running at peak performance.",
            image: "/accessories.png",
            link: "/blogs-2-accessories"
        },
        {
            id: 's4',
            title: "Ink Guides: Eco-Solvent, UV, Sublimation & DTF",
            category: "Inks",
            excerpt: "Compare ink types, understand compatibility, and choose the right ink solution for your printing business.",
            image: "/inks.png",
            link: "/blogs-3-inks"
        }
    ];

    const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <main className="luxor-page-container">
            <Header />

            <header className="luxor-header">
                <h1>Promotional Display</h1>
                <p>Explore guides on roll-up banners, pop-up booths, feather banners, easel stands, and more display solutions to make your brand stand out.</p>
            </header>

            {/* --- Suggested Section (top) --- */}
            <section className="suggested-section">
                <div className="suggested-header">
                    <div className="suggested-header-left">
                        <span className="suggested-eyebrow">EXPLORE</span>
                        <h2 className="suggested-title">You Might Also Like</h2>
                    </div>
                    <p className="suggested-subtitle">Discover related guides on machines, inks, accessories, and materials.</p>
                </div>
                <div className="suggested-cards">
                    {suggestedPosts.map((post, i) => (
                        <Link key={post.id} href={post.link} className={`suggested-card suggested-card--${i}`}>
                            <div className="suggested-card-img-wrap">
                                <img src={post.image || '/dummy-image-square.jpg'} alt={post.title} className="suggested-card-img" loading="lazy" />
                                <div className="suggested-card-overlay" />
                            </div>
                            <div className="suggested-card-body">
                                <span className="suggested-card-pill">{post.category}</span>
                                <h3 className="suggested-card-title">{post.title}</h3>
                                <p className="suggested-card-excerpt">{post.excerpt}</p>
                                <span className="suggested-card-cta">Read More <span aria-hidden="true">→</span></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <nav className="category-filter">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <section className="luxor-grid">
                {filteredPosts.map((post) => (
                    <article key={post.id} className="luxor-card">
                        <div className="card-image-container">
                            <img
                                src={post.image || '/dummy-image-square.jpg'}
                                alt={post.title}
                                className="card-img"
                            />
                        </div>
                        <div className="card-content">
                            <span className="category-pill">{post.category}</span>
                            <h3>{post.title}</h3>
                            <p className="post-excerpt">{post.excerpt}</p>
                            <Link
                                href={`/promotional-display`}
                                className="read-guide-link"
                            >
                                View Product &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
