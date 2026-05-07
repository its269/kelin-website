"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './fulei-bu-1600e.css';

export default function FuleiBU1600EWarmAutoLaminator() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laminator/Fulei BU-1600E Warm Auto Laminator (1).webp');
    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);

    const applicationItems = [
        { image: '/application/laminator/1.png', label: 'Commercial Print Lamination' },
        { image: '/application/laminator/2.png', label: 'Document Protection' },
        { image: '/application/laminator/3.png', label: 'Menu and Card Lamination' },
        { image: '/application/laminator/4.png', label: 'Photo Lamination Services' },
        { image: '/application/laminator/5.png', label: 'Poster and Banner Lamination' },
        { image: '/application/laminator/6.png', label: 'Professional Print Finishing' },
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
        name: 'AUTO WARM LAMINATOR',
        model: 'FULEI AUTO WARM LAMINATOR',
        images: [
            '/laminator/Fulei BU-1600E Warm Auto Laminator (1).webp',
            '/laminator/Fulei BU-1600E Warm Auto Laminator (1).webp',
        ],
        shortDescription: 'EVEN HEAT AND EASY LEVEL FILM - E Warm series is very level film, you can let it be warm same image with you get better film look, even better the accurate CNC metal cutting program precise align laminate and quality finish ease.',
        detailedDescription: 'Our wide-format laminators - cold, flatbed, and auto warm - are built to handle everything from soft prints to hard boards with speed, accuracy, and ease. The Auto Warm Laminator features even heat distribution and easy level film operation with precise CNC metal cutting program for accurate alignment and quality finish.',
        features: [
            {
                title: 'Even Heat Distribution',
                description: 'E Warm series provides very level film with consistent heat distribution for optimal lamination results.',
                icon: 'precision'
            },
            {
                title: 'CNC Precision',
                description: 'Accurate CNC metal cutting program ensures precise alignment for professional laminate quality and finish ease.',
                icon: 'accuracy'
            },
            {
                title: 'Versatile Speed',
                description: 'Variable working speed of 0-6 m/min allows for flexible operation based on project requirements.',
                icon: 'speed'
            },
            {
                title: 'Wide Format Capability',
                description: 'Built to handle everything from soft prints to hard boards with speed, accuracy, and ease.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Max Working Width', value: '165 cm' },
            { label: 'Max. Nip Opening', value: '35 mm' },
            { label: 'Roller Diameter', value: '12 cm' },
            { label: 'Bottom Roller Material', value: 'Natural Rubber' },
            { label: 'Variable Working Speed', value: '0-6m/min' },
            { label: 'Max. Heat Assist. Temp.', value: '60°C' },
            { label: 'Top Roller Material', value: 'Silicone Rubber' },
            { label: 'Power', value: 'AC110V ~230V 50/60Hz' },
            { label: 'Power Consumption', value: '1500W' },
            { label: 'Power Requirement', value: 'AC110V/ 50-60Hz' },
            { label: 'Machine Size', value: '210*60*130 cm' },
            { label: 'Shipping Dimensions', value: '215*77*75 cm' }
        ],
        applications: [
            'Commercial Print Lamination',
            'High-Volume Document Protection',
            'Menu and Card Lamination',
            'Photo Lamination Services',
            'Poster and Banner Lamination',
            'Educational Material Production',
            'ID Card and Badge Lamination',
            'Packaging Materials',
            'Point of Sale Materials',
            'Marketing Collateral Protection',
            'Certificate and Award Lamination',
            'Professional Print Finishing'
        ],
        advantages: [
            'Fully automatic operation for hands-free processing',
            'Warm lamination technology for optimal adhesion',
            'High-speed processing for increased productivity',
            'Consistent bubble-free results',
            'Energy-efficient warm temperature operation',
            'Reduced risk of heat damage compared to hot laminators',
            'Wide film compatibility',
            'Ideal for high-volume production',
            'Professional commercial-grade quality',
            'Easy operation and minimal training required',
            'Reliable performance for continuous operation',
            'Cost-effective automated laminating solution'
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
        formData.append('Page Source', 'Fulei BU-1600E Warm Auto Laminator');
        formData.append('_replyto', formData.get('email') || '');
        formData.append('_subject', 'Inquiry: Fulei BU-1600E Warm Auto Laminator');
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
            <main className="fulei-1600e-main">
                {/* Product Hero Section */}
                <section className="fulei-1600e-hero product-hero">
                    <div className="fulei-1600e-hero-layout">
                        <div className="fulei-1600e-hero-left">
                            <h1 className="fulei-1600e-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="fulei-1600e-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="fulei-1600e-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="fulei-1600e-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="fulei-1600e-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="fulei-1600e-hero-stats product-stats">
                                <div className="fulei-1600e-stat">
                                    <span className="fulei-1600e-stat-number">Automatic</span>
                                    <span className="fulei-1600e-stat-label">Operation</span>
                                </div>
                                <div className="fulei-1600e-stat">
                                    <span className="fulei-1600e-stat-number">Warm</span>
                                    <span className="fulei-1600e-stat-label">Technology</span>
                                </div>
                                <div className="fulei-1600e-stat">
                                    <span className="fulei-1600e-stat-number">High-Speed</span>
                                    <span className="fulei-1600e-stat-label">Processing</span>
                                </div>
                            </div>
                        </div>
                        <div className="fulei-1600e-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="fulei-1600e-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="fulei-1600e-overview-section">
                    <div className="fulei-1600e-overview-container">
                        <h2 className="fulei-1600e-section-title">Product Overview</h2>
                        <p className="fulei-1600e-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="fulei-1600e-features-section">
                    <div className="fulei-1600e-features-container">
                        <div className="fulei-1600e-features-header">
                            <h2 className="fulei-1600e-features-title">Key Features</h2>
                            <p className="fulei-1600e-features-subtitle">
                                Professional automatic warm laminating technology for high-volume production
                            </p>
                        </div>

                        <div className="fulei-1600e-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="fulei-1600e-feature-card">
                                    <div className="fulei-1600e-feature-icon">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Even heat distribution: radiant heat waves */}
                                                <rect x="3" y="13" width="18" height="4" rx="1" />
                                                <path d="M7 13 C7 10 9 8 9 5" />
                                                <path d="M12 13 C12 10 14 8 14 5" />
                                                <path d="M17 13 C17 10 19 8 19 5" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* CNC precision: crosshair/target */}
                                                <circle cx="12" cy="12" r="10" />
                                                <circle cx="12" cy="12" r="3" />
                                                <line x1="12" y1="2" x2="12" y2="5" />
                                                <line x1="12" y1="19" x2="12" y2="22" />
                                                <line x1="2" y1="12" x2="5" y2="12" />
                                                <line x1="19" y1="12" x2="22" y2="12" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Versatile speed: sliders */}
                                                <line x1="4" y1="6" x2="20" y2="6" />
                                                <line x1="4" y1="12" x2="20" y2="12" />
                                                <line x1="4" y1="18" x2="20" y2="18" />
                                                <circle cx="8" cy="6" r="2" fill="white" />
                                                <circle cx="14" cy="12" r="2" fill="white" />
                                                <circle cx="10" cy="18" r="2" fill="white" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Wide format: expand arrows */}
                                                <polyline points="15 3 21 3 21 9" />
                                                <polyline points="9 21 3 21 3 15" />
                                                <line x1="21" y1="3" x2="14" y2="10" />
                                                <line x1="3" y1="21" x2="10" y2="14" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="fulei-1600e-feature-title">{feature.title}</h3>
                                    <p className="fulei-1600e-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="fulei-1600e-specs-section">
                    <div className="fulei-1600e-specs-container">
                        <h2 className="fulei-1600e-section-title">Technical Specifications</h2>
                        <p className="fulei-1600e-section-subtitle">
                            Complete technical details for Fulei BU-1600E Warm Auto Laminator
                        </p>
                        <div className="fulei-1600e-specs-grid">
                            <div className="fulei-1600e-spec-card">
                                <h3 className="fulei-1600e-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="fulei-1600e-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="fulei-1600e-spec-item">
                                            <div className="fulei-1600e-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="fulei-1600e-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="fulei-1600e-applications-section">
                    <div className="fulei-1600e-applications-container">
                        <h2 className="fulei-1600e-section-title">Applications</h2>
                        <p className="fulei-1600e-applications-subtitle">
                            Professional automatic warm laminating solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="fulei-1600e-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="fulei-1600e-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="fulei-1600e-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="fulei-1600e-advantages-section">
                    <div className="fulei-1600e-advantages-container">
                        <h2 className="fulei-1600e-section-title">Why Choose Fulei BU-1600E?</h2>
                        <div className="fulei-1600e-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="fulei-1600e-advantage-item">
                                    <div className="fulei-1600e-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="fulei-1600e-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="fulei-1600e-modal-overlay" onClick={closeInquiryModal}>
                    <div className="fulei-1600e-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="fulei-1600e-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="fulei-1600e-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="fulei-1600e-inquiry-form">
                            {submitSuccess === true && (
                                <div className="fulei-1600e-form-success">Thank you for your inquiry! We will contact you soon.</div>
                            )}
                            {submitSuccess === false && (
                                <div className="fulei-1600e-form-error">Sorry, there was an error submitting your inquiry. Please try again.</div>
                            )}
                            <div className="fulei-1600e-form-row">
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="fulei-1600e-form-row">
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="fulei-1600e-form-row">
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="address">Complete Address</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" />
                                </div>
                                <div className="fulei-1600e-form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <div className="fulei-1600e-phone-input">
                                        <select className="fulei-1600e-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="fulei-1600e-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laminating needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="fulei-1600e-form-actions">
                                <button type="submit" className="fulei-1600e-btn-primary" disabled={submitting}>
                                    {submitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="fulei-1600e-btn-secondary" disabled={submitting}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
