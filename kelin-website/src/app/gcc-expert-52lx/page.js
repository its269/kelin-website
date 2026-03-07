"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './gcc-expert-52lx.css';

export default function GCCExpert52LX() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/GCC Expert LX  EX-52LX  With Stand (1).png');

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
        name: 'GCC Expert 52 LX',
        model: 'Expert 52 LX Cutting Plotter',
        images: [
            '/GCC Expert LX  EX-52LX  With Stand (1).png',
            '/GCC Expert LX  EX-52LX  With Stand (1).png', // Add more images if available
        ],
        shortDescription: 'SMART VISION - ULTRA-PRECISE, FAST FLEXIBLE CUTTING - Professional grade plotters offering up to 400mm/sec cutting speed with Advanced Automatic Aligning System (AAS) for precise contour cutting.',
        detailedDescription: 'The GCC Expert 52 LX is a wide-format color plotter offering up to 250 grams of cutting force and optimum 15.7 ips cutting speed. It features an Automatic Aligning System (AAS) for auto contour cutting, targeting larger craft market projects and sign making applications. This reliable and affordable machine uses professional-grade components with extended width capacity.',
        features: [
            {
                title: 'Robust Cutting Force',
                description: 'The Expert 52 LX model is equipped to deliver a cutting force of up to 250 grams, allowing it to handle various materials with precision across its extended width.',
                icon: 'precision'
            },
            {
                title: 'High-Speed Performance',
                description: 'This machine offers impressive cutting speeds of up to 400mm (15.7 ips) per second, enabling efficient and timely completion of projects.',
                icon: 'speed'
            },
            {
                title: 'Professional-Grade Components',
                description: 'Ensuring the quality and longevity of this machine by incorporating professional-grade components found in higher-end models, making advanced cutting technology accessible at an affordable price.',
                icon: 'durability'
            },
            {
                title: 'Advanced Automatic Contour Cutting',
                description: 'The Expert 52 LX features an Automatic Aligning System (AAS) function for automatic contour cutting, with extended width capacity perfect for larger craft projects and sign making applications.',
                icon: 'accuracy'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'GCC Expert 52 LX' },
            { label: 'Max Media Loading Width', value: '1641mm (64.60in)' },
            { label: 'Min Media Loading Width', value: '30mm (0.8in)' },
            { label: 'Max Cutting Force', value: '250g' },
            { label: 'Interfaces', value: 'USB 2.0 (Hi Speed) and serial (RS-232C)' },
            { label: 'Max Cutting Speed', value: 'Up to 400mm/sec (15.7 ips)' },
            { label: 'Mechanical Resolution', value: '0.0125mm' },
            { label: 'Voltage', value: 'AC 100-240V' },
            { label: 'Dimension', value: '1905mm*285mm*860mm' },
            { label: 'Weight', value: 'N.W 53kg (116.85lbs)' }
        ],
        applications: [
            'Large Format Craft Projects',
            'Wide Vinyl Cutting & Weeding',
            'Heat Transfer Vinyl (HTV) Applications',
            'Large Scrapbooking Materials',
            'Poster & Banner Creation',
            'Large Format Stencils',
            'Vehicle Decals & Graphics',
            'Sign Making Projects',
            'Wide Format Contour Cutting',
            'Commercial Production'
        ],
        advantages: [
            'Advanced Automatic Aligning System (AAS) for precise contour cutting',
            'Professional-grade components at affordable price point',
            'Up to 250g cutting force for various material handling',
            'Fast cutting speeds up to 400mm/sec (15.7 ips)',
            'Extended width capacity of 1641mm (64.60in) for larger projects',
            'Perfect for wide format applications and sign making',
            'USB 2.0 and RS-232C connectivity options',
            'Ideal for commercial and professional workshops',
            'Reliable performance for medium to large business operations',
            'Cost-effective solution for wide format cutting needs'
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
            <main className="gcc-expert-52lx-main">
                {/* Product Hero Section */}
                <section className="gcc-expert-52lx-hero product-hero">
                    <div className="gcc-expert-52lx-hero-layout">
                        <div className="gcc-expert-52lx-hero-left">
                            <h1 className="gcc-expert-52lx-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="gcc-expert-52lx-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="gcc-expert-52lx-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="gcc-expert-52lx-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="gcc-expert-52lx-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="gcc-expert-52lx-hero-stats product-stats">
                                <div className="gcc-expert-52lx-stat">
                                    <span className="gcc-expert-52lx-stat-number">400mm/s</span>
                                    <span className="gcc-expert-52lx-stat-label">Max Speed</span>
                                </div>
                                <div className="gcc-expert-52lx-stat">
                                    <span className="gcc-expert-52lx-stat-number">250g</span>
                                    <span className="gcc-expert-52lx-stat-label">Cutting Force</span>
                                </div>
                                <div className="gcc-expert-52lx-stat">
                                    <span className="gcc-expert-52lx-stat-number">AAS</span>
                                    <span className="gcc-expert-52lx-stat-label">Auto System</span>
                                </div>
                            </div>
                        </div>
                        <div className="gcc-expert-52lx-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="gcc-expert-52lx-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="gcc-expert-52lx-overview-section">
                    <div className="gcc-expert-52lx-overview-container">
                        <h2 className="gcc-expert-52lx-section-title">Product Overview</h2>
                        <p className="gcc-expert-52lx-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="gcc-expert-52lx-features-section">
                    <div className="gcc-expert-52lx-features-container">
                        <div className="gcc-expert-52lx-features-header">
                            <h2 className="gcc-expert-52lx-features-title">Key Features</h2>
                            <p className="gcc-expert-52lx-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="gcc-expert-52lx-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="gcc-expert-52lx-feature-card">
                                    <div className="gcc-expert-52lx-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="gcc-expert-52lx-feature-title">{feature.title}</h3>
                                    <p className="gcc-expert-52lx-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="gcc-expert-52lx-specs-section">
                    <div className="gcc-expert-52lx-specs-container">
                        <h2 className="gcc-expert-52lx-section-title">Technical Specifications</h2>
                        <div className="gcc-expert-52lx-specs-grid">
                            <div className="gcc-expert-52lx-spec-card">
                                <h3 className="gcc-expert-52lx-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="gcc-expert-52lx-spec-item">
                                        <span className="gcc-expert-52lx-spec-label">{spec.label}:</span>
                                        <span className="gcc-expert-52lx-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="gcc-expert-52lx-spec-card">
                                <h3 className="gcc-expert-52lx-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="gcc-expert-52lx-spec-item">
                                        <span className="gcc-expert-52lx-spec-label">{spec.label}:</span>
                                        <span className="gcc-expert-52lx-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="gcc-expert-52lx-applications-section">
                    <div className="gcc-expert-52lx-applications-container">
                        <h2 className="gcc-expert-52lx-section-title">Applications</h2>
                        <p className="gcc-expert-52lx-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="gcc-expert-52lx-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="gcc-expert-52lx-applications-image-grid">
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="T-Shirt Printing" />
                                    <p>T-Shirt Printing</p>
                                </div>
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Mug Printing" />
                                    <p>Mug Printing</p>
                                </div>
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Signage & Banners" />
                                    <p>Signage & Banners</p>
                                </div>
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Custom Apparel" />
                                    <p>Custom Apparel</p>
                                </div>
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Phone Cases" />
                                    <p>Phone Cases</p>
                                </div>
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sportswear" />
                                    <p>Sportswear</p>
                                </div>
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Home Decor" />
                                    <p>Home Decor</p>
                                </div>
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging" />
                                    <p>Packaging</p>
                                </div>
                                <div className="gcc-expert-52lx-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Labels & Stickers" />
                                    <p>Labels & Stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="gcc-expert-52lx-advantages-section">
                    <div className="gcc-expert-52lx-advantages-container">
                        <h2 className="gcc-expert-52lx-section-title">Why Choose GCC Expert 52 LX?</h2>
                        <div className="gcc-expert-52lx-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="gcc-expert-52lx-advantage-item">
                                    <svg className="gcc-expert-52lx-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="gcc-expert-52lx-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="gcc-expert-52lx-modal-overlay" onClick={closeInquiryModal}>
                    <div className="gcc-expert-52lx-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="gcc-expert-52lx-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="gcc-expert-52lx-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="gcc-expert-52lx-inquiry-form">
                            <div className="gcc-expert-52lx-form-row">
                                <div className="gcc-expert-52lx-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="gcc-expert-52lx-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="gcc-expert-52lx-form-row">
                                <div className="gcc-expert-52lx-form-group">
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
                                <div className="gcc-expert-52lx-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="gcc-expert-52lx-phone-input">
                                        <select name="countryCode" className="gcc-expert-52lx-country-select">
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

                            <div className="gcc-expert-52lx-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="gcc-expert-52lx-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="gcc-expert-52lx-form-actions">
                                <button type="submit" className="gcc-expert-52lx-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="gcc-expert-52lx-btn-secondary">
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
