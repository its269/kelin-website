"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './smart-uv-printer.css';

export default function SmartUVPrinter() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/uv-machines/SMART UV Printer.png');
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
        name: 'SMART UV PRINTER',
        model: 'RJ24U*2002-I3200 6FT',
        images: [
            '/uv-machines/SMART UV Printer.png',
            '/uv-machines/SMART UV Printer.png',
        ],
        shortDescription: 'DUAL EPSON 3200U1: SPEED. PRECISION. UNMATCHED QUALITY. - SMTJET 2002 UV Eco Solvent Printer, a robust printing powerhouse designed for professional demands. Featuring advanced dual Epson 3200U1 printheads and a precision-engineered motion system, it delivers exceptional output speed, vivid color accuracy, and razor-sharp detail, ensuring superior, consistent quality on a wide range of substrates for every application.',
        detailedDescription: 'The SMTJET 2002 UV Eco Solvent Printer (RJ24U*2002-I3200 6FT) represents the pinnacle of professional UV printing technology. Equipped with dual Epson 3200U1 printheads, this industrial-grade printer achieves up to 12m²/h printing speed while maintaining exceptional quality. The advanced LED curing lamp delivers high-precision UV curing, while the high-performance control system ensures stable operation. Built with an aluminum alloy carriage station for durability and featuring an external infrared heating fan for optimal ink adhesion, this printer excels in producing UV-printed display graphics, wall murals, backlit displays, and decor panels with unmatched consistency and quality.',
        features: [
            {
                title: 'LED Curing Lamp',
                description: 'The advanced LED curing lamp precisely delivers high-precision UV curing, eliminating the odor of common UV lamps and ensuring the adhesion of inks and optimal curing for high-quality prints.',
                icon: 'precision'
            },
            {
                title: 'High Performance Control System',
                description: 'Board with high-precision sensors and an industrial-grade control system ensures stability and efficiency.',
                icon: 'accuracy'
            },
            {
                title: 'Aluminium Alloy Carriage Station',
                description: 'Beam with high-strength aluminum alloy carriage and control for extended strength and durability capabilities.',
                icon: 'speed'
            },
            {
                title: 'External Infrared Heating Fan',
                description: 'Efficient heating preheated and is-placed infrared heater provides effective drying, prevents ink blurring, extending smoothness and ink adhesion onto various substrates.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'RJ-2002UV' },
            { label: 'Head Model', value: 'EPSON 3200U1' },
            { label: 'Drying Mode', value: 'Fan Drying' },
            { label: 'Media Width', value: '1.85m' },
            { label: 'Machine Size', value: '3700mm*750mm*850mm' },
            { label: 'Printing Speed', value: '4 PASS: 12m/h, 6 PASS: 8m²/h' },
            { label: 'Operation system', value: 'Win10 and above system' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Weight', value: 'G.W: 460KG/N.W:396KG' }
        ],
        applications: [
            'UV-printed display graphics',
            'UV-printed wall murals',
            'UV-printed backlit displays',
            'UV-printed decor panels',
            'Signage Production',
            'Indoor and Outdoor Graphics',
            'Promotional Displays',
            'Exhibition Graphics',
            'Point of Sale Displays',
            'Retail Graphics',
            'Commercial Advertising',
            'Custom Decor Applications'
        ],
        advantages: [
            'Industrial-grade speed up to 12m²/h',
            'Dual Epson 3200U1 printheads for precision',
            'Advanced LED curing technology',
            'High-performance control system',
            'Aluminum alloy carriage for durability',
            'External infrared heating fan',
            'Odorless UV curing process',
            'Wide media width (1.85m)',
            'Vivid color accuracy and razor-sharp detail',
            'Versatile substrate compatibility',
            'Professional-grade output quality',
            'Reliable consistent performance'
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
            <main className="smart-uv-printer-main">
                {/* Product Hero Section */}
                <section className="smart-uv-printer-hero product-hero">
                    <div className="smart-uv-printer-hero-layout">
                        <div className="smart-uv-printer-hero-left">
                            <h1 className="smart-uv-printer-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="smart-uv-printer-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="smart-uv-printer-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="smart-uv-printer-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="smart-uv-printer-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="smart-uv-printer-hero-stats product-stats">
                                <div className="smart-uv-printer-stat">
                                    <span className="smart-uv-printer-stat-number">12m²/h</span>
                                    <span className="smart-uv-printer-stat-label">Speed</span>
                                </div>
                                <div className="smart-uv-printer-stat">
                                    <span className="smart-uv-printer-stat-number">1.85m</span>
                                    <span className="smart-uv-printer-stat-label">Media Width</span>
                                </div>
                                <div className="smart-uv-printer-stat">
                                    <span className="smart-uv-printer-stat-number">EPSON 3200U1</span>
                                    <span className="smart-uv-printer-stat-label">Dual Printhead</span>
                                </div>
                            </div>
                        </div>
                        <div className="smart-uv-printer-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="smart-uv-printer-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="smart-uv-printer-overview-section">
                    <div className="smart-uv-printer-overview-container">
                        <h2 className="smart-uv-printer-section-title">Product Overview</h2>
                        <p className="smart-uv-printer-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="smart-uv-printer-features-section">
                    <div className="smart-uv-printer-features-container">
                        <div className="smart-uv-printer-features-header">
                            <h2 className="smart-uv-printer-features-title">Key Features</h2>
                            <p className="smart-uv-printer-features-subtitle">
                                Professional UV eco solvent printing technology with dual Epson 3200U1 printheads
                            </p>
                        </div>

                        <div className="smart-uv-printer-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="smart-uv-printer-feature-card">
                                    <div className="smart-uv-printer-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="smart-uv-printer-feature-title">{feature.title}</h3>
                                    <p className="smart-uv-printer-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="smart-uv-printer-specs-section">
                    <div className="smart-uv-printer-specs-container">
                        <h2 className="smart-uv-printer-section-title">Technical Specifications</h2>
                        <p className="smart-uv-printer-section-subtitle">
                            Complete technical details for Smart UV Printer RJ24U*2002-I3200 6FT
                        </p>
                        <div className="smart-uv-printer-specs-grid">
                            <div className="smart-uv-printer-spec-card">
                                <h3 className="smart-uv-printer-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="smart-uv-printer-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="smart-uv-printer-spec-item">
                                            <div className="smart-uv-printer-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="smart-uv-printer-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="smart-uv-printer-applications-section">
                    <div className="smart-uv-printer-applications-container">
                        <h2 className="smart-uv-printer-section-title">Applications</h2>
                        <p className="smart-uv-printer-applications-subtitle">
                            Professional UV eco solvent printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="smart-uv-printer-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="smart-uv-printer-applications-image-grid">
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="UV-printed display graphics" />
                                    <p>UV-printed display graphics</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="UV-printed wall murals" />
                                    <p>UV-printed wall murals</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="UV-printed backlit displays" />
                                    <p>UV-printed backlit displays</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="UV-printed decor panels" />
                                    <p>UV-printed decor panels</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Signage Production" />
                                    <p>Signage Production</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Promotional Displays" />
                                    <p>Promotional Displays</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Point of Sale Displays" />
                                    <p>Point of Sale Displays</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Retail Graphics" />
                                    <p>Retail Graphics</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Commercial Advertising" />
                                    <p>Commercial Advertising</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Indoor Graphics" />
                                    <p>Indoor Graphics</p>
                                </div>
                                <div className="smart-uv-printer-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Custom Decor Applications" />
                                    <p>Custom Decor Applications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="smart-uv-printer-advantages-section">
                    <div className="smart-uv-printer-advantages-container">
                        <h2 className="smart-uv-printer-section-title">Why Choose Smart UV Printer?</h2>
                        <div className="smart-uv-printer-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="smart-uv-printer-advantage-item">
                                    <svg className="smart-uv-printer-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="smart-uv-printer-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="smart-uv-printer-modal-overlay" onClick={closeInquiryModal}>
                    <div className="smart-uv-printer-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="smart-uv-printer-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="smart-uv-printer-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="smart-uv-printer-inquiry-form">
                            <div className="smart-uv-printer-form-row">
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="smart-uv-printer-form-row">
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="smart-uv-printer-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="smart-uv-printer-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="smart-uv-printer-phone-input">
                                    <select className="smart-uv-printer-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="smart-uv-printer-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="smart-uv-printer-form-actions">
                                <button type="submit" className="smart-uv-printer-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="smart-uv-printer-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
