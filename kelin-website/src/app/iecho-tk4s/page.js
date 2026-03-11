"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import InquiryStorage from '../utils/InquiryStorage';
import './iecho-tk4s.css';

export default function IEchoTK4S() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/cutting-machines/TK4S Large format cutting system.webp');
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const machineDetails = {
        name: 'iEcho TK4S',
        model: 'TK4S Large Format Cutting System',
        images: [
            '/cutting-machines/TK4S Large format cutting system.webp',
            '/cutting-machines/TK4S Large format cutting system.webp', // Add more TK4S images if available
        ],
        shortDescription: 'LARGE FORMAT CUTTING SYSTEM - Precision dual-beam cutting technology with 1500mm/s speed, featuring intelligent EchoMC precision motion control for high-volume production.',
        detailedDescription: 'The TK4S Large Format Cutting System delivers unmatched speed, accuracy, and versatility to meet the demands of any cutting application. For high-volume production or precision work on complex materials, the TK4S provides precision dual-beam cutting technology with intelligent EchoMC motion control. With maximum cutting speed of 1500mm/s and cutting precision of 0.1mm, the TK4S excels in furniture & textile, sign & advertising/packaging, automobile upholstery, and other industries.',
        features: [
            {
                title: 'AKI System',
                description: 'Accurate depth control with automatic knife setup for precise cutting operations.',
                icon: 'precision'
            },
            {
                title: 'Flexible Working Area',
                description: 'Modular work area expandable to customer needs with versatile cutting configurations.',
                icon: 'accuracy'
            },
            {
                title: 'Precision Dual-Beam Cutting Technology',
                description: 'Advanced cutting speed of 1500mm/s with intelligent EchoMC precision motion control.',
                icon: 'speed'
            },
            {
                title: 'Diversified Cutting Tools',
                description: 'Interchangeable heads support diverse industrial cutting needs with various tool options.',
                icon: 'media'
            },
            {
                title: 'X Axis Two Motors',
                description: 'Dual motors with balance tech ensure stable, accurate transmission for enhanced precision.',
                icon: 'durability'
            },
            {
                title: 'Large Format Capability',
                description: 'Designed for high-volume production and precision work on complex materials.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Vacuum Pump', value: '5×6kW (7.5kW) | 12×9kW (7.5kW) | 5×14kW (7.5kW)' },
            { label: 'Cutting Accuracy', value: '0.1mm' },
            { label: 'Maximum Cutting Speed', value: '1500mm/s' },
            { label: 'Interface', value: 'Serial Port' },
            { label: 'Suction Media', value: 'Vacuum System' },
            { label: 'Beam', value: 'Single Beam | Dual Beams (Optional)' },
            { label: 'Data Format', value: 'DXF HPGL CF PDF DXP PLT, Vector file format Ai,PDF' },
            { label: 'Maximum Cutting Thickness', value: '50mm' },
            { label: 'Operation Environment', value: 'Temperature 0°C-40°C | Humidity 25%-80%RH' },
            { label: 'Power', value: 'Servo Motor/PLC/Computer+22"monitor/vaccum' }
        ],
        applications: [
            'Furniture & Textile Manufacturing',
            'Sign & Advertising Production',
            'Packaging Industry',
            'Automobile Upholstery',
            'Leather Goods Manufacturing',
            'Canvas and Fabric Cutting',
            'Composite Materials',
            'Gasket Manufacturing',
            'Carpet and Rug Production',
            'Technical Textiles'
        ],
        advantages: [
            'Precision dual-beam cutting technology for enhanced productivity',
            'High-speed cutting up to 1500mm/s with intelligent EchoMC precision motion control',
            'AKI System with automatic knife setup for accurate depth control',
            'Flexible working area expandable to customer needs',
            'Diversified cutting tools with interchangeable heads',
            'X Axis dual motors with balance technology for stable transmission',
            'Large format capability for high-volume production',
            'High cutting precision of 0.1mm accuracy',
            'Multiple file format support: DXF, HPGL, CF, PDF, DXP, PLT, AI',
            'Suitable for complex materials and precision work applications'
        ]
    };

    const openInquiryModal = () => {
        setInquiryModalOpen(true);
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
    };

    const handleSubmitInquiry = (e) => {
        e.preventDefault();

        // Extract form data
        const formData = new FormData(e.target);
        const inquiryData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company') || 'Not specified',
            machine: machineDetails.name,
            message: formData.get('message'),
            countryCode: formData.get('countryCode')
        };

        // Save to storage
        const savedInquiry = InquiryStorage.saveInquiry(inquiryData);

        if (savedInquiry) {
            alert('Thank you for your inquiry! We will contact you soon.');
            closeInquiryModal();
            // Reset form
            e.target.reset();
        } else {
            alert('There was an error submitting your inquiry. Please try again.');
        }
    };

    return (
        <div>
            <Header />
            <main className="iecho-tk4s-main">
                {/* Product Hero Section */}
                <section className="iecho-tk4s-hero product-hero">
                    <div className="iecho-tk4s-hero-layout">
                        <div className="iecho-tk4s-hero-left">
                            <h1 className="iecho-tk4s-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="iecho-tk4s-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="iecho-tk4s-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="iecho-tk4s-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="iecho-tk4s-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="iecho-tk4s-hero-stats product-stats">
                                <div className="iecho-tk4s-stat">
                                    <span className="iecho-tk4s-stat-number">1500mm/s</span>
                                    <span className="iecho-tk4s-stat-label">Max Speed</span>
                                </div>
                                <div className="iecho-tk4s-stat">
                                    <span className="iecho-tk4s-stat-number">0.1mm</span>
                                    <span className="iecho-tk4s-stat-label">Precision</span>
                                </div>
                                <div className="iecho-tk4s-stat">
                                    <span className="iecho-tk4s-stat-number">Dual-Beam</span>
                                    <span className="iecho-tk4s-stat-label">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div className="iecho-tk4s-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="iecho-tk4s-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="iecho-tk4s-overview-section">
                    <div className="iecho-tk4s-overview-container">
                        <h2 className="iecho-tk4s-section-title">Product Overview</h2>
                        <p className="iecho-tk4s-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="iecho-tk4s-features-section">
                    <div className="iecho-tk4s-features-container">
                        <div className="iecho-tk4s-features-header">
                            <h2 className="iecho-tk4s-features-title">Key Features</h2>
                            <p className="iecho-tk4s-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="iecho-tk4s-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="iecho-tk4s-feature-card">
                                    <div className="iecho-tk4s-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="iecho-tk4s-feature-title">{feature.title}</h3>
                                    <p className="iecho-tk4s-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="iecho-tk4s-specs-section">
                    <div className="iecho-tk4s-specs-container">
                        <h2 className="iecho-tk4s-section-title">Technical Specifications</h2>
                        <div className="iecho-tk4s-specs-grid">
                            <div className="iecho-tk4s-spec-card">
                                <h3 className="iecho-tk4s-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="iecho-tk4s-spec-item">
                                        <span className="iecho-tk4s-spec-label">{spec.label}:</span>
                                        <span className="iecho-tk4s-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="iecho-tk4s-spec-card">
                                <h3 className="iecho-tk4s-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="iecho-tk4s-spec-item">
                                        <span className="iecho-tk4s-spec-label">{spec.label}:</span>
                                        <span className="iecho-tk4s-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="iecho-tk4s-applications-section">
                    <div className="iecho-tk4s-applications-container">
                        <h2 className="iecho-tk4s-section-title">Applications</h2>
                        <p className="iecho-tk4s-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="iecho-tk4s-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="iecho-tk4s-applications-image-grid">
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Furniture & Textile Manufacturing" />
                                    <p>Furniture & Textile Manufacturing</p>
                                </div>
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Sign & Advertising Production" />
                                    <p>Sign & Advertising Production</p>
                                </div>
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging Industry" />
                                    <p>Packaging Industry</p>
                                </div>
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Automobile Upholstery" />
                                    <p>Automobile Upholstery</p>
                                </div>
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Leather Goods Manufacturing" />
                                    <p>Leather Goods Manufacturing</p>
                                </div>
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Canvas and Fabric Cutting" />
                                    <p>Canvas and Fabric Cutting</p>
                                </div>
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Composite Materials" />
                                    <p>Composite Materials</p>
                                </div>
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Gasket Manufacturing" />
                                    <p>Gasket Manufacturing</p>
                                </div>
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Carpet and Rug Production" />
                                    <p>Carpet and Rug Production</p>
                                </div>
                                <div className="iecho-tk4s-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Technical Textiles" />
                                    <p>Technical Textiles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="iecho-tk4s-advantages-section">
                    <div className="iecho-tk4s-advantages-container">
                        <h2 className="iecho-tk4s-section-title">Why Choose iEcho TK4S?</h2>
                        <div className="iecho-tk4s-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="iecho-tk4s-advantage-item">
                                    <svg className="iecho-tk4s-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="iecho-tk4s-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="iecho-tk4s-modal-overlay" onClick={closeInquiryModal}>
                    <div className="iecho-tk4s-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="iecho-tk4s-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="iecho-tk4s-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="iecho-tk4s-inquiry-form">
                            <div className="iecho-tk4s-form-row">
                                <div className="iecho-tk4s-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="iecho-tk4s-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="iecho-tk4s-form-row">
                                <div className="iecho-tk4s-form-group">
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
                                <div className="iecho-tk4s-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="iecho-tk4s-phone-input">
                                        <select name="countryCode" className="iecho-tk4s-country-select" defaultValue="+63">
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

                            <div className="iecho-tk4s-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="iecho-tk4s-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your BK3 cutting system requirements and any specific questions about this high-speed digital cutting machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="iecho-tk4s-form-actions">
                                <button type="submit" className="iecho-tk4s-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-tk4s-btn-secondary">
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
