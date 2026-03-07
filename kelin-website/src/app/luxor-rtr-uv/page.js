"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './luxor-rtr-uv.css';

export default function LuxorRTRUV() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/uv-machines/Luxor RTR (1).png');

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
        name: 'LUXOR UV-A3 DTF PRINTER',
        model: 'UV DTF PRINTER',
        images: [
            '/uv-machines/LUXOR-UV-A3-DTF-Printer-1.png',
            '/uv-machines/LUXOR-UV-A3-DTF-Printer-1.png',
        ],
        shortDescription: 'MULTI-FUNCTION DESIGN SUPPORTING 4 APPLICATIONS - Flatbed, Cylinder, Roll-to-roll, and UV DTF all in one machine. Production speed 0.28-3 m²/h ideal for high quality, cost-efficient production.',
        detailedDescription: 'The LUXOR UV-A3 DTF Printer offers flatbed, cylinder, roll-to-roll, and UV DTF printing in one compact unit, ideal for high quality, cost-efficient production. Featuring advanced technology with production speeds ranging from 0.28-3 m²/h, this versatile machine delivers exceptional results for diverse printing applications.',
        features: [
            {
                title: 'Silent Ink Chain',
                description: 'Zero splashing and low noise operation ensures quiet and clean printing environment for professional workspace.',
                icon: 'precision'
            },
            {
                title: 'Intelligent Ink Supply',
                description: 'Advanced ink supply system with smart monitoring ensures consistent ink flow and optimal color reproduction.',
                icon: 'accuracy'
            },
            {
                title: 'HD Touch Screen Design',
                description: 'User-friendly HD touch interface for easy operation control and real-time monitoring of printing status.',
                icon: 'speed'
            },
            {
                title: 'High-Quality Printing',
                description: 'Superior print quality with excellent color reproduction and fine detail resolution for professional results.',
                icon: 'media'
            },
            {
                title: '4-in-1 Multi-Function Design',
                description: 'Versatile machine supporting flatbed, cylinder, roll-to-roll, and UV DTF printing in one compact unit.',
                icon: 'durability'
            },
            {
                title: 'Variable Production Speed',
                description: 'Flexible production speed from 0.28-3 m²/h to meet different quality and volume requirements.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Model', value: 'UV-A3' },
            { label: 'Printhead Quantity', value: '1' },
            { label: 'Printhead Type', value: 'EPSON I3200(4) UV HD Printhead' },
            { label: 'Print Speed', value: '0.28 m²/h - 3 m²/h' },
            { label: 'Printhead Cleaning', value: 'Automatic Cleaning, Automatic Flush Spray, Moisturizing Function' },
            { label: 'Ink Color', value: 'C+M+Y+K+W+Varnish, Magenta+White' },
            { label: 'Ink Type', value: 'LED UV Curing Ink' },
            { label: 'Printing Media Type', value: 'Ultra-clear PET Film, Back-lit Film, PET, Transparent Film, Canvas, Velvet Cloth, etc.' },
            { label: 'Print Media Thickness', value: 'Type: 0.8mm' },
            { label: 'RIP Software', value: 'Maintop, FlexiPRINT, Gln, etc.' },
            { label: 'Image Format', value: 'JPG, TIF, BMP, PDF, etc.' },
            { label: 'Working Environment', value: 'Temperature: 10°C-30°C, Humidity: 35%-65%' },
            { label: 'Print Width', value: 'Flatbed: A3(White+Color)|UV DTF: 33cm+|Cylinder: 35×40cm+(Diameter≥7)' },
            { label: 'Machine Dimension', value: '990*650*785mm|UV DTF Assembly: 775*600*350mm|Packing: 1400*950mm' },
            { label: 'Weight', value: 'NetWeight: 200KG|GrossWeight: 220KG|UV DTF Assembly Net Weight: 50KG|Gross Weight: 70KG' }
        ],
        applications: [
            'Flatbed Direct Printing on Rigid Materials',
            'Cylinder Object Printing (Bottles, Cups, Tubes)',
            'Roll-to-Roll Flexible Media Printing',
            'UV DTF Transfer Film Production',
            'Custom T-shirt and Apparel Graphics',
            'Promotional Product Decoration',
            'Personalized Gifts and Awards',
            'Canvas and Artistic Prints',
            'Velvet Cloth Printing',
            'Transparent Film Applications',
            'Back-lit Signage Materials',
            'Multi-substrate Commercial Printing'
        ],
        advantages: [
            'EPSON I3200 UV HD printhead for exceptional print quality',
            'Multi-function 4-in-1 design: Flatbed, Cylinder, Roll-to-roll, UV DTF',
            'Variable speed production from 0.28-3 m²/h for different needs',
            'LED UV curing ink system for instant drying and durability',
            'Automatic printhead cleaning and moisturizing function',
            'HD touch screen interface for user-friendly operation',
            'Silent ink chain technology for quiet operation',
            'Wide media compatibility: PET film, canvas, velvet cloth, etc.',
            'Professional A3 format printing capability',
            'Multiple RIP software support (Maintop, FlexiPRINT, Gln)',
            'Compact design suitable for various workspace environments',
            'Cost-efficient production with high-quality output'
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
            <main className="lxr-uv-a3-main">
                {/* Product Hero Section */}
                <section className="lxr-uv-a3-hero product-hero">
                    <div className="lxr-uv-a3-hero-layout">
                        <div className="lxr-uv-a3-hero-left">
                            <h1 className="lxr-uv-a3-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="lxr-uv-a3-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="lxr-uv-a3-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="lxr-uv-a3-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="lxr-uv-a3-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="lxr-uv-a3-hero-stats product-stats">
                                <div className="lxr-uv-a3-stat">
                                    <span className="lxr-uv-a3-stat-number">A3</span>
                                    <span className="lxr-uv-a3-stat-label">Print Format</span>
                                </div>
                                <div className="lxr-uv-a3-stat">
                                    <span className="lxr-uv-a3-stat-number">0.28-3 m²/h</span>
                                    <span className="lxr-uv-a3-stat-label">Print Speed</span>
                                </div>
                                <div className="lxr-uv-a3-stat">
                                    <span className="lxr-uv-a3-stat-number">4-in-1</span>
                                    <span className="lxr-uv-a3-stat-label">Multi-function</span>
                                </div>
                            </div>
                        </div>
                        <div className="lxr-uv-a3-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="lxr-uv-a3-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="lxr-uv-a3-overview-section">
                    <div className="lxr-uv-a3-overview-container">
                        <h2 className="lxr-uv-a3-section-title">Product Overview</h2>
                        <p className="lxr-uv-a3-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="lxr-uv-a3-features-section">
                    <div className="lxr-uv-a3-features-container">
                        <div className="lxr-uv-a3-features-header">
                            <h2 className="lxr-uv-a3-features-title">Key Features</h2>
                            <p className="lxr-uv-a3-features-subtitle">
                                Advanced UV-A3 multi-function printing technology meets professional performance
                            </p>
                        </div>

                        <div className="lxr-uv-a3-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="lxr-uv-a3-feature-card">
                                    <div className="lxr-uv-a3-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="lxr-uv-a3-feature-title">{feature.title}</h3>
                                    <p className="lxr-uv-a3-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="lxr-uv-a3-specs-section">
                    <div className="lxr-uv-a3-specs-container">
                        <h2 className="lxr-uv-a3-section-title">Technical Specifications</h2>
                        <p className="lxr-uv-a3-section-subtitle">
                            Complete technical details for LUXOR UV-A3 DTF Printer
                        </p>
                        <div className="lxr-uv-a3-specs-grid">
                            <div className="lxr-uv-a3-spec-card">
                                <h3 className="lxr-uv-a3-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="lxr-uv-a3-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="lxr-uv-a3-spec-item">
                                            <div className="lxr-uv-a3-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="lxr-uv-a3-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="lxr-uv-a3-applications-section">
                    <div className="lxr-uv-a3-applications-container">
                        <h2 className="lxr-uv-a3-section-title">Applications</h2>
                        <p className="lxr-uv-a3-applications-subtitle">
                            Professional UV-A3 multi-function printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="lxr-uv-a3-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="lxr-uv-a3-applications-image-grid">
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="T-Shirt Printing" />
                                    <p>T-Shirt Printing</p>
                                </div>
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Mug Printing" />
                                    <p>Mug Printing</p>
                                </div>
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Signage & Banners" />
                                    <p>Signage & Banners</p>
                                </div>
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Custom Apparel" />
                                    <p>Custom Apparel</p>
                                </div>
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Phone Cases" />
                                    <p>Phone Cases</p>
                                </div>
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sportswear" />
                                    <p>Sportswear</p>
                                </div>
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Home Decor" />
                                    <p>Home Decor</p>
                                </div>
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging" />
                                    <p>Packaging</p>
                                </div>
                                <div className="lxr-uv-a3-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Labels & Stickers" />
                                    <p>Labels & Stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="lxr-uv-a3-advantages-section">
                    <div className="lxr-uv-a3-advantages-container">
                        <h2 className="lxr-uv-a3-section-title">Why Choose LUXOR UV-A3?</h2>
                        <div className="lxr-uv-a3-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="lxr-uv-a3-advantage-item">
                                    <svg className="lxr-uv-a3-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="lxr-uv-a3-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="lxr-uv-a3-modal-overlay" onClick={closeInquiryModal}>
                    <div className="lxr-uv-a3-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="lxr-uv-a3-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="lxr-uv-a3-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="lxr-uv-a3-inquiry-form">
                            <div className="lxr-uv-a3-form-row">
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="lxr-uv-a3-form-row">
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="lxr-uv-a3-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="lxr-uv-a3-phone-input">
                                    <select className="lxr-uv-a3-country-select" name="countryCode" defaultValue="+1">
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+44">🇬🇧 +44</option>
                                        <option value="+61">🇦🇺 +61</option>
                                        <option value="+33">🇫🇷 +33</option>
                                        <option value="+49">🇩🇪 +49</option>
                                        <option value="+81">🇯🇵 +81</option>
                                        <option value="+82">🇰🇷 +82</option>
                                        <option value="+86">🇨🇳 +86</option>
                                        <option value="+91">🇮🇳 +91</option>
                                        <option value="+55">🇧🇷 +55</option>
                                    </select>
                                    <input type="tel" name="phone" placeholder="Enter phone number" required />
                                </div>
                            </div>

                            <div className="lxr-uv-a3-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="lxr-uv-a3-form-actions">
                                <button type="submit" className="lxr-uv-a3-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="lxr-uv-a3-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}