"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './threed-new.css';

export default function ThreeDPrinterMachine() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const threeDPrinters = [
        {
            id: 'k-sign-letter-shell',
            name: 'K-Sign Letter Shell 3D Printer',
            image: '/K-Sign Letter Shell 3D Printer.png',
            description: 'SMART AUTO-LEVELING WITH DATABASE - Automatically stores platform configurations, eliminating the need for re-leveling, streamlining workflow, reducing manual effort, and ensuring consistent, high-volume output. Building speed 700 mm/s.',
            specs: [
                'Printing Speed: 700 mm/s',
                'Layer Thickness: 10μm',
                'Filament: PLA',
                'Auto-leveling with database storage'
            ],
            badge: 'Professional',
            price: 'Contact us for more details',
            link: '/k-sign-letter-shell-3d-printer'
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
            <main className="threed-main">
                {/* Hero Section */}
                <section className="threed-hero">
                    <div className="threed-hero-content">
                        <h1 className="threed-hero-title">
                            Professional 3D Printing Machines
                        </h1>
                        <p className="threed-hero-subtitle">
                            Advanced 3D printing solutions for letter shells, signage components, and professional manufacturing with precision layer control and high-quality results.
                        </p>
                    </div>
                </section>

                {/* Machines Section */}
                <section className="threed-machines-section">
                    <div className="threed-section-header">
                        <h2 className="threed-section-title">3D Printer Collection</h2>
                        <p className="threed-section-subtitle">
                            Professional 3D printing solutions for every application
                        </p>
                    </div>

                    <div className="threed-machines-grid">
                        {threeDPrinters.map((machine, index) => (
                            <div key={machine.id} className="threed-machine-card">
                                <div className="threed-machine-image">
                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    <div className="threed-machine-badge">
                                        {machine.badge}
                                    </div>
                                </div>
                                <div className="threed-machine-content">
                                    <h3 className="threed-machine-title">{machine.name}</h3>
                                    <p className="threed-machine-description">
                                        {machine.description}
                                    </p>
                                    <div className="threed-machine-specs">
                                        {machine.specs.map((spec, specIndex) => (
                                            <div key={specIndex} className="threed-spec-item">
                                                <div className="threed-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="threed-machine-action">
                                        <Link
                                            href={machine.link}
                                            className="threed-view-btn"
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
                                            className="threed-machine-price threed-clickable-price"
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
                <section className="threed-features-section">
                    <div className="threed-features-container">
                        <div className="threed-features-header">
                            <h2 className="threed-features-title">Advanced 3D Printing Technology</h2>
                            <p className="threed-section-subtitle">
                                Cutting-edge 3D printing technology for superior precision and quality
                            </p>
                        </div>

                        <div className="threed-features-grid">
                            <div className="threed-feature-card">
                                <div className="threed-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <h3>Precision Layer Control</h3>
                                <p>Advanced 3D printing technology with precise layer control for exceptional detail and accuracy in letter shell and signage component production.</p>
                            </div>

                            <div className="threed-feature-card">
                                <div className="threed-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                </div>
                                <h3>High-Quality Output</h3>
                                <p>Superior 3D printing quality with consistent results, maximizing productivity and ensuring professional-grade finished products.</p>
                            </div>

                            <div className="threed-feature-card">
                                <div className="threed-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                    </svg>
                                </div>
                                <h3>Versatile Materials</h3>
                                <p>Compatible with various 3D printing materials for diverse applications including letter shells, signage, prototypes, and custom manufacturing.</p>
                            </div>
                        </div>
                    </div>
                </section>


            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="threed-modal-overlay" onClick={closeInquiryModal}>
                    <div className="threed-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="threed-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button
                                className="threed-close-btn"
                                onClick={closeInquiryModal}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="threed-inquiry-form">
                            <div className="threed-form-row">
                                <div className="threed-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="threed-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="threed-form-row">
                                <div className="threed-form-group">
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
                                <div className="threed-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="threed-phone-input">
                                        <select name="countryCode" className="threed-country-select">
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

                            <div className="threed-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="threed-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your 3D printing requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="threed-form-actions">
                                <button type="submit" className="threed-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="threed-btn-secondary">
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