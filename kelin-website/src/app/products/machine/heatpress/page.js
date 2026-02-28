"use client";
import Header from '../../../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './heatpress.css';

export default function HeatPress() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const heatPressMachines = [
        {
            id: 'sapphire-heatpress',
            name: 'Sapphire Heat Press',
            image: '/heatpress/Sapphire Heatpress (2).png',
            description: 'PROFESSIONAL HEAT TRANSFER - Advanced Sapphire heat press with precision temperature control and even heat distribution for professional sublimation and vinyl transfer applications.',
            specs: [
                'Platen Size: Professional grade',
                'Temperature: 0-200°C',
                'Pressure: Adjustable',
                'Digital Display: Yes'
            ],
            badge: 'Professional',
            price: 'Contact us for more details',
            link: '/products/heatpress/sapphire'
        },
        {
            id: 'sublimate-manual-press',
            name: 'Subli-Mate Manual Heat Press 80cm x 100cm',
            image: '/heatpress/Subli-Mate Manual Heat Press 80cm x 100cm (1).png',
            description: 'LARGE FORMAT HEAT PRESS - Extra large 80cm x 100cm Subli-Mate manual heat press perfect for wide format sublimation transfers, textiles, and large-scale printing projects.',
            specs: [
                'Platen Size: 80cm x 100cm',
                'Operation: Manual',
                'Application: Large format',
                'Material: Heavy-duty construction'
            ],
            badge: 'Large Format',
            price: 'Contact us for more details',
            link: '/products/heatpress/sublimate-manual'
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
            <main className="heatpress-main">
                {/* Hero Section */}
                <section className="heatpress-hero">
                    <div className="heatpress-hero-content">
                        <h1 className="heatpress-hero-title">
                            Professional Heat Press Machines
                        </h1>
                        <p className="heatpress-hero-subtitle">
                            Advanced heat transfer solutions for sublimation, vinyl, and textile applications with precision temperature control and professional results.
                        </p>
                    </div>
                </section>

                {/* Machines Section */}
                <section className="heatpress-machines-section">
                    <div className="heatpress-section-header">
                        <h2 className="heatpress-section-title">Heat Press Machine Collection</h2>
                        <p className="heatpress-section-subtitle">
                            Professional heat transfer solutions for every application
                        </p>
                    </div>

                    <div className="heatpress-machines-grid">
                        {heatPressMachines.map((machine, index) => (
                            <div key={machine.id} className="heatpress-machine-card">
                                <div className="heatpress-machine-image">
                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    <div className="heatpress-machine-badge">
                                        {machine.badge}
                                    </div>
                                </div>
                                <div className="heatpress-machine-content">
                                    <h3 className="heatpress-machine-title">{machine.name}</h3>
                                    <p className="heatpress-machine-description">
                                        {machine.description}
                                    </p>
                                    <div className="heatpress-machine-specs">
                                        {machine.specs.map((spec, specIndex) => (
                                            <div key={specIndex} className="heatpress-spec-item">
                                                <div className="heatpress-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="heatpress-machine-action">
                                        <Link
                                            href={machine.link}
                                            className="heatpress-view-btn"
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
                                            className="heatpress-machine-price heatpress-clickable-price"
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
                <section className="heatpress-features-section">
                    <div className="heatpress-section-header">
                        <h2 className="heatpress-section-title">Advanced Features</h2>
                        <p className="heatpress-section-subtitle">
                            Professional heat transfer technology for superior results
                        </p>
                    </div>

                    <div className="heatpress-features-grid">
                        <div className="heatpress-feature-card">
                            <div className="heatpress-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>Precision Temperature Control</h3>
                            <p>Advanced digital temperature controls with even heat distribution ensure consistent, high-quality heat transfers every time.</p>
                        </div>

                        <div className="heatpress-feature-card">
                            <div className="heatpress-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3>Professional Performance</h3>
                            <p>Heavy-duty construction with adjustable pressure settings delivers professional results for all heat transfer applications.</p>
                        </div>

                        <div className="heatpress-feature-card">
                            <div className="heatpress-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3>Versatile Applications</h3>
                            <p>Perfect for sublimation, vinyl transfers, textiles, ceramics, and various heat transfer materials for diverse printing needs.</p>
                        </div>
                    </div>
                </section>


            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="heatpress-modal-overlay" onClick={closeInquiryModal}>
                    <div className="heatpress-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="heatpress-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button
                                className="heatpress-close-btn"
                                onClick={closeInquiryModal}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="heatpress-inquiry-form">
                            <div className="heatpress-form-row">
                                <div className="heatpress-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="heatpress-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="heatpress-form-row">
                                <div className="heatpress-form-group">
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
                                <div className="heatpress-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="heatpress-phone-input">
                                        <select name="countryCode" className="heatpress-country-select">
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

                            <div className="heatpress-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="heatpress-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your heat press machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="heatpress-form-actions">
                                <button type="submit" className="heatpress-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="heatpress-btn-secondary">
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