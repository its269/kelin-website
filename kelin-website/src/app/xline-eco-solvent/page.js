"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './xline.css';

export default function XlineEcoSolventPage() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/Apollo Xline (1).png');
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
        name: 'XLINE Eco-Solvent Printer',
        model: 'XLINE-2004',
        images: [
            '/Apollo Xline (1).png',
            '/Apollo Xline (1).png', // Add more images if available
        ],
        shortDescription: 'High-performance printing system designed to tackle diverse range of large-format printing projects with vibrant quality results.',
        detailedDescription: 'The XLINE Eco-Solvent Printer represents cutting-edge large-format printing technology. Engineered for versatility and high-quality output, this printer delivers exceptional results across diverse printing applications. With advanced print head technology and robust media handling, it\'s perfect for commercial printing, signage production, and creative applications.',
        features: [
            {
                title: 'Large Format Printing',
                description: 'Wide format capabilities for handling large-scale printing projects with precision and detail',
                icon: 'print'
            },
            {
                title: 'Vibrant Color Output',
                description: 'Advanced color management system delivering vibrant, accurate colors with exceptional clarity',
                icon: 'colors'
            },
            {
                title: 'Versatile Media Support',
                description: 'Compatible with wide range of media types and substrates for maximum flexibility',
                icon: 'media'
            },
            {
                title: 'Professional Grade Quality',
                description: 'Consistent high-quality output designed for demanding professional applications',
                icon: 'quality'
            },
            {
                title: 'Advanced Print Technology',
                description: 'State-of-the-art EPSON i3200 printheads with precision ink droplet control',
                icon: 'tech'
            },
            {
                title: 'High Speed Production',
                description: 'Fast printing speeds up to 85 m²/h for high-volume production requirements',
                icon: 'speed'
            }
        ],
        specifications: [
            { label: 'Print Width', value: '3200 mm (126 inches)' },
            { label: 'Print Technology', value: 'EPSON i3200 Piezo Print Head' },
            { label: 'Print Resolution', value: '2400 DPI' },
            { label: 'Print Speed', value: 'Up to 85 m²/h' },
            { label: 'Color Scale', value: 'CMYK' },
            { label: 'Drop Size', value: '3.5 Pl.' },
            { label: 'Drying System', value: 'Infrared / Fan' },
            { label: 'Printhead Quantity', value: '4 Maximum' },
            { label: 'RIP Software', value: 'Photo Print' },
            { label: 'Power Requirements', value: '230V (+/-) 10% 10A / 50HZ' },
            { label: 'Machine Dimensions', value: '950mm × 4800mm × 1520mm' },
            { label: 'Machine Weight', value: '1140 kg' },
            { label: 'Media Support', value: 'Vinyl, Backlit Banners, Photo Paper, Billboard Paper, Flex, Textiles, Mesh, Solvent, OWV' }
        ],
        applications: [
            'Large Format Signage',
            'Outdoor Banners',
            'Vehicle Wraps',
            'Billboard Advertising',
            'Exhibition Graphics',
            'Retail Displays',
            'Architectural Graphics',
            'Textile Printing'
        ],
        advantages: [
            'High-speed production capabilities',
            'Superior print quality and resolution',
            'Wide media compatibility',
            'Reliable EPSON i3200 technology',
            'Energy-efficient operation',
            'User-friendly interface',
            'Consistent performance',
            'Professional support'
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
            <main className="xline-main">
                {/* Product Hero Section */}
                <section className="xline-hero product-hero">
                    <div className="xline-hero-layout">
                        <div className="xline-hero-left">
                            <h1 className="xline-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="xline-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="xline-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="xline-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="xline-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="xline-hero-stats product-stats">
                                <div className="xline-stat">
                                    <span className="xline-stat-number">3.2m</span>
                                    <span className="xline-stat-label">Print Width</span>
                                </div>
                                <div className="xline-stat">
                                    <span className="xline-stat-number">2400 dpi</span>
                                    <span className="xline-stat-label">Max Resolution</span>
                                </div>
                                <div className="xline-stat">
                                    <span className="xline-stat-number">85 m²/h</span>
                                    <span className="xline-stat-label">Print Speed</span>
                                </div>
                            </div>
                        </div>
                        <div className="xline-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="xline-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="xline-overview-section">
                    <div className="xline-overview-container">
                        <h2 className="xline-section-title">Product Overview</h2>
                        <p className="xline-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="xline-features-section">
                    <div className="xline-features-container">
                        <div className="xline-features-header">
                            <h2 className="xline-features-title">Key Features</h2>
                            <p className="xline-features-subtitle">
                                Advanced technology meets professional performance
                            </p>
                        </div>

                        <div className="xline-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="xline-feature-card">
                                    <div className="xline-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="xline-feature-title">{feature.title}</h3>
                                    <p className="xline-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="xline-specs-section">
                    <div className="xline-specs-container">
                        <h2 className="xline-section-title">Technical Specifications</h2>
                        <p className="xline-section-subtitle">
                            Complete technical details for XLINE eco-solvent printer
                        </p>
                        <div className="xline-specs-grid">
                            <div className="xline-spec-card">
                                <h3 className="xline-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="xline-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="xline-spec-item">
                                            <div className="xline-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="xline-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="xline-applications-section">
                    <div className="xline-applications-container">
                        <h2 className="xline-section-title">Applications</h2>
                        <p className="xline-applications-subtitle">
                            Professional eco-solvent printing solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="xline-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="xline-applications-image-grid">
                                <div className="xline-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Large Format Signage" />
                                    <p>Large Format Signage</p>
                                </div>
                                <div className="xline-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Outdoor Banners" />
                                    <p>Outdoor Banners</p>
                                </div>
                                <div className="xline-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Vehicle Wraps" />
                                    <p>Vehicle Wraps</p>
                                </div>
                                <div className="xline-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Billboard Advertising" />
                                    <p>Billboard Advertising</p>
                                </div>
                                <div className="xline-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Exhibition Graphics" />
                                    <p>Exhibition Graphics</p>
                                </div>
                                <div className="xline-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Retail Displays" />
                                    <p>Retail Displays</p>
                                </div>
                                <div className="xline-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Architectural Graphics" />
                                    <p>Architectural Graphics</p>
                                </div>
                                <div className="xline-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Textile Printing" />
                                    <p>Textile Printing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="xline-advantages-section">
                    <div className="xline-advantages-container">
                        <h2 className="xline-section-title">Why Choose XLINE Eco-Solvent?</h2>
                        <div className="xline-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="xline-advantage-item">
                                    <div className="xline-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="xline-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="xline-cta-section">
                    <div className="xline-cta-container">
                        <h2 className="xline-cta-title">
                            Ready to Transform Your Printing Business?
                        </h2>
                        <p className="xline-cta-text">
                            Get detailed pricing, technical specifications, and expert consultation for the XLINE Eco-Solvent Printer.
                        </p>
                        <div className="xline-cta-buttons">
                            <button
                                onClick={openInquiryModal}
                                className="xline-cta-btn-primary"
                            >
                                Request Quote
                            </button>
                            <Link
                                href="/contact"
                                className="xline-cta-btn-secondary"
                            >
                                Contact Sales Team
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="xline-modal-overlay" onClick={closeInquiryModal}>
                    <div className="xline-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="xline-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="xline-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="xline-inquiry-form">
                            <div className="xline-form-row">
                                <div className="xline-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="xline-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="xline-form-row">
                                <div className="xline-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="xline-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="xline-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="xline-phone-input">
                                    <select className="xline-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="xline-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your printing needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="xline-form-actions">
                                <button type="submit" className="xline-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="xline-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}