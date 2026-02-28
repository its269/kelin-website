"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './r2000-roller.css';

export default function R2000Roller() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/SUBL R2000 Roller Type Sublimation Machine GS 1200 (1).png');

    const machineDetails = {
        name: 'R2000 Roller',
        model: 'Sublimation Machine GS1200 / GS1900',
        images: [
            '/sublimation_dtf/SUBL R2000 Roller Type Sublimation Machine GS 1200 (1).png',
            '/sublimation_dtf/SUBL R2000 Roller Type Sublimation Machine GS 1200 (1).png', // Add more images if available
        ],
        shortDescription: 'MULTI-FUNCTIONAL HEAT TRANSFER FOR QUALITY & EFFICIENCY - The CS-R05 Mini Roller Heat Transfer Machine is a versatile unit offering simultaneous print, transfer and die cutting. It delivers vivid colors, enhanced gloss, and strong, waterproof adhesion on various materials.',
        detailedDescription: 'The CS-R05 Mini Roller Heat Transfer Machine is a versatile unit offering simultaneous print, transfer and die cutting. It delivers vivid colors, enhanced gloss, and strong, waterproof adhesion on various materials. Key features include efficient anti-counterfeiting capabilities, ensuring high-quality output and production efficiency.',
        features: [
            {
                title: 'Multi-functional design for print transfer and die-cutting',
                description: 'It can perform both functions simultaneously or separately, and is particularly suitable for small batch transfer and proofing.',
                icon: 'precision'
            },
            {
                title: 'Enhanced color vibrancy and gloss',
                description: 'The transfer effect achieves more vivid colors and better gloss on hot transfer.',
                icon: 'accuracy'
            },
            {
                title: 'Manual unwinding device',
                description: 'This feature is included to prolong the service life of the blanket.',
                icon: 'speed'
            },
            {
                title: 'Teflon-plated drum',
                description: 'The drum is coated with teflon, providing strong hardness, wear resistance, and anti-sticking properties, and a good thermal effect.',
                icon: 'media'
            },
            {
                title: 'Automatic conveyor system with anti-counterfeiting function',
                description: 'The belt conveying automatic receiving system ensures faster transfer speed, higher production efficiency, and greater convenience along with an integrated anti-counterfeiting feature.',
                icon: 'durability'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'GS-R05' },
            { label: 'Machine sizes', value: '200*120 | 300*170 | 400*170' },
            { label: 'Machine Power (kw)', value: '80kw | 120kw | 96kw | 168kw' },
            { label: 'Table Size', value: '1.5m' },
            { label: 'Voltage', value: '220/380v' },
            { label: 'Working Pressure', value: '0-8kg/cm²' },
            { label: 'Time Range', value: '0-999s' },
            { label: 'Temperature Range', value: '0-399°C' },
            { label: 'Package dimensions', value: '250*93*136cm | 350*99*146cm | 237*98*156cm | 237*98*156cm' }
        ],
        applications: [
            'Custom Apparel and Fashion',
            'Custom flags and banners',
            'Custom T-shirts, Hoodies, and Sweatshirts',
            'Event sashes or armbands',
            'Heat transfer applications',
            'Sublimation printing',
            'Die cutting operations',
            'Small batch production',
            'Sample making',
            'Promotional materials'
        ],
        advantages: [
            'Temperature range up to 0-399°C for versatile applications',
            'Multi-functional design for print transfer and die-cutting operations',
            'Enhanced color vibrancy and gloss transfer effect',
            'Teflon-plated drum for strong hardness and wear resistance',
            'Belt conveying automatic receiving system for faster transfer speed',
            'Integrated anti-counterfeiting feature for secure production',
            'Manual unwinding device to prolong blanket service life',
            'Compact and efficient design for small to medium production',
            'Multiple machine size options to fit different workspace needs',
            'Professional heat transfer solution for quality output'
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
            <main className="r2000-roller-main">
                {/* Product Hero Section */}
                <section className="r2000-roller-hero product-hero">
                    <div className="r2000-roller-hero-layout">
                        <div className="r2000-roller-hero-left">
                            <h1 className="r2000-roller-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="r2000-roller-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="r2000-roller-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="r2000-roller-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="r2000-roller-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="r2000-roller-hero-stats product-stats">
                                <div className="r2000-roller-stat">
                                    <span className="r2000-roller-stat-number">0-399°C</span>
                                    <span className="r2000-roller-stat-label">Temp Range</span>
                                </div>
                                <div className="r2000-roller-stat">
                                    <span className="r2000-roller-stat-number">0-999s</span>
                                    <span className="r2000-roller-stat-label">Time Range</span>
                                </div>
                                <div className="r2000-roller-stat">
                                    <span className="r2000-roller-stat-number">0-8kg/cm²</span>
                                    <span className="r2000-roller-stat-label">Pressure</span>
                                </div>
                            </div>
                        </div>
                        <div className="r2000-roller-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="r2000-roller-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="r2000-roller-overview-section">
                    <div className="r2000-roller-overview-container">
                        <h2 className="r2000-roller-section-title">Product Overview</h2>
                        <p className="r2000-roller-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="r2000-roller-features-section">
                    <div className="r2000-roller-features-container">
                        <div className="r2000-roller-features-header">
                            <h2 className="r2000-roller-features-title">Key Features</h2>
                            <p className="r2000-roller-features-subtitle">
                                Advanced heat transfer technology meets professional performance
                            </p>
                        </div>

                        <div className="r2000-roller-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="r2000-roller-feature-card">
                                    <div className="r2000-roller-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="r2000-roller-feature-title">{feature.title}</h3>
                                    <p className="r2000-roller-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="r2000-roller-specs-section">
                    <div className="r2000-roller-specs-container">
                        <h2 className="r2000-roller-section-title">Technical Specifications</h2>
                        <p className="r2000-roller-section-subtitle">
                            Complete technical details for R2000 roller heat transfer machine
                        </p>
                        <div className="r2000-roller-specs-table-wrapper">
                            <div className="r2000-roller-spec-table">
                                <div className="r2000-roller-spec-table-header">
                                    <h3 className="r2000-roller-spec-table-title">
                                        <span className="r2000-roller-spec-icon">⚙️</span>
                                        Machine Specifications
                                    </h3>
                                </div>
                                <div className="r2000-roller-spec-table-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="r2000-roller-spec-row">
                                            <div className="r2000-roller-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="r2000-roller-spec-divider"></div>
                                            <div className="r2000-roller-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="r2000-roller-applications-section">
                    <div className="r2000-roller-applications-container">
                        <div className="r2000-roller-applications-grid">
                            <div className="r2000-roller-applications-content">
                                <h2 className="r2000-roller-section-title">Applications</h2>
                                <p className="r2000-roller-applications-subtitle">
                                    Versatile heat transfer solutions for professional applications
                                </p>
                                <ul className="r2000-roller-applications-list">
                                    {machineDetails.applications.map((application, index) => (
                                        <li key={index} className="r2000-roller-application-item">
                                            <svg className="r2000-roller-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <section className="r2000-roller-advantages-section">
                    <div className="r2000-roller-advantages-container">
                        <h2 className="r2000-roller-section-title">Why Choose R2000 Roller?</h2>
                        <div className="r2000-roller-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="r2000-roller-advantage-item">
                                    <div className="r2000-roller-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="r2000-roller-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="r2000-roller-modal-overlay" onClick={closeInquiryModal}>
                    <div className="r2000-roller-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="r2000-roller-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="r2000-roller-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="r2000-roller-inquiry-form">
                            <div className="r2000-roller-form-row">
                                <div className="r2000-roller-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="r2000-roller-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="r2000-roller-form-row">
                                <div className="r2000-roller-form-group">
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
                                <div className="r2000-roller-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="r2000-roller-phone-input">
                                        <select name="countryCode" className="r2000-roller-country-select">
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

                            <div className="r2000-roller-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="r2000-roller-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your heat transfer machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="r2000-roller-form-actions">
                                <button type="submit" className="r2000-roller-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="r2000-roller-btn-secondary">
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