"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './dtf-uv-printer-sf604-i3200-unique.css';

export default function DTFUVPrinterSF604I3200() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/DTF UV Printer SF604-i3200 2ft. - High Res (1).png');

    const machineDetails = {
        name: 'LUXOR SF60-4',
        model: 'DTF UV PRINTER WITH GOLD STAMPING',
        images: [
            '/DTF UV Printer SF604-i3200 2ft. - High Res (1).png',
            '/DTF UV Printer SF604-i3200 2ft. - High Res (1).png', // Add more images if available
        ],
        shortDescription: 'ADVANCED W+CMYK+V PRINTING CAPABILITY - Combines white ink, CMYK, and varnish for high-definition printing on dark, transparent, or textured surfaces—delivering superior detail, contrast, and finish.',
        detailedDescription: 'The LUXOR SF60-4 DTF UV Printer with Gold Stamping delivers advanced W+CMYK+V printing capability. Featuring PRECISION CORE printhead powered by EPSON, this industrial-grade printer achieves 8 m²/h printing speed with superior detail, contrast, and finish. Available with optional built-in gold foil stamping for premium finishing effects on diverse surfaces.',
        features: [
            {
                title: 'Import THK Guide Rail',
                description: 'High-quality imported THK guide rail system provides exceptional stability and precision for consistent printing results.',
                icon: 'precision'
            },
            {
                title: 'Electric Lifting of Pressing Rubber Roller',
                description: 'Automated electric lifting system for the pressing rubber roller ensures optimal pressure control and material handling.',
                icon: 'accuracy'
            },
            {
                title: 'Double Chain Design',
                description: 'Robust double chain design provides enhanced stability and reliability for continuous heavy-duty operation.',
                icon: 'speed'
            },
            {
                title: 'Printhead Platform Heating',
                description: 'Advanced printhead platform heating system ensures optimal ink temperature and superior print quality consistency.',
                icon: 'media'
            },
            {
                title: 'PRECISION CORE Printhead',
                description: 'EPSON PRECISION CORE technology with 3-4 printheads delivers exceptional print quality and industrial-grade performance.',
                icon: 'durability'
            },
            {
                title: 'Optional Gold Foil Stamping',
                description: 'Available with built-in gold foil stamping capability for premium finishing effects and enhanced product value.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Model', value: 'SF60-4' },
            { label: 'Printhead', value: 'EPSON XP600 10, Quantity: 3-4' },
            { label: 'Print Width', value: '600mm' },
            { label: 'Print Speed', value: '6 PASS: 8m/h, 8 PASS: 6m/h' },
            { label: 'Ink Type', value: 'UV Neutral Hard Ink' },
            { label: 'Ink Color', value: 'W+CMYK+V (Varnish)' },
            { label: 'Interface', value: 'Gigabit Ethernet' },
            { label: 'RIP Software', value: 'Maintop, RIN, FlexiPRINT, etc.' },
            { label: 'Print Media', value: 'AB Film, Plasma Film' },
            { label: 'Weight', value: 'N.W: 240kg, G.W: 394kg' },
            { label: 'Power', value: '180W/220V, 50-60HZ' },
            { label: 'Image Format', value: 'JPG, TIF, PDF, etc.' },
            { label: 'Working Environment', value: 'Temp: 15°C - 30°C, Humidity: 35% - 65%' },
            { label: 'Machine Size', value: 'Dimension: 190*120*150cm, Packing: 240*180*190cm' }
        ],
        applications: [
            'Custom Labels and Stickers',
            'Branded Merchandise and Gifts',
            'Sports Equipment Decals',
            'Premium Product Packaging',
            'Promotional Items',
            'Electronics Device Labels',
            'Automotive Accessories',
            'Home and Office Decor',
            'Awards and Certificates',
            'Personalized Items',
            'Industrial Marking',
            'High-end Branding Materials'
        ],
        advantages: [
            'EPSON XP600 10 printhead technology with 3-4 unit configuration',
            'Advanced W+CMYK+V printing capability with varnish finish',
            'Industrial grade speed of 8 m²/h for high-volume production',
            'Import THK guide rail system for exceptional stability',
            'Electric lifting pressing rubber roller for automated operation',
            'Double chain design for enhanced reliability and durability',
            'Printhead platform heating for optimal print consistency',
            'Optional gold foil stamping for premium finishing effects',
            'Gigabit Ethernet interface for fast data transfer',
            '600mm print width for larger format applications',
            'Professional working environment specifications',
            'Compatible with AB Film and Plasma Film materials'
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
            <main className="dtf-uv-sf604-main">
                {/* Product Hero Section */}
                <section className="dtf-uv-sf604-hero product-hero">
                    <div className="dtf-uv-sf604-hero-layout">
                        <div className="dtf-uv-sf604-hero-left">
                            <h1 className="dtf-uv-sf604-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="dtf-uv-sf604-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="dtf-uv-sf604-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="dtf-uv-sf604-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="dtf-uv-sf604-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="dtf-uv-sf604-hero-stats product-stats">
                                <div className="dtf-uv-sf604-stat">
                                    <span className="dtf-uv-sf604-stat-number">600mm</span>
                                    <span className="dtf-uv-sf604-stat-label">Print Width</span>
                                </div>
                                <div className="dtf-uv-sf604-stat">
                                    <span className="dtf-uv-sf604-stat-number">8 m²/h</span>
                                    <span className="dtf-uv-sf604-stat-label">Print Speed</span>
                                </div>
                                <div className="dtf-uv-sf604-stat">
                                    <span className="dtf-uv-sf604-stat-number">W+CMYK+V</span>
                                    <span className="dtf-uv-sf604-stat-label">6 Colors</span>
                                </div>
                            </div>
                        </div>
                        <div className="dtf-uv-sf604-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="dtf-uv-sf604-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="dtf-uv-sf604-overview-section">
                    <div className="dtf-uv-sf604-overview-container">
                        <h2 className="dtf-uv-sf604-section-title">Product Overview</h2>
                        <p className="dtf-uv-sf604-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="dtf-uv-sf604-features-section">
                    <div className="dtf-uv-sf604-features-container">
                        <div className="dtf-uv-sf604-features-header">
                            <h2 className="dtf-uv-sf604-features-title">Key Features</h2>
                            <p className="dtf-uv-sf604-features-subtitle">
                                Advanced DTF UV printing technology with gold stamping capability
                            </p>
                        </div>

                        <div className="dtf-uv-sf604-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="dtf-uv-sf604-feature-card">
                                    <div className="dtf-uv-sf604-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="dtf-uv-sf604-feature-title">{feature.title}</h3>
                                    <p className="dtf-uv-sf604-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="dtf-uv-sf604-specs-section">
                    <div className="dtf-uv-sf604-specs-container">
                        <h2 className="dtf-uv-sf604-section-title">Technical Specifications</h2>
                        <p className="dtf-uv-sf604-section-subtitle">
                            Complete technical details for LUXOR SF60-4 DTF UV Printer with Gold Stamping
                        </p>
                        <div className="dtf-uv-sf604-specs-grid">
                            <div className="dtf-uv-sf604-spec-card">
                                <h3 className="dtf-uv-sf604-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="dtf-uv-sf604-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="dtf-uv-sf604-spec-item">
                                            <div className="dtf-uv-sf604-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="dtf-uv-sf604-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="dtf-uv-sf604-applications-section">
                    <div className="dtf-uv-sf604-applications-container">
                        <div className="dtf-uv-sf604-applications-grid">
                            <div className="dtf-uv-sf604-applications-content">
                                <h2 className="dtf-uv-sf604-section-title">Applications</h2>
                                <p className="dtf-uv-sf604-applications-subtitle">
                                    Professional UV DTF printing solutions with optional gold stamping
                                </p>
                                <ul className="dtf-uv-sf604-applications-list">
                                    {machineDetails.applications.map((application, index) => (
                                        <li key={index} className="dtf-uv-sf604-application-item">
                                            <svg className="dtf-uv-sf604-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 12l2 2 4-4" />
                                                <circle cx="12" cy="12" r="10" />
                                            </svg>
                                            {application}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="dtf-uv-sf604-advantages-section">
                    <div className="dtf-uv-sf604-advantages-container">
                        <h2 className="dtf-uv-sf604-section-title">Why Choose LUXOR SF60-4?</h2>
                        <div className="dtf-uv-sf604-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="dtf-uv-sf604-advantage-item">
                                    <div className="dtf-uv-sf604-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="dtf-uv-sf604-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="dtf-uv-sf604-modal-overlay" onClick={closeInquiryModal}>
                    <div className="dtf-uv-sf604-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="dtf-uv-sf604-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="dtf-uv-sf604-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="dtf-uv-sf604-inquiry-form">
                            <div className="dtf-uv-sf604-form-row">
                                <div className="dtf-uv-sf604-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="dtf-uv-sf604-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="dtf-uv-sf604-form-row">
                                <div className="dtf-uv-sf604-form-group">
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
                                <div className="dtf-uv-sf604-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="dtf-uv-sf604-phone-input">
                                        <select name="countryCode" className="dtf-uv-sf604-country-select">
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

                            <div className="dtf-uv-sf604-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="dtf-uv-sf604-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your UV DTF printing requirements and any specific questions about the LUXOR SF60-4..."
                                    required
                                ></textarea>
                            </div>

                            <div className="dtf-uv-sf604-form-actions">
                                <button type="submit" className="dtf-uv-sf604-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="dtf-uv-sf604-btn-secondary">
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