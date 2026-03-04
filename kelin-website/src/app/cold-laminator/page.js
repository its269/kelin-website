"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './cold-laminator.css';

export default function ColdLaminator() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laminator/Cold Laminator (1).png');
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
        name: 'COLD LAMINATOR',
        model: 'COLD LAMINATING MACHINE',
        images: [
            '/laminator/Cold Laminator (1).png',
            '/laminator/Cold Laminator (1).png',
        ],
        shortDescription: 'PRESSURE-SENSITIVE ADHESIVE PERFORMANCE - Cold laminators use a pressure-sensitive adhesive that does not need to be activated by heat, but they still must peel the sheet of lamination together.',
        detailedDescription: 'Our wide-format laminators - cold, flatbed, and auto warm - are built to handle everything from soft prints to hard boards with speed, accuracy, and ease. Cold laminators use a pressure-sensitive adhesive that does not need to be activated by heat, ensuring safe and efficient lamination for various materials.',
        features: [
            {
                title: 'Pressure-Sensitive Performance',
                description: 'Cold laminators use a pressure-sensitive adhesive that does not need to be activated by heat, but they still must peel the sheet of lamination together.',
                icon: 'precision'
            },
            {
                title: 'Versatile Application',
                description: 'Built to handle everything from soft prints to hard boards with speed, accuracy, and ease.',
                icon: 'accuracy'
            },
            {
                title: 'Wide Format Capability',
                description: 'Designed for wide-format lamination projects, ensuring professional results for large materials.',
                icon: 'speed'
            },
            {
                title: 'Safe Operation',
                description: 'No heat activation required, making it safe for heat-sensitive materials and reducing energy consumption.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Lamination Type', value: 'Cold Lamination' },
            { label: 'Adhesive Type', value: 'Pressure-Sensitive' },
            { label: 'Temperature', value: 'Room Temperature (No Heat)' },
            { label: 'Material Compatibility', value: 'Soft Prints to Hard Boards' },
            { label: 'Format', value: 'Wide Format' },
            { label: 'Operation', value: 'Pressure-Based Activation' }
        ],
        applications: [
            'Photo Lamination',
            'Print Protection',
            'Poster Lamination',
            'Document Preservation',
            'Signage Production',
            'Menu Boards',
            'Educational Materials',
            'Point of Sale Displays',
            'Exhibition Graphics',
            'Heat-Sensitive Material Protection',
            'Quick Turnaround Projects',
            'Professional Presentation Materials'
        ],
        advantages: [
            'No heat required - safe for all materials',
            'Prevents damage to heat-sensitive prints and photos',
            'Adjustable pressure for different material types',
            'Professional bubble-free results',
            'Energy-efficient operation',
            'Quick and easy to use',
            'No warm-up time required',
            'Versatile film compatibility',
            'Ideal for high-volume production',
            'Consistent lamination quality',
            'Minimal maintenance requirements',
            'Cost-effective laminating solution'
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
            <main className="cold-laminator-main">
                {/* Product Hero Section */}
                <section className="cold-laminator-hero product-hero">
                    <div className="cold-laminator-hero-layout">
                        <div className="cold-laminator-hero-left">
                            <h1 className="cold-laminator-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="cold-laminator-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="cold-laminator-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="cold-laminator-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="cold-laminator-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="cold-laminator-hero-stats product-stats">
                                <div className="cold-laminator-stat">
                                    <span className="cold-laminator-stat-number">Cold</span>
                                    <span className="cold-laminator-stat-label">No Heat</span>
                                </div>
                                <div className="cold-laminator-stat">
                                    <span className="cold-laminator-stat-number">Adjustable</span>
                                    <span className="cold-laminator-stat-label">Pressure</span>
                                </div>
                                <div className="cold-laminator-stat">
                                    <span className="cold-laminator-stat-number">Versatile</span>
                                    <span className="cold-laminator-stat-label">Materials</span>
                                </div>
                            </div>
                        </div>
                        <div className="cold-laminator-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="cold-laminator-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="cold-laminator-overview-section">
                    <div className="cold-laminator-overview-container">
                        <h2 className="cold-laminator-section-title">Product Overview</h2>
                        <p className="cold-laminator-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="cold-laminator-features-section">
                    <div className="cold-laminator-features-container">
                        <div className="cold-laminator-features-header">
                            <h2 className="cold-laminator-features-title">Key Features</h2>
                            <p className="cold-laminator-features-subtitle">
                                Professional cold laminating technology for heat-sensitive materials
                            </p>
                        </div>

                        <div className="cold-laminator-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="cold-laminator-feature-card">
                                    <div className="cold-laminator-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="cold-laminator-feature-title">{feature.title}</h3>
                                    <p className="cold-laminator-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="cold-laminator-specs-section">
                    <div className="cold-laminator-specs-container">
                        <h2 className="cold-laminator-section-title">Technical Specifications</h2>
                        <p className="cold-laminator-section-subtitle">
                            Complete technical details for Cold Laminator
                        </p>
                        <div className="cold-laminator-specs-grid">
                            <div className="cold-laminator-spec-card">
                                <h3 className="cold-laminator-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="cold-laminator-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="cold-laminator-spec-item">
                                            <div className="cold-laminator-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="cold-laminator-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="cold-laminator-applications-section">
                    <div className="cold-laminator-applications-container">
                        <h2 className="cold-laminator-section-title">Applications</h2>
                        <p className="cold-laminator-applications-subtitle">
                            Professional cold laminating solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="cold-laminator-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="cold-laminator-applications-image-grid">
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Photo Lamination" />
                                    <p>Photo Lamination</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Print Protection" />
                                    <p>Print Protection</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Poster Lamination" />
                                    <p>Poster Lamination</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Document Preservation" />
                                    <p>Document Preservation</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Signage Production" />
                                    <p>Signage Production</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Menu Boards" />
                                    <p>Menu Boards</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Educational Materials" />
                                    <p>Educational Materials</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Point of Sale Displays" />
                                    <p>Point of Sale Displays</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Heat-Sensitive Material Protection" />
                                    <p>Heat-Sensitive Material Protection</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Quick Turnaround Projects" />
                                    <p>Quick Turnaround Projects</p>
                                </div>
                                <div className="cold-laminator-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Professional Presentation Materials" />
                                    <p>Professional Presentation Materials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="cold-laminator-advantages-section">
                    <div className="cold-laminator-advantages-container">
                        <h2 className="cold-laminator-section-title">Why Choose Cold Laminator?</h2>
                        <div className="cold-laminator-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="cold-laminator-advantage-item">
                                    <div className="cold-laminator-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="cold-laminator-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="cold-laminator-modal-overlay" onClick={closeInquiryModal}>
                    <div className="cold-laminator-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="cold-laminator-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="cold-laminator-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="cold-laminator-inquiry-form">
                            <div className="cold-laminator-form-row">
                                <div className="cold-laminator-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="cold-laminator-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="cold-laminator-form-row">
                                <div className="cold-laminator-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="cold-laminator-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="cold-laminator-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="cold-laminator-phone-input">
                                    <select className="cold-laminator-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="cold-laminator-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laminating needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="cold-laminator-form-actions">
                                <button type="submit" className="cold-laminator-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="cold-laminator-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
