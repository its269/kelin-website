// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import "./textile-apparel.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map product titles to their custom guide URLs
    const guideLinks = {
        "Economical Fiber Laser": "/economical-fiber-laser",
        "CMA 1325": "/cma-1325",
        "CMA HQ": "/cma-hq",
        "Yueming Fabric Laser": "/yueming-fabric-laser",
        "CMA 1390": "/cma-1390",
        "3D Printer": "/3d-printer",
        "Bending Machine": "/bending-machine",
        "Mini Handheld Welding Machine": "/mini-handheld-welding",
        "Aluminum Composite Panel": "/acp-materials",
        "Clear Acrylic Sheet": "/clear-acrylic-sheet"
    };

    const blogPosts = [
        // Laser Machines Category
        { id: 1, title: "Economical Fiber Laser", category: "Laser Machines", excerpt: "High-precision fiber laser cutting solution for efficient metal processing and industrial applications.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 2, title: "CMA 1325", category: "Laser Machines", excerpt: "Large-format laser cutting system designed for high-speed accuracy on various non-metal materials.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 3, title: "CMA HQ", category: "Laser Machines", excerpt: "Premium high-quality laser system offering superior edge finish and cutting stability.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 4, title: "Yueming Fabric Laser", category: "Laser Machines", excerpt: "Specialized laser solution for the textile industry, perfect for intricate fabric cutting and engraving.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 5, title: "CMA 1390", category: "Laser Machines", excerpt: "The versatile industry standard for medium-format laser engraving and cutting tasks.", date: "March 2026", image: '/dummy-image-square.jpg' },

        // Industrial Tools Category
        { id: 6, title: "3D Printer", category: "Industrial Tools", excerpt: "Advanced additive manufacturing for rapid prototyping and complex structural components.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 7, title: "Bending Machine", category: "Industrial Tools", excerpt: "Precision bending equipment for acrylic and metal fabrication in the signage and manufacturing sectors.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 8, title: "Mini Handheld Welding Machine", category: "Industrial Tools", excerpt: "Portable and powerful handheld welding solution for quick repairs and intricate metal assembly.", date: "March 2026", image: '/dummy-image-square.jpg' },

        // Materials Category
        { id: 9, title: "Aluminum Composite Panel", category: "Materials", excerpt: "Durable and lightweight ACP sheets ideal for external cladding and high-end signage.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 10, title: "Clear Acrylic Sheet", category: "Materials", excerpt: "Premium transparency and weather-resistant acrylic sheets for displays, barriers, and laser projects.", date: "March 2026", image: '/dummy-image-square.jpg' }
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
                <h1>Machines & Materials</h1>
                <p>Explore our industrial laser systems, professional tools, and high-grade materials for your production needs.</p>
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
                                src={post.image}
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
                                Read Guide
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ marginLeft: '8px', verticalAlign: 'middle' }}
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}