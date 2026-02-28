"use client";
import Header from '../../../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './laminator.css';

export default function Laminator() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const laminatorMachines = [
        {
            id: 'cold-laminator',
            name: 'Cold Laminator',
            image: '/laminator/Cold Laminator (1).png',
            description: 'PROFESSIONAL COLD LAMINATION - Advanced cold laminator with precise pressure control for bubble-free lamination of documents, photos, and signage without heat.',
            specs: [
                'Operation: Cold lamination',
                'Width: Professional grade',
                'Pressure: Adjustable rollers',
                'Application: Documents & signage'
            ],
            badge: 'Cold Process',
            price: 'Contact us for more details',
            link: '/products/laminator/cold-laminator'
        },
        {
            id: 'fulei-bu-1425fa',
            name: 'Fulei BU-1425FA Flatbed Laminator',
            image: '/laminator/Fulei BU-1425FA Flatbed Laminator (1).png',
            description: 'FLATBED LAMINATION SYSTEM - Professional Fulei BU-1425FA flatbed laminator with advanced heating and pressure control for large format materials and precise lamination.',
            specs: [
                'Type: Flatbed system',
                'Model: BU-1425FA',
                'Format: Large format capable',
                'Control: Digital temperature'
            ],
            badge: 'Flatbed',
            price: 'Contact us for more details',
            link: '/products/laminator/fulei-flatbed'
        },
        {
            id: 'fulei-bu-1600e',
            name: 'Fulei BU-1600E Warm Auto Laminator',
            image: '/laminator/Fulei BU-1600E Warm Auto Laminator (1).png',
            description: 'AUTOMATIC WARM LAMINATION - Advanced Fulei BU-1600E automatic warm laminator with intelligent temperature control and automatic feeding for efficient production.',
            specs: [
                'Type: Automatic warm laminator',
                'Model: BU-1600E',
                'Operation: Fully automatic',
                'Technology: Warm lamination'
            ],
            badge: 'Auto Feed',
            price: 'Contact us for more details',
            link: '/products/laminator/fulei-auto'
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
            <main className="laminator-main">
                {/* Hero Section */}
                <section className="laminator-hero">
                    <div className="laminator-hero-content">
                        <h1 className="laminator-hero-title">
                            Professional Laminating Machines
                        </h1>
                        <p className="laminator-hero-subtitle">
                            Advanced lamination solutions for documents, signage, and large format materials with precision pressure control and professional results.
                        </p>
                    </div>
                </section>

                {/* Machines Section */}
                <section className="laminator-machines-section">
                    <div className="laminator-section-header">
                        <h2 className="laminator-section-title">Laminator Machine Collection</h2>
                        <p className="laminator-section-subtitle">
                            Professional lamination solutions for every application
                        </p>
                    </div>

                    <div className="laminator-machines-grid">
                        {laminatorMachines.map((machine, index) => (
                            <div key={machine.id} className="laminator-machine-card">
                                <div className="laminator-machine-image">
                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    <div className="laminator-machine-badge">
                                        {machine.badge}
                                    </div>
                                </div>
                                <div className="laminator-machine-content">
                                    <h3 className="laminator-machine-title">{machine.name}</h3>
                                    <p className="laminator-machine-description">
                                        {machine.description}
                                    </p>
                                    <div className="laminator-machine-specs">
                                        {machine.specs.map((spec, specIndex) => (
                                            <div key={specIndex} className="laminator-spec-item">
                                                <div className="laminator-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="laminator-machine-action">
                                        <Link
                                            href={machine.link}
                                            className="laminator-view-btn"
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
                                            className="laminator-machine-price laminator-clickable-price"
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
                <section className="laminator-features-section">
                    <div className="laminator-section-header">
                        <h2 className="laminator-section-title">Advanced Features</h2>
                        <p className="laminator-section-subtitle">
                            Professional lamination technology for superior results
                        </p>
                    </div>

                    <div className="laminator-features-grid">
                        <div className="laminator-feature-card">
                            <div className="laminator-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>Precision Pressure Control</h3>
                            <p>Advanced roller systems with adjustable pressure settings ensure bubble-free lamination and consistent results across all materials.</p>
                        </div>

                        <div className="laminator-feature-card">
                            <div className="laminator-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3>Professional Performance</h3>
                            <p>Heavy-duty construction with automatic feeding systems delivers professional lamination results for high-volume production environments.</p>
                        </div>

                        <div className="laminator-feature-card">
                            <div className="laminator-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3>Versatile Applications</h3>
                            <p>Perfect for documents, signage, photos, large format materials, and specialty substrates with both cold and warm lamination options.</p>
                        </div>
                    </div>
                </section>


            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="laminator-modal-overlay" onClick={closeInquiryModal}>
                    <div className="laminator-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="laminator-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button
                                className="laminator-close-btn"
                                onClick={closeInquiryModal}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="laminator-inquiry-form">
                            <div className="laminator-form-row">
                                <div className="laminator-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="laminator-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="laminator-form-row">
                                <div className="laminator-form-group">
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
                                <div className="laminator-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="laminator-phone-input">
                                        <select name="countryCode" className="laminator-country-select">
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

                            <div className="laminator-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="laminator-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your laminator machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="laminator-form-actions">
                                <button type="submit" className="laminator-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="laminator-btn-secondary">
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