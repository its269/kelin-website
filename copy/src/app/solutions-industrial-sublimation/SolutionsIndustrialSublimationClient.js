// app/solutions-industrial-sublimation/page.js
"use client";
import React, { useState } from 'react';
import "./textile-apparel.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their custom guide URLs
    const guideLinks = {
        "Kirin": "/kirin",
        "Smart Sublimation 2008": "/smart-sublimation",
        "Smart RJ 2004": "/smart-rj24-2004-i3200-eco-solvent",
        "Smart RJ 2002": "/smart-uv-printer",
        "Manual Heatpress": "/subli-mate-manual-heat-press",
        "Sublimation Printer FD6198E": "/sublimation-printer-fd6198e",
        "Vivid Sublimation 1L Ink": "/inks",
        "Vivid Sublimation 5L Ink": "/inks",
        "Brilliant Sublimation 1L Ink": "/inks",
    };
    const blogPosts = [
        { id: 1, title: "Kirin", category: "Sublimation", excerpt: "High-performance sublimation printer for vibrant textile and apparel applications.", date: "March 2026", image: '/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).webp' },
        { id: 2, title: "Smart Sublimation 2008", category: "Sublimation", excerpt: "Efficient and reliable Smart Sublimation 2008 for professional textile printing.", date: "March 2026", image: '/sublimation_dtf/SUBL Smart Sublimation (1).webp' },
        { id: 3, title: "Smart RJ 2004", category: "Sublimation", excerpt: "Smart RJ 2004 delivers consistent quality for all your textile printing needs.", date: "March 2026", image: '/eco-solvent-machines/SMART.webp' },
        { id: 4, title: "Smart RJ 2002", category: "Sublimation", excerpt: "Smart RJ 2002: Compact and versatile for small to medium apparel production.", date: "March 2026", image: '/uv-machines/SMART UV Printer.webp' },
        { id: 5, title: "Manual Heatpress", category: "Heatpress", excerpt: "Manual Heatpress for durable and precise heat transfer on garments and fabrics.", date: "March 2026", image: '/heatpress/Subli-Mate Manual Heat Press 80cm x 100cm (1).webp' },
        { id: 6, title: "Sublimation Printer FD6198E", category: "Printers", excerpt: "Industrial-grade sublimation printer delivering high-resolution, vibrant output for large-format textile and fabric applications.", date: "April 2026", image: '/sublimation_dtf/SUBL Sublimation Printer FD6198E (1).webp' },
        { id: 7, title: "Vivid Sublimation 1L Ink", category: "Inks", excerpt: "Premium 1L Vivid Sublimation Ink engineered for brilliant color transfer, excellent heat stability, and consistent output quality.", date: "April 2026", image: '/inks/VIVID SUBLIMATION 1L INK/Vivid Sublimation Ink Cyan 1L (Transparent).webp' },
        { id: 8, title: "Vivid Sublimation 5L Ink", category: "Inks", excerpt: "High-volume 5L Vivid Sublimation Ink for continuous production, offering consistent color accuracy and outstanding print durability.", date: "April 2026", image: '/inks/VIVID SUBLIMATION 5L INK/Vivid Sublimation 5L Cyan (Transparent).webp' },
        { id: 9, title: "Brilliant Sublimation 1L Ink", category: "Inks", excerpt: "Superior 1L Brilliant Sublimation Ink with exceptional color reproduction and long-lasting durability for professional sublimation printing.", date: "April 2026", image: '/inks/BRILLIANT SUBLIMATION INK 1L/Brilliant Sublimation Ink Cyan 1L (Transparent).webp' },
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
                <h1>Industrial Sublimation</h1>
                <p>Explore industrial sublimation solutions, ink guides, and equipment insights from Kelin Graphics System.</p>
            </header>

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
                            <a
                                href={guideLinks[post.title] || `/blogs/${post.id}`}
                                className="read-more-link"
                            >
                                Read Guide &rarr;
                            </a>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}