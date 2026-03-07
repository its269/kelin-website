"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './dual-pneumatic.css';

export default function DualPneumatic() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/SUBL Dual Pneumatic Sublimation Machine 80cm x 100cm (1).png');

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
        name: 'Dual Pneumatic Heat Press Machine',
        model: '80cm x 100cm | 100cm x 120cm',
        images: [
            '/sublimation_dtf/SUBL Dual Pneumatic Sublimation Machine 80cm x 100cm (1).png',
            '/sublimation_dtf/SUBL Dual Pneumatic Sublimation Machine 80cm x 100cm (1).png', // Add more images if available
        ],
        shortDescription: 'ADVANCED PULLING-TYPE PLATFORM DESIGN - A user-friendly, energy-saving upgrade with a sliding frame and heat-resistant mesh for easier operation, improved safety, and efficient heat distribution.',
        detailedDescription: 'The Dual Pneumatic Heat Press Machine features an advanced pulling-type platform design that provides user-friendly operation and energy efficiency. With uniform heating technology and digital microprocessor control, it delivers consistent temperature across a large working area while ensuring reliable and uniform heat distribution. The machine offers dual manual/automatic modes with aluminum-cast heater and base for enhanced durability and performance.',
        features: [
            {
                title: 'Uniform Heating Technology',
                description: 'Consistent temperature across a large working area. Ensures reliable and uniform heat distribution.',
                icon: 'temperature'
            },
            {
                title: 'Digital Microprocessor Control',
                description: 'Precise time and temperature management. A digital controller accurately sets and displays both time and temperature, enhancing output quality and reducing human error.',
                icon: 'digital'
            },
            {
                title: 'Aluminum-Cast Heater and Base',
                description: 'Both the heater and base are made from aluminum casting, delivering even heat and consistent printing pressure.',
                icon: 'aluminum'
            },
            {
                title: 'Dual Manual/Automatic Modes',
                description: 'Operators can easily switch between manual and automatic modes, enabling high efficiency and adaptability to varying job requirements.',
                icon: 'modes'
            },
            {
                title: 'Advanced Pulling-Type Platform Design',
                description: 'User-friendly, energy-saving upgrade with sliding frame and heat-resistant mesh for easier operation, improved safety, and efficient heat distribution.',
                icon: 'platform'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'Dual Pneumatic Heat Press' },
            { label: 'Available Sizes', value: '80cm x 100cm | 100cm x 120cm' },
            { label: '80cm x 100cm - Size', value: '80*100' },
            { label: '80cm x 100cm - Power', value: '9 KW' },
            { label: '80cm x 100cm - Temperature Range', value: '0-399°C' },
            { label: '80cm x 100cm - Voltage', value: '220/380' },
            { label: '80cm x 100cm - Time Range', value: '0-999 secs' },
            { label: '80cm x 100cm - Pressure of Work', value: '0-8 kg/cm²' },
            { label: '100cm x 120cm - Size', value: '100*120' },
            { label: '100cm x 120cm - Power', value: '12 KW' },
            { label: '100cm x 120cm - Temperature Range', value: '0-399°C' },
            { label: '100cm x 120cm - Voltage', value: '220/380' },
            { label: '100cm x 120cm - Time Range', value: '0-999 secs' },
            { label: '100cm x 120cm - Pressure of Work', value: '0-8 kg/cm²' },
            { label: 'Working Pressure', value: 'Up to 8 kg/cm²' }
        ],
        applications: [
            'Custom Apparel Printing',
            'Sportswear and Team Jerseys',
            'T-shirt Heat Transfer',
            'Textile Decoration',
            'Heat Press Applications',
            'Large Format Heat Transfer',
            'Commercial Garment Production',
            'Fashion and Clothing Industry',
            'Promotional Products',
            'Custom Design Transfer',
            'Professional Heat Press Operations',
            'Industrial Textile Processing'
        ],
        advantages: [
            'Advanced pulling-type platform design for user-friendly operation',
            'Uniform heating technology ensures consistent temperature distribution',
            'Digital microprocessor control for precise time and temperature management',
            'Aluminum-cast heater and base for even heat and consistent printing pressure',
            'Dual manual/automatic modes for high efficiency and adaptability',
            'Large working area up to 100cm x 120cm for versatile applications',
            'Energy-saving design with improved safety features',
            'Heat-resistant mesh for efficient heat distribution',
            'Working pressure up to 8 kg/cm² for strong adhesion',
            'Temperature range 0-399°C suitable for various materials',
            'Professional-grade construction for commercial use',
            'Sliding frame design for easier operation and improved safety'
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
            <main className="dual-pneumatic-main">
                {/* Product Hero Section */}
                <section className="dual-pneumatic-hero product-hero">
                    <div className="dual-pneumatic-hero-layout">
                        <div className="dual-pneumatic-hero-left">
                            <h1 className="dual-pneumatic-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="dual-pneumatic-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="dual-pneumatic-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="dual-pneumatic-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="dual-pneumatic-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="dual-pneumatic-hero-stats product-stats">
                                <div className="dual-pneumatic-stat">
                                    <span className="dual-pneumatic-stat-number">8 kg/cm²</span>
                                    <span className="dual-pneumatic-stat-label">Working Pressure</span>
                                </div>
                                <div className="dual-pneumatic-stat">
                                    <span className="dual-pneumatic-stat-number">0-399°C</span>
                                    <span className="dual-pneumatic-stat-label">Temp Range</span>
                                </div>
                                <div className="dual-pneumatic-stat">
                                    <span className="dual-pneumatic-stat-number">100x120cm</span>
                                    <span className="dual-pneumatic-stat-label">Max Size</span>
                                </div>
                            </div>
                        </div>
                        <div className="dual-pneumatic-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="dual-pneumatic-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="dual-pneumatic-overview-section">
                    <div className="dual-pneumatic-overview-container">
                        <h2 className="dual-pneumatic-section-title">Product Overview</h2>
                        <p className="dual-pneumatic-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="dual-pneumatic-features-section">
                    <div className="dual-pneumatic-features-container">
                        <div className="dual-pneumatic-features-header">
                            <h2 className="dual-pneumatic-features-title">Key Features</h2>
                            <p className="dual-pneumatic-features-subtitle">
                                Advanced dual pneumatic heat press technology for professional results
                            </p>
                        </div>

                        <div className="dual-pneumatic-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="dual-pneumatic-feature-card">
                                    <div className="dual-pneumatic-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="dual-pneumatic-feature-title">{feature.title}</h3>
                                    <p className="dual-pneumatic-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="dual-pneumatic-specs-section">
                    <div className="dual-pneumatic-specs-container">
                        <h2 className="dual-pneumatic-section-title">Technical Specifications</h2>
                        <p className="dual-pneumatic-section-subtitle">
                            Complete technical details for dual pneumatic heat press machine
                        </p>
                        <div className="dual-pneumatic-specs-table-wrapper">
                            <div className="dual-pneumatic-spec-table">
                                <div className="dual-pneumatic-spec-table-header">
                                    <h3 className="dual-pneumatic-spec-table-title">
                                        <span className="dual-pneumatic-spec-icon">⚙️</span>
                                        Machine Specifications
                                    </h3>
                                </div>
                                <div className="dual-pneumatic-spec-table-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="dual-pneumatic-spec-row">
                                            <div className="dual-pneumatic-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="dual-pneumatic-spec-divider"></div>
                                            <div className="dual-pneumatic-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="dual-pneumatic-applications-section">
                    <div className="dual-pneumatic-applications-container">
                        <h2 className="dual-pneumatic-section-title">Applications</h2>
                        <p className="dual-pneumatic-applications-subtitle">
                            Versatile dual pneumatic heat press solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="dual-pneumatic-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="dual-pneumatic-applications-image-grid">
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="T-Shirt Printing" />
                                    <p>T-Shirt Printing</p>
                                </div>
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Mug Printing" />
                                    <p>Mug Printing</p>
                                </div>
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Signage & Banners" />
                                    <p>Signage & Banners</p>
                                </div>
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Custom Apparel" />
                                    <p>Custom Apparel</p>
                                </div>
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Phone Cases" />
                                    <p>Phone Cases</p>
                                </div>
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sportswear" />
                                    <p>Sportswear</p>
                                </div>
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Home Decor" />
                                    <p>Home Decor</p>
                                </div>
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging" />
                                    <p>Packaging</p>
                                </div>
                                <div className="dual-pneumatic-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Labels & Stickers" />
                                    <p>Labels & Stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="dual-pneumatic-advantages-section">
                    <div className="dual-pneumatic-advantages-container">
                        <h2 className="dual-pneumatic-section-title">Why Choose Dual Pneumatic Heat Press?</h2>
                        <div className="dual-pneumatic-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="dual-pneumatic-advantage-item">
                                    <svg className="dual-pneumatic-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="dual-pneumatic-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="dual-pneumatic-modal-overlay" onClick={closeInquiryModal}>
                    <div className="dual-pneumatic-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="dual-pneumatic-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="dual-pneumatic-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="dual-pneumatic-inquiry-form">
                            <div className="dual-pneumatic-form-row">
                                <div className="dual-pneumatic-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="dual-pneumatic-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="dual-pneumatic-form-row">
                                <div className="dual-pneumatic-form-group">
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
                                <div className="dual-pneumatic-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="dual-pneumatic-phone-input">
                                        <select name="countryCode" className="dual-pneumatic-country-select">
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

                            <div className="dual-pneumatic-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="dual-pneumatic-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your dual pneumatic heat press machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="dual-pneumatic-form-actions">
                                <button type="submit" className="dual-pneumatic-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="dual-pneumatic-btn-secondary">
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