"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './sublimation-printer-fd6198e.css';

export default function SublimationPrinterFD6198E() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/SUBL Sublimation Printer FD6198E (1).png');

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
        name: 'sublimation-printer-fd6198e',
        model: 'Eight-Head Dye Sublimation Printer',
        images: [
            '/sublimation_dtf/SUBL Sublimation Printer FD6198E (1).png',
            '/sublimation_dtf/SUBL Sublimation Printer FD6198E (1).png', // Add more images if available
        ],
        shortDescription: 'ULTRA-FAST INDUSTRIAL PRINTING SPEED - Achieve up to 370m²/h with 8 Epson I3200-A1 heads—ideal for bulk orders, faster turnarounds, and high efficiency printing without quality loss.',
        detailedDescription: 'The FD6198E-A is an eight-head dye sublimation printer designed for maximum productivity with ultra-fast industrial printing speeds. Featuring advanced industrial motor technology, intelligent ink supply system, smart drying system, and anti-collision carriage protection, this printer delivers exceptional performance for high-volume production environments.',
        features: [
            {
                title: 'Industrial Motor',
                description: 'Features a powerful AC servo motor with high precision and accuracy for continuous heavy-duty operation, supporting eight printheads for maximum productivity.',
                icon: 'precision'
            },
            {
                title: 'Ink Supply System',
                description: 'Advanced 8-channel individual fluid management, auto-circulation system, high-strength air filtration system for stable and consistent ink delivery.',
                icon: 'accuracy'
            },
            {
                title: 'Smart Drying System',
                description: 'Intelligent temperature control with media and cabinet sensors on both sides to automatically adjust drying speed as needed.',
                icon: 'speed'
            },
            {
                title: 'Anti-Collision Carriage',
                description: 'Advanced protective system that safeguards the carriage from potential damage during operation, ensuring reliable and safe printing.',
                icon: 'durability'
            }
        ],
        specifications: [
            { label: 'Model', value: 'FD6198E-A' },
            { label: 'Print Speed', value: '360*720dpi (1PASS): 370m²/h | 1360*2400dpi (2PASS): 185m²/h' },
            { label: 'Ink Type', value: 'Sublimation Ink' },
            { label: 'Print Width', value: '1900mm' },
            { label: 'Print Media', value: 'Transfer Paper' },
            { label: 'Image Format', value: 'JPG, TIF, PDF, etc.' },
            { label: 'Power Supply', value: 'Input Voltage: 380VAC (3+W), 37A' },
            { label: 'Printhead', value: 'EPSON I3200-A1 Printhead' },
            { label: 'Ink Color', value: 'CMYK(4-band) (8 Colors)' },
            { label: 'Media Transmit', value: 'Pinch Roller Mode' },
            { label: 'Dryer', value: 'Extra Intelligent Dryer Device' },
            { label: 'Working Environment', value: 'Temp: 18°C-30°C, Humidity: 45%-65%' },
            { label: 'Machine Size', value: 'Dimension: 3650*960*1650mm (Packing: 3820*970*1950mm)' }
        ],
        applications: [
            'Textile Printing & Fashion',
            'Home Décor & Furnishing',
            'Apparel & Sportswear',
            'Soft Signage & Banners',
            'Promotional Products',
            'Interior Design Applications',
            'Custom Fabric Printing',
            'Industrial Textile Production',
            'High-Volume Commercial Printing',
            'Bulk Order Manufacturing'
        ],
        advantages: [
            'Ultra-fast industrial printing speed up to 370m²/h',
            '8 Epson I3200-A1 heads for maximum productivity',
            'Advanced industrial motor with AC servo technology',
            'Intelligent ink supply with 8-channel fluid management',
            'Smart drying system with temperature control',
            'Anti-collision carriage protection system',
            'Extra intelligent dryer device for optimal results',
            'High-strength air filtration for ink consistency',
            'Ideal for bulk orders and fast turnarounds',
            'Professional grade equipment for industrial applications'
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
            <main className="fd6198e-printer-main">
                {/* Product Hero Section */}
                <section className="fd6198e-printer-hero product-hero">
                    <div className="fd6198e-printer-hero-layout">
                        <div className="fd6198e-printer-hero-left">
                            <h1 className="fd6198e-printer-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="fd6198e-printer-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="fd6198e-printer-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="fd6198e-printer-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="fd6198e-printer-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="fd6198e-printer-hero-stats product-stats">
                                <div className="fd6198e-printer-stat">
                                    <span className="fd6198e-printer-stat-number">370m²/h</span>
                                    <span className="fd6198e-printer-stat-label">Print Speed</span>
                                </div>
                                <div className="fd6198e-printer-stat">
                                    <span className="fd6198e-printer-stat-number">8 Heads</span>
                                    <span className="fd6198e-printer-stat-label">I3200-A1</span>
                                </div>
                                <div className="fd6198e-printer-stat">
                                    <span className="fd6198e-printer-stat-number">1900mm</span>
                                    <span className="fd6198e-printer-stat-label">Print Width</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd6198e-printer-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="fd6198e-printer-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="fd6198e-printer-overview-section">
                    <div className="fd6198e-printer-overview-container">
                        <h2 className="fd6198e-printer-section-title">Product Overview</h2>
                        <p className="fd6198e-printer-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="fd6198e-printer-features-section">
                    <div className="fd6198e-printer-features-container">
                        <div className="fd6198e-printer-features-header">
                            <h2 className="fd6198e-printer-features-title">Key Features</h2>
                            <p className="fd6198e-printer-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="fd6198e-printer-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="fd6198e-printer-feature-card">
                                    <div className="fd6198e-printer-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="fd6198e-printer-feature-title">{feature.title}</h3>
                                    <p className="fd6198e-printer-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="fd6198e-printer-specs-section">
                    <div className="fd6198e-printer-specs-container">
                        <h2 className="fd6198e-printer-section-title">Technical Specifications</h2>
                        <div className="fd6198e-printer-specs-grid">
                            <div className="fd6198e-printer-spec-card">
                                <h3 className="fd6198e-printer-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="fd6198e-printer-spec-item">
                                        <span className="fd6198e-printer-spec-label">{spec.label}:</span>
                                        <span className="fd6198e-printer-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="fd6198e-printer-spec-card">
                                <h3 className="fd6198e-printer-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="fd6198e-printer-spec-item">
                                        <span className="fd6198e-printer-spec-label">{spec.label}:</span>
                                        <span className="fd6198e-printer-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="fd6198e-printer-applications-section">
                    <div className="fd6198e-printer-applications-container">
                        <h2 className="fd6198e-printer-section-title">Applications</h2>
                        <p className="fd6198e-printer-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="fd6198e-printer-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="fd6198e-printer-applications-image-grid">
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="T-Shirt Printing" />
                                    <p>T-Shirt Printing</p>
                                </div>
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Mug Printing" />
                                    <p>Mug Printing</p>
                                </div>
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Signage & Banners" />
                                    <p>Signage & Banners</p>
                                </div>
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Custom Apparel" />
                                    <p>Custom Apparel</p>
                                </div>
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Phone Cases" />
                                    <p>Phone Cases</p>
                                </div>
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sportswear" />
                                    <p>Sportswear</p>
                                </div>
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Home Decor" />
                                    <p>Home Decor</p>
                                </div>
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging" />
                                    <p>Packaging</p>
                                </div>
                                <div className="fd6198e-printer-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Labels & Stickers" />
                                    <p>Labels & Stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="fd6198e-printer-advantages-section">
                    <div className="fd6198e-printer-advantages-container">
                        <h2 className="fd6198e-printer-section-title">Why Choose FD6198E-A?</h2>
                        <div className="fd6198e-printer-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="fd6198e-printer-advantage-item">
                                    <svg className="fd6198e-printer-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="fd6198e-printer-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="fd6198e-printer-modal-overlay" onClick={closeInquiryModal}>
                    <div className="fd6198e-printer-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="fd6198e-printer-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="fd6198e-printer-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="fd6198e-printer-inquiry-form">
                            <div className="fd6198e-printer-form-row">
                                <div className="fd6198e-printer-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="fd6198e-printer-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="fd6198e-printer-form-row">
                                <div className="fd6198e-printer-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
                                        title="Please enter a valid email address (e.g., name@domain.com)"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div className="fd6198e-printer-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="fd6198e-printer-phone-input">
                                        <select name="countryCode" className="fd6198e-printer-country-select">
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
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="123 456 7890"
                                            pattern="[0-9\\s\\-\\(\\)]{7,15}"
                                            title="Please enter a valid phone number"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="fd6198e-printer-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="fd6198e-printer-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="fd6198e-printer-form-actions">
                                <button type="submit" className="fd6198e-printer-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="fd6198e-printer-btn-secondary">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
