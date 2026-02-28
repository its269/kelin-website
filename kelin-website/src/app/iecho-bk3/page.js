"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import InquiryStorage from '../utils/InquiryStorage';
import './iecho-bk3.css';

export default function IEchoBK3() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/bk3.png');

    const machineDetails = {
        name: 'iEcho BK3',
        model: 'BK3 High Speed Digital Cutting System',
        images: [
            '/bk3.png',
            '/bk3.png', // Add more images if available
        ],
        shortDescription: 'HIGH SPEED DIGITAL CUTTING SYSTEM - Fully automatic production with minimize manual intervention, featuring advanced conveyor system and high-precision cutting capabilities.',
        detailedDescription: 'The BK3 High Speed Digital Cutting System is a fully automated cutting solution designed for high-volume production. Material is automatically sent to the loading area by the sheet feeder, fed to the cutting area with automatic conveyor system, and collected after cutting. The system minimizes manual intervention while maximizing productivity. BK3 can realize through cutting, kiss cutting, milling, punching, creasing and marking functions with high speed and high precision. Perfect for sample making, short run and mass production in sign, advertising printing and packaging industries.',
        features: [
            {
                title: 'Fully Automatic Production',
                description: 'Material will be sent to the loading area by the sheet feeder. Feed material to the cutting area with automatic conveyor system. Materials after cut will be sent to the collecting table with minimal manual intervention.',
                icon: 'precision'
            },
            {
                title: 'Aviation Aluminum Table',
                description: 'Equipped with Regional Air Suction, the table has a better suction effect for secure material holding during cutting operations.',
                icon: 'accuracy'
            },
            {
                title: 'Efficient Cutting Heads',
                description: 'The max cutting speed is 1.5m/s (4-6 times faster than manual cutting), which highly improves the production efficiency.',
                icon: 'speed'
            },
            {
                title: 'Vacuum Section Control System',
                description: 'BK3 suction area can be turned on/off individually to have a more dedicated working area with more suction power and less waste of energy. The vacuum power can be controlled by frequency conversion system.',
                icon: 'media'
            },
            {
                title: 'IECHO Continuous Cutting System',
                description: 'Intelligent conveyor system makes feeding, cutting and collecting to work together. Continuous cutting can cut the long pieces, saving labor cost and increasing productivity.',
                icon: 'durability'
            },
            {
                title: 'Precise Automatic Positioning System',
                description: 'With high precision CCD camera, BK3 realizes the precise position and registration cutting for different materials. It solves the problems of manual positioning deviation and print deformation.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'BK3 High Speed Digital Cutting System' },
            { label: 'Max Cutting Speed', value: '1.5m/s (1500mm/s)' },
            { label: 'Cutting Functions', value: 'Through cutting, Kiss cutting, Milling, Punching, Creasing, Marking' },
            { label: 'Positioning System', value: 'High precision CCD camera for automatic positioning' },
            { label: 'Feeding System', value: 'Automatic sheet feeder with conveyor system' },
            { label: 'Collection System', value: 'Automatic material collection table' },
            { label: 'Table Type', value: 'Aviation aluminum table with regional air suction' },
            { label: 'Vacuum Control', value: 'Individual section control with frequency conversion' },
            { label: 'Knife Initialization', value: 'Automatic knife initialization with displacement sensor' },
            { label: 'Continuous Cutting', value: 'Intelligent conveyor system for long pieces' },
            { label: 'Industries', value: 'Sign making, Advertising printing, Packaging' },
            { label: 'Production Type', value: 'Sample making, Short run, Mass production' },
            { label: 'Manual Intervention', value: 'Minimal - Fully automated process' },
            { label: 'Efficiency Improvement', value: '4-6 times faster than manual cutting' },
            { label: 'Registration Cutting', value: 'Precise position and registration for printed materials' },
            { label: 'System Integration', value: 'Stacker and collection system included' }
        ],
        applications: [
            'Sign Industry Sample Making',
            'Advertising Printing Production',
            'Packaging Industry Mass Production',
            'Short Run Production',
            'Through Cutting Operations',
            'Kiss Cutting Applications',
            'Milling and Punching',
            'Creasing and Marking',
            'High-Speed Production Lines',
            'Automated Manufacturing Processes'
        ],
        advantages: [
            'Fully automatic production with minimal manual intervention',
            'High-speed cutting up to 1.5m/s (4-6 times faster than manual)',
            'Aviation aluminum table with regional air suction',
            'Intelligent conveyor system for feeding, cutting and collecting',
            'Vacuum section control system with frequency conversion',
            'Automatic knife initialization with displacement sensor',
            'High precision CCD camera for accurate positioning',
            'Continuous cutting capability for long pieces',
            'Multiple cutting functions: through cutting, kiss cutting, milling, punching, creasing, marking',
            'Suitable for sample making, short run and mass production'
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

        // Extract form data
        const formData = new FormData(e.target);
        const inquiryData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company') || 'Not specified',
            machine: machineDetails.name,
            message: formData.get('message'),
            countryCode: formData.get('countryCode')
        };

        // Save to storage
        const savedInquiry = InquiryStorage.saveInquiry(inquiryData);

        if (savedInquiry) {
            alert('Thank you for your inquiry! We will contact you soon.');
            closeInquiryModal();
            // Reset form
            e.target.reset();
        } else {
            alert('There was an error submitting your inquiry. Please try again.');
        }
    };

    return (
        <div>
            <Header />
            <main className="iecho-bk3-main">
                {/* Product Hero Section */}
                <section className="iecho-bk3-hero product-hero">
                    <div className="iecho-bk3-hero-layout">
                        <div className="iecho-bk3-hero-left">
                            <h1 className="iecho-bk3-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="iecho-bk3-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="iecho-bk3-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="iecho-bk3-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="iecho-bk3-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="iecho-bk3-hero-stats product-stats">
                                <div className="iecho-bk3-stat">
                                    <span className="iecho-bk3-stat-number">1.5m/s</span>
                                    <span className="iecho-bk3-stat-label">Max Speed</span>
                                </div>
                                <div className="iecho-bk3-stat">
                                    <span className="iecho-bk3-stat-number">4-6x</span>
                                    <span className="iecho-bk3-stat-label">Faster</span>
                                </div>
                                <div className="iecho-bk3-stat">
                                    <span className="iecho-bk3-stat-number">CCD</span>
                                    <span className="iecho-bk3-stat-label">Precision</span>
                                </div>
                            </div>
                        </div>
                        <div className="iecho-bk3-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="iecho-bk3-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="iecho-bk3-overview-section">
                    <div className="iecho-bk3-overview-container">
                        <h2 className="iecho-bk3-section-title">Product Overview</h2>
                        <p className="iecho-bk3-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="iecho-bk3-features-section">
                    <div className="iecho-bk3-features-container">
                        <div className="iecho-bk3-features-header">
                            <h2 className="iecho-bk3-features-title">Key Features</h2>
                            <p className="iecho-bk3-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="iecho-bk3-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="iecho-bk3-feature-card">
                                    <div className="iecho-bk3-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="iecho-bk3-feature-title">{feature.title}</h3>
                                    <p className="iecho-bk3-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="iecho-bk3-specs-section">
                    <div className="iecho-bk3-specs-container">
                        <h2 className="iecho-bk3-section-title">Technical Specifications</h2>
                        <div className="iecho-bk3-specs-grid">
                            <div className="iecho-bk3-spec-card">
                                <h3 className="iecho-bk3-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="iecho-bk3-spec-item">
                                        <span className="iecho-bk3-spec-label">{spec.label}:</span>
                                        <span className="iecho-bk3-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="iecho-bk3-spec-card">
                                <h3 className="iecho-bk3-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="iecho-bk3-spec-item">
                                        <span className="iecho-bk3-spec-label">{spec.label}:</span>
                                        <span className="iecho-bk3-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="iecho-bk3-applications-section">
                    <div className="iecho-bk3-applications-container">
                        <div className="iecho-bk3-applications-grid">
                            <div className="iecho-bk3-applications-content">
                                <h2 className="iecho-bk3-section-title">Applications</h2>
                                <p className="iecho-bk3-applications-subtitle">
                                    Versatile cutting solutions for professional applications
                                </p>
                                <ul className="iecho-bk3-applications-list">
                                    {machineDetails.applications.map((application, index) => (
                                        <li key={index} className="iecho-bk3-application-item">
                                            <svg className="iecho-bk3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 12l2 2 4-4" />
                                                <circle cx="12" cy="12" r="10" />
                                            </svg>
                                            {application}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="iecho-bk3-advantages-section">
                    <div className="iecho-bk3-advantages-container">
                        <h2 className="iecho-bk3-section-title">Why Choose iEcho BK3?</h2>
                        <div className="iecho-bk3-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="iecho-bk3-advantage-item">
                                    <div className="iecho-bk3-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="iecho-bk3-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="iecho-bk3-modal-overlay" onClick={closeInquiryModal}>
                    <div className="iecho-bk3-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="iecho-bk3-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="iecho-bk3-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="iecho-bk3-inquiry-form">
                            <div className="iecho-bk3-form-row">
                                <div className="iecho-bk3-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="iecho-bk3-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="iecho-bk3-form-row">
                                <div className="iecho-bk3-form-group">
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
                                <div className="iecho-bk3-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="iecho-bk3-phone-input">
                                        <select name="countryCode" className="iecho-bk3-country-select">
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

                            <div className="iecho-bk3-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="iecho-bk3-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your BK3 cutting system requirements and any specific questions about this high-speed digital cutting machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="iecho-bk3-form-actions">
                                <button type="submit" className="iecho-bk3-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-bk3-btn-secondary">
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