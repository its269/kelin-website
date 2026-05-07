// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import "./textile-apparel.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their custom guide URLs
    const guideLinks = {
        "Promaker Embroidery 1201": "/promaker-embroidery-1201",
        "Promaker Embroidery 1202": "/promaker-embroidery-1202",
        "Promaker Embroidery 1804": "/promaker-embroidery-1204",
        "Smartex Knitting Machine GS-CE152": "/smartex-knitting-gsce-1-52"
    };

    const blogPosts = [
        {
            id: 1,
            title: "Promaker Embroidery 1201",
            category: "Embroidery",
            excerpt: "Single-head high-speed industrial embroidery machine perfect for boutique production and custom apparel.",
            date: "March 2026",
            image: '/embroidery_knitting/Promaker Embroidery 1201.webp'
        },
        {
            id: 2,
            title: "Promaker Embroidery 1202",
            category: "Embroidery",
            excerpt: "Dual-head embroidery solution designed for doubling your output with precision and ease.",
            date: "March 2026",
            image: '/embroidery_knitting/Promaker Embroidery 1202.webp'
        },
        {
            id: 3,
            title: "Promaker Embroidery 1804",
            category: "Embroidery",
            excerpt: "Professional 4-head embroidery system for high-volume industrial garment decoration.",
            date: "March 2026",
            image: '/embroidery_knitting/Promaker Embroidery 1204.webp'
        },
        {
            id: 4,
            title: "Smartex Knitting Machine GS-CE152",
            category: "Knitting",
            excerpt: "Advanced circular knitting technology providing superior fabric quality and production efficiency.",
            date: "March 2026",
            image: '/embroidery_knitting/Smartex Knitting Machine GSCE-1-52.webp'
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
                <h1>Threadwork Solutions</h1>
                <p>Explore our high-performance embroidery and knitting solutions designed for professional garment production.</p>
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