"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './k-sign-desktop-laser-marking.css';

export default function KSignDesktopLaserMarking() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/K-sign_Desktop Laser Marking.png');
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
        name: 'K-Sign Desktop Laser Marking',
        model: 'LASER MARKING MACHINE',
        images: [
            '/laser-machines/K-sign_Desktop Laser Marking.png',
            '/laser-machines/K-sign_Desktop Laser Marking.png',
        ],
        shortDescription: 'Instantly increase production with reliable offline engraving function - Efficiency by 5-10 times. No need for a professional marking technician, learn as fast as you can within 10 minutes. Available with rotary for cylindrical marking.',
        detailedDescription: 'K-Sign Laser Marking Machine with reliable offline engraving function delivers efficiency 5-10 times faster than traditional methods. No professional marking technician needed - learn as fast as you can within 10 minutes. Features high-definition field mirror for precise results, high-speed galvanometer with outstanding speed marking, extended optical path with stable space and enhanced beam, and beam height adjuster aligned with adjustable height control. Easily handle various materials including Cold, silver, copper, iron, stainless steel, aluminum alloy, hard alloy, nylon, and hard plastics. Perfect for electroplating, ABS, PVC, PES (engineering plastics, hard plastics).',
        features: [
            {
                title: 'High-Definition Field Mirror',
                description: 'High-repellent ultra-high-resolution imports, long range lon for precise and clear marking results.',
                icon: 'mirror'
            },
            {
                title: 'High-Speed Galvanometer',
                description: 'High-speed digital data operation with outstanding speed marking and stable output.',
                icon: 'speed'
            },
            {
                title: 'Extended Optical Path',
                description: 'Extended laser optical path with stable space and enhanced beam for consistent performance.',
                icon: 'optical'
            },
            {
                title: 'Beam Height Adjuster',
                description: 'Align beam with adjustable height control for precise marking on various object sizes.',
                icon: 'adjuster'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'ML20/ML30 or with ROTARY' },
            { label: 'Laser', value: 'Fiber Laser' },
            { label: 'Marking Area', value: '110mm×110mm' },
            { label: 'Minimum Format Text', value: '0.2mm-0.5mm' },
            { label: 'Laser Power', value: '20W / 30W' },
            { label: 'Overall Power', value: '<500W' },
            { label: 'Laser Speed', value: '0-5000mm/s' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Machine Size', value: '62×35×98cm' },
            { label: 'Weight', value: 'N.W28kg' }
        ],
        applications: [
            'Cold and silver marking',
            'Copper materials',
            'Iron and stainless steel',
            'Aluminum alloy marking',
            'Hard alloy materials',
            'Nylon products',
            'Hard plastics',
            'Electroplating materials',
            'ABS plastics',
            'PVC materials',
            'PES engineering plastics',
            'Product identification'
        ],
        advantages: [
            '5-10 times efficiency increase',
            'No professional technician needed',
            'Learn within 10 minutes',
            'Reliable offline engraving',
            'High-definition field mirror',
            'High-speed galvanometer',
            'Extended optical path',
            'Adjustable beam height',
            'Available with rotary attachment',
            'Wide material compatibility',
            '110mm×110mm marking area',
            'Compact 62×35×98cm size'
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
            <main className="ksign-marking-main">
                {/* Product Hero Section */}
                <section className="ksign-marking-hero product-hero">
                    <div className="ksign-marking-hero-layout">
                        <div className="ksign-marking-hero-left">
                            <h1 className="ksign-marking-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="ksign-marking-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="ksign-marking-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="ksign-marking-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="ksign-marking-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="ksign-marking-hero-stats product-stats">
                                <div className="ksign-marking-stat">
                                    <span className="ksign-marking-stat-number">5-10x</span>
                                    <span className="ksign-marking-stat-label">Faster</span>
                                </div>
                                <div className="ksign-marking-stat">
                                    <span className="ksign-marking-stat-number">30W</span>
                                    <span className="ksign-marking-stat-label">Power</span>
                                </div>
                                <div className="ksign-marking-stat">
                                    <span className="ksign-marking-stat-number">10min</span>
                                    <span className="ksign-marking-stat-label">Learn</span>
                                </div>
                            </div>
                        </div>
                        <div className="ksign-marking-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="ksign-marking-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="ksign-marking-overview-section">
                    <div className="ksign-marking-overview-container">
                        <h2 className="ksign-marking-section-title">Product Overview</h2>
                        <p className="ksign-marking-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="ksign-marking-features-section">
                    <div className="ksign-marking-features-container">
                        <div className="ksign-marking-features-header">
                            <h2 className="ksign-marking-features-title">Key Features</h2>
                            <p className="ksign-marking-features-subtitle">
                                Instantly increase production with offline engraving
                            </p>
                        </div>

                        <div className="ksign-marking-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="ksign-marking-feature-card">
                                    <div className="ksign-marking-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="ksign-marking-feature-title">{feature.title}</h3>
                                    <p className="ksign-marking-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="ksign-marking-specs-section">
                    <div className="ksign-marking-specs-container">
                        <h2 className="ksign-marking-section-title">Technical Specifications</h2>
                        <p className="ksign-marking-section-subtitle">
                            Complete technical details for K-Sign Desktop Laser Marking Machine
                        </p>
                        <div className="ksign-marking-specs-grid">
                            <div className="ksign-marking-spec-card">
                                <h3 className="ksign-marking-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="ksign-marking-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="ksign-marking-spec-item">
                                            <div className="ksign-marking-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="ksign-marking-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="ksign-marking-applications-section">
                    <div className="ksign-marking-applications-container">
                        <h2 className="ksign-marking-section-title">Application Materials</h2>
                        <p className="ksign-marking-applications-subtitle">
                            Professional laser marking for metals, plastics, and various materials
                        </p>
                        <div
                            ref={scrollRef}
                            className="ksign-marking-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="ksign-marking-applications-image-grid">
                                {machineDetails.applications.map((app, index) => (
                                    <div key={index} className="ksign-marking-application-image-item">
                                        <div className="ksign-marking-application-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                                <path d="m9 11 3 3L22 4" />
                                            </svg>
                                        </div>
                                        <p>{app}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="ksign-marking-advantages-section">
                    <div className="ksign-marking-advantages-container">
                        <h2 className="ksign-marking-section-title">Why Choose K-Sign Desktop Laser Marking Machine?</h2>
                        <div className="ksign-marking-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="ksign-marking-advantage-item">
                                    <div className="ksign-marking-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="ksign-marking-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="ksign-marking-modal-overlay" onClick={closeInquiryModal}>
                    <div className="ksign-marking-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="ksign-marking-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="ksign-marking-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="ksign-marking-inquiry-form">
                            <div className="ksign-marking-form-row">
                                <div className="ksign-marking-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="ksign-marking-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="ksign-marking-form-row">
                                <div className="ksign-marking-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="ksign-marking-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="ksign-marking-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="ksign-marking-phone-input">
                                    <select className="ksign-marking-country-select" name="countryCode" defaultValue="+63">
                                        <option value="+63">+63</option>
                                        <option value="+1">+1</option>
                                        <option value="+86">+86</option>
                                        <option value="+81">+81</option>
                                        <option value="+82">+82</option>
                                        <option value="+65">+65</option>
                                        <option value="+60">+60</option>
                                        <option value="+66">+66</option>
                                        <option value="+84">+84</option>
                                        <option value="+62">+62</option>
                                        <option value="+91">+91</option>
                                        <option value="+44">+44</option>
                                        <option value="+49">+49</option>
                                        <option value="+33">+33</option>
                                        <option value="+39">+39</option>
                                        <option value="+34">+34</option>
                                        <option value="+61">+61</option>
                                        <option value="+64">+64</option>
                                    </select>
                                    <input type="tel" name="phone" placeholder="Enter phone number" required />
                                </div>
                            </div>

                            <div className="ksign-marking-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laser cutting needs, materials, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="ksign-marking-form-actions">
                                <button type="submit" className="ksign-marking-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="ksign-marking-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
