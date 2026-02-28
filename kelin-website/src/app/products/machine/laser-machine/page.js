"use client";
import Header from '../../../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './laser-machines.css';

export default function LaserMachine() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const laserMachines = [
        {
            id: 'handheld-fiber-laser',
            name: 'Handheld Fiber Laser',
            image: '/laser-machines/Handheld Fiber Laser.png',
            description: 'PORTABLE LASER POWER - Professional handheld fiber laser for precision cleaning, welding, and cutting applications with advanced safety features and ergonomic design.',
            specs: [
                'Type: Handheld fiber laser',
                'Application: Cleaning & welding',
                'Safety: Advanced protection',
                'Design: Ergonomic handheld'
            ],
            badge: 'Portable',
            price: 'Contact us for more details',
            link: '/products/laser/handheld-fiber'
        },
        {
            id: 'hanniu-k1390-150w',
            name: 'Hanniu K1390 CO2 Laser 150W with CCD',
            image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 150w with CCD.png',
            description: 'PRECISION CO2 CUTTING - Advanced CO2 laser cutting machine with 150W power and CCD camera system for precise positioning and automated cutting operations.',
            specs: [
                'Power: 150W CO2 laser',
                'Model: K1390',
                'Feature: CCD camera system',
                'Application: Precision cutting'
            ],
            badge: 'CCD System',
            price: 'Contact us for more details',
            link: '/products/laser/hanniu-k1390-150w'
        },
        {
            id: 'hanniu-k1390-300w',
            name: 'Hanniu K1390 CO2 Laser 300W',
            image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.png',
            description: 'HIGH-POWER CO2 LASER - Professional 300W CO2 laser cutting machine with enhanced power for thick materials and high-speed cutting applications.',
            specs: [
                'Power: 300W CO2 laser',
                'Model: K1390',
                'Capability: High-power cutting',
                'Speed: Enhanced cutting speed'
            ],
            badge: 'High Power',
            price: 'Contact us for more details',
            link: '/products/laser/hanniu-k1390-300w'
        },
        {
            id: 'k-sign-desktop-b330',
            name: 'K-Sign Desktop Laser B330',
            image: '/laser-machines/K-Sign Desktop Laser B330.png',
            description: 'COMPACT DESKTOP LASER - Professional desktop laser engraving and cutting system with precision control for small to medium-scale operations.',
            specs: [
                'Type: Desktop laser system',
                'Model: B330',
                'Application: Engraving & cutting',
                'Size: Compact desktop'
            ],
            badge: 'Desktop',
            price: 'Contact us for more details',
            link: '/products/laser/k-sign-b330'
        },
        {
            id: 'k-sign-fabric-df1916',
            name: 'K-Sign DF-1916 Laser Fabric Cutting',
            image: '/laser-machines/K-Sign DF-1916 Laser Fabric Cutting.png',
            description: 'FABRIC CUTTING SPECIALIST - Advanced laser system specifically designed for fabric cutting with clean edges and precision for textile industry applications.',
            specs: [
                'Specialization: Fabric cutting',
                'Model: DF-1916',
                'Feature: Clean edge cutting',
                'Industry: Textile applications'
            ],
            badge: 'Fabric Specialist',
            price: 'Contact us for more details',
            link: '/products/laser/k-sign-fabric'
        },
        {
            id: 'k-sign-desktop-marking',
            name: 'K-Sign Desktop Laser Marking',
            image: '/laser-machines/K-sign_Desktop Laser Marking.png',
            description: 'PRECISION LASER MARKING - Professional desktop laser marking system for permanent marking, engraving, and etching on various materials.',
            specs: [
                'Function: Laser marking',
                'Type: Desktop system',
                'Application: Permanent marking',
                'Materials: Various compatible'
            ],
            badge: 'Marking',
            price: 'Contact us for more details',
            link: '/products/laser/k-sign-marking'
        },
        {
            id: 'reci-handheld-welding',
            name: 'Reci Handheld Fiber Laser Welding R-A80 800W',
            image: '/laser-machines/Reci Handheld Fiber Laser Welding Machine R-A80 800W 1.png',
            description: 'PROFESSIONAL LASER WELDING - High-power 800W handheld fiber laser welding system with advanced beam quality for industrial welding applications.',
            specs: [
                'Power: 800W fiber laser',
                'Model: R-A80',
                'Type: Handheld welding',
                'Application: Industrial welding'
            ],
            badge: 'Welding Pro',
            price: 'Contact us for more details',
            link: '/products/laser/reci-welding'
        },
        {
            id: 'yueming-fiber-1000w',
            name: 'Yueming Fiber Laser CMA-1325C-G-G 1000W',
            image: '/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.png',
            description: 'INDUSTRIAL FIBER LASER - Professional 1000W fiber laser cutting system with large format capability for industrial metal cutting applications.',
            specs: [
                'Power: 1000W fiber laser',
                'Model: CMA-1325C-G-G',
                'Format: Large cutting area',
                'Application: Metal cutting'
            ],
            badge: 'Industrial',
            price: 'Contact us for more details',
            link: '/products/laser/yueming-1000w'
        },
        {
            id: 'yueming-fiber-1500w',
            name: 'Yueming Fiber Laser HL1530C-G-E 1500W IPG',
            image: '/laser-machines/Yueming Fiber Laser HL1530C-G-E 1500w IPG.png',
            description: 'ULTIMATE FIBER LASER - Premium 1500W IPG fiber laser cutting system with superior beam quality and maximum cutting capability for heavy-duty applications.',
            specs: [
                'Power: 1500W IPG fiber',
                'Model: HL1530C-G-E',
                'Feature: IPG laser source',
                'Capability: Heavy-duty cutting'
            ],
            badge: 'Premium',
            price: 'Contact us for more details',
            link: '/products/laser/yueming-1500w'
        }
    ];

    const openInquiryModal = (machine) => {
        setSelectedMachine(machine);
        setInquiryModalOpen(true);
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
        setSelectedMachine(null);
    };

    const handleInquirySubmit = (e) => {
        e.preventDefault();
        alert('Inquiry submitted successfully!');
        closeInquiryModal();
    };

    return (
        <div>
            <Header />
            <main className="laser-main">
                {/* Hero Section */}
                <section className="laser-hero">
                    <div className="laser-hero-content">
                        <h1 className="laser-hero-title">
                            Professional Laser Machines
                        </h1>
                        <p className="laser-hero-subtitle">
                            Advanced laser cutting, welding, marking, and engraving solutions with precision power control and professional results for industrial applications.
                        </p>
                    </div>
                </section>

                {/* Machines Section */}
                <section className="laser-machines-section">
                    <div className="laser-section-header">
                        <h2 className="laser-section-title">Laser Machine Collection</h2>
                        <p className="laser-section-subtitle">
                            Professional laser solutions for every application
                        </p>
                    </div>

                    <div className="laser-machines-grid">
                        {laserMachines.map((machine, index) => (
                            <div key={machine.id} className="laser-machine-card">
                                <div className="laser-machine-image">
                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    <div className="laser-machine-badge">
                                        {machine.badge}
                                    </div>
                                </div>
                                <div className="laser-machine-content">
                                    <h3 className="laser-machine-title">{machine.name}</h3>
                                    <p className="laser-machine-description">
                                        {machine.description}
                                    </p>
                                    <div className="laser-machine-specs">
                                        {machine.specs.map((spec, specIndex) => (
                                            <div key={specIndex} className="laser-spec-item">
                                                <div className="laser-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="laser-machine-action">
                                        <Link
                                            href={machine.link}
                                            className="laser-view-btn"
                                        >
                                            Read More
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                        <span
                                            className="laser-machine-price laser-clickable-price"
                                            onClick={() => openInquiryModal(machine)}
                                        >
                                            {machine.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features Section */}
                <section className="laser-features-section">
                    <div className="laser-features-container">
                        <div className="laser-features-header">
                            <h2 className="laser-features-title">Advanced Laser Technology</h2>
                            <p className="laser-section-subtitle">
                                Cutting-edge laser technology for superior precision and performance
                            </p>
                        </div>

                        <div className="laser-features-grid">
                            <div className="laser-feature-card">
                                <div className="laser-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <h3>Precision Laser Control</h3>
                                <p>Advanced fiber and CO2 laser technology with precise beam control for exceptional cutting accuracy and professional results.</p>
                            </div>

                            <div className="laser-feature-card">
                                <div className="laser-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                </div>
                                <h3>High-Power Performance</h3>
                                <p>From 150W to 1500W laser power options delivering superior performance for various materials and thicknesses.</p>
                            </div>

                            <div className="laser-feature-card">
                                <div className="laser-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                    </svg>
                                </div>
                                <h3>Versatile Applications</h3>
                                <p>Cutting, welding, marking, and engraving capabilities for metals, fabrics, plastics, and various industrial materials.</p>
                            </div>
                        </div>
                    </div>
                </section>


            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="laser-modal-overlay" onClick={closeInquiryModal}>
                    <div className="laser-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="laser-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button
                                className="laser-close-btn"
                                onClick={closeInquiryModal}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="laser-inquiry-form">
                            <div className="laser-form-row">
                                <div className="laser-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="laser-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="laser-form-row">
                                <div className="laser-form-group">
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
                                <div className="laser-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="laser-phone-input">
                                        <select name="countryCode" className="laser-country-select">
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

                            <div className="laser-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="laser-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your laser machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="laser-form-actions">
                                <button type="submit" className="laser-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="laser-btn-secondary">
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