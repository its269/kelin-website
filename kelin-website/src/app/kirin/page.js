"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './kirin.css';

export default function KirinDA182TPlus() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).png');

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
        name: 'KIRIN DA182T PLUS',
        model: 'High-speed Roll to Roll Dye Sublimation Digital Textile Printer',
        images: [
            '/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).png',
            '/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).png', // Add more images if available
        ],
        shortDescription: 'HIGH-SPEED PERFORMANCE FOR LARGE-SCALE DEMANDS - The DA182T Plus, equipped with 8 Kyocera industrial print heads, achieves speeds up to 650m²/hr (400x600dpi, 1 pass), making it perfect for high-volume textile printing where speed and quality matter.',
        detailedDescription: 'The Kirin DA182T Plus is designed for high daily output, using industrial Kyocera print heads and a specialized control system to maximize productivity. It significantly boosts overall printing efficiency with automatic cleaning and monitoring, reducing print head blockages, improving output stability, and enabling operation by just one person.',
        features: [
            {
                title: 'Superior print head for higher productivity',
                description: 'Designed for high daily output, the DA182T Series uses industrial Kyocera print heads and a specialized control system to maximize productivity and significantly boost overall printing efficiency.',
                icon: 'precision'
            },
            {
                title: 'High-Speed, High-Definition Output',
                description: 'The DA182T Series uses a unique drive and ink supply system to ensure precise control, delivering image-level print quality with various resolutions.',
                icon: 'accuracy'
            },
            {
                title: 'Shown with automatic cleaning, easy to operate',
                description: 'This automatic cleaning and monitoring reduces print head blockages, improving output stability and cutting down on maintenance, with operation by just one person.',
                icon: 'speed'
            },
            {
                title: 'Reduce printing cost, impeccable',
                description: 'The large capacity floor mounted ink supply reduces ink replacement frequency and supports printing on thin paper (minimum 40gsm), cutting material costs from proofing to mass production.',
                icon: 'durability'
            }
        ],
        specifications: [
            { label: 'Model', value: 'DA182T Plus' },
            { label: 'Max Print Width (mm)', value: '1850' },
            { label: 'Print Speed @400x600dpi (1 pass)', value: 'High speed mode: 650m²/hr | General mode: 450m²/hr | Quality mode: 400m²/hr' },
            { label: 'Ink Color', value: 'C, M, Y, K, O, R, B, G (8 colors)' },
            { label: 'Drying Method', value: 'Infrared light, heating type, drying system' },
            { label: 'Print Heads', value: 'Kyocera Print Heads, 8ct' },
            { label: 'Max Paper Width (mm)', value: '1900' },
            { label: 'Print medium', value: 'Sublimation transfer paper/sublimation paper/paper' },
            { label: 'Supported Image types', value: 'JPG/TIFF/BMP/others' },
            { label: 'Operating Temperature', value: '20-30°C' },
            { label: 'Weight (kg)', value: '2500 (Without packing box)' },
            { label: 'Resolution (dpi)', value: 'High speed mode 1: 1800x3600dpi/1-pass | General mode: 1: 1800x3600dpi/2-pass | Quality mode 1: 1800x3600dpi/3-pass' },
            { label: 'Printing Speed (m²/hr)', value: 'High speed mode 1: 850x3600dpi/1-pass 650 | General mode 1: 1800x3600dpi/2-pass 450 | Quality mode 1: 1800x3600dpi/3-pass 400' }
        ],
        applications: [
            'High-Volume Textile Printing',
            'Fashion & Apparel Production',
            'Home Textiles & Furnishing',
            'Sportswear & Athletic Wear',
            'Large-Scale Soft Signage',
            'Industrial Textile Manufacturing',
            'Custom Fabric Printing',
            'Roll-to-Roll Production',
            'Mass Production Printing',
            'Commercial Sublimation Printing'
        ],
        advantages: [
            'Ultra-high speed printing up to 650m²/hr',
            '8 Kyocera industrial print heads for maximum productivity',
            'Automatic cleaning and monitoring system',
            'Single operator operation capability',
            'Large capacity floor mounted ink supply',
            'Supports thin paper printing (minimum 40gsm)',
            'Specialized control system for efficiency',
            'Reduced maintenance with automatic features',
            'Cost-effective for mass production',
            'High-definition output with multiple resolution modes'
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
            <main className="kirin-da182t-main">
                {/* Product Hero Section */}
                <section className="kirin-da182t-hero product-hero">
                    <div className="kirin-da182t-hero-layout">
                        <div className="kirin-da182t-hero-left">
                            <h1 className="kirin-da182t-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="kirin-da182t-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="kirin-da182t-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="kirin-da182t-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="kirin-da182t-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="kirin-da182t-hero-stats product-stats">
                                <div className="kirin-da182t-stat">
                                    <span className="kirin-da182t-stat-number">650m²/hr</span>
                                    <span className="kirin-da182t-stat-label">Max Speed</span>
                                </div>
                                <div className="kirin-da182t-stat">
                                    <span className="kirin-da182t-stat-number">8 Heads</span>
                                    <span className="kirin-da182t-stat-label">Kyocera</span>
                                </div>
                                <div className="kirin-da182t-stat">
                                    <span className="kirin-da182t-stat-number">1850mm</span>
                                    <span className="kirin-da182t-stat-label">Print Width</span>
                                </div>
                            </div>
                        </div>
                        <div className="kirin-da182t-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="kirin-da182t-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="kirin-da182t-overview-section">
                    <div className="kirin-da182t-overview-container">
                        <h2 className="kirin-da182t-section-title">Product Overview</h2>
                        <p className="kirin-da182t-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="kirin-da182t-features-section">
                    <div className="kirin-da182t-features-container">
                        <div className="kirin-da182t-features-header">
                            <h2 className="kirin-da182t-features-title">Key Features</h2>
                            <p className="kirin-da182t-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="kirin-da182t-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="kirin-da182t-feature-card">
                                    <div className="kirin-da182t-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="kirin-da182t-feature-title">{feature.title}</h3>
                                    <p className="kirin-da182t-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="kirin-da182t-specs-section">
                    <div className="kirin-da182t-specs-container">
                        <h2 className="kirin-da182t-section-title">Technical Specifications</h2>
                        <p className="kirin-da182t-section-subtitle">
                            Complete technical details for KIRIN DA182T cutting plotter
                        </p>
                        <div className="kirin-da182t-specs-table-wrapper">
                            <div className="kirin-da182t-spec-table">
                                <div className="kirin-da182t-spec-table-header">
                                    <h3 className="kirin-da182t-spec-table-title">
                                        <span className="kirin-da182t-spec-icon">⚙️</span>
                                        Machine Specifications
                                    </h3>
                                </div>
                                <div className="kirin-da182t-spec-table-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="kirin-da182t-spec-row">
                                            <div className="kirin-da182t-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="kirin-da182t-spec-divider"></div>
                                            <div className="kirin-da182t-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="kirin-da182t-applications-section">
                    <div className="kirin-da182t-applications-container">
                        <h2 className="kirin-da182t-section-title">Applications</h2>
                        <p className="kirin-da182t-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="kirin-da182t-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="kirin-da182t-applications-image-grid">
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="T-Shirt Printing" />
                                    <p>T-Shirt Printing</p>
                                </div>
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Mug Printing" />
                                    <p>Mug Printing</p>
                                </div>
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Signage & Banners" />
                                    <p>Signage & Banners</p>
                                </div>
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Custom Apparel" />
                                    <p>Custom Apparel</p>
                                </div>
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Phone Cases" />
                                    <p>Phone Cases</p>
                                </div>
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sportswear" />
                                    <p>Sportswear</p>
                                </div>
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Home Decor" />
                                    <p>Home Decor</p>
                                </div>
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging" />
                                    <p>Packaging</p>
                                </div>
                                <div className="kirin-da182t-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Labels & Stickers" />
                                    <p>Labels & Stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="kirin-da182t-advantages-section">
                    <div className="kirin-da182t-advantages-container">
                        <h2 className="kirin-da182t-section-title">Why Choose Kirin DA182T Plus?</h2>
                        <div className="kirin-da182t-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="kirin-da182t-advantage-item">
                                    <svg className="kirin-da182t-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="kirin-da182t-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="kirin-da182t-modal-overlay" onClick={closeInquiryModal}>
                    <div className="kirin-da182t-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="kirin-da182t-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="kirin-da182t-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="kirin-da182t-inquiry-form">
                            <div className="kirin-da182t-form-row">
                                <div className="kirin-da182t-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="kirin-da182t-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="kirin-da182t-form-row">
                                <div className="kirin-da182t-form-group">
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
                                <div className="kirin-da182t-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="kirin-da182t-phone-input">
                                        <select name="countryCode" className="kirin-da182t-country-select" defaultValue="+63">
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

                            <div className="kirin-da182t-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="kirin-da182t-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="kirin-da182t-form-actions">
                                <button type="submit" className="kirin-da182t-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="kirin-da182t-btn-secondary">
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
