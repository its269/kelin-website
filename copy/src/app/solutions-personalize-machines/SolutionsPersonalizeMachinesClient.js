// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import "./textile-apparel.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their custom guide URLs
    const guideLinks = {
        "iEcho PK": "/iecho-pk",
        "K-Sign Desktop Laser Marking": "/k-sign-desktop-laser-marking",
    };
    const blogPosts = [
        { id: 1, title: "iEcho PK", category: "Cutting Machine", excerpt: "Professional vinyl cutting plotter with advanced servo motor system and superior cutting accuracy for signage and graphics applications.", date: "March 2026", image: '/cutting-machines/PK1209 (1).webp' },
        { id: 2, title: "K-Sign Desktop Laser Marking", category: "Laser Machine", excerpt: "Instantly increase production with reliable offline engraving function — efficiency by 5-10 times. No professional technician needed, learn within 10 minutes.", date: "March 2026", image: '/laser-machines/K-sign_Desktop Laser Marking.webp' },
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
                <h1>Personalized Machine Solutions</h1>
                <p>Explore our personalized machine solutions tailored for precision cutting, engraving, and marking — built for professionals who demand accuracy and efficiency.</p>
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