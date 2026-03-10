"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './smartex-knitting-gsce-1-52.css';

export default function SmartexKnittingGSCE152() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/embroidery_knitting/Smartex Knitting Machine GSCE-1-52.png');
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
        name: 'SMARTEX GS-CE152 KNITTING MACHINE',
        model: 'GS-CE152',
        images: [
            '/embroidery_knitting/Smartex Knitting Machine GSCE-1-52.png',
            '/embroidery_knitting/Smartex Knitting Machine GSCE-1-52.png',
        ],
        shortDescription: '128-SECTION PRECISION STITCH CONTROL - Achieve unmatched fabric consistency and shaping accuracy with fine-tuned density adjustments powered by advanced stepping motor technology. Maximum knitting speed 1.4 m/s for industrial-grade productivity.',
        detailedDescription: 'The SMARTEX GS-CE152 Knitting Machine represents the pinnacle of industrial knitting technology. Featuring 128-section precision stitch control powered by advanced stepping motor technology, this machine delivers unmatched fabric consistency and shaping accuracy. With a maximum knitting speed of 1.4 m/s, single system single carriage design, and user-friendly 10.4" LCD interface with USB support, the GS-CE152 is engineered for professional textile manufacturing with automatic error detection and dual-sided 6-feeder yarn carrier.',
        features: [
            {
                title: 'Single System, Single Carriage',
                description: 'This setup makes the machine simpler and more reliable. It\'s designed to knit collars efficiently using flat, tuck, transfer, and jacquard stitches.',
                icon: 'precision'
            },
            {
                title: 'User-Friendly 10.4" LCD Interface with USB Support',
                description: 'Large display with real-time monitoring, USB input, and 256MB memory for storing and sequencing pattern designs in support both English and Chinese languages.',
                icon: 'accuracy'
            },
            {
                title: 'Dual-Sided 6-Feeder Yarn Carrier',
                description: 'Equipped with 2 sets of 6 feeders on both sides of the 3-track rail, allowing flexible yarn feed configurations for multi-color or patterned designs.',
                icon: 'speed'
            },
            {
                title: 'Automatic Error Detection',
                description: 'Automatically detects yarn breaks, float yarn, rewind errors, needle breakage, and programming faults, minimizing waste and ensuring safe operation.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'GS-CE152' },
            { label: 'Gauge', value: '16G, 14G, 18G, 11KG' },
            { label: 'Knitting System', value: 'Single System, Single Carriage' },
            { label: 'Knitting Speed', value: 'Max 1.4 m/s' },
            { label: 'Knitting Width', value: '(52 inches)' },
            { label: 'Knitting Function', value: 'Flat, transfer, tuck, jacquard' },
            { label: 'Stitch Density', value: 'Stitch system controlled by stepping motor, 128 | 128 section stitch selectable, adjustable scope supported bysteelvision technology: 0~16O.' },
            { label: 'Take Up', value: 'Controlled by AC Servomotor, knitting within 2 inches and with fine adjusting function.' },
            { label: 'Drive System', value: 'Synchronous belt drive, AC servo system.' },
            { label: 'Needle Selection', value: 'Computer-controlled efficient needle selector.' },
            { label: 'Yarn Carrier', value: '2 sets of 6 feeders on both side of the 3 feeders rail.' },
            { label: 'Take Down Roller', value: '128 level stepper control (0~100).' }
        ],
        applications: [
            'Collar Knitting',
            'Sweater Production',
            'Textile Manufacturing',
            'Fashion Garments',
            'Sportswear Collars',
            'Custom Knitwear',
            'Industrial Textiles',
            'Jacquard Patterns',
            'Multi-color Designs',
            'Professional Knitting',
            'High-Volume Production',
            'Technical Textiles'
        ],
        advantages: [
            'Maximum knitting speed 1.4 m/s',
            '128-section precision stitch control',
            'Advanced stepping motor technology',
            'Single system, single carriage for reliability',
            'User-friendly 10.4" LCD interface',
            'USB support with 256MB memory',
            'Dual-sided 6-feeder yarn carrier',
            'Automatic error detection system',
            'Multi-gauge capability (16G, 14G, 18G, 11KG)',
            'Synchronous belt drive with AC servo',
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
            <main className="smartex-knitting-gsce-main">
                {/* Product Hero Section */}
                <section className="smartex-knitting-gsce-hero product-hero">
                    <div className="smartex-knitting-gsce-hero-layout">
                        <div className="smartex-knitting-gsce-hero-left">
                            <h1 className="smartex-knitting-gsce-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="smartex-knitting-gsce-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="smartex-knitting-gsce-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="smartex-knitting-gsce-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="smartex-knitting-gsce-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="smartex-knitting-gsce-hero-stats product-stats">
                                <div className="smartex-knitting-gsce-stat">
                                    <span className="smartex-knitting-gsce-stat-number">1.4 m/s</span>
                                    <span className="smartex-knitting-gsce-stat-label">Max Speed</span>
                                </div>
                                <div className="smartex-knitting-gsce-stat">
                                    <span className="smartex-knitting-gsce-stat-number">128-Section</span>
                                    <span className="smartex-knitting-gsce-stat-label">Stitch Control</span>
                                </div>
                                <div className="smartex-knitting-gsce-stat">
                                    <span className="smartex-knitting-gsce-stat-number">52 inches</span>
                                    <span className="smartex-knitting-gsce-stat-label">Knitting Width</span>
                                </div>
                            </div>
                        </div>
                        <div className="smartex-knitting-gsce-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="smartex-knitting-gsce-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="smartex-knitting-gsce-overview-section">
                    <div className="smartex-knitting-gsce-overview-container">
                        <h2 className="smartex-knitting-gsce-section-title">Product Overview</h2>
                        <p className="smartex-knitting-gsce-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="smartex-knitting-gsce-features-section">
                    <div className="smartex-knitting-gsce-features-container">
                        <div className="smartex-knitting-gsce-features-header">
                            <h2 className="smartex-knitting-gsce-features-title">Key Features</h2>
                            <p className="smartex-knitting-gsce-features-subtitle">
                                Professional knitting technology with precision stitch control
                            </p>
                        </div>

                        <div className="smartex-knitting-gsce-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="smartex-knitting-gsce-feature-card">
                                    <div className="smartex-knitting-gsce-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="smartex-knitting-gsce-feature-title">{feature.title}</h3>
                                    <p className="smartex-knitting-gsce-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="smartex-knitting-gsce-specs-section">
                    <div className="smartex-knitting-gsce-specs-container">
                        <h2 className="smartex-knitting-gsce-section-title">Technical Specifications</h2>
                        <p className="smartex-knitting-gsce-section-subtitle">
                            Complete technical details for Cold Laminator
                        </p>
                        <div className="smartex-knitting-gsce-specs-grid">
                            <div className="smartex-knitting-gsce-spec-card">
                                <h3 className="smartex-knitting-gsce-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="smartex-knitting-gsce-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="smartex-knitting-gsce-spec-item">
                                            <div className="smartex-knitting-gsce-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="smartex-knitting-gsce-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="smartex-knitting-gsce-applications-section">
                    <div className="smartex-knitting-gsce-applications-container">
                        <h2 className="smartex-knitting-gsce-section-title">Applications</h2>
                        <p className="smartex-knitting-gsce-applications-subtitle">
                            Professional cold laminating solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="smartex-knitting-gsce-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="smartex-knitting-gsce-applications-image-grid">
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Photo Lamination" />
                                    <p>Photo Lamination</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Print Protection" />
                                    <p>Print Protection</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Poster Lamination" />
                                    <p>Poster Lamination</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Document Preservation" />
                                    <p>Document Preservation</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Signage Production" />
                                    <p>Signage Production</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Menu Boards" />
                                    <p>Menu Boards</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Educational Materials" />
                                    <p>Educational Materials</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Point of Sale Displays" />
                                    <p>Point of Sale Displays</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Heat-Sensitive Material Protection" />
                                    <p>Heat-Sensitive Material Protection</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Quick Turnaround Projects" />
                                    <p>Quick Turnaround Projects</p>
                                </div>
                                <div className="smartex-knitting-gsce-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Professional Presentation Materials" />
                                    <p>Professional Presentation Materials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="smartex-knitting-gsce-advantages-section">
                    <div className="smartex-knitting-gsce-advantages-container">
                        <h2 className="smartex-knitting-gsce-section-title">Why Choose Cold Laminator?</h2>
                        <div className="smartex-knitting-gsce-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="smartex-knitting-gsce-advantage-item">
                                    <div className="smartex-knitting-gsce-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="smartex-knitting-gsce-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="smartex-knitting-gsce-modal-overlay" onClick={closeInquiryModal}>
                    <div className="smartex-knitting-gsce-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="smartex-knitting-gsce-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="smartex-knitting-gsce-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="smartex-knitting-gsce-inquiry-form">
                            <div className="smartex-knitting-gsce-form-row">
                                <div className="smartex-knitting-gsce-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="smartex-knitting-gsce-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="smartex-knitting-gsce-form-row">
                                <div className="smartex-knitting-gsce-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="smartex-knitting-gsce-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="smartex-knitting-gsce-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="smartex-knitting-gsce-phone-input">
                                    <select className="smartex-knitting-gsce-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="smartex-knitting-gsce-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laminating needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="smartex-knitting-gsce-form-actions">
                                <button type="submit" className="smartex-knitting-gsce-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="smartex-knitting-gsce-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

