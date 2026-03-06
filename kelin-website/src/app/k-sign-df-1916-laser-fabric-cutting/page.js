"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './k-sign-df-1916-laser-fabric-cutting.css';

export default function KSignDf1916LaserFabricCutting() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/K-Sign DF-1916 Laser Fabric Cutting.png');
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
        name: 'K-Sign DF-1916 Laser Fabric Cutting',
        model: 'LASER MACHINE DF-1916',
        images: [
            '/laser-machines/K-Sign DF-1916 Laser Fabric Cutting.png',
            '/laser-machines/K-Sign DF-1916 Laser Fabric Cutting.png',
        ],
        shortDescription: 'Smart laser precision for fast flexible cutting - DF-1916 150-180W Laser Machine: a high-precision, high-speed CO2 laser cutter with an 1800×2200mm working area. Featuring intelligent vision and automatic identification, it delivers ultra-precise shape cutting for diverse flexible materials from textiles to leather, ensuring efficiency across industries.',
        detailedDescription: 'DF-1916 150-180W Laser Machine: a high-precision, high-speed CO2 laser cutter with an 1800×2200mm working area. Featuring intelligent vision and automatic identification, it delivers ultra-precise shape cutting for diverse flexible materials from textiles to leather, ensuring efficiency across industries. With maximum cutting speed up to 6000mm/s, Canon camera brand for precision, water cooling system, and support for multiple image formats including DXF, DWG, JPEG, BMP, and GIF.',
        features: [
            {
                title: 'Intelligent Vision & Auto-ID',
                description: 'The machine "sees" and identifies materials/patterns automatically for foolproof, autonomous cutting.',
                icon: 'vision'
            },
            {
                title: 'Ultra-High Precision & Arc-Shape Cutting',
                description: 'Excels at highly accurate and intricate cuts, including complex curved designs.',
                icon: 'precision'
            },
            {
                title: 'Large-Scale High-Speed Production',
                description: 'Combines a large working area with rapid cutting for efficient high-volume manufacturing.',
                icon: 'production'
            },
            {
                title: 'Broad Material Versatility',
                description: 'Applicable across a wide range of soft materials from textiles to leather goods.',
                icon: 'versatility'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'DF-1916' },
            { label: 'Working Size', value: '1900*1600' },
            { label: 'Laser Power (Unit: W)', value: '150-180W' },
            { label: 'Gross Power (Unit: W)', value: '±3500' },
            { label: 'Support Image Format', value: 'DXF/DWG/JPEG/BMP/GIF' },
            { label: 'Cooling Mode', value: 'Water Cooling' },
            { label: 'Camera Brand', value: 'Canon' },
            { label: 'Transmission Mode', value: 'Stepper/Servo Motor' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Maximum Cutting Speed', value: '0-6000 mm/s' }
        ],
        applications: [
            'Carpet cutting',
            'Handbag manufacturing',
            'T-shirt production',
            'Throw pillow cutting',
            'Swim wear fabrication',
            'Textile cutting',
            'Leather goods',
            'Flexible materials',
            'Soft fabric cutting',
            'Apparel industry',
            'Home textiles',
            'Fashion accessories'
        ],
        advantages: [
            'High-speed cutting up to 6000mm/s',
            '1900×1600mm large working area',
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
            <main className="ksign-df1916-main">
                {/* Product Hero Section */}
                <section className="ksign-df1916-hero product-hero">
                    <div className="ksign-df1916-hero-layout">
                        <div className="ksign-df1916-hero-left">
                            <h1 className="ksign-df1916-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="ksign-df1916-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="ksign-df1916-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="ksign-df1916-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="ksign-df1916-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="ksign-df1916-hero-stats product-stats">
                                <div className="ksign-df1916-stat">
                                    <span className="ksign-df1916-stat-number">6000</span>
                                    <span className="ksign-df1916-stat-label">mm/s</span>
                                </div>
                                <div className="ksign-df1916-stat">
                                    <span className="ksign-df1916-stat-number">180W</span>
                                    <span className="ksign-df1916-stat-label">Power</span>
                                </div>
                                <div className="ksign-df1916-stat">
                                    <span className="ksign-df1916-stat-number">1900×1600</span>
                                    <span className="ksign-df1916-stat-label">Area</span>
                                </div>
                            </div>
                        </div>
                        <div className="ksign-df1916-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="ksign-df1916-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="ksign-df1916-overview-section">
                    <div className="ksign-df1916-overview-container">
                        <h2 className="ksign-df1916-section-title">Product Overview</h2>
                        <p className="ksign-df1916-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="ksign-df1916-features-section">
                    <div className="ksign-df1916-features-container">
                        <div className="ksign-df1916-features-header">
                            <h2 className="ksign-df1916-features-title">Key Features</h2>
                            <p className="ksign-df1916-features-subtitle">
                                Smart laser precision for fast flexible cutting
                            </p>
                        </div>

                        <div className="ksign-df1916-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="ksign-df1916-feature-card">
                                    <div className="ksign-df1916-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="ksign-df1916-feature-title">{feature.title}</h3>
                                    <p className="ksign-df1916-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="ksign-df1916-specs-section">
                    <div className="ksign-df1916-specs-container">
                        <h2 className="ksign-df1916-section-title">Technical Specifications</h2>
                        <p className="ksign-df1916-section-subtitle">
                            Complete technical details for K-Sign DF-1916 Laser Fabric Cutting Machine
                        </p>
                        <div className="ksign-df1916-specs-grid">
                            <div className="ksign-df1916-spec-card">
                                <h3 className="ksign-df1916-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="ksign-df1916-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="ksign-df1916-spec-item">
                                            <div className="ksign-df1916-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="ksign-df1916-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="ksign-df1916-applications-section">
                    <div className="ksign-df1916-applications-container">
                        <h2 className="ksign-df1916-section-title">Application Materials</h2>
                        <p className="ksign-df1916-applications-subtitle">
                            Professional laser cutting for textiles, leather, and flexible materials
                        </p>
                        <div
                            ref={scrollRef}
                            className="ksign-df1916-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="ksign-df1916-applications-image-grid">
                                {machineDetails.applications.map((app, index) => (
                                    <div key={index} className="ksign-df1916-application-image-item">
                                        <div className="ksign-df1916-application-icon">
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
                <section className="ksign-df1916-advantages-section">
                    <div className="ksign-df1916-advantages-container">
                        <h2 className="ksign-df1916-section-title">Why Choose K-Sign DF-1916 Laser Fabric Cutting?</h2>
                        <div className="ksign-df1916-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="ksign-df1916-advantage-item">
                                    <div className="ksign-df1916-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="ksign-df1916-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="ksign-df1916-modal-overlay" onClick={closeInquiryModal}>
                    <div className="ksign-df1916-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="ksign-df1916-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="ksign-df1916-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="ksign-df1916-inquiry-form">
                            <div className="ksign-df1916-form-row">
                                <div className="ksign-df1916-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="ksign-df1916-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="ksign-df1916-form-row">
                                <div className="ksign-df1916-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="ksign-df1916-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="ksign-df1916-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="ksign-df1916-phone-input">
                                    <select className="ksign-df1916-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="ksign-df1916-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laser cutting needs, materials, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="ksign-df1916-form-actions">
                                <button type="submit" className="ksign-df1916-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="ksign-df1916-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
