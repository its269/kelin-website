"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import InquiryStorage from '../utils/InquiryStorage';
import './gcc-ar24-desktop.css';

export default function GCCAR24Desktop() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/GCC AR-24 Desktop (1).png');

    const machineDetails = {
        name: 'GCC AR-24',
        model: 'AR-24 Cutter Plotter',
        images: [
            '/GCC AR-24 Desktop (1).png',
            '/GCC AR-24 Desktop (1).png', // Add more AR-24 images if available
        ],
        shortDescription: 'CUTTER PLOTTER - Industrial grade speed with 400mm/sec cutting speed, featuring precise contour cutting with AAS II system for accurate print-and-cut applications.',
        detailedDescription: 'The GCC AR-24 Cutter Plotter is equipped with the AAS II system for automatic detection of registration marks, providing accurate contour cutting ideal for print-and-cut jobs like labels, decals, and custom stickers. With industrial grade speed of 400mm/sec and 250g force, this desktop cutter plotter offers superior functionality and precision for a wide range of applications.',
        features: [
            {
                title: 'Superior Functionality',
                description: 'GCC AR-24 delivers 400mm/sec cutting speed and 250g force, with a 23.6" cutting width—ideal for a wide range of applications.',
                icon: 'precision'
            },
            {
                title: 'Dual Port Connectivity',
                description: 'Equipped with dual-port connectivity with USB and serial ports for data transmission. Ethernet connection enables simultaneous computer and GCC AR-24s communication.',
                icon: 'accuracy'
            },
            {
                title: 'Handy Grooved Cut-off Tool',
                description: 'The handy and unique grooved design allows you to cut off a finished job in a straight line easily reducing the possibility of wasting usable material.',
                icon: 'speed'
            },
            {
                title: 'User-friendly Interface',
                description: 'In addition to the ease of use from the control panel, AR-24 offers the special Wi-Fi networks, which provides a simple and intuitive workflow for users of all levels.',
                icon: 'media'
            },
            {
                title: 'Precise Contour Cutting with AAS II',
                description: 'Equipped with AAS II system for automatic detection of registration marks for accurate contour cutting applications.',
                icon: 'durability'
            },
            {
                title: 'Industrial Grade Performance',
                description: 'Desktop form factor with professional performance suitable for various cutting and plotting applications.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Model', value: 'AR-24' },
            { label: 'Max. Cutting Width', value: 'Up to 600 mm (23.6 in.)' },
            { label: 'Number of Pinch Rollers', value: '3' },
            { label: 'Drive Motor', value: 'Stepper motor' },
            { label: 'Max. Cutting Speed', value: '400 mm/sec (At 45° direction)' },
            { label: 'Diameter of Blade', value: '2.5 mm' },
            { label: 'Power Supply', value: 'AC adapter, 24V DC (1.87A)' },
            { label: 'Operational Method', value: 'Max Media Loading Width' },
            { label: 'Acceptable Material Thickness', value: '0.8 mm (0.03 in.)' },
            { label: 'Cutting Force', value: '5~250 g' },
            { label: 'Offset', value: '0~1.0 mm (with 0.025 mm increment)' },
            { label: 'Control Key', value: '10 keys /2 LEDs' },
            { label: 'Power Consumption', value: '50 watts' }
        ],
        applications: [
            'Labels and Decals',
            'Custom Stickers',
            'Print-and-Cut Jobs',
            'Vinyl Graphics',
            'Sign Making',
            'Vehicle Graphics',
            'Promotional Materials',
            'Craft Projects',
            'Heat Transfer Vinyl',
            'Small Format Cutting'
        ],
        advantages: [
            'Industrial grade speed with 400mm/sec cutting performance',
            'Superior functionality with 250g cutting force and 23.6" width capacity',
            'Dual port connectivity with USB and serial ports for flexible data transmission',
            'Ethernet connection for simultaneous computer communication',
            'Handy grooved cut-off tool for straight line cutting and material efficiency',
            'User-friendly interface with Wi-Fi network support',
            'Precise contour cutting with AAS II automatic registration mark detection',
            'Desktop form factor with professional-grade performance',
            'Ideal for print-and-cut applications like labels, decals, and custom stickers',
            'Easy workflow for users of all skill levels'
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
            <main className="gcc-ar24-main">
                {/* Product Hero Section */}
                <section className="gcc-ar24-hero product-hero">
                    <div className="gcc-ar24-hero-layout">
                        <div className="gcc-ar24-hero-left">
                            <h1 className="gcc-ar24-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="gcc-ar24-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="gcc-ar24-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="gcc-ar24-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="gcc-ar24-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="gcc-ar24-hero-stats product-stats">
                                <div className="gcc-ar24-stat">
                                    <span className="gcc-ar24-stat-number">400mm/s</span>
                                    <span className="gcc-ar24-stat-label">Max Speed</span>
                                </div>
                                <div className="gcc-ar24-stat">
                                    <span className="gcc-ar24-stat-number">250g</span>
                                    <span className="gcc-ar24-stat-label">Force</span>
                                </div>
                                <div className="gcc-ar24-stat">
                                    <span className="gcc-ar24-stat-number">AAS II</span>
                                    <span className="gcc-ar24-stat-label">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div className="gcc-ar24-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="gcc-ar24-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="gcc-ar24-overview-section">
                    <div className="gcc-ar24-overview-container">
                        <h2 className="gcc-ar24-section-title">Product Overview</h2>
                        <p className="gcc-ar24-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="gcc-ar24-features-section">
                    <div className="gcc-ar24-features-container">
                        <div className="gcc-ar24-features-header">
                            <h2 className="gcc-ar24-features-title">Key Features</h2>
                            <p className="gcc-ar24-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="gcc-ar24-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="gcc-ar24-feature-card">
                                    <div className="gcc-ar24-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="gcc-ar24-feature-title">{feature.title}</h3>
                                    <p className="gcc-ar24-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="gcc-ar24-specs-section">
                    <div className="gcc-ar24-specs-container">
                        <h2 className="gcc-ar24-section-title">Technical Specifications</h2>
                        <div className="gcc-ar24-specs-grid">
                            <div className="gcc-ar24-spec-card">
                                <h3 className="gcc-ar24-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="gcc-ar24-spec-item">
                                        <span className="gcc-ar24-spec-label">{spec.label}:</span>
                                        <span className="gcc-ar24-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="gcc-ar24-spec-card">
                                <h3 className="gcc-ar24-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="gcc-ar24-spec-item">
                                        <span className="gcc-ar24-spec-label">{spec.label}:</span>
                                        <span className="gcc-ar24-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="gcc-ar24-applications-section">
                    <div className="gcc-ar24-applications-container">
                        <div className="gcc-ar24-applications-grid">
                            <div className="gcc-ar24-applications-content">
                                <h2 className="gcc-ar24-section-title">Applications</h2>
                                <p className="gcc-ar24-applications-subtitle">
                                    Versatile cutting solutions for professional applications
                                </p>
                                <ul className="gcc-ar24-applications-list">
                                    {machineDetails.applications.map((application, index) => (
                                        <li key={index} className="gcc-ar24-application-item">
                                            <svg className="gcc-ar24-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <section className="gcc-ar24-advantages-section">
                    <div className="gcc-ar24-advantages-container">
                        <h2 className="gcc-ar24-section-title">Why Choose iEcho BK3?</h2>
                        <div className="gcc-ar24-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="gcc-ar24-advantage-item">
                                    <div className="gcc-ar24-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="gcc-ar24-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="gcc-ar24-modal-overlay" onClick={closeInquiryModal}>
                    <div className="gcc-ar24-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="gcc-ar24-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="gcc-ar24-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="gcc-ar24-inquiry-form">
                            <div className="gcc-ar24-form-row">
                                <div className="gcc-ar24-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="gcc-ar24-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="gcc-ar24-form-row">
                                <div className="gcc-ar24-form-group">
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
                                <div className="gcc-ar24-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="gcc-ar24-phone-input">
                                        <select name="countryCode" className="gcc-ar24-country-select">
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

                            <div className="gcc-ar24-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="gcc-ar24-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your BK3 cutting system requirements and any specific questions about this high-speed digital cutting machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="gcc-ar24-form-actions">
                                <button type="submit" className="gcc-ar24-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="gcc-ar24-btn-secondary">
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
