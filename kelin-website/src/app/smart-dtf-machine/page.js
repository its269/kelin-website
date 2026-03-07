"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './smart-dtf-machine-unique.css';

export default function SmartDTFMachine() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/DTF SMART DTF Machine (1).png');

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
        name: 'SMART DTF',
        model: 'Direct To Film',
        images: [
            '/sublimation_dtf/DTF SMART DTF Machine (1).png',
            '/sublimation_dtf/DTF SMART DTF Machine (1).png', // Add more images if available
        ],
        shortDescription: 'SUPPORT FOR UP TO 8 COLORS - Delivers ultra-rich tones, smoother gradients, and precise color layering with industrial grade speed.',
        detailedDescription: 'The SMART DTF (Direct To Film) delivers ultra-rich tones, smoother gradients, and precise color layering. This industrial-grade equipment supports up to 8 colors for comprehensive DTF production with a printing speed of 28m²/h. Featuring wider platform, adjustable pinch roller, improved capping, and newly improved damper technology for superior print quality and efficient production workflow.',
        features: [
            {
                title: 'Wider Platform',
                description: 'Enhanced platform design supports larger format DTF printing with improved stability and precision.',
                icon: 'platform'
            },
            {
                title: 'Adjustable Pinch Roller',
                description: 'Precise pinch roller system ensures optimal film feeding and consistent print registration.',
                icon: 'roller'
            },
            {
                title: 'Improved Capping',
                description: 'Advanced capping system maintains ink quality and prevents contamination during operation.',
                icon: 'capping'
            },
            {
                title: 'Newly Improve Damper',
                description: 'Enhanced damper technology provides superior ink flow control and reduces maintenance requirements.',
                icon: 'damper'
            },
            {
                title: 'Industrial Grade Speed',
                description: 'High-speed printing capability with industrial grade performance up to 28 m²/h production output.',
                icon: 'speed'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'RJ-D602 | RJ-D604' },
            { label: 'Machine Head', value: 'I3200*2 | I3200*4' },
            { label: 'Color', value: 'CMYK-W' },
            { label: 'Printing Item', value: 'PET Film' },
            { label: 'Machine Size', value: '180*76*135cm | 180*90*140cm' },
            { label: 'Printing Width', value: '60CM' },
            { label: 'Speed', value: '13-14m² | 26-28m²/h' },
            { label: 'Ink Type', value: 'Pigment Ink' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Weight', value: 'N.W:150KG/G.W:200KG' }
        ],
        applications: [
            'T-Shirt',
            'Jacket',
            'Hoodie',
            'Pillow',
            'Jersey',
            'Hat',
            'Cap',
            'Apron',
            'Canvas Stocking'
        ],
        advantages: [
            'Support for up to 8 colors for ultra-rich tones and smoother gradients',
            'Delivers precise color layering with advanced DTF printing technology',
            'Industrial grade speed up to 28 m²/h for efficient production',
            'I3200*2 and I3200*4 printhead options for superior print quality',
            'Wider platform design for versatile DTF applications',
            'Adjustable pinch roller system for precise film handling',
            'Improved capping system prevents ink contamination',
            'Newly improved damper technology for better ink flow control',
            'Supports CMYK-W color configuration for vibrant prints',
            'Professional grade construction for commercial DTF production',
            'Compact machine sizes for efficient workspace utilization',
            'Advanced DTF printing technology for consistent quality'
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
            <main className="smart-dtf-main">
                {/* Product Hero Section */}
                <section className="smart-dtf-hero product-hero">
                    <div className="smart-dtf-hero-layout">
                        <div className="smart-dtf-hero-left">
                            <h1 className="smart-dtf-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="smart-dtf-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="smart-dtf-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="smart-dtf-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="smart-dtf-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="smart-dtf-hero-stats product-stats">
                                <div className="smart-dtf-stat">
                                    <span className="smart-dtf-stat-number">8 Colors</span>
                                    <span className="smart-dtf-stat-label">Max Support</span>
                                </div>
                                <div className="smart-dtf-stat">
                                    <span className="smart-dtf-stat-number">28 m²/h</span>
                                    <span className="smart-dtf-stat-label">Max Speed</span>
                                </div>
                                <div className="smart-dtf-stat">
                                    <span className="smart-dtf-stat-number">60CM</span>
                                    <span className="smart-dtf-stat-label">Print Width</span>
                                </div>
                            </div>
                        </div>
                        <div className="smart-dtf-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="smart-dtf-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="smart-dtf-overview-section">
                    <div className="smart-dtf-overview-container">
                        <h2 className="smart-dtf-section-title">Product Overview</h2>
                        <p className="smart-dtf-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="smart-dtf-features-section">
                    <div className="smart-dtf-features-container">
                        <div className="smart-dtf-features-header">
                            <h2 className="smart-dtf-features-title">Key Features</h2>
                            <p className="smart-dtf-features-subtitle">
                                Advanced DTF printing technology for ultra-rich color production
                            </p>
                        </div>

                        <div className="smart-dtf-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="smart-dtf-feature-card">
                                    <div className="smart-dtf-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="smart-dtf-feature-title">{feature.title}</h3>
                                    <p className="smart-dtf-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="smart-dtf-specs-section">
                    <div className="smart-dtf-specs-container">
                        <h2 className="smart-dtf-section-title">Technical Specifications</h2>
                        <p className="smart-dtf-section-subtitle">
                            Complete technical details for SMART DTF system
                        </p>
                        <div className="smart-dtf-specs-grid">
                            <div className="smart-dtf-spec-card">
                                <h3 className="smart-dtf-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="smart-dtf-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="smart-dtf-spec-item">
                                            <div className="smart-dtf-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="smart-dtf-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="smart-dtf-applications-section">
                    <div className="smart-dtf-applications-container">
                        <h2 className="smart-dtf-section-title">Applications</h2>
                        <p className="smart-dtf-applications-subtitle">
                            Versatile DTF printing solutions for custom textile applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="smart-dtf-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="smart-dtf-applications-image-grid">
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="T-Shirt Printing" />
                                    <p>T-Shirt Printing</p>
                                </div>
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Mug Printing" />
                                    <p>Mug Printing</p>
                                </div>
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Signage & Banners" />
                                    <p>Signage & Banners</p>
                                </div>
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Custom Apparel" />
                                    <p>Custom Apparel</p>
                                </div>
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Phone Cases" />
                                    <p>Phone Cases</p>
                                </div>
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sportswear" />
                                    <p>Sportswear</p>
                                </div>
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Home Decor" />
                                    <p>Home Decor</p>
                                </div>
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging" />
                                    <p>Packaging</p>
                                </div>
                                <div className="smart-dtf-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Labels & Stickers" />
                                    <p>Labels & Stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="smart-dtf-advantages-section">
                    <div className="smart-dtf-advantages-container">
                        <h2 className="smart-dtf-section-title">Why Choose SMART DTF?</h2>
                        <div className="smart-dtf-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="smart-dtf-advantage-item">
                                    <svg className="smart-dtf-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="smart-dtf-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="smart-dtf-modal-overlay" onClick={closeInquiryModal}>
                    <div className="smart-dtf-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="smart-dtf-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="smart-dtf-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="smart-dtf-inquiry-form">
                            <div className="smart-dtf-form-row">
                                <div className="smart-dtf-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="smart-dtf-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="smart-dtf-form-row">
                                <div className="smart-dtf-form-group">
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
                                <div className="smart-dtf-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="smart-dtf-phone-input">
                                        <select name="countryCode" className="smart-dtf-country-select">
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

                            <div className="smart-dtf-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="smart-dtf-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your SMART DTF requirements and any specific questions about this equipment..."
                                    required
                                ></textarea>
                            </div>

                            <div className="smart-dtf-form-actions">
                                <button type="submit" className="smart-dtf-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="smart-dtf-btn-secondary">
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
