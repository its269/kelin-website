"use client";
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './luxor-rtr-uv.css';

export default function LuxorRTRUV() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/uv-machines/Luxor RTR (1).webp');

    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);

    const applicationItems = [
        { image: '/application/rtr/1.png', label: 'Phone Case' },
        { image: '/application/rtr/2.png', label: 'Frames or Panels' },
        { image: '/application/rtr/3.png', label: 'Decorative Items' },
        { image: '/application/rtr/4.png', label: 'Tumbler' },
        { image: '/application/rtr/5.png', label: 'Personalized Gifts' },
        { image: '/application/rtr/6.png', label: 'Customized Jar' },
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
        name: 'LUXOR UV-A3 DTF PRINTER',
        model: 'UV DTF PRINTER',
        images: [
            '/uv-machines/LUXOR-UV-A3-DTF-Printer-1.webp',
            '/uv-machines/LUXOR-UV-A3-DTF-Printer-1.webp',
        ],
        shortDescription: 'MULTI-FUNCTION DESIGN SUPPORTING 4 APPLICATIONS - Flatbed, Cylinder, Roll-to-roll, and UV DTF all in one machine. Production speed 0.28-3 m²/h ideal for high quality, cost-efficient production.',
        detailedDescription: 'The LUXOR UV-A3 DTF Printer offers flatbed, cylinder, roll-to-roll, and UV DTF printing in one compact unit, ideal for high quality, cost-efficient production. Featuring advanced technology with production speeds ranging from 0.28-3 m²/h, this versatile machine delivers exceptional results for diverse printing applications.',
        features: [
            {
                title: 'Silent Ink Chain',
                description: 'Zero splashing and low noise operation ensures quiet and clean printing environment for professional workspace.',
                icon: 'precision'
            },
            {
                title: 'Intelligent Ink Supply',
                description: 'Advanced ink supply system with smart monitoring ensures consistent ink flow and optimal color reproduction.',
                icon: 'accuracy'
            },
            {
                title: 'HD Touch Screen Design',
                description: 'User-friendly HD touch interface for easy operation control and real-time monitoring of printing status.',
                icon: 'speed'
            },
            {
                title: 'High-Quality Printing',
                description: 'Superior print quality with excellent color reproduction and fine detail resolution for professional results.',
                icon: 'media'
            },
            {
                title: '4-in-1 Multi-Function Design',
                description: 'Versatile machine supporting flatbed, cylinder, roll-to-roll, and UV DTF printing in one compact unit.',
                icon: 'durability'
            },
            {
                title: 'Variable Production Speed',
                description: 'Flexible production speed from 0.28-3 m²/h to meet different quality and volume requirements.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Model', value: 'UV-A3' },
            { label: 'Printhead Quantity', value: '1' },
            { label: 'Printhead Type', value: 'EPSON I3200(4) UV HD Printhead' },
            { label: 'Print Speed', value: '0.28 m²/h - 3 m²/h' },
            { label: 'Printhead Cleaning', value: 'Automatic Cleaning, Automatic Flush Spray, Moisturizing Function' },
            { label: 'Ink Color', value: 'C+M+Y+K+W+Varnish, Magenta+White' },
            { label: 'Ink Type', value: 'LED UV Curing Ink' },
            { label: 'Printing Media Type', value: 'Ultra-clear PET Film, Back-lit Film, PET, Transparent Film, Canvas, Velvet Cloth, etc.' },
            { label: 'Print Media Thickness', value: 'Type: 0.8mm' },
            { label: 'RIP Software', value: 'Maintop, FlexiPRINT, Gln, etc.' },
            { label: 'Image Format', value: 'JPG, TIF, BMP, PDF, etc.' },
            { label: 'Working Environment', value: 'Temperature: 10°C-30°C, Humidity: 35%-65%' },
            { label: 'Print Width', value: 'Flatbed: A3(White+Color)|UV DTF: 33cm+|Cylinder: 35×40cm+(Diameter≥7)' },
            { label: 'Machine Dimension', value: '990*650*785mm|UV DTF Assembly: 775*600*350mm|Packing: 1400*950mm' },
            { label: 'Weight', value: 'NetWeight: 200KG|GrossWeight: 220KG|UV DTF Assembly Net Weight: 50KG|Gross Weight: 70KG' }
        ],
        applications: [
            'Flatbed Direct Printing on Rigid Materials',
            'Cylinder Object Printing (Bottles, Cups, Tubes)',
            'Roll-to-Roll Flexible Media Printing',
            'UV DTF Transfer Film Production',
            'Custom T-shirt and Apparel Graphics',
            'Promotional Product Decoration',
            'Personalized Gifts and Awards',
            'Canvas and Artistic Prints',
            'Velvet Cloth Printing',
            'Transparent Film Applications',
            'Back-lit Signage Materials',
            'Multi-substrate Commercial Printing'
        ],
        advantages: [
            'EPSON I3200 UV HD printhead for exceptional print quality',
            'Multi-function 4-in-1 design: Flatbed, Cylinder, Roll-to-roll, UV DTF',
            'Variable speed production from 0.28-3 m²/h for different needs',
            'LED UV curing ink system for instant drying and durability',
            'Automatic printhead cleaning and moisturizing function',
            'HD touch screen interface for user-friendly operation',
            'Silent ink chain technology for quiet operation',
            'Wide media compatibility: PET film, canvas, velvet cloth, etc.',
            'Professional A3 format printing capability',
            'Multiple RIP software support (Maintop, FlexiPRINT, Gln)',
            'Compact design suitable for various workspace environments',
            'Cost-efficient production with high-quality output'
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
        formData.append('Page Source', 'Luxor RTR UV');
        formData.append('_replyto', formData.get('email') || '');
        formData.append('_subject', 'Inquiry: Luxor RTR UV');
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
            <main className="lxr-uv-a3-main">
                {/* Product Hero Section */}
                <section className="lxr-uv-a3-hero product-hero">
                    <div className="lxr-uv-a3-hero-layout">
                        <div className="lxr-uv-a3-hero-left">
                            <h1 className="lxr-uv-a3-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="lxr-uv-a3-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="lxr-uv-a3-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="lxr-uv-a3-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="lxr-uv-a3-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="lxr-uv-a3-hero-stats product-stats">
                                <div className="lxr-uv-a3-stat">
                                    <span className="lxr-uv-a3-stat-number">A3</span>
                                    <span className="lxr-uv-a3-stat-label">Print Format</span>
                                </div>
                                <div className="lxr-uv-a3-stat">
                                    <span className="lxr-uv-a3-stat-number">0.28-3 m²/h</span>
                                    <span className="lxr-uv-a3-stat-label">Print Speed</span>
                                </div>
                                <div className="lxr-uv-a3-stat">
                                    <span className="lxr-uv-a3-stat-number">4-in-1</span>
                                    <span className="lxr-uv-a3-stat-label">Multi-function</span>
                                </div>
                            </div>
                        </div>
                        <div className="lxr-uv-a3-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="lxr-uv-a3-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="lxr-uv-a3-overview-section">
                    <div className="lxr-uv-a3-overview-container">
                        <h2 className="lxr-uv-a3-section-title">Product Overview</h2>
                        <p className="lxr-uv-a3-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Video Section */}
                <section className="videoPlayer-section">
                    <VideoPlayer src="/Luxor-RTR.mp4" poster="" className="" />
                </section>

                {/* Key Features */}
                <section className="lxr-uv-a3-features-section" style={{ marginTop: '100px' }}>
                    <div className="lxr-uv-a3-features-container">
                        <div className="lxr-uv-a3-features-header">
                            <h2 className="lxr-uv-a3-features-title">Key Features</h2>
                            <p className="lxr-uv-a3-features-subtitle">
                                Advanced UV-A3 multi-function printing technology meets professional performance
                            </p>
                        </div>

                        <div className="lxr-uv-a3-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="lxr-uv-a3-feature-card">
                                    <div className="lxr-uv-a3-feature-icon">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Silent ink chain: wave / quiet signal */}
                                                <path d="M1 12 Q5 6 9 12 Q13 18 17 12 Q21 6 23 12" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Ink supply: droplet */}
                                                <path d="M12 2 C12 2 5 10 5 15 a7 7 0 0 0 14 0 C19 10 12 2 12 2z" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* HD Touch Screen: monitor with touch */}
                                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                                <line x1="8" y1="21" x2="16" y2="21" />
                                                <line x1="12" y1="17" x2="12" y2="21" />
                                                <circle cx="12" cy="10" r="2" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* High quality: badge/shield with check */}
                                                <path d="M12 2l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V6z" />
                                                <polyline points="9 12 11 14 15 10" />
                                            </svg>
                                        )}
                                        {index === 4 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* 4-in-1 multi-function: grid of 4 */}
                                                <rect x="3" y="3" width="8" height="8" rx="1" />
                                                <rect x="13" y="3" width="8" height="8" rx="1" />
                                                <rect x="3" y="13" width="8" height="8" rx="1" />
                                                <rect x="13" y="13" width="8" height="8" rx="1" />
                                            </svg>
                                        )}
                                        {index === 5 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Variable speed: sliders */}
                                                <line x1="4" y1="6" x2="20" y2="6" />
                                                <line x1="4" y1="12" x2="20" y2="12" />
                                                <line x1="4" y1="18" x2="20" y2="18" />
                                                <circle cx="8" cy="6" r="2" fill="white" />
                                                <circle cx="14" cy="12" r="2" fill="white" />
                                                <circle cx="10" cy="18" r="2" fill="white" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="lxr-uv-a3-feature-title">{feature.title}</h3>
                                    <p className="lxr-uv-a3-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="lxr-uv-a3-specs-section">
                    <div className="lxr-uv-a3-specs-container">
                        <h2 className="lxr-uv-a3-section-title">Technical Specifications</h2>
                        <p className="lxr-uv-a3-section-subtitle">
                            Complete technical details for LUXOR UV-A3 DTF Printer
                        </p>
                        <div className="lxr-uv-a3-specs-grid">
                            <div className="lxr-uv-a3-spec-card">
                                <h3 className="lxr-uv-a3-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="lxr-uv-a3-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="lxr-uv-a3-spec-item">
                                            <div className="lxr-uv-a3-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="lxr-uv-a3-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="lxr-uv-a3-applications-section">
                    <div className="lxr-uv-a3-applications-container">
                        <h2 className="lxr-uv-a3-section-title">Applications</h2>
                        <p className="lxr-uv-a3-applications-subtitle">
                            Professional UV-A3 multi-function printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="lxr-uv-a3-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="lxr-uv-a3-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="lxr-uv-a3-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="lxr-uv-a3-advantages-section">
                    <div className="lxr-uv-a3-advantages-container">
                        <h2 className="lxr-uv-a3-section-title">Why Choose LUXOR UV-A3?</h2>
                        <div className="lxr-uv-a3-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="lxr-uv-a3-advantage-item">
                                    <svg className="lxr-uv-a3-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="lxr-uv-a3-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="lxr-uv-a3-modal-overlay" onClick={closeInquiryModal}>
                    <div className="lxr-uv-a3-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="lxr-uv-a3-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="lxr-uv-a3-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="lxr-uv-a3-inquiry-form">
                            <div className="lxr-uv-a3-form-row">
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="luxor-rtr-form-row">
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="luxor-rtr-form-row">
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="address">Complete Address</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" />
                                </div>
                                <div className="lxr-uv-a3-form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <div className="lxr-uv-a3-phone-input">
                                        <select className="lxr-uv-a3-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="lxr-uv-a3-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="lxr-uv-a3-form-actions">
                                <button type="submit" className="lxr-uv-a3-btn-primary" disabled={inquiryStatus === 'loading'}>
                                    {inquiryStatus === 'loading' ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="lxr-uv-a3-btn-secondary" disabled={inquiryStatus === 'loading'}>Cancel</button>
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