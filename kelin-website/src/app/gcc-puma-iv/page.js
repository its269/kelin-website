"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './gcc-puma-iv.css';

export default function GCCPumaIV() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/cutting-machines/GCC PUMA IV.webp');
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
        name: 'GCC Puma IV',
        model: 'Puma IV Cutting Plotter',
        images: [
            '/cutting-machines/GCC PUMA IV.webp',
            '/cutting-machines/GCC PUMA IV.webp', // Add more Puma IV images if available
        ],
        shortDescription: 'BEST CUTTING PERFORMANCE WITH LOW INVESTMENT COST - High-performance cutting plotter with maximum speed up to 1020mm/sec, delivering unrivaled precision and reliability through digitally controlled servo system.',
        detailedDescription: 'The GCC Puma IV is a high-performance cutting plotter that delivers unrivaled precision, speed, and unwavering reliability through a digitally controlled servo system, advanced contour cutting features, and robust connectivity, making it an ideal solution for sign makers. With maximum cutting speed up to 1020mm/sec and enhanced AAS II contour cutting system for LX models, the Puma IV offers best cutting performance with low investment cost.',
        features: [
            {
                title: 'Enhanced AAS II Contour Cutting System (LX Models)',
                description: 'Guarantees precise contour cutting by automatically detecting registration marks for improved accuracy.',
                icon: 'precision'
            },
            {
                title: 'Segmental Positioning (LX Models)',
                description: 'Corrects crooked prints for improved accuracy in contour cutting applications.',
                icon: 'accuracy'
            },
            {
                title: 'Section Cutting',
                description: 'Divides long plot data into sectional outputs for higher cutting quality and increased precision.',
                icon: 'speed'
            },
            {
                title: 'Auto Rotation (LX Models)',
                description: 'Automatically detects material feeding direction and rotates cutting content based on unique registration marks.',
                icon: 'media'
            },
            {
                title: 'Ethernet Connection',
                description: 'Enables efficient network operation, allowing multiple Puma IV units to be controlled by one PC or shared among multiple PCs.',
                icon: 'durability'
            },
            {
                title: 'High-Performance Cutting',
                description: 'Delivers unrivaled precision, speed, and reliability through digitally controlled servo system with maximum speed up to 1020mm/sec.',
                icon: 'userfriendly'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'P4-60LX | P4-132LX' },
            { label: 'Max Cutting Width', value: '600mm (23.6in) | 1300mm (51.2in)' },
            { label: 'Max Cutting Length', value: '50m (164ft)' },
            { label: 'Type of Command', value: 'HP-GL, HP-GL/2' },
            { label: 'Max Material Thickness', value: '0.8mm' },
            { label: 'Dimension', value: '230mm*870mm*255mm' },
            { label: 'Max Cutting Force', value: '500g' },
            { label: 'Max Cutting Speed', value: '1020 mm/sec (40ips) (AT 45° DIRECTION)' },
            { label: 'Voltage', value: 'AC 100-240V' },
            { label: 'Motor Drive', value: 'DC Servo Control' }
        ],
        applications: [
            'Car Decals',
            'Box Packaging',
            'Vinyl Sign/Custom Decal',
            'Food Label',
            'Colored Sticker',
            'Sign Making',
            'Graphics Production',
            'Vehicle Graphics',
            'Window Graphics',
            'Promotional Materials'
        ],
        advantages: [
            'High-performance cutting with maximum speed up to 1020mm/sec',
            'Enhanced AAS II contour cutting system for precise registration mark detection',
            'Segmental positioning corrects crooked prints for improved accuracy',
            'Section cutting divides long plots for higher cutting quality',
            'Auto rotation detects material feeding direction automatically',
            'Ethernet connection enables efficient network operation',
            'Digitally controlled servo system for unrivaled precision and reliability',
            'Low investment cost with best cutting performance',
            'Multiple model options: P4-60LX and P4-132LX',
            'Ideal solution for professional sign makers'
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
            <main className="gcc-puma-main">
                {/* Product Hero Section */}
                <section className="gcc-puma-hero product-hero">
                    <div className="gcc-puma-hero-layout">
                        <div className="gcc-puma-hero-left">
                            <h1 className="gcc-puma-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="gcc-puma-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="gcc-puma-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="gcc-puma-view-btn large"
                                >
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="gcc-puma-btn-secondary large"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="gcc-puma-hero-stats product-stats">
                                <div className="gcc-puma-stat">
                                    <span className="gcc-puma-stat-number">1020mm/s</span>
                                    <span className="gcc-puma-stat-label">Max Speed</span>
                                </div>
                                <div className="gcc-puma-stat">
                                    <span className="gcc-puma-stat-number">500g</span>
                                    <span className="gcc-puma-stat-label">Max Force</span>
                                </div>
                                <div className="gcc-puma-stat">
                                    <span className="gcc-puma-stat-number">AAS II</span>
                                    <span className="gcc-puma-stat-label">Technology</span>
                                </div>
                            </div>
                        </div>
                        <div className="gcc-puma-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="gcc-puma-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="gcc-puma-overview-section">
                    <div className="gcc-puma-overview-container">
                        <h2 className="gcc-puma-section-title">Product Overview</h2>
                        <p className="gcc-puma-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="gcc-puma-features-section">
                    <div className="gcc-puma-features-container">
                        <div className="gcc-puma-features-header">
                            <h2 className="gcc-puma-features-title">Key Features</h2>
                            <p className="gcc-puma-features-subtitle">
                                Advanced cutting technology meets professional performance
                            </p>
                        </div>

                        <div className="gcc-puma-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="gcc-puma-feature-card">
                                    <div className="gcc-puma-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="gcc-puma-feature-title">{feature.title}</h3>
                                    <p className="gcc-puma-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="gcc-puma-specs-section">
                    <div className="gcc-puma-specs-container">
                        <h2 className="gcc-puma-section-title">Technical Specifications</h2>
                        <div className="gcc-puma-specs-grid">
                            <div className="gcc-puma-spec-card">
                                <h3 className="gcc-puma-spec-card-title">Cutting Specifications</h3>
                                {machineDetails.specifications.slice(0, 8).map((spec, index) => (
                                    <div key={index} className="gcc-puma-spec-item">
                                        <span className="gcc-puma-spec-label">{spec.label}:</span>
                                        <span className="gcc-puma-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="gcc-puma-spec-card">
                                <h3 className="gcc-puma-spec-card-title">Performance Specifications</h3>
                                {machineDetails.specifications.slice(8).map((spec, index) => (
                                    <div key={index} className="gcc-puma-spec-item">
                                        <span className="gcc-puma-spec-label">{spec.label}:</span>
                                        <span className="gcc-puma-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="gcc-puma-applications-section">
                    <div className="gcc-puma-applications-container">
                        <h2 className="gcc-puma-section-title">Applications</h2>
                        <p className="gcc-puma-applications-subtitle">
                            Versatile cutting solutions for professional applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="gcc-puma-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="gcc-puma-applications-image-grid">
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Car Decals" />
                                    <p>Car Decals</p>
                                </div>
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Box Packaging" />
                                    <p>Box Packaging</p>
                                </div>
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Vinyl Sign/Custom Decal" />
                                    <p>Vinyl Sign/Custom Decal</p>
                                </div>
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Food Label" />
                                    <p>Food Label</p>
                                </div>
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Colored Sticker" />
                                    <p>Colored Sticker</p>
                                </div>
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Sign Making" />
                                    <p>Sign Making</p>
                                </div>
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Graphics Production" />
                                    <p>Graphics Production</p>
                                </div>
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Vehicle Graphics" />
                                    <p>Vehicle Graphics</p>
                                </div>
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Window Graphics" />
                                    <p>Window Graphics</p>
                                </div>
                                <div className="gcc-puma-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Materials" />
                                    <p>Promotional Materials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="gcc-puma-advantages-section">
                    <div className="gcc-puma-advantages-container">
                        <h2 className="gcc-puma-section-title">Why Choose GCC Puma IV?</h2>
                        <div className="gcc-puma-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="gcc-puma-advantage-item">
                                    <svg className="gcc-puma-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="gcc-puma-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="gcc-puma-modal-overlay" onClick={closeInquiryModal}>
                    <div className="gcc-puma-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="gcc-puma-inquiry-header">
                            <h2>Machine Inquiry - {machineDetails.name}</h2>
                            <button onClick={closeInquiryModal} className="gcc-puma-close-btn">
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="gcc-puma-inquiry-form">
                            <div className="gcc-puma-form-row">
                                <div className="gcc-puma-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="gcc-puma-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="gcc-puma-form-row">
                                <div className="gcc-puma-form-group">
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
                                <div className="gcc-puma-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="gcc-puma-phone-input">
                                        <select name="countryCode" className="gcc-puma-country-select" defaultValue="+63">
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

                            <div className="gcc-puma-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="gcc-puma-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your cutting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="gcc-puma-form-actions">
                                <button type="submit" className="gcc-puma-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="gcc-puma-btn-secondary">
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
