"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './sapphire-heat-press.css';

export default function SapphireHeatPress() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/heatpress/Sapphire Heatpress (2).png');
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
        name: 'SAPPHIRE HD HEAT PRESS',
        model: 'MANUAL HEATPRESS 60CM X 90CM',
        images: [
            '/heatpress/Sapphire Heatpress (2).png',
            '/heatpress/Sapphire Heatpress (2).png',
        ],
        shortDescription: 'The Sapphire HD Heat Press is a 60x90cm large-format, drawer-type machine. It offers precise control over time, temperature, and pressure for professional grade heat transfers on big items.',
        detailedDescription: 'The Sapphire HD Heat Press is a 60x90cm large-format, drawer-type machine. It offers precise control over time, temperature, and pressure for professional grade heat transfers on big items, with a pull-out lower platen for safe and easy operation. Features a silicon grip pulling handle for comfortable operation and a digital time/temperature panel for exact settings.',
        features: [
            {
                title: 'Heating Pad',
                description: 'Provides uniform heat for bonding, ensuring consistent heat distribution across the entire pressing area for professional results.',
                icon: 'heating'
            },
            {
                title: 'Handle Grip',
                description: 'Silicon grip pulling handle for safe opening/closing and pulling out the lower tray for comfortable and secure operation.',
                icon: 'handle'
            },
            {
                title: 'Pressure Adjuster',
                description: 'Controls force for proper transfer adhesion, allowing precise pressure adjustment for different materials and transfer types.',
                icon: 'pressure'
            },
            {
                title: 'Time/Temperature Panel',
                description: 'Digital control panel sets exact heat duration and intensity for perfect transfers every time with precise temperature control.',
                icon: 'control'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'MANUAL HEATPRESS' },
            { label: 'Machine Size', value: '60cm x 90cm' },
            { label: 'Wattage (kw)', value: '2.6kw' },
            { label: 'Voltage', value: '220v' }
        ],
        applications: [
            'Full Jersey Sublimation',
            'Tote Bag DTF',
            'T-shirt DTF Application',
            'Face mask sublimation',
            'Large Format Garment Printing',
            'Custom Apparel Production',
            'Promotional Products',
            'Team Uniforms',
            'Corporate Branding',
            'Personalized Gifts',
            'Home Decor Textiles',
            'Fashion Design Prototyping'
        ],
        advantages: [
            'Large 60x90cm format for oversized items',
            'Drawer-type design for safe operation',
            'Pull-out lower platen for easy loading',
            'Silicon grip handle for comfortable use',
            'Digital time and temperature control',
            'Uniform heat distribution',
            'Adjustable pressure settings',
            'Professional grade transfers',
            'Energy-efficient 2.6kw operation',
            'Suitable for various materials',
            'Ideal for full jersey sublimation',
            'Perfect for DTF and sublimation applications'
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
            <main className="sapphire-heatpress-main">
                {/* Product Hero Section */}
                <section className="sapphire-heatpress-hero product-hero">
                    <div className="sapphire-heatpress-hero-layout">
                        <div className="sapphire-heatpress-hero-left">
                            <h1 className="sapphire-heatpress-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="sapphire-heatpress-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="sapphire-heatpress-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="sapphire-heatpress-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="sapphire-heatpress-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="sapphire-heatpress-hero-stats product-stats">
                                <div className="sapphire-heatpress-stat">
                                    <span className="sapphire-heatpress-stat-number">60x90cm</span>
                                    <span className="sapphire-heatpress-stat-label">Large Format</span>
                                </div>
                                <div className="sapphire-heatpress-stat">
                                    <span className="sapphire-heatpress-stat-number">2.6kw</span>
                                    <span className="sapphire-heatpress-stat-label">Power</span>
                                </div>
                                <div className="sapphire-heatpress-stat">
                                    <span className="sapphire-heatpress-stat-number">220v</span>
                                    <span className="sapphire-heatpress-stat-label">Voltage</span>
                                </div>
                            </div>
                        </div>
                        <div className="sapphire-heatpress-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="sapphire-heatpress-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="sapphire-heatpress-overview-section">
                    <div className="sapphire-heatpress-overview-container">
                        <h2 className="sapphire-heatpress-section-title">Product Overview</h2>
                        <p className="sapphire-heatpress-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="sapphire-heatpress-features-section">
                    <div className="sapphire-heatpress-features-container">
                        <div className="sapphire-heatpress-features-header">
                            <h2 className="sapphire-heatpress-features-title">Key Features</h2>
                            <p className="sapphire-heatpress-features-subtitle">
                                Safe & easy large-format heat press operation
                            </p>
                        </div>

                        <div className="sapphire-heatpress-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="sapphire-heatpress-feature-card">
                                    <div className="sapphire-heatpress-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="sapphire-heatpress-feature-title">{feature.title}</h3>
                                    <p className="sapphire-heatpress-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="sapphire-heatpress-specs-section">
                    <div className="sapphire-heatpress-specs-container">
                        <h2 className="sapphire-heatpress-section-title">Technical Specifications</h2>
                        <p className="sapphire-heatpress-section-subtitle">
                            Complete technical details for Sapphire HD Heat Press 60cm x 90cm
                        </p>
                        <div className="sapphire-heatpress-specs-grid">
                            <div className="sapphire-heatpress-spec-card">
                                <h3 className="sapphire-heatpress-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="sapphire-heatpress-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="sapphire-heatpress-spec-item">
                                            <div className="sapphire-heatpress-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="sapphire-heatpress-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="sapphire-heatpress-applications-section">
                    <div className="sapphire-heatpress-applications-container">
                        <h2 className="sapphire-heatpress-section-title">Applications</h2>
                        <p className="sapphire-heatpress-applications-subtitle">
                            Professional heat press solutions for diverse sublimation and DTF applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="sapphire-heatpress-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="sapphire-heatpress-applications-image-grid">
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Full Jersey Sublimation" />
                                    <p>Full Jersey Sublimation</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Tote Bag DTF" />
                                    <p>Tote Bag DTF</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="T-shirt DTF Application" />
                                    <p>T-shirt DTF Application</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Face mask sublimation" />
                                    <p>Face mask sublimation</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Large Format Garment Printing" />
                                    <p>Large Format Garment Printing</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Custom Apparel Production" />
                                    <p>Custom Apparel Production</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Team Uniforms" />
                                    <p>Team Uniforms</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Corporate Branding" />
                                    <p>Corporate Branding</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Personalized Gifts" />
                                    <p>Personalized Gifts</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Home Decor Textiles" />
                                    <p>Home Decor Textiles</p>
                                </div>
                                <div className="sapphire-heatpress-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Fashion Design Prototyping" />
                                    <p>Fashion Design Prototyping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="sapphire-heatpress-advantages-section">
                    <div className="sapphire-heatpress-advantages-container">
                        <h2 className="sapphire-heatpress-section-title">Why Choose Sapphire HD Heat Press?</h2>
                        <div className="sapphire-heatpress-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="sapphire-heatpress-advantage-item">
                                    <div className="sapphire-heatpress-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="sapphire-heatpress-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="sapphire-heatpress-modal-overlay" onClick={closeInquiryModal}>
                    <div className="sapphire-heatpress-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="sapphire-heatpress-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="sapphire-heatpress-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="sapphire-heatpress-inquiry-form">
                            <div className="sapphire-heatpress-form-row">
                                <div className="sapphire-heatpress-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="sapphire-heatpress-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="sapphire-heatpress-form-row">
                                <div className="sapphire-heatpress-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="sapphire-heatpress-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="sapphire-heatpress-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="sapphire-heatpress-phone-input">
                                    <select className="sapphire-heatpress-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="sapphire-heatpress-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your heat press needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="sapphire-heatpress-form-actions">
                                <button type="submit" className="sapphire-heatpress-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="sapphire-heatpress-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
