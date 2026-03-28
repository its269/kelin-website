"use client";
import React, { useState } from 'react';
import "./solutions-industrial-cutter.css";
import Header from '../components/Header';

export default function IndustrialCutterPage() {
    // Map product titles to their custom guide or product URLs
    const guideLinks = {
        "Economical Fiber Laser": "/economical-fiber-laser",
        "CMA 1325": "/cma-1325",
        "iEcho BK3": "/iecho-bk3",
        "iEcho BK4": "/iecho-bk4",
        "iEcho PK": "/iecho-pk",
        "iEcho PK4": "/iecho-pk4",
        "iEcho TK4S": "/iecho-tk4s"
    };

    const blogPosts = [
        {
            id: 1,
            title: "Economical Fiber Laser",
            category: "Fiber Laser",
            excerpt: "High-precision economical fiber laser system designed for efficient metal processing and industrial marking applications.",
            image: '/dummy-image-square.jpg'
        },
        {
            id: 2,
            title: "CMA 1325",
            category: "Laser Cutter",
            excerpt: "Versatile large-format laser cutting system engineered for industrial-grade accuracy on non-metal materials.",
            image: '/dummy-image-square.jpg'
        },
        {
            id: 3,
            title: "iEcho BK3",
            category: "Digital Cutter",
            excerpt: "High-speed digital cutting system providing integrated solutions for the signage, packaging, and textile industries.",
            image: '/dummy-image-square.jpg'
        },
        {
            id: 4,
            title: "iEcho BK4",
            category: "Digital Cutter",
            excerpt: "The next generation of high-precision cutting, offering enhanced automation and diverse material processing capabilities.",
            image: '/dummy-image-square.jpg'
        },
        {
            id: 5,
            title: "iEcho PK",
            category: "Digital Cutter",
            excerpt: "Fully automatic intelligent digital cutting system ideal for short-run production and graphic arts.",
            image: '/dummy-image-square.jpg'
        },
        {
            id: 6,
            title: "iEcho PK4",
            category: "Digital Cutter",
            excerpt: "Advanced automatic cutting solution for the advertising and packaging industry with high-precision tool sets.",
            image: '/dummy-image-square.jpg'
        },
        {
            id: 7,
            title: "iEcho TK4S",
            category: "Digital Cutter",
            excerpt: "Large-format cutting system providing the best choice for multi-industry automatic processing of flexible materials.",
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
                <h1>Industrial Cutter Solutions</h1>
                <p>Explore our range of high-precision fiber lasers and automated digital cutting systems designed for industrial manufacturing and fabrication.</p>
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