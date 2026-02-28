"use client";
import Header from '../../../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './cutting.css';

export default function CuttingMachine() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const cuttingMachines = [
        {
            id: 'iecho-pk',
            name: 'iEcho PK',
            image: '/PK1209 (1).png',
            description: 'PRECISION CUTTING, PROFESSIONAL PERFORMANCE - Professional vinyl cutting plotter with advanced servo motor system and superior cutting accuracy for signage and graphics applications.',
            specs: [
                'Cutting Width: up to 1350mm',
                'Speed: up to 1200mm/s',
                'Force: up to 500g',
                'Precision: ±0.1mm'
            ],
            badge: 'Professional',
            price: 'Contact us for more details',
            link: '/iecho-pk'
        },
        {
            id: 'iecho-pk4',
            name: 'iEcho PK4',
            image: '/PK4 (2).png',
            description: 'HIGH-SPEED CUTTING EXCELLENCE - Advanced 4-head cutting system with exceptional speed and precision for high-volume production environments and commercial applications.',
            specs: [
                'Cutting Width: up to 1650mm',
                'Speed: up to 1500mm/s',
                'Multi-head System: 4 heads',
                'Force: up to 600g'
            ],
            badge: 'High Speed',
            price: 'Contact us for more details',
            link: '/iecho-pk4'
        },
        {
            id: 'iecho-bk3',
            name: 'iEcho BK3',
            image: '/bk3.png',
            description: 'INDUSTRIAL CUTTING POWER - Heavy-duty cutting solution with advanced blade technology and robust construction for industrial applications and continuous operation.',
            specs: [
                'Cutting Width: up to 1800mm',
                'Speed: up to 1000mm/s',
                'Force: up to 800g',
                'Blade System: Advanced'
            ],
            badge: 'Industrial',
            price: 'Contact us for more details',
            link: '/iecho-bk3'
        },
        {
            id: 'iecho-bk4',
            name: 'iEcho BK4',
            image: '/BK4 (1).png',
            description: 'ULTIMATE CUTTING PERFORMANCE - Premium cutting system with superior blade control and maximum force capability for the most demanding cutting applications.',
            specs: [
                'Cutting Width: up to 2000mm',
                'Speed: up to 1200mm/s',
                'Force: up to 1000g',
                'Precision: ±0.05mm'
            ],
            badge: 'Premium',
            price: 'Contact us for more details',
            link: '/iecho-bk4'
        },
        {
            id: 'iecho-tk4s',
            name: 'iEcho TK4S',
            image: '/TK4S Large format cutting system.png',
            description: 'SMART CUTTING TECHNOLOGY - Intelligent cutting system with automated features and smart material detection for enhanced productivity and ease of use.',
            specs: [
                'Cutting Width: up to 1600mm',
                'Speed: up to 1400mm/s',
                'Smart Detection: Yes',
                'Automation: Advanced'
            ],
            badge: 'Smart Tech',
            price: 'Contact us for more details',
            link: '/iecho-tk4s'
        },
        {
            id: 'gcc-puma-24',
            name: 'GCC AR-24 DESKTOP',
            image: '/GCC AR-24 Desktop (1).png',
            description: 'COMPACT CUTTING SOLUTION - Professional 24-inch cutting plotter with excellent precision and reliability for small to medium-scale cutting operations.',
            specs: [
                'Cutting Width: 610mm (24")',
                'Speed: up to 1016mm/s',
                'Force: up to 500g',
                'Software: GCC Compatible'
            ],
            badge: 'Compact',
            price: 'Contact us for more details',
            link: '/gcc-ar24-desktop'
        },
        {
            id: 'gcc-puma-52',
            name: 'GCC PUMA IV',
            image: '/GCC PUMA IV.png',
            description: 'WIDE FORMAT CUTTING - Large format cutting plotter with 52-inch width capability for wide vinyl and material cutting applications with professional accuracy.',
            specs: [
                'Cutting Width: 1320mm (52")',
                'Speed: up to 1200mm/s',
                'Force: up to 600g',
                'Material Handling: Advanced'
            ],
            badge: 'Wide Format',
            price: 'Contact us for more details',
            link: '/gcc-puma-iv'
        },
        {
            id: 'gcc-expert-24-lx',
            name: 'GCC EXPERT 24 LX',
            image: '/GCC Expert LX  EX-24LX  Without Stand (1).png',
            description: 'EXPERT PRECISION CUTTING - High-precision 24-inch cutting system with expert-level features and enhanced cutting capabilities for professional applications.',
            specs: [
                'Cutting Width: 610mm (24")',
                'Speed: up to 1400mm/s',
                'Force: up to 750g',
                'Precision: Enhanced'
            ],
            badge: 'Expert',
            price: 'Contact us for more details',
            link: '/gcc-expert-24lx'
        },
        {
            id: 'gcc-expert-52-lx',
            name: 'GCC EXPERT 52 LX',
            image: '/gcc-expert-lx.png',
            description: 'PROFESSIONAL WIDE CUTTING - Premium 52-inch cutting system with expert features, superior precision, and advanced material handling for professional operations.',
            specs: [
                'Cutting Width: 1320mm (52")',
                'Speed: up to 1300mm/s',
                'Force: up to 800g',
                'Professional Features: Yes'
            ],
            badge: 'Professional',
            price: 'Contact us for more details',
            link: '/gcc-expert-52lx'
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
            <main className="cutting-main">
                {/* Hero Section */}
                <section className="cutting-hero">
                    <div className="cutting-hero-content">
                        <h1 className="cutting-hero-title">
                            Professional Cutting Machines
                        </h1>
                        <p className="cutting-hero-subtitle">
                            Precision cutting solutions for vinyl, signage, and materials with advanced technology and superior accuracy for professional applications.
                        </p>
                        {/* <div className="cutting-hero-stats">
                            <div className="cutting-stat">
                                <span className="cutting-stat-number">9+</span>
                                <span className="cutting-stat-label">Machine Models</span>
                            </div>
                            <div className="cutting-stat">
                                <span className="cutting-stat-number">±0.05mm</span>
                                <span className="cutting-stat-label">Precision</span>
                            </div>
                            <div className="cutting-stat">
                                <span className="cutting-stat-number">1500mm/s</span>
                                <span className="cutting-stat-label">Max Speed</span>
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* Machines Section */}
                <section className="cutting-machines-section">
                    <div className="cutting-section-header">
                        <h2 className="cutting-section-title">Cutting Machine Collection</h2>
                        <p className="cutting-section-subtitle">
                            Professional cutting solutions for every application
                        </p>
                    </div>

                    <div className="cutting-machines-grid">
                        {cuttingMachines.map((machine, index) => (
                            <div key={machine.id} className="cutting-machine-card">
                                <div className="cutting-machine-image">
                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    <div className="cutting-machine-badge">
                                        {machine.badge}
                                    </div>
                                </div>
                                <div className="cutting-machine-content">
                                    <h3 className="cutting-machine-title">{machine.name}</h3>
                                    <p className="cutting-machine-description">
                                        {machine.description}
                                    </p>
                                    <div className="cutting-machine-specs">
                                        {machine.specs.map((spec, specIndex) => (
                                            <div key={specIndex} className="cutting-spec-item">
                                                <div className="cutting-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="cutting-machine-action">
                                        <Link
                                            href={machine.link}
                                            className="cutting-view-btn"
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
                                            className="cutting-machine-price cutting-clickable-price"
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
                <section className="cutting-features-section">
                    <div className="cutting-section-header">
                        <h2 className="cutting-section-title">Advanced Features</h2>
                        <p className="cutting-section-subtitle">
                            Professional cutting technology for superior results
                        </p>
                    </div>

                    <div className="cutting-features-grid">
                        <div className="cutting-feature-card">
                            <div className="cutting-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>Precision Cutting</h3>
                            <p>Advanced servo motor systems deliver exceptional cutting accuracy with precision up to ±0.05mm for professional results.</p>
                        </div>

                        <div className="cutting-feature-card">
                            <div className="cutting-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3>High-Speed Performance</h3>
                            <p>Superior cutting speeds up to 1500mm/s with consistent quality, maximizing productivity and efficiency.</p>
                        </div>

                        <div className="cutting-feature-card">
                            <div className="cutting-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3>Versatile Materials</h3>
                            <p>Compatible with vinyl, paper, cardboard, fabric, reflective materials, and specialty substrates for diverse applications.</p>
                        </div>


                    </div>
                </section>


            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="cutting-modal-overlay" onClick={closeInquiryModal}>
                    <div className="cutting-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="cutting-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button
                                className="cutting-close-btn"
                                onClick={closeInquiryModal}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="cutting-inquiry-form">
                            <div className="cutting-form-row">
                                <div className="cutting-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="cutting-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="cutting-form-row">
                                <div className="cutting-form-group">
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
                                <div className="cutting-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="cutting-phone-input">
                                        <select name="countryCode" className="cutting-country-select">
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

                            <div className="cutting-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="cutting-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="cutting-form-actions">
                                <button type="submit" className="cutting-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="cutting-btn-secondary">
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