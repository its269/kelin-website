"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './hanniu-k1390-co2-laser-300w.css';

export default function HanniuK1390CO2Laser300W() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.png');
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const machineDetails = {
        name: 'Hanniu K1390',
        model: 'CO2 LASER CUTTING MACHINE',
        images: [
            '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.png',
            '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.png',
        ],
        shortDescription: 'Advanced CO2 laser cutting machine excels at demanding creations, precisely cutting and engraving diverse non-metals (1300×900mm, up to 300W), ensuring stable, accurate results with DSP control and high precision components.',
        detailedDescription: 'Our CO2 Laser excels at Advanced Laser Technology for Demanding Creations. It precisely cuts and engraves diverse non-metals (1300×900mm, up to 300W), ensuring stable, accurate results with DSP control and high precision components. Featuring industrial engraving speed up to 64000mm/min, this machine delivers consistent cutting effect with continuous curve cutting combined with automatic power compensation for stable results, DSP intelligent control technology with ultra-advanced DSP internal control, and precise motion system with imported high precision linear guide rails and professional optics.',
        features: [
            {
                title: 'Consistent Cutting Effect',
                description: 'Continuous curve cutting combined with automatic power compensation ensures consistent cutting results for reliable performance.',
                icon: 'consistency'
            },
            {
                title: 'DSP Intelligent Control Technology',
                description: 'Utilizes advanced DSP internal control technology for enhanced performance and precise operation with user-friendly interface.',
                icon: 'dsp'
            },
            {
                title: 'Precise Motion System',
                description: 'Imported high precision linear guide rails, professional optics wire in high precision stepping motor ensures stable, professional cutting.',
                icon: 'precision'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'K1390' },
            { label: 'Engraving Area', value: '1300MM*900MM' },
            { label: 'Laser Power', value: '300W' },
            { label: 'Engraving Speed', value: '0-64000MM/MIN' },
            { label: 'Resolution', value: '0.025MM' },
            { label: 'Operating Humidity', value: '0-45°' },
            { label: 'Cooling Method', value: 'Water' },
            { label: 'Machine Size', value: '1900MM*820MM*1034MM' },
            { label: 'Power', value: 'AC220V' },
            { label: 'Weight', value: 'G.W:500KG' }
        ],
        applications: [
            'Acrylic signage and display manufacturing',
            'Personalized product creation',
            'Wood carving and decorative items',
            'Craft and hobby project fabrication',
            'Leather goods customization',
            'Textile and fabric cutting',
            'Plexiglass engraving',
            'Paper and cardstock designs',
            'Rubber stamp making',
            'Bamboo product processing',
            'Ceramic engraving',
            'Non-metallic material processing'
        ],
        advantages: [
            'Industrial-grade 64000 mm/min engraving speed',
            'Advanced laser technology for demanding creations',
            'Precise cutting and engraving (1300×900mm)',
            'Up to 300W laser power',
            'DSP intelligent control technology',
            'Automatic power compensation',
            'Consistent curve cutting effect',
            'High precision linear guide rails',
            'Professional optical components',
            'Imported stepping motor system',
            'Water cooling method',
            'Suitable for diverse non-metallic materials'
        ]
    };

    const openInquiryModal = () => {
        setInquiryModalOpen(true);
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
    };

    const handleSubmitInquiry = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you soon.');
        closeInquiryModal();
    };

    return (
        <div>
            <Header />
            <main className="hanniu-300w-main">
                {/* Product Hero Section */}
                <section className="hanniu-300w-hero product-hero">
                    <div className="hanniu-300w-hero-layout">
                        <div className="hanniu-300w-hero-left">
                            <h1 className="hanniu-300w-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="hanniu-300w-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="hanniu-300w-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="hanniu-300w-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="hanniu-300w-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="hanniu-300w-hero-stats product-stats">
                                <div className="hanniu-300w-stat">
                                    <span className="hanniu-300w-stat-number">64000</span>
                                    <span className="hanniu-300w-stat-label">mm/min</span>
                                </div>
                                <div className="hanniu-300w-stat">
                                    <span className="hanniu-300w-stat-number">300W</span>
                                    <span className="hanniu-300w-stat-label">Power</span>
                                </div>
                                <div className="hanniu-300w-stat">
                                    <span className="hanniu-300w-stat-number">DSP</span>
                                    <span className="hanniu-300w-stat-label">Control</span>
                                </div>
                            </div>
                        </div>
                        <div className="hanniu-300w-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="hanniu-300w-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="hanniu-300w-overview-section">
                    <div className="hanniu-300w-overview-container">
                        <h2 className="hanniu-300w-section-title">Product Overview</h2>
                        <p className="hanniu-300w-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="hanniu-300w-features-section">
                    <div className="hanniu-300w-features-container">
                        <div className="hanniu-300w-features-header">
                            <h2 className="hanniu-300w-features-title">Key Features</h2>
                            <p className="hanniu-300w-features-subtitle">
                                Advanced laser technology for demanding creations
                            </p>
                        </div>

                        <div className="hanniu-300w-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="hanniu-300w-feature-card">
                                    <div className="hanniu-300w-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="hanniu-300w-feature-title">{feature.title}</h3>
                                    <p className="hanniu-300w-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="hanniu-300w-specs-section">
                    <div className="hanniu-300w-specs-container">
                        <h2 className="hanniu-300w-section-title">Technical Specifications</h2>
                        <p className="hanniu-300w-section-subtitle">
                            Complete technical details for K1390 CO2 Laser Cutting Machine (300W)
                        </p>
                        <div className="hanniu-300w-specs-grid">
                            <div className="hanniu-300w-spec-card">
                                <h3 className="hanniu-300w-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="hanniu-300w-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="hanniu-300w-spec-item">
                                            <div className="hanniu-300w-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="hanniu-300w-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="hanniu-300w-applications-section">
                    <div className="hanniu-300w-applications-container">
                        <h2 className="hanniu-300w-section-title">Application Materials</h2>
                        <p className="hanniu-300w-applications-subtitle">
                            Professional CO2 laser cutting for diverse non-metallic materials
                        </p>
                        <div
                            ref={scrollRef}
                            className="hanniu-300w-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="hanniu-300w-applications-image-grid">
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Acrylic signage" />
                                    <p>Acrylic signage</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Personalized products" />
                                    <p>Personalized products</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Wood carving" />
                                    <p>Wood carving</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Craft projects" />
                                    <p>Craft projects</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Leather goods" />
                                    <p>Leather goods</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Textile cutting" />
                                    <p>Textile cutting</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Plexiglass engraving" />
                                    <p>Plexiglass engraving</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Paper designs" />
                                    <p>Paper designs</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Rubber stamps" />
                                    <p>Rubber stamps</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Bamboo products" />
                                    <p>Bamboo products</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Ceramic engraving" />
                                    <p>Ceramic engraving</p>
                                </div>
                                <div className="hanniu-300w-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Non-metallic materials" />
                                    <p>Non-metallic materials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="hanniu-300w-advantages-section">
                    <div className="hanniu-300w-advantages-container">
                        <h2 className="hanniu-300w-section-title">Why Choose K1390 CO2 Laser (300W)?</h2>
                        <div className="hanniu-300w-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="hanniu-300w-advantage-item">
                                    <div className="hanniu-300w-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="hanniu-300w-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="hanniu-300w-modal-overlay" onClick={closeInquiryModal}>
                    <div className="hanniu-300w-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="hanniu-300w-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="hanniu-300w-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="hanniu-300w-inquiry-form">
                            <div className="hanniu-300w-form-row">
                                <div className="hanniu-300w-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="hanniu-300w-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="hanniu-300w-form-row">
                                <div className="hanniu-300w-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="hanniu-300w-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="hanniu-300w-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="hanniu-300w-phone-input">
                                    <select className="hanniu-300w-country-select" name="countryCode" defaultValue="+63">
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+33">🇫🇷 +33</option>
                                        <option value="+44">🇬🇧 +44</option>
                                        <option value="+49">🇩🇪 +49</option>
                                        <option value="+55">🇧🇷 +55</option>
                                        <option value="+61">🇦🇺 +61</option>
                                        <option value="+63">🇵🇭 +63</option>
                                        <option value="+81">🇯🇵 +81</option>
                                        <option value="+82">🇰🇷 +82</option>
                                        <option value="+86">🇨🇳 +86</option>
                                        <option value="+91">🇮🇳 +91</option>
                                    </select>
                                    <input type="tel" name="phone" placeholder="Enter phone number" required />
                                </div>
                            </div>

                            <div className="hanniu-300w-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laser cutting needs, materials, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="hanniu-300w-form-actions">
                                <button type="submit" className="hanniu-300w-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="hanniu-300w-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
