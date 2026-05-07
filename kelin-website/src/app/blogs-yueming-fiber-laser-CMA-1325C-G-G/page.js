import React from 'react';
import "../styles/blog.css";
import Header from '../components/Header';
import Link from 'next/link';

export const metadata = {
    title: 'YueMing CMA1325C-G-G Fiber Laser Review: Auto-Focus Cutting Head with Sprint Piercing',
    description: 'An in-depth review of the YueMing CMA1325C-G-G Fiber Laser Cutting Machine. We cover its auto-focus sprint piercing head, IPG laser source, dual-servo motor gantry, reinforced welding bed, and who should invest in this industrial-grade fiber laser.',
    keywords: 'YueMing fiber laser, CMA1325C-G-G, fiber laser cutting machine Philippines, sprint piercing laser, auto-focus cutting head, IPG fiber laser, 1000W fiber laser, dual-servo gantry, Kelin Philippines laser, metal cutting machine',
    authors: [{ name: 'Kelin Philippines', url: 'https://kelinph.com/about' }],
    openGraph: {
        title: 'YueMing CMA1325C-G-G Fiber Laser Review: Auto-Focus Cutting Head with Sprint Piercing',
        description: 'Real-world performance, cutting quality, and engineering analysis of the YueMing CMA1325C-G-G Fiber Laser with auto-focus sprint piercing, dual-servo motor gantry, and IPG laser source.',
        images: [{ url: '/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.webp', width: 1200, height: 630, alt: 'YueMing CMA1325C-G-G Fiber Laser Cutting Machine' }],
        type: 'article',
        publishedTime: '2026-04-18T08:00:00.000Z',
        authors: ['Kelin Philippines'],
    },
    alternates: {
        canonical: 'https://kelinph.com/blogs-yueming-fiber-laser-CMA-1325C-G-G',
    },
};

