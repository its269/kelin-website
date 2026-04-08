// app/solutions-uv-dtf/page.js
"use client";
import React, { useState } from 'react';
import "./textile-apparel.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their custom guide URLs
    const guideLinks = {
        "LUXOR UV-A3 DTF Printer": "/luxor-rtr-uv",
        "LUXOR SF30-3": "/dtf-uv-printer-sf303-f1080",
        "LUXOR SF60-4": "/dtf-uv-printer-sf604-i3200",
    };
    const blogPosts = [
        { id: 1, title: "LUXOR UV-A3 DTF Printer", category: "UV DTF", excerpt: "All-in-one flatbed, cylinder, roll-to-roll, and UV DTF printing in one compact unit — ideal for high-quality, cost-efficient production across diverse surfaces.", date: "April 2026", image: '/uv-machines/Luxor RTR (1).webp' },
        { id: 2, title: "LUXOR SF30-3", category: "UV DTF", excerpt: "Compact UV DTF printer with EPSON PRECISION CORE technology delivering vibrant CMYK+W+V prints at 4.5 m²/h — perfect for custom labels, stickers, and promotional items.", date: "April 2026", image: '/uv-machines/DTF UV Printer SF303-i3200 2ft (1).webp' },
        { id: 3, title: "LUXOR SF60-4", category: "UV DTF", excerpt: "Industrial UV DTF printer with advanced W+CMYK+V printing and optional gold foil stamping, achieving 8 m²/h for premium branding and high-volume production.", date: "April 2026", image: '/uv-machines/DTF UV Printer SF604-i3200 2ft. - High Res (1).webp' },
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
                <h1>UV DTF Solutions</h1>
                <p>Explore our complete range of UV DTF printing solutions, machines, and equipment from Kelin Graphics System.</p>
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