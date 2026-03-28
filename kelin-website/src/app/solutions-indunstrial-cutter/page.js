// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import "./solutions-indunstrial-cutter.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their custom guide URLs
    const guideLinks = {
        "Kirin": "/kirin",
        "Smart Sublimation 2008": "/smart-sublimation",
        "Smart RJ 2004": "/smart-rj24-2004-i3200-eco-solvent",
        "Smart RJ 2002": "/smart-uv-printer",
        "Manual Heatpress": "/subli-mate-manual-heat-press"
    };
    const blogPosts = [
        { id: 1, title: "Kirin", category: "Sublimation", excerpt: "High-performance sublimation printer for vibrant textile and apparel applications.", date: "March 2026", image: '/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).webp' },
        { id: 2, title: "Smart Sublimation 2008", category: "Sublimation", excerpt: "Efficient and reliable Smart Sublimation 2008 for professional textile printing.", date: "March 2026", image: '/sublimation_dtf/SUBL Smart Sublimation (1).webp' },
        { id: 3, title: "Smart RJ 2004", category: "Sublimation", excerpt: "Smart RJ 2004 delivers consistent quality for all your textile printing needs.", date: "March 2026", image: '/eco-solvent-machines/SMART.webp' },
        { id: 4, title: "Smart RJ 2002", category: "Sublimation", excerpt: "Smart RJ 2002: Compact and versatile for small to medium apparel production.", date: "March 2026", image: '/uv-machines/SMART UV Printer.webp' },
        { id: 5, title: "Manual Heatpress", category: "Heatpress", excerpt: "Manual Heatpress for durable and precise heat transfer on garments and fabrics.", date: "March 2026", image: '/heatpress/Subli-Mate Manual Heat Press 80cm x 100cm (1).webp' },
    ];

    const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const productList = [
        { id: 1, title: "Economical Fiber Laser", description: "High-performance economical fiber laser for precision cutting and engraving.", image: "/industrial-cutter/economical-fiber-laser.webp" },
        { id: 2, title: "CMA1325", description: "Versatile CMA1325 cutter for industrial-grade applications.", image: "/industrial-cutter/cma1325.webp" },
        { id: 3, title: "iEcho BK3", description: "Advanced iEcho BK3 cutting system for high-speed and precision cutting.", image: "/industrial-cutter/iecho-bk3.webp" },
        { id: 4, title: "iEcho BK4", description: "Efficient iEcho BK4 cutter for diverse material processing.", image: "/industrial-cutter/iecho-bk4.webp" },
        { id: 5, title: "iEcho PK", description: "Compact and powerful iEcho PK cutting machine for small-scale production.", image: "/industrial-cutter/iecho-pk.webp" },
        { id: 6, title: "iEcho PK4", description: "High-precision iEcho PK4 cutter for intricate designs and patterns.", image: "/industrial-cutter/iecho-pk4.webp" },
        { id: 7, title: "iEcho TK4S", description: "Heavy-duty iEcho TK4S cutting system for industrial-grade applications.", image: "/industrial-cutter/iecho-tk4s.webp" }
    ];

    return (
        <main className="luxor-page-container">
            <Header />

            <header className="luxor-header">
                <h1>Textile and Apparel</h1>
                <p>Discover solutions, guides, and the latest innovations for textile and apparel production from Kelin Graphics System.</p>
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