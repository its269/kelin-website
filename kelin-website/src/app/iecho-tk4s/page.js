"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import InquiryStorage from '../utils/InquiryStorage';
import './iecho-tk4s.css';

export default function IEchoTK4S() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/TK4S Large format cutting system.png');

    const machineDetails = {
        name: 'iEcho TK4S',
        model: 'TK4S Large Format Cutting System',
        images: [
            '/TK4S Large format cutting system.png',
            '/TK4S Large format cutting system.png', // Add more TK4S images if available
        ],
        shortDescription: 'LARGE FORMAT CUTTING SYSTEM - Precision dual-beam cutting technology with 1500mm/s speed, featuring intelligent EchoMC precision motion control for high-volume production.',
        detailedDescription: 'The TK4S Large Format Cutting System delivers unmatched speed, accuracy, and versatility to meet the demands of any cutting application. For high-volume production or precision work on complex materials, the TK4S provides precision dual-beam cutting technology with intelligent EchoMC motion control. With maximum cutting speed of 1500mm/s and cutting precision of 0.1mm, the TK4S excels in furniture & textile, sign & advertising/packaging, automobile upholstery, and other industries.',
        features: [
            {
                title: 'AKI System',
                description: 'Accurate depth control with automatic knife setup for precise cutting operations.',
                icon: 'precision'
            },
            {
                title: 'Flexible Working Area',
                description: 'Modular work area expandable to customer needs with versatile cutting configurations.',
                icon: 'accuracy'
            },
            {
                title: 'Precision Dual-Beam Cutting Technology',
                description: 'Advanced cutting speed of 1500mm/s with intelligent EchoMC precision motion control.',
                icon: 'speed'
            },
            {
                title: 'Diversified Cutting Tools',
                description: 'Interchangeable heads support diverse industrial cutting needs with various tool options.',
                icon: 'media'
            },
            {
                title: 'X Axis Two Motors',
                description: 'Dual motors with balance tech ensure stable, accurate transmission for enhanced precision.',
                icon: 'durability'
            },
            {
                title: 'Large Format Capability',
                description: 'Designed for high-volume production and precision work on complex materials.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Vacuum Pump', value: '5×6kW (7.5kW) | 12×9kW (7.5kW) | 5×14kW (7.5kW)' },
            { label: 'Cutting Accuracy', value: '0.1mm' },
            { label: 'Maximum Cutting Speed', value: '1500mm/s' },
            { label: 'Interface', value: 'Serial Port' },
            { label: 'Suction Media', value: 'Vacuum System' },
            { label: 'Beam', value: 'Single Beam | Dual Beams (Optional)' },
            { label: 'Data Format', value: 'DXF HPGL CF PDF DXP PLT, Vector file format Ai,PDF' },
            { label: 'Maximum Cutting Thickness', value: '50mm' },
            { label: 'Operation Environment', value: 'Temperature 0°C-40°C | Humidity 25%-80%RH' },
            { label: 'Power', value: 'Servo Motor/PLC/Computer+22"monitor/vaccum' }
        ],
        applications: [
            'Furniture & Textile Manufacturing',
            'Sign & Advertising Production',
            'Packaging Industry',
            'Automobile Upholstery',
            'Leather Goods Manufacturing',
            'Canvas and Fabric Cutting',
            'Composite Materials',
            'Gasket Manufacturing',
            'Carpet and Rug Production',
            'Technical Textiles'
        ],
        advantages: [
            'Precision dual-beam cutting technology for enhanced productivity',
            'High-speed cutting up to 1500mm/s with intelligent EchoMC precision motion control',
            'AKI System with automatic knife setup for accurate depth control',
            'Flexible working area expandable to customer needs',
            'Diversified cutting tools with interchangeable heads',
            'X Axis dual motors with balance technology for stable transmission',
            'Large format capability for high-volume production',
            'High cutting precision of 0.1mm accuracy',
            'Multiple file format support: DXF, HPGL, CF, PDF, DXP, PLT, AI',
            'Suitable for complex materials and precision work applications'
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
            <main className="iecho-tk4s-main">
                {/* Product Hero Section */}
                <section className="iecho-tk4s-hero product-hero">
                    <div className="iecho-tk4s-hero-layout">
                        <div className="iecho-tk4s-hero-left">
                            <h1 className="iecho-tk4s-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="iecho-tk4s-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="iecho-tk4s-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="iecho-tk4s-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="iecho-tk4s-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="iecho-tk4s-hero-stats product-stats">
                                <div className="iecho-tk4s-stat">
                                    <span className="iecho-tk4s-stat-number">1500mm/s</span>
                                    <span className="iecho-tk4s-stat-label">Max Speed</span>
                                </div>
                                <div className="iecho-tk4s-stat">
                                    <span className="iecho-tk4s-stat-number">0.1mm</span>
                                    <span className="iecho-tk4s-stat-label">Precision</span>
                                </div>
                                <div className="iecho-tk4s-stat">
                                    <span className="iecho-tk4s-stat-number">Dual-Beam</span>
                                    <span className="iecho-tk4s-stat-label">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div className="iecho-tk4s-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="iecho-tk4s-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="iecho-tk4s-overview-section">
                    <div className="iecho-tk4s-overview-container">
                        <h2 className="iecho-tk4s-section-title">Product Overview</h2>
                        <p className="iecho-tk4s-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="iecho-tk4s-features-section">
                    <div className="iecho-tk4s-features-container">
                        <div className="iecho-tk4s-features-header">
                            <h2 className="iecho-tk4s-features-title">Key Features</h2>
                            <p className="iecho-tk4s-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="iecho-tk4s-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="iecho-tk4s-feature-card">
                                    <div className="iecho-tk4s-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="iecho-tk4s-feature-title">{feature.title}</h3>
                                    <p className="iecho-tk4s-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="iecho-tk4s-specs-section">
                    <div className="iecho-tk4s-specs-container">
                        <h2 className="iecho-tk4s-section-title">Technical Specifications</h2>
                        <div className="iecho-tk4s-specs-grid">
                            <div className="iecho-tk4s-spec-card">
                                <h3 className="iecho-tk4s-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="iecho-tk4s-spec-item">
                                        <span className="iecho-tk4s-spec-label">{spec.label}:</span>
                                        <span className="iecho-tk4s-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="iecho-tk4s-spec-card">
                                <h3 className="iecho-tk4s-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="iecho-tk4s-spec-item">
                                        <span className="iecho-tk4s-spec-label">{spec.label}:</span>
                                        <span className="iecho-tk4s-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="iecho-tk4s-applications-section">
                    <div className="iecho-tk4s-applications-container">
                        <div className="iecho-tk4s-applications-grid">
                            <div className="iecho-tk4s-applications-content">
                                <h2 className="iecho-tk4s-section-title">Applications</h2>
                                <p className="iecho-tk4s-applications-subtitle">
                                    Versatile cutting solutions for professional applications
                                </p>
                                <ul className="iecho-tk4s-applications-list">
                                    {machineDetails.applications.map((application, index) => (
                                        <li key={index} className="iecho-tk4s-application-item">
                                            <svg className="iecho-tk4s-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <section className="iecho-tk4s-advantages-section">
                    <div className="iecho-tk4s-advantages-container">
                        <h2 className="iecho-tk4s-section-title">Why Choose iEcho BK3?</h2>
                        <div className="iecho-tk4s-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="iecho-tk4s-advantage-item">
                                    <div className="iecho-tk4s-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="iecho-tk4s-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="iecho-tk4s-modal-overlay" onClick={closeInquiryModal}>
                    <div className="iecho-tk4s-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="iecho-tk4s-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="iecho-tk4s-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="iecho-tk4s-inquiry-form">
                            <div className="iecho-tk4s-form-row">
                                <div className="iecho-tk4s-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="iecho-tk4s-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="iecho-tk4s-form-row">
                                <div className="iecho-tk4s-form-group">
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
                                <div className="iecho-tk4s-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="iecho-tk4s-phone-input">
                                        <select name="countryCode" className="iecho-tk4s-country-select">
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

                            <div className="iecho-tk4s-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="iecho-tk4s-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your BK3 cutting system requirements and any specific questions about this high-speed digital cutting machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="iecho-tk4s-form-actions">
                                <button type="submit" className="iecho-tk4s-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-tk4s-btn-secondary">
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
