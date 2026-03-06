"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './k-sign-desktop-laser-b330.css';

export default function KSignDesktopLaserB330() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/K-Sign Desktop Laser B330.png');
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
        name: 'K-Sign Desktop Laser B330',
        model: 'LASER ENGRAVING MACHINE',
        images: [
            '/laser-machines/K-Sign Desktop Laser B330.png',
            '/laser-machines/K-Sign Desktop Laser B330.png',
        ],
        shortDescription: 'Ultra-fast 44-seconds engraving desktop laser machine - engrave an 80 x 90mm design in just 44 seconds with 0.01mm precision, featuring industrial-grade 600mm/s speed and comprehensive safety features.',
        detailedDescription: 'Engrave an 80 x 90mm design in just 44 seconds with 0.01mm precision. The K-Sign Desktop Laser Engraving Machine delivers ultra-fast performance with industrial-grade speed of 600mm/s. Featuring tilt protection for enhanced safety, adjustable air assist for smoother cleaner results, honeycomb table designed with full soft honeycomb table, and desktop protection tray to keep table and surroundings clean. Complete with smoke purifier, laser tube, safety detection, USB/WiFi connectivity, and LaserGRBL Lightburn craft express compatible software.',
        features: [
            {
                title: 'Tilt Protection',
                description: 'If the unit tilted the safety features will shut down automatically for enhanced user safety and equipment protection.',
                icon: 'tilt'
            },
            {
                title: 'Adjustable Air Assist',
                description: 'Achieve the smoothest, cleaner results with adjustable air assist that optimizes engraving quality and material handling.',
                icon: 'air'
            },
            {
                title: 'Honeycomb Table',
                description: 'Designed with full soft honeycomb table for optimal material support and superior engraving results across various surfaces.',
                icon: 'honeycomb'
            },
            {
                title: 'Desktop Protection Tray',
                description: 'To keep table and surroundings clean, protecting your workspace from debris and ensuring a professional working environment.',
                icon: 'protection'
            }
        ],
        specifications: [
            { label: 'Work Area', value: '300*300mm' },
            { label: 'Product Dimensions', value: '650*500*770mm' },
            { label: 'Weight', value: '7.5KG' },
            { label: 'Machine Power', value: '120W' },
            { label: 'Voltage', value: '100V-240V/50HZ-60HZ' },
            { label: 'Frame', value: 'Aluminum Alloy Frame Structure' },
            { label: 'Platform', value: 'Honeycomb Clad with a height of 40mm' },
            { label: 'Air Assist', value: 'External Air Assist Device' },
            { label: 'Laser Tube', value: 'Optical Power 5W, Wavelength 445nm' },
            { label: 'Safety Detection', value: 'Tilt Protection' },
            { label: 'Guide Rail', value: 'High Speed Linear Guideway' },
            { label: 'Max. Acceleration', value: '10000mm/s²' },
            { label: 'Max. Engraving Speed', value: '600mm/s' },
            { label: 'Connection Method', value: 'USB/WIFI' },
            { label: 'Compatible Software', value: 'LaserGRBL Lightburn, Craft Express' },
            { label: 'Resolution', value: '1000DPI' }
        ],
        applications: [
            'Wood engraving and carving',
            'Personalized gifts and crafts',
            'Logo and branding engraving',
            'Decorative wood items',
            'Custom wooden signs',
            'Hobby and craft projects',
            'Product labeling and marking',
            'Artistic wood designs',
            'Educational projects',
            'Small business production',
            'Custom engravings',
            'Desktop crafting'
        ],
        advantages: [
            'Ultra-fast 44-seconds engraving (80×90mm)',
            'Industrial-grade 600mm/s speed',
            '0.01mm precision engraving',
            'Tilt protection safety feature',
            'Adjustable air assist system',
            'Honeycomb table with 40mm height',
            'Desktop protection tray included',
            'Smoke purifier for clean operation',
            'High speed linear guideway',
            '10000mm/s² max acceleration',
            'USB/WiFi connectivity',
            'Compatible with LaserGRBL, Lightburn, Craft Express'
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
            <main className="ksign-b330-main">
                {/* Product Hero Section */}
                <section className="ksign-b330-hero product-hero">
                    <div className="ksign-b330-hero-layout">
                        <div className="ksign-b330-hero-left">
                            <h1 className="ksign-b330-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="ksign-b330-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="ksign-b330-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="ksign-b330-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="ksign-b330-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="ksign-b330-hero-stats product-stats">
                                <div className="ksign-b330-stat">
                                    <span className="ksign-b330-stat-number">44s</span>
                                    <span className="ksign-b330-stat-label">Fast</span>
                                </div>
                                <div className="ksign-b330-stat">
                                    <span className="ksign-b330-stat-number">600mm/s</span>
                                    <span className="ksign-b330-stat-label">Speed</span>
                                </div>
                                <div className="ksign-b330-stat">
                                    <span className="ksign-b330-stat-number">0.01mm</span>
                                    <span className="ksign-b330-stat-label">Precision</span>
                                </div>
                            </div>
                        </div>
                        <div className="ksign-b330-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="ksign-b330-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="ksign-b330-overview-section">
                    <div className="ksign-b330-overview-container">
                        <h2 className="ksign-b330-section-title">Product Overview</h2>
                        <p className="ksign-b330-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="ksign-b330-features-section">
                    <div className="ksign-b330-features-container">
                        <div className="ksign-b330-features-header">
                            <h2 className="ksign-b330-features-title">Key Features</h2>
                            <p className="ksign-b330-features-subtitle">
                                Ultra-fast 44-seconds engraving with precision
                            </p>
                        </div>

                        <div className="ksign-b330-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="ksign-b330-feature-card">
                                    <div className="ksign-b330-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="ksign-b330-feature-title">{feature.title}</h3>
                                    <p className="ksign-b330-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="ksign-b330-specs-section">
                    <div className="ksign-b330-specs-container">
                        <h2 className="ksign-b330-section-title">Technical Specifications</h2>
                        <p className="ksign-b330-section-subtitle">
                            Complete technical details for K-Sign Desktop Laser Engraving Machine B330
                        </p>
                        <div className="ksign-b330-specs-grid">
                            <div className="ksign-b330-spec-card">
                                <h3 className="ksign-b330-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="ksign-b330-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="ksign-b330-spec-item">
                                            <div className="ksign-b330-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="ksign-b330-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="ksign-b330-applications-section">
                    <div className="ksign-b330-applications-container">
                        <h2 className="ksign-b330-section-title">Application Materials</h2>
                        <p className="ksign-b330-applications-subtitle">
                            Professional desktop laser engraving for wood and various materials
                        </p>
                        <div
                            ref={scrollRef}
                            className="ksign-b330-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="ksign-b330-applications-image-grid">
                                {machineDetails.applications.map((app, index) => (
                                    <div key={index} className="ksign-b330-application-image-item">
                                        <div className="ksign-b330-application-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                                <path d="m9 11 3 3L22 4" />
                                            </svg>
                                        </div>
                                        <p>{app}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}

                {/* Advantages */}
                <section className="ksign-b330-advantages-section">
                    <div className="ksign-b330-advantages-container">
                        <h2 className="ksign-b330-section-title">Why Choose K-Sign Desktop Laser B330?</h2>
                        <div className="ksign-b330-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="ksign-b330-advantage-item">
                                    <div className="ksign-b330-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="ksign-b330-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="ksign-b330-modal-overlay" onClick={closeInquiryModal}>
                    <div className="ksign-b330-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="ksign-b330-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="ksign-b330-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="ksign-b330-inquiry-form">
                            <div className="ksign-b330-form-row">
                                <div className="ksign-b330-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="ksign-b330-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="ksign-b330-form-row">
                                <div className="ksign-b330-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="ksign-b330-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="ksign-b330-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="ksign-b330-phone-input">
                                    <select className="ksign-b330-country-select" name="countryCode" defaultValue="+63">
                                        <option value="+63">🇵🇭 +63</option>
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+86">🇨🇳 +86</option>
                                        <option value="+81">🇯🇵 +81</option>
                                        <option value="+82">🇰🇷 +82</option>
                                        <option value="+65">🇸🇬 +65</option>
                                        <option value="+60">🇲🇾 +60</option>
                                        <option value="+66">🇹🇭 +66</option>
                                        <option value="+84">🇻🇳 +84</option>
                                        <option value="+62">🇮🇩 +62</option>
                                        <option value="+91">🇮🇳 +91</option>
                                        <option value="+44">🇬🇧 +44</option>
                                        <option value="+49">🇩🇪 +49</option>
                                        <option value="+33">🇫🇷 +33</option>
                                        <option value="+39">🇮🇹 +39</option>
                                        <option value="+34">🇪🇸 +34</option>
                                        <option value="+61">🇦🇺 +61</option>
                                        <option value="+64">🇳🇿 +64</option>
                                    </select>
                                    <input type="tel" name="phone" placeholder="Enter phone number" required />
                                </div>
                            </div>

                            <div className="ksign-b330-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laser cutting needs, materials, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="ksign-b330-form-actions">
                                <button type="submit" className="ksign-b330-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="ksign-b330-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
