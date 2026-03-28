// app/blogs/page.js
import React from 'react';
import "./blogs-xline-eco-solvent.css";
import Header from '../components/Header'; // Assuming you have your global header

// SEO Metadata for Next.js App Router
export const metadata = {
    title: 'Vibrant, Efficient Production: Precision High-Speed Printing with Smart RJ24',
    description: 'Revolutionize your large-format printing workflow with industrial-grade speed, dual EPSON-I3200 printheads, and unmatched stability. Discover the Smart RJ24 series.',
    keywords: 'Eco-Solvent Printer, Smart RJ24, EPSON I3200, large format printing, high-speed printer, Kelin Graphics',
};

// Accurately extracted data from the provided product brochure
const articleData = {
    title: "Vibrant, Efficient Production: Precision High-Speed Printing",
    author: "Kelin Graphics Team",
    date: "March 24, 2026",
    category: "Product Spotlight",
    readTime: "4 min read",
    specifications: [
        { label: "Machine Model", value: "RJ-2002 - RJ2004" },
        { label: "Head Model", value: "EPSON I3200 A1/E1" },
        { label: "Media Drying", value: "Pre & Post Heating Infrared Drying" },
        { label: "Printing Width", value: "1.9m" },
        { label: "Machine Size", value: "3700mm * 750mm * 850mm" },
        { label: "Printing Speed (3 PASS)", value: "56 m²/h | 112 m²/h" },
        { label: "Printing Speed (4 PASS)", value: "39 m²/h | 77 m²/h" },
        { label: "Printing Speed (6 PASS)", value: "27 m²/h | 53 m²/h" },
        { label: "Voltage", value: "AC220V" },
        { label: "Weight", value: "G.W.314KG / N.W208KG | G.W.348KG / N.W238KG" }
    ],
    features: [
        {
            title: "THK Mute Guide Rail",
            desc: "Incorporates a Teflon platform and high-resistance pinch rollers to guarantee precise media feeding movements."
        },
        {
            title: "High Performance Control System",
            desc: "Built with highly integrated boards and an imported power control system for stability and efficiency."
        },
        {
            title: "Alluminium Alloy Carriage Station",
            desc: "Features an all-aluminum alloy carriage station and beam, ensuring quiet, accurate, and durable operation."
        },
        {
            title: "External Infrared Heating Fan",
            desc: "Ensures efficient media drying through integrated pre and post infrared heating capabilities. An external infrared heating fan further supports rapid drying and smooth output."
        }
    ],
    applications: [
        "Vehicle Wraps",
        "Art Reproduction / Wall Decor",
        "Interior Decoration / Wall Murals",
        "Exhibition Graphics / Posters"
    ]
};

export default function BlogArticlePage() {
    return (
        <div className="blog-page-layout">
            <Header /> {/* Global Header Placeholder */}

            {/* Optional Enhancement: Sticky Article Header */}
            {/* <div className="sticky-article-bar">
                <span className="sticky-title">{articleData.title}</span>
                <button className="sticky-cta-btn">Get a Quote</button>
            </div> */}

            <main className="blog-main-container">
                <article className="blog-article">

                    <header className="blog-header">
                        <div className="blog-meta">
                            <span className="meta-category">{articleData.category}</span>
                            <span className="meta-dot">•</span>
                            <time>{articleData.date}</time>
                            <span className="meta-dot">•</span>
                            <span>{articleData.readTime}</span>
                        </div>

                        <h1 className="blog-title">{articleData.title}</h1>

                        <div className="blog-author-info">
                            <div className="author-avatar">KG</div>
                            <div>
                                <strong>{articleData.author}</strong>
                                <span>Published directly from our product experts</span>
                            </div>
                        </div>
                    </header>

                    <figure className="blog-featured-image">
                        <img
                            src="/eco-solvent-machines/Apollo.webp"
                            alt="XLINE Eco-Solvent Printer showcasing its sleek industrial design"
                        />
                        <figcaption>The XLINE Eco-Solvent Printer equipped with dual EPSON I3200 Printheads.</figcaption>
                    </figure>

                    <div className="blog-content">
                        {/* Hook to catch attention */}
                        <blockquote className="blog-hook-quote">
                            Are you struggling to meet tight deadlines without sacrificing print quality? What if you could achieve both breathtaking vibrancy and industrial-grade speeds in a single, robust machine?
                        </blockquote>

                        <section className="content-section">
                            <p>
                                The <strong>SMTJET 2002-04 Eco Solvent Printer</strong> is designed for businesses that demand top-tier production without the traditional lag.
                                Featuring dual <strong>EPSON-I3200 A1/E1 printheads</strong>, this machine reaches blistering speeds of up to <strong>56 m²/h</strong> while
                                maintaining the meticulous media feeding required for professional-grade wraps, murals, and exhibition graphics.
                            </p>
                            <p>
                                Key quality-of-life enhancements include a bulk ink supply, Maintop RIP software, adjustable printhead height, carriage anti-collision, and auto-feeding/auto-take-up systems.
                            </p>
                        </section>

                        {/* Structured Features List */}
                        <section className="content-section">
                            <h2>Core Engineering Features</h2>
                            <p>We've stripped away the inefficiencies to bring you a printer designed for relentless performance:</p>

                            <div className="feature-grid">
                                {articleData.features.map((feature, index) => (
                                    <div key={index} className="feature-card">
                                        <div className="feature-icon-placeholder">✦</div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Applications using Unordered List for readability */}
                        <section className="content-section applications-section">
                            <h2>Versatile Commercial Applications</h2>
                            <p>Don't limit your business. The Smart RJ series provides the flexibility to tackle high-margin projects with absolute confidence:</p>
                            <ul className="applications-list">
                                {articleData.applications.map((app, index) => (
                                    <li key={index}><strong>{app}</strong></li>
                                ))}
                            </ul>
                        </section>

                        {/* Technical Specifications Table */}
                        <section className="content-section specs-section">
                            <h2>Technical Specifications</h2>
                            <div className="specs-table-container">
                                <table className="specs-table">
                                    <tbody>
                                        {articleData.specifications.map((spec, index) => (
                                            <tr key={index}>
                                                <th className="spec-label" scope="row">{spec.label}</th>
                                                <td className="spec-value">{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                    {/* Engagement: Share & CTA */}
                    <footer className="blog-footer">
                        {/* <div className="share-section">
                            <span>Share this post:</span>
                            <div className="share-buttons">
                                <button className="share-btn" aria-label="Share on Facebook">Facebook</button>
                                <button className="share-btn" aria-label="Share on Twitter">Twitter</button>
                                <button className="share-btn" aria-label="Share on LinkedIn">LinkedIn</button>
                            </div>
                        </div> */}

                        <div className="blog-cta">
                            <h2>Ready to upgrade your production?</h2>
                            <p>Don't let outdated equipment bottleneck your growth. Contact the Kelin Graphics System team today for a live demonstration or a custom quote.</p>
                            <button className="cta-action-btn">Contact Us Now</button>
                        </div>
                    </footer>
                </article>

                {/* Optional Enhancement: Related Posts */}
                <aside className="related-posts-section">
                    <h3>You Might Also Like</h3>
                    <div className="related-grid">
                        <div className="related-card">
                            <div className="related-img-placeholder"></div>
                            <h4>Maximizing Print Lifespan: Tips for Eco-Solvent Inks</h4>
                        </div>
                        <div className="related-card">
                            <div className="related-img-placeholder"></div>
                            <h4>How to Price Your Vehicle Wraps for Maximum Profit</h4>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}