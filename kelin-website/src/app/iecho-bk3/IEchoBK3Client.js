"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import InquiryStorage from '../utils/InquiryStorage';
import './iecho-bk3.css';

export default function IEchoBK3() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/cutting-machines/bk3.webp');
    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);

    const applicationItems = [
        { image: '/application/pk-application.png', label: 'KT Board' },
        { image: '/application/pk-application(2).png', label: 'PP Paper' },
        { image: '/application/pk-application(3).png', label: 'Sticker & Vinyl' },
        { image: '/application/pk-application(4).png', label: 'Foam Board' },
        { image: '/application/pk-application(5).png', label: 'Plastic Sheet' },
        { image: '/application/pk-application(6).png', label: 'Magnetic Sticker' },
        { image: '/application/pk-application(7).png', label: 'Corrugated Board' }
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
        name: 'iEcho BK3',
        model: 'BK3 High Speed Digital Cutting System',
        images: [
            '/cutting-machines/bk3.webp',
            '/cutting-machines/bk3.webp', // Add more images if available
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
            _subject: `Inquiry: iEcho BK3`,
            'Page Source': 'iEcho BK3',
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
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Fully automatic production: robot/auto gears */}
                                                <polyline points="23 4 23 10 17 10" />
                                                <polyline points="1 20 1 14 7 14" />
                                                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Aviation aluminum table: lightweight frame */}
                                                <rect x="2" y="14" width="20" height="3" rx="1" />
                                                <line x1="6" y1="14" x2="6" y2="8" />
                                                <line x1="18" y1="14" x2="18" y2="8" />
                                                <path d="M4 8 L12 4 L20 8" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Efficient cutting heads: precision cutter */}
                                                <circle cx="12" cy="8" r="3" />
                                                <line x1="12" y1="11" x2="12" y2="22" />
                                                <line x1="8" y1="16" x2="16" y2="16" />
                                                <line x1="6" y1="20" x2="18" y2="20" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Vacuum section control: suction/zones */}
                                                <rect x="2" y="6" width="20" height="12" rx="2" />
                                                <line x1="8" y1="6" x2="8" y2="18" />
                                                <line x1="16" y1="6" x2="16" y2="18" />
                                                <circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none" />
                                                <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                                                <circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none" />
                                            </svg>
                                        )}
                                        {index === 4 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Continuous cutting: infinite loop symbol */}
                                                <path d="M12 5C7.3 5 3.5 8.5 3.5 12.8 C3.5 17.1 7 21 12 21" />
                                                <path d="M12 5C16.7 5 20.5 8.5 20.5 12.8 C20.5 17.1 17 21 12 21" />
                                                <polyline points="9 2 12 5 9 8" />
                                                <polyline points="15 18 12 21 15 24" />
                                            </svg>
                                        )}
                                        {index === 5 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Precise auto positioning: crosshair */}
                                                <circle cx="12" cy="12" r="10" />
                                                <circle cx="12" cy="12" r="3" />
                                                <line x1="12" y1="2" x2="12" y2="5" />
                                                <line x1="12" y1="19" x2="12" y2="22" />
                                                <line x1="2" y1="12" x2="5" y2="12" />
                                                <line x1="19" y1="12" x2="22" y2="12" />
                                            </svg>
                                        )}
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
                        <h2 className="iecho-bk3-section-title">Applications</h2>
                        <p className="iecho-bk3-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="iecho-bk3-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="iecho-bk3-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="iecho-bk3-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
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
                                    <svg className="iecho-bk3-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
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
                                        <select name="countryCode" className="iecho-bk3-country-select" defaultValue="+63">
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

                            <div className="iecho-bk3-form-row">
                                <div className="iecho-bk3-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                                <div className="iecho-bk3-form-group">
                                    <label htmlFor="address">Complete Address</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" />
                                </div>
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
                                <button type="submit" className="iecho-bk3-btn-primary" disabled={inquirySubmitting}>
                                    {inquirySubmitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-bk3-btn-secondary">
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