"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './fulei-bu-1425fa.css';

export default function FuleiBU1425FAFlatbedLaminator() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laminator/Fulei BU-1425FA Flatbed Laminator (1).webp');
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
        name: 'FLATBED LAMINATOR',
        model: 'FULEI FLATBED LAMINATOR',
        images: [
            '/laminator/Fulei BU-1425FA Flatbed Laminator (1).webp',
            '/laminator/Fulei BU-1425FA Flatbed Laminator (1).webp',
        ],
        shortDescription: 'VERSATILE FLATBED MEDIA LAMINATION - Laminator ideal for one person to laminate on poster, sheet, or mount on rigid substrates, be of board acrylic, aluminum composite panel, wooden board etc.',
        detailedDescription: 'Our wide-format laminators - cold, flatbed, and auto warm - are built to handle everything from soft prints to hard boards with speed, accuracy, and ease. The Flatbed Laminator is versatile and ideal for one person to laminate posters, sheets, or mount on rigid substrates including board acrylic, aluminum composite panel, and wooden boards.',
        features: [
            {
                title: 'Versatile Flatbed Media',
                description: 'Laminator ideal for one person to laminate on poster, sheet, or mount on rigid substrates, be of board acrylic, aluminum composite panel, wooden board etc.',
                icon: 'precision'
            },
            {
                title: 'Wide Format Capability',
                description: 'Built to handle everything from soft prints to hard boards with speed, accuracy, and ease.',
                icon: 'accuracy'
            },
            {
                title: 'Single Person Operation',
                description: 'Designed for efficient one-person operation, making it ideal for small to medium production environments.',
                icon: 'speed'
            },
            {
                title: 'Multiple Substrate Support',
                description: 'Compatible with various rigid substrates including acrylic, aluminum composite panel, and wooden boards.',
                icon: 'media'
            }
        ],
        specifications: [
            { label: 'Max Working Width', value: '1540*1250 cm' },
            { label: 'Table Height', value: '850 mm' },
            { label: 'Roller Material', value: 'Natural Rubber' },
            { label: 'Heat Type', value: 'Cool Only' },
            { label: 'Roller Diameter', value: '120 mm' },
            { label: 'Max Nip Opening', value: '65 mm' },
            { label: 'Power Requirement', value: 'AC110V/ 230V' },
            { label: 'Machine Size', value: '2180*1800*731 cm' },
            { label: 'Shipping Dimensions', value: '2760*2210 cm' },
            { label: 'Weight (NW / GW)', value: '430 kg' }
        ],
        applications: [
            'Signage Production',
            'Display Graphics Mounting',
            'Photo Mounting to Rigid Boards',
            'Exhibition Graphics',
            'POP Display Manufacturing',
            'Museum Quality Mounting',
            'Architectural Graphics',
            'Trade Show Graphics',
            'Retail Displays',
            'Foam Board Mounting',
            'Acrylic Mounting',
            'Professional Print Finishing'
        ],
        advantages: [
            'Flatbed design for precise mounting',
            'Temperature and pressure control for optimal results',
            'Large format capability',
            'Suitable for rigid and flexible substrates',
            'Professional bubble-free mounting',
            'Versatile material compatibility',
            'Pneumatic pressure system for consistent results',
            'Ideal for signage production',
            'High-quality adhesion',
            'Durable construction for industrial use',
            'Easy operation and maintenance',
            'Cost-effective professional mounting solution'
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
            <main className="fulei-1425fa-main">
                {/* Product Hero Section */}
                <section className="fulei-1425fa-hero product-hero">
                    <div className="fulei-1425fa-hero-layout">
                        <div className="fulei-1425fa-hero-left">
                            <h1 className="fulei-1425fa-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="fulei-1425fa-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="fulei-1425fa-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="fulei-1425fa-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="fulei-1425fa-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="fulei-1425fa-hero-stats product-stats">
                                <div className="fulei-1425fa-stat">
                                    <span className="fulei-1425fa-stat-number">Flatbed</span>
                                    <span className="fulei-1425fa-stat-label">Design</span>
                                </div>
                                <div className="fulei-1425fa-stat">
                                    <span className="fulei-1425fa-stat-number">Professional</span>
                                    <span className="fulei-1425fa-stat-label">Mounting</span>
                                </div>
                                <div className="fulei-1425fa-stat">
                                    <span className="fulei-1425fa-stat-number">Large Format</span>
                                    <span className="fulei-1425fa-stat-label">Capability</span>
                                </div>
                            </div>
                        </div>
                        <div className="fulei-1425fa-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="fulei-1425fa-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="fulei-1425fa-overview-section">
                    <div className="fulei-1425fa-overview-container">
                        <h2 className="fulei-1425fa-section-title">Product Overview</h2>
                        <p className="fulei-1425fa-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="fulei-1425fa-features-section">
                    <div className="fulei-1425fa-features-container">
                        <div className="fulei-1425fa-features-header">
                            <h2 className="fulei-1425fa-features-title">Key Features</h2>
                            <p className="fulei-1425fa-features-subtitle">
                                Professional flatbed laminating technology for precision mounting
                            </p>
                        </div>

                        <div className="fulei-1425fa-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="fulei-1425fa-feature-card">
                                    <div className="fulei-1425fa-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="fulei-1425fa-feature-title">{feature.title}</h3>
                                    <p className="fulei-1425fa-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="fulei-1425fa-specs-section">
                    <div className="fulei-1425fa-specs-container">
                        <h2 className="fulei-1425fa-section-title">Technical Specifications</h2>
                        <p className="fulei-1425fa-section-subtitle">
                            Complete technical details for Fulei BU-1425FA Flatbed Laminator
                        </p>
                        <div className="fulei-1425fa-specs-grid">
                            <div className="fulei-1425fa-spec-card">
                                <h3 className="fulei-1425fa-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="fulei-1425fa-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="fulei-1425fa-spec-item">
                                            <div className="fulei-1425fa-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="fulei-1425fa-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="fulei-1425fa-applications-section">
                    <div className="fulei-1425fa-applications-container">
                        <h2 className="fulei-1425fa-section-title">Applications</h2>
                        <p className="fulei-1425fa-applications-subtitle">
                            Professional flatbed laminating solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="fulei-1425fa-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="fulei-1425fa-applications-image-grid">
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Signage Production" />
                                    <p>Signage Production</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Display Graphics Mounting" />
                                    <p>Display Graphics Mounting</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Photo Mounting to Rigid Boards" />
                                    <p>Photo Mounting to Rigid Boards</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="POP Display Manufacturing" />
                                    <p>POP Display Manufacturing</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Museum Quality Mounting" />
                                    <p>Museum Quality Mounting</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Architectural Graphics" />
                                    <p>Architectural Graphics</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Trade Show Graphics" />
                                    <p>Trade Show Graphics</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Retail Displays" />
                                    <p>Retail Displays</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Foam Board Mounting" />
                                    <p>Foam Board Mounting</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Acrylic Mounting" />
                                    <p>Acrylic Mounting</p>
                                </div>
                                <div className="fulei-1425fa-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Professional Print Finishing" />
                                    <p>Professional Print Finishing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="fulei-1425fa-advantages-section">
                    <div className="fulei-1425fa-advantages-container">
                        <h2 className="fulei-1425fa-section-title">Why Choose Fulei BU-1425FA?</h2>
                        <div className="fulei-1425fa-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="fulei-1425fa-advantage-item">
                                    <div className="fulei-1425fa-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="fulei-1425fa-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="fulei-1425fa-modal-overlay" onClick={closeInquiryModal}>
                    <div className="fulei-1425fa-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="fulei-1425fa-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="fulei-1425fa-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="fulei-1425fa-inquiry-form">
                            <div className="fulei-1425fa-form-row">
                                <div className="fulei-1425fa-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="fulei-1425fa-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="fulei-1425fa-form-row">
                                <div className="fulei-1425fa-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="fulei-1425fa-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="fulei-1425fa-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="fulei-1425fa-phone-input">
                                    <select className="fulei-1425fa-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="fulei-1425fa-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laminating needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="fulei-1425fa-form-actions">
                                <button type="submit" className="fulei-1425fa-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="fulei-1425fa-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
