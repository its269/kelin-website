"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './apollo.css';

export default function ApolloMaxPlusII() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/ApolloMax Plus II PZG3208-KV.png');
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
        name: 'ApolloMax Plus II PZG3208-KV',
        model: 'PZG3304-KV / PZG3308-KV',
        images: [
            '/ApolloMax Plus II PZG3208-KV.png',
            '/ApolloMax Plus II PZG3208-KV.png', // Add more images if available
        ],
        shortDescription: 'PRECISION PRINTING, ACCELERATED PERFORMANCE - Industrial-grade speed printing up to 230 m²/h with high-volume, high-speed printing capabilities and industrial Konica Minolta KM512/14PL printheads.',
        detailedDescription: 'The PZH Series Grand Format Line delivers excellent quality (up to 1440dpi) and high durability for high-volume production printing with industrial Konica Minolta KM512/14PL printheads. Features precision printing and accelerated performance with high-volume, high-speed printing, pinch roller handle for flexible media handling, efficient heat technology for optimal curing, and silent carriage motion for smooth operation.',
        features: [
            {
                title: 'High-Volume, High-Speed Printing',
                description: 'Advanced for high-volume and high-speed offering print speeds up to 230m²/h with exceptional quality for maximum productivity',
                icon: 'print'
            },
            {
                title: 'Pinch Roller Handle',
                description: 'Hand-free production for flexible media handling, more robust grip and hold media tension for consistent results',
                icon: 'media'
            },
            {
                title: 'Efficient Heat Technology',
                description: 'Precision clean heating and infrared drying system which ensures better ink dry for optimal printing performance',
                icon: 'production'
            },
            {
                title: 'Silent Carriage Motion',
                description: 'Ultra-smooth guided carriage with sucker cap track allowing smooth, quiet operation across all media types',
                icon: 'eco'
            },
            {
                title: 'Industrial Konica Minolta Printheads',
                description: 'Premium KM512/14PL printheads delivering up to 1440dpi resolution with 30pl droplet size for exceptional quality',
                icon: 'quality'
            },
            {
                title: 'Precision Printing Performance',
                description: 'Accelerated performance with precision printing technology optimized for commercial and industrial production',
                icon: 'versatile'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'PZG3304-KV / PZG3308-KV' },
            { label: 'Printer Head', value: '4 × KM512(LN-B 30pl)' },
            { label: 'Max Resolution', value: '180 × 1080dpi / 360 × 1440dpi' },
            { label: 'Media Size', value: '3.2m / 100mm' },
            { label: 'Machine Size', value: '4872mm × 1364mm × 1524mm' },
            { label: 'Printing Speed', value: 'Draft: 230 m²/h | Production: 150 m²/h | Quality: 120 m²/h' },
            { label: 'Power', value: 'AC200-240V 15A 3500W' },
            { label: 'Weight', value: '960KG' },
            { label: 'Print Technology', value: 'Industrial Konica Minolta KM512/14PL (30pl droplet)' },
            { label: 'Resolution', value: 'Up to 1440dpi with 4-color CMYK' },
            { label: 'Features', value: 'High-Volume Production, Silent Operation, Precision Printing' },
            { label: 'Heat System', value: 'Efficient Heat Technology with Infrared Drying' },
            { label: 'Carriage System', value: 'Silent Carriage Motion with Pinch Roller Handle' },
            { label: 'Media Handling', value: 'Flexible Media Support up to 3.2m width with 100mm core' },
            { label: 'Performance', value: 'Accelerated Performance with Precision Control' },
            { label: 'Quality', value: 'Up to 1440dpi for Exceptional Print Quality' }
        ],
        applications: [
            'Large Format Billboards & Outdoor Advertising',
            'Building Wraps & Architectural Graphics',
            'Vehicle Graphics & Fleet Branding',
            'Commercial Banners & Event Signage',
            'Exhibition Graphics & Trade Show Displays',
            'Industrial Production Printing',
            'High-Volume Commercial Projects',
            'Professional Graphics Production',
            'Retail Point-of-Sale Materials',
            'Sports & Entertainment Graphics'
        ],
        advantages: [
            'Industrial-grade speed up to 230 m²/h for maximum productivity',
            'Superior 1440dpi print quality with 30pl precision',
            'High-volume production capabilities for commercial use',
            'Silent operation technology for workplace comfort',
            'Efficient heat drying system with infrared technology',
            'Robust media handling with pinch roller system',
            'Professional-grade reliability with Konica Minolta heads',
            'Cost-effective large format solution',
            'Precision printing with accelerated performance',
            'Flexible media support up to 3.2m width'
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
            <main className="apollo-main">
                {/* Product Hero Section */}
                <section className="apollo-hero product-hero">
                    <div className="apollo-hero-layout">
                        <div className="apollo-hero-left">
                            <h1 className="apollo-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="apollo-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="apollo-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="apollo-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="apollo-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="apollo-hero-stats product-stats">
                                <div className="apollo-stat">
                                    <span className="apollo-stat-number">3.2m</span>
                                    <span className="apollo-stat-label">Print Width</span>
                                </div>
                                <div className="apollo-stat">
                                    <span className="apollo-stat-number">230 m²/h</span>
                                    <span className="apollo-stat-label">Max Speed</span>
                                </div>
                                <div className="apollo-stat">
                                    <span className="apollo-stat-number">KM512</span>
                                    <span className="apollo-stat-label">Konica Head</span>
                                </div>
                            </div>
                        </div>
                        <div className="apollo-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="apollo-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="apollo-overview-section">
                    <div className="apollo-overview-container">
                        <h2 className="apollo-section-title">Product Overview</h2>
                        <p className="apollo-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="apollo-features-section">
                    <div className="apollo-features-container">
                        <div className="apollo-features-header">
                            <h2 className="apollo-features-title">Key Features</h2>
                            <p className="apollo-features-subtitle">
                                Advanced technology meets professional performance
                            </p>
                        </div>

                        <div className="apollo-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="apollo-feature-card">
                                    <div className="apollo-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="apollo-feature-title">{feature.title}</h3>
                                    <p className="apollo-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="apollo-specs-section">
                    <div className="apollo-specs-container">
                        <h2 className="apollo-section-title">Technical Specifications</h2>
                        <div className="apollo-specs-grid">
                            <div className="apollo-spec-card">
                                <h3 className="apollo-spec-card-title">Print Specifications</h3>
                                {machineDetails.specifications.slice(0, 7).map((spec, index) => (
                                    <div key={index} className="apollo-spec-item">
                                        <span className="apollo-spec-label">{spec.label}:</span>
                                        <span className="apollo-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="apollo-spec-card">
                                <h3 className="apollo-spec-card-title">Physical Specifications</h3>
                                {machineDetails.specifications.slice(7).map((spec, index) => (
                                    <div key={index} className="apollo-spec-item">
                                        <span className="apollo-spec-label">{spec.label}:</span>
                                        <span className="apollo-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="apollo-applications-section">
                    <div className="apollo-applications-container">
                        <h2 className="apollo-section-title">Applications</h2>
                        <p className="apollo-applications-subtitle">
                            Professional large format printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="apollo-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="apollo-applications-image-grid">
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Large Format Billboards" />
                                    <p>Large Format Billboards</p>
                                </div>
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Building Wraps" />
                                    <p>Building Wraps</p>
                                </div>
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Vehicle Graphics" />
                                    <p>Vehicle Graphics</p>
                                </div>
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Commercial Banners" />
                                    <p>Commercial Banners</p>
                                </div>
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Industrial Production" />
                                    <p>Industrial Production</p>
                                </div>
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="High-Volume Projects" />
                                    <p>High-Volume Projects</p>
                                </div>
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Retail Graphics" />
                                    <p>Retail Graphics</p>
                                </div>
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Sports Graphics" />
                                    <p>Sports Graphics</p>
                                </div>
                                <div className="apollo-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Entertainment Displays" />
                                    <p>Entertainment Displays</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="apollo-advantages-section">
                    <div className="apollo-advantages-container">
                        <h2 className="apollo-section-title">Why Choose ApolloMax Plus II?</h2>
                        <div className="apollo-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="apollo-advantage-item">
                                    <div className="apollo-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="apollo-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="apollo-cta-section">
                    <div className="apollo-cta-container">
                        <h2 className="apollo-cta-title">
                            Ready to Transform Your Printing Business?
                        </h2>
                        <p className="apollo-cta-text">
                            Get detailed pricing, technical specifications, and expert consultation for the ApolloMax Plus II PZG3208-KV Printer.
                        </p>
                        <div className="apollo-cta-buttons">
                            <button
                                onClick={openInquiryModal}
                                className="apollo-cta-btn-primary"
                            >
                                Request Quote
                            </button>
                            <Link
                                href="/contact"
                                className="apollo-cta-btn-secondary"
                            >
                                Contact Sales Team
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="apollo-modal-overlay" onClick={closeInquiryModal}>
                    <div className="apollo-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="apollo-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="apollo-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="apollo-inquiry-form">
                            <div className="apollo-form-row">
                                <div className="apollo-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="apollo-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="apollo-form-row">
                                <div className="apollo-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="apollo-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="apollo-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="apollo-phone-input">
                                    <select className="apollo-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="apollo-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="apollo-form-actions">
                                <button type="submit" className="apollo-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="apollo-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}