"use client";
import Header from '../../../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './uv-printers.css';

export default function UVPrinters() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const uvMachines = [
        {
            id: 'dtf-uv-sf303',
            name: 'DTF UV Printer SF303-i3200 2ft',
            image: '/uv-machines/DTF UV Printer SF303-i3200 2ft (1).png',
            description: 'COMPACT UV DTF PRINTING - Professional 2ft DTF UV printer SF303 with i3200 print head technology for direct-to-film applications and high-quality transfers.',
            specs: [
                'Print Width: 24 inches (2ft)',
                'Print Head: i3200 technology',
                'UV Curing: LED system',
                'Resolution: High definition'
            ],
            badge: 'Compact',
            price: 'Contact us for more details',
            link: '/dtf-uv-printer-sf303-f1080'
        },
        {
            id: 'dtf-uv-sf604',
            name: 'DTF UV Printer SF604-i3200 2ft - High Res',
            image: '/uv-machines/DTF UV Printer SF604-i3200 2ft. - High Res (1).png',
            description: 'HIGH-RESOLUTION UV DTF - Premium DTF UV printer SF604 with enhanced i3200 technology and superior resolution capabilities for professional printing applications.',
            specs: [
                'Print Width: 24 inches (2ft)',
                'Print Head: Enhanced i3200',
                'Resolution: Ultra high definition',
                'UV Curing: Advanced LED'
            ],
            badge: 'High Resolution',
            price: 'Contact us for more details',
            link: '/dtf-uv-printer-sf604-i3200'
        },
        {
            id: 'luxor-rtr-uv',
            name: 'Luxor RTR UV System',
            image: '/uv-machines/Luxor RTR (1).png',
            description: 'ROLL-TO-ROLL UV SYSTEM - Advanced Luxor RTR UV system for continuous roll-to-roll printing with automated feeding and UV curing for efficient production.',
            specs: [
                'System Type: Roll-to-Roll',
                'UV Technology: Advanced curing',
                'Automation: Full feeding system',
                'Production: Continuous operation'
            ],
            badge: 'Automated',
            price: 'Contact us for more details',
            link: '/luxor-rtr-uv'
        },
        {
            id: 'automatic-uv-crystal',
            name: 'Automatic UV Crystal Flat Pasting Machine',
            image: '/uv-machines/Automatic UV Crystal Flat Pasting Machine 3.82m x 1.72m (1).png',
            description: 'LARGE FORMAT UV CRYSTAL - Professional automatic UV crystal flat pasting machine with large 3.82m x 1.72m format for industrial crystal and UV applications.',
            specs: [
                'Format Size: 3.82m x 1.72m',
                'Operation: Fully automatic',
                'Application: UV crystal pasting',
                'Capacity: Industrial grade'
            ],
            badge: 'Large Format',
            price: 'Contact us for more details',
            link: '/products/uv/crystal-pasting'
        },
        {
            id: 'liyu-x-line-hybrid',
            name: 'Liyu X-Line DQS UV Hybrid Printer',
            image: '/uv-machines/Photo (1).png',
            description: 'HYBRID UV PRINTING - Advanced Liyu X-Line DQS UV hybrid printer with versatile printing capabilities and professional UV curing technology.',
            specs: [
                'Technology: UV hybrid printing',
                'Brand: Liyu X-Line DQS',
                'Versatility: Multi-substrate',
                'Quality: Professional grade'
            ],
            badge: 'Hybrid',
            price: 'Contact us for more details',
            link: '/products/uv/liyu-hybrid'
        },
        {
            id: 'smart-uv-printer',
            name: 'SMART UV Printer',
            image: '/uv-machines/SMART UV Printer.png',
            description: 'SMART UV TECHNOLOGY - Advanced SMART UV printer with intelligent printing features and automated UV curing for professional applications and superior print quality.',
            specs: [
                'Technology: Smart UV printing',
                'Operation: Intelligent automation',
                'UV Curing: Advanced LED system',
                'Quality: Professional grade'
            ],
            badge: 'Smart Tech',
            price: 'Contact us for more details',
            link: '/products/uv/smart-uv'
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
            <main className="uv-printers-main">
                {/* Hero Section */}
                <section className="uv-printers-hero">
                    <div className="uv-printers-hero-content">
                        <h1 className="uv-printers-hero-title">
                            Professional UV Printing Machines
                        </h1>
                        <p className="uv-printers-hero-subtitle">
                            Advanced UV printing solutions for direct-to-film, crystal applications, and professional UV curing with cutting-edge technology.
                        </p>
                    </div>
                </section>

                {/* Machines Section */}
                <section className="uv-printers-machines-section">
                    <div className="uv-printers-section-header">
                        <h2 className="uv-printers-section-title">UV Printing Machine Collection</h2>
                        <p className="uv-printers-section-subtitle">
                            Professional UV printing solutions for every application
                        </p>
                    </div>

                    <div className="uv-printers-machines-grid">
                        {uvMachines.map((machine, index) => (
                            <div key={machine.id} className="uv-printers-machine-card">
                                <div className="uv-printers-machine-image">
                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    <div className="uv-printers-machine-badge">
                                        {machine.badge}
                                    </div>
                                </div>
                                <div className="uv-printers-machine-content">
                                    <h3 className="uv-printers-machine-title">{machine.name}</h3>
                                    <p className="uv-printers-machine-description">
                                        {machine.description}
                                    </p>
                                    <div className="uv-printers-machine-specs">
                                        {machine.specs.map((spec, specIndex) => (
                                            <div key={specIndex} className="uv-printers-spec-item">
                                                <div className="uv-printers-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="uv-printers-machine-action">
                                        <Link
                                            href={machine.link}
                                            className="uv-printers-view-btn"
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
                                            className="uv-printers-machine-price uv-printers-clickable-price"
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
                <section className="uv-printers-features-section">
                    <div className="uv-printers-section-header">
                        <h2 className="uv-printers-section-title">Advanced Features</h2>
                        <p className="uv-printers-section-subtitle">
                            Professional UV printing technology for superior results
                        </p>
                    </div>

                    <div className="uv-printers-features-grid">
                        <div className="uv-printers-feature-card">
                            <div className="uv-printers-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>UV Curing Technology</h3>
                            <p>Advanced LED UV curing systems provide instant curing and superior print durability with vibrant colors and sharp details.</p>
                        </div>

                        <div className="uv-printers-feature-card">
                            <div className="uv-printers-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3>High-Speed Production</h3>
                            <p>Fast UV printing capabilities with automated systems maximize productivity and efficiency for commercial applications.</p>
                        </div>

                        <div className="uv-printers-feature-card">
                            <div className="uv-printers-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3>Versatile Applications</h3>
                            <p>Compatible with various substrates including films, crystals, textiles, and specialty materials for diverse UV printing applications.</p>
                        </div>


                    </div>
                </section>


            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="uv-printers-modal-overlay" onClick={closeInquiryModal}>
                    <div className="uv-printers-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="uv-printers-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button
                                className="uv-printers-close-btn"
                                onClick={closeInquiryModal}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="uv-printers-inquiry-form">
                            <div className="uv-printers-form-row">
                                <div className="uv-printers-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="uv-printers-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="uv-printers-form-row">
                                <div className="uv-printers-form-group">
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
                                <div className="uv-printers-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="uv-printers-phone-input">
                                        <select name="countryCode" className="uv-printers-country-select">
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

                            <div className="uv-printers-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="uv-printers-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your UV printing machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="uv-printers-form-actions">
                                <button type="submit" className="uv-printers-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="uv-printers-btn-secondary">
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