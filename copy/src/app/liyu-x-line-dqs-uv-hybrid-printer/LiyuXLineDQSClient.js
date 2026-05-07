"use client";
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './liyu-x-line-dqs-uv-hybrid-printer.css';

export default function LiyuXLineDQS() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/uv-machines/Photo (3).webp');
    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);

    const applicationItems = [
        { image: '/application/dqs/1.png', label: 'Signage Production' },
        { image: '/application/dqs/2.png', label: 'Promotional Displays' },
        { image: '/application/dqs/3.png', label: 'Exhibition Graphics' },
        { image: '/application/dqs/4.png', label: 'Commercial Advertising' },
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
        name: 'LIYU X-LINE DQS',
        model: 'UV HYBRID PRINTER',
        images: [
            '/uv-machines/Photo (3).webp',
            '/uv-machines/Photo (3).webp',
        ],
        shortDescription: 'HIGH-SPEED OUTPUT WITHOUT COMPROMISING QUALITY - The Liyu Xline DQS UV Hybrid Printer delivers precise, versatile printing for small-format materials. Powered by Epson and Ricoh printheads, it supports CWC and WCV applications, with upgraded hardware ensuring stable, high-speed output and optional platforms for continuous light-plate printing.',
        detailedDescription: 'The Liyu Xline DQS UV Hybrid Printer is an industrial-grade, high-speed printing solution designed for versatility and precision. Equipped with Epson and Ricoh printheads, it supports both CWC (Corrugated, White, and CMYK) and WCV (White, CMYK, and Varnish) applications. With upgraded hardware, this printer ensures stable operation and delivers up to 90m²/h industrial-grade speed. Optional platforms enable continuous light-plate printing, making it ideal for small-format materials, signage, and promotional applications.',
        features: [
            {
                title: 'Stylish and Agile Design',
                description: 'The Xline DQS series UV hybrid printer has an ergonomic and Xiaoqiao design, which is ideal for all working environments.',
                icon: 'precision'
            },
            {
                title: 'High-Precision Grayscale Print',
                description: 'Equipped with high-precision Epson and Ricoh printheads, it features six WC CMYK applications, supporting both CWC and WCV applications.',
                icon: 'accuracy'
            },
            {
                title: 'Hardware Upgrade',
                description: 'The inner structure is upgraded, hardware is stable, chains, and guide rails with stable load balance and ensure a steady printing quality of your choice.',
                icon: 'speed'
            },
            {
                title: 'High-Precision Grayscale Print',
                description: 'High-precision Ricoh XP410/XliBanco greyscale printheads provide wide-gamut, accurate CWC, WCC/Kof applications.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'DQS2000' },
            { label: 'Print Width', value: '2.3m' },
            { label: 'Head Model', value: 'RICOH G6' },
            { label: 'Print Resolution', value: '635x2400/635*1800/635x400' },
            { label: 'Ink', value: 'Environment-friendly UV ink' },
            { label: 'Type/Pressure bearing', value: '50kg/m' },
            { label: 'Printing Speed', value: '90m/h' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Machine Size', value: '4350mm*1940mm*1650mm' },
            { label: 'Weight', value: 'G.W:1400KG' }
        ],
        applications: [
            'Back Lit Posters',
            'Billboards',
            'Bus Station Ads',
            'Entertainment Hall Display',
            'Signage Production',
            'Small-Format Materials',
            'Promotional Displays',
            'Exhibition Graphics',
            'Point of Sale Displays',
            'Corrugated Materials',
            'Light-Plate Printing',
            'Commercial Advertising'
        ],
        advantages: [
            'Industrial-grade speed up to 90m²/h',
            'High-precision Epson and Ricoh printheads',
            'Supports CWC and WCV applications',
            'Upgraded hardware for stable operation',
            'Ergonomic and space-saving design',
            'Environment-friendly UV ink',
            'Continuous light-plate printing capability',
            'Wide-gamut color accuracy',
            'Heavy-duty load bearing (50kg/m)',
            'Versatile small-format printing',
            'Professional signage quality',
            'Reliable high-volume production'
        ]
    };

    const openInquiryModal = () => {
        setInquiryModalOpen(true);
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
    };

    const [inquiryStatus, setInquiryStatus] = useState(null); // null | 'success' | 'error' | 'loading'
    const handleSubmitInquiry = async (e) => {
        e.preventDefault();
        setInquiryStatus('loading');
        const form = e.target;
        const formData = new FormData(form);
        // Combine country code and phone
        const countryCode = formData.get('countryCode') || '';
        const phone = formData.get('phone') || '';
        formData.set('phone', `${countryCode} ${phone}`);
        formData.delete('countryCode');
        formData.append('_cc', 'info@kelinph.com');
        formData.append('Page Source', 'LIYU X-Line DQS UV Hybrid Printer');
        formData.append('_replyto', formData.get('email') || '');
        formData.append('_subject', 'Inquiry: LIYU X-Line DQS UV Hybrid Printer');
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
                setInquiryStatus('success');
                form.reset();
                setTimeout(() => {
                    setInquiryStatus(null);
                    closeInquiryModal();
                }, 2000);
            } else {
                setInquiryStatus('error');
            }
        } catch (err) {
            setInquiryStatus('error');
        }
    };

    return (
        <div>
            <Header />
            <main className="liyu-xline-dqs-main">
                {/* Product Hero Section */}
                <section className="liyu-xline-dqs-hero product-hero">
                    <div className="liyu-xline-dqs-hero-layout">
                        <div className="liyu-xline-dqs-hero-left">
                            <h1 className="liyu-xline-dqs-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="liyu-xline-dqs-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="liyu-xline-dqs-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="liyu-xline-dqs-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="liyu-xline-dqs-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="liyu-xline-dqs-hero-stats product-stats">
                                <div className="liyu-xline-dqs-stat">
                                    <span className="liyu-xline-dqs-stat-number">90m²/h</span>
                                    <span className="liyu-xline-dqs-stat-label">Speed</span>
                                </div>
                                <div className="liyu-xline-dqs-stat">
                                    <span className="liyu-xline-dqs-stat-number">2.3m</span>
                                    <span className="liyu-xline-dqs-stat-label">Print Width</span>
                                </div>
                                <div className="liyu-xline-dqs-stat">
                                    <span className="liyu-xline-dqs-stat-number">RICOH G6</span>
                                    <span className="liyu-xline-dqs-stat-label">Printhead</span>
                                </div>
                            </div>
                        </div>
                        <div className="liyu-xline-dqs-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="liyu-xline-dqs-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="liyu-xline-dqs-overview-section">
                    <div className="liyu-xline-dqs-overview-container">
                        <h2 className="liyu-xline-dqs-section-title">Product Overview</h2>
                        <p className="liyu-xline-dqs-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Video Section */}
                <section className="videoPlayer-section">
                    <VideoPlayer src="/xline-dqs.mp4" poster="" className="" />
                </section>

                {/* Key Features */}
                <section className="liyu-xline-dqs-features-section" style={{ marginTop: '100px' }}>
                    <div className="liyu-xline-dqs-features-container">
                        <div className="liyu-xline-dqs-features-header">
                            <h2 className="liyu-xline-dqs-features-title">Key Features</h2>
                            <p className="liyu-xline-dqs-features-subtitle">
                                Industrial-grade UV hybrid printing technology for professional results
                            </p>
                        </div>

                        <div className="liyu-xline-dqs-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="liyu-xline-dqs-feature-card">
                                    <div className="liyu-xline-dqs-feature-icon">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Stylish & agile design: diamond/gem */}
                                                <polygon points="12 2 22 9 18 20 6 20 2 9 12 2" />
                                                <line x1="2" y1="9" x2="22" y2="9" />
                                                <line x1="12" y1="2" x2="6" y2="9" />
                                                <line x1="12" y1="2" x2="18" y2="9" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* High-precision grayscale print: printhead nozzle */}
                                                <rect x="5" y="2" width="14" height="8" rx="1" />
                                                <line x1="8" y1="10" x2="8" y2="14" />
                                                <line x1="12" y1="10" x2="12" y2="16" />
                                                <line x1="16" y1="10" x2="16" y2="14" />
                                                <path d="M6 20 Q8 17 10 20 Q12 23 14 20 Q16 17 18 20" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Hardware upgrade: wrench/upgrade arrow */}
                                                <polyline points="12 5 12 19" />
                                                <polyline points="8 9 12 5 16 9" />
                                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                                <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Grayscale precision output: bar chart/tones */}
                                                <rect x="2" y="16" width="4" height="6" />
                                                <rect x="8" y="11" width="4" height="11" />
                                                <rect x="14" y="7" width="4" height="15" />
                                                <rect x="20" y="3" width="2" height="19" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="liyu-xline-dqs-feature-title">{feature.title}</h3>
                                    <p className="liyu-xline-dqs-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="liyu-xline-dqs-specs-section">
                    <div className="liyu-xline-dqs-specs-container">
                        <h2 className="liyu-xline-dqs-section-title">Technical Specifications</h2>
                        <p className="liyu-xline-dqs-section-subtitle">
                            Complete technical details for Liyu X-Line DQS UV Hybrid Printer
                        </p>
                        <div className="liyu-xline-dqs-specs-grid">
                            <div className="liyu-xline-dqs-spec-card">
                                <h3 className="liyu-xline-dqs-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="liyu-xline-dqs-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="liyu-xline-dqs-spec-item">
                                            <div className="liyu-xline-dqs-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="liyu-xline-dqs-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="liyu-xline-dqs-applications-section">
                    <div className="liyu-xline-dqs-applications-container">
                        <h2 className="liyu-xline-dqs-section-title">Applications</h2>
                        <p className="liyu-xline-dqs-applications-subtitle">
                            Professional UV hybrid printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="liyu-xline-dqs-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="liyu-xline-dqs-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="liyu-xline-dqs-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="liyu-xline-dqs-advantages-section">
                    <div className="liyu-xline-dqs-advantages-container">
                        <h2 className="liyu-xline-dqs-section-title">Why Choose Liyu X-Line DQS?</h2>
                        <div className="liyu-xline-dqs-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="liyu-xline-dqs-advantage-item">
                                    <svg className="liyu-xline-dqs-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="liyu-xline-dqs-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="liyu-xline-dqs-modal-overlay" onClick={closeInquiryModal}>
                    <div className="liyu-xline-dqs-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="liyu-xline-dqs-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="liyu-xline-dqs-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="liyu-xline-dqs-inquiry-form">
                            <div className="liyu-xline-dqs-form-row">
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="liyu-xline-dqs-form-row">
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="liyu-xline-form-row">
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="address">Complete Address</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" />
                                </div>
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <div className="liyu-xline-dqs-phone-input">
                                        <select className="liyu-xline-dqs-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="liyu-xline-dqs-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="liyu-xline-dqs-form-actions">
                                <button type="submit" className="liyu-xline-dqs-btn-primary" disabled={inquiryStatus === 'loading'}>
                                    {inquiryStatus === 'loading' ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="liyu-xline-dqs-btn-secondary" disabled={inquiryStatus === 'loading'}>Cancel</button>
                            </div>
                            {inquiryStatus === 'success' && (
                                <div style={{ color: 'green', marginTop: 10 }}>Thank you for your inquiry! We will contact you soon.</div>
                            )}
                            {inquiryStatus === 'error' && (
                                <div style={{ color: 'red', marginTop: 10 }}>There was an error sending your inquiry. Please try again later.</div>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
