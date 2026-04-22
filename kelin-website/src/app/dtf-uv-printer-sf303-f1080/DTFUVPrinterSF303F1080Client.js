"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './dtf-uv-printer-sf303-f1080-unique.css';

export default function DTFUVPrinterSF303F1080() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/DTF UV Printer SF303-i3200 2ft (1).webp');

    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);

    const applicationItems = [
        { image: '/application/dtf-uv-printer/1.webp', label: 'Custom Stickers' },
        { image: '/application/dtf-uv-printer/2.webp', label: 'Phone Cases' },
        { image: '/application/dtf-uv-printer/3.webp', label: 'Decorative Items' },
        { image: '/application/dtf-uv-printer/4.webp', label: 'Promotional Products' },
        { image: '/application/dtf-uv-printer/5.webp', label: 'Personalized Gifts' },
        { image: '/application/dtf-uv-printer/6.webp', label: 'Awards & Trophies' },
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
        const touchX = e.touches[0].pageX;
        isDraggingRef.current = true;
        startXRef.current = touchX - scrollElement.offsetLeft;
        scrollLeftRef.current = scrollElement.scrollLeft;
    };

    const handleTouchMove = (e) => {
        if (!isDraggingRef.current) return;
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        const touchX = e.touches[0].pageX;
        const x = touchX - scrollElement.offsetLeft;
        const walk = (x - startXRef.current) * 2;
        scrollElement.scrollLeft = scrollLeftRef.current - walk;
        normalizeInfiniteScroll();
    };

    const handleTouchEnd = () => { isDraggingRef.current = false; };

    const machineDetails = {
        name: 'LUXOR SF30-3',
        model: 'UV DTF PRINTER',
        images: [
            '/DTF UV Printer SF303-i3200 2ft (1).webp',
            '/DTF UV Printer SF303-i3200 2ft (1).webp', // Add more images if available
        ],
        shortDescription: 'BRILLIANT COLOR PRINTING WITH VARNISH - Get vibrant, detailed prints with CMYK+W+V and UV ink. The SF30-3 delivers rich layers, smooth gradients, and long-lasting quality.',
        detailedDescription: 'The LUXOR SF30-3 UV DTF Printer delivers brilliant color printing with varnish technology. Featuring PRECISION CORE printhead powered by EPSON, this industrial-grade printer achieves 4.5 m²/h printing speed with vibrant, detailed prints using CMYK+W+V and UV ink. The SF30-3 delivers rich layers, smooth gradients, and long-lasting quality for professional UV DTF applications.',
        features: [
            {
                title: 'Voltage Display Function',
                description: 'Real-time voltage monitoring with digital display ensures optimal power conditions for consistent printing performance.',
                icon: 'precision'
            },
            {
                title: 'CMYK +W +V Ink Printing',
                description: 'Advanced 6-color ink system including Cyan, Magenta, Yellow, Black, White, and Varnish for brilliant color reproduction.',
                icon: 'accuracy'
            },
            {
                title: 'Air-cooled LED UV Lamp',
                description: 'Efficient LED UV curing system with air cooling provides instant drying and superior adhesion for durable prints.',
                icon: 'speed'
            },
            {
                title: 'Plate Heating Function',
                description: 'Integrated heating plate ensures optimal film temperature and improved ink adhesion for professional results.',
                icon: 'media'
            },
            {
                title: 'PRECISION CORE Printhead',
                description: 'EPSON PRECISION CORE technology delivers exceptional print quality with precise droplet placement and reliable performance.',
                icon: 'durability'
            },
            {
                title: 'Industrial Grade Speed',
                description: 'High-performance printing at 4.5 m²/h with professional quality output for efficient production workflows.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Model', value: 'SF30-3' },
            { label: 'Printhead', value: 'EPSON F3080, Quantity: 3' },
            { label: 'Print Width', value: '300mm' },
            { label: 'Print Speed', value: '6 PASS: 4.5 m²/h, 8 PASS: 3.2 m²/h' },
            { label: 'Ink Type', value: 'UV Neutral Hard Ink' },
            { label: 'Ink Color', value: 'W+CMYK+V' },
            { label: 'RIP Software', value: 'Maintop, RIN, FlexiPRINT, etc.' },
            { label: 'Print Media', value: 'AB Film, Plasma Film' },
            { label: 'Weight', value: 'N.W: 250kg, G.W: 396.5kg' },
            { label: 'Power', value: '180W/220V, 50-60HZ' },
            { label: 'Image Format', value: 'JPG, TIF, PDF, etc.' },
            { label: 'Working Environment', value: 'Temp: 15°C - 30°C, Humidity: 35% - 65%' },
            { label: 'Machine Size', value: 'Dimension: 190*120*150cm, Packing: 220*160*180cm' }
        ],
        applications: [
            'Custom Stickers and Labels',
            'Phone Cases and Accessories',
            'Decorative Items and Crafts',
            'Promotional Products',
            'Personalized Gifts',
            'Awards and Certificates',
            'Signage and Displays',
            'Packaging Materials',
            'Automotive Decals',
            'Electronics Accessories',
            'Home Decor Items',
            'Industrial Labels'
        ],
        advantages: [
            'EPSON PRECISION CORE printhead technology for superior quality',
            'CMYK+W+V 6-color ink system with varnish for brilliant colors',
            'Industrial grade speed of 4.5 m²/h for efficient production',
            'Air-cooled LED UV lamp for instant curing and energy efficiency',
            'Plate heating function for optimal ink adhesion',
            'Voltage display function for real-time power monitoring',
            'Compatible with AB Film and Plasma Film materials',
            'Multiple RIP software options (Maintop, RIN, FlexiPRINT)',
            'Professional working environment specifications',
            'Compact 300mm print width ideal for small format applications',
            'UV neutral hard ink for durable and long-lasting prints',
            'Rich layers and smooth gradients with varnish coating'
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
        formData.append('Page Source', 'DTF UV Printer SF303 F1080');
        formData.append('_replyto', formData.get('email') || '');
        formData.append('_subject', 'Inquiry: DTF UV Printer SF303 F1080');
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
            <main className="dtf-uv-sf303-main">
                {/* Product Hero Section */}
                <section className="dtf-uv-sf303-hero product-hero">
                    <div className="dtf-uv-sf303-hero-layout">
                        <div className="dtf-uv-sf303-hero-left">
                            <h1 className="dtf-uv-sf303-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="dtf-uv-sf303-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="dtf-uv-sf303-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="dtf-uv-sf303-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="dtf-uv-sf303-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="dtf-uv-sf303-hero-stats product-stats">
                                <div className="dtf-uv-sf303-stat">
                                    <span className="dtf-uv-sf303-stat-number">300mm</span>
                                    <span className="dtf-uv-sf303-stat-label">Print Width</span>
                                </div>
                                <div className="dtf-uv-sf303-stat">
                                    <span className="dtf-uv-sf303-stat-number">4.5 m²/h</span>
                                    <span className="dtf-uv-sf303-stat-label">Print Speed</span>
                                </div>
                                <div className="dtf-uv-sf303-stat">
                                    <span className="dtf-uv-sf303-stat-number">CMYK+W+V</span>
                                    <span className="dtf-uv-sf303-stat-label">6 Colors</span>
                                </div>
                            </div>
                        </div>
                        <div className="dtf-uv-sf303-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="dtf-uv-sf303-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="dtf-uv-sf303-overview-section">
                    <div className="dtf-uv-sf303-overview-container">
                        <h2 className="dtf-uv-sf303-section-title">Product Overview</h2>
                        <p className="dtf-uv-sf303-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="dtf-uv-sf303-features-section">
                    <div className="dtf-uv-sf303-features-container">
                        <div className="dtf-uv-sf303-features-header">
                            <h2 className="dtf-uv-sf303-features-title">Key Features</h2>
                            <p className="dtf-uv-sf303-features-subtitle">
                                Advanced DTF UV printing technology meets professional performance
                            </p>
                        </div>

                        <div className="dtf-uv-sf303-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="dtf-uv-sf303-feature-card">
                                    <div className="dtf-uv-sf303-feature-icon">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Voltage display: bolt/lightning on screen */}
                                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                                <line x1="8" y1="21" x2="16" y2="21" />
                                                <line x1="12" y1="17" x2="12" y2="21" />
                                                <polyline points="11 8 9 12 13 12 11 16" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* CMYK ink colors: ink drops */}
                                                <path d="M12 2C6 2 3 7 3 11a9 9 0 0 0 18 0c0-4-3-9-9-9z" />
                                                <circle cx="9" cy="11" r="1.5" fill="currentColor" stroke="none" />
                                                <circle cx="12" cy="11" r="1.5" fill="currentColor" stroke="none" />
                                                <circle cx="15" cy="11" r="1.5" fill="currentColor" stroke="none" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Air-cooled UV lamp: sun with waves */}
                                                <circle cx="12" cy="12" r="4" />
                                                <line x1="12" y1="2" x2="12" y2="5" />
                                                <line x1="12" y1="19" x2="12" y2="22" />
                                                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                                                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                                                <line x1="2" y1="12" x2="5" y2="12" />
                                                <line x1="19" y1="12" x2="22" y2="12" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Plate heating: heated surface with waves */}
                                                <rect x="3" y="14" width="18" height="4" rx="1" />
                                                <path d="M7 14 C7 11 9 9 9 6" />
                                                <path d="M12 14 C12 11 14 9 14 6" />
                                                <path d="M17 14 C17 11 19 9 19 6" />
                                            </svg>
                                        )}
                                        {index === 4 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Printhead: nozzle printing */}
                                                <rect x="5" y="2" width="14" height="8" rx="1" />
                                                <line x1="8" y1="10" x2="8" y2="14" />
                                                <line x1="12" y1="10" x2="12" y2="16" />
                                                <line x1="16" y1="10" x2="16" y2="14" />
                                                <path d="M6 20 Q8 17 10 20 Q12 23 14 20 Q16 17 18 20" />
                                            </svg>
                                        )}
                                        {index === 5 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Industrial speed: gauge */}
                                                <path d="M12 2a10 10 0 1 0 10 10" />
                                                <path d="M12 12 L17 7" />
                                                <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="dtf-uv-sf303-feature-title">{feature.title}</h3>
                                    <p className="dtf-uv-sf303-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="dtf-uv-sf303-specs-section">
                    <div className="dtf-uv-sf303-specs-container">
                        <h2 className="dtf-uv-sf303-section-title">Technical Specifications</h2>
                        <p className="dtf-uv-sf303-section-subtitle">
                            Complete technical details for LUXOR SF30-3 UV DTF Printer
                        </p>
                        <div className="dtf-uv-sf303-specs-grid">
                            <div className="dtf-uv-sf303-spec-card">
                                <h3 className="dtf-uv-sf303-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="dtf-uv-sf303-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="dtf-uv-sf303-spec-item">
                                            <div className="dtf-uv-sf303-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="dtf-uv-sf303-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="dtf-uv-sf303-applications-section">
                    <div className="dtf-uv-sf303-applications-container">
                        <h2 className="dtf-uv-sf303-section-title">Applications</h2>
                        <p className="dtf-uv-sf303-applications-subtitle">
                            Professional UV DTF printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="dtf-uv-sf303-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="dtf-uv-sf303-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="dtf-uv-sf303-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="dtf-uv-sf303-advantages-section">
                    <div className="dtf-uv-sf303-advantages-container">
                        <h2 className="dtf-uv-sf303-section-title">Why Choose LUXOR SF30-3?</h2>
                        <div className="dtf-uv-sf303-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="dtf-uv-sf303-advantage-item">
                                    <svg className="dtf-uv-sf303-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="dtf-uv-sf303-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="dtf-uv-sf303-modal-overlay" onClick={closeInquiryModal}>
                    <div className="dtf-uv-sf303-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="dtf-uv-sf303-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="dtf-uv-sf303-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="dtf-uv-sf303-inquiry-form">
                            {submitSuccess === true && (
                                <div className="dtf-uv-sf303-form-success">Thank you for your inquiry! We will contact you soon.</div>
                            )}
                            {submitSuccess === false && (
                                <div className="dtf-uv-sf303-form-error">Sorry, there was an error submitting your inquiry. Please try again.</div>
                            )}
                            <div className="dtf-uv-sf303-form-row">
                                <div className="dtf-uv-sf303-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="dtf-uv-sf303-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="dtf-uv-sf303-form-row">
                                <div className="dtf-uv-sf303-form-group">
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
                                <div className="dtf-uv-sf303-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="dtf-uv-sf303-phone-input">
                                        <select name="countryCode" className="dtf-uv-sf303-country-select" defaultValue="+63">
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

                            <div className="dtf-uv-sf303-form-row">
                                <div className="dtf-uv-sf303-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                                <div className="dtf-uv-sf303-form-group">
                                    <label htmlFor="address">Complete Address</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" />
                                </div>
                            </div>

                            <div className="dtf-uv-sf303-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your UV DTF printing requirements and any specific questions about the LUXOR SF30-3..."
                                    required
                                ></textarea>
                            </div>

                            <div className="dtf-uv-sf303-form-actions">
                                <button type="submit" className="dtf-uv-sf303-btn-primary" disabled={submitting}>
                                    {submitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="dtf-uv-sf303-btn-secondary" disabled={submitting}>
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