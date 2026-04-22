"use client";
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './smart-dtf-machine-unique.css';

export default function SmartDTFMachine() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/DTF SMART DTF Machine (1).webp');

    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);

    const applicationItems = [
        { image: '/application/smart-dtf-application/1.png', label: 'T-Shirt' },
        { image: '/application/smart-dtf-application/2.png', label: 'Jacket' },
        { image: '/application/smart-dtf-application/3.png', label: 'Hoodie' },
        { image: '/application/smart-dtf-application/4.png', label: 'Pillow' },
        { image: '/application/smart-dtf-application/5.png', label: 'Jersey' },
        { image: '/application/smart-dtf-application/6.png', label: 'Bag' },
        { image: '/application/smart-dtf-application/7.png', label: 'Cap' },
        { image: '/application/smart-dtf-application/8.png', label: 'Canvas Shoes' },
        { image: '/application/smart-dtf-application/9.png', label: 'Apron' },
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
        name: 'SMART DTF',
        model: 'Direct To Film',
        images: [
            '/sublimation_dtf/DTF SMART DTF Machine (1).webp',
            '/sublimation_dtf/DTF SMART DTF Machine (1).webp', // Add more images if available
        ],
        shortDescription: 'SUPPORT FOR UP TO 8 COLORS - Delivers ultra-rich tones, smoother gradients, and precise color layering with industrial grade speed.',
        detailedDescription: 'The SMART DTF (Direct To Film) delivers ultra-rich tones, smoother gradients, and precise color layering. This industrial-grade equipment supports up to 8 colors for comprehensive DTF production with a printing speed of 28m²/h. Featuring wider platform, adjustable pinch roller, improved capping, and newly improved damper technology for superior print quality and efficient production workflow.',
        features: [
            {
                title: 'Wider Platform',
                description: 'Enhanced platform design supports larger format DTF printing with improved stability and precision.',
                icon: 'platform'
            },
            {
                title: 'Adjustable Pinch Roller',
                description: 'Precise pinch roller system ensures optimal film feeding and consistent print registration.',
                icon: 'roller'
            },
            {
                title: 'Improved Capping',
                description: 'Advanced capping system maintains ink quality and prevents contamination during operation.',
                icon: 'capping'
            },
            {
                title: 'Newly Improve Damper',
                description: 'Enhanced damper technology provides superior ink flow control and reduces maintenance requirements.',
                icon: 'damper'
            },
            {
                title: 'Industrial Grade Speed',
                description: 'High-speed printing capability with industrial grade performance up to 28 m²/h production output.',
                icon: 'speed'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'RJ-D602 | RJ-D604' },
            { label: 'Machine Head', value: 'I3200*2 | I3200*4' },
            { label: 'Color', value: 'CMYK-W' },
            { label: 'Printing Item', value: 'PET Film' },
            { label: 'Machine Size', value: '180*76*135cm | 180*90*140cm' },
            { label: 'Printing Width', value: '60CM' },
            { label: 'Speed', value: '13-14m² | 26-28m²/h' },
            { label: 'Ink Type', value: 'Pigment Ink' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Weight', value: 'N.W:150KG/G.W:200KG' }
        ],
        applications: [
            'T-Shirt',
            'Jacket',
            'Hoodie',
            'Pillow',
            'Jersey',
            'Hat',
            'Cap',
            'Apron',
            'Canvas Stocking'
        ],
        advantages: [
            'Support for up to 8 colors for ultra-rich tones and smoother gradients',
            'Delivers precise color layering with advanced DTF printing technology',
            'Industrial grade speed up to 28 m²/h for efficient production',
            'I3200*2 and I3200*4 printhead options for superior print quality',
            'Wider platform design for versatile DTF applications',
            'Adjustable pinch roller system for precise film handling',
            'Improved capping system prevents ink contamination',
            'Newly improved damper technology for better ink flow control',
            'Supports CMYK-W color configuration for vibrant prints',
            'Professional grade construction for commercial DTF production',
            'Compact machine sizes for efficient workspace utilization',
            'Advanced DTF printing technology for consistent quality'
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
            countryCode: form.countryCode ? form.countryCode.value : '',
            phone: form.phone ? form.phone.value : '',
            company: form.company ? form.company.value : '',
            message: form.message.value,
            _subject: `Inquiry: SMART DTF Machine`,
            'Page Source': 'SMART DTF Machine',
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
            <main className="smart-dtf-main">
                {/* Product Hero Section */}
                <section className="smart-dtf-hero product-hero">
                    <div className="smart-dtf-hero-layout">
                        <div className="smart-dtf-hero-left">
                            <h1 className="smart-dtf-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="smart-dtf-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="smart-dtf-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="smart-dtf-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="smart-dtf-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="smart-dtf-hero-stats product-stats">
                                <div className="smart-dtf-stat">
                                    <span className="smart-dtf-stat-number">8 Colors</span>
                                    <span className="smart-dtf-stat-label">Max Support</span>
                                </div>
                                <div className="smart-dtf-stat">
                                    <span className="smart-dtf-stat-number">28 m²/h</span>
                                    <span className="smart-dtf-stat-label">Max Speed</span>
                                </div>
                                <div className="smart-dtf-stat">
                                    <span className="smart-dtf-stat-number">60CM</span>
                                    <span className="smart-dtf-stat-label">Print Width</span>
                                </div>
                            </div>
                        </div>
                        <div className="smart-dtf-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="smart-dtf-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="smart-dtf-overview-section">
                    <div className="smart-dtf-overview-container">
                        <h2 className="smart-dtf-section-title">Product Overview</h2>
                        <p className="smart-dtf-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Video Section */}
                <section className="videoPlayer-section">
                    <VideoPlayer src="/smart-DTF-printer.mp4" poster="" className="" />
                </section>

                {/* Key Features */}
                <section className="smart-dtf-features-section" style={{ marginTop: '100px' }}>
                    <div className="smart-dtf-features-container">
                        <div className="smart-dtf-features-header">
                            <h2 className="smart-dtf-features-title">Key Features</h2>
                            <p className="smart-dtf-features-subtitle">
                                Advanced DTF printing technology for ultra-rich color production
                            </p>
                        </div>

                        <div className="smart-dtf-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="smart-dtf-feature-card">
                                    <div className="smart-dtf-feature-icon">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Wider platform: expand horizontal */}
                                                <polyline points="15 3 21 3 21 9" />
                                                <polyline points="9 21 3 21 3 15" />
                                                <line x1="21" y1="3" x2="14" y2="10" />
                                                <line x1="3" y1="21" x2="10" y2="14" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Pinch roller: two circles with pressure lines */}
                                                <circle cx="8" cy="12" r="4" />
                                                <circle cx="16" cy="12" r="4" />
                                                <line x1="12" y1="4" x2="12" y2="8" />
                                                <line x1="12" y1="16" x2="12" y2="20" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Capping/seal: cap/lid */}
                                                <rect x="4" y="11" width="16" height="9" rx="2" />
                                                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Damper/shock absorber: spring */}
                                                <line x1="12" y1="2" x2="12" y2="5" />
                                                <path d="M12 5 C9 7 15 9 12 11 C9 13 15 15 12 17" />
                                                <line x1="12" y1="17" x2="12" y2="20" />
                                                <line x1="8" y1="20" x2="16" y2="20" />
                                            </svg>
                                        )}
                                        {index === 4 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Industrial speed: gauge/speedometer */}
                                                <path d="M12 2a10 10 0 1 0 10 10" />
                                                <path d="M12 12 L17 7" />
                                                <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="smart-dtf-feature-title">{feature.title}</h3>
                                    <p className="smart-dtf-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="smart-dtf-specs-section">
                    <div className="smart-dtf-specs-container">
                        <h2 className="smart-dtf-section-title">Technical Specifications</h2>
                        <p className="smart-dtf-section-subtitle">
                            Complete technical details for SMART DTF system
                        </p>
                        <div className="smart-dtf-specs-grid">
                            <div className="smart-dtf-spec-card">
                                <h3 className="smart-dtf-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="smart-dtf-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="smart-dtf-spec-item">
                                            <div className="smart-dtf-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="smart-dtf-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="smart-dtf-applications-section">
                    <div className="smart-dtf-applications-container">
                        <h2 className="smart-dtf-section-title">Applications</h2>
                        <p className="smart-dtf-applications-subtitle">
                            Any fabric, any color, any part — the best solution for print-on-demand and custom garment printing
                        </p>
                        <div
                            ref={scrollRef}
                            className="smart-dtf-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="smart-dtf-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="smart-dtf-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="smart-dtf-advantages-section">
                    <div className="smart-dtf-advantages-container">
                        <h2 className="smart-dtf-section-title">Why Choose SMART DTF?</h2>
                        <div className="smart-dtf-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="smart-dtf-advantage-item">
                                    <svg className="smart-dtf-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="smart-dtf-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="smart-dtf-modal-overlay" onClick={closeInquiryModal}>
                    <div className="smart-dtf-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="smart-dtf-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="smart-dtf-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="smart-dtf-inquiry-form">
                            <div className="smart-dtf-form-row">
                                <div className="smart-dtf-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="smart-dtf-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="smart-dtf-form-row">
                                <div className="smart-dtf-form-group">
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
                                <div className="smart-dtf-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="smart-dtf-phone-input">
                                        <select name="countryCode" className="smart-dtf-country-select" defaultValue="+63">
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

                            <div className="smart-dtf-machine-form-row">
                                <div className="smart-dtf-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                                <div className="smart-dtf-form-group">
                                    <label htmlFor="address">Complete Address</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" />
                                </div>
                            </div>

                            <div className="smart-dtf-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your SMART DTF requirements and any specific questions about this equipment..."
                                    required
                                ></textarea>
                            </div>

                            <div className="smart-dtf-form-actions">
                                <button type="submit" className="smart-dtf-btn-primary" disabled={inquirySubmitting}>
                                    {inquirySubmitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="smart-dtf-btn-secondary">
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
