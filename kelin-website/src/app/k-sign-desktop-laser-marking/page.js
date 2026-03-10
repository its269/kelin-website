"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './k-sign-desktop-laser-marking.css';

export default function KSignDesktopLaserMarking() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/K-sign_Desktop Laser Marking.png');
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
        name: 'K-Sign Desktop Laser Marking',
        model: 'LASER MARKING MACHINE',
        images: [
            '/laser-machines/K-sign_Desktop Laser Marking.png',
            '/laser-machines/K-sign_Desktop Laser Marking.png',
        ],
        shortDescription: 'Instantly increase production with reliable offline engraving function - Efficiency by 5-10 times. No need for a professional marking technician, learn as fast as you can within 10 minutes. Available with rotary for cylindrical marking.',
        detailedDescription: 'K-Sign Laser Marking Machine with reliable offline engraving function delivers efficiency 5-10 times faster than traditional methods. No professional marking technician needed - learn as fast as you can within 10 minutes. Features high-definition field mirror for precise results, high-speed galvanometer with outstanding speed marking, extended optical path with stable space and enhanced beam, and beam height adjuster aligned with adjustable height control. Easily handle various materials including Cold, silver, copper, iron, stainless steel, aluminum alloy, hard alloy, nylon, and hard plastics. Perfect for electroplating, ABS, PVC, PES (engineering plastics, hard plastics).',
        features: [
            {
                title: 'High-Definition Field Mirror',
                description: 'High-repellent ultra-high-resolution imports, long range lon for precise and clear marking results.',
                icon: 'mirror'
            },
            {
                title: 'High-Speed Galvanometer',
                description: 'High-speed digital data operation with outstanding speed marking and stable output.',
                icon: 'speed'
            },
            {
                title: 'Extended Optical Path',
                description: 'Extended laser optical path with stable space and enhanced beam for consistent performance.',
                icon: 'optical'
            },
            {
                title: 'Beam Height Adjuster',
                description: 'Align beam with adjustable height control for precise marking on various object sizes.',
                icon: 'adjuster'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'ML20/ML30 or with ROTARY' },
            { label: 'Laser', value: 'Fiber Laser' },
            { label: 'Marking Area', value: '110mm×110mm' },
            { label: 'Minimum Format Text', value: '0.2mm-0.5mm' },
            { label: 'Laser Power', value: '20W / 30W' },
            { label: 'Overall Power', value: '<500W' },
            { label: 'Laser Speed', value: '0-5000mm/s' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Machine Size', value: '62×35×98cm' },
            { label: 'Weight', value: 'N.W28kg' }
        ],
        applications: [
            'Cold and silver marking',
            'Copper materials',
            'Iron and stainless steel',
            'Aluminum alloy marking',
            'Hard alloy materials',
            'Nylon products',
            'Hard plastics',
            'Electroplating materials',
            'ABS plastics',
            'PVC materials',
            'PES engineering plastics',
            'Product identification'
        ],
        advantages: [
            '5-10 times efficiency increase',
            'No professional technician needed',
            'Learn within 10 minutes',
            'Reliable offline engraving',
            'High-definition field mirror',
            'High-speed galvanometer',
            'Extended optical path',
            'Adjustable beam height',
            'Available with rotary attachment',
            'Wide material compatibility',
            '110mm×110mm marking area',
            'Compact 62×35×98cm size'
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
            <main className="ksign-marking-main">
                {/* Product Hero Section */}
                <section className="ksign-marking-hero product-hero">
                    <div className="ksign-marking-hero-layout">
                        <div className="ksign-marking-hero-left">
                            <h1 className="ksign-marking-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="ksign-marking-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="ksign-marking-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="ksign-marking-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="ksign-marking-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="ksign-marking-hero-stats product-stats">
                                <div className="ksign-marking-stat">
                                    <span className="ksign-marking-stat-number">5-10x</span>
                                    <span className="ksign-marking-stat-label">Faster</span>
                                </div>
                                <div className="ksign-marking-stat">
                                    <span className="ksign-marking-stat-number">30W</span>
                                    <span className="ksign-marking-stat-label">Power</span>
                                </div>
                                <div className="ksign-marking-stat">
                                    <span className="ksign-marking-stat-number">10min</span>
                                    <span className="ksign-marking-stat-label">Learn</span>
                                </div>
                            </div>
                        </div>
                        <div className="ksign-marking-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="ksign-marking-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="ksign-marking-overview-section">
                    <div className="ksign-marking-overview-container">
                        <h2 className="ksign-marking-section-title">Product Overview</h2>
                        <p className="ksign-marking-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="ksign-marking-features-section">
                    <div className="ksign-marking-features-container">
                        <div className="ksign-marking-features-header">
                            <h2 className="ksign-marking-features-title">Key Features</h2>
                            <p className="ksign-marking-features-subtitle">
                                Instantly increase production with offline engraving
                            </p>
                        </div>

                        <div className="ksign-marking-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="ksign-marking-feature-card">
                                    <div className="ksign-marking-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="ksign-marking-feature-title">{feature.title}</h3>
                                    <p className="ksign-marking-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="ksign-marking-specs-section">
                    <div className="ksign-marking-specs-container">
                        <h2 className="ksign-marking-section-title">Technical Specifications</h2>
                        <p className="ksign-marking-section-subtitle">
                            Complete technical details for K-Sign Desktop Laser Marking Machine
                        </p>
                        <div className="ksign-marking-specs-grid">
                            <div className="ksign-marking-spec-card">
                                <h3 className="ksign-marking-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="ksign-marking-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="ksign-marking-spec-item">
                                            <div className="ksign-marking-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="ksign-marking-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="ksign-marking-applications-section">
                    <div className="ksign-marking-applications-container">
                        <h2 className="ksign-marking-section-title">Application Materials</h2>
                        <p className="ksign-marking-applications-subtitle">
                            Professional laser marking for metals, plastics, and various materials
                        </p>
                        <div
                            ref={scrollRef}
                            className="ksign-marking-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="ksign-marking-applications-image-grid">
                                {machineDetails.applications.map((app, index) => (
                                    <div key={index} className="ksign-marking-application-image-item">
                                        <div className="ksign-marking-application-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                                <path d="m9 11 3 3L22 4" />
                                            </svg>
                                        </div>
                                        <p>{app}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="ksign-marking-advantages-section">
                    <div className="ksign-marking-advantages-container">
                        <h2 className="ksign-marking-section-title">Why Choose K-Sign Desktop Laser Marking Machine?</h2>
                        <div className="ksign-marking-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="ksign-marking-advantage-item">
                                    <div className="ksign-marking-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="ksign-marking-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="ksign-marking-modal-overlay" onClick={closeInquiryModal}>
                    <div className="ksign-marking-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="ksign-marking-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="ksign-marking-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="ksign-marking-inquiry-form">
                            <div className="ksign-marking-form-row">
                                <div className="ksign-marking-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="ksign-marking-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="ksign-marking-form-row">
                                <div className="ksign-marking-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="ksign-marking-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="ksign-marking-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="ksign-marking-phone-input">
                                    <select className="ksign-marking-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="ksign-marking-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laser cutting needs, materials, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="ksign-marking-form-actions">
                                <button type="submit" className="ksign-marking-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="ksign-marking-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