export default function BlogYuemingCMA1325CGG() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "YueMing CMA1325C-G-G Fiber Laser Review: Auto-Focus Cutting Head with Sprint Piercing",
                "description": "An in-depth review of the YueMing CMA1325C-G-G Fiber Laser Cutting Machine. We cover its auto-focus sprint piercing head, IPG laser source, dual-servo motor gantry, reinforced welding bed, and who should invest in this industrial-grade fiber laser.",
                "image": "https://kelinph.com/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.webp",
                "author": { "@type": "Organization", "name": "Kelin Graphics System", "url": "https://kelinph.com/about" },
                "publisher": { "@type": "Organization", "name": "Kelin Graphics System", "logo": { "@type": "ImageObject", "url": "https://kelinph.com/marquee-logo/inks/kelin-logo.png" } },
                "datePublished": "2026-04-18T08:00:00.000Z",
                "dateModified": "2026-05-06T08:00:00.000Z",
                "mainEntityOfPage": "https://kelinph.com/blogs-yueming-fiber-laser-CMA-1325C-G-G"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is Sprint Piercing on the YueMing CMA1325C-G-G?", "acceptedAnswer": { "@type": "Answer", "text": "Sprint Piercing is an auto-focus Z-axis controlled piercing technique that reduces the time required to pierce through metal before each cut. Compared to conventional blow piercing, it reduces piercing time by up to 80%, significantly boosting throughput on high-volume metal cutting jobs." } },
                    { "@type": "Question", "name": "What is the working area of the CMA1325C-G-G?", "acceptedAnswer": { "@type": "Answer", "text": "The YueMing CMA1325C-G-G has a 2500\u00d71300mm working area, accommodating full-format metal sheets used in signage, fabrication, and industrial manufacturing. The dual-servo motor gantry ensures consistent speed and accuracy across the full cutting bed." } },
                    { "@type": "Question", "name": "What laser power options does the CMA1325C-G-G offer?", "acceptedAnswer": { "@type": "Answer", "text": "The CMA1325C-G-G is available with 500W, 700W, and 1000W IPG fiber laser sources. The choice of power depends on the thickness of the metals being cut and the production throughput required." } }
                ]
            }
        ]
    };

    return (
        <div className="blog-page-layout">
            <Header />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Breadcrumb */}
            <div className="blog-breadcrumb-bar">
                <div className="blog-breadcrumb-inner">
                    <Link href="/" className="breadcrumb-link">Home</Link>
                    <svg className="breadcrumb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    <Link href="/laser-machine" className="breadcrumb-link">Laser Machines</Link>
                    <svg className="breadcrumb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    <span className="breadcrumb-current">YueMing CMA1325C-G-G Fiber Laser</span>
                </div>
            </div>

            <div className="blog-layout-wrapper">
                <main className="blog-main">
                    <article className="blog-article">

                        <header className="blog-article-header">
                            <span className="article-category-tag">Laser Machines</span>
                            <h1 className="blog-article-title">
                                YueMing CMA1325C-G-G Fiber Laser — Auto-Focus Cutting Head with Sprint Piercing
                            </h1>
                            <p className="blog-article-subtitle">
                                Industrial-speed fiber laser cutting at up to 60 m/min positioning speed, powered by imported IPG laser source, dual-servo motor gantry, and an auto-focus sprint piercing head that slashes piercing time by up to 80%.
                            </p>
                            <div className="article-meta-row">
                                <div className="article-meta-details">
                                    <span className="meta-item">By Kelin Philippines</span>
                                    <span className="meta-item">April 18, 2026</span>
                                    <span className="meta-item">Fiber Laser · Metal Cutting</span>
                                </div>
                            </div>
                            <div className="callout-box callout-summary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                                <div>
                                    <strong>Quick Summary</strong>
                                    <ul style={{ margin: '8px 0 0', paddingLeft: '18px', lineHeight: '1.8' }}>
                                        <li>Auto-focus sprint piercing head reduces piercing time by up to 80%</li>
                                        <li>2500×1300mm working area with dual-servo motor gantry</li>
                                        <li>Available in 500W, 700W, and 1000W IPG laser power options</li>
                                        <li>Reinforced welded machine bed minimizes vibration for precision cuts</li>
                                    </ul>
                                </div>
                            </div>
                        </header>

                        <div className="blog-featured-image">
                            <img
                                src="/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.webp"
                                alt="YueMing CMA1325C-G-G Fiber Laser Cutting Machine"
                                width={900}
                                height={550}
                                style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover' }}
                            />
                        </div>

                        <div className="blog-body">

                            <section className="article-section">
                                <h2>What Makes the CMA1325C-G-G Stand Out?</h2>
                                <p>
                                    The <strong>YueMing CMA1325C-G-G</strong> is a full-format fiber laser cutting machine built for industrial production environments. With a 2500x1300mm working area, optional 500W / 700W / 1000W laser power, and a positioning speed of up to <strong>60 m/min</strong>, this machine is engineered to handle thick and reflective metals at throughput levels that smaller desktop lasers simply cannot match.
                                </p>
                                <p>
                                    At the heart of its performance advantage is the <strong>auto-focus cutting head with Sprint Piercing</strong> — a Z-axis controlled piercing system that reduces piercing time by up to 80% compared to conventional methods. For shops doing high-volume signage letters, brackets, gears, kitchen equipment parts, or structural components, that translates directly into faster job completion and lower per-part cost.
                                </p>
                            </section>

                            <hr className="section-divider" />

                            <section className="article-section">
                                <h2>Key Features</h2>
                                <div className="feature-cards-grid">
                                    <div className="feature-card">
                                        <div className="feature-card-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" /></svg>
                                        </div>
                                        <h3>Reinforced Welding Bed</h3>
                                        <p>Milled and processed by a large gantry with tempered treatment and vibration aging — stress is eliminated for a flat, stable cutting surface throughout the machine's service life.</p>
                                    </div>
                                    <div className="feature-card">
                                        <div className="feature-card-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                                        </div>
                                        <h3>Trusted Global Components</h3>
                                        <p>Main components are Siemens, Delta, SMC, and other imported globally recognized brands — ensuring long-term reliability and easy spare-part sourcing.</p>
                                    </div>
                                    <div className="feature-card">
                                        <div className="feature-card-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                        </div>
                                        <h3>IPG Laser &amp; iGUS Cabling</h3>
                                        <p>Imported IPG fiber laser generator combined with German iGUS cable throughout the entire machine — reliable, stable, and built to last under continuous production loads.</p>
                                    </div>
                                    <div className="feature-card">
                                        <div className="feature-card-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                        </div>
                                        <h3>Lightweight High-Performance Crossbeam</h3>
                                        <p>Crafted through drawing and finishing processes for reduced weight and superior dynamic motion — enabling the 0.6G max acceleration speed that keeps positioning sharp at 60 m/min.</p>
                                    </div>
                                </div>
                            </section>

                            <hr className="section-divider" />

                            <section className="article-section">
                                <h2>Auto-Focus Sprint Piercing: A Game Changer for Thick Metal</h2>
                                <p>
                                    Traditional laser piercing on thick or reflective materials is slow and risks lens contamination from spatter. The CMA1325C-G-G's <strong>auto-focus head with Sprint Piercing</strong> solves both problems simultaneously:
                                </p>
                                <ul>
                                    <li><strong>Z-axis dynamic control</strong> — The focus point is automatically adjusted during piercing for optimal energy concentration at each depth.</li>
                                    <li><strong>Up to 80% faster piercing</strong> — Sprint Piercing dramatically cuts the time needed to initiate each cut, boosting throughput especially on jobs with many pierce points.</li>
                                    <li><strong>Optics protection</strong> — The controlled piercing sequence minimizes spatter blowback, protecting the focusing lens and extending service intervals.</li>
                                    <li><strong>Reflective metal capability</strong> — Excels at cutting copper, brass, and aluminum alloys where conventional lasers struggle with back-reflection damage.</li>
                                </ul>

                                <div className="callout-box callout-info">
                                    <strong>Industrial Grading Speed:</strong> Positioning speed up to <strong>60 m/min</strong> with 0.6G max acceleration — competitive with the fastest industrial fiber lasers in its class.
                                </div>
                            </section>

                            <hr className="section-divider" />

                            <section className="article-section">
                                <h2>Full Specifications</h2>
                                <div className="specs-table-wrapper">
                                    <table className="specs-table">
                                        <tbody>
                                            <tr><th>Product Model</th><td>CMA1325C-G-G</td></tr>
                                            <tr><th>Laser Source</th><td>Imported IPG or Chinese laser source (optional)</td></tr>
                                            <tr><th>Laser Power</th><td>500W / 700W / 1000W (Optional)</td></tr>
                                            <tr><th>Laser Type</th><td>Fiber Laser</td></tr>
                                            <tr><th>Working Area</th><td>2500mm x 1300mm</td></tr>
                                            <tr><th>Max Positioning Speed</th><td>60 m/min</td></tr>
                                            <tr><th>Max Acceleration Speed</th><td>0.6G</td></tr>
                                            <tr><th>Transmission System</th><td>Dual-Servo Motor Gantry</td></tr>
                                            <tr><th>Positioning Accuracy</th><td>+/-0.05mm / 1000mm</td></tr>
                                            <tr><th>Repeat Positioning Accuracy</th><td>+/-0.03mm / 1000mm</td></tr>
                                            <tr><th>Supported Graphics</th><td>CAD, DXF, etc.</td></tr>
                                            <tr><th>Power Consumption</th><td>4KW</td></tr>
                                            <tr><th>Power Supply</th><td>Single phase 220V / 50Hz / 60Hz</td></tr>
                                            <tr><th>Working Environment</th><td>0-40 degrees C, Humidity 80% max, No Condensation</td></tr>
                                            <tr><th>Dimension</th><td>4520mm x 2030mm x 1750mm</td></tr>
                                            <tr><th>Weight</th><td>2300 kg</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <hr className="section-divider" />

                            <section className="article-section">
                                <h2>Application Areas</h2>
                                <p>The CMA1325C-G-G is a versatile industrial fiber laser suitable for a wide range of metal cutting and fabrication applications:</p>
                                <ul>
                                    <li><strong>Signage &amp; Channel Letters</strong> — Cut stainless steel, aluminum, and brass letter blanks for illuminated signage at high speed.</li>
                                    <li><strong>Sheet Metal Fabrication</strong> — Brackets, panels, enclosures, and structural components with precise, burr-free edges.</li>
                                    <li><strong>Industrial Gears &amp; Parts</strong> — Complex profile cutting from carbon steel and alloy steel sheets with tight tolerances.</li>
                                    <li><strong>Kitchen &amp; Food Equipment</strong> — Stainless steel table frames, sink cutouts, and equipment panels.</li>
                                    <li><strong>Advertising &amp; Display</strong> — Decorative metal panels, logo backplates, and display stands.</li>
                                    <li><strong>Automotive &amp; Transportation Parts</strong> — Lightweight aluminum alloy and stainless components for vehicle bodywork and frames.</li>
                                </ul>

                                <div className="callout-box callout-tip">
                                    <strong>Pro Tip:</strong> The optional Chinese laser source keeps acquisition cost down for shops transitioning from plasma or CO2 cutting, while the IPG option provides premium beam quality for reflective-metal jobs.
                                </div>
                            </section>

                            <hr className="section-divider" />

                            <section className="article-section">
                                <h2>Pros &amp; Cons</h2>
                                <div className="pros-cons-grid">
                                    <div className="pros-box">
                                        <h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" style={{ marginRight: '6px', verticalAlign: 'middle', color: '#16a34a' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                            Pros
                                        </h3>
                                        <ul>
                                            <li>Auto-focus sprint piercing cuts piercing time by up to 80%</li>
                                            <li>60 m/min industrial-grade positioning speed</li>
                                            <li>Optional IPG or Chinese laser source for flexibility</li>
                                            <li>Dual-servo motor gantry for consistent high-speed accuracy</li>
                                            <li>Reinforced welding bed — stress-relieved for long-term flatness</li>
                                            <li>Trusted global components: Siemens, Delta, SMC, iGUS</li>
                                            <li>Large 2500x1300mm working area for full sheet processing</li>
                                            <li>+/-0.03mm repeat positioning accuracy for production consistency</li>
                                        </ul>
                                    </div>
                                    <div className="cons-box">
                                        <h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" style={{ marginRight: '6px', verticalAlign: 'middle', color: '#d97706' }}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                            Considerations
                                        </h3>
                                        <ul>
                                            <li>Large footprint (4520x2030x1750mm) requires dedicated floor space</li>
                                            <li>2300 kg — requires proper flooring load rating and forklift for installation</li>
                                            <li>Industrial power supply required (220V single phase, 4KW)</li>
                                            <li>Best suited for metal cutting — not for non-metal materials</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <hr className="section-divider" />

                            <section className="article-section">
                                <h2>Final Verdict</h2>
                                <p>
                                    The <strong>YueMing CMA1325C-G-G</strong> is an industrial-grade fiber laser cutting machine that delivers on both speed and precision. The auto-focus sprint piercing head is the standout feature — slashing piercing time by up to 80% while protecting optics for longer service intervals. Combined with the dual-servo motor gantry, reinforced welding bed, and imported IPG laser source, this is a machine built to run production shifts day after day.
                                </p>
                                <p>
                                    For Philippine fabrication shops, sign manufacturers, and industrial parts suppliers looking to upgrade from plasma or CO2 cutting to modern fiber laser technology, the CMA1325C-G-G offers a compelling combination of German/Japanese component quality, flexible power options, and a work area large enough to process full standard metal sheets.
                                </p>
                                <div className="callout-box callout-info">
                                    <strong>Available at Kelin Philippines</strong> — Contact us for pricing, financing options, and live demonstration. Our technicians provide on-site installation, training, and after-sales support across the Philippines.
                                </div>
                            </section>

                        </div>

                        <div className="article-share-bar">
                            <span className="share-label">Share this article:</span>
                            <div className="share-buttons">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://kelinph.com/blogs-yueming-fiber-laser-CMA-1325C-G-G" target="_blank" rel="noopener noreferrer" className="share-btn share-facebook">Facebook</a>
                                <a href="https://twitter.com/intent/tweet?url=https://kelinph.com/blogs-yueming-fiber-laser-CMA-1325C-G-G&text=YueMing+CMA1325C-G-G+Fiber+Laser+Review" target="_blank" rel="noopener noreferrer" className="share-btn share-twitter">Twitter</a>
                                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://kelinph.com/blogs-yueming-fiber-laser-CMA-1325C-G-G" target="_blank" rel="noopener noreferrer" className="share-btn share-linkedin">LinkedIn</a>
                            </div>
                        </div>

                        <div className="article-cta-block">
                            <p className="cta-text">Interested in the YueMing CMA1325C-G-G Fiber Laser? Get a quote or schedule a live demo at our showroom.</p>
                            <div className="cta-actions">
                                <Link href="/contact" className="cta-btn-primary">Get a Quote</Link>
                                <Link href="/laser-machine" className="cta-btn-secondary">View All Laser Machines</Link>
                            </div>
                        </div>

                    </article>
                </main>

                <aside className="blog-sidebar">
                    <div className="sidebar-sticky">

                        <div className="sidebar-widget toc-widget">
                            <h3 className="widget-title">In This Guide</h3>
                            <ol className="toc-list">
                                <li><a href="#what-makes-it-stand-out">What Makes It Stand Out?</a></li>
                                <li><a href="#key-features">Key Features</a></li>
                                <li><a href="#sprint-piercing">Auto-Focus Sprint Piercing</a></li>
                                <li><a href="#full-specifications">Full Specifications</a></li>
                                <li><a href="#application-areas">Application Areas</a></li>
                                <li><a href="#pros-cons">Pros &amp; Cons</a></li>
                                <li><a href="#final-verdict">Final Verdict</a></li>
                            </ol>
                        </div>

                        <div className="sidebar-widget product-widget">
                            <img
                                src="/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.webp"
                                alt="YueMing CMA1325C-G-G Fiber Laser"
                                className="product-widget-img"
                            />
                            <h3>YueMing CMA1325C-G-G</h3>
                            <p>Fiber Laser | 500W / 700W / 1000W | 2500x1300mm | 60 m/min</p>
                            <Link href="/yueming-fiber-laser-cma1325c-g-g" className="product-widget-btn">View Product</Link>
                        </div>

                        <div className="sidebar-widget related-widget">
                            <h3 className="widget-title">Related Articles</h3>
                            <ul className="related-article-list">
                                <li className="related-article-item">
                                    <img src="/laser-machines/Yueming Fiber Laser HL1530C-G-E 1500w IPG.webp" alt="YueMing HL1530C-G-E Fiber Laser" className="related-article-img" />
                                    <div>
                                        <span className="related-article-category">Laser Machines</span>
                                        <Link href="/blogs-yueming-fiber-laser-HL1530C-G-E" className="related-article-title">YueMing HL1530C-G-E 1500W IPG Fiber Laser</Link>
                                    </div>
                                </li>
                                <li className="related-article-item">
                                    <img src="/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.webp" alt="Hanniu K1390 CO2 300W" className="related-article-img" />
                                    <div>
                                        <span className="related-article-category">Laser Machines</span>
                                        <Link href="/blogs-hanniu-k1390-CO2-laser-300W" className="related-article-title">Hanniu K1390 CO2 Laser 300W Review</Link>
                                    </div>
                                </li>
                                <li className="related-article-item">
                                    <img src="/laser-machines/K-sign_Desktop Laser Marking.webp" alt="K-Sign Laser Marking" className="related-article-img" />
                                    <div>
                                        <span className="related-article-category">Laser Machines</span>
                                        <Link href="/blogs-k-sign-desktop-laser-marking" className="related-article-title">K-Sign ML20/ML30 Desktop Laser Marking Machine</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </aside>

            </div>
        </div>
    );
}
