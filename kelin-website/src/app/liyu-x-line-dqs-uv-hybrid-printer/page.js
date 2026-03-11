"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './liyu-x-line-dqs-uv-hybrid-printer.css';

export default function LiyuXLineDQS() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/uv-machines/Photo (3).webp');
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
        name: 'LIYU X-LINE DQS',
        model: 'UV HYBRID PRINTER',
        images: [
            '/uv-machines/Photo (3).webp',
            '/uv-machines/Photo (3).webp',
        ],
        shortDescription: 'HIGH-SPEED OUTPUT WITHOUT COMPROMISING QUALITY - The Liyu Xline DQS UV Hybrid Printer delivers precise, versatile printing for small-format materials. Powered by Epson and Ricoh printheads, it supports CWC and WCV applications, with upgraded hardware ensuring stable, high-speed output and optional platforms for continuous light-plate printing.',
        detailedDescription: 'The Liyu Xline DQS UV Hybrid Printer is an industrial-grade, high-speed printing solution designed for versatility and precision. Equipped with Epson and Ricoh printheads, it supports both CWC (Corrugated, White, and CMYK) and WCV (White, CMYK, and Varnish) applications. With upgraded hardware, this printer ensures stable operation and delivers up to 90m²/h industrial-grade speed. Optional platforms enable continuous light-plate printing, making it ideal for small-format materials, signage, and promotional applications.',
        features: [
            {
                title: 'Stylish and Agile Design',
                description: 'The Xline DQS series UV hybrid printer has an ergonomic and Xiaoqiao design, which is ideal for all working environments.',
                icon: 'precision'
            },
            {
                title: 'High-Precision Grayscale Print',
                description: 'Equipped with high-precision Epson and Ricoh printheads, it features six WC CMYK applications, supporting both CWC and WCV applications.',
                icon: 'accuracy'
            },
            {
                title: 'Hardware Upgrade',
                description: 'The inner structure is upgraded, hardware is stable, chains, and guide rails with stable load balance and ensure a steady printing quality of your choice.',
                icon: 'speed'
            },
            {
                title: 'High-Precision Grayscale Print',
                description: 'High-precision Ricoh XP410/XliBanco greyscale printheads provide wide-gamut, accurate CWC, WCC/Kof applications.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'DQS2000' },
            { label: 'Print Width', value: '2.3m' },
            { label: 'Head Model', value: 'RICOH G6' },
            { label: 'Print Resolution', value: '635x2400/635*1800/635x400' },
            { label: 'Ink', value: 'Environment-friendly UV ink' },
            { label: 'Type/Pressure bearing', value: '50kg/m' },
            { label: 'Printing Speed', value: '90m/h' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Machine Size', value: '4350mm*1940mm*1650mm' },
            { label: 'Weight', value: 'G.W:1400KG' }
        ],
        applications: [
            'Back Lit Posters',
            'Billboards',
            'Bus Station Ads',
            'Entertainment Hall Display',
            'Signage Production',
            'Small-Format Materials',
            'Promotional Displays',
            'Exhibition Graphics',
            'Point of Sale Displays',
            'Corrugated Materials',
            'Light-Plate Printing',
            'Commercial Advertising'
        ],
        advantages: [
            'Industrial-grade speed up to 90m²/h',
            'High-precision Epson and Ricoh printheads',
            'Supports CWC and WCV applications',
            'Upgraded hardware for stable operation',
            'Ergonomic and space-saving design',
            'Environment-friendly UV ink',
            'Continuous light-plate printing capability',
            'Wide-gamut color accuracy',
            'Heavy-duty load bearing (50kg/m)',
            'Versatile small-format printing',
            'Professional signage quality',
            'Reliable high-volume production'
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
            <main className="liyu-xline-dqs-main">
                {/* Product Hero Section */}
                <section className="liyu-xline-dqs-hero product-hero">
                    <div className="liyu-xline-dqs-hero-layout">
                        <div className="liyu-xline-dqs-hero-left">
                            <h1 className="liyu-xline-dqs-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="liyu-xline-dqs-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="liyu-xline-dqs-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="liyu-xline-dqs-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="liyu-xline-dqs-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="liyu-xline-dqs-hero-stats product-stats">
                                <div className="liyu-xline-dqs-stat">
                                    <span className="liyu-xline-dqs-stat-number">90m²/h</span>
                                    <span className="liyu-xline-dqs-stat-label">Speed</span>
                                </div>
                                <div className="liyu-xline-dqs-stat">
                                    <span className="liyu-xline-dqs-stat-number">2.3m</span>
                                    <span className="liyu-xline-dqs-stat-label">Print Width</span>
                                </div>
                                <div className="liyu-xline-dqs-stat">
                                    <span className="liyu-xline-dqs-stat-number">RICOH G6</span>
                                    <span className="liyu-xline-dqs-stat-label">Printhead</span>
                                </div>
                            </div>
                        </div>
                        <div className="liyu-xline-dqs-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="liyu-xline-dqs-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="liyu-xline-dqs-overview-section">
                    <div className="liyu-xline-dqs-overview-container">
                        <h2 className="liyu-xline-dqs-section-title">Product Overview</h2>
                        <p className="liyu-xline-dqs-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="liyu-xline-dqs-features-section">
                    <div className="liyu-xline-dqs-features-container">
                        <div className="liyu-xline-dqs-features-header">
                            <h2 className="liyu-xline-dqs-features-title">Key Features</h2>
                            <p className="liyu-xline-dqs-features-subtitle">
                                Industrial-grade UV hybrid printing technology for professional results
                            </p>
                        </div>

                        <div className="liyu-xline-dqs-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="liyu-xline-dqs-feature-card">
                                    <div className="liyu-xline-dqs-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="liyu-xline-dqs-feature-title">{feature.title}</h3>
                                    <p className="liyu-xline-dqs-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="liyu-xline-dqs-specs-section">
                    <div className="liyu-xline-dqs-specs-container">
                        <h2 className="liyu-xline-dqs-section-title">Technical Specifications</h2>
                        <p className="liyu-xline-dqs-section-subtitle">
                            Complete technical details for Liyu X-Line DQS UV Hybrid Printer
                        </p>
                        <div className="liyu-xline-dqs-specs-grid">
                            <div className="liyu-xline-dqs-spec-card">
                                <h3 className="liyu-xline-dqs-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="liyu-xline-dqs-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="liyu-xline-dqs-spec-item">
                                            <div className="liyu-xline-dqs-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="liyu-xline-dqs-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="liyu-xline-dqs-applications-section">
                    <div className="liyu-xline-dqs-applications-container">
                        <h2 className="liyu-xline-dqs-section-title">Applications</h2>
                        <p className="liyu-xline-dqs-applications-subtitle">
                            Professional UV hybrid printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="liyu-xline-dqs-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="liyu-xline-dqs-applications-image-grid">
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Back Lit Posters" />
                                    <p>Back Lit Posters</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Billboards" />
                                    <p>Billboards</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Bus Station Ads" />
                                    <p>Bus Station Ads</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Entertainment Hall Display" />
                                    <p>Entertainment Hall Display</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Signage Production" />
                                    <p>Signage Production</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Promotional Displays" />
                                    <p>Promotional Displays</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Point of Sale Displays" />
                                    <p>Point of Sale Displays</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Corrugated Materials" />
                                    <p>Corrugated Materials</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Light-Plate Printing" />
                                    <p>Light-Plate Printing</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Small-Format Materials" />
                                    <p>Small-Format Materials</p>
                                </div>
                                <div className="liyu-xline-dqs-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Commercial Advertising" />
                                    <p>Commercial Advertising</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="liyu-xline-dqs-advantages-section">
                    <div className="liyu-xline-dqs-advantages-container">
                        <h2 className="liyu-xline-dqs-section-title">Why Choose Liyu X-Line DQS?</h2>
                        <div className="liyu-xline-dqs-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="liyu-xline-dqs-advantage-item">
                                    <svg className="liyu-xline-dqs-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="liyu-xline-dqs-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="liyu-xline-dqs-modal-overlay" onClick={closeInquiryModal}>
                    <div className="liyu-xline-dqs-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="liyu-xline-dqs-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="liyu-xline-dqs-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="liyu-xline-dqs-inquiry-form">
                            <div className="liyu-xline-dqs-form-row">
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="liyu-xline-dqs-form-row">
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="liyu-xline-dqs-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="liyu-xline-dqs-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="liyu-xline-dqs-phone-input">
                                    <select className="liyu-xline-dqs-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="liyu-xline-dqs-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="liyu-xline-dqs-form-actions">
                                <button type="submit" className="liyu-xline-dqs-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="liyu-xline-dqs-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
