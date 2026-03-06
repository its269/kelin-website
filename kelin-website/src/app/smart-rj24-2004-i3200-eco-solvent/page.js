"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './smart-rj24-unique.css';

export default function SmartRJ24I3200EcoSolvent() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/SMART Eco-Solvent Machine.png');
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
        name: 'SMART ECO-SOLVENT RJ24-2002 & 2004 6FT',
        model: 'RJ24-2002 & RJ24-2004',
        images: [
            '/SMART Eco-Solvent Machine.png',
            '/SMART Eco-Solvent Machine.png', // Add more images if available
        ],
        shortDescription: 'Vibrant, Efficient Production: Precision High-Speed Printing with EPSON i3200 printheads for speeds up to 97 m²/h.',
        detailedDescription: 'The SMART-JET 2002-04 Eco Solvent Printer offers Vibrant, Efficient Production: Precision High-Speed Printing with EPSON i3200 printheads. Key features include an all-aluminum alloy carriage, precise media feeding, quick ink supply, an external infrared heating fan, and Maintop RIP software. It also provides adjustable print head height, carriage anti-collision, auto-feeding, auto-take-up, and preheated infrared drying.',
        features: [
            {
                title: 'THK Mute Guide Rail',
                description: 'Incorporates advanced automation with imported THK linear motion systems for smooth operation',
                icon: 'print'
            },
            {
                title: 'High Performance Control System',
                description: 'Features advanced technology for industrial-speed printing with excellent quality',
                icon: 'media'
            },
            {
                title: 'Aluminium Alloy Carriage Station',
                description: 'Lightweight yet durable carriage design with premium grade industrial components',
                icon: 'production'
            },
            {
                title: 'External Infrared Heating Fan',
                description: 'Equipped with infrared heating for enhanced drying and improved print quality',
                icon: 'eco'
            },
            {
                title: 'EPSON i3200 Printheads',
                description: 'Advanced EPSON i3200 A1/F1 printheads for precision high-speed printing up to 97 m²/h',
                icon: 'quality'
            },
            {
                title: 'Maintop RIP Software',
                description: 'Professional RIP software for optimal print quality and color management',
                icon: 'versatile'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'RJ-2002 - RJ2004' },
            { label: 'Head Model', value: 'EPSON i3200 A1/F1' },
            { label: 'Media Width', value: 'Preheated Heating Infrared Drying' },
            { label: 'Printing Width', value: '1.9m' },
            { label: 'Machine Size', value: '3200mm×750mm×850mm' },
            { label: 'Printing Speed', value: '3 PASS: 65m²/h | 4 PASS: 39m²/h | 6 PASS: 28m²/h' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Weight', value: 'G.W. 360kg | N.W.280kg (RJ2002) | G.W. 480kg | N.W.400kg (RJ2004)' },
            { label: 'Print Technology', value: 'EPSON i3200 Piezo Print Head' },
            { label: 'RIP Software', value: 'Maintop RIP Software' },
            { label: 'Features', value: 'Auto-feeding, Auto-take-up, Preheated Infrared Drying' },
            { label: 'Carriage System', value: 'Aluminum Alloy with Anti-collision' },
            { label: 'Guide System', value: 'THK Mute Guide Rail' },
            { label: 'Heating System', value: 'External Infrared Heating Fan' }
        ],
        applications: [
            'Vehicle Wraps',
            'Art Reproduction / Wall Decor',
            'Interior Decoration / Wall Murals',
            'Exhibition Graphics / Posters',
            'Outdoor Banners',
            'Large Format Signage',
            'Commercial Advertising',
            'Retail Graphics'
        ],
        advantages: [
            'High-speed production capabilities',
            'Superior print quality and color accuracy',
            'Durable outdoor-rated prints',
            'Low maintenance requirements',
            'Energy-efficient operation',
            'User-friendly interface',
            'Reliable performance',
            'Comprehensive warranty support'
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
        // Handle form submission logic here
        alert('Thank you for your inquiry! We will contact you soon.');
        closeInquiryModal();
    };

    return (
        <div>
            <Header />
            <main className="smart-rj24-main">
                {/* Product Hero Section */}
                <section className="smart-rj24-hero product-hero">
                    <div className="smart-rj24-hero-layout">
                        <div className="smart-rj24-hero-left">
                            <h1 className="smart-rj24-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="smart-rj24-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="smart-rj24-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="smart-rj24-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="smart-rj24-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="smart-rj24-hero-stats product-stats">
                                <div className="smart-rj24-stat">
                                    <span className="smart-rj24-stat-number">1.9m</span>
                                    <span className="smart-rj24-stat-label">Print Width</span>
                                </div>
                                <div className="smart-rj24-stat">
                                    <span className="smart-rj24-stat-number">97 m²/h</span>
                                    <span className="smart-rj24-stat-label">Max Speed</span>
                                </div>
                                <div className="smart-rj24-stat">
                                    <span className="smart-rj24-stat-number">i3200</span>
                                    <span className="smart-rj24-stat-label">EPSON Head</span>
                                </div>
                            </div>
                        </div>
                        <div className="smart-rj24-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="smart-rj24-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="smart-rj24-overview-section">
                    <div className="smart-rj24-overview-container">
                        <h2 className="smart-rj24-section-title">Product Overview</h2>
                        <p className="smart-rj24-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="smart-rj24-features-section">
                    <div className="smart-rj24-features-container">
                        <div className="smart-rj24-features-header">
                            <h2 className="smart-rj24-features-title">Key Features</h2>
                            <p className="smart-rj24-features-subtitle">
                                Advanced technology meets professional performance
                            </p>
                        </div>

                        <div className="smart-rj24-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="smart-rj24-feature-card">
                                    <div className="smart-rj24-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="smart-rj24-feature-title">{feature.title}</h3>
                                    <p className="smart-rj24-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="smart-rj24-specs-section">
                    <div className="smart-rj24-specs-container">
                        <h2 className="smart-rj24-section-title">Technical Specifications</h2>
                        <div className="smart-rj24-specs-grid">
                            <div className="smart-rj24-spec-card">
                                <h3 className="smart-rj24-spec-card-title">Print Specifications</h3>
                                {machineDetails.specifications.slice(0, 7).map((spec, index) => (
                                    <div key={index} className="smart-rj24-spec-item">
                                        <span className="smart-rj24-spec-label">{spec.label}:</span>
                                        <span className="smart-rj24-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="smart-rj24-spec-card">
                                <h3 className="smart-rj24-spec-card-title">Physical Specifications</h3>
                                {machineDetails.specifications.slice(7).map((spec, index) => (
                                    <div key={index} className="smart-rj24-spec-item">
                                        <span className="smart-rj24-spec-label">{spec.label}:</span>
                                        <span className="smart-rj24-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="smart-rj24-applications-section">
                    <div className="smart-rj24-applications-container">
                        <h2 className="smart-rj24-section-title">Applications</h2>
                        <p className="smart-rj24-applications-subtitle">
                            Professional eco-solvent printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="smart-rj24-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="smart-rj24-applications-image-grid">
                                <div className="smart-rj24-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Vehicle Wraps" />
                                    <p>Vehicle Wraps</p>
                                </div>
                                <div className="smart-rj24-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Art Reproduction / Wall Decor" />
                                    <p>Art Reproduction / Wall Decor</p>
                                </div>
                                <div className="smart-rj24-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Interior Decoration / Wall Murals" />
                                    <p>Interior Decoration / Wall Murals</p>
                                </div>
                                <div className="smart-rj24-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Exhibition Graphics / Posters" />
                                    <p>Exhibition Graphics / Posters</p>
                                </div>
                                <div className="smart-rj24-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Outdoor Banners" />
                                    <p>Outdoor Banners</p>
                                </div>
                                <div className="smart-rj24-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Large Format Signage" />
                                    <p>Large Format Signage</p>
                                </div>
                                <div className="smart-rj24-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Commercial Advertising" />
                                    <p>Commercial Advertising</p>
                                </div>
                                <div className="smart-rj24-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Retail Graphics" />
                                    <p>Retail Graphics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="smart-rj24-advantages-section">
                    <div className="smart-rj24-advantages-container">
                        <h2 className="smart-rj24-section-title">Why Choose SMART RJ24-2004-i3200?</h2>
                        <div className="smart-rj24-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="smart-rj24-advantage-item">
                                    <div className="smart-rj24-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="smart-rj24-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="smart-rj24-cta-section">
                    <div className="smart-rj24-cta-container">
                        <h2 className="smart-rj24-cta-title">
                            Ready to Transform Your Printing Business?
                        </h2>
                        <p className="smart-rj24-cta-text">
                            Get detailed pricing, technical specifications, and expert consultation for the SMART ECO-SOLVENT RJ24-2002 & 2004 6FT Printer.
                        </p>
                        <div className="smart-rj24-cta-buttons">
                            <button
                                onClick={openInquiryModal}
                                className="smart-rj24-cta-btn-primary"
                            >
                                Request Quote
                            </button>
                            <Link
                                href="/contact"
                                className="smart-rj24-cta-btn-secondary"
                            >
                                Contact Sales Team
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="smart-rj24-modal-overlay" onClick={closeInquiryModal}>
                    <div className="smart-rj24-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="smart-rj24-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="smart-rj24-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="smart-rj24-inquiry-form">
                            <div className="smart-rj24-form-row">
                                <div className="smart-rj24-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="smart-rj24-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="smart-rj24-form-row">
                                <div className="smart-rj24-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="smart-rj24-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="smart-rj24-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="smart-rj24-phone-input">
                                    <select className="smart-rj24-country-select" name="countryCode" defaultValue="+1">
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+44">🇬🇧 +44</option>
                                        <option value="+61">🇦🇺 +61</option>
                                        <option value="+33">🇫🇷 +33</option>
                                        <option value="+49">🇩🇪 +49</option>
                                        <option value="+81">🇯🇵 +81</option>
                                        <option value="+82">🇰🇷 +82</option>
                                        <option value="+86">🇨🇳 +86</option>
                                        <option value="+91">🇮🇳 +91</option>
                                        <option value="+55">🇧🇷 +55</option>
                                    </select>
                                    <input type="tel" name="phone" placeholder="Enter phone number" required />
                                </div>
                            </div>

                            <div className="smart-rj24-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="smart-rj24-form-actions">
                                <button type="submit" className="smart-rj24-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="smart-rj24-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}