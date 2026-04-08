"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './iecho-pk4.css';

export default function IEchoPK4() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/cutting-machines/PK4 (2).webp');
    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragStartScrollLeftRef = useRef(0);
    const autoScrollFrameRef = useRef(null);
    const segmentWidthRef = useRef(0);

    const applicationImageItems = [
        { image: '/application/pk-application.png', title: 'KT Board Processing' },
        { image: '/application/pk-application(2).png', title: 'PP Paper Cutting' },
        { image: '/application/pk-application(3).png', title: 'Sticker & Vinyl Applications' },
        { image: '/application/pk-application(4).png', title: 'Foam Board Manufacturing' },
        { image: '/application/pk-application(5).png', title: 'Plastic Sheet Processing' },
        { image: '/application/pk-application(6).png', title: 'Magnetic Sticker Production' },
        { image: '/application/pk-application(7).png', title: 'Corrugated Board Cutting' },
        // { image: '/application/pk-application(8).png', title: 'Card Board Processing' },
        // { image: '/application/pk-application(9).png', title: 'Reflective Material Cutting' },
        // { image: '/application/pk-application(10).png', title: 'Industrial Production' },
        // { image: '/application/pk-application(11).png', title: 'Short-Run Manufacturing' },
        // { image: '/application/pk-application(12).png', title: 'Auto Feeding Applications' }
    ];

    const endlessApplicationItems = [...applicationImageItems, ...applicationImageItems, ...applicationImageItems];

    const getSegmentWidth = () => {
        const container = scrollRef.current;
        if (!container) return 0;

        const items = container.querySelectorAll('.iecho-pk4-application-image-item');
        const segmentItemCount = applicationImageItems.length;

        if (items.length <= segmentItemCount) {
            return 0;
        }

        const firstItem = items[0];
        const middleSegmentFirstItem = items[segmentItemCount];

        if (!firstItem || !middleSegmentFirstItem) {
            return 0;
        }

        return middleSegmentFirstItem.offsetLeft - firstItem.offsetLeft;
    };

    const normalizeInfiniteBoundary = () => {
        const container = scrollRef.current;
        if (!container) return;

        const segmentWidth = segmentWidthRef.current || getSegmentWidth();
        if (!segmentWidth) return;

        segmentWidthRef.current = segmentWidth;

        const threshold = 2;
        if (container.scrollLeft <= threshold) {
            container.scrollLeft += segmentWidth;
        } else if (container.scrollLeft >= segmentWidth * 2 - threshold) {
            container.scrollLeft -= segmentWidth;
        }
    };

    const beginDrag = (clientX) => {
        const container = scrollRef.current;
        if (!container) return;

        isDraggingRef.current = true;
        dragStartXRef.current = clientX;
        dragStartScrollLeftRef.current = container.scrollLeft;
    };

    const updateDrag = (clientX) => {
        const container = scrollRef.current;
        if (!container || !isDraggingRef.current) return;

        const dragDistance = clientX - dragStartXRef.current;
        container.scrollLeft = dragStartScrollLeftRef.current - dragDistance;
        normalizeInfiniteBoundary();
    };

    const endDrag = () => {
        isDraggingRef.current = false;
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const syncToMiddleSegment = () => {
            const segmentWidth = getSegmentWidth();
            if (!segmentWidth) return false;

            segmentWidthRef.current = segmentWidth;
            container.scrollLeft = segmentWidth;
            return true;
        };

        if (!syncToMiddleSegment()) {
            requestAnimationFrame(syncToMiddleSegment);
        }

        const autoScroll = () => {
            const currentContainer = scrollRef.current;
            if (!currentContainer) return;

            if (!isDraggingRef.current) {
                currentContainer.scrollLeft += 0.5;
                normalizeInfiniteBoundary();
            }

            autoScrollFrameRef.current = requestAnimationFrame(autoScroll);
        };

        autoScrollFrameRef.current = requestAnimationFrame(autoScroll);

        return () => {
            if (autoScrollFrameRef.current) {
                cancelAnimationFrame(autoScrollFrameRef.current);
            }
        };
    }, []);

    const handleMouseDown = (e) => {
        e.preventDefault();
        beginDrag(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) return;
        e.preventDefault();
        updateDrag(e.clientX);
    };

    const handleMouseUp = () => {
        endDrag();
    };

    const handleMouseLeave = () => {
        endDrag();
    };

    const handleTouchStart = (e) => {
        if (!e.touches?.length) return;
        beginDrag(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDraggingRef.current || !e.touches?.length) return;
        updateDrag(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        endDrag();
    };

    const machineDetails = {
        name: 'iecho pk4',
        model: 'PK4 Automatic Intelligent Cutting System',
        images: [
            '/cutting-machines/PK4 (2).webp',
            '/cutting-machines/PK4 (2).webp',
        ],
        shortDescription: 'SMART CUTTING SYSTEM WITH AUTO FEEDING - Industrial grade speed up to 1000mm/s. Performs automatic sheet feeding, precision cutting, and collection. Ideal for short-run, on-demand production with minimal labor cost and maximum efficiency.',
        detailedDescription: 'The iecho pk4 Automatic Intelligent Cutting System features advanced automation with industrial grade cutting speed of 1000mm/s. Equipped with smart cutting system, auto feeding capabilities, and precision cutting technology, it offers maximum efficiency for professional applications. The system includes high frequency electronic oscillating knife, precision automatic positioning system, barcode management system, and automatic feeding system for streamlined production workflow.',
        features: [
            {
                title: 'High Frequency Electronic Oscillating Knife',
                description: 'Notching main be more various and thicker, to meet different cutting requirements with superior precision and efficiency.',
                icon: 'precision'
            },
            {
                title: 'Precision Automatic Positioning System',
                description: 'Equipped with a high-definition CCD camera, it enables automatic, precise positioning and contour cutting—avoiding material alignment and print distortion for accurate, hassle-free cutting.',
                icon: 'accuracy'
            },
            {
                title: 'Barcode Management System',
                description: 'Scanning barcodes allows quick reading of cutting tasks, enabling streamlined workflow and efficient production management.',
                icon: 'speed'
            },
            {
                title: 'Automatic Feeding System',
                description: 'The fully automatic feeding system streamlines the entire production process by continuously and accurately feeding materials into the machine.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Cutting Head Type', value: 'PK, PK Plus' },
            { label: 'Machine Type', value: 'PK0604, PK0705, PK0604 Plus, PK0705 Plus' },
            { label: 'Cutting Area (W×H)', value: '600mm×400mm, 750mm×530mm, 600mm×400mm, 750mm×530mm' },
            { label: 'Flooring Area (W×H)', value: '2350mm×900mm×1350mm, 2600mm×1000mm×1350mm, 2350mm×900mm×1150mm, 2600mm×1000mm×1350mm' },
            { label: 'Cutting Tool', value: 'Universal Cutting Tool, Creasing Wheel, Kiss Cut Tool' },
            { label: 'Cutting Material (PK)', value: 'Car sticker, Sticker, Card Paper, PP Paper, reflective material' },
            { label: 'Cutting Material (PK Plus)', value: 'KT Board, PP Paper, Foam Board, Sticker, Reflective Material, Card Board, Plastic Sheet, Corrugated Board, Grey Board, Corrugated Plastic, ABS Board, Magnetic Sticker' },
            { label: 'Cutting Tool (Plus)', value: '<6mm' },
            { label: 'Media', value: 'Vacuum System' },
            { label: 'Max Cutting Speed', value: '1000mm/s' },
            { label: 'Data Format', value: 'PLT, DXF, HPGL, PDF, EPS' },
            { label: 'Cutting Accuracy', value: '±0.1mm' },
            { label: 'Voltage', value: '220V±10% 50Hz' },
            { label: 'Power', value: '4Kw' }
        ],
        applications: [
            'KT Board Processing',
            'PP Paper Cutting',
            'Sticker & Vinyl Applications',
            'Foam Board Manufacturing',
            'Plastic Sheet Processing',
            'Magnetic Sticker Production',
            'Corrugated Board Cutting',
            'Card Board Processing',
            'Reflective Material Cutting',
            'Industrial Grade Production',
            'Short-Run On-Demand Manufacturing',
            'Automated Sheet Feeding Applications'
        ],
        advantages: [
            'Industrial grade speed up to 1000mm/s for maximum efficiency',
            'Smart cutting system with auto feeding capabilities',
            'High frequency electronic oscillating knife technology',
            'Precision automatic positioning system with CCD camera',
            'Barcode management system for streamlined workflow',
            'Automatic feeding system for continuous operation',
            'Multiple model options (PK0604, PK0705, Plus variants)',
            'Vacuum system for secure material handling',
            'Wide range of compatible materials and applications',
            'Professional grade accuracy of ±0.1mm',
            'Supports multiple data formats (PLT, DXF, HPGL, PDF, EPS)',
            'Ideal for short-run, on-demand production with minimal labor cost'
        ]
    };

    const openInquiryModal = () => {
        setInquiryModalOpen(true);
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
    };


    const [inquiryStatus, setInquiryStatus] = useState(null);
    const [inquirySubmitting, setInquirySubmitting] = useState(false);

    const handleSubmitInquiry = async (e) => {
        e.preventDefault();
        setInquirySubmitting(true);
        setInquiryStatus(null);

        const form = e.target;
        const data = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            countryCode: form.countryCode.value,
            phone: form.phone.value,
            company: form.company.value,
            message: form.message.value,
            _subject: `Inquiry: iEcho PK4`,
            'Page Source': 'iEcho PK4',
            'Page URL': typeof window !== 'undefined' ? window.location.href : '',
            'Submitted At': new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Manila',
                dateStyle: 'full',
                timeStyle: 'long'
            })
        };
        data['_cc'] = 'info@kelinph.com';
        data['_replyto'] = data.email || '';
        data['name'] = `${data.firstName || ''} ${data.lastName || ''}`.trim();
        data['inquiryType'] = 'product-inquiry';

        try {
            const response = await fetch('https://formspree.io/f/mvzwzkkd', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                setInquiryStatus('success');
                form.reset();
            } else {
                setInquiryStatus('error');
            }
        } catch (err) {
            setInquiryStatus('error');
        } finally {
            setInquirySubmitting(false);
        }
    };

    return (
        <div>
            <Header />
            <main className="iecho-pk4-main">
                {/* Product Hero Section */}
                <section className="iecho-pk4-hero product-hero">
                    <div className="iecho-pk4-hero-layout">
                        <div className="iecho-pk4-hero-left">
                            <h1 className="iecho-pk4-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="iecho-pk4-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="iecho-pk4-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="iecho-pk4-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="iecho-pk4-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="iecho-pk4-hero-stats product-stats">
                                <div className="iecho-pk4-stat">
                                    <span className="iecho-pk4-stat-number">1000mm/s</span>
                                    <span className="iecho-pk4-stat-label">Industrial Speed</span>
                                </div>
                                <div className="iecho-pk4-stat">
                                    <span className="iecho-pk4-stat-number">750mm</span>
                                    <span className="iecho-pk4-stat-label">Max Cutting Area</span>
                                </div>
                                <div className="iecho-pk4-stat">
                                    <span className="iecho-pk4-stat-number">±0.1mm</span>
                                    <span className="iecho-pk4-stat-label">Precision</span>
                                </div>
                            </div>
                        </div>
                        <div className="iecho-pk4-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="iecho-pk4-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="iecho-pk4-overview-section">
                    <div className="iecho-pk4-overview-container">
                        <h2 className="iecho-pk4-section-title">Product Overview</h2>
                        <p className="iecho-pk4-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="iecho-pk4-features-section">
                    <div className="iecho-pk4-features-container">
                        <div className="iecho-pk4-features-header">
                            <h2 className="iecho-pk4-features-title">Key Features</h2>
                            <p className="iecho-pk4-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="iecho-pk4-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="iecho-pk4-feature-card">
                                    <div className="iecho-pk4-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="iecho-pk4-feature-title">{feature.title}</h3>
                                    <p className="iecho-pk4-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="iecho-pk4-specs-section">
                    <div className="iecho-pk4-specs-container">
                        <h2 className="iecho-pk4-section-title">Technical Specifications</h2>
                        <div className="iecho-pk4-specs-grid">
                            <div className="iecho-pk4-spec-card">
                                <h3 className="iecho-pk4-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="iecho-pk4-spec-item">
                                        <span className="iecho-pk4-spec-label">{spec.label}:</span>
                                        <span className="iecho-pk4-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="iecho-pk4-spec-card">
                                <h3 className="iecho-pk4-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="iecho-pk4-spec-item">
                                        <span className="iecho-pk4-spec-label">{spec.label}:</span>
                                        <span className="iecho-pk4-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="iecho-pk4-applications-section">
                    <div className="iecho-pk4-applications-container">
                        <h2 className="iecho-pk4-section-title">Applications</h2>
                        <p className="iecho-pk4-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="iecho-pk4-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="iecho-pk4-applications-image-grid">
                                {endlessApplicationItems.map((item, index) => (
                                    <div key={`${item.title}-${index}`} className="iecho-pk4-application-image-item">
                                        <img src={item.image} alt={item.title} draggable="false" />
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="iecho-pk4-advantages-section">
                    <div className="iecho-pk4-advantages-container">
                        <h2 className="iecho-pk4-section-title">Why Choose iecho pk4?</h2>
                        <div className="iecho-pk4-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="iecho-pk4-advantage-item">
                                    <svg className="iecho-pk4-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="iecho-pk4-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="iecho-pk4-modal-overlay" onClick={closeInquiryModal}>
                    <div className="iecho-pk4-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="iecho-pk4-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="iecho-pk4-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="iecho-pk4-inquiry-form">
                            <div className="iecho-pk4-form-row">
                                <div className="iecho-pk4-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="iecho-pk4-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="iecho-pk4-form-row">
                                <div className="iecho-pk4-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                                        title="Please enter a valid email address (e.g., name@domain.com)"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div className="iecho-pk4-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="iecho-pk4-phone-input">
                                        <select name="countryCode" className="iecho-pk4-country-select" defaultValue="+63">
                                            <option value="+63">🇵🇭 +63</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+86">🇨🇳 +86</option>
                                            <option value="+81">🇯🇵 +81</option>
                                            <option value="+82">🇰🇷 +82</option>
                                            <option value="+65">🇸🇬 +65</option>
                                            <option value="+60">🇲🇾 +60</option>
                                            <option value="+66">🇹🇭 +66</option>
                                            <option value="+84">🇻🇳 +84</option>
                                            <option value="+62">🇮🇩 +62</option>
                                            <option value="+91">🇮🇳 +91</option>
                                            <option value="+61">🇦🇺 +61</option>
                                            <option value="+49">🇩🇪 +49</option>
                                            <option value="+33">🇫🇷 +33</option>
                                        </select>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="123 456 7890"
                                            pattern="[0-9\s\-()]{7,15}"
                                            title="Please enter a valid phone number"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="iecho-pk4-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="iecho-pk4-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="iecho-pk4-form-actions">
                                <button type="submit" className="iecho-pk4-btn-primary" disabled={inquirySubmitting}>
                                    {inquirySubmitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-pk4-btn-secondary">
                                    Cancel
                                </button>
                            </div>
                            {inquiryStatus === 'success' && (
                                <div className="form-status success" style={{ marginTop: 8 }}>
                                    <p>Thank you! Your inquiry has been sent. We will contact you soon.</p>
                                </div>
                            )}
                            {inquiryStatus === 'error' && (
                                <div className="form-status error" style={{ marginTop: 8 }}>
                                    <p>Sorry, there was an error sending your inquiry. Please try again.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
