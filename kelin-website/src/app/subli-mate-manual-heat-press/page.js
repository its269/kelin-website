"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './subli-mate-manual-heat-press.css';

export default function SubliMateManualHeatPress() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/heatpress/Subli-Mate Manual Heat Press 80cm x 100cm (1).png');
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
        name: 'SUBLI-MATE HEAT PRESS',
        model: 'MANUAL HEATPRESS 80CM X 100CM',
        images: [
            '/heatpress/Subli-Mate Manual Heat Press 80cm x 100cm (1).png',
            '/heatpress/Subli-Mate Manual Heat Press 80cm x 100cm (1).png',
        ],
        shortDescription: 'The Manual Heatpress is a specialized heat press designed for ease of use and safety. Its unique drawer-like design simplifies material placement while preventing burns.',
        detailedDescription: 'The Manual Heatpress is a specialized heat press designed for ease of use and safety. Its unique drawer-like design simplifies material placement while preventing burns. Additionally, it features an integrated roller that allows for precise multidirectional movement and angular positioning, offering operational flexibility to suit various workspace configurations and application needs.',
        features: [
            {
                title: 'Drawer-like Design',
                description: 'This manual heat press boasts a unique drawer-like mechanism. This innovative design simplifies material placement and provides easy and clear access for precisely positioning the materials to be printed with T-shirts or fabric banners.',
                icon: 'drawer'
            },
            {
                title: 'Integrated Roller',
                description: 'The Manual Heatpress features a roller. This integrated component plays a crucial role in the machine\'s functionality and ease of use.',
                icon: 'roller'
            },
            {
                title: 'Burn Prevention',
                description: 'A significant advantage of the drawer-style design is the increased safety. By allowing the user to slide the material in and out from the heated upper platen, the risk of accidental contact and potential burns is greatly minimized.',
                icon: 'safety'
            },
            {
                title: 'Angled Movement',
                description: 'The integrated roller facilitates precise multidirectional movement and angular positioning of the Manual Heatpress. This enhances flexibility, enabling users to accurately orient the machine for personal workspace alignment or specific application needs.',
                icon: 'movement'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'MANUAL HEATPRESS' },
            { label: 'Specifications', value: '80cm x 100cm' },
            { label: 'Power (kw)', value: '7.8kw' },
            { label: 'Max Temperature', value: '0-250°C' },
            { label: 'Package Size (cm)', value: '120cm*100cm*120cm' },
            { label: 'Electricity', value: '3.1AMP' },
            { label: 'Voltage (v)', value: '220v' },
            { label: 'C.W / N.W', value: '180KG' }
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
            'Extra large 80x100cm format for oversized items',
            'Drawer-type design for effortless loading and safer operation',
            'Integrated roller for precise positioning',
            'Angled movement capability for workspace flexibility',
            'Burn prevention with drawer mechanism',
            'Digital temperature control up to 250°C',
            'High power 7.8kw for efficient heating',
            'Heavy-duty construction (180KG)',
            'Large package capacity',
            'Suitable for various materials',
            'Ideal for full jersey sublimation',
            'Perfect for high-volume production'
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
            <main className="sublimate-heatpress-main">
                {/* Product Hero Section */}
                <section className="sublimate-heatpress-hero product-hero">
                    <div className="sublimate-heatpress-hero-layout">
                        <div className="sublimate-heatpress-hero-left">
                            <h1 className="sublimate-heatpress-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="sublimate-heatpress-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="sublimate-heatpress-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="sublimate-heatpress-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="sublimate-heatpress-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="sublimate-heatpress-hero-stats product-stats">
                                <div className="sublimate-heatpress-stat">
                                    <span className="sublimate-heatpress-stat-number">80x100cm</span>
                                    <span className="sublimate-heatpress-stat-label">Large Format</span>
                                </div>
                                <div className="sublimate-heatpress-stat">
                                    <span className="sublimate-heatpress-stat-number">7.8kw</span>
                                    <span className="sublimate-heatpress-stat-label">Power</span>
                                </div>
                                <div className="sublimate-heatpress-stat">
                                    <span className="sublimate-heatpress-stat-number">0-250°C</span>
                                    <span className="sublimate-heatpress-stat-label">Max Temp</span>
                                </div>
                            </div>
                        </div>
                        <div className="sublimate-heatpress-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="sublimate-heatpress-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="sublimate-heatpress-overview-section">
                    <div className="sublimate-heatpress-overview-container">
                        <h2 className="sublimate-heatpress-section-title">Product Overview</h2>
                        <p className="sublimate-heatpress-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="sublimate-heatpress-features-section">
                    <div className="sublimate-heatpress-features-container">
                        <div className="sublimate-heatpress-features-header">
                            <h2 className="sublimate-heatpress-features-title">Key Features</h2>
                            <p className="sublimate-heatpress-features-subtitle">
                                Drawer-type manual heatpress: effortless loading, safer operation
                            </p>
                        </div>

                        <div className="sublimate-heatpress-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="sublimate-heatpress-feature-card">
                                    <div className="sublimate-heatpress-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="sublimate-heatpress-feature-title">{feature.title}</h3>
                                    <p className="sublimate-heatpress-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="sublimate-heatpress-specs-section">
                    <div className="sublimate-heatpress-specs-container">
                        <h2 className="sublimate-heatpress-section-title">Technical Specifications</h2>
                        <p className="sublimate-heatpress-section-subtitle">
                            Complete technical details for Subli-Mate Manual Heatpress 80cm x 100cm
                        </p>
                        <div className="sublimate-heatpress-specs-grid">
                            <div className="sublimate-heatpress-spec-card">
                                <h3 className="sublimate-heatpress-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="sublimate-heatpress-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="sublimate-heatpress-spec-item">
                                            <div className="sublimate-heatpress-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="sublimate-heatpress-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="sublimate-heatpress-applications-section">
                    <div className="sublimate-heatpress-applications-container">
                        <h2 className="sublimate-heatpress-section-title">Applications</h2>
                        <p className="sublimate-heatpress-applications-subtitle">
                            Professional heat press solutions for diverse sublimation and DTF applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="sublimate-heatpress-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="sublimate-heatpress-applications-image-grid">
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Full Jersey Sublimation" />
                                    <p>Full Jersey Sublimation</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Tote Bag DTF" />
                                    <p>Tote Bag DTF</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="T-shirt DTF Application" />
                                    <p>T-shirt DTF Application</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Face mask sublimation" />
                                    <p>Face mask sublimation</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Large Format Garment Printing" />
                                    <p>Large Format Garment Printing</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Custom Apparel Production" />
                                    <p>Custom Apparel Production</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Team Uniforms" />
                                    <p>Team Uniforms</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Corporate Branding" />
                                    <p>Corporate Branding</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Personalized Gifts" />
                                    <p>Personalized Gifts</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Home Decor Textiles" />
                                    <p>Home Decor Textiles</p>
                                </div>
                                <div className="sublimate-heatpress-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Fashion Design Prototyping" />
                                    <p>Fashion Design Prototyping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="sublimate-heatpress-advantages-section">
                    <div className="sublimate-heatpress-advantages-container">
                        <h2 className="sublimate-heatpress-section-title">Why Choose Subli-Mate Manual Heatpress?</h2>
                        <div className="sublimate-heatpress-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="sublimate-heatpress-advantage-item">
                                    <div className="sublimate-heatpress-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="sublimate-heatpress-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="sublimate-heatpress-modal-overlay" onClick={closeInquiryModal}>
                    <div className="sublimate-heatpress-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="sublimate-heatpress-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="sublimate-heatpress-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="sublimate-heatpress-inquiry-form">
                            <div className="sublimate-heatpress-form-row">
                                <div className="sublimate-heatpress-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="sublimate-heatpress-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="sublimate-heatpress-form-row">
                                <div className="sublimate-heatpress-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="sublimate-heatpress-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="sublimate-heatpress-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="sublimate-heatpress-phone-input">
                                    <select className="sublimate-heatpress-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="sublimate-heatpress-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your heat press needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="sublimate-heatpress-form-actions">
                                <button type="submit" className="sublimate-heatpress-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="sublimate-heatpress-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
