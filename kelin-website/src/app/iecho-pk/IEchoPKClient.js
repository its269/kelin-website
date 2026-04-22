"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './iecho-pk.css';
import VideoPlayer from '../components/VideoPlayer';

export default function IEchoPK() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/cutting-machines/PK1209 (1).webp');
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
        if (!scrollElement) {
            return;
        }

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
        if (!scrollElement) {
            return;
        }

        const initializeLoopPosition = () => {
            const segmentWidth = scrollElement.scrollWidth / 3;
            scrollElement.scrollLeft = segmentWidth;
        };

        initializeLoopPosition();
        window.addEventListener('resize', initializeLoopPosition);

        return () => {
            window.removeEventListener('resize', initializeLoopPosition);
        };
    }, []);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) {
            return;
        }

        const speedPixelsPerMs = 0.05;

        const animate = (timestamp) => {
            if (lastTimestampRef.current === 0) {
                lastTimestampRef.current = timestamp;
            }

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
            if (animationFrameRef.current) {
                window.cancelAnimationFrame(animationFrameRef.current);
            }
            lastTimestampRef.current = 0;
        };
    }, []);

    const handleMouseDown = (e) => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) {
            return;
        }

        isDraggingRef.current = true;
        startXRef.current = e.pageX - scrollElement.offsetLeft;
        scrollLeftRef.current = scrollElement.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) {
            return;
        }

        const scrollElement = scrollRef.current;
        if (!scrollElement) {
            return;
        }

        e.preventDefault();
        const x = e.pageX - scrollElement.offsetLeft;
        const walk = (x - startXRef.current) * 2;
        scrollElement.scrollLeft = scrollLeftRef.current - walk;
        normalizeInfiniteScroll();
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
    };

    const handleMouseLeave = () => {
        isDraggingRef.current = false;
    };

    const handleTouchStart = (e) => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) {
            return;
        }

        const touchX = e.touches[0].pageX;
        isDraggingRef.current = true;
        startXRef.current = touchX - scrollElement.offsetLeft;
        scrollLeftRef.current = scrollElement.scrollLeft;
    };

    const handleTouchMove = (e) => {
        if (!isDraggingRef.current) {
            return;
        }

        const scrollElement = scrollRef.current;
        if (!scrollElement) {
            return;
        }

        const touchX = e.touches[0].pageX;
        const x = touchX - scrollElement.offsetLeft;
        const walk = (x - startXRef.current) * 2;
        scrollElement.scrollLeft = scrollLeftRef.current - walk;
        normalizeInfiniteScroll();
    };

    const handleTouchEnd = () => {
        isDraggingRef.current = false;
    };

    const machineDetails = {
        name: 'iEcho PK',
        model: 'PK Automatic Intelligent Cutting System',
        images: [
            '/cutting-machines/PK1209 (1).webp',
            '/cutting-machines/PK1209 (1).webp', // Add more images if available
        ],
        shortDescription: 'PRECISION CUTTING, PROFESSIONAL PERFORMANCE - Professional vinyl cutting plotter with advanced servo motor system and superior cutting accuracy for signage and graphics applications.',
        detailedDescription: 'The iEcho PK Automatic Intelligent Cutting System adopts fully automatic vacuum chuck and automatic lifting and feeding platform. Equipped with various tools, it can quickly and precisely make through cutting, half cutting, creasing and marking. Perfect for sample making and short-run customized production for Signs, printing and Packaging industries. Cost-effective smart equipment that meets all creative processing needs.',
        features: [
            {
                title: 'Integrated Design',
                description: 'Machine adopts an integral welding frame, ergonomically designed and small size. The smallest model occupies only 2 sqm. Wheels make it easy to move around.',
                icon: 'precision'
            },
            {
                title: 'Automatic Loading Device',
                description: 'Can automatically load material sheets on the cutting table continuously, material stack up to 120mm (400pcs card board of 250g).',
                icon: 'accuracy'
            },
            {
                title: 'One Click Start',
                description: 'Simple one-click operation for automated cutting processes, making it easy to operate for users of all skill levels.',
                icon: 'speed'
            },
            {
                title: 'Built-in Computer',
                description: 'Specialized built-in computer eliminates need for external computer setup. Can operate in Wi-Fi mode for smart and convenient operation.',
                icon: 'media'
            },
            {
                title: 'High Precision Vision Registration System (CCD)',
                description: 'High definition CCD camera for automatic and accurate registration contour cutting of printed materials, avoiding manual positioning errors.',
                icon: 'durability'
            },
            {
                title: 'QR Code Scanning System',
                description: 'Software supports QR code scanning to retrieve cutting files automatically, enabling continuous cutting of different materials and patterns.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Machine Models', value: 'PK0604, PK0705, PK0604 Plus, PK0705 Plus' },
            { label: 'Cutting Width', value: 'up to 1350mm' },
            { label: 'Speed', value: 'up to 1200mm/s' },
            { label: 'Force', value: 'up to 500g' },
            { label: 'Precision', value: '±0.1mm' },
            { label: 'Cutting Area (PK0604)', value: '600mm x 400mm' },
            { label: 'Cutting Area (PK0705)', value: '750mm x 530mm' },
            { label: 'Flooring Area', value: '2350mm x 900mm/1000mm x 1150mm' },
            { label: 'Voltage', value: '220V±10% 50HZ' },
            { label: 'Power', value: '4KW' },
            { label: 'PK Standard Tools', value: 'Universal Cutting Tool, Creasing Wheel, Kiss Cut Tool' },
            { label: 'PK Plus Tools', value: 'Oscillating Tool, Universal Cutting Tool, Creasing Wheel, Kiss Cut Tool' },
            { label: 'PK Materials', value: 'Car Sticker, Sticker, Card Paper, PP Paper, Reflective Material' },
            { label: 'PK Plus Materials', value: 'KT Board, PP Paper, Foam Board, Sticker, Reflective Material, Card Board, Plastic Sheet, Corrugated Board, Grey Board, Corrugated Plastic, ABS Board, Magnetic Sticker' },
            { label: 'PK Cutting Thickness', value: '<2mm' },
            { label: 'PK Plus Cutting Thickness', value: '<6mm' },
            { label: 'Media System', value: 'Vacuum System' },
            { label: 'Data Formats', value: 'PLT, DXF, HPGL, PDF, EPS' }
        ],
        applications: [
            'Sample Making for Signs Industry',
            'Short-Run Customized Production',
            'Printing Industry Applications',
            'Packaging Industry Processing',
            'Through Cutting & Half Cutting',
            'Creasing & Marking Operations',
            'Printed Materials Registration Cutting',
            'Roll Materials Processing (with feeding system)',
            'Labels & Tags Production',
            'Creative Processing Applications'
        ],
        advantages: [
            'Compact design - smallest model occupies only 2 sqm',
            'Automatic material loading up to 120mm stack height',
            'Built-in computer eliminates external setup requirements',
            'Wi-Fi operation mode for smart connectivity',
            'High precision CCD vision registration system',
            'QR code scanning for automated file retrieval',
            'Multiple tool options for versatile cutting operations',
            'Vacuum system for secure material holding',
            'Cost-effective solution for sample making',
            'Suitable for both standard and plus model configurations'
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
            address: form.address ? form.address.value : '',
            message: form.message.value,
            _subject: `Inquiry: iEcho PK`,
            'Page Source': 'iEcho PK',
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
            <main className="iecho-pk-main">
                {/* Product Hero Section */}
                <section className="iecho-pk-hero product-hero">
                    <div className="iecho-pk-hero-layout">
                        <div className="iecho-pk-hero-left">
                            <h1 className="iecho-pk-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="iecho-pk-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="iecho-pk-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="iecho-pk-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="iecho-pk-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="iecho-pk-hero-stats product-stats">
                                <div className="iecho-pk-stat">
                                    <span className="iecho-pk-stat-number">1350mm</span>
                                    <span className="iecho-pk-stat-label">Max Width</span>
                                </div>
                                <div className="iecho-pk-stat">
                                    <span className="iecho-pk-stat-number">1200mm/s</span>
                                    <span className="iecho-pk-stat-label">Max Speed</span>
                                </div>
                                <div className="iecho-pk-stat">
                                    <span className="iecho-pk-stat-number">±0.1mm</span>
                                    <span className="iecho-pk-stat-label">Precision</span>
                                </div>
                            </div>
                        </div>
                        <div className="iecho-pk-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="iecho-pk-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="iecho-pk-overview-section">
                    <div className="iecho-pk-overview-container">
                        <h2 className="iecho-pk-section-title">Product Overview</h2>
                        <p className="iecho-pk-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Video */}
                <section className="videoPlayer-section">
                    <VideoPlayer src="/iecho-pk.mp4" poster="" alt="iEcho PK Cutting Machine Video" />
                </section>

                {/* Key Features */}
                <section className="iecho-pk-features-section" style={{ marginTop: '100px' }}>
                    <div className="iecho-pk-features-container">
                        <div className="iecho-pk-features-header">
                            <h2 className="iecho-pk-features-title">Key Features</h2>
                            <p className="iecho-pk-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="iecho-pk-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="iecho-pk-feature-card">
                                    <div className="iecho-pk-feature-icon">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Integrated design: interlocking pieces */}
                                                <rect x="2" y="2" width="9" height="9" rx="1" />
                                                <rect x="13" y="2" width="9" height="9" rx="1" />
                                                <rect x="2" y="13" width="9" height="9" rx="1" />
                                                <rect x="13" y="13" width="9" height="9" rx="1" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Automatic loading: conveyor feeding */}
                                                <rect x="2" y="10" width="20" height="4" rx="1" />
                                                <circle cx="6" cy="12" r="3" />
                                                <circle cx="18" cy="12" r="3" />
                                                <polyline points="14 7 18 11 14 15" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* One click start: power button */}
                                                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                                                <line x1="12" y1="2" x2="12" y2="12" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Built-in computer: monitor with chip */}
                                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                                <line x1="8" y1="21" x2="16" y2="21" />
                                                <line x1="12" y1="17" x2="12" y2="21" />
                                                <rect x="8" y="8" width="8" height="5" rx="1" />
                                            </svg>
                                        )}
                                        {index === 4 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* CCD vision registration: camera/lens */}
                                                <path d="M23 7l-7-4-8 4v10l8 4 7-4V7z" />
                                                <line x1="8" y1="7" x2="8" y2="17" />
                                                <line x1="16" y1="7" x2="16" y2="17" />
                                                <line x1="8" y1="12" x2="16" y2="12" />
                                            </svg>
                                        )}
                                        {index === 5 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* QR code scanning: scan/barcode square */}
                                                <rect x="2" y="2" width="7" height="7" />
                                                <rect x="15" y="2" width="7" height="7" />
                                                <rect x="2" y="15" width="7" height="7" />
                                                <line x1="16" y1="15" x2="16" y2="22" />
                                                <line x1="16" y1="15" x2="22" y2="15" />
                                                <line x1="22" y1="19" x2="22" y2="22" />
                                                <line x1="19" y1="22" x2="22" y2="22" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="iecho-pk-feature-title">{feature.title}</h3>
                                    <p className="iecho-pk-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="iecho-pk-specs-section">
                    <div className="iecho-pk-specs-container">
                        <h2 className="iecho-pk-section-title">Technical Specifications</h2>
                        <p className="iecho-pk-section-subtitle">
                            Complete technical details for iECHO PK cutting plotter
                        </p>
                        <div className="iecho-pk-specs-grid">
                            <div className="iecho-pk-spec-card">
                                <h3 className="iecho-pk-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="iecho-pk-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="iecho-pk-spec-item">
                                            <div className="iecho-pk-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="iecho-pk-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="iecho-pk-applications-section">
                    <div className="iecho-pk-applications-container">
                        <h2 className="iecho-pk-section-title">Applications</h2>
                        <p className="iecho-pk-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="iecho-pk-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="iecho-pk-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="iecho-pk-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                                {/* <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Labels & Tags Production" />
                                    <p>Labels & Tags Production</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Creative Processing" />
                                    <p>Creative Processing</p>
                                </div>
                                <div className="iecho-pk-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Roll Materials Processing" />
                                    <p>Roll Materials Processing</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="iecho-pk-advantages-section">
                    <div className="iecho-pk-advantages-container">
                        <h2 className="iecho-pk-section-title">Why Choose iEcho PK?</h2>
                        <div className="iecho-pk-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="iecho-pk-advantage-item">
                                    <svg className="iecho-pk-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="iecho-pk-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="iecho-pk-modal-overlay" onClick={closeInquiryModal}>
                    <div className="iecho-pk-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="iecho-pk-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="iecho-pk-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="iecho-pk-inquiry-form">
                            <div className="iecho-pk-form-row">
                                <div className="iecho-pk-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="iecho-pk-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="iecho-pk-form-row">
                                <div className="iecho-pk-form-group">
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
                                <div className="iecho-pk-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="iecho-pk-phone-input">
                                        <select name="countryCode" className="iecho-pk-country-select" defaultValue="+63">
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

                            <div className="iecho-pk-form-row">
                                <div className="iecho-pk-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                                <div className="iecho-pk-form-group">
                                    <label htmlFor="address">Complete Address</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" />
                                </div>
                            </div>

                            <div className="iecho-pk-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="iecho-pk-form-actions">
                                <button type="submit" className="iecho-pk-btn-primary" disabled={inquirySubmitting}>
                                    {inquirySubmitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-pk-btn-secondary">
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