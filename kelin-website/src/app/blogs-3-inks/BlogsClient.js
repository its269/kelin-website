// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./blogs.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their guide URLs
    const guideLinks = {
        "Eco M15 1L": "/blogs-ink-eco-m15",
        "M21 (i3200)": "/blogs-ink-m21-i3200",
        "Phoenix E2 1L": "/blogs-ink-phoenix-e2",
        "Eagle V2 1L": "/blogs-ink-eagle-v2-1l",
        "Eagle V2 5L": "/blogs-ink-eagle-v2-5l",
        "T14 1L": "/blogs-ink-t14-1l",
        "T14 Eco Plus 2L": "/blogs-ink-t14-eco-plus",
        "Cleaning Solutions": "/blogs-ink-cleaning-solutions",
        "Brilliant DTF Textile 1L": "/blogs-ink-brilliant-dtf",
        "Vivid DTF Textile 1L": "/blogs-ink-vivid-dtf",
        "DTF Cleaning Solutions": "/blogs-ink-dtf-cleaning",
        "Vivid Sublimation 1L": "/blogs-ink-vivid-sub-1l",
        "Vivid Sublimation 5L": "/blogs-ink-vivid-sub-5l",
        "Brilliant Sublimation 1L": "/blogs-ink-brilliant-sub",
        "Papijet LTI 203": "/blogs-ink-papijet-lti-203",
        "Papijet LTIP Light": "/blogs-ink-papijet-ltip",
        "Papijet LTI 202 Fluorescent": "/blogs-ink-papijet-fluorescent",
    };

    const blogPosts = [
        // Eco-Solvent Inks
        { id: 1, title: "Eco M15 1L", category: "Eco-Solvent Inks", excerpt: "High-quality eco-solvent ink with excellent color reproduction and minimal odor. Available in Cyan, Magenta, Yellow, and Black. 1 Liter.", date: "April 2026", image: '/inks/ECO M15/M15 Cyan (Transparent).webp' },
        { id: 2, title: "M21 (i3200)", category: "Eco-Solvent Inks", excerpt: "Specialized eco-solvent ink optimized for i3200 printheads with sharp detail and consistent output. Available in Cyan, Magenta, Yellow, and Black. 1 Liter.", date: "March 2026", image: '/inks/M21/M21 Cyan (Transparent).webp' },
        { id: 3, title: "Phoenix E2 1L", category: "Eco-Solvent Inks", excerpt: "Premium eco-solvent ink with superior print quality, excellent adhesion, and scratch-resistant finish. Available in Cyan, Magenta, Yellow, and Black. 1 Liter.", date: "February 2026", image: '/inks/PHOENIX E2 1L/PHOENIX E2 1L Cyan (Transparent).webp' },

        // Solvent Inks
        { id: 4, title: "Eagle V2 1L", category: "Solvent Inks", excerpt: "Professional solvent-based ink with excellent weather resistance for outdoor banners, vehicle wraps, and PVC signage. Available in Cyan, Magenta, Yellow, and Black. 1 Liter.", date: "February 2026", image: '/inks/EAGLE V2 1L/Eagle V2 1L Cyan (Transparent1).webp' },
        { id: 5, title: "Eagle V2 5L", category: "Solvent Inks", excerpt: "Large volume professional solvent-based ink for high-volume outdoor printing. Available in Cyan, Magenta, Yellow, and Black. 5 Liters.", date: "January 2026", image: '/inks/EAGLE V2 5L/Eagle V2 5L Cyan (Transparent1).webp' },
        { id: 6, title: "T14 1L", category: "Solvent Inks", excerpt: "T14 series solvent ink for professional printing with vibrant color reproduction and fast drying. Available in Cyan, Magenta, Yellow, and Black. 1 Liter.", date: "December 2025", image: '/inks/T14 1L/_0002_T14-Ink-1L-Cyan-(Transparent).webp' },
        { id: 7, title: "T14 Eco Plus 2L", category: "Solvent Inks", excerpt: "Enhanced T14 Eco Plus ink with improved environmental properties. Available in Cyan, Magenta, Yellow, and Black. 2 Liters.", date: "October 2025", image: '/inks/T14 ECO PLUS 2L INKS/T14 Eco Plus 2L  Cyan (Transparent).webp' },
        { id: 8, title: "Cleaning Solutions", category: "Solvent Inks", excerpt: "Professional cleaning solutions for maintaining print quality and extending printhead life. Available in 1L, 4L, and 5L variants, including T Series formulations.", date: "September 2025", image: '/inks/CLEANING SOLUTIONS/Cleaning Solution 1L. (Transparent).webp' },

        // DTF Inks
        { id: 9, title: "Brilliant DTF Textile 1L", category: "DTF Inks", excerpt: "High-quality DTF ink for vibrant textile printing with excellent wash fastness. Available in Cyan, Magenta, Yellow, Black, and White. 1 Liter.", date: "August 2025", image: '/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L Cyan (Transparent).webp' },
        { id: 10, title: "Vivid DTF Textile 1L", category: "DTF Inks", excerpt: "Premium DTF ink for exceptional color reproduction and durability on textiles. Available in Cyan, Magenta, Yellow, Black, and White. 1 Liter.", date: "June 2025", image: '/inks/VIVID DTF TEXTILE 1L/Brilliant DTF Textile 1L Cyan (Transparent).webp' },
        { id: 11, title: "DTF Cleaning Solutions", category: "DTF Inks", excerpt: "Specialized DTF cleaning solution for maintaining print heads and system performance. Available in 500ml and 1 Liter.", date: "May 2025", image: '/inks/DTF CLEANING SOLUTIONS/DTF Cleaning Solution 500ml.webp' },

        // Sublimation Inks
        { id: 12, title: "Vivid Sublimation 1L", category: "Sublimation Inks", excerpt: "High-performance sublimation ink for brilliant color transfer and excellent heat stability. Available in Cyan, Magenta, Yellow, and Black. 1 Liter.", date: "April 2025", image: '/inks/VIVID SUBLIMATION 1L INK/Vivid Sublimation Ink Cyan 1L (Transparent).webp' },
        { id: 13, title: "Vivid Sublimation 5L", category: "Sublimation Inks", excerpt: "Large volume sublimation ink for high-volume printing with consistent quality. Available in Cyan, Magenta, Yellow, and Black. 5 Liters.", date: "March 2025", image: '/inks/VIVID SUBLIMATION 5L INK/Vivid Sublimation 5L Cyan (Transparent).webp' },
        { id: 14, title: "Brilliant Sublimation 1L", category: "Sublimation Inks", excerpt: "Premium sublimation ink with superior color reproduction and deep color penetration. Available in Cyan, Magenta, Yellow, and Black. 1 Liter.", date: "January 2025", image: '/inks/BRILLIANT SUBLIMATION INK 1L/Brilliant Sublimation Ink Cyan 1L (Transparent).webp' },
        { id: 15, title: "Papijet LTI 203", category: "Sublimation Inks", excerpt: "Professional sublimation ink optimized for textile applications with exceptional color gradation. Available in Cyan, Magenta, Yellow, and Black. 1 Liter.", date: "December 2024", image: '/inks/PAPIJET/Papijet 203 LIT Cyan (Transparent).webp' },
        { id: 16, title: "Papijet LTIP Light", category: "Sublimation Inks", excerpt: "Specialized sublimation ink for enhanced photo-quality color gradation and smooth tonal transitions. Available in Light Cyan and Light Magenta. 1 Liter.", date: "November 2024", image: '/inks/PAPIJET/Papijet LITP Light Cyan  (Transparent).webp' },
        { id: 17, title: "Papijet LTI 202 Fluorescent", category: "Sublimation Inks", excerpt: "Specialty fluorescent sublimation ink for eye-catching designs with a vibrant glowing finish. Available in Fluorescent Yellow and Fluorescent Pink. 1 Liter.", date: "October 2024", image: '/inks/PAPIJET/Papijet Fluorescent Yellow (Transparent).webp' },
    ];

    // Data for the 'You Might Also Like' section
    const suggestedPosts = [
        {
            id: 's1',
            title: "Printable Media & Substrates Guide",
            category: "Materials",
            excerpt: "Explore guides on vinyl stickers, tarpaulins, sublimation papers, and specialty films for your printing projects.",
            image: "/materials.png",
            link: "/blogs-1-materials"
        },
        {
            id: 's2',
            title: "Accessories & Maintenance Kits",
            category: "Accessories",
            excerpt: "Find the right cleaning kits, spare parts, and accessories to keep your machines running at peak performance.",
            image: "/accessories.png",
            link: "/blogs-2-accessories"
        },
        {
            id: 's3',
            title: "Ink Guides: Eco-Solvent, UV, Sublimation & DTF",
            category: "Inks",
            excerpt: "Compare ink types, understand compatibility, and choose the right ink solution for your printing business.",
            image: "/inks.png",
            link: "/blogs-3-inks"
        },
        {
            id: 's4',
            title: "Promotional Display Solutions for Events & Trade Shows",
            category: "Promotional Display",
            excerpt: "Explore roll-up banners, pop-up booths, feather banners, and more to make your brand stand out at any event.",
            image: "/display.png",
            link: "/blogs-4-promotional-display"
        },
        {
            id: 's5',
            title: "Machine Guides & Operational Tips",
            category: "Machines",
            excerpt: "Browse technical guides and operational insights for all Kelin printing machines, cutters, laser systems, and more.",
            image: "/machines.png",
            link: "/blogs"
        }
    ];

    const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
    const pathname = usePathname();
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <main className="luxor-page-container">
            <Header />

            <header className="luxor-header">
                <h1>Inks</h1>
                <p>Compare eco-solvent, UV, sublimation, and DTF inks — understand compatibility and choose the right solution for your business.</p>
            </header>

            {/* --- Suggested Section (top) --- */}
            <section className="suggested-section">
                <div className="suggested-header">
                    <div className="suggested-header-left">
                        <span className="suggested-eyebrow">EXPLORE</span>
                        <h2 className="suggested-title">You Might Also Like</h2>
                    </div>
                    <p className="suggested-subtitle">Discover related guides on materials, accessories, and inks to get the most from your machines.</p>
                </div>
                <div className="suggested-cards">
                    {suggestedPosts.map((post, i) => (
                        <Link key={post.id} href={post.link} className={`suggested-card${post.link === pathname ? ' suggested-card--active' : ''}`}>
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
                                href={guideLinks[post.title] || `/blogs/${post.id}`}
                                className="read-guide-link"
                            >
                                Read More &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}