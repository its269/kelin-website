"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './k-sign-letter-shell-3d-printer.css';

export default function KSignLetterShell3DPrinter() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/3D Printer (1).webp');
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
        name: 'K-SIGN LETTER SHELL 3D PRINTER',
        model: 'LETTER SHELL 3D PRINTER',
        images: [
            '/3D Printer (1).webp',
            '/3D Printer (1).webp',
        ],
        shortDescription: 'SMART AUTO-LEVELING WITH DATABASE - Automatically stores platform configurations, eliminating the need for re-leveling, streamlining workflow, reducing manual effort, and ensuring consistent, high-volume output. Significantly improves the printing efficiency with building speed 700 mm/s.',
        detailedDescription: 'The K-SIGN Letter Shell 3D Printer represents the cutting edge of professional 3D printing technology for signage and letter shell production. Featuring smart auto-leveling with database storage that automatically saves platform configurations, this system eliminates the need for re-leveling, streamlining workflow and reducing manual effort. With an impressive building speed of 700 mm/s, integrated Z-axis for precision, filament sensor for material monitoring, ultra-flat printing platform, and fast, stable 2-in-1-out system for easy two-color printing, this printer delivers consistent, high-volume output for professional applications.',
        features: [
            {
                title: 'Integrated Z-Axis',
                description: 'High precision and stability with smooth, low-failure material feeding for consistent print quality.',
                icon: 'precision'
            },
            {
                title: 'Filament Sensor',
                description: 'Infrared sensor auto-pauses on material break or outage, preventing waste and ensuring continuous operation.',
                icon: 'accuracy'
            },
            {
                title: 'Ultra-flat Printing Platform',
                description: 'Provides perfectly level surface, ensures consistent layer adhesion for professional results.',
                icon: 'speed'
            },
            {
                title: 'Auto Color Change',
                description: 'Fast, stable 2-in-1-out system for easy two-color printing without manual intervention.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Printer/Head', value: '1 pc' },
            { label: 'Nozzle Size', value: '0.8mm' },
            { label: 'Layer Thickness', value: '10Î¼m' },
            { label: 'Filament', value: 'PLMA' },
            { label: 'Screen LCD', value: '7.0 inch/360mm' },
            { label: 'Software', value: 'Lemur-boxSITE RX 3.2' },
            { label: 'Voltage', value: '110V/220V / 50-60Hz' },
            { label: 'Power', value: '2.2~6.2A / 355~440W' },
            { label: 'Speed', value: 'Print 80mm/s (normal) / Build 700mm/s' },
            { label: 'Accuracy', value: 'C+a(klo -0.01/100mm) | Screat frame-: 0-25/300mm' },
            { label: 'Material', value: '1.75mm diameter' },
            { label: 'System', value: 'Windows 10' }
        ],
        applications: [
            'Letter Shell Production',
            '3D Signage Manufacturing',
            'Channel Letters',
            'Dimensional Lettering',
            'Custom Sign Components',
            'Retail Signage',
            'Building Signage',
            'Wayfinding Signs',
            'Logo Production',
            'Brand Elements',
            'Architectural Signage',
            'Professional Display Systems'
        ],
        advantages: [
            'Smart auto-leveling with database storage',
            'Building speed up to 700 mm/s',
            'Integrated Z-axis for high precision',
            'Filament sensor for material monitoring',
            'Ultra-flat printing platform',
            'Fast 2-in-1-out color change system',
            'Automatic platform configuration storage',
            'Eliminates re-leveling workflow',
            '7-inch touchscreen LCD interface',
            'Compatible with Windows 10',
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
            <main className="k-sign-3d-printer-main">
                {/* Product Hero Section */}
                <section className="k-sign-3d-printer-hero product-hero">
                    <div className="k-sign-3d-printer-hero-layout">
                        <div className="k-sign-3d-printer-hero-left">
                            <h1 className="k-sign-3d-printer-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="k-sign-3d-printer-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="k-sign-3d-printer-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="k-sign-3d-printer-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="k-sign-3d-printer-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="k-sign-3d-printer-hero-stats product-stats">
                                <div className="k-sign-3d-printer-stat">
                                    <span className="k-sign-3d-printer-stat-number">700mm/s</span>
                                    <span className="k-sign-3d-printer-stat-label">Build Speed</span>
                                </div>
                                <div className="k-sign-3d-printer-stat">
                                    <span className="k-sign-3d-printer-stat-number">10μm</span>
                                    <span className="k-sign-3d-printer-stat-label">Layer Thickness</span>
                                </div>
                                <div className="k-sign-3d-printer-stat">
                                    <span className="k-sign-3d-printer-stat-number">Auto-Level</span>
                                    <span className="k-sign-3d-printer-stat-label">Smart Database</span>
                                </div>
                            </div>
                        </div>
                        <div className="k-sign-3d-printer-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="k-sign-3d-printer-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="k-sign-3d-printer-overview-section">
                    <div className="k-sign-3d-printer-overview-container">
                        <h2 className="k-sign-3d-printer-section-title">Product Overview</h2>
                        <p className="k-sign-3d-printer-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="k-sign-3d-printer-features-section">
                    <div className="k-sign-3d-printer-features-container">
                        <div className="k-sign-3d-printer-features-header">
                            <h2 className="k-sign-3d-printer-features-title">Key Features</h2>
                            <p className="k-sign-3d-printer-features-subtitle">
                                Professional 3D printing technology with smart auto-leveling
                            </p>
                        </div>

                        <div className="k-sign-3d-printer-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="k-sign-3d-printer-feature-card">
                                    <div className="k-sign-3d-printer-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="k-sign-3d-printer-feature-title">{feature.title}</h3>
                                    <p className="k-sign-3d-printer-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="k-sign-3d-printer-specs-section">
                    <div className="k-sign-3d-printer-specs-container">
                        <h2 className="k-sign-3d-printer-section-title">Technical Specifications</h2>
                        <p className="k-sign-3d-printer-section-subtitle">
                            Complete technical details for K-Sign Letter Shell 3D Printer
                        </p>
                        <div className="k-sign-3d-printer-specs-grid">
                            <div className="k-sign-3d-printer-spec-card">
                                <h3 className="k-sign-3d-printer-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="k-sign-3d-printer-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="k-sign-3d-printer-spec-item">
                                            <div className="k-sign-3d-printer-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="k-sign-3d-printer-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="k-sign-3d-printer-applications-section">
                    <div className="k-sign-3d-printer-applications-container">
                        <h2 className="k-sign-3d-printer-section-title">Applications</h2>
                        <p className="k-sign-3d-printer-applications-subtitle">
                            Professional 3D printing solutions for signage and letter shell production
                        </p>
                        <div
                            ref={scrollRef}
                            className="k-sign-3d-printer-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="k-sign-3d-printer-applications-image-grid">
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Photo Lamination" />
                                    <p>Photo Lamination</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Print Protection" />
                                    <p>Print Protection</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Poster Lamination" />
                                    <p>Poster Lamination</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Document Preservation" />
                                    <p>Document Preservation</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Signage Production" />
                                    <p>Signage Production</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Menu Boards" />
                                    <p>Menu Boards</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Educational Materials" />
                                    <p>Educational Materials</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Point of Sale Displays" />
                                    <p>Point of Sale Displays</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Heat-Sensitive Material Protection" />
                                    <p>Heat-Sensitive Material Protection</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Quick Turnaround Projects" />
                                    <p>Quick Turnaround Projects</p>
                                </div>
                                <div className="k-sign-3d-printer-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Professional Presentation Materials" />
                                    <p>Professional Presentation Materials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="k-sign-3d-printer-advantages-section">
                    <div className="k-sign-3d-printer-advantages-container">
                        <h2 className="k-sign-3d-printer-section-title">Why Choose K-Sign Letter Shell 3D Printer?</h2>
                        <div className="k-sign-3d-printer-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="k-sign-3d-printer-advantage-item">
                                    <div className="k-sign-3d-printer-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="k-sign-3d-printer-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="k-sign-3d-printer-modal-overlay" onClick={closeInquiryModal}>
                    <div className="k-sign-3d-printer-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="k-sign-3d-printer-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="k-sign-3d-printer-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="k-sign-3d-printer-inquiry-form">
                            <div className="k-sign-3d-printer-form-row">
                                <div className="k-sign-3d-printer-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="k-sign-3d-printer-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="k-sign-3d-printer-form-row">
                                <div className="k-sign-3d-printer-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="k-sign-3d-printer-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="k-sign-3d-printer-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="k-sign-3d-printer-phone-input">
                                    <select className="k-sign-3d-printer-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="k-sign-3d-printer-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your 3D printing needs, expected production volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="k-sign-3d-printer-form-actions">
                                <button type="submit" className="k-sign-3d-printer-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="k-sign-3d-printer-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

