"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './iecho-pk.css';

export default function IEchoPK() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/PK1209 (1).png');
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
        name: 'iEcho PK',
        model: 'PK Automatic Intelligent Cutting System',
        images: [
            '/PK1209 (1).png',
            '/PK1209 (1).png', // Add more images if available
        ],
        shortDescription: 'PRECISION CUTTING, PROFESSIONAL PERFORMANCE - Professional vinyl cutting plotter with advanced servo motor system and superior cutting accuracy for signage and graphics applications.',
        detailedDescription: 'The iEcho PK Automatic Intelligent Cutting System adopts fully automatic vacuum chuck and automatic lifting and feeding platform. Equipped with various tools, it can quickly and precisely make through cutting, half cutting, creasing and marking. Perfect for sample making and short-run customized production for Signs, printing and Packaging industries. Cost-effective smart equipment that meets all creative processing needs.',
        features: [
            {
                title: 'Integrated Design',
                description: 'Machine adopts an integral welding frame, ergonomically designed and small size. The smallest model occupies only 2 sqm. Wheels make it easy to move around.',
                icon: 'precision'
            },
            {
                title: 'Automatic Loading Device',
                description: 'Can automatically load material sheets on the cutting table continuously, material stack up to 120mm (400pcs card board of 250g).',
                icon: 'accuracy'
            },
            {
                title: 'One Click Start',
                description: 'Simple one-click operation for automated cutting processes, making it easy to operate for users of all skill levels.',
                icon: 'speed'
            },
            {
                title: 'Built-in Computer',
                description: 'Specialized built-in computer eliminates need for external computer setup. Can operate in Wi-Fi mode for smart and convenient operation.',
                icon: 'media'
            },
            {
                title: 'High Precision Vision Registration System (CCD)',
                description: 'High definition CCD camera for automatic and accurate registration contour cutting of printed materials, avoiding manual positioning errors.',
                icon: 'durability'
            },
            {
                title: 'QR Code Scanning System',
                description: 'Software supports QR code scanning to retrieve cutting files automatically, enabling continuous cutting of different materials and patterns.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Machine Models', value: 'PK0604, PK0705, PK0604 Plus, PK0705 Plus' },
            { label: 'Cutting Width', value: 'up to 1350mm' },
            { label: 'Speed', value: 'up to 1200mm/s' },
            { label: 'Force', value: 'up to 500g' },
            { label: 'Precision', value: '±0.1mm' },
            { label: 'Cutting Area (PK0604)', value: '600mm x 400mm' },
            { label: 'Cutting Area (PK0705)', value: '750mm x 530mm' },
            { label: 'Flooring Area', value: '2350mm x 900mm/1000mm x 1150mm' },
            { label: 'Voltage', value: '220V±10% 50HZ' },
            { label: 'Power', value: '4KW' },
            { label: 'PK Standard Tools', value: 'Universal Cutting Tool, Creasing Wheel, Kiss Cut Tool' },
            { label: 'PK Plus Tools', value: 'Oscillating Tool, Universal Cutting Tool, Creasing Wheel, Kiss Cut Tool' },
            { label: 'PK Materials', value: 'Car Sticker, Sticker, Card Paper, PP Paper, Reflective Material' },
            { label: 'PK Plus Materials', value: 'KT Board, PP Paper, Foam Board, Sticker, Reflective Material, Card Board, Plastic Sheet, Corrugated Board, Grey Board, Corrugated Plastic, ABS Board, Magnetic Sticker' },
            { label: 'PK Cutting Thickness', value: '<2mm' },
            { label: 'PK Plus Cutting Thickness', value: '<6mm' },
            { label: 'Media System', value: 'Vacuum System' },
            { label: 'Data Formats', value: 'PLT, DXF, HPGL, PDF, EPS' }
        ],
        applications: [
            'Sample Making for Signs Industry',
            'Short-Run Customized Production',
            'Printing Industry Applications',
            'Packaging Industry Processing',
            'Through Cutting & Half Cutting',
            'Creasing & Marking Operations',
            'Printed Materials Registration Cutting',
            'Roll Materials Processing (with feeding system)',
            'Labels & Tags Production',
            'Creative Processing Applications'
        ],
        advantages: [
            'Compact design - smallest model occupies only 2 sqm',
            'Automatic material loading up to 120mm stack height',
            'Built-in computer eliminates external setup requirements',
            'Wi-Fi operation mode for smart connectivity',
            'High precision CCD vision registration system',
            'QR code scanning for automated file retrieval',
            'Multiple tool options for versatile cutting operations',
            'Vacuum system for secure material holding',
            'Cost-effective solution for sample making',
            'Suitable for both standard and plus model configurations'
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
            <main className="iecho-pk-main">
                {/* Product Hero Section */}
                <section className="iecho-pk-hero product-hero">
                    <div className="iecho-pk-hero-layout">
                        <div className="iecho-pk-hero-left">
                            <h1 className="iecho-pk-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="iecho-pk-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="iecho-pk-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="iecho-pk-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="iecho-pk-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="iecho-pk-hero-stats product-stats">
                                <div className="iecho-pk-stat">
                                    <span className="iecho-pk-stat-number">1350mm</span>
                                    <span className="iecho-pk-stat-label">Max Width</span>
                                </div>
                                <div className="iecho-pk-stat">
                                    <span className="iecho-pk-stat-number">1200mm/s</span>
                                    <span className="iecho-pk-stat-label">Max Speed</span>
                                </div>
                                <div className="iecho-pk-stat">
                                    <span className="iecho-pk-stat-number">±0.1mm</span>
                                    <span className="iecho-pk-stat-label">Precision</span>
                                </div>
                            </div>
                        </div>
                        <div className="iecho-pk-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="iecho-pk-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="iecho-pk-overview-section">
                    <div className="iecho-pk-overview-container">
                        <h2 className="iecho-pk-section-title">Product Overview</h2>
                        <p className="iecho-pk-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="iecho-pk-features-section">
                    <div className="iecho-pk-features-container">
                        <div className="iecho-pk-features-header">
                            <h2 className="iecho-pk-features-title">Key Features</h2>
                            <p className="iecho-pk-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="iecho-pk-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="iecho-pk-feature-card">
                                    <div className="iecho-pk-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="iecho-pk-feature-title">{feature.title}</h3>
                                    <p className="iecho-pk-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="iecho-pk-specs-section">
                    <div className="iecho-pk-specs-container">
                        <h2 className="iecho-pk-section-title">Technical Specifications</h2>
                        <p className="iecho-pk-section-subtitle">
                            Complete technical details for iECHO PK cutting plotter
                        </p>
                        <div className="iecho-pk-specs-grid">
                            <div className="iecho-pk-spec-card">
                                <h3 className="iecho-pk-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="iecho-pk-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="iecho-pk-spec-item">
                                            <div className="iecho-pk-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="iecho-pk-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="iecho-pk-applications-section">
                    <div className="iecho-pk-applications-container">
                        <h2 className="iecho-pk-section-title">Applications</h2>
                        <p className="iecho-pk-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="iecho-pk-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="iecho-pk-applications-image-grid">
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sample Making for Signs Industry" />
                                    <p>Sample Making for Signs Industry</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Short-Run Customized Production" />
                                    <p>Short-Run Customized Production</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Printing Industry Applications" />
                                    <p>Printing Industry Applications</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Packaging Industry Processing" />
                                    <p>Packaging Industry Processing</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Through Cutting & Half Cutting" />
                                    <p>Through Cutting & Half Cutting</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Creasing & Marking Operations" />
                                    <p>Creasing & Marking Operations</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Registration Cutting" />
                                    <p>Registration Cutting</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Labels & Tags Production" />
                                    <p>Labels & Tags Production</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Creative Processing" />
                                    <p>Creative Processing</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Roll Materials Processing" />
                                    <p>Roll Materials Processing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="iecho-pk-advantages-section">
                    <div className="iecho-pk-advantages-container">
                        <h2 className="iecho-pk-section-title">Why Choose iEcho PK?</h2>
                        <div className="iecho-pk-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="iecho-pk-advantage-item">
                                    <svg className="iecho-pk-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="iecho-pk-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="iecho-pk-modal-overlay" onClick={closeInquiryModal}>
                    <div className="iecho-pk-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="iecho-pk-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="iecho-pk-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="iecho-pk-inquiry-form">
                            <div className="iecho-pk-form-row">
                                <div className="iecho-pk-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="iecho-pk-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="iecho-pk-form-row">
                                <div className="iecho-pk-form-group">
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
                                <div className="iecho-pk-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="iecho-pk-phone-input">
                                        <select name="countryCode" className="iecho-pk-country-select">
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

                            <div className="iecho-pk-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="iecho-pk-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="iecho-pk-form-actions">
                                <button type="submit" className="iecho-pk-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-pk-btn-secondary">
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