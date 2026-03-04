"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './fulei-bu-1600e.css';

export default function FuleiBU1600EWarmAutoLaminator() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laminator/Fulei BU-1600E Warm Auto Laminator (1).png');
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
        name: 'AUTO WARM LAMINATOR',
        model: 'FULEI AUTO WARM LAMINATOR',
        images: [
            '/laminator/Fulei BU-1600E Warm Auto Laminator (1).png',
            '/laminator/Fulei BU-1600E Warm Auto Laminator (1).png',
        ],
        shortDescription: 'EVEN HEAT AND EASY LEVEL FILM - E Warm series is very level film, you can let it be warm same image with you get better film look, even better the accurate CNC metal cutting program precise align laminate and quality finish ease.',
        detailedDescription: 'Our wide-format laminators - cold, flatbed, and auto warm - are built to handle everything from soft prints to hard boards with speed, accuracy, and ease. The Auto Warm Laminator features even heat distribution and easy level film operation with precise CNC metal cutting program for accurate alignment and quality finish.',
        features: [
            {
                title: 'Even Heat Distribution',
                description: 'E Warm series provides very level film with consistent heat distribution for optimal lamination results.',
                icon: 'precision'
            },
            {
                title: 'CNC Precision',
                description: 'Accurate CNC metal cutting program ensures precise alignment for professional laminate quality and finish ease.',
                icon: 'accuracy'
            },
            {
                title: 'Versatile Speed',
                description: 'Variable working speed of 0-6 m/min allows for flexible operation based on project requirements.',
                icon: 'speed'
            },
            {
                title: 'Wide Format Capability',
                description: 'Built to handle everything from soft prints to hard boards with speed, accuracy, and ease.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Max Working Width', value: '165 cm' },
            { label: 'Max. Nip Opening', value: '35 mm' },
            { label: 'Roller Diameter', value: '12 cm' },
            { label: 'Bottom Roller Material', value: 'Natural Rubber' },
            { label: 'Variable Working Speed', value: '0-6m/min' },
            { label: 'Max. Heat Assist. Temp.', value: '60°C' },
            { label: 'Top Roller Material', value: 'Silicone Rubber' },
            { label: 'Power', value: 'AC110V ~230V 50/60Hz' },
            { label: 'Power Consumption', value: '1500W' },
            { label: 'Power Requirement', value: 'AC110V/ 50-60Hz' },
            { label: 'Machine Size', value: '210*60*130 cm' },
            { label: 'Shipping Dimensions', value: '215*77*75 cm' }
        ],
        applications: [
            'Commercial Print Lamination',
            'High-Volume Document Protection',
            'Menu and Card Lamination',
            'Photo Lamination Services',
            'Poster and Banner Lamination',
            'Educational Material Production',
            'ID Card and Badge Lamination',
            'Packaging Materials',
            'Point of Sale Materials',
            'Marketing Collateral Protection',
            'Certificate and Award Lamination',
            'Professional Print Finishing'
        ],
        advantages: [
            'Fully automatic operation for hands-free processing',
            'Warm lamination technology for optimal adhesion',
            'High-speed processing for increased productivity',
            'Consistent bubble-free results',
            'Energy-efficient warm temperature operation',
            'Reduced risk of heat damage compared to hot laminators',
            'Wide film compatibility',
            'Ideal for high-volume production',
            'Professional commercial-grade quality',
            'Easy operation and minimal training required',
            'Reliable performance for continuous operation',
            'Cost-effective automated laminating solution'
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
            <main className="fulei-1600e-main">
                {/* Product Hero Section */}
                <section className="fulei-1600e-hero product-hero">
                    <div className="fulei-1600e-hero-layout">
                        <div className="fulei-1600e-hero-left">
                            <h1 className="fulei-1600e-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="fulei-1600e-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="fulei-1600e-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="fulei-1600e-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="fulei-1600e-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="fulei-1600e-hero-stats product-stats">
                                <div className="fulei-1600e-stat">
                                    <span className="fulei-1600e-stat-number">Automatic</span>
                                    <span className="fulei-1600e-stat-label">Operation</span>
                                </div>
                                <div className="fulei-1600e-stat">
                                    <span className="fulei-1600e-stat-number">Warm</span>
                                    <span className="fulei-1600e-stat-label">Technology</span>
                                </div>
                                <div className="fulei-1600e-stat">
                                    <span className="fulei-1600e-stat-number">High-Speed</span>
                                    <span className="fulei-1600e-stat-label">Processing</span>
                                </div>
                            </div>
                        </div>
                        <div className="fulei-1600e-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="fulei-1600e-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="fulei-1600e-overview-section">
                    <div className="fulei-1600e-overview-container">
                        <h2 className="fulei-1600e-section-title">Product Overview</h2>
                        <p className="fulei-1600e-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="fulei-1600e-features-section">
                    <div className="fulei-1600e-features-container">
                        <div className="fulei-1600e-features-header">
                            <h2 className="fulei-1600e-features-title">Key Features</h2>
                            <p className="fulei-1600e-features-subtitle">
                                Professional automatic warm laminating technology for high-volume production
                            </p>
                        </div>

                        <div className="fulei-1600e-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="fulei-1600e-feature-card">
                                    <div className="fulei-1600e-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="fulei-1600e-feature-title">{feature.title}</h3>
                                    <p className="fulei-1600e-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="fulei-1600e-specs-section">
                    <div className="fulei-1600e-specs-container">
                        <h2 className="fulei-1600e-section-title">Technical Specifications</h2>
                        <p className="fulei-1600e-section-subtitle">
                            Complete technical details for Fulei BU-1600E Warm Auto Laminator
                        </p>
                        <div className="fulei-1600e-specs-grid">
                            <div className="fulei-1600e-spec-card">
                                <h3 className="fulei-1600e-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="fulei-1600e-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="fulei-1600e-spec-item">
                                            <div className="fulei-1600e-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="fulei-1600e-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="fulei-1600e-applications-section">
                    <div className="fulei-1600e-applications-container">
                        <h2 className="fulei-1600e-section-title">Applications</h2>
                        <p className="fulei-1600e-applications-subtitle">
                            Professional automatic warm laminating solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="fulei-1600e-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="fulei-1600e-applications-image-grid">
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Commercial Print Lamination" />
                                    <p>Commercial Print Lamination</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="High-Volume Document Protection" />
                                    <p>High-Volume Document Protection</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Menu and Card Lamination" />
                                    <p>Menu and Card Lamination</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Photo Lamination Services" />
                                    <p>Photo Lamination Services</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Poster and Banner Lamination" />
                                    <p>Poster and Banner Lamination</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Educational Material Production" />
                                    <p>Educational Material Production</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="ID Card and Badge Lamination" />
                                    <p>ID Card and Badge Lamination</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Packaging Materials" />
                                    <p>Packaging Materials</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Point of Sale Materials" />
                                    <p>Point of Sale Materials</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Marketing Collateral Protection" />
                                    <p>Marketing Collateral Protection</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Certificate and Award Lamination" />
                                    <p>Certificate and Award Lamination</p>
                                </div>
                                <div className="fulei-1600e-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Professional Print Finishing" />
                                    <p>Professional Print Finishing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="fulei-1600e-advantages-section">
                    <div className="fulei-1600e-advantages-container">
                        <h2 className="fulei-1600e-section-title">Why Choose Fulei BU-1600E?</h2>
                        <div className="fulei-1600e-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="fulei-1600e-advantage-item">
                                    <div className="fulei-1600e-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="fulei-1600e-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="fulei-1600e-modal-overlay" onClick={closeInquiryModal}>
                    <div className="fulei-1600e-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="fulei-1600e-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="fulei-1600e-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="fulei-1600e-inquiry-form">
                            <div className="fulei-1600e-form-row">
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="fulei-1600e-form-row">
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="fulei-1600e-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="fulei-1600e-phone-input">
                                    <select className="fulei-1600e-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="fulei-1600e-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laminating needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="fulei-1600e-form-actions">
                                <button type="submit" className="fulei-1600e-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="fulei-1600e-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
