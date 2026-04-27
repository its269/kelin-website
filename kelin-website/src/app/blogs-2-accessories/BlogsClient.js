// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import "./blogs.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their guide URLs
    const guideLinks = {
        "Cordless Electric Scissors & Blades": "/blogs-acc-electric-scissors",
        "Grid Lines Cutting Mat": "/blogs-acc-cutting-mat",
        "Acrylic Letter Making Bender Machine Tool": "/blogs-acc-acrylic-bender",
        "ARKI Cyano Adhesive": "/blogs-acc-cyano-adhesive",
        "Double Sided Foam Tape (S333P White)": "/blogs-acc-foam-tape",
        "Double Sided PET Tape (S338 Red)": "/blogs-acc-pet-tape",
        "Double Sided Banner Tape (S335)": "/blogs-acc-banner-tape",
        "Reflective Tape": "/blogs-acc-reflective-tape",
        "Eyelet #2 & Punchers": "/blogs-acc-eyelet-puncher",
        "Application Squeegees": "/blogs-acc-squeegees",
        "Swab (Print Head Use)": "/blogs-acc-printhead-swab",
        "Wiper Polyester": "/blogs-acc-wiper-polyester",
        "Glass Wiper Rubber Strip": "/blogs-acc-glass-wiper",
    };

    const blogPosts = [
        // Cutting & Shaping Tools
        { id: 1, title: "Cordless Electric Scissors & Blades", category: "Cutting & Shaping Tools", excerpt: "Portable electric scissors and replacement cutter blades for fast and effortless cutting with ergonomic design.", date: "April 2026", image: '/dummy-image-square.jpg' },
        { id: 2, title: "Grid Lines Cutting Mat", category: "Cutting & Shaping Tools", excerpt: "Self-healing cutting mats with grid lines for precise measuring and cutting. Available in 2ft x 3ft and 4ft x 6ft.", date: "April 2026", image: '/dummy-image-square.jpg' },
        { id: 3, title: "Acrylic Letter Making Bender Machine Tool", category: "Cutting & Shaping Tools", excerpt: "Specialized manual tool for shaping and bending acrylic for channel letters and signage fabrication.", date: "March 2026", image: '/dummy-image-square.jpg' },

        // Tapes & Adhesives
        { id: 4, title: "ARKI Cyano Adhesive", category: "Tapes & Adhesives", excerpt: "Fast-acting cyanoacrylate adhesive in a 30g bottle. Quick drying with high bond strength for versatile applications.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 5, title: "Double Sided Foam Tape (S333P White)", category: "Tapes & Adhesives", excerpt: "High-tack double-sided foam tape for mounting and cushioning. Available in 20mm x 10m and 20mm x 25m.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 6, title: "Double Sided PET Tape (S338 Red)", category: "Tapes & Adhesives", excerpt: "Heavy-duty double-sided PET tape for secure bonding with high temperature resistance. Available in 5m, 10m, and 25m.", date: "February 2026", image: '/dummy-image-square.jpg' },
        { id: 7, title: "Double Sided Banner Tape (S335)", category: "Tapes & Adhesives", excerpt: "Specialized tape for hemming and seaming banners. Weather resistant with high initial tack. Size: 20mm x 25m.", date: "February 2026", image: '/dummy-image-square.jpg' },
        { id: 8, title: "Reflective Tape", category: "Tapes & Adhesives", excerpt: "High-visibility safety and hazard warning tape. Available in Black/Yellow (S501) and Red/White (S502), 50mm x 10m.", date: "February 2026", image: '/dummy-image-square.jpg' },

        // Finishing & Application Hardware
        { id: 9, title: "Eyelet #2 & Punchers", category: "Finishing & Application Hardware", excerpt: "Banner finishing hardware and punching machines. Eyelet pack: 1880 pcs (10mm x 19mm). Available as press, semi-auto, and manual punchers.", date: "January 2026", image: '/dummy-image-square.jpg' },
        { id: 10, title: "Application Squeegees", category: "Finishing & Application Hardware", excerpt: "Tools for applying vinyl, stickers, and films smoothly without bubbles or wrinkles. Available in velvet and standard variants.", date: "January 2026", image: '/dummy-image-square.jpg' },

        // Cleaning & Maintenance Supplies
        { id: 11, title: "Swab (Print Head Use)", category: "Cleaning & Maintenance Supplies", excerpt: "Lint-free, solvent-compatible cleaning swabs safe for delicate printhead components. High absorbency with no residue.", date: "December 2025", image: '/dummy-image-square.jpg' },
        { id: 12, title: "Wiper Polyester", category: "Cleaning & Maintenance Supplies", excerpt: "Cleanroom-grade polyester wipers for general maintenance. 150 pcs per pack — lint-free, durable, and chemical resistant.", date: "December 2025", image: '/dummy-image-square.jpg' },
        { id: 13, title: "Glass Wiper Rubber Strip", category: "Cleaning & Maintenance Supplies", excerpt: "Handheld wiper for streak-free cleaning of large glass or flat surfaces. Yellow handle, size: 11.8cm x 14.5cm.", date: "December 2025", image: '/dummy-image-square.jpg' },
    ];

    // Data for the 'You Might Also Like' section
    const suggestedPosts = [
        {
            id: 's1',
            title: "Machine Guides & Operational Tips",
            category: "Machines",
            excerpt: "Browse technical guides and operational insights for all Kelin printing machines, cutters, laser systems, and more.",
            image: "/machines.png",
            link: "/blogs"
        },
        {
            id: 's2',
            title: "Printable Media & Substrates Guide",
            category: "Materials",
            excerpt: "Explore guides on vinyl stickers, tarpaulins, sublimation papers, and specialty films for your printing projects.",
            image: "/materials.png",
            link: "/blogs-1-materials"
        },
        {
            id: 's3',
            title: "Ink Guides: Eco-Solvent, UV, Sublimation & DTF",
            category: "Inks",
            excerpt: "Compare ink types, understand compatibility, and choose the right ink solution for your printing business.",
            image: "/inks.png",
            link: "/blogs-3-inks"
        },
        {
            id: 's4',
            title: "Promotional Display Solutions for Events & Trade Shows",
            category: "Promotional Display",
            excerpt: "Explore roll-up banners, pop-up booths, feather banners, and more to make your brand stand out at any event.",
            image: "/display.png",
            link: "/blogs-4-promotional-display"
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
                <h1>Accessories</h1>
                <p>Find the right cleaning kits, spare parts, and accessories to keep your Kelin machines running at peak performance.</p>
            </header>

            {/* --- Suggested Section (top) --- */}
            <section className="suggested-section">
                <div className="suggested-header">
                    <div className="suggested-header-left">
                        <span className="suggested-eyebrow">EXPLORE</span>
                        <h2 className="suggested-title">You Might Also Like</h2>
                    </div>
                    <p className="suggested-subtitle">Discover related guides on materials, accessories, and inks to get the most from your machines.</p>
                </div>
                <div className="suggested-cards">
                    {suggestedPosts.map((post, i) => (
                        <Link key={post.id} href={post.link} className={`suggested-card suggested-card--${i}`}>
                            <div className="suggested-card-img-wrap">
                                <img src={post.image || '/dummy-image-square.jpg'} alt={post.title} className="suggested-card-img" loading="lazy" />
                                <div className="suggested-card-overlay" />
                            </div>
                            <div className="suggested-card-body">
                                <span className="suggested-card-pill">{post.category}</span>
                                <h3 className="suggested-card-title">{post.title}</h3>
                                <p className="suggested-card-excerpt">{post.excerpt}</p>
                                <span className="suggested-card-cta">Read More <span aria-hidden="true">→</span></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

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
                            <Link
                                href={guideLinks[post.title] || `/blogs/${post.id}`}
                                className="read-guide-link"
                            >
                                Read More &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}