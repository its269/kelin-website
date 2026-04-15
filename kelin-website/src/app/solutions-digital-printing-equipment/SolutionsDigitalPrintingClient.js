"use client";
import React, { useState } from 'react';
import "./textile-apparel.css"; // Keeping original CSS file name as requested
import Header from '../components/Header';

export default function DigitalPrintingPage() {
    // Map product titles to their custom guide or product URLs
    const guideLinks = {
        "Smart DTF RJ Series": "/smart-dtf-rj-series",
        "Smart DTF": "/smart-dtf",
        "Smart RJ 2002": "/smart-rj-2002",
        "Smart RJ 2004": "/smart-rj-2004",
        "Smart Sublimation 2008": "/smart-sublimation-2008",
        "Apollo Max Plus Solvent Printer": "/apollo-max-plus",
        "Sofie Sticker Matte": "/sofie-sticker-matte",
        "Sofie Sticker Glossy": "/sofie-sticker-glossy"
    };

    const blogPosts = [
        // Machines Category
        {
            id: 1,
            title: "Smart DTF RJ Series",
            category: "Machines",
            excerpt: "Cutting-edge Direct-to-Film solution offering high-speed production and exceptional color accuracy for garment printing.",
            image: '/sublimation_dtf/DTF SMART DTF Machine (1).webp'
        },
        {
            id: 2,
            title: "Smart DTF",
            category: "Machines",
            excerpt: "The versatile industry standard for high-quality DTF transfers with soft-hand feel and high durability.",
            image: '/sublimation_dtf/DTF SMART DTF Machine (1).webp'
        },
        {
            id: 3,
            title: "Smart RJ 2002",
            category: "Machines",
            excerpt: "Dual-head production powerhouse designed for consistent performance in high-volume environments.",
            image: '/eco-solvent-machines/SMART.webp'
        },
        {
            id: 4,
            title: "Smart RJ 2004",
            category: "Machines",
            excerpt: "Advanced wide-format printing system featuring precision engineering for professional output.",
            image: '/eco-solvent-machines/SMART.webp'
        },
        {
            id: 5,
            title: "Smart Sublimation 2008",
            category: "Machines",
            excerpt: "High-efficiency sublimation system optimized for vibrant textile applications and sportswear.",
            image: '/sublimation_dtf/SUBL Smart Sublimation (1).webp'
        },
        {
            id: 6,
            title: "Apollo Max Plus Solvent Printer",
            category: "Machines",
            excerpt: "Heavy-duty solvent printer built for extreme durability and large-format outdoor advertising applications.",
            image: '/ApolloMax Plus II PZG3208-KV.webp'
        },

        // Materials Category
        {
            id: 7,
            title: "Sofie Sticker Matte",
            category: "Materials",
            excerpt: "Premium matte-finish printable vinyl providing a non-reflective, sophisticated look for high-end labels and decals.",
            image: '/dummy-image-square.jpg'
        },
        {
            id: 8,
            title: "Sofie Sticker Glossy",
            category: "Materials",
            excerpt: "High-gloss printable sticker material that makes colors pop, perfect for eye-catching branding and graphics.",
            image: '/dummy-image-square.jpg'
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
                <h1>Digital Printing Equipment Solutions</h1>
                <p>Discover high-performance printing systems and premium media designed to elevate your production quality and efficiency.</p>
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