"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './reci-handheld-fiber-laser-welding.css';

export default function ReciHandheldFiberLaserWelding() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/Reci Handheld Fiber Laser Welding Machine R-A80 800W 1.png');
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
        name: 'Reci Handheld Fiber Laser Welding R-A80 800W',
        model: 'HANDHELD FIBER LASER WELDING MACHINE',
        images: [
            '/laser-machines/Reci Handheld Fiber Laser Welding Machine R-A80 800W 1.png',
            '/laser-machines/Reci Handheld Fiber Laser Welding Machine R-A80 800W 1.png',
        ],
        shortDescription: 'Air-cooled handheld laser welder - High welding efficiency 10X FASTER than TIG type. RECI Laser Air-Cooled Handheld Welder: A compact (37-45kg), integrated welding and wire feeding system with a quiet, multi-level speed control. Experience easy, efficient, and precise welding without an external chiller. Based in Manila, achieve superior results with this innovative solution.',
        detailedDescription: 'RECI Laser Air-Cooled Handheld Welder: A compact (37-45kg), integrated welding and wire feeding system with a quiet, multi-level speed control. Experience easy, efficient, and precise welding without an external chiller. Based in Manila, achieve superior results with this innovative solution. Available in three models: R-A80 800W, R-A150 1500W, and R-A200 2000W. Features optimized airflow with air-cooled engine for maximum efficiency, ultimate efficiency & precision for a quality and seamless weld, silent precision welding with reduced vibration for absolute safety, and compact air-cooled integrated welding system. Max welding thickness from 2mm to 4mm depending on model. Quiet operation with low noise during operation.',
        features: [
            {
                title: 'Optimized Airflow',
                description: 'Air-cooled engine for maximum efficiency, targeted air circulation, with rapid cooling.',
                icon: 'airflow'
            },
            {
                title: 'Ultimate Efficiency & Precision',
                description: 'Handling speed and rapid data processing for a quality and seamless weld.',
                icon: 'precision'
            },
            {
                title: 'Silent Precision Welding',
                description: 'High efficiency with embedded turntable, reduced vibration for absolute safety through secure welding.',
                icon: 'silent'
            },
            {
                title: 'Compact Air-Cooled Integrated Welding',
                description: 'A compact 37-45kg air-cooled system with multi-level speed change control for varied applications with uncompromising quality.',
                icon: 'compact'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'R-A80 800W / R-A150 1500W / R-A200 2000W' },
            { label: 'Cooling System', value: 'Air-cooled type (No extra chiller required)' },
            { label: 'Type', value: 'Air-cooled Handheld Laser Welder' },
            { label: 'Noise Level', value: 'Quiet operation, Low noise during operation' },
            { label: 'Noise Reduction Technology', value: 'Embedded turntable, Multi-level speed change' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Weight', value: 'G.W 37KG / 45KG' },
            { label: 'Max Welding Thickness (mm)', value: '2mm / 3mm / 4mm' }
        ],
        applications: [
            'Hardware-Door and Window welding',
            'Transportation',
            'Advertisement',
            'Mechanical',
            'Hardware-Aluminum Alloy',
            'Metal Fabrication',
            'Automotive Parts',
            'Construction',
            'Industrial Manufacturing',
            'Sheet Metal Work',
            'Machinery Repair',
            'Custom Metal Projects'
        ],
        advantages: [
            'High-speed cutting up to 6000mm/s',
            'Air-cooled system - no external chiller',
            '150-180W powerful laser',
            'Intelligent vision system',
            'Automatic material identification',
            'Canon camera for precision',
            'Water cooling system',
            'Multiple image format support',
            'Ultra-precise shape cutting',
            'Arc and complex curve capability',
            'Stepper/Servo motor transmission',
            'Efficient for diverse flexible materials'
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
            <main className="reci-welding-main">
                {/* Product Hero Section */}
                <section className="reci-welding-hero product-hero">
                    <div className="reci-welding-hero-layout">
                        <div className="reci-welding-hero-left">
                            <h1 className="reci-welding-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="reci-welding-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="reci-welding-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="reci-welding-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="reci-welding-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="reci-welding-hero-stats product-stats">
                                <div className="reci-welding-stat">
                                    <span className="reci-welding-stat-number">10X</span>
                                    <span className="reci-welding-stat-label">Faster</span>
                                </div>
                                <div className="reci-welding-stat">
                                    <span className="reci-welding-stat-number">2000W</span>
                                    <span className="reci-welding-stat-label">Power</span>
                                </div>
                                <div className="reci-welding-stat">
                                    <span className="reci-welding-stat-number">37KG</span>
                                    <span className="reci-welding-stat-label">Weight</span>
                                </div>
                            </div>
                        </div>
                        <div className="reci-welding-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="reci-welding-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="reci-welding-overview-section">
                    <div className="reci-welding-overview-container">
                        <h2 className="reci-welding-section-title">Product Overview</h2>
                        <p className="reci-welding-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="reci-welding-features-section">
                    <div className="reci-welding-features-container">
                        <div className="reci-welding-features-header">
                            <h2 className="reci-welding-features-title">Key Features</h2>
                            <p className="reci-welding-features-subtitle">
                                Air-cooled handheld laser welder - 10X faster than TIG type
                            </p>
                        </div>

                        <div className="reci-welding-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="reci-welding-feature-card">
                                    <div className="reci-welding-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="reci-welding-feature-title">{feature.title}</h3>
                                    <p className="reci-welding-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="reci-welding-specs-section">
                    <div className="reci-welding-specs-container">
                        <h2 className="reci-welding-section-title">Technical Specifications</h2>
                        <p className="reci-welding-section-subtitle">
                            Complete technical details for RECI Handheld Fiber Laser Welder
                        </p>
                        <div className="reci-welding-specs-grid">
                            <div className="reci-welding-spec-card">
                                <h3 className="reci-welding-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="reci-welding-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="reci-welding-spec-item">
                                            <div className="reci-welding-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="reci-welding-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="reci-welding-applications-section">
                    <div className="reci-welding-applications-container">
                        <h2 className="reci-welding-section-title">Application Materials</h2>
                        <p className="reci-welding-applications-subtitle">
                            Professional laser welding for hardware, transportation, and industrial applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="reci-welding-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="reci-welding-applications-image-grid">
                                {machineDetails.applications.map((app, index) => (
                                    <div key={index} className="reci-welding-application-image-item">
                                        <div className="reci-welding-application-icon">
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
                <section className="reci-welding-advantages-section">
                    <div className="reci-welding-advantages-container">
                        <h2 className="reci-welding-section-title">Why Choose RECI Handheld Fiber Laser Welder?</h2>
                        <div className="reci-welding-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="reci-welding-advantage-item">
                                    <div className="reci-welding-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="reci-welding-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="reci-welding-modal-overlay" onClick={closeInquiryModal}>
                    <div className="reci-welding-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="reci-welding-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="reci-welding-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="reci-welding-inquiry-form">
                            <div className="reci-welding-form-row">
                                <div className="reci-welding-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="reci-welding-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="reci-welding-form-row">
                                <div className="reci-welding-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="reci-welding-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="reci-welding-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="reci-welding-phone-input">
                                    <select className="reci-welding-country-select" name="countryCode" defaultValue="+63">
                                        <option value="+63">🇵🇭 +63</option>
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+86">🇨🇳 +86</option>
                                        <option value="+81">🇯🇵 +81</option>
                                        <option value="+82">🇰🇷 +82</option>
                                        <option value="+65">🇸🇬 +65</option>
                                        <option value="+60">🇲🇾 +60</option>
                                        <option value="+66">🇹🇭 +66</option>
                                        <option value="+84">VN +84</option>
                                        <option value="+62">ID +62</option>
                                        <option value="+91">IN +91</option>
                                        <option value="+44">UK +44</option>
                                        <option value="+49">DE +49</option>
                                        <option value="+33">FR +33</option>
                                        <option value="+39">IT +39</option>
                                        <option value="+34">ES +34</option>
                                        <option value="+61">AU +61</option>
                                        <option value="+64">NZ +64</option>
                                    </select>
                                    <input type="tel" name="phone" placeholder="Enter phone number" required />
                                </div>
                            </div>

                            <div className="reci-welding-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laser cutting needs, materials, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="reci-welding-form-actions">
                                <button type="submit" className="reci-welding-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="reci-welding-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
