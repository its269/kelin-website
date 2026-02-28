"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './smart-sublimation-unique.css';

export default function SmartSublimation() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/SUBL Smart Sublimation (1).png');

    const machineDetails = {
        name: 'SMART SUBLIMATION RJ24 2002 & 2004 6FT',
        model: 'RJ24 2002 | RJ24 2004',
        images: [
            '/sublimation_dtf/SUBL Smart Sublimation (1).png',
            '/sublimation_dtf/SUBL Smart Sublimation (1).png', // Add more images if available
        ],
        shortDescription: 'VIBRANT, EFFICIENT PRODUCTION: PRECISION HIGH-SPEED PRINTING - The SMT-JET 2002-04 Eco Solvent Printer offers efficient production with precision high-speed printing at various speeds.',
        detailedDescription: 'The SMART SUBLIMATION RJ24 2002 & 2004 6FT printer offers vibrant, efficient production with precision high-speed printing at head speeds up to 56 m2/h. Key features include an all aluminum alloy carriage, precise media feeding, CQIUK ink supply, an external infrared heating fan, and Maintop RIP software. It also provides adjustable printhead height, carriage anti-collision, auto-feeding, auto-take-up, and pre/post infrared drying.',
        features: [
            {
                title: 'THK Mute Guide Rail',
                description: 'Incorporates a state-of-the-art rail system that creates reliable & stable printing and smooth media feeding movements.',
                icon: 'rail'
            },
            {
                title: 'High Performance Control System',
                description: 'Equipped with advanced control board, especially integrated power control module and main control unit all in one.',
                icon: 'control'
            },
            {
                title: 'Aluminum Alloy Carriage Station',
                description: 'Features all aluminum alloy carriage design with strong construction and precise operation.',
                icon: 'carriage'
            },
            {
                title: 'External Infrared Heating Fan',
                description: 'Powerful external heating for fast drying, support printing and drying together which helps speed up the process.',
                icon: 'heating'
            },
            {
                title: 'Industrial Grade Speed',
                description: 'High-speed printing capability up to 97 m²/h with EPSON i3200 A1/E1 printhead for efficient production.',
                icon: 'speed'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'RJ 2002 - RJ 2004' },
            { label: 'Head Model', value: 'EPSON i3200 A1/E1' },
            { label: 'Media Type', value: 'Pre&Post Heating Infrared Drying' },
            { label: 'Printing Width', value: '1.9m' },
            { label: 'Machine Size', value: '3700mm×750mm×850mm' },
            { label: 'Printing Speed', value: '3 PASS: 56 m²/h | 4 PASS: 20m²/h | 6 PASS: 27m²/h' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Weight', value: 'G.W: 542kg N.W: 398kg | G.W: 568kg N.W: 424kg' }
        ],
        applications: [
            'Vehicle Wraps',
            'Art Reproduction / Wall Decor',
            'Interior Decoration / Wall Murals',
            'Exhibition Graphics / Posters',
            'Large Format Printing',
            'Outdoor Signage',
            'Digital Textile Printing',
            'Sublimation Transfer',
            'Commercial Graphics',
            'Banner Printing',
            'Display Graphics',
            'Promotional Materials'
        ],
        advantages: [
            'High-speed printing capability up to 97 m²/h for efficient production',
            'EPSON i3200 A1/E1 printhead for superior print quality',
            'THK mute guide rail system for reliable and stable printing',
            'All aluminum alloy carriage design for strong construction',
            'External infrared heating fan for fast drying',
            'Pre&Post heating infrared drying system',
            'High performance control system with integrated power control',
            'Precise media feeding with advanced control board',
            'Multiple printing speed options (3, 4, and 6 pass modes)',
            'Large printing width of 1.9m for versatile applications',
            'Professional grade construction for commercial use',
            'Advanced carriage anti-collision and auto-feeding systems'
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
            <main className="smart-sublimation-main">
                {/* Product Hero Section */}
                <section className="smart-sublimation-hero product-hero">
                    <div className="smart-sublimation-hero-layout">
                        <div className="smart-sublimation-hero-left">
                            <h1 className="smart-sublimation-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="smart-sublimation-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="smart-sublimation-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="smart-sublimation-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="smart-sublimation-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="smart-sublimation-hero-stats product-stats">
                                <div className="smart-sublimation-stat">
                                    <span className="smart-sublimation-stat-number">97 m²/h</span>
                                    <span className="smart-sublimation-stat-label">Max Speed</span>
                                </div>
                                <div className="smart-sublimation-stat">
                                    <span className="smart-sublimation-stat-number">1.9m</span>
                                    <span className="smart-sublimation-stat-label">Print Width</span>
                                </div>
                                <div className="smart-sublimation-stat">
                                    <span className="smart-sublimation-stat-number">i3200</span>
                                    <span className="smart-sublimation-stat-label">Printhead</span>
                                </div>
                            </div>
                        </div>
                        <div className="smart-sublimation-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="smart-sublimation-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="smart-sublimation-overview-section">
                    <div className="smart-sublimation-overview-container">
                        <h2 className="smart-sublimation-section-title">Product Overview</h2>
                        <p className="smart-sublimation-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="smart-sublimation-features-section">
                    <div className="smart-sublimation-features-container">
                        <div className="smart-sublimation-features-header">
                            <h2 className="smart-sublimation-features-title">Key Features</h2>
                            <p className="smart-sublimation-features-subtitle">
                                Advanced sublimation printing technology for vibrant, efficient production
                            </p>
                        </div>

                        <div className="smart-sublimation-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="smart-sublimation-feature-card">
                                    <div className="smart-sublimation-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="smart-sublimation-feature-title">{feature.title}</h3>
                                    <p className="smart-sublimation-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="smart-sublimation-specs-section">
                    <div className="smart-sublimation-specs-container">
                        <h2 className="smart-sublimation-section-title">Technical Specifications</h2>
                        <p className="smart-sublimation-section-subtitle">
                            Complete technical details for SMART SUBLIMATION RJ24 2002 & 2004 6FT printer
                        </p>
                        <div className="smart-sublimation-specs-table-wrapper">
                            <div className="smart-sublimation-spec-table">
                                <div className="smart-sublimation-spec-table-header">
                                    <h3 className="smart-sublimation-spec-table-title">
                                        <span className="smart-sublimation-spec-icon">⚙️</span>
                                        Machine Specifications
                                    </h3>
                                </div>
                                <div className="smart-sublimation-spec-table-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="smart-sublimation-spec-row">
                                            <div className="smart-sublimation-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="smart-sublimation-spec-divider"></div>
                                            <div className="smart-sublimation-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="smart-sublimation-applications-section">
                    <div className="smart-sublimation-applications-container">
                        <div className="smart-sublimation-applications-grid">
                            <div className="smart-sublimation-applications-content">
                                <h2 className="smart-sublimation-section-title">Applications</h2>
                                <p className="smart-sublimation-applications-subtitle">
                                    Versatile sublimation printing solutions for professional applications
                                </p>
                                <ul className="smart-sublimation-applications-list">
                                    {machineDetails.applications.map((application, index) => (
                                        <li key={index} className="smart-sublimation-application-item">
                                            <svg className="smart-sublimation-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <section className="smart-sublimation-advantages-section">
                    <div className="smart-sublimation-advantages-container">
                        <h2 className="smart-sublimation-section-title">Why Choose Dual Pneumatic Heat Press?</h2>
                        <div className="smart-sublimation-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="smart-sublimation-advantage-item">
                                    <div className="smart-sublimation-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="smart-sublimation-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="smart-sublimation-modal-overlay" onClick={closeInquiryModal}>
                    <div className="smart-sublimation-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="smart-sublimation-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="smart-sublimation-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="smart-sublimation-inquiry-form">
                            <div className="smart-sublimation-form-row">
                                <div className="smart-sublimation-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="smart-sublimation-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="smart-sublimation-form-row">
                                <div className="smart-sublimation-form-group">
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
                                <div className="smart-sublimation-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="smart-sublimation-phone-input">
                                        <select name="countryCode" className="smart-sublimation-country-select">
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

                            <div className="smart-sublimation-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="smart-sublimation-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your SMART SUBLIMATION printer requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="smart-sublimation-form-actions">
                                <button type="submit" className="smart-sublimation-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="smart-sublimation-btn-secondary">
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
