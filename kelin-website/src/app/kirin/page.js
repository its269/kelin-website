"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './kirin.css';

export default function KirinDA182TPlus() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).png');

    const machineDetails = {
        name: 'KIRIN DA182T PLUS',
        model: 'High-speed Roll to Roll Dye Sublimation Digital Textile Printer',
        images: [
            '/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).png',
            '/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).png', // Add more images if available
        ],
        shortDescription: 'HIGH-SPEED PERFORMANCE FOR LARGE-SCALE DEMANDS - The DA182T Plus, equipped with 8 Kyocera industrial print heads, achieves speeds up to 650m²/hr (400x600dpi, 1 pass), making it perfect for high-volume textile printing where speed and quality matter.',
        detailedDescription: 'The Kirin DA182T Plus is designed for high daily output, using industrial Kyocera print heads and a specialized control system to maximize productivity. It significantly boosts overall printing efficiency with automatic cleaning and monitoring, reducing print head blockages, improving output stability, and enabling operation by just one person.',
        features: [
            {
                title: 'Superior print head for higher productivity',
                description: 'Designed for high daily output, the DA182T Series uses industrial Kyocera print heads and a specialized control system to maximize productivity and significantly boost overall printing efficiency.',
                icon: 'precision'
            },
            {
                title: 'High-Speed, High-Definition Output',
                description: 'The DA182T Series uses a unique drive and ink supply system to ensure precise control, delivering image-level print quality with various resolutions.',
                icon: 'accuracy'
            },
            {
                title: 'Shown with automatic cleaning, easy to operate',
                description: 'This automatic cleaning and monitoring reduces print head blockages, improving output stability and cutting down on maintenance, with operation by just one person.',
                icon: 'speed'
            },
            {
                title: 'Reduce printing cost, impeccable',
                description: 'The large capacity floor mounted ink supply reduces ink replacement frequency and supports printing on thin paper (minimum 40gsm), cutting material costs from proofing to mass production.',
                icon: 'durability'
            }
        ],
        specifications: [
            { label: 'Model', value: 'DA182T Plus' },
            { label: 'Max Print Width (mm)', value: '1850' },
            { label: 'Print Speed @400x600dpi (1 pass)', value: 'High speed mode: 650m²/hr | General mode: 450m²/hr | Quality mode: 400m²/hr' },
            { label: 'Ink Color', value: 'C, M, Y, K, O, R, B, G (8 colors)' },
            { label: 'Drying Method', value: 'Infrared light, heating type, drying system' },
            { label: 'Print Heads', value: 'Kyocera Print Heads, 8ct' },
            { label: 'Max Paper Width (mm)', value: '1900' },
            { label: 'Print medium', value: 'Sublimation transfer paper/sublimation paper/paper' },
            { label: 'Supported Image types', value: 'JPG/TIFF/BMP/others' },
            { label: 'Operating Temperature', value: '20-30°C' },
            { label: 'Weight (kg)', value: '2500 (Without packing box)' },
            { label: 'Resolution (dpi)', value: 'High speed mode 1: 1800x3600dpi/1-pass | General mode: 1: 1800x3600dpi/2-pass | Quality mode 1: 1800x3600dpi/3-pass' },
            { label: 'Printing Speed (m²/hr)', value: 'High speed mode 1: 850x3600dpi/1-pass 650 | General mode 1: 1800x3600dpi/2-pass 450 | Quality mode 1: 1800x3600dpi/3-pass 400' }
        ],
        applications: [
            'High-Volume Textile Printing',
            'Fashion & Apparel Production',
            'Home Textiles & Furnishing',
            'Sportswear & Athletic Wear',
            'Large-Scale Soft Signage',
            'Industrial Textile Manufacturing',
            'Custom Fabric Printing',
            'Roll-to-Roll Production',
            'Mass Production Printing',
            'Commercial Sublimation Printing'
        ],
        advantages: [
            'Ultra-high speed printing up to 650m²/hr',
            '8 Kyocera industrial print heads for maximum productivity',
            'Automatic cleaning and monitoring system',
            'Single operator operation capability',
            'Large capacity floor mounted ink supply',
            'Supports thin paper printing (minimum 40gsm)',
            'Specialized control system for efficiency',
            'Reduced maintenance with automatic features',
            'Cost-effective for mass production',
            'High-definition output with multiple resolution modes'
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
            <main className="kirin-da182t-main">
                {/* Product Hero Section */}
                <section className="kirin-da182t-hero product-hero">
                    <div className="kirin-da182t-hero-layout">
                        <div className="kirin-da182t-hero-left">
                            <h1 className="kirin-da182t-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="kirin-da182t-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="kirin-da182t-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="kirin-da182t-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="kirin-da182t-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="kirin-da182t-hero-stats product-stats">
                                <div className="kirin-da182t-stat">
                                    <span className="kirin-da182t-stat-number">650m²/hr</span>
                                    <span className="kirin-da182t-stat-label">Max Speed</span>
                                </div>
                                <div className="kirin-da182t-stat">
                                    <span className="kirin-da182t-stat-number">8 Heads</span>
                                    <span className="kirin-da182t-stat-label">Kyocera</span>
                                </div>
                                <div className="kirin-da182t-stat">
                                    <span className="kirin-da182t-stat-number">1850mm</span>
                                    <span className="kirin-da182t-stat-label">Print Width</span>
                                </div>
                            </div>
                        </div>
                        <div className="kirin-da182t-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="kirin-da182t-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="kirin-da182t-overview-section">
                    <div className="kirin-da182t-overview-container">
                        <h2 className="kirin-da182t-section-title">Product Overview</h2>
                        <p className="kirin-da182t-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="kirin-da182t-features-section">
                    <div className="kirin-da182t-features-container">
                        <div className="kirin-da182t-features-header">
                            <h2 className="kirin-da182t-features-title">Key Features</h2>
                            <p className="kirin-da182t-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="kirin-da182t-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="kirin-da182t-feature-card">
                                    <div className="kirin-da182t-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="kirin-da182t-feature-title">{feature.title}</h3>
                                    <p className="kirin-da182t-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="kirin-da182t-specs-section">
                    <div className="kirin-da182t-specs-container">
                        <h2 className="kirin-da182t-section-title">Technical Specifications</h2>
                        <p className="kirin-da182t-section-subtitle">
                            Complete technical details for KIRIN DA182T cutting plotter
                        </p>
                        <div className="kirin-da182t-specs-table-wrapper">
                            <div className="kirin-da182t-spec-table">
                                <div className="kirin-da182t-spec-table-header">
                                    <h3 className="kirin-da182t-spec-table-title">
                                        <span className="kirin-da182t-spec-icon">⚙️</span>
                                        Machine Specifications
                                    </h3>
                                </div>
                                <div className="kirin-da182t-spec-table-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="kirin-da182t-spec-row">
                                            <div className="kirin-da182t-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="kirin-da182t-spec-divider"></div>
                                            <div className="kirin-da182t-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="kirin-da182t-applications-section">
                    <div className="kirin-da182t-applications-container">
                        <div className="kirin-da182t-applications-grid">
                            <div className="kirin-da182t-applications-content">
                                <h2 className="kirin-da182t-section-title">Applications</h2>
                                <p className="kirin-da182t-applications-subtitle">
                                    Versatile cutting solutions for professional applications
                                </p>
                                <ul className="kirin-da182t-applications-list">
                                    {machineDetails.applications.map((application, index) => (
                                        <li key={index} className="kirin-da182t-application-item">
                                            <svg className="kirin-da182t-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <section className="kirin-da182t-advantages-section">
                    <div className="kirin-da182t-advantages-container">
                        <h2 className="kirin-da182t-section-title">Why Choose Kirin DA182T Plus?</h2>
                        <div className="kirin-da182t-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="kirin-da182t-advantage-item">
                                    <div className="kirin-da182t-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="kirin-da182t-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="kirin-da182t-modal-overlay" onClick={closeInquiryModal}>
                    <div className="kirin-da182t-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="kirin-da182t-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="kirin-da182t-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="kirin-da182t-inquiry-form">
                            <div className="kirin-da182t-form-row">
                                <div className="kirin-da182t-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="kirin-da182t-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="kirin-da182t-form-row">
                                <div className="kirin-da182t-form-group">
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
                                <div className="kirin-da182t-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="kirin-da182t-phone-input">
                                        <select name="countryCode" className="kirin-da182t-country-select">
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

                            <div className="kirin-da182t-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="kirin-da182t-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="kirin-da182t-form-actions">
                                <button type="submit" className="kirin-da182t-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="kirin-da182t-btn-secondary">
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
