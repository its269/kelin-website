"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './promaker-embroidery-1202.css';

export default function PromakerEmbroidery1202() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/embroidery_knitting/Promaker Embroidery 1202.png');
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
        name: 'PROMAKER EMBROIDERY MACHINE 1202',
        model: '1 HEAD | 12O1 | 12 HEADS | 1804',
        images: [
            '/embroidery_knitting/Promaker Embroidery 1202.png',
            '/embroidery_knitting/Promaker Embroidery 1202.png',
        ],
        shortDescription: 'PRECISION STITCHED. POSSIBILITIES UNLIMITED. - PROMAKER Embroidery Machine designed for precision, efficiency, and versatility. This machine is engineered to meet the demands of both custom designs and high-volume production. Whether you\'re embroidering on caps, garments, or bags, the PROMAKER machine delivers exceptional quality and performance.',
        detailedDescription: 'The PROMAKER Embroidery Machine 1202 features a dual-head configuration for enhanced productivity. Engineered to meet the demands of both custom designs and high-volume production, this industrial-grade embroidery system features advanced control systems, efficient thread management, and Japanese hook technology. With an industrial max speed up to 1200 RPM with mater jump, the PROMAKER 1202 delivers exceptional quality and performance for professional embroidery applications.',
        features: [
            {
                title: 'Advanced Control System',
                description: 'Features a high-definition touch display with CNC control and real-time monitoring for precise operation.',
                icon: 'precision'
            },
            {
                title: 'Efficient Thread Management',
                description: 'Includes thread trim, tension control, and up to 15 needle colors per head for versatile design options and optimized production.',
                icon: 'accuracy'
            },
            {
                title: 'Japanese Hook',
                description: 'Integrates a Japanese-style hook design renowned for superior stitch quality, reliability, and durability in high-speed embroidery.',
                icon: 'speed'
            },
            {
                title: 'Versatile Application',
                description: 'Suitable for a wide range of items including caps, garments, bags, and patchesâ€”offering flexibility for diverse embroidery needs.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: '1202' },
            { label: 'Embroidery Area', value: '1430mm x 620mm' },
            { label: 'Machine Heads', value: '2' },
            { label: 'Max Speed', value: '1200 RPM with mater jump' },
            { label: 'Languages', value: 'Chinese, English, Spanish, Arabic, Russian, Italian, German, French' },
            { label: 'Memory Size', value: '400,000,000 stitches (about 200 design)' },
            { label: 'Voltage', value: 'AC110V / 220V' }
        ],
        applications: [
            'Caps Embroidery',
            'Garments Embroidery',
            'Patches Production',
            'Bags Embroidery',
            'Custom Apparel',
            'Sportswear Decoration',
            'Logo Embroidery',
            'Promotional Items',
            'Fashion Design',
            'Corporate Branding',
            'Team Uniforms',
            'Personalized Gifts'
        ],
        advantages: [
            'Industrial max speed up to 1200 RPM',
            'Dual-head design for increased productivity',
            'Japanese hook for superior quality',
            'Advanced control system with touchscreen',
            'Multi-language support (8 languages)',
            'Large memory capacity (400M stitches)',
            'Efficient thread management system',
            'Large embroidery area 1430mm x 620mm',
            'AC110V / 220V voltage compatibility',
            'Ideal for medium to high-volume production',
            'Minimal maintenance requirements',
            'Cost-effective laminating solution'
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
        alert('Thank you for your inquiry! We will contact you soon.');
        closeInquiryModal();
    };

    return (
        <div>
            <Header />
            <main className="promaker-embroidery-1202-main">
                {/* Product Hero Section */}
                <section className="promaker-embroidery-1202-hero product-hero">
                    <div className="promaker-embroidery-1202-hero-layout">
                        <div className="promaker-embroidery-1202-hero-left">
                            <h1 className="promaker-embroidery-1202-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="promaker-embroidery-1202-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="promaker-embroidery-1202-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="promaker-embroidery-1202-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="promaker-embroidery-1202-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="promaker-embroidery-1202-hero-stats product-stats">
                                <div className="promaker-embroidery-1202-stat">
                                    <span className="promaker-embroidery-1202-stat-number">1200 RPM</span>
                                    <span className="promaker-embroidery-1202-stat-label">Max Speed</span>
                                </div>
                                <div className="promaker-embroidery-1202-stat">
                                    <span className="promaker-embroidery-1202-stat-number">2 Heads</span>
                                    <span className="promaker-embroidery-1202-stat-label">Dual System</span>
                                </div>
                                <div className="promaker-embroidery-1202-stat">
                                    <span className="promaker-embroidery-1202-stat-number">1430x620mm</span>
                                    <span className="promaker-embroidery-1202-stat-label">Embroidery Area</span>
                                </div>
                            </div>
                        </div>
                        <div className="promaker-embroidery-1202-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="promaker-embroidery-1202-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="promaker-embroidery-1202-overview-section">
                    <div className="promaker-embroidery-1202-overview-container">
                        <h2 className="promaker-embroidery-1202-section-title">Product Overview</h2>
                        <p className="promaker-embroidery-1202-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="promaker-embroidery-1202-features-section">
                    <div className="promaker-embroidery-1202-features-container">
                        <div className="promaker-embroidery-1202-features-header">
                            <h2 className="promaker-embroidery-1202-features-title">Key Features</h2>
                            <p className="promaker-embroidery-1202-features-subtitle">
                                Professional embroidery technology with advanced control and precision
                            </p>
                        </div>

                        <div className="promaker-embroidery-1202-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="promaker-embroidery-1202-feature-card">
                                    <div className="promaker-embroidery-1202-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="promaker-embroidery-1202-feature-title">{feature.title}</h3>
                                    <p className="promaker-embroidery-1202-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="promaker-embroidery-1202-specs-section">
                    <div className="promaker-embroidery-1202-specs-container">
                        <h2 className="promaker-embroidery-1202-section-title">Technical Specifications</h2>
                        <p className="promaker-embroidery-1202-section-subtitle">
                            Complete technical details for Cold Laminator
                        </p>
                        <div className="promaker-embroidery-1202-specs-grid">
                            <div className="promaker-embroidery-1202-spec-card">
                                <h3 className="promaker-embroidery-1202-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="promaker-embroidery-1202-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="promaker-embroidery-1202-spec-item">
                                            <div className="promaker-embroidery-1202-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="promaker-embroidery-1202-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="promaker-embroidery-1202-applications-section">
                    <div className="promaker-embroidery-1202-applications-container">
                        <h2 className="promaker-embroidery-1202-section-title">Applications</h2>
                        <p className="promaker-embroidery-1202-applications-subtitle">
                            Professional cold laminating solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="promaker-embroidery-1202-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="promaker-embroidery-1202-applications-image-grid">
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Photo Lamination" />
                                    <p>Photo Lamination</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Print Protection" />
                                    <p>Print Protection</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Poster Lamination" />
                                    <p>Poster Lamination</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Document Preservation" />
                                    <p>Document Preservation</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Signage Production" />
                                    <p>Signage Production</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Menu Boards" />
                                    <p>Menu Boards</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Educational Materials" />
                                    <p>Educational Materials</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Point of Sale Displays" />
                                    <p>Point of Sale Displays</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Heat-Sensitive Material Protection" />
                                    <p>Heat-Sensitive Material Protection</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Quick Turnaround Projects" />
                                    <p>Quick Turnaround Projects</p>
                                </div>
                                <div className="promaker-embroidery-1202-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Professional Presentation Materials" />
                                    <p>Professional Presentation Materials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="promaker-embroidery-1202-advantages-section">
                    <div className="promaker-embroidery-1202-advantages-container">
                        <h2 className="promaker-embroidery-1202-section-title">Why Choose Cold Laminator?</h2>
                        <div className="promaker-embroidery-1202-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="promaker-embroidery-1202-advantage-item">
                                    <div className="promaker-embroidery-1202-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="promaker-embroidery-1202-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="promaker-embroidery-1202-modal-overlay" onClick={closeInquiryModal}>
                    <div className="promaker-embroidery-1202-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="promaker-embroidery-1202-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="promaker-embroidery-1202-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="promaker-embroidery-1202-inquiry-form">
                            <div className="promaker-embroidery-1202-form-row">
                                <div className="promaker-embroidery-1202-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="promaker-embroidery-1202-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="promaker-embroidery-1202-form-row">
                                <div className="promaker-embroidery-1202-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="promaker-embroidery-1202-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="promaker-embroidery-1202-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="promaker-embroidery-1202-phone-input">
                                    <select className="promaker-embroidery-1202-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="promaker-embroidery-1202-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laminating needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="promaker-embroidery-1202-form-actions">
                                <button type="submit" className="promaker-embroidery-1202-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="promaker-embroidery-1202-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

