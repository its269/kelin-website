"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './yueming-fiber-laser.css';

export default function YuemingHL1530C() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/Yueming Fiber Laser HL1530C-G-E 1500w IPG.png');
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
        name: 'Yueming Fiber Laser HL1530C-G-E 1500W IPG',
        model: 'HL1530C-G-E FIBER LASER',
        images: [
            '/laser-machines/Yueming Fiber Laser HL1530C-G-E 1500w IPG.png',
            '/laser-machines/Yueming Fiber Laser HL1530C-G-E 1500w IPG.png',
        ],
        shortDescription: 'INDUSTRIAL GRADING SPEED 60m/min - SMART LEAPFROG MOTION FOR FASTER & SMOOTHER CUTS - The parabolic "frog jump" system replaces rectangular motion, using PLC to auto-adjust height for faster contour switching and improved cutting efficiency.',
        detailedDescription: 'The YueMing HL1530C-G-E Fiber Laser is a high-performance industrial-grade cutting machine featuring smart leapfrog motion technology. With a cutting speed of 60m/min, this advanced fiber laser utilizes a parabolic "frog jump" system that replaces traditional rectangular motion, using PLC to automatically adjust height for faster contour switching and improved cutting efficiency. The machine features a core part laser head with four focus adjustable core precision generators for fast, precise cutting. Equipped with intelligent analysis capabilities including power, oil mometer, real-time data visualization, and filter monitoring, the system provides comprehensive diagnostics. The machine sensor dashboard offers multiple platform availability for easier mobile phone monitoring. Working area of 1500mm×3000mm with exceptional positioning accuracy of ±0.03mm/1000mm makes it ideal for precision metal cutting applications.',
        features: [
            {
                title: 'Core Part-Laser Head',
                description: 'The focus is adjustable by the core precision generator for no less than 4 pieces, fast and good precision.',
                icon: 'precision'
            },
            {
                title: 'Intelligent Analysis',
                description: 'Includes power, oil mometer, real-time data visualization, and filter monitoring for comprehensive diagnostics.',
                icon: 'accuracy'
            },
            {
                title: 'Machine Sensor Dashboard',
                description: 'Multiple platform available to easier monitor a mobile phone at real time.',
                icon: 'speed'
            },
            {
                title: 'Leapfrog Motion',
                description: 'Parabolic "frog jump" system with PLC auto-adjust height for faster contour switching and improved cutting efficiency.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Product Model', value: 'HL1530C-G-E' },
            { label: 'Laser Power (W)', value: '1000W-2000W' },
            { label: 'Working Area', value: '1500mm × 3000mm' },
            { label: 'Transmission System', value: 'Double rack and pinion + linear servo drive' },
            { label: 'Maximum Speed', value: '60m/min' },
            { label: 'Positioning Accuracy', value: '±0.03mm/1000mm' },
            { label: 'Repositioning Accuracy', value: '±0.03mm/1000mm' },
            { label: 'Format', value: 'LXD, DXF, PLT, AI, NC, etc.' },
            { label: 'Working Environment', value: '0-45℃, Humidity ≤ 80% non-condensing' },
            { label: 'Equipment Power', value: '5±0.03mm/1000mm' },
            { label: 'Total Weight', value: '3000Kg' },
            { label: 'Power Supply', value: 'Three phase 380V / 50Hz or 60Hz' },
            { label: 'Overall Size', value: '5400mm×2260mm×2000mm' }
        ],
        applications: [
            'Metal Sheet Cutting',
            'Hardware-Door/Window welding',
            'Transportation',
            'Advertisement',
            'Mechanical Parts',
            'Hardware-Aluminum Alloy',
            'Subway Sign',
            'Metal Fabrication',
            'Table & Chair',
            '3D Letters',
            'Automotive Parts',
            'Industrial Manufacturing'
        ],
        advantages: [
            'Cutting speed 60m/min',
            'Smart leapfrog motion for faster cuts',
            'Parabolic "frog jump" system with PLC',
            'Core part laser head with adjustable focus',
            'Intelligent analysis with real-time monitoring',
            'Machine sensor dashboard for mobile monitoring',
            'High positioning accuracy ±0.03mm/1000mm',
            'Working area 1500mm×3000mm',
            'Double rack and pinion with linear servo drive',
            'Laser power range 1000W-2000W',
            'Three phase 380V power supply',
            'Advanced contour switching efficiency'
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
            <main className="yueming-hl1530c-main">
                {/* Product Hero Section */}
                <section className="yueming-hl1530c-hero product-hero">
                    <div className="yueming-hl1530c-hero-layout">
                        <div className="yueming-hl1530c-hero-left">
                            <h1 className="yueming-hl1530c-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="yueming-hl1530c-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="yueming-hl1530c-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="yueming-hl1530c-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="yueming-hl1530c-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="yueming-hl1530c-hero-stats product-stats">
                                <div className="yueming-hl1530c-stat">
                                    <span className="yueming-hl1530c-stat-number">60m/min</span>
                                    <span className="yueming-hl1530c-stat-label">Speed</span>
                                </div>
                                <div className="yueming-hl1530c-stat">
                                    <span className="yueming-hl1530c-stat-number">1500×3000mm</span>
                                    <span className="yueming-hl1530c-stat-label">Working Area</span>
                                </div>
                                <div className="yueming-hl1530c-stat">
                                    <span className="yueming-hl1530c-stat-number">1000-2000W</span>
                                    <span className="yueming-hl1530c-stat-label">Laser Power</span>
                                </div>
                            </div>
                        </div>
                        <div className="yueming-hl1530c-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="yueming-hl1530c-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="yueming-hl1530c-overview-section">
                    <div className="yueming-hl1530c-overview-container">
                        <h2 className="yueming-hl1530c-section-title">Product Overview</h2>
                        <p className="yueming-hl1530c-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="yueming-hl1530c-features-section">
                    <div className="yueming-hl1530c-features-container">
                        <div className="yueming-hl1530c-features-header">
                            <h2 className="yueming-hl1530c-features-title">Key Features</h2>
                            <p className="yueming-hl1530c-features-subtitle">
                                Industrial-grade UV hybrid printing technology for professional results
                            </p>
                        </div>

                        <div className="yueming-hl1530c-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="yueming-hl1530c-feature-card">
                                    <div className="yueming-hl1530c-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="yueming-hl1530c-feature-title">{feature.title}</h3>
                                    <p className="yueming-hl1530c-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="yueming-hl1530c-specs-section">
                    <div className="yueming-hl1530c-specs-container">
                        <h2 className="yueming-hl1530c-section-title">Technical Specifications</h2>
                        <p className="yueming-hl1530c-section-subtitle">
                            Complete technical details for Liyu X-Line DQS UV Hybrid Printer
                        </p>
                        <div className="yueming-hl1530c-specs-grid">
                            <div className="yueming-hl1530c-spec-card">
                                <h3 className="yueming-hl1530c-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="yueming-hl1530c-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="yueming-hl1530c-spec-item">
                                            <div className="yueming-hl1530c-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="yueming-hl1530c-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="yueming-hl1530c-applications-section">
                    <div className="yueming-hl1530c-applications-container">
                        <h2 className="yueming-hl1530c-section-title">Applications</h2>
                        <p className="yueming-hl1530c-applications-subtitle">
                            Professional UV hybrid printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="yueming-hl1530c-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="yueming-hl1530c-applications-image-grid">
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Back Lit Posters" />
                                    <p>Back Lit Posters</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Billboards" />
                                    <p>Billboards</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Bus Station Ads" />
                                    <p>Bus Station Ads</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Entertainment Hall Display" />
                                    <p>Entertainment Hall Display</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Signage Production" />
                                    <p>Signage Production</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Promotional Displays" />
                                    <p>Promotional Displays</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Point of Sale Displays" />
                                    <p>Point of Sale Displays</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Corrugated Materials" />
                                    <p>Corrugated Materials</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Light-Plate Printing" />
                                    <p>Light-Plate Printing</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Small-Format Materials" />
                                    <p>Small-Format Materials</p>
                                </div>
                                <div className="yueming-hl1530c-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Commercial Advertising" />
                                    <p>Commercial Advertising</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="yueming-hl1530c-advantages-section">
                    <div className="yueming-hl1530c-advantages-container">
                        <h2 className="yueming-hl1530c-section-title">Why Choose Liyu X-Line DQS?</h2>
                        <div className="yueming-hl1530c-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="yueming-hl1530c-advantage-item">
                                    <div className="yueming-hl1530c-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="yueming-hl1530c-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="yueming-hl1530c-modal-overlay" onClick={closeInquiryModal}>
                    <div className="yueming-hl1530c-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="yueming-hl1530c-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="yueming-hl1530c-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="yueming-hl1530c-inquiry-form">
                            <div className="yueming-hl1530c-form-row">
                                <div className="yueming-hl1530c-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="yueming-hl1530c-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="yueming-hl1530c-form-row">
                                <div className="yueming-hl1530c-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="yueming-hl1530c-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="yueming-hl1530c-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="yueming-hl1530c-phone-input">
                                    <select className="yueming-hl1530c-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="yueming-hl1530c-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="yueming-hl1530c-form-actions">
                                <button type="submit" className="yueming-hl1530c-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="yueming-hl1530c-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
