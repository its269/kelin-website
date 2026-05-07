"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './smart-uv-printer.css';

export default function SmartUVPrinter() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/uv-machines/SMART UV Printer.webp');
    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);

    const applicationItems = [
        { image: '/application/smart-uv-printer/1.png', label: 'UV Display Graphics' },
        { image: '/application/smart-uv-printer/2.png', label: 'Wall Murals' },
        { image: '/application/smart-uv-printer/3.png', label: 'Backlit Displays' },
        { image: '/application/smart-uv-printer/4.png', label: 'Decor Panels' },
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
        name: 'SMART UV PRINTER',
        model: 'RJ24U*2002-I3200 6FT',
        images: [
            '/uv-machines/SMART UV Printer.webp',
            '/uv-machines/SMART UV Printer.webp',
        ],
        shortDescription: 'DUAL EPSON 3200U1: SPEED. PRECISION. UNMATCHED QUALITY. - SMTJET 2002 UV Eco Solvent Printer, a robust printing powerhouse designed for professional demands. Featuring advanced dual Epson 3200U1 printheads and a precision-engineered motion system, it delivers exceptional output speed, vivid color accuracy, and razor-sharp detail, ensuring superior, consistent quality on a wide range of substrates for every application.',
        detailedDescription: 'The SMTJET 2002 UV Eco Solvent Printer (RJ24U*2002-I3200 6FT) represents the pinnacle of professional UV printing technology. Equipped with dual Epson 3200U1 printheads, this industrial-grade printer achieves up to 12m²/h printing speed while maintaining exceptional quality. The advanced LED curing lamp delivers high-precision UV curing, while the high-performance control system ensures stable operation. Built with an aluminum alloy carriage station for durability and featuring an external infrared heating fan for optimal ink adhesion, this printer excels in producing UV-printed display graphics, wall murals, backlit displays, and decor panels with unmatched consistency and quality.',
        features: [
            {
                title: 'LED Curing Lamp',
                description: 'The advanced LED curing lamp precisely delivers high-precision UV curing, eliminating the odor of common UV lamps and ensuring the adhesion of inks and optimal curing for high-quality prints.',
                icon: 'precision'
            },
            {
                title: 'High Performance Control System',
                description: 'Board with high-precision sensors and an industrial-grade control system ensures stability and efficiency.',
                icon: 'accuracy'
            },
            {
                title: 'Aluminium Alloy Carriage Station',
                description: 'Beam with high-strength aluminum alloy carriage and control for extended strength and durability capabilities.',
                icon: 'speed'
            },
            {
                title: 'External Infrared Heating Fan',
                description: 'Efficient heating preheated and is-placed infrared heater provides effective drying, prevents ink blurring, extending smoothness and ink adhesion onto various substrates.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'RJ-2002UV' },
            { label: 'Head Model', value: 'EPSON 3200U1' },
            { label: 'Drying Mode', value: 'Fan Drying' },
            { label: 'Media Width', value: '1.85m' },
            { label: 'Machine Size', value: '3700mm*750mm*850mm' },
            { label: 'Printing Speed', value: '4 PASS: 12m/h, 6 PASS: 8m²/h' },
            { label: 'Operation system', value: 'Win10 and above system' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Weight', value: 'G.W: 460KG/N.W:396KG' }
        ],
        applications: [
            'UV-printed display graphics',
            'UV-printed wall murals',
            'UV-printed backlit displays',
            'UV-printed decor panels',
            'Signage Production',
            'Indoor and Outdoor Graphics',
            'Promotional Displays',
            'Exhibition Graphics',
            'Point of Sale Displays',
            'Retail Graphics',
            'Commercial Advertising',
            'Custom Decor Applications'
        ],
        advantages: [
            'Industrial-grade speed up to 12m²/h',
            'Dual Epson 3200U1 printheads for precision',
            'Advanced LED curing technology',
            'High-performance control system',
            'Aluminum alloy carriage for durability',
            'External infrared heating fan',
            'Odorless UV curing process',
            'Wide media width (1.85m)',
            'Vivid color accuracy and razor-sharp detail',
            'Versatile substrate compatibility',
            'Professional-grade output quality',
            'Reliable consistent performance'
        ]
    };

    const openInquiryModal = () => {
        setInquiryModalOpen(true);
        setSubmitSuccess(null);
        setSubmitMessage("");
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
    };

    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null); // null | true | false
    const [submitMessage, setSubmitMessage] = useState("");

    async function handleSubmitInquiry(e) {
        e.preventDefault();
        setSubmitting(true);
        setSubmitSuccess(null);
        setSubmitMessage("");
        const form = e.target;
        const data = new FormData(form);
        data.append('_cc', 'info@kelinph.com');
        data.append('Page Source', 'Smart UV Printer');
        data.append('_replyto', data.get('email') || '');
        data.append('_subject', 'Inquiry: Smart UV Printer');
        data.append('Page URL', typeof window !== 'undefined' ? window.location.href : '');
        data.append('Submitted At', new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
        data.append('name', `${data.get('firstName') || ''} ${data.get('lastName') || ''}`.trim());
        data.append('inquiryType', 'product-inquiry');
        try {
            const response = await fetch("https://formspree.io/f/mvzwzkkd", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: data,
            });
            if (response.ok) {
                setSubmitSuccess(true);
                setSubmitMessage("Thank you! Your inquiry has been sent.");
                form.reset();
            } else {
                setSubmitSuccess(false);
                setSubmitMessage("Sorry, there was a problem sending your inquiry. Please try again later.");
            }
        } catch (error) {
            setSubmitSuccess(false);
            setSubmitMessage("Sorry, there was a problem sending your inquiry. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div>
            <Header />
            <main className="smart-uv-printer-main">
                {/* Product Hero Section */}
                <section className="smart-uv-printer-hero product-hero">
                    <div className="smart-uv-printer-hero-layout">
                        <div className="smart-uv-printer-hero-left">
                            <h1 className="smart-uv-printer-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="smart-uv-printer-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="smart-uv-printer-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="smart-uv-printer-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="smart-uv-printer-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="smart-uv-printer-hero-stats product-stats">
                                <div className="smart-uv-printer-stat">
                                    <span className="smart-uv-printer-stat-number">12m²/h</span>
                                    <span className="smart-uv-printer-stat-label">Speed</span>
                                </div>
                                <div className="smart-uv-printer-stat">
                                    <span className="smart-uv-printer-stat-number">1.85m</span>
                                    <span className="smart-uv-printer-stat-label">Media Width</span>
                                </div>
                                <div className="smart-uv-printer-stat">
                                    <span className="smart-uv-printer-stat-number">EPSON 3200U1</span>
                                    <span className="smart-uv-printer-stat-label">Dual Printhead</span>
                                </div>
                            </div>
                        </div>
                        <div className="smart-uv-printer-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="smart-uv-printer-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="smart-uv-printer-overview-section">
                    <div className="smart-uv-printer-overview-container">
                        <h2 className="smart-uv-printer-section-title">Product Overview</h2>
                        <p className="smart-uv-printer-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="smart-uv-printer-features-section">
                    <div className="smart-uv-printer-features-container">
                        <div className="smart-uv-printer-features-header">
                            <h2 className="smart-uv-printer-features-title">Key Features</h2>
                            <p className="smart-uv-printer-features-subtitle">
                                Professional UV eco solvent printing technology with dual Epson 3200U1 printheads
                            </p>
                        </div>

                        <div className="smart-uv-printer-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="smart-uv-printer-feature-card">
                                    <div className="smart-uv-printer-feature-icon">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* LED curing lamp: lightbulb with rays */}
                                                <circle cx="12" cy="10" r="4" />
                                                <line x1="12" y1="2" x2="12" y2="4" />
                                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                                <line x1="19.78" y1="4.22" x2="18.36" y2="5.64" />
                                                <line x1="2" y1="12" x2="4" y2="12" />
                                                <line x1="20" y1="12" x2="22" y2="12" />
                                                <path d="M9 14 Q9 17 12 17 Q15 17 15 14" />
                                                <line x1="10" y1="17" x2="10" y2="20" />
                                                <line x1="14" y1="17" x2="14" y2="20" />
                                                <line x1="9" y1="20" x2="15" y2="20" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Control system: CPU/chip */}
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
                                                {/* Aluminium carriage: cart on rail */}
                                                <line x1="2" y1="8" x2="22" y2="8" />
                                                <rect x="7" y="10" width="10" height="6" rx="1" />
                                                <circle cx="9" cy="17" r="1.5" />
                                                <circle cx="15" cy="17" r="1.5" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Infrared heating fan: fan blades with heat */}
                                                <circle cx="12" cy="12" r="3" />
                                                <path d="M12 9 C12 6 10 4 8 5 C6 6 6 9 9 9" />
                                                <path d="M15 12 C18 12 20 10 19 8 C18 6 15 6 15 9" />
                                                <path d="M12 15 C12 18 14 20 16 19 C18 18 18 15 15 15" />
                                                <path d="M9 12 C6 12 4 14 5 16 C6 18 9 18 9 15" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="smart-uv-printer-feature-title">{feature.title}</h3>
                                    <p className="smart-uv-printer-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="smart-uv-printer-specs-section">
                    <div className="smart-uv-printer-specs-container">
                        <h2 className="smart-uv-printer-section-title">Technical Specifications</h2>
                        <p className="smart-uv-printer-section-subtitle">
                            Complete technical details for Smart UV Printer RJ24U*2002-I3200 6FT
                        </p>
                        <div className="smart-uv-printer-specs-grid">
                            <div className="smart-uv-printer-spec-card">
                                <h3 className="smart-uv-printer-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="smart-uv-printer-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="smart-uv-printer-spec-item">
                                            <div className="smart-uv-printer-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="smart-uv-printer-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="smart-uv-printer-applications-section">
                    <div className="smart-uv-printer-applications-container">
                        <h2 className="smart-uv-printer-section-title">Applications</h2>
                        <p className="smart-uv-printer-applications-subtitle">
                            Professional UV eco solvent printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="smart-uv-printer-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="smart-uv-printer-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="smart-uv-printer-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="smart-uv-printer-advantages-section">
                    <div className="smart-uv-printer-advantages-container">
                        <h2 className="smart-uv-printer-section-title">Why Choose Smart UV Printer?</h2>
                        <div className="smart-uv-printer-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="smart-uv-printer-advantage-item">
                                    <svg className="smart-uv-printer-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="smart-uv-printer-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="smart-uv-printer-modal-overlay" onClick={closeInquiryModal}>
                    <div className="smart-uv-printer-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="smart-uv-printer-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="smart-uv-printer-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="smart-uv-printer-inquiry-form">
                            {submitSuccess === true && (
                                <div className="form-success-message" style={{ color: 'green', marginBottom: 12 }}>{submitMessage}</div>
                            )}
                            {submitSuccess === false && (
                                <div className="form-error-message" style={{ color: 'red', marginBottom: 12 }}>{submitMessage}</div>
                            )}
                            <div className="smart-uv-printer-form-row">
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="smart-uv-form-row">
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="smart-uv-form-row">
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="address">Complete Address</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" />
                                </div>
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <div className="smart-uv-printer-phone-input">
                                        <select className="smart-uv-printer-country-select" name="countryCode" defaultValue="+63">
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
                                        <input type="tel" name="phone" placeholder="Enter phone number" required />
                                    </div>
                                </div>
                            </div>

                            <div className="smart-uv-printer-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="smart-uv-printer-form-actions">
                                <button type="submit" className="smart-uv-printer-btn-primary" disabled={submitting}>
                                    {submitting ? "Sending..." : "Send Inquiry"}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="smart-uv-printer-btn-secondary" disabled={submitting}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
