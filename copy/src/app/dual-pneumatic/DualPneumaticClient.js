"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './dual-pneumatic.css';

export default function DualPneumatic() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/SUBL Dual Pneumatic Sublimation Machine 80cm x 100cm (1).webp');

    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);

    const applicationItems = [
        { image: '/application/pneumatic/1.png', label: 'Full Jersey Sublimation' },
        { image: '/application/pneumatic/2.png', label: 'Jersey' },
        { image: '/application/pneumatic/3.png', label: 'T-Shirt Heat Transfer' },
        { image: '/application/pneumatic/4.png', label: 'Beachwear Sublimation' },
        { image: '/application/pneumatic/5.png', label: 'Custom Apparel' },
    ];

    const loopedApplicationItems = [...applicationItems, ...applicationItems, ...applicationItems];

    const normalizeInfiniteScroll = () => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        const segmentWidth = scrollElement.scrollWidth / 3;
        const boundaryOffset = 4;
        if (scrollElement.scrollLeft <= boundaryOffset) {
            scrollElement.scrollLeft += segmentWidth;
        } else if (scrollElement.scrollLeft >= segmentWidth * 2 - boundaryOffset) {
            scrollElement.scrollLeft -= segmentWidth;
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        const initializeLoopPosition = () => {
            const segmentWidth = scrollElement.scrollWidth / 3;
            scrollElement.scrollLeft = segmentWidth;
        };
        initializeLoopPosition();
        window.addEventListener('resize', initializeLoopPosition);
        return () => window.removeEventListener('resize', initializeLoopPosition);
    }, []);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        const speedPixelsPerMs = 0.05;
        const animate = (timestamp) => {
            if (lastTimestampRef.current === 0) lastTimestampRef.current = timestamp;
            const delta = timestamp - lastTimestampRef.current;
            lastTimestampRef.current = timestamp;
            if (!isDraggingRef.current && scrollRef.current) {
                scrollRef.current.scrollLeft += delta * speedPixelsPerMs;
                normalizeInfiniteScroll();
            }
            animationFrameRef.current = window.requestAnimationFrame(animate);
        };
        animationFrameRef.current = window.requestAnimationFrame(animate);
        return () => {
            if (animationFrameRef.current) window.cancelAnimationFrame(animationFrameRef.current);
            lastTimestampRef.current = 0;
        };
    }, []);

    const handleMouseDown = (e) => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        isDraggingRef.current = true;
        startXRef.current = e.pageX - scrollElement.offsetLeft;
        scrollLeftRef.current = scrollElement.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) return;
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        e.preventDefault();
        const x = e.pageX - scrollElement.offsetLeft;
        const walk = (x - startXRef.current) * 2;
        scrollElement.scrollLeft = scrollLeftRef.current - walk;
        normalizeInfiniteScroll();
    };

    const handleMouseUp = () => { isDraggingRef.current = false; };
    const handleMouseLeave = () => { isDraggingRef.current = false; };

    const handleTouchStart = (e) => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        isDraggingRef.current = true;
        startXRef.current = e.touches[0].pageX - scrollElement.offsetLeft;
        scrollLeftRef.current = scrollElement.scrollLeft;
    };

    const handleTouchMove = (e) => {
        if (!isDraggingRef.current) return;
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        const x = e.touches[0].pageX - scrollElement.offsetLeft;
        const walk = (x - startXRef.current) * 2;
        scrollElement.scrollLeft = scrollLeftRef.current - walk;
        normalizeInfiniteScroll();
    };

    const handleTouchEnd = () => { isDraggingRef.current = false; };

    const machineDetails = {
        name: 'Dual Pneumatic Heat Press Machine',
        model: '80cm x 100cm | 100cm x 120cm',
        images: [
            '/sublimation_dtf/SUBL Dual Pneumatic Sublimation Machine 80cm x 100cm (1).webp',
            '/sublimation_dtf/SUBL Dual Pneumatic Sublimation Machine 80cm x 100cm (1).webp', // Add more images if available
        ],
        shortDescription: 'ADVANCED PULLING-TYPE PLATFORM DESIGN - A user-friendly, energy-saving upgrade with a sliding frame and heat-resistant mesh for easier operation, improved safety, and efficient heat distribution.',
        detailedDescription: 'The Dual Pneumatic Heat Press Machine features an advanced pulling-type platform design that provides user-friendly operation and energy efficiency. With uniform heating technology and digital microprocessor control, it delivers consistent temperature across a large working area while ensuring reliable and uniform heat distribution. The machine offers dual manual/automatic modes with aluminum-cast heater and base for enhanced durability and performance.',
        features: [
            {
                title: 'Uniform Heating Technology',
                description: 'Consistent temperature across a large working area. Ensures reliable and uniform heat distribution.',
                icon: 'temperature'
            },
            {
                title: 'Digital Microprocessor Control',
                description: 'Precise time and temperature management. A digital controller accurately sets and displays both time and temperature, enhancing output quality and reducing human error.',
                icon: 'digital'
            },
            {
                title: 'Aluminum-Cast Heater and Base',
                description: 'Both the heater and base are made from aluminum casting, delivering even heat and consistent printing pressure.',
                icon: 'aluminum'
            },
            {
                title: 'Dual Manual/Automatic Modes',
                description: 'Operators can easily switch between manual and automatic modes, enabling high efficiency and adaptability to varying job requirements.',
                icon: 'modes'
            },
            {
                title: 'Advanced Pulling-Type Platform Design',
                description: 'User-friendly, energy-saving upgrade with sliding frame and heat-resistant mesh for easier operation, improved safety, and efficient heat distribution.',
                icon: 'platform'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'Dual Pneumatic Heat Press' },
            { label: 'Available Sizes', value: '80cm x 100cm | 100cm x 120cm' },
            { label: '80cm x 100cm - Size', value: '80*100' },
            { label: '80cm x 100cm - Power', value: '9 KW' },
            { label: '80cm x 100cm - Temperature Range', value: '0-399°C' },
            { label: '80cm x 100cm - Voltage', value: '220/380' },
            { label: '80cm x 100cm - Time Range', value: '0-999 secs' },
            { label: '80cm x 100cm - Pressure of Work', value: '0-8 kg/cm²' },
            { label: '100cm x 120cm - Size', value: '100*120' },
            { label: '100cm x 120cm - Power', value: '12 KW' },
            { label: '100cm x 120cm - Temperature Range', value: '0-399°C' },
            { label: '100cm x 120cm - Voltage', value: '220/380' },
            { label: '100cm x 120cm - Time Range', value: '0-999 secs' },
            { label: '100cm x 120cm - Pressure of Work', value: '0-8 kg/cm²' },
            { label: 'Working Pressure', value: 'Up to 8 kg/cm²' }
        ],
        applications: [
            'Custom Apparel Printing',
            'Sportswear and Team Jerseys',
            'T-shirt Heat Transfer',
            'Textile Decoration',
            'Heat Press Applications',
            'Large Format Heat Transfer',
            'Commercial Garment Production',
            'Fashion and Clothing Industry',
            'Promotional Products',
            'Custom Design Transfer',
            'Professional Heat Press Operations',
            'Industrial Textile Processing'
        ],
        advantages: [
            'Advanced pulling-type platform design for user-friendly operation',
            'Uniform heating technology ensures consistent temperature distribution',
            'Digital microprocessor control for precise time and temperature management',
            'Aluminum-cast heater and base for even heat and consistent printing pressure',
            'Dual manual/automatic modes for high efficiency and adaptability',
            'Large working area up to 100cm x 120cm for versatile applications',
            'Energy-saving design with improved safety features',
            'Heat-resistant mesh for efficient heat distribution',
            'Working pressure up to 8 kg/cm² for strong adhesion',
            'Temperature range 0-399°C suitable for various materials',
            'Professional-grade construction for commercial use',
            'Sliding frame design for easier operation and improved safety'
        ]
    };

    const openInquiryModal = () => {
        setInquiryModalOpen(true);
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
    };


    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null); // null | true | false

    const handleSubmitInquiry = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitSuccess(null);
        const form = e.target;
        const formData = new FormData(form);
        // Combine country code and phone
        const countryCode = formData.get('countryCode') || '';
        const phone = formData.get('phone') || '';
        formData.set('phone', `${countryCode} ${phone}`);
        formData.delete('countryCode');
        formData.append('_cc', 'info@kelinph.com');
        formData.append('Page Source', 'Dual Pneumatic Sublimation Machine');
        formData.append('_replyto', formData.get('email') || '');
        formData.append('_subject', 'Inquiry: Dual Pneumatic Sublimation Machine');
        formData.append('Page URL', typeof window !== 'undefined' ? window.location.href : '');
        formData.append('Submitted At', new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
        formData.append('name', `${formData.get('firstName') || ''} ${formData.get('lastName') || ''}`.trim());
        formData.append('inquiryType', 'product-inquiry');
        try {
            const res = await fetch('https://formspree.io/f/mvzwzkkd', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData,
            });
            if (res.ok) {
                setSubmitSuccess(true);
                form.reset();
                setTimeout(() => {
                    setInquiryModalOpen(false);
                    setSubmitSuccess(null);
                }, 2000);
            } else {
                setSubmitSuccess(false);
            }
        } catch (err) {
            setSubmitSuccess(false);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <Header />
            <main className="dual-pneumatic-main">
                {/* Product Hero Section */}
                <section className="dual-pneumatic-hero product-hero">
                    <div className="dual-pneumatic-hero-layout">
                        <div className="dual-pneumatic-hero-left">
                            <h1 className="dual-pneumatic-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="dual-pneumatic-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="dual-pneumatic-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="dual-pneumatic-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="dual-pneumatic-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="dual-pneumatic-hero-stats product-stats">
                                <div className="dual-pneumatic-stat">
                                    <span className="dual-pneumatic-stat-number">8 kg/cm²</span>
                                    <span className="dual-pneumatic-stat-label">Working Pressure</span>
                                </div>
                                <div className="dual-pneumatic-stat">
                                    <span className="dual-pneumatic-stat-number">0-399°C</span>
                                    <span className="dual-pneumatic-stat-label">Temp Range</span>
                                </div>
                                <div className="dual-pneumatic-stat">
                                    <span className="dual-pneumatic-stat-number">100x120cm</span>
                                    <span className="dual-pneumatic-stat-label">Max Size</span>
                                </div>
                            </div>
                        </div>
                        <div className="dual-pneumatic-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="dual-pneumatic-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="dual-pneumatic-overview-section">
                    <div className="dual-pneumatic-overview-container">
                        <h2 className="dual-pneumatic-section-title">Product Overview</h2>
                        <p className="dual-pneumatic-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="dual-pneumatic-features-section">
                    <div className="dual-pneumatic-features-container">
                        <div className="dual-pneumatic-features-header">
                            <h2 className="dual-pneumatic-features-title">Key Features</h2>
                            <p className="dual-pneumatic-features-subtitle">
                                Advanced dual pneumatic heat press technology for professional results
                            </p>
                        </div>

                        <div className="dual-pneumatic-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="dual-pneumatic-feature-card">
                                    <div className="dual-pneumatic-feature-icon">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Uniform heating: even heat waves */}
                                                <rect x="3" y="13" width="18" height="4" rx="1" />
                                                <path d="M7 13 C7 10 9 8 9 5" />
                                                <path d="M12 13 C12 10 14 8 14 5" />
                                                <path d="M17 13 C17 10 19 8 19 5" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Digital microprocessor: chip/CPU */}
                                                <rect x="7" y="7" width="10" height="10" rx="1" />
                                                <line x1="7" y1="10" x2="4" y2="10" />
                                                <line x1="7" y1="14" x2="4" y2="14" />
                                                <line x1="17" y1="10" x2="20" y2="10" />
                                                <line x1="17" y1="14" x2="20" y2="14" />
                                                <line x1="10" y1="7" x2="10" y2="4" />
                                                <line x1="14" y1="7" x2="14" y2="4" />
                                                <line x1="10" y1="17" x2="10" y2="20" />
                                                <line x1="14" y1="17" x2="14" y2="20" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Aluminum-cast heater: solid block/plate */}
                                                <rect x="3" y="8" width="18" height="8" rx="2" />
                                                <line x1="7" y1="8" x2="7" y2="16" />
                                                <line x1="12" y1="8" x2="12" y2="16" />
                                                <line x1="17" y1="8" x2="17" y2="16" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Dual manual/automatic: two-way toggle */}
                                                <line x1="3" y1="12" x2="21" y2="12" />
                                                <path d="M7 6 L12 12 L7 18" />
                                                <path d="M17 6 L12 12 L17 18" />
                                            </svg>
                                        )}
                                        {index === 4 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Pulling-type platform: pull-out drawer */}
                                                <rect x="2" y="6" width="20" height="12" rx="2" />
                                                <line x1="8" y1="12" x2="16" y2="12" />
                                                <polyline points="12 9 16 12 12 15" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="dual-pneumatic-feature-title">{feature.title}</h3>
                                    <p className="dual-pneumatic-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="dual-pneumatic-specs-section">
                    <div className="dual-pneumatic-specs-container">
                        <h2 className="dual-pneumatic-section-title">Technical Specifications</h2>
                        <p className="dual-pneumatic-section-subtitle">
                            Complete technical details for dual pneumatic heat press machine
                        </p>
                        <div className="dual-pneumatic-specs-table-wrapper">
                            <div className="dual-pneumatic-spec-table">
                                <div className="dual-pneumatic-spec-table-header">
                                    <h3 className="dual-pneumatic-spec-table-title">
                                        <span className="dual-pneumatic-spec-icon">⚙️</span>
                                        Machine Specifications
                                    </h3>
                                </div>
                                <div className="dual-pneumatic-spec-table-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="dual-pneumatic-spec-row">
                                            <div className="dual-pneumatic-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="dual-pneumatic-spec-divider"></div>
                                            <div className="dual-pneumatic-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="dual-pneumatic-applications-section">
                    <div className="dual-pneumatic-applications-container">
                        <h2 className="dual-pneumatic-section-title">Applications</h2>
                        <p className="dual-pneumatic-applications-subtitle">
                            Versatile dual pneumatic heat press solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="dual-pneumatic-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="dual-pneumatic-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="dual-pneumatic-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="dual-pneumatic-advantages-section">
                    <div className="dual-pneumatic-advantages-container">
                        <h2 className="dual-pneumatic-section-title">Why Choose Dual Pneumatic Heat Press?</h2>
                        <div className="dual-pneumatic-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="dual-pneumatic-advantage-item">
                                    <svg className="dual-pneumatic-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="dual-pneumatic-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="dual-pneumatic-modal-overlay" onClick={closeInquiryModal}>
                    <div className="dual-pneumatic-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="dual-pneumatic-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="dual-pneumatic-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="dual-pneumatic-inquiry-form">
                            {submitSuccess === true && (
                                <div className="dual-pneumatic-form-success">Thank you for your inquiry! We will contact you soon.</div>
                            )}
                            {submitSuccess === false && (
                                <div className="dual-pneumatic-form-error">Sorry, there was an error submitting your inquiry. Please try again.</div>
                            )}
                            <div className="dual-pneumatic-form-row">
                                <div className="dual-pneumatic-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="dual-pneumatic-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="dual-pneumatic-form-row">
                                <div className="dual-pneumatic-form-group">
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
                                <div className="dual-pneumatic-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="dual-pneumatic-phone-input">
                                        <select name="countryCode" className="dual-pneumatic-country-select" defaultValue="+63">
                                            <option value="+63">🇵🇭 +63</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+1">🇨🇦 +1</option>
                                            <option value="+52">🇲🇽 +52</option>
                                            <option value="+54">🇦🇷 +54</option>
                                            <option value="+55">🇧🇷 +55</option>
                                            <option value="+56">🇨🇱 +56</option>
                                            <option value="+57">🇨🇴 +57</option>
                                            <option value="+58">🇻🇪 +58</option>
                                            <option value="+51">🇵🇪 +51</option>
                                            <option value="+593">🇪🇨 +593</option>
                                            <option value="+595">🇵🇾 +595</option>
                                            <option value="+598">🇺🇾 +598</option>
                                            <option value="+591">🇧🇴 +591</option>
                                            <option value="+592">🇬🇾 +592</option>
                                            <option value="+597">🇸🇷 +597</option>
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+353">🇮🇪 +353</option>
                                            <option value="+33">🇫🇷 +33</option>
                                            <option value="+49">🇩🇪 +49</option>
                                            <option value="+34">🇪🇸 +34</option>
                                            <option value="+39">🇮🇹 +39</option>
                                            <option value="+31">🇳🇱 +31</option>
                                            <option value="+32">🇧🇪 +32</option>
                                            <option value="+41">🇨🇭 +41</option>
                                            <option value="+43">🇦🇹 +43</option>
                                            <option value="+45">🇩🇰 +45</option>
                                            <option value="+46">🇸🇪 +46</option>
                                            <option value="+47">🇳🇴 +47</option>
                                            <option value="+48">🇵🇱 +48</option>
                                            <option value="+420">🇨🇿 +420</option>
                                            <option value="+421">🇸🇰 +421</option>
                                            <option value="+36">🇭🇺 +36</option>
                                            <option value="+40">🇷🇴 +40</option>
                                            <option value="+359">🇧🇬 +359</option>
                                            <option value="+30">🇬🇷 +30</option>
                                            <option value="+351">🇵🇹 +351</option>
                                            <option value="+354">🇮🇸 +354</option>
                                            <option value="+356">🇲🇹 +356</option>
                                            <option value="+357">🇨🇾 +357</option>
                                            <option value="+372">🇪🇪 +372</option>
                                            <option value="+371">🇱🇻 +371</option>
                                            <option value="+370">🇱🇹 +370</option>
                                            <option value="+386">🇸🇮 +386</option>
                                            <option value="+385">🇭🇷 +385</option>
                                            <option value="+381">🇷🇸 +381</option>
                                            <option value="+382">🇲🇪 +382</option>
                                            <option value="+387">🇧🇦 +387</option>
                                            <option value="+389">🇲🇰 +389</option>
                                            <option value="+355">🇦🇱 +355</option>
                                            <option value="+373">🇲🇩 +373</option>
                                            <option value="+380">🇺🇦 +380</option>
                                            <option value="+375">🇧🇾 +375</option>
                                            <option value="+7">🇷🇺 +7</option>
                                            <option value="+86">🇨🇳 +86</option>
                                            <option value="+81">🇯🇵 +81</option>
                                            <option value="+82">🇰🇷 +82</option>
                                            <option value="+852">🇭🇰 +852</option>
                                            <option value="+853">🇲🇴 +853</option>
                                            <option value="+886">🇹🇼 +886</option>
                                            <option value="+65">🇸🇬 +65</option>
                                            <option value="+60">🇲🇾 +60</option>
                                            <option value="+66">🇹🇭 +66</option>
                                            <option value="+84">🇻🇳 +84</option>
                                            <option value="+62">🇮🇩 +62</option>
                                            <option value="+673">🇧🇳 +673</option>
                                            <option value="+856">🇱🇦 +856</option>
                                            <option value="+855">🇰🇭 +855</option>
                                            <option value="+95">🇲🇲 +95</option>
                                            <option value="+91">🇮🇳 +91</option>
                                            <option value="+92">🇵🇰 +92</option>
                                            <option value="+880">🇧🇩 +880</option>
                                            <option value="+94">🇱🇰 +94</option>
                                            <option value="+977">🇳🇵 +977</option>
                                            <option value="+975">🇧🇹 +975</option>
                                            <option value="+960">🇲🇻 +960</option>
                                            <option value="+93">🇦🇫 +93</option>
                                            <option value="+98">🇮🇷 +98</option>
                                            <option value="+964">🇮🇶 +964</option>
                                            <option value="+962">🇯🇴 +962</option>
                                            <option value="+966">🇸🇦 +966</option>
                                            <option value="+971">🇦🇪 +971</option>
                                            <option value="+968">🇴🇲 +968</option>
                                            <option value="+974">🇶🇦 +974</option>
                                            <option value="+973">🇧🇭 +973</option>
                                            <option value="+965">🇰🇼 +965</option>
                                            <option value="+90">🇹🇷 +90</option>
                                            <option value="+972">🇮🇱 +972</option>
                                            <option value="+20">🇪🇬 +20</option>
                                            <option value="+27">🇿🇦 +27</option>
                                            <option value="+234">🇳🇬 +234</option>
                                            <option value="+254">🇰🇪 +254</option>
                                            <option value="+255">🇹🇿 +255</option>
                                            <option value="+256">🇺🇬 +256</option>
                                            <option value="+251">🇪🇹 +251</option>
                                            <option value="+212">🇲🇦 +212</option>
                                            <option value="+213">🇩🇿 +213</option>
                                            <option value="+216">🇹🇳 +216</option>
                                            <option value="+218">🇱🇾 +218</option>
                                            <option value="+233">🇬🇭 +233</option>
                                            <option value="+221">🇸🇳 +221</option>
                                            <option value="+225">🇨🇮 +225</option>
                                            <option value="+237">🇨🇲 +237</option>
                                            <option value="+243">🇨🇩 +243</option>
                                            <option value="+242">🇨🇬 +242</option>
                                            <option value="+240">🇬🇶 +240</option>
                                            <option value="+241">🇬🇦 +241</option>
                                            <option value="+250">🇷🇼 +250</option>
                                            <option value="+257">🇧🇮 +257</option>
                                            <option value="+260">🇿🇲 +260</option>
                                            <option value="+263">🇿🇼 +263</option>
                                            <option value="+258">🇲🇿 +258</option>
                                            <option value="+264">🇳🇦 +264</option>
                                            <option value="+267">🇧🇼 +267</option>
                                            <option value="+266">🇱🇸 +266</option>
                                            <option value="+268">🇸🇿 +268</option>
                                            <option value="+261">🇲🇬 +261</option>
                                            <option value="+230">🇲🇺 +230</option>
                                            <option value="+248">🇸🇨 +248</option>
                                            <option value="+61">🇦🇺 +61</option>
                                            <option value="+64">🇳🇿 +64</option>
                                            <option value="+675">🇵🇬 +675</option>
                                            <option value="+679">🇫🇯 +679</option>
                                            <option value="+685">🇼🇸 +685</option>
                                            <option value="+676">🇹🇴 +676</option>
                                            <option value="+678">🇻🇺 +678</option>
                                            <option value="+691">🇫🇲 +691</option>
                                            <option value="+692">🇲🇭 +692</option>
                                            <option value="+680">🇵🇼 +680</option>
                                            <option value="+688">🇹🇻 +688</option>
                                            <option value="+682">🇨🇰 +682</option>
                                            <option value="+683">🇳🇺 +683</option>
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

                            <div className="dual-pneumatic-form-row">
                                <div className="dual-pneumatic-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                                <div className="dual-pneumatic-form-group">
                                    <label htmlFor="address">Complete Address</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" />
                                </div>
                            </div>

                            <div className="dual-pneumatic-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your dual pneumatic heat press machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="dual-pneumatic-form-actions">
                                <button type="submit" className="dual-pneumatic-btn-primary" disabled={submitting}>
                                    {submitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="dual-pneumatic-btn-secondary" disabled={submitting}>
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