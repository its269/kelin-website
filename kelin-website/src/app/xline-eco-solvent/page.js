"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './xline.css';

export default function XlineEcoSolventPage() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/Apollo Xline (1).png');

    const machineDetails = {
        name: 'XLINE Eco-Solvent Printer',
        model: 'XLINE-2004',
        images: [
            '/Apollo Xline (1).png',
            '/Apollo Xline (1).png', // Add more images if available
        ],
        shortDescription: 'High-performance printing system designed to tackle diverse range of large-format printing projects with vibrant quality results.',
        detailedDescription: 'The XLINE Eco-Solvent Printer represents cutting-edge large-format printing technology. Engineered for versatility and high-quality output, this printer delivers exceptional results across diverse printing applications. With advanced print head technology and robust media handling, it\'s perfect for commercial printing, signage production, and creative applications.',
        features: [
            {
                title: 'Large Format Printing',
                description: 'Wide format capabilities for handling large-scale printing projects with precision and detail',
                icon: 'print'
            },
            {
                title: 'Vibrant Color Output',
                description: 'Advanced color management system delivering vibrant, accurate colors with exceptional clarity',
                icon: 'colors'
            },
            {
                title: 'Versatile Media Support',
                description: 'Compatible with wide range of media types and substrates for maximum flexibility',
                icon: 'media'
            },
            {
                title: 'Professional Grade Quality',
                description: 'Consistent high-quality output designed for demanding professional applications',
                icon: 'quality'
            },
            {
                title: 'Advanced Print Technology',
                description: 'State-of-the-art EPSON i3200 printheads with precision ink droplet control',
                icon: 'tech'
            },
            {
                title: 'High Speed Production',
                description: 'Fast printing speeds up to 85 m²/h for high-volume production requirements',
                icon: 'speed'
            }
        ],
        specifications: [
            { label: 'Print Width', value: '3200 mm (126 inches)' },
            { label: 'Print Technology', value: 'EPSON i3200 Piezo Print Head' },
            { label: 'Print Resolution', value: '2400 DPI' },
            { label: 'Print Speed', value: 'Up to 85 m²/h' },
            { label: 'Color Scale', value: 'CMYK' },
            { label: 'Drop Size', value: '3.5 Pl.' },
            { label: 'Drying System', value: 'Infrared / Fan' },
            { label: 'Printhead Quantity', value: '4 Maximum' },
            { label: 'RIP Software', value: 'Photo Print' },
            { label: 'Power Requirements', value: '230V (+/-) 10% 10A / 50HZ' },
            { label: 'Machine Dimensions', value: '950mm × 4800mm × 1520mm' },
            { label: 'Machine Weight', value: '1140 kg' },
            { label: 'Media Support', value: 'Vinyl, Backlit Banners, Photo Paper, Billboard Paper, Flex, Textiles, Mesh, Solvent, OWV' }
        ],
        applications: [
            'Large Format Signage',
            'Outdoor Banners',
            'Vehicle Wraps',
            'Billboard Advertising',
            'Exhibition Graphics',
            'Retail Displays',
            'Architectural Graphics',
            'Textile Printing'
        ],
        advantages: [
            'High-speed production capabilities',
            'Superior print quality and resolution',
            'Wide media compatibility',
            'Reliable EPSON i3200 technology',
            'Energy-efficient operation',
            'User-friendly interface',
            'Consistent performance',
            'Professional support'
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
            <main className="xline-main">
                {/* Breadcrumb Navigation */}
                <section className="xline-breadcrumb-section">
                    <div className="xline-breadcrumb-container">
                        <nav className="xline-breadcrumb-nav">
                            <Link href="/" className="xline-breadcrumb-link">Home</Link>
                            <span className="xline-breadcrumb-separator">›</span>
                            <Link href="/products" className="xline-breadcrumb-link">Products</Link>
                            <span className="xline-breadcrumb-separator">›</span>
                            <Link href="/products/machine" className="xline-breadcrumb-link">Machines</Link>
                            <span className="xline-breadcrumb-separator">›</span>
                            <Link href="/products/machine/eco-solvent-printers" className="xline-breadcrumb-link">Eco-Solvent Printers</Link>
                            <span className="xline-breadcrumb-separator">›</span>
                            <span className="xline-breadcrumb-current">{machineDetails.model}</span>
                        </nav>
                    </div>
                </section>

                {/* Product Hero Section */}
                <section className="xline-hero product-hero">
                    <div className="xline-hero-layout">
                        <div className="xline-hero-left">
                            <h1 className="xline-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="xline-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="xline-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="xline-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="xline-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="xline-hero-stats product-stats">
                                <div className="xline-stat">
                                    <span className="xline-stat-number">3.2m</span>
                                    <span className="xline-stat-label">Print Width</span>
                                </div>
                                <div className="xline-stat">
                                    <span className="xline-stat-number">2400 dpi</span>
                                    <span className="xline-stat-label">Max Resolution</span>
                                </div>
                                <div className="xline-stat">
                                    <span className="xline-stat-number">85 m²/h</span>
                                    <span className="xline-stat-label">Print Speed</span>
                                </div>
                            </div>
                        </div>
                        <div className="xline-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="xline-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="xline-overview-section">
                    <div className="xline-overview-container">
                        <h2 className="xline-section-title">Product Overview</h2>
                        <p className="xline-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="xline-features-section">
                    <div className="xline-features-container">
                        <div className="xline-features-header">
                            <h2 className="xline-features-title">Key Features</h2>
                            <p className="xline-features-subtitle">
                                Advanced technology meets professional performance
                            </p>
                        </div>

                        <div className="xline-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="xline-feature-card">
                                    <div className="xline-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="xline-feature-title">{feature.title}</h3>
                                    <p className="xline-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="xline-specs-section">
                    <div className="xline-specs-container">
                        <h2 className="xline-section-title">Technical Specifications</h2>
                        <div className="xline-specs-grid">
                            <div className="xline-spec-card">
                                <h3 className="xline-spec-card-title">Print Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="xline-spec-item">
                                        <span className="xline-spec-label">{spec.label}:</span>
                                        <span className="xline-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="xline-spec-card">
                                <h3 className="xline-spec-card-title">Physical Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="xline-spec-item">
                                        <span className="xline-spec-label">{spec.label}:</span>
                                        <span className="xline-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="xline-applications-section">
                    <div className="xline-applications-container">
                        <div className="xline-applications-grid">
                            <div className="xline-applications-left">
                                <h2 className="xline-section-title">Applications</h2>
                                <p className="xline-applications-intro">
                                    Perfect for a wide range of professional printing applications
                                </p>
                                <div className="xline-applications-grid-items">
                                    {machineDetails.applications.map((application, index) => (
                                        <div key={index} className="xline-application-item">
                                            <div className="xline-application-dot"></div>
                                            <span className="xline-application-text">{application}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="xline-applications-right">
                                <h2 className="xline-section-title">Advantages</h2>
                                <p className="xline-applications-intro">
                                    Why choose the XLINE Eco-Solvent for your business
                                </p>
                                <div className="xline-advantages-list">
                                    {machineDetails.advantages.map((advantage, index) => (
                                        <div key={index} className="xline-advantage-item">
                                            <div className="xline-advantage-icon"></div>
                                            <span className="xline-advantage-text">{advantage}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="xline-cta-section">
                    <div className="xline-cta-container">
                        <h2 className="xline-cta-title">
                            Ready to Transform Your Printing Business?
                        </h2>
                        <p className="xline-cta-text">
                            Get detailed pricing, technical specifications, and expert consultation for the XLINE Eco-Solvent Printer.
                        </p>
                        <div className="xline-cta-buttons">
                            <button
                                onClick={openInquiryModal}
                                className="xline-cta-btn-primary"
                            >
                                Request Quote
                            </button>
                            <Link
                                href="/contact"
                                className="xline-cta-btn-secondary"
                            >
                                Contact Sales Team
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="xline-modal-overlay" onClick={closeInquiryModal}>
                    <div className="xline-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="xline-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="xline-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="xline-inquiry-form">
                            <div className="xline-form-row">
                                <div className="xline-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="xline-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="xline-form-row">
                                <div className="xline-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="xline-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="xline-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="xline-phone-input">
                                    <select className="xline-country-select" name="countryCode" defaultValue="+1">
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

                            <div className="xline-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="xline-form-actions">
                                <button type="submit" className="xline-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="xline-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}