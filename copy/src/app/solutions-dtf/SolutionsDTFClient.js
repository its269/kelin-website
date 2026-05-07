// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import "./solutions-dtf.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their custom guide URLs
    const guideLinks = {
        "Smart UV DTF Printer Machine | SF30-3 UV DTF": "/dtf-uv-printer-sf303-f1080/",
        "Smart UV DTF Printer Machine | SF60-4 UV DTF": "/dtf-uv-printer-sf604-i3200/",
        "Smart DTF Printer Machine": "/smart-dtf-machine/",
        "Vivid Inks": "/inks/",
        "Brilliant Inks": "/inks/",
        "DTF Film": "/materials/"
    };
    const blogPosts = [
        { id: 1, title: "Smart UV DTF Printer Machine | SF30-3 UV DTF", category: "UV DTF", excerpt: "Advanced UV DTF printer for high-quality, durable prints. Model SF30-3.", date: "March 2026", image: '/sublimation_dtf/DTF UV Printer SF303-i3200 2ft (1).webp' },
        { id: 2, title: "Smart UV DTF Printer Machine | SF60-4 UV DTF", category: "UV DTF", excerpt: "High-capacity UV DTF printer for industrial applications. Model SF60-4.", date: "March 2026", image: '/sublimation_dtf/DTF UV Printer SF604-i3200 2ft. - High Res (1).webp' },
        { id: 3, title: "Smart DTF Printer Machine", category: "DTF", excerpt: "Reliable DTF printer for vibrant and consistent textile printing.", date: "March 2026", image: '/sublimation_dtf/DTF SMART DTF Machine (1).webp' },
        { id: 4, title: "Vivid Inks", category: "Inks", excerpt: "Premium Vivid Inks for outstanding color and durability in DTF printing.", date: "March 2026", image: '/inks/VIVID SUBLIMATION 5L INK/Vivid Sublimation 5L All colors (Transparent).png' },
        { id: 5, title: "Brilliant Inks", category: "Inks", excerpt: "Brilliant Inks engineered for superior print quality and longevity.", date: "March 2026", image: '/inks/BRILLIANT SUBLIMATION INK 1L/Brilliant Sublimation Ink All colors 1L (Transparent).png' },
        { id: 6, title: "DTF Film", category: "Film", excerpt: "High-quality DTF film for sharp, detailed transfers.", date: "March 2026", image: '/sublimation_dtf/DTF Film.webp' },
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
                <h1>DTF - Direct to Film Solutions</h1>
                <p>Discover solutions, guides, and the latest innovations for direct-to-film production from Kelin Graphics System.</p>
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