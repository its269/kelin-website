// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import "./blogs.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their guide URLs
    const guideLinks = {
        "Tickee Vinyl Sticker (TK Series)": "/blogs-material-tickee-vinyl-sticker",
        "Sofie Vinyl & Specialty Stickers": "/blogs-material-sofie-vinyl-stickers",
        "Sofie Clear Sticker": "/blogs-material-sofie-clear-sticker",
        "Tickee Cold Laminating Film": "/blogs-material-tickee-cold-laminating-film",
        "Sofie PP Film & Sticker": "/blogs-material-sofie-pp-film",
        "Specialty & Architectural Films": "/blogs-material-specialty-architectural-films",
        "Ba-cut Translucent Sticker": "/blogs-material-bacut-translucent-sticker",
        "Omega Tarpaulin": "/blogs-material-omega-tarpaulin",
        "Beta Tarpaulin": "/blogs-material-beta-tarpaulin",
        "Omega Black-Out Tarpaulin": "/blogs-material-omega-blackout-tarpaulin",
        "Alpha Tarpaulin & Flex": "/blogs-material-alpha-tarpaulin-flex",
        "Subli-Mate Nova & S100 Paper": "/blogs-material-sublimation-paper",
        "Smartex & Subli-Mate Fabrics": "/blogs-material-smartex-sublimate-fabrics",
        "Textile Accessories": "/blogs-material-textile-accessories",
        "Backlit Film & Lightbox Fabric": "/blogs-material-backlit-film-lightbox",
        "Just Cast Acrylic": "/blogs-material-just-cast-acrylic",
        "Luminao & Extruded Acrylic": "/blogs-material-luminao-extruded-acrylic",
        "Just Sintra Board": "/blogs-material-just-sintra-board",
        "Just Aluminum Composite Panel": "/blogs-material-just-aluminum-composite",
        "Foam Board & High Impact Sheets": "/blogs-material-foam-board-high-impact",
    };

    const blogPosts = [
        // Printable Sticker & Film Series
        { id: 1, title: "Tickee Vinyl Sticker (TK Series)", category: "Printable Sticker & Film Series", excerpt: "Includes TK50, TK80, TK85 Gray Back, TK100, and TK105 Gray Permanent. Matte and Glossy finishes in widths from 3.0ft to 5.0ft x 164ft.", date: "April 2026", image: '/dummy-image-square.jpg' },
        { id: 2, title: "Sofie Vinyl & Specialty Stickers", category: "Printable Sticker & Film Series", excerpt: "SK4100, SK4101 Bubble Free, I-1333 Blockout, KB1015 Rough Wall, and Wall Covering fabric. Includes PCW6000 Car Wrapping and Ultra Clear PVC.", date: "April 2026", image: '/dummy-image-square.jpg' },
        { id: 3, title: "Sofie Clear Sticker", category: "Printable Sticker & Film Series", excerpt: "SR2900M/SR2800 Removable and SP2900M/SP2800 Permanent options. Optically clear, waterproof, in Matte and Glossy, size 4.5ft x 164ft.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 4, title: "Tickee Cold Laminating Film", category: "Printable Sticker & Film Series", excerpt: "KL1856, 3D Cat Eye, LF1601H, and LF1602H. UV protection and scratch resistance in widths from 1.0ft to 5.0ft x 164ft.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 5, title: "Sofie PP Film & Sticker", category: "Printable Sticker & Film Series", excerpt: "AES1140201 (160mic), AES1170301 (190mic), Gray Backing, and PP Sticker. Tear-resistant, eco-friendly, in 3.0ft & 4.2ft x 164ft.", date: "March 2026", image: '/dummy-image-square.jpg' },
        { id: 6, title: "Specialty & Architectural Films", category: "Printable Sticker & Film Series", excerpt: "Window films, floor lamination, magnetic sheets, rewritable films, chalk board, reflective sheeting, and hologram finishes.", date: "February 2026", image: '/dummy-image-square.jpg' },

        // Ba-cut Translucent Sticker
        { id: 7, title: "Ba-cut Translucent Sticker", category: "Ba-cut Translucent Sticker", excerpt: "Premium colored translucent vinyl for backlit applications. 19+ vibrant colors including Red, Blue, Yellow, Green, and Gold. Size: 10m x 1.22m.", date: "February 2026", image: '/dummy-image-square.jpg' },

        // Tarpaulin & Flex Series
        { id: 8, title: "Omega Tarpaulin", category: "Tarpaulin & Flex Series", excerpt: "High-tenacity frontlit media from 260gsm to 400gsm. Sizes: 3.3ft to 10.5ft x 164ft. Heavy duty with high tensile outdoor rating.", date: "February 2026", image: '/dummy-image-square.jpg' },
        { id: 9, title: "Beta Tarpaulin", category: "Tarpaulin & Flex Series", excerpt: "Economical and lightweight tarpaulin in X2 (220gsm), A2 (260gsm), and 300gsm grades. Sizes up to 10.5ft x 246ft.", date: "January 2026", image: '/dummy-image-square.jpg' },
        { id: 10, title: "Omega Black-Out Tarpaulin", category: "Tarpaulin & Flex Series", excerpt: "BB Series for double-sided or light-blocking banners. 100% opaque from 400gsm (12oz) to 610gsm (18oz). Sizes: 4.5ft to 10.5ft x 164ft.", date: "January 2026", image: '/dummy-image-square.jpg' },
        { id: 11, title: "Alpha Tarpaulin & Flex", category: "Tarpaulin & Flex Series", excerpt: "Alpha High Glossy, Alpha Flex (650gsm), and Alpha Flex Mesh (440gsm). High gloss finish with wind-resistant mesh options up to 10.5ft x 164ft.", date: "January 2026", image: '/dummy-image-square.jpg' },

        // Sublimation, Textiles & Lightbox Media
        { id: 12, title: "Subli-Mate Nova & S100 Paper", category: "Sublimation, Textiles & Lightbox Media", excerpt: "High-speed sublimation paper for industrial use. Widths: 24\" to 72\". Available in standard 328ft and jumbo 3280ft rolls.", date: "December 2025", image: '/dummy-image-square.jpg' },
        { id: 13, title: "Smartex & Subli-Mate Fabrics", category: "Sublimation, Textiles & Lightbox Media", excerpt: "Polydex Kiana, Air Cool, Drifit, ITY, Neo Prene, Nylon Spandex, and Yonex. Print-ready and stretchable apparel-grade fabrics in 64\" & 72\" widths.", date: "December 2025", image: '/dummy-image-square.jpg' },
        { id: 14, title: "Textile Accessories", category: "Sublimation, Textiles & Lightbox Media", excerpt: "Side taping (50m, various colors), elastic band garters (2cm–5cm widths), and drawstring cords (1m–1.4m) for apparel finishing.", date: "December 2025", image: '/dummy-image-square.jpg' },
        { id: 15, title: "Backlit Film & Lightbox Fabric", category: "Sublimation, Textiles & Lightbox Media", excerpt: "Sofie Backlit PET Film (165mic & 220mic), Constant Lightbox Fabric UV21/UV22, and Soft Film. Uniform light diffusion up to 10.5ft x 331ft rolls.", date: "November 2025", image: '/dummy-image-square.jpg' },

        // Rigid Substrates & Boards
        { id: 16, title: "Just Cast Acrylic", category: "Rigid Substrates & Boards", excerpt: "High-clarity cast acrylic sheets in Clear, Diffuser White, Colors, and Mirror. Thickness 1.5mm–12.0mm in 4x6ft and 4x8ft. Thermoformable and UV stable.", date: "November 2025", image: '/dummy-image-square.jpg' },
        { id: 17, title: "Luminao & Extruded Acrylic", category: "Rigid Substrates & Boards", excerpt: "Cost-effective Clear and Diffuser White extruded acrylic. Thickness 1.5mm–6.0mm, size 4x8ft. Consistent thickness and easy machining.", date: "October 2025", image: '/dummy-image-square.jpg' },
        { id: 18, title: "Just Sintra Board", category: "Rigid Substrates & Boards", excerpt: "Expanded PVC foam board in Vers White, Bluish, Black, Colors, Lite, and HD. Thickness 1.5mm–20.0mm, sizes up to 4x10ft. Lightweight and mounting ready.", date: "October 2025", image: '/dummy-image-square.jpg' },
        { id: 19, title: "Just Aluminum Composite Panel", category: "Rigid Substrates & Boards", excerpt: "3.0mm architectural grade cladding panels (4x8ft). Colors: Glossy White, Champagne, Navy Blue, Mouse Gray, Coffee, Brush/Mirror Silver. Weatherproof.", date: "October 2025", image: '/dummy-image-square.jpg' },
        { id: 20, title: "Foam Board & High Impact Sheets", category: "Rigid Substrates & Boards", excerpt: "Just Foam Board (5.0mm, 4x8ft), High Impact Sheet in Bluish White, and Rigid PVC Sheet (Clear) in 0.5mm–1.0mm. Ultra-light interior mounting options.", date: "September 2025", image: '/dummy-image-square.jpg' },
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
            title: "Ink Guides: Eco-Solvent, UV, Sublimation & DTF",
            category: "Inks",
            excerpt: "Compare ink types, understand compatibility, and choose the right ink solution for your printing business.",
            image: "/inks.png",
            link: "/blogs-3-inks"
        },
        {
            id: 's3',
            title: "Accessories & Maintenance Kits",
            category: "Accessories",
            excerpt: "Find the right cleaning kits, spare parts, and accessories to keep your machines running at peak performance.",
            image: "/accessories.png",
            link: "/blogs-2-accessories"
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
                <h1>Materials</h1>
                <p>Explore tips and guides on vinyl stickers, tarpaulins, sublimation papers, and specialty printable media.</p>
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