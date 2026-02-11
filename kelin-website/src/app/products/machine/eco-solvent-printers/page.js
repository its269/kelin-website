"use client";
import Header from '../../../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './eco-solvent.css';

export default function EcoSolventPrinters() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);
    const ecoSolventMachines = [
        {
            id: 'smart-rj24-2004',
            name: 'SMART RJ24-2004-i3200',
            image: '/SMART Eco-Solvent Machine.png',
            description: 'Professional eco-solvent printer with heavy duty media system designed for excellent quality outputs in fast-paced environments.',
            specs: [
                'Print Width: 2.0m',
                'Heavy Duty Media System',
                'High Volume Production',
                'i3200 Print Head Technology'
            ],
            badge: 'Heavy Duty',
            price: 'Contact us for more details',
            link: '/smart-rj24-2004-i3200-eco-solvent'
        },
        {
            id: 'xline-eco-solvent',
            name: 'XLINE Eco-Solvent',
            image: '/Apollo Xline (1).png',
            description: 'High-performance printing system designed to tackle diverse range of large-format printing projects with vibrant quality results.',
            specs: [
                'Large Format Printing',
                'Vibrant Color Output',
                'Versatile Media Support',
                'Professional Grade Quality'
            ],
            badge: 'Versatile',
            price: 'Contact us for more details',
            link: '/xline-eco-solvent'
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
        // Handle form submission logic here
        alert('Inquiry submitted successfully!');
        closeInquiryModal();
    };

    return (
        <div>
            <Header />
            <main className="eco-sol-main">
                {/* Hero Section */}
                <section className="eco-sol-hero">
                    <div className="eco-sol-hero-content">
                        <h1 className="eco-sol-hero-title">Eco-Solvent Printers</h1>
                        <p className="eco-sol-hero-subtitle">
                            Discover our comprehensive range of professional eco-solvent printers designed for outdoor signage, vehicle wraps, and durable graphics applications with exceptional quality and environmental responsibility.
                        </p>

                        <div className="eco-sol-hero-stats">
                            <div className="eco-sol-stat">
                                <span className="eco-sol-stat-number">2</span>
                                <span className="eco-sol-stat-label">Machine Models</span>
                            </div>
                            <div className="eco-sol-stat">
                                <span className="eco-sol-stat-number">3+</span>
                                <span className="eco-sol-stat-label">Years Durability</span>
                            </div>
                            <div className="eco-sol-stat">
                                <span className="eco-sol-stat-number">2.0m</span>
                                <span className="eco-sol-stat-label">Max Width</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Machines Grid */}
                <section className="eco-sol-machines-section">
                    <div className="eco-sol-section-header">
                        <h2 className="eco-sol-section-title">Our Eco-Solvent Machines</h2>
                        <p className="eco-sol-section-subtitle">
                            Discover our professional eco-solvent printers, specially manufactured to meet the demands of high volume requests.
                        </p>
                    </div>

                    <div className="eco-sol-machines-grid">
                        {ecoSolventMachines.map((machine) => (
                            <div key={machine.id} className="eco-sol-machine-card">
                                <div className="eco-sol-machine-image">
                                    <img src={machine.image} alt={machine.name} />
                                    <div className="eco-sol-machine-badge">{machine.badge}</div>
                                </div>

                                <div className="eco-sol-machine-content">
                                    <h3 className="eco-sol-machine-title">{machine.name}</h3>
                                    <p className="eco-sol-machine-description">{machine.description}</p>

                                    <div className="eco-sol-machine-specs">
                                        {machine.specs.map((spec, index) => (
                                            <div key={index} className="eco-sol-spec-item">
                                                <div className="eco-sol-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="eco-sol-machine-action">
                                        <Link href={machine.link} className="eco-sol-view-btn">
                                            Read More
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </Link>
                                        <span
                                            className="eco-sol-machine-price eco-sol-clickable-price"
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
                <section className="eco-sol-features-section">
                    <div className="eco-sol-features-container">
                        <div className="eco-sol-features-header">
                            <h2 className="eco-sol-features-title">Why Choose Our Eco-Solvent Printers?</h2>
                        </div>

                        <div className="eco-sol-features-grid">
                            <div className="eco-sol-feature-card">
                                <div className="eco-sol-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <h3 className="eco-sol-feature-title">Environmentally Friendly</h3>
                                <p className="eco-sol-feature-text">
                                    Low VOC emissions and eco-friendly solvent inks that are safe for indoor use during printing while maintaining excellent outdoor durability.
                                </p>
                            </div>

                            <div className="eco-sol-feature-card">
                                <div className="eco-sol-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="5" />
                                        <line x1="12" y1="1" x2="12" y2="3" />
                                        <line x1="12" y1="21" x2="12" y2="23" />
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                        <line x1="1" y1="12" x2="3" y2="12" />
                                        <line x1="21" y1="12" x2="23" y2="12" />
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                    </svg>
                                </div>
                                <h3 className="eco-sol-feature-title">Weather Resistant</h3>
                                <p className="eco-sol-feature-text">
                                    Excellent outdoor durability with UV resistance ensuring your prints last 3+ years without fading or deteriorating.
                                </p>
                            </div>

                            <div className="eco-sol-feature-card">
                                <div className="eco-sol-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <h3 className="eco-sol-feature-title">Vibrant Colors</h3>
                                <p className="eco-sol-feature-text">
                                    Superior color gamut and saturation delivering eye-catching graphics with professional results that stand out.
                                </p>
                            </div>

                            <div className="eco-sol-feature-card">
                                <div className="eco-sol-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </div>
                                <h3 className="eco-sol-feature-title">High Productivity</h3>
                                <p className="eco-sol-feature-text">
                                    Fast printing speeds with reliable performance for demanding commercial applications and high-volume production.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="eco-sol-modal-overlay" onClick={closeInquiryModal}>
                    <div className="eco-sol-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="eco-sol-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button onClick={closeInquiryModal} className="eco-sol-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="eco-sol-inquiry-form">
                            <div className="eco-sol-form-row">
                                <div className="eco-sol-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="eco-sol-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="eco-sol-form-row">
                                <div className="eco-sol-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                        title="Please enter a valid email address (e.g., name@domain.com)"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div className="eco-sol-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="eco-sol-phone-input">
                                        <select name="countryCode" className="eco-sol-country-select">
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
                                            pattern="[0-9\s\-\(\)]{7,15}"
                                            title="Please enter a valid phone number"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="eco-sol-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="eco-sol-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your printing requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="eco-sol-form-actions">
                                <button type="submit" className="eco-sol-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="eco-sol-btn-secondary">
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