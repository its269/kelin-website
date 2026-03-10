"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './yueming-fiber-laser.css';

export default function YuemingFiberLaser() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.png');
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
        name: 'Yueming Fiber Laser CMA-1325C-G-G 1000W',
        model: 'CMA1325C-G-G FIBER LASER',
        images: [
            '/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.png',
            '/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.png',
        ],
        shortDescription: 'INDUSTRIAL GRADING SPEED 60m/min - AUTO-FOCUS CUTTING HEAD WITH SPRINT PIERCING - Auto-focus head with Sprint piercing and Z-axis control cuts piercing time by up to 80%, excels at thick, reflective metals, and protects optics for higher productivity.',
        detailedDescription: 'The YueMing CMA1325C-G-G Fiber Laser is a high-performance industrial-grade cutting machine designed for precision and speed. With an industrial grading speed of 60m/min, this fiber laser features an auto-focus cutting head with sprint piercing technology that reduces piercing time by up to 80%. The reinforced welding bed is milled and preprocessed by the large gantry, with tempered treatment and vibration aging to eliminate stress. Equipped with trusted global components from Siemens, Delta, SMC and other imported well-known brands, it uses IPG fiber laser generator and German ICUS cable for reliability and stability. The lightweight high-performance crossbeam is crafted through drawing and finishing processes for reduced weight and superior dynamic motion. Working area of 3600mm×1800mm with positioning accuracy of ±0.05mm/1000mm makes it ideal for various metal cutting applications.',
        features: [
            {
                title: 'Reinforced Welding Bed',
                description: 'Reinforced welding bed milled and preprocessed by the large gantry, tempered treatment and vibration aging to eliminate stress.',
                icon: 'precision'
            },
            {
                title: 'Trusted Global Components',
                description: 'Main components are Siemens, Delta, SMC and other imported well known brands.',
                icon: 'accuracy'
            },
            {
                title: 'IPG Laser & ICUS Cabling',
                description: 'Imported IPG fiber laser generator, German ICUS cable is used in the whole machine, reliable and stable.',
                icon: 'speed'
            },
            {
                title: 'Lightweight High-Performance Crossbeam',
                description: 'Crafted through drawing and finishing processes for reduced weight and superior dynamic motion.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Product Model', value: 'CMA1325C-G-G' },
            { label: 'Laser Source', value: 'Imported IPG fiber laser source for optional' },
            { label: 'Laser Power', value: '500/700/1000W (Optional)' },
            { label: 'Working Area', value: '3600mm×1800mm' },
            { label: 'Laser Type', value: 'Fiber Laser' },
            { label: 'Transmission System', value: 'Dual servo Motor Gantry' },
            { label: 'Max Positioning Speed', value: '60m/min' },
            { label: 'Max Acceleration Speed', value: '0.6G' },
            { label: 'Positioning Accuracy', value: '±0.05mm/1000mm' },
            { label: 'Repeat Positioning Accuracy', value: '±0.01mm/500mm' },
            { label: 'Supported Graphics', value: 'CAD, DXF etc.' },
            { label: 'Working Environment', value: '0-40℃, Humidity 5%-85% no condensation' },
            { label: 'Power Supply', value: 'Single phase 220V/50Hz/60Hz' },
            { label: 'Power Consumption', value: '6KW' },
            { label: 'Dimension', value: '4520mm×2030mm×1750mm' },
            { label: 'Weight', value: '2500Kg' }
        ],
        applications: [
            'Metal Sheet Cutting',
            'Hardware-Door/Window welding',
            'Transportation',
            'Advertisement',
            'Mechanical Parts',
            'Hardware-Aluminum Alloy',
            'Subway Sign',
            'Metal Fabrication',
            'Table & Chair',
            '3D Letters',
            'Automotive Parts',
            'Industrial Manufacturing'
        ],
        advantages: [
            'Industrial grading speed 60m/min',
            'Auto-focus cutting head with sprint piercing',
            '80% reduction in piercing time',
            'Reinforced welding bed with stress elimination',
            'IPG fiber laser generator',
            'German ICUS cable throughout',
            'Trusted global components (Siemens, Delta, SMC)',
            'Lightweight high-performance crossbeam',
            'High positioning accuracy ±0.05mm/1000mm',
            'Large working area 3600mm×1800mm',
            'Dual servo motor gantry system',
            'Reliable for thick reflective metals'
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
            <main className="yueming-laser-main">
                {/* Product Hero Section */}
                <section className="yueming-laser-hero product-hero">
                    <div className="yueming-laser-hero-layout">
                        <div className="yueming-laser-hero-left">
                            <h1 className="yueming-laser-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="yueming-laser-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="yueming-laser-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="yueming-laser-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="yueming-laser-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="yueming-laser-hero-stats product-stats">
                                <div className="yueming-laser-stat">
                                    <span className="yueming-laser-stat-number">60m/min</span>
                                    <span className="yueming-laser-stat-label">Speed</span>
                                </div>
                                <div className="yueming-laser-stat">
                                    <span className="yueming-laser-stat-number">3600×1800mm</span>
                                    <span className="yueming-laser-stat-label">Working Area</span>
                                </div>
                                <div className="yueming-laser-stat">
                                    <span className="yueming-laser-stat-number">IPG Laser</span>
                                    <span className="yueming-laser-stat-label">Laser Source</span>
                                </div>
                            </div>
                        </div>
                        <div className="yueming-laser-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="yueming-laser-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="yueming-laser-overview-section">
                    <div className="yueming-laser-overview-container">
                        <h2 className="yueming-laser-section-title">Product Overview</h2>
                        <p className="yueming-laser-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="yueming-laser-features-section">
                    <div className="yueming-laser-features-container">
                        <div className="yueming-laser-features-header">
                            <h2 className="yueming-laser-features-title">Key Features</h2>
                            <p className="yueming-laser-features-subtitle">
                                Industrial-grade UV hybrid printing technology for professional results
                            </p>
                        </div>

                        <div className="yueming-laser-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="yueming-laser-feature-card">
                                    <div className="yueming-laser-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="yueming-laser-feature-title">{feature.title}</h3>
                                    <p className="yueming-laser-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="yueming-laser-specs-section">
                    <div className="yueming-laser-specs-container">
                        <h2 className="yueming-laser-section-title">Technical Specifications</h2>
                        <p className="yueming-laser-section-subtitle">
                            Complete technical details for Liyu X-Line DQS UV Hybrid Printer
                        </p>
                        <div className="yueming-laser-specs-grid">
                            <div className="yueming-laser-spec-card">
                                <h3 className="yueming-laser-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="yueming-laser-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="yueming-laser-spec-item">
                                            <div className="yueming-laser-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="yueming-laser-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="yueming-laser-applications-section">
                    <div className="yueming-laser-applications-container">
                        <h2 className="yueming-laser-section-title">Applications</h2>
                        <p className="yueming-laser-applications-subtitle">
                            Professional UV hybrid printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="yueming-laser-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="yueming-laser-applications-image-grid">
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Back Lit Posters" />
                                    <p>Back Lit Posters</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Billboards" />
                                    <p>Billboards</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Bus Station Ads" />
                                    <p>Bus Station Ads</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Entertainment Hall Display" />
                                    <p>Entertainment Hall Display</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Signage Production" />
                                    <p>Signage Production</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Promotional Displays" />
                                    <p>Promotional Displays</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Point of Sale Displays" />
                                    <p>Point of Sale Displays</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Corrugated Materials" />
                                    <p>Corrugated Materials</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Light-Plate Printing" />
                                    <p>Light-Plate Printing</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Small-Format Materials" />
                                    <p>Small-Format Materials</p>
                                </div>
                                <div className="yueming-laser-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Commercial Advertising" />
                                    <p>Commercial Advertising</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="yueming-laser-advantages-section">
                    <div className="yueming-laser-advantages-container">
                        <h2 className="yueming-laser-section-title">Why Choose Liyu X-Line DQS?</h2>
                        <div className="yueming-laser-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="yueming-laser-advantage-item">
                                    <div className="yueming-laser-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="yueming-laser-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="yueming-laser-modal-overlay" onClick={closeInquiryModal}>
                    <div className="yueming-laser-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="yueming-laser-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="yueming-laser-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="yueming-laser-inquiry-form">
                            <div className="yueming-laser-form-row">
                                <div className="yueming-laser-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="yueming-laser-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="yueming-laser-form-row">
                                <div className="yueming-laser-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="yueming-laser-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="yueming-laser-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="yueming-laser-phone-input">
                                    <select className="yueming-laser-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="yueming-laser-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="yueming-laser-form-actions">
                                <button type="submit" className="yueming-laser-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="yueming-laser-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
