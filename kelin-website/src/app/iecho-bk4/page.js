"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import InquiryStorage from '../utils/InquiryStorage';
import './iecho-bk4.css';

export default function IEchoBK4() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/bk4 (1).png');

    const machineDetails = {
        name: 'iEcho BK4',
        model: 'BK4 High Speed Digital Cutting System',
        images: [
            '/bk4 (1).png',
            '/bk4 (1).png', // Add more images if available
        ],
        shortDescription: 'HIGH SPEED DIGITAL CUTTING SYSTEM - Ultra-high strength integrated frame with 1800mm/s cutting speed, featuring intelligent EchoMC precision motion control.',
        detailedDescription: 'The BK4 High Speed Digital Cutting System features an ultra-high strength integrated frame with 12MM steel frame and qualified connection technology, machine body frame weighs 600KG. Strength increased by 30%, reliable and durable. With intelligent EchoMC precision motion control, the machine achieves hardness speeds of 1800mm/s. The BK4 offers modular cutting options, upgrade circuit layout, multi-material unwinder, and intelligent conveyor system for seamless cutting and collecting operations.',
        features: [
            {
                title: 'Ultra-High Strength Integrated Frame',
                description: '12MM Steel frame with qualified connection technology, the machine body frame weighs 600KG. Strength increased by 30%, reliable and durable.',
                icon: 'precision'
            },
            {
                title: 'Modular Cutting Options',
                description: 'Satisfying the cutting requirements by different tool combos for different material.',
                icon: 'accuracy'
            },
            {
                title: 'High Speed Digital Cutting',
                description: 'Hardness speeds of 1800mm/s with intelligent EchoMC precision motion control.',
                icon: 'speed'
            },
            {
                title: 'Multi-Material Unwinder',
                description: 'Choose the correct unwinding device on your application of thin material.',
                icon: 'media'
            },
            {
                title: 'Intelligent Conveyor System',
                description: 'Seamless cutting and collecting for smooth workflow and increased productivity.',
                icon: 'durability'
            },
            {
                title: 'Upgrade Circuit Layout',
                description: 'Newly upgraded circuit layout for improved performance and reliability.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'BK4-1932 | BK4-1516 | BK4-2516 | BK4-2516' },
            { label: 'Effective Cutting Area (mm)', value: '1900×3200 | 1500×1600 | 2500×1600 | 2500×2000' },
            { label: 'Maximum Cutting Speed', value: '1800mm/s' },
            { label: 'Cutting Precision', value: '0.1mm' },
            { label: 'Suction Molds', value: 'Vacuum' },
            { label: 'Electric Power', value: '220V/380-415V | 380V/50-60Hz' },
            { label: 'Weight', value: '600kg-3000kg' },
            { label: 'Machine Dimension', value: '2100×2600 | 2400×3600 | 2600×3400 | 2700×3400' },
            { label: 'Maximum Cutting Thickness', value: '50mm' },
            { label: 'File Format', value: 'DXF / HPGL' },
            { label: 'Pump Power', value: '7.5KW' },
            { label: 'Operation Environment', value: 'Temperature 0°C-40°C | Humidity 25%-80%RH' }
        ],
        applications: [
            'Textile Fabrics',
            'Acrylic Sheets',
            'Corrugated Cardboard',
            'PVC Composites',
            'Foil Graphics',
            'Die-Cut Windows',
            'Sign Making',
            'Display Manufacturing',
            'Packaging Production',
            'Industrial Cutting Applications'
        ],
        advantages: [
            'Ultra-high strength integrated frame with 12MM steel construction',
            'High-speed cutting up to 1800mm/s with intelligent EchoMC precision motion control',
            'Machine body frame weighs 600KG with 30% increased strength',
            'Modular cutting options for different material requirements',
            'Multi-material unwinder for thin material applications',
            'Intelligent conveyor system for seamless cutting and collecting',
            'Newly upgraded circuit layout for improved performance',
            'High cutting precision of 0.1mm accuracy',
            'Multiple file format support: DXF/HPGL',
            'Wide range of cutting thickness up to 50mm'
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

        // Extract form data
        const formData = new FormData(e.target);
        const inquiryData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company') || 'Not specified',
            machine: machineDetails.name,
            message: formData.get('message'),
            countryCode: formData.get('countryCode')
        };

        // Save to storage
        const savedInquiry = InquiryStorage.saveInquiry(inquiryData);

        if (savedInquiry) {
            alert('Thank you for your inquiry! We will contact you soon.');
            closeInquiryModal();
            // Reset form
            e.target.reset();
        } else {
            alert('There was an error submitting your inquiry. Please try again.');
        }
    };

    return (
        <div>
            <Header />
            <main className="iecho-bk4-main">
                {/* Product Hero Section */}
                <section className="iecho-bk4-hero product-hero">
                    <div className="iecho-bk4-hero-layout">
                        <div className="iecho-bk4-hero-left">
                            <h1 className="iecho-bk4-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="iecho-bk4-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="iecho-bk4-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="iecho-bk4-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="iecho-bk4-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="iecho-bk4-hero-stats product-stats">
                                <div className="iecho-bk4-stat">
                                    <span className="iecho-bk4-stat-number">1800mm/s</span>
                                    <span className="iecho-bk4-stat-label">Max Speed</span>
                                </div>
                                <div className="iecho-bk4-stat">
                                    <span className="iecho-bk4-stat-number">0.1mm</span>
                                    <span className="iecho-bk4-stat-label">Precision</span>
                                </div>
                                <div className="iecho-bk4-stat">
                                    <span className="iecho-bk4-stat-number">600KG</span>
                                    <span className="iecho-bk4-stat-label">Frame Weight</span>
                                </div>
                            </div>
                        </div>
                        <div className="iecho-bk4-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="iecho-bk4-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="iecho-bk4-overview-section">
                    <div className="iecho-bk4-overview-container">
                        <h2 className="iecho-bk4-section-title">Product Overview</h2>
                        <p className="iecho-bk4-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="iecho-bk4-features-section">
                    <div className="iecho-bk4-features-container">
                        <div className="iecho-bk4-features-header">
                            <h2 className="iecho-bk4-features-title">Key Features</h2>
                            <p className="iecho-bk4-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="iecho-bk4-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="iecho-bk4-feature-card">
                                    <div className="iecho-bk4-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="iecho-bk4-feature-title">{feature.title}</h3>
                                    <p className="iecho-bk4-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="iecho-bk4-specs-section">
                    <div className="iecho-bk4-specs-container">
                        <h2 className="iecho-bk4-section-title">Technical Specifications</h2>
                        <div className="iecho-bk4-specs-grid">
                            <div className="iecho-bk4-spec-card">
                                <h3 className="iecho-bk4-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="iecho-bk4-spec-item">
                                        <span className="iecho-bk4-spec-label">{spec.label}:</span>
                                        <span className="iecho-bk4-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="iecho-bk4-spec-card">
                                <h3 className="iecho-bk4-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="iecho-bk4-spec-item">
                                        <span className="iecho-bk4-spec-label">{spec.label}:</span>
                                        <span className="iecho-bk4-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="iecho-bk4-applications-section">
                    <div className="iecho-bk4-applications-container">
                        <div className="iecho-bk4-applications-grid">
                            <div className="iecho-bk4-applications-content">
                                <h2 className="iecho-bk4-section-title">Applications</h2>
                                <p className="iecho-bk4-applications-subtitle">
                                    Versatile cutting solutions for professional applications
                                </p>
                                <ul className="iecho-bk4-applications-list">
                                    {machineDetails.applications.map((application, index) => (
                                        <li key={index} className="iecho-bk4-application-item">
                                            <svg className="iecho-bk4-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <section className="iecho-bk4-advantages-section">
                    <div className="iecho-bk4-advantages-container">
                        <h2 className="iecho-bk4-section-title">Why Choose iEcho BK3?</h2>
                        <div className="iecho-bk4-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="iecho-bk4-advantage-item">
                                    <div className="iecho-bk4-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="iecho-bk4-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="iecho-bk4-modal-overlay" onClick={closeInquiryModal}>
                    <div className="iecho-bk4-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="iecho-bk4-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="iecho-bk4-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="iecho-bk4-inquiry-form">
                            <div className="iecho-bk4-form-row">
                                <div className="iecho-bk4-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="iecho-bk4-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="iecho-bk4-form-row">
                                <div className="iecho-bk4-form-group">
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
                                <div className="iecho-bk4-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="iecho-bk4-phone-input">
                                        <select name="countryCode" className="iecho-bk4-country-select">
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

                            <div className="iecho-bk4-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="iecho-bk4-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your BK3 cutting system requirements and any specific questions about this high-speed digital cutting machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="iecho-bk4-form-actions">
                                <button type="submit" className="iecho-bk4-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-bk4-btn-secondary">
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
