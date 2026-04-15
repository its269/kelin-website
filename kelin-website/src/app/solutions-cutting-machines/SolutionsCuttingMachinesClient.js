// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import "./textile-apparel.css";
import Header from '../components/Header';

export default function CuttingSolutionsPage() {
    // Map product titles to their custom guide or product URLs
    const guideLinks = {
        "Puma 24": "/puma-24",
        "Puma 52": "/puma-52",
        "GCC Cutter Plotter Expert 24": "/gcc-expert-24",
        "GCC Cutter Plotter Expert 52": "/gcc-expert-52",
        "iEcho bk3": "/iecho-bk3",
        "iEcho bk4": "/iecho-bk4",
        "iEcho pk": "/iecho-pk",
        "iEcho pk4": "/iecho-pk4",
        "iEcho tk4s": "/iecho-tk4s"
    };

    const blogPosts = [
        // Plotter Series
        {
            id: 1,
            title: "Puma 24",
            category: "Cutter Plotters",
            excerpt: "Professional 24-inch cutting plotter featuring high-speed tracking and precision for vinyl and sign making.",
            image: '/GCC-Puma 24.webp'
        },
        {
            id: 2,
            title: "Puma 52",
            category: "Cutter Plotters",
            excerpt: "Wide-format 52-inch cutting solution designed for high-volume signage and vehicle wrap production.",
            image: '/cutting-machines/GCC PUMA IV.webp'
        },
        {
            id: 3,
            title: "GCC Cutter Plotter Expert 24",
            category: "Cutter Plotters",
            excerpt: "The industry standard for entry-level professional cutting, offering reliability and ease of use.",
            image: '/cutting-machines/GCC Expert LX  EX-24LX  Without Stand (1).webp'
        },
        {
            id: 4,
            title: "GCC Cutter Plotter Expert 52",
            category: "Cutter Plotters",
            excerpt: "Enhanced 52-inch plotter providing professional-grade cutting speed and accuracy for large graphics.",
            image: '/cutting-machines/gcc-expert-lx.webp'
        },

        // Digital Cutting Systems
        {
            id: 5,
            title: "iEcho bk3",
            category: "Digital Cutters",
            excerpt: "High-speed digital cutting system providing integrated solutions for the signage, packaging, and textile industries.",
            image: '/cutting-machines/bk3.webp'
        },
        {
            id: 6,
            title: "iEcho bk4",
            category: "Digital Cutters",
            excerpt: "The next generation of high-precision cutting, offering enhanced automation and diverse material processing.",
            image: '/cutting-machines/BK4 (1).webp'
        },
        {
            id: 7,
            title: "iEcho pk",
            category: "Digital Cutters",
            excerpt: "Fully automatic intelligent digital cutting system ideal for short-run production and graphic arts.",
            image: '/cutting-machines/PK1209 (1).webp'
        },
        {
            id: 8,
            title: "iEcho pk4",
            category: "Digital Cutters",
            excerpt: "Advanced automatic cutting solution for the advertising and packaging industry with high-precision tool sets.",
            image: '/cutting-machines/PK4 (2).webp'
        },
        {
            id: 9,
            title: "iEcho tk4s",
            category: "Digital Cutters",
            excerpt: "Large-format cutting system providing the best choice for multi-industry automatic processing of flexible materials.",
            image: '/cutting-machines/TK4S Large format cutting system.webp'
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
                <h1>Cutting Solutions</h1>
                <p>From high-speed vinyl plotters to advanced automated digital cutting systems, find the perfect precision tools for your fabrication needs.</p>
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
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
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