// app/blogs/page.js
import React from 'react';
import "./smart-eco-solvent-printer.css";
import Header from '../components/Header';

// Static Data for SSG - This ensures SEO crawlers can index the content perfectly.
const articleData = {
    title: "Vibrant, Efficient Production: Precision High-Speed Printing with Smart RJ24",
    lead: "Revolutionize your large-format printing workflow with industrial-grade speed and unmatched stability.",
    date: "March 24, 2026",
    category: "Product Spotlight",
    specifications: [
        { label: "Machine Model", value: "RJ-2002 - RJ2004" },
        { label: "Head Model", value: "EPSON I3200 A1/E1" },
        { label: "Printing Width", value: "1.9m" },
        { label: "Industrial Speed", value: "Up to 27m²/h (6 Pass)" },
        { label: "Drying System", value: "Pre & Post Heating Infrared Drying" }
    ],
    features: [
        {
            title: "THK Mute Guide Rail",
            desc: "Incorporates a Teflon platform and high-resistance pinch rollers to guarantee precise media feeding movements."
        },
        {
            title: "High Performance Control System",
            desc: "Built with highly integrated boards and an imported power control system for maximum stability and efficiency."
        },
        {
            title: "Aluminium Alloy Carriage Station",
            desc: "Features an all-aluminum alloy carriage station and beam, ensuring quiet, accurate, and durable operation."
        }
    ]
};

export default function BlogArticlePage() {
    return (
        <main className="smart-eco-solvent-printer-page-container">
            <Header />

            <article className="article-content-wrapper">
                {/* SEO Hook & Header */}
                <header className="article-header">
                    <div className="article-meta">
                        <span className="category-tag">{articleData.category}</span>
                        <span className="separator">•</span>
                        <time>{articleData.date}</time>
                    </div>
                    <h1 className="article-main-title">{articleData.title}</h1>
                    <p className="article-hook">
                        Stop compromising between speed and quality. The SMART RJ series delivers industrial-grade output up to <strong>56m²/h</strong>,
                        ensuring your business stays ahead of the deadline.
                    </p>
                </header>

                {/* Main Product Showcase */}
                <figure className="main-featured-image">
                    <img
                        src="/eco-solvent-machines/SMART.webp"
                        alt="Smart RJ24-2002 Machine"
                    />
                    <figcaption>The Smart RJ24-2002 & 2004 6ft Eco-Solvent Printer.</figcaption>
                </figure>

                {/* Article Content */}
                <div className="article-body">
                    <section className="content-section">
                        <h2>Engineered for High-Speed Precision</h2>
                        <p>
                            The SMTJET 2002-04 Eco Solvent Printer is designed for those who demand vibrant production without the lag.
                            Featuring dual <strong>EPSON-I3200 A1/E1</strong> printheads, this machine reaches industrial speeds while
                            maintaining the precise media feeding required for professional-grade wraps and wall murals.
                        </p>
                    </section>

                    {/* Feature Grid */}
                    <section className="feature-highlight-grid">
                        {articleData.features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </section>

                    {/* Specification Table for Learning/Reference */}
                    <section className="specs-container">
                        <h3>Technical Specifications</h3>
                        <table className="specs-table">
                            <tbody>
                                {articleData.specifications.map((spec, index) => (
                                    <tr key={index}>
                                        <td className="spec-label">{spec.label}</td>
                                        <td className="spec-value">{spec.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>

                    <section className="content-section">
                        <h2>Versatile Applications</h2>
                        <p>
                            From <strong>Vehicle Wraps</strong> and <strong>Art Reproductions</strong> to <strong>Exhibition Graphics</strong>,
                            the Smart RJ series provides the flexibility your layout crew needs to tackle any project with confidence.
                        </p>
                    </section>
                </div>

                <footer className="article-footer">
                    <div className="cta-box">
                        <h4>Ready to upgrade your production?</h4>
                        <p>Contact the Kelin Graphics System team today for a live demonstration.</p>
                        <button className="inquire-btn">Inquire Now</button>
                    </div>
                </footer>
            </article>
        </main>
    );
}


// dssdfsdlfhsd flshdfjsdhgdsk