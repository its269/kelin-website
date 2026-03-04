"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './automatic-uv-crystal-flat-pasting.css';

export default function AutomaticUVCrystalFlatPasting() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/uv-machines/Automatic UV Crystal Flat Pasting Machine 3.82m x 1.72m (1).png');

    const machineDetails = {
        name: 'AUTOMATIC UV CRYSTAL FLAT PASTING MACHINE',
        model: 'UV CRYSTAL LAMINATING MACHINE',
        images: [
            '/uv-machines/Automatic UV Crystal Flat Pasting Machine 3.82m x 1.72m (1).png',
            '/uv-machines/Automatic UV Crystal Flat Pasting Machine 3.82m x 1.72m (1).png',
        ],
        shortDescription: 'FULLY INTEGRATED 3-IN-1 OPERATION - Lamination, Gluing, and UV Curing. Integrates UV glue, hot melt adhesive, and crystal film covering in one system—eliminating separate machines and enhancing workflow efficiency.',
        detailedDescription: 'The Automatic UV Crystal Flat Pasting Machine offers a fully integrated 3-in-1 operation combining lamination, gluing, and UV curing in one compact unit. With a lamination width up to 1260mm, this versatile machine features smart touchscreen control, high temperature-resistant silicone shaft, and large format capability—perfect for advertising billboards, background walls, and decorative industries.',
        features: [
            {
                title: 'Smart Touchscreen Control System',
                description: '7-inch display with CNC control for speed, temperature, glue, and size settings for precise operation.',
                icon: 'precision'
            },
            {
                title: 'High Temperature-Resistant Silicone Shaft',
                description: 'Ensures uniform gluing and heating without damaging materials, ideal for sensitive or high-detail lamination applications.',
                icon: 'accuracy'
            },
            {
                title: 'Versatile Media Compatibility',
                description: 'Supports a wide range of materials, including oil painting cloth, wallpaper, tin film, hot melt adhesives, and UV-coated film, offering broad usability for advertising and decorative industries.',
                icon: 'media'
            },
            {
                title: 'Large Format Capability',
                description: 'Handles media sizes up to 1260mm wide and fits large-scale projects with its 3820mm length and 1720mm width—perfect for sensation signage.',
                icon: 'durability'
            }
        ],
        specifications: [
            { label: 'Rated Voltage', value: 'AC 220V/50 Hz' },
            { label: 'Rated Power', value: '500W-3600W' },
            { label: 'Control Method', value: '7-inch touch screen/high-speed microcomputer chip control' },
            { label: 'Scope of Application', value: 'Production of advertising billboards, background walls, etc.' },
            { label: 'Working Voltage', value: 'AC 220V/50 Hz | AC 380V/50 Hz' },
            { label: 'Applicable Size', value: 'Up to 1260 mm width' },
            { label: 'Overall Dimensions', value: '3820 mm x 1720 mm x 1450 mm (h)' }
        ],
        applications: [
            'Advertising Billboard Production',
            'Background Wall Decoration',
            'Oil Painting Cloth Lamination',
            'Wallpaper Application',
            'Tin Film Covering',
            'Hot Melt Adhesive Applications',
            'UV-Coated Film Lamination',
            'Large Format Signage',
            'Commercial Interior Graphics',
            'Decorative Industry Applications',
            'Exhibition Display Graphics',
            'Retail Environment Decoration'
        ],
        advantages: [
            '3-in-1 integrated system: lamination, gluing, and UV curing',
            'Smart 7-inch touchscreen with CNC control',
            'High temperature-resistant silicone shaft for uniform application',
            'Large format capability up to 1260mm width',
            'Versatile media compatibility for diverse materials',
            'Eliminates need for multiple separate machines',
            'Enhanced workflow efficiency and productivity',
            'Precise speed and temperature control',
            'Ideal for advertising and decorative industries',
            'Professional-grade lamination quality',
            'Robust construction for industrial use',
            'Cost-efficient integrated solution'
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
            <main className="auto-uv-crystal-main">
                {/* Product Hero Section */}
                <section className="auto-uv-crystal-hero product-hero">
                    <div className="auto-uv-crystal-hero-layout">
                        <div className="auto-uv-crystal-hero-left">
                            <h1 className="auto-uv-crystal-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="auto-uv-crystal-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="auto-uv-crystal-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="auto-uv-crystal-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="auto-uv-crystal-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="auto-uv-crystal-hero-stats product-stats">
                                <div className="auto-uv-crystal-stat">
                                    <span className="auto-uv-crystal-stat-number">1260mm</span>
                                    <span className="auto-uv-crystal-stat-label">Max Width</span>
                                </div>
                                <div className="auto-uv-crystal-stat">
                                    <span className="auto-uv-crystal-stat-number">3-in-1</span>
                                    <span className="auto-uv-crystal-stat-label">Integration</span>
                                </div>
                                <div className="auto-uv-crystal-stat">
                                    <span className="auto-uv-crystal-stat-number">7"</span>
                                    <span className="auto-uv-crystal-stat-label">Touch Control</span>
                                </div>
                            </div>
                        </div>
                        <div className="auto-uv-crystal-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="auto-uv-crystal-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="auto-uv-crystal-overview-section">
                    <div className="auto-uv-crystal-overview-container">
                        <h2 className="auto-uv-crystal-section-title">Product Overview</h2>
                        <p className="auto-uv-crystal-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="auto-uv-crystal-features-section">
                    <div className="auto-uv-crystal-features-container">
                        <div className="auto-uv-crystal-features-header">
                            <h2 className="auto-uv-crystal-features-title">Key Features</h2>
                            <p className="auto-uv-crystal-features-subtitle">
                                Advanced UV crystal laminating technology for professional applications
                            </p>
                        </div>

                        <div className="auto-uv-crystal-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="auto-uv-crystal-feature-card">
                                    <div className="auto-uv-crystal-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="auto-uv-crystal-feature-title">{feature.title}</h3>
                                    <p className="auto-uv-crystal-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="auto-uv-crystal-specs-section">
                    <div className="auto-uv-crystal-specs-container">
                        <h2 className="auto-uv-crystal-section-title">Technical Specifications</h2>
                        <p className="auto-uv-crystal-section-subtitle">
                            Complete technical details for Automatic UV Crystal Flat Pasting Machine
                        </p>
                        <div className="auto-uv-crystal-specs-grid">
                            <div className="auto-uv-crystal-spec-card">
                                <h3 className="auto-uv-crystal-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="auto-uv-crystal-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="auto-uv-crystal-spec-item">
                                            <div className="auto-uv-crystal-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="auto-uv-crystal-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="auto-uv-crystal-applications-section">
                    <div className="auto-uv-crystal-applications-container">
                        <div className="auto-uv-crystal-applications-grid">
                            <div className="auto-uv-crystal-applications-content">
                                <h2 className="auto-uv-crystal-section-title">Applications</h2>
                                <p className="auto-uv-crystal-applications-subtitle">
                                    Professional UV crystal laminating solutions for diverse applications
                                </p>
                                <ul className="auto-uv-crystal-applications-list">
                                    {machineDetails.applications.map((application, index) => (
                                        <li key={index} className="auto-uv-crystal-application-item">
                                            <svg className="auto-uv-crystal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <section className="auto-uv-crystal-advantages-section">
                    <div className="auto-uv-crystal-advantages-container">
                        <h2 className="auto-uv-crystal-section-title">Why Choose Automatic UV Crystal Flat Pasting Machine?</h2>
                        <div className="auto-uv-crystal-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="auto-uv-crystal-advantage-item">
                                    <div className="auto-uv-crystal-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="auto-uv-crystal-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="auto-uv-crystal-modal-overlay" onClick={closeInquiryModal}>
                    <div className="auto-uv-crystal-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="auto-uv-crystal-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="auto-uv-crystal-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="auto-uv-crystal-inquiry-form">
                            <div className="auto-uv-crystal-form-row">
                                <div className="auto-uv-crystal-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="auto-uv-crystal-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="auto-uv-crystal-form-row">
                                <div className="auto-uv-crystal-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="auto-uv-crystal-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="auto-uv-crystal-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="auto-uv-crystal-phone-input">
                                    <select className="auto-uv-crystal-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="auto-uv-crystal-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laminating needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="auto-uv-crystal-form-actions">
                                <button type="submit" className="auto-uv-crystal-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="auto-uv-crystal-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}