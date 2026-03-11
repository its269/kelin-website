"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './iecho-pk4.css';

export default function IEchoPK4() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/cutting-machines/PK4 (2).webp');
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
        name: 'iecho pk4',
        model: 'PK4 Automatic Intelligent Cutting System',
        images: [
            '/cutting-machines/PK4 (2).webp',
            '/cutting-machines/PK4 (2).webp', // Add more images if available
        ],
        shortDescription: 'SMART CUTTING SYSTEM WITH AUTO FEEDING - Industrial grade speed up to 1000mm/s. Performs automatic sheet feeding, precision cutting, and collection. Ideal for short-run, on-demand production with minimal labor cost and maximum efficiency.',
        detailedDescription: 'The iecho pk4 Automatic Intelligent Cutting System features advanced automation with industrial grade cutting speed of 1000mm/s. Equipped with smart cutting system, auto feeding capabilities, and precision cutting technology, it offers maximum efficiency for professional applications. The system includes high frequency electronic oscillating knife, precision automatic positioning system, barcode management system, and automatic feeding system for streamlined production workflow.',
        features: [
            {
                title: 'High Frequency Electronic Oscillating Knife',
                description: 'Notching main be more various and thicker, to meet different cutting requirements with superior precision and efficiency.',
                icon: 'precision'
            },
            {
                title: 'Precision Automatic Positioning System',
                description: 'Equipped with a high-definition CCD camera, it enables automatic, precise positioning and contour cutting—avoiding material alignment and print distortion for accurate, hassle-free cutting.',
                icon: 'accuracy'
            },
            {
                title: 'Barcode Management System',
                description: 'Scanning barcodes allows quick reading of cutting tasks, enabling streamlined workflow and efficient production management.',
                icon: 'speed'
            },
            {
                title: 'Automatic Feeding System',
                description: 'The fully automatic feeding system streamlines the entire production process by continuously and accurately feeding materials into the machine.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Cutting Head Type', value: 'PK, PK Plus' },
            { label: 'Machine Type', value: 'PK0604, PK0705, PK0604 Plus, PK0705 Plus' },
            { label: 'Cutting Area (W×H)', value: '600mm×400mm, 750mm×530mm, 600mm×400mm, 750mm×530mm' },
            { label: 'Flooring Area (W×H)', value: '2350mm×900mm×1350mm, 2600mm×1000mm×1350mm, 2350mm×900mm×1150mm, 2600mm×1000mm×1350mm' },
            { label: 'Cutting Tool', value: 'Universal Cutting Tool, Creasing Wheel, Kiss Cut Tool' },
            { label: 'Cutting Material (PK)', value: 'Car sticker, Sticker, Card Paper, PP Paper, reflective material' },
            { label: 'Cutting Material (PK Plus)', value: 'KT Board, PP Paper, Foam Board, Sticker, Reflective Material, Card Board, Plastic Sheet, Corrugated Board, Grey Board, Corrugated Plastic, ABS Board, Magnetic Sticker' },
            { label: 'Cutting Tool (Plus)', value: '<6mm' },
            { label: 'Media', value: 'Vacuum System' },
            { label: 'Max Cutting Speed', value: '1000mm/s' },
            { label: 'Data Format', value: 'PLT, DXF, HPGL, PDF, EPS' },
            { label: 'Cutting Accuracy', value: '±0.1mm' },
            { label: 'Voltage', value: '220V±10% 50Hz' },
            { label: 'Power', value: '4Kw' }
        ],
        applications: [
            'KT Board Processing',
            'PP Paper Cutting',
            'Sticker & Vinyl Applications',
            'Foam Board Manufacturing',
            'Plastic Sheet Processing',
            'Magnetic Sticker Production',
            'Corrugated Board Cutting',
            'Card Board Processing',
            'Reflective Material Cutting',
            'Industrial Grade Production',
            'Short-Run On-Demand Manufacturing',
            'Automated Sheet Feeding Applications'
        ],
        advantages: [
            'Industrial grade speed up to 1000mm/s for maximum efficiency',
            'Smart cutting system with auto feeding capabilities',
            'High frequency electronic oscillating knife technology',
            'Precision automatic positioning system with CCD camera',
            'Barcode management system for streamlined workflow',
            'Automatic feeding system for continuous operation',
            'Multiple model options (PK0604, PK0705, Plus variants)',
            'Vacuum system for secure material handling',
            'Wide range of compatible materials and applications',
            'Professional grade accuracy of ±0.1mm',
            'Supports multiple data formats (PLT, DXF, HPGL, PDF, EPS)',
            'Ideal for short-run, on-demand production with minimal labor cost'
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
            <main className="iecho-pk4-main">
                {/* Product Hero Section */}
                <section className="iecho-pk4-hero product-hero">
                    <div className="iecho-pk4-hero-layout">
                        <div className="iecho-pk4-hero-left">
                            <h1 className="iecho-pk4-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="iecho-pk4-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="iecho-pk4-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="iecho-pk4-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="iecho-pk4-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="iecho-pk4-hero-stats product-stats">
                                <div className="iecho-pk4-stat">
                                    <span className="iecho-pk4-stat-number">1000mm/s</span>
                                    <span className="iecho-pk4-stat-label">Industrial Speed</span>
                                </div>
                                <div className="iecho-pk4-stat">
                                    <span className="iecho-pk4-stat-number">750mm</span>
                                    <span className="iecho-pk4-stat-label">Max Cutting Area</span>
                                </div>
                                <div className="iecho-pk4-stat">
                                    <span className="iecho-pk4-stat-number">±0.1mm</span>
                                    <span className="iecho-pk4-stat-label">Precision</span>
                                </div>
                            </div>
                        </div>
                        <div className="iecho-pk4-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="iecho-pk4-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="iecho-pk4-overview-section">
                    <div className="iecho-pk4-overview-container">
                        <h2 className="iecho-pk4-section-title">Product Overview</h2>
                        <p className="iecho-pk4-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="iecho-pk4-features-section">
                    <div className="iecho-pk4-features-container">
                        <div className="iecho-pk4-features-header">
                            <h2 className="iecho-pk4-features-title">Key Features</h2>
                            <p className="iecho-pk4-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="iecho-pk4-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="iecho-pk4-feature-card">
                                    <div className="iecho-pk4-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="iecho-pk4-feature-title">{feature.title}</h3>
                                    <p className="iecho-pk4-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="iecho-pk4-specs-section">
                    <div className="iecho-pk4-specs-container">
                        <h2 className="iecho-pk4-section-title">Technical Specifications</h2>
                        <div className="iecho-pk4-specs-grid">
                            <div className="iecho-pk4-spec-card">
                                <h3 className="iecho-pk4-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="iecho-pk4-spec-item">
                                        <span className="iecho-pk4-spec-label">{spec.label}:</span>
                                        <span className="iecho-pk4-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="iecho-pk4-spec-card">
                                <h3 className="iecho-pk4-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="iecho-pk4-spec-item">
                                        <span className="iecho-pk4-spec-label">{spec.label}:</span>
                                        <span className="iecho-pk4-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="iecho-pk4-applications-section">
                    <div className="iecho-pk4-applications-container">
                        <h2 className="iecho-pk4-section-title">Applications</h2>
                        <p className="iecho-pk4-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="iecho-pk4-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="iecho-pk4-applications-image-grid">
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="KT Board Processing" />
                                    <p>KT Board Processing</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="PP Paper Cutting" />
                                    <p>PP Paper Cutting</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Sticker & Vinyl Applications" />
                                    <p>Sticker & Vinyl Applications</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Foam Board Manufacturing" />
                                    <p>Foam Board Manufacturing</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Plastic Sheet Processing" />
                                    <p>Plastic Sheet Processing</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Magnetic Sticker Production" />
                                    <p>Magnetic Sticker Production</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Corrugated Board Cutting" />
                                    <p>Corrugated Board Cutting</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Card Board Processing" />
                                    <p>Card Board Processing</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Reflective Material Cutting" />
                                    <p>Reflective Material Cutting</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Industrial Production" />
                                    <p>Industrial Production</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Short-Run Manufacturing" />
                                    <p>Short-Run Manufacturing</p>
                                </div>
                                <div className="iecho-pk4-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Auto Feeding Applications" />
                                    <p>Auto Feeding Applications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="iecho-pk4-advantages-section">
                    <div className="iecho-pk4-advantages-container">
                        <h2 className="iecho-pk4-section-title">Why Choose iecho pk4?</h2>
                        <div className="iecho-pk4-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="iecho-pk4-advantage-item">
                                    <svg className="iecho-pk4-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="iecho-pk4-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="iecho-pk4-modal-overlay" onClick={closeInquiryModal}>
                    <div className="iecho-pk4-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="iecho-pk4-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="iecho-pk4-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="iecho-pk4-inquiry-form">
                            <div className="iecho-pk4-form-row">
                                <div className="iecho-pk4-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="iecho-pk4-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="iecho-pk4-form-row">
                                <div className="iecho-pk4-form-group">`
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
                                <div className="iecho-pk4-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="iecho-pk4-phone-input">
                                        <select name="countryCode" className="iecho-pk4-country-select" defaultValue="+63">
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

                            <div className="iecho-pk4-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="iecho-pk4-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="iecho-pk4-form-actions">
                                <button type="submit" className="iecho-pk4-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="iecho-pk4-btn-secondary">
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