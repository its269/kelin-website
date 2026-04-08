"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import InquiryStorage from '../utils/InquiryStorage';
import './iecho-bk4.css';

export default function IEchoBK4() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/cutting-machines/bk4 (1).webp');
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
        name: 'iEcho BK4',
        model: 'BK4 High Speed Digital Cutting System',
        images: [
            '/cutting-machines/bk4 (1).webp',
            '/cutting-machines/bk4 (1).webp', // Add more images if available
        ],
        shortDescription: 'HIGH SPEED DIGITAL CUTTING SYSTEM - Ultra-high strength integrated frame with 1800mm/s cutting speed, featuring intelligent EchoMC precision motion control.',
        detailedDescription: 'The BK4 High Speed Digital Cutting System features an ultra-high strength integrated frame with 12MM steel frame and qualified connection technology, machine body frame weighs 600KG. Strength increased by 30%, reliable and durable. With intelligent EchoMC precision motion control, the machine achieves hardness speeds of 1800mm/s. The BK4 offers modular cutting options, upgrade circuit layout, multi-material unwinder, and intelligent conveyor system for seamless cutting and collecting operations.',
        features: [
            {
                title: 'Ultra-High Strength Integrated Frame',
                description: '12MM Steel frame with qualified connection technology, the machine body frame weighs 600KG. Strength increased by 30%, reliable and durable.',
                icon: 'precision'
            },
            {
                title: 'Modular Cutting Options',
                description: 'Satisfying the cutting requirements by different tool combos for different material.',
                icon: 'accuracy'
            },
            {
                title: 'High Speed Digital Cutting',
                description: 'Hardness speeds of 1800mm/s with intelligent EchoMC precision motion control.',
                icon: 'speed'
            },
            {
                title: 'Multi-Material Unwinder',
                description: 'Choose the correct unwinding device on your application of thin material.',
                icon: 'media'
            },
            {
                title: 'Intelligent Conveyor System',
                description: 'Seamless cutting and collecting for smooth workflow and increased productivity.',
                icon: 'durability'
            },
            {
                title: 'Upgrade Circuit Layout',
                description: 'Newly upgraded circuit layout for improved performance and reliability.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'BK4-1932 | BK4-1516 | BK4-2516 | BK4-2516' },
            { label: 'Effective Cutting Area (mm)', value: '1900×3200 | 1500×1600 | 2500×1600 | 2500×2000' },
            { label: 'Maximum Cutting Speed', value: '1800mm/s' },
            { label: 'Cutting Precision', value: '0.1mm' },
            { label: 'Suction Molds', value: 'Vacuum' },
            { label: 'Electric Power', value: '220V/380-415V | 380V/50-60Hz' },
            { label: 'Weight', value: '600kg-3000kg' },
            { label: 'Machine Dimension', value: '2100×2600 | 2400×3600 | 2600×3400 | 2700×3400' },
            { label: 'Maximum Cutting Thickness', value: '50mm' },
            { label: 'File Format', value: 'DXF / HPGL' },
            { label: 'Pump Power', value: '7.5KW' },
            { label: 'Operation Environment', value: 'Temperature 0°C-40°C | Humidity 25%-80%RH' }
        ],
        applications: [
            'Textile Fabrics',
            'Acrylic Sheets',
            'Corrugated Cardboard',
            'PVC Composites',
            'Foil Graphics',
            'Die-Cut Windows',
            'Sign Making',
            'Display Manufacturing',
            'Packaging Production',
            'Industrial Cutting Applications'
        ],
        advantages: [
            'Ultra-high strength integrated frame with 12MM steel construction',
            'High-speed cutting up to 1800mm/s with intelligent EchoMC precision motion control',
            'Machine body frame weighs 600KG with 30% increased strength',
            'Modular cutting options for different material requirements',
            'Multi-material unwinder for thin material applications',
            'Intelligent conveyor system for seamless cutting and collecting',
            'Newly upgraded circuit layout for improved performance',
            'High cutting precision of 0.1mm accuracy',
            'Multiple file format support: DXF/HPGL',
            'Wide range of cutting thickness up to 50mm'
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
            _subject: `Inquiry: iEcho BK4`,
            'Page Source': 'iEcho BK4',
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
            <main className="iecho-bk4-main">
                {/* Product Hero Section */}
                <section className="iecho-bk4-hero product-hero">
                    <div className="iecho-bk4-hero-layout">
                        <div className="iecho-bk4-hero-left">
                            <h1 className="iecho-bk4-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="iecho-bk4-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="iecho-bk4-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="iecho-bk4-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="iecho-bk4-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="iecho-bk4-hero-stats product-stats">
                                <div className="iecho-bk4-stat">
                                    <span className="iecho-bk4-stat-number">1800mm/s</span>
                                    <span className="iecho-bk4-stat-label">Max Speed</span>
                                </div>
                                <div className="iecho-bk4-stat">
                                    <span className="iecho-bk4-stat-number">0.1mm</span>
                                    <span className="iecho-bk4-stat-label">Precision</span>
                                </div>
                                <div className="iecho-bk4-stat">
                                    <span className="iecho-bk4-stat-number">600KG</span>
                                    <span className="iecho-bk4-stat-label">Frame Weight</span>
                                </div>
                            </div>
                        </div>
                        <div className="iecho-bk4-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="iecho-bk4-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="iecho-bk4-overview-section">
                    <div className="iecho-bk4-overview-container">
                        <h2 className="iecho-bk4-section-title">Product Overview</h2>
                        <p className="iecho-bk4-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="iecho-bk4-features-section">
                    <div className="iecho-bk4-features-container">
                        <div className="iecho-bk4-features-header">
                            <h2 className="iecho-bk4-features-title">Key Features</h2>
                            <p className="iecho-bk4-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="iecho-bk4-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="iecho-bk4-feature-card">
                                    <div className="iecho-bk4-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="iecho-bk4-feature-title">{feature.title}</h3>
                                    <p className="iecho-bk4-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="iecho-bk4-specs-section">
                    <div className="iecho-bk4-specs-container">
                        <h2 className="iecho-bk4-section-title">Technical Specifications</h2>
                        <div className="iecho-bk4-specs-grid">
                            <div className="iecho-bk4-spec-card">
                                <h3 className="iecho-bk4-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="iecho-bk4-spec-item">
                                        <span className="iecho-bk4-spec-label">{spec.label}:</span>
                                        <span className="iecho-bk4-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="iecho-bk4-spec-card">
                                <h3 className="iecho-bk4-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="iecho-bk4-spec-item">
                                        <span className="iecho-bk4-spec-label">{spec.label}:</span>
                                        <span className="iecho-bk4-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="iecho-bk4-applications-section">
                    <div className="iecho-bk4-applications-container">
                        <h2 className="iecho-bk4-section-title">Applications</h2>
                        <p className="iecho-bk4-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="iecho-bk4-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="iecho-bk4-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="iecho-bk4-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="iecho-bk4-advantages-section">
                    <div className="iecho-bk4-advantages-container">
                        <h2 className="iecho-bk4-section-title">Why Choose iEcho BK4?</h2>
                        <div className="iecho-bk4-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="iecho-bk4-advantage-item">
                                    <svg className="iecho-bk4-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="iecho-bk4-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="iecho-bk4-modal-overlay" onClick={closeInquiryModal}>
                    <div className="iecho-bk4-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="iecho-bk4-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="iecho-bk4-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="iecho-bk4-inquiry-form">
                            <div className="iecho-bk4-form-row">
                                <div className="iecho-bk4-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="iecho-bk4-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="iecho-bk4-form-row">
                                <div className="iecho-bk4-form-group">
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
                                <div className="iecho-bk4-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="iecho-bk4-phone-input">
                                        <select name="countryCode" className="iecho-bk4-country-select">
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

                            <div className="iecho-bk4-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="iecho-bk4-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your BK3 cutting system requirements and any specific questions about this high-speed digital cutting machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="iecho-bk4-form-actions">
                                <button type="submit" className="iecho-bk4-btn-primary" disabled={inquirySubmitting}>
                                    {inquirySubmitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-bk4-btn-secondary">
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
