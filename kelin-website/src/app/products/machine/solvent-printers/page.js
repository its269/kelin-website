"use client";
import Header from '../../../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './solvent.css';

export default function SolventPrinters() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const solventMachines = [
        {
            id: 'apollo-max-plus-ii',
            name: 'ApolloMax Plus II PZG3208-KV',
            image: '/ApolloMax Plus II PZG3208-KV.png',
            description: 'PRECISION PRINTING, ACCELERATED PERFORMANCE - Industrial-grade speed printing up to 230 m²/h with high-volume, high-speed printing capabilities and industrial Konica Minolta KM512/14PL printheads.',
            specs: [
                'Print Width: 3.2m',
                'Speed: up to 230 m²/h',
                'Konica Minolta KM512 Heads',
                'Up to 1440dpi Resolution'
            ],
            badge: 'High Performance',
            price: 'Contact us for more details',
            link: '/apollomax-plus-II'
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
            <main className="solvent-main">
                {/* Hero Section */}
                <section className="solvent-hero">
                    <div className="solvent-hero-content">
                        <h1 className="solvent-hero-title">Solvent Printers</h1>
                        <p className="solvent-hero-subtitle">
                            Discover our industrial-grade solvent printers designed for heavy-duty outdoor applications, billboards, and maximum durability graphics with superior weather resistance and long-lasting performance.
                        </p>

                        {/* <div className="solvent-hero-stats">
                            <div className="solvent-stat">
                                <span className="solvent-stat-number">1</span>
                                <span className="solvent-stat-label">Machine Model</span>
                            </div>
                            <div className="solvent-stat">
                                <span className="solvent-stat-number">5+</span>
                                <span className="solvent-stat-label">Years Durability</span>
                            </div>
                            <div className="solvent-stat">
                                <span className="solvent-stat-number">3.2m</span>
                                <span className="solvent-stat-label">Max Width</span>
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* Machines Grid */}
                <section className="solvent-machines-section">
                    <div className="solvent-section-header">
                        <h2 className="solvent-section-title">Our Solvent Machines</h2>
                        <p className="solvent-section-subtitle">
                            Discover our industrial solvent printers, specially manufactured to meet the demands of heavy-duty outdoor applications.
                        </p>
                    </div>

                    <div className="solvent-machines-grid">
                        {solventMachines.map((machine) => (
                            <div key={machine.id} className="solvent-machine-card">
                                <div className="solvent-machine-image">
                                    <img src={machine.image} alt={machine.name} />
                                    <div className="solvent-machine-badge">{machine.badge}</div>
                                </div>

                                <div className="solvent-machine-content">
                                    <h3 className="solvent-machine-title">{machine.name}</h3>
                                    <p className="solvent-machine-description">{machine.description}</p>

                                    <div className="solvent-machine-specs">
                                        {machine.specs.map((spec, index) => (
                                            <div key={index} className="solvent-spec-item">
                                                <div className="solvent-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="solvent-machine-action">
                                        <Link href={machine.link} className="solvent-view-btn">
                                            Read More
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </Link>
                                        <span
                                            className="solvent-machine-price solvent-clickable-price"
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
                <section className="solvent-features-section">
                    <div className="solvent-features-container">
                        <div className="solvent-features-header">
                            <h2 className="solvent-features-title">Why Choose Our Solvent Printers?</h2>
                        </div>

                        <div className="solvent-features-grid">
                            <div className="solvent-feature-card">
                                <div className="solvent-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <h3 className="solvent-feature-title">Industrial Strength</h3>
                                <p className="solvent-feature-text">
                                    Built for heavy-duty commercial use with robust construction and reliable performance for continuous operation.
                                </p>
                            </div>

                            <div className="solvent-feature-card">
                                <div className="solvent-feature-icon">
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
                                <h3 className="solvent-feature-title">Maximum Durability</h3>
                                <p className="solvent-feature-text">
                                    Superior outdoor lifespan up to 5+ years with excellent fade resistance and weatherproofing capabilities.
                                </p>
                            </div>

                            <div className="solvent-feature-card">
                                <div className="solvent-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <h3 className="solvent-feature-title">High Productivity</h3>
                                <p className="solvent-feature-text">
                                    Fast printing speeds with reliable performance for demanding commercial applications and high-volume production.
                                </p>
                            </div>

                            <div className="solvent-feature-card">
                                <div className="solvent-feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </div>
                                <h3 className="solvent-feature-title">Large Format Capability</h3>
                                <p className="solvent-feature-text">
                                    Wide format capabilities for billboards, building wraps, and large-scale outdoor advertising applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="solvent-modal-overlay" onClick={closeInquiryModal}>
                    <div className="solvent-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="solvent-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button onClick={closeInquiryModal} className="solvent-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="solvent-inquiry-form">
                            <div className="solvent-form-row">
                                <div className="solvent-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="solvent-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="solvent-form-row">
                                <div className="solvent-form-group">
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
                                <div className="solvent-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="solvent-phone-input">
                                        <select name="countryCode" className="solvent-country-select">
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

                            <div className="solvent-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="solvent-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your printing requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="solvent-form-actions">
                                <button type="submit" className="solvent-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="solvent-btn-secondary">
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