"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './smart-dtf-powder-shaker-unique.css';

export default function SmartDTFPowderShaker() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/Powder shaker D650 Model.webp');

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
        name: 'SMART DTF POWDER SHAKER',
        model: 'W650 White Shaker | J850-2 Shaker',
        images: [
            '/sublimation_dtf/Powder shaker D650 Model.webp',
            '/sublimation_dtf/Powder shaker D650 Model.webp', // Add more images if available
        ],
        shortDescription: 'SUPPORT FOR UP TO 8 COLORS - Delivers ultra-rich tones, smoother gradients, and precise color layering with advanced DTF powder shaking technology.',
        detailedDescription: 'The SMART DTF POWDER SHAKER delivers ultra-rich tones, smoother gradients, and precise color layering. This industrial-grade equipment supports up to 8 colors for comprehensive DTF production. Featuring wider platform compatibility, adjustable pinch roller technology, improved capping systems, and newly improved damper technology for consistent powder application and superior print quality.',
        features: [
            {
                title: 'Wider Platform',
                description: 'Enhanced platform compatibility allowing for larger format DTF powder application with improved stability.',
                icon: 'platform'
            },
            {
                title: 'Adjustable Pinch Roller',
                description: 'The adjustable pinch roller system optimizes powder distribution and ensures uniform coverage.',
                icon: 'roller'
            },
            {
                title: 'Improved Capping',
                description: 'The improved capping system prevents powder contamination and ensures consistent application quality.',
                icon: 'capping'
            },
            {
                title: 'Newly Improve Damper',
                description: 'Advanced damper technology provides better powder flow control and reduces waste during operation.',
                icon: 'damper'
            },
            {
                title: 'Industrial Grade Speed',
                description: 'High-speed powder shaking capability with industrial grade performance up to 28 m²/h.',
                icon: 'speed'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'RJ-D6092 | RJ-D6094' },
            { label: 'Machine Head', value: 'I3200*2 | I3200*4' },
            { label: 'Color', value: 'CMYK-W' },
            { label: 'Printing Item', value: 'PET Film' },
            { label: 'Machine Size', value: '180*70*130cm | 180*90*140cm' },
            { label: 'Printing Width', value: '60CM' },
            { label: 'Speed', value: '15-16m² | 26-28m²/h' },
            { label: 'Ink Type', value: 'Pigment Ink' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Weight', value: 'N.W:160KG/G.W:200KG' },
            { label: 'Powder W650 White Shaker - Wattage', value: '5.6KW' },
            { label: 'Powder W650 White Shaker - Machine Size', value: '2200*1050*1100MM' },
            { label: 'Powder J850-2 Shaker - Wattage', value: '4KW' },
            { label: 'Powder J850-2 Shaker - Machine Size', value: '1700*830*1100MM' }
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
            'Canvas Bag',
            'Custom Apparel Printing',
            'Direct-to-Film Transfer',
            'Textile Decoration'
        ],
        advantages: [
            'Support for up to 8 colors for ultra-rich tones and smoother gradients',
            'Delivers precise color layering with advanced DTF technology',
            'Industrial grade speed up to 28 m²/h for efficient production',
            'I3200*2 and I3200*4 printhead options for superior print quality',
            'Wider platform compatibility for versatile DTF applications',
            'Adjustable pinch roller system for uniform powder distribution',
            'Improved capping system prevents contamination',
            'Newly improved damper technology for better flow control',
            'Supports CMYK-W color configuration',
            'Professional grade construction for commercial DTF production',
            'Compact machine sizes for efficient workspace utilization',
            'Advanced powder shaking technology for consistent application'
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
        // Handle form submission logic here
        alert('Thank you for your inquiry! We will contact you soon.');
        closeInquiryModal();
    };

    return (
        <div>
            <Header />
            <main className="smart-powder-shaker-main">
                {/* Product Hero Section */}
                <section className="smart-powder-shaker-hero product-hero">
                    <div className="smart-powder-shaker-hero-layout">
                        <div className="smart-powder-shaker-hero-left">
                            <h1 className="smart-powder-shaker-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="smart-powder-shaker-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="smart-powder-shaker-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="smart-powder-shaker-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="smart-powder-shaker-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="smart-powder-shaker-hero-stats product-stats">
                                <div className="smart-powder-shaker-stat">
                                    <span className="smart-powder-shaker-stat-number">8 Colors</span>
                                    <span className="smart-powder-shaker-stat-label">Max Support</span>
                                </div>
                                <div className="smart-powder-shaker-stat">
                                    <span className="smart-powder-shaker-stat-number">28 m²/h</span>
                                    <span className="smart-powder-shaker-stat-label">Max Speed</span>
                                </div>
                                <div className="smart-powder-shaker-stat">
                                    <span className="smart-powder-shaker-stat-number">60CM</span>
                                    <span className="smart-powder-shaker-stat-label">Print Width</span>
                                </div>
                            </div>
                        </div>
                        <div className="smart-powder-shaker-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="smart-powder-shaker-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="smart-powder-shaker-overview-section">
                    <div className="smart-powder-shaker-overview-container">
                        <h2 className="smart-powder-shaker-section-title">Product Overview</h2>
                        <p className="smart-powder-shaker-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="smart-powder-shaker-features-section">
                    <div className="smart-powder-shaker-features-container">
                        <div className="smart-powder-shaker-features-header">
                            <h2 className="smart-powder-shaker-features-title">Key Features</h2>
                            <p className="smart-powder-shaker-features-subtitle">
                                Advanced DTF powder shaking technology meets professional performance
                            </p>
                        </div>

                        <div className="smart-powder-shaker-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="smart-powder-shaker-feature-card">
                                    <div className="smart-powder-shaker-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="smart-powder-shaker-feature-title">{feature.title}</h3>
                                    <p className="smart-powder-shaker-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="smart-powder-shaker-specs-section">
                    <div className="smart-powder-shaker-specs-container">
                        <h2 className="smart-powder-shaker-section-title">Technical Specifications</h2>
                        <div className="smart-powder-shaker-specs-grid">
                            <div className="smart-powder-shaker-spec-card">
                                <h3 className="smart-powder-shaker-spec-card-title">Machine Specifications</h3>
                                {machineDetails.specifications.slice(0, 5).map((spec, index) => (
                                    <div key={index} className="smart-powder-shaker-spec-item">
                                        <span className="smart-powder-shaker-spec-label">{spec.label}:</span>
                                        <span className="smart-powder-shaker-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="smart-powder-shaker-spec-card">
                                <h3 className="smart-powder-shaker-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(5).map((spec, index) => (
                                    <div key={index} className="smart-powder-shaker-spec-item">
                                        <span className="smart-powder-shaker-spec-label">{spec.label}:</span>
                                        <span className="smart-powder-shaker-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="smart-powder-shaker-applications-section">
                    <div className="smart-powder-shaker-applications-container">
                        <h2 className="smart-powder-shaker-section-title">Applications</h2>
                        <p className="smart-powder-shaker-applications-subtitle">
                            Versatile powder shaking solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="smart-powder-shaker-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="smart-powder-shaker-applications-image-grid">
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="T-Shirt Printing" />
                                    <p>T-Shirt Printing</p>
                                </div>
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Mug Printing" />
                                    <p>Mug Printing</p>
                                </div>
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Signage & Banners" />
                                    <p>Signage & Banners</p>
                                </div>
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Custom Apparel" />
                                    <p>Custom Apparel</p>
                                </div>
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Phone Cases" />
                                    <p>Phone Cases</p>
                                </div>
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sportswear" />
                                    <p>Sportswear</p>
                                </div>
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Home Decor" />
                                    <p>Home Decor</p>
                                </div>
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging" />
                                    <p>Packaging</p>
                                </div>
                                <div className="smart-powder-shaker-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Labels & Stickers" />
                                    <p>Labels & Stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="smart-powder-shaker-advantages-section">
                    <div className="smart-powder-shaker-advantages-container">
                        <h2 className="smart-powder-shaker-section-title">Why Choose SMART DTF POWDER SHAKER?</h2>
                        <div className="smart-powder-shaker-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="smart-powder-shaker-advantage-item">
                                    <svg className="smart-powder-shaker-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="smart-powder-shaker-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="smart-powder-shaker-modal-overlay" onClick={closeInquiryModal}>
                    <div className="smart-powder-shaker-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="smart-powder-shaker-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="smart-powder-shaker-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="smart-powder-shaker-inquiry-form">
                            <div className="smart-powder-shaker-form-row">
                                <div className="smart-powder-shaker-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="smart-powder-shaker-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="smart-powder-shaker-form-row">
                                <div className="smart-powder-shaker-form-group">
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
                                <div className="smart-powder-shaker-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="smart-powder-shaker-phone-input">
                                        <select name="countryCode" className="smart-powder-shaker-country-select" defaultValue="+63">
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

                            <div className="smart-powder-shaker-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="smart-powder-shaker-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your SMART DTF POWDER SHAKER requirements and any specific questions about this equipment..."
                                    required
                                ></textarea>
                            </div>

                            <div className="smart-powder-shaker-form-actions">
                                <button type="submit" className="smart-powder-shaker-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="smart-powder-shaker-btn-secondary">
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
