"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './dtf-uv-printer-sf303-f1080-unique.css';

export default function DTFUVPrinterSF303F1080() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/DTF UV Printer SF303-i3200 2ft (1).png');

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
        name: 'LUXOR SF30-3',
        model: 'UV DTF PRINTER',
        images: [
            '/DTF UV Printer SF303-i3200 2ft (1).png',
            '/DTF UV Printer SF303-i3200 2ft (1).png', // Add more images if available
        ],
        shortDescription: 'BRILLIANT COLOR PRINTING WITH VARNISH - Get vibrant, detailed prints with CMYK+W+V and UV ink. The SF30-3 delivers rich layers, smooth gradients, and long-lasting quality.',
        detailedDescription: 'The LUXOR SF30-3 UV DTF Printer delivers brilliant color printing with varnish technology. Featuring PRECISION CORE printhead powered by EPSON, this industrial-grade printer achieves 4.5 m²/h printing speed with vibrant, detailed prints using CMYK+W+V and UV ink. The SF30-3 delivers rich layers, smooth gradients, and long-lasting quality for professional UV DTF applications.',
        features: [
            {
                title: 'Voltage Display Function',
                description: 'Real-time voltage monitoring with digital display ensures optimal power conditions for consistent printing performance.',
                icon: 'precision'
            },
            {
                title: 'CMYK +W +V Ink Printing',
                description: 'Advanced 6-color ink system including Cyan, Magenta, Yellow, Black, White, and Varnish for brilliant color reproduction.',
                icon: 'accuracy'
            },
            {
                title: 'Air-cooled LED UV Lamp',
                description: 'Efficient LED UV curing system with air cooling provides instant drying and superior adhesion for durable prints.',
                icon: 'speed'
            },
            {
                title: 'Plate Heating Function',
                description: 'Integrated heating plate ensures optimal film temperature and improved ink adhesion for professional results.',
                icon: 'media'
            },
            {
                title: 'PRECISION CORE Printhead',
                description: 'EPSON PRECISION CORE technology delivers exceptional print quality with precise droplet placement and reliable performance.',
                icon: 'durability'
            },
            {
                title: 'Industrial Grade Speed',
                description: 'High-performance printing at 4.5 m²/h with professional quality output for efficient production workflows.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Model', value: 'SF30-3' },
            { label: 'Printhead', value: 'EPSON F3080, Quantity: 3' },
            { label: 'Print Width', value: '300mm' },
            { label: 'Print Speed', value: '6 PASS: 4.5 m²/h, 8 PASS: 3.2 m²/h' },
            { label: 'Ink Type', value: 'UV Neutral Hard Ink' },
            { label: 'Ink Color', value: 'W+CMYK+V' },
            { label: 'RIP Software', value: 'Maintop, RIN, FlexiPRINT, etc.' },
            { label: 'Print Media', value: 'AB Film, Plasma Film' },
            { label: 'Weight', value: 'N.W: 250kg, G.W: 396.5kg' },
            { label: 'Power', value: '180W/220V, 50-60HZ' },
            { label: 'Image Format', value: 'JPG, TIF, PDF, etc.' },
            { label: 'Working Environment', value: 'Temp: 15°C - 30°C, Humidity: 35% - 65%' },
            { label: 'Machine Size', value: 'Dimension: 190*120*150cm, Packing: 220*160*180cm' }
        ],
        applications: [
            'Custom Stickers and Labels',
            'Phone Cases and Accessories',
            'Decorative Items and Crafts',
            'Promotional Products',
            'Personalized Gifts',
            'Awards and Certificates',
            'Signage and Displays',
            'Packaging Materials',
            'Automotive Decals',
            'Electronics Accessories',
            'Home Decor Items',
            'Industrial Labels'
        ],
        advantages: [
            'EPSON PRECISION CORE printhead technology for superior quality',
            'CMYK+W+V 6-color ink system with varnish for brilliant colors',
            'Industrial grade speed of 4.5 m²/h for efficient production',
            'Air-cooled LED UV lamp for instant curing and energy efficiency',
            'Plate heating function for optimal ink adhesion',
            'Voltage display function for real-time power monitoring',
            'Compatible with AB Film and Plasma Film materials',
            'Multiple RIP software options (Maintop, RIN, FlexiPRINT)',
            'Professional working environment specifications',
            'Compact 300mm print width ideal for small format applications',
            'UV neutral hard ink for durable and long-lasting prints',
            'Rich layers and smooth gradients with varnish coating'
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
            <main className="dtf-uv-sf303-main">
                {/* Product Hero Section */}
                <section className="dtf-uv-sf303-hero product-hero">
                    <div className="dtf-uv-sf303-hero-layout">
                        <div className="dtf-uv-sf303-hero-left">
                            <h1 className="dtf-uv-sf303-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="dtf-uv-sf303-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="dtf-uv-sf303-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="dtf-uv-sf303-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="dtf-uv-sf303-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="dtf-uv-sf303-hero-stats product-stats">
                                <div className="dtf-uv-sf303-stat">
                                    <span className="dtf-uv-sf303-stat-number">300mm</span>
                                    <span className="dtf-uv-sf303-stat-label">Print Width</span>
                                </div>
                                <div className="dtf-uv-sf303-stat">
                                    <span className="dtf-uv-sf303-stat-number">4.5 m²/h</span>
                                    <span className="dtf-uv-sf303-stat-label">Print Speed</span>
                                </div>
                                <div className="dtf-uv-sf303-stat">
                                    <span className="dtf-uv-sf303-stat-number">CMYK+W+V</span>
                                    <span className="dtf-uv-sf303-stat-label">6 Colors</span>
                                </div>
                            </div>
                        </div>
                        <div className="dtf-uv-sf303-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="dtf-uv-sf303-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="dtf-uv-sf303-overview-section">
                    <div className="dtf-uv-sf303-overview-container">
                        <h2 className="dtf-uv-sf303-section-title">Product Overview</h2>
                        <p className="dtf-uv-sf303-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="dtf-uv-sf303-features-section">
                    <div className="dtf-uv-sf303-features-container">
                        <div className="dtf-uv-sf303-features-header">
                            <h2 className="dtf-uv-sf303-features-title">Key Features</h2>
                            <p className="dtf-uv-sf303-features-subtitle">
                                Advanced DTF UV printing technology meets professional performance
                            </p>
                        </div>

                        <div className="dtf-uv-sf303-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="dtf-uv-sf303-feature-card">
                                    <div className="dtf-uv-sf303-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="dtf-uv-sf303-feature-title">{feature.title}</h3>
                                    <p className="dtf-uv-sf303-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="dtf-uv-sf303-specs-section">
                    <div className="dtf-uv-sf303-specs-container">
                        <h2 className="dtf-uv-sf303-section-title">Technical Specifications</h2>
                        <p className="dtf-uv-sf303-section-subtitle">
                            Complete technical details for LUXOR SF30-3 UV DTF Printer
                        </p>
                        <div className="dtf-uv-sf303-specs-grid">
                            <div className="dtf-uv-sf303-spec-card">
                                <h3 className="dtf-uv-sf303-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="dtf-uv-sf303-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="dtf-uv-sf303-spec-item">
                                            <div className="dtf-uv-sf303-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="dtf-uv-sf303-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="dtf-uv-sf303-applications-section">
                    <div className="dtf-uv-sf303-applications-container">
                        <h2 className="dtf-uv-sf303-section-title">Applications</h2>
                        <p className="dtf-uv-sf303-applications-subtitle">
                            Professional UV DTF printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="dtf-uv-sf303-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="dtf-uv-sf303-applications-image-grid">
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="T-Shirt Printing" />
                                    <p>T-Shirt Printing</p>
                                </div>
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Mug Printing" />
                                    <p>Mug Printing</p>
                                </div>
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Signage & Banners" />
                                    <p>Signage & Banners</p>
                                </div>
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Custom Apparel" />
                                    <p>Custom Apparel</p>
                                </div>
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Phone Cases" />
                                    <p>Phone Cases</p>
                                </div>
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sportswear" />
                                    <p>Sportswear</p>
                                </div>
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Home Decor" />
                                    <p>Home Decor</p>
                                </div>
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging" />
                                    <p>Packaging</p>
                                </div>
                                <div className="dtf-uv-sf303-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Labels & Stickers" />
                                    <p>Labels & Stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="dtf-uv-sf303-advantages-section">
                    <div className="dtf-uv-sf303-advantages-container">
                        <h2 className="dtf-uv-sf303-section-title">Why Choose LUXOR SF30-3?</h2>
                        <div className="dtf-uv-sf303-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="dtf-uv-sf303-advantage-item">
                                    <svg className="dtf-uv-sf303-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="dtf-uv-sf303-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="dtf-uv-sf303-modal-overlay" onClick={closeInquiryModal}>
                    <div className="dtf-uv-sf303-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="dtf-uv-sf303-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="dtf-uv-sf303-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="dtf-uv-sf303-inquiry-form">
                            <div className="dtf-uv-sf303-form-row">
                                <div className="dtf-uv-sf303-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="dtf-uv-sf303-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="dtf-uv-sf303-form-row">
                                <div className="dtf-uv-sf303-form-group">
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
                                <div className="dtf-uv-sf303-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="dtf-uv-sf303-phone-input">
                                        <select name="countryCode" className="dtf-uv-sf303-country-select">
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

                            <div className="dtf-uv-sf303-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="dtf-uv-sf303-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your UV DTF printing requirements and any specific questions about the LUXOR SF30-3..."
                                    required
                                ></textarea>
                            </div>

                            <div className="dtf-uv-sf303-form-actions">
                                <button type="submit" className="dtf-uv-sf303-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="dtf-uv-sf303-btn-secondary">
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