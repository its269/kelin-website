"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './handheld-fiber-laser.css';

export default function HandheldFiberLaser() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/Handheld Fiber Laser.png');
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
        name: 'TFZ-S Mini Handheld Laser Welding Machine',
        model: 'MINI HANDHELD LASER WELDING MACHINE',
        images: [
            '/laser-machines/Handheld Fiber Laser.png',
            '/laser-machines/Handheld Fiber Laser.png',
        ],
        shortDescription: 'The TFZ-S 1500W significantly reduces production time with high-speed laser welding, enabling rapid joint formation while maintaining superior accuracy and consistency.',
        detailedDescription: 'The TFZ-S 1500W significantly reduces production time with high-speed laser welding, enabling rapid joint formation while maintaining superior accuracy and consistency. This mini handheld laser welding machine is 5-10× faster than traditional welding methods, featuring industrial-grade speed of 120mm/s and a wire feeder for enhanced welding capabilities.',
        features: [
            {
                title: 'Fast Welding Speed',
                description: 'Welding is 5 to 10 times faster than traditional welding methods, dramatically boosting productivity and reducing overall work time.',
                icon: 'speed'
            },
            {
                title: 'Beginner-Friendly Operation',
                description: 'Simple interface and intuitive controls allow new users to start welding in just 10 minutes—no special skill training required.',
                icon: 'user'
            },
            {
                title: 'High-Quality Weld Finish',
                description: 'Produces smooth, clean welds without deformation, minimizing or eliminating the need for post-weld grinding or polishing.',
                icon: 'quality'
            },
            {
                title: 'Support Various Welding',
                description: 'Supports various welding types: butt, filler, lap, stitch — and adapts to a wide range of metals and industrial uses.',
                icon: 'versatile'
            }
        ],
        specifications: [
            { label: 'Product Model', value: 'TFZ-S' },
            { label: 'Fiber length', value: '10 meters for standard configuration | 15 meters for customization' },
            { label: 'Fiber laser', value: 'Fiber laser' },
            { label: 'Working mode', value: 'Continuous/Modulated pulse' },
            { label: 'Welding speed', value: '0-120mm/s Adjustable' },
            { label: 'Suitable material thickness', value: '0.5 mm to 6mm Adjustable' },
            { label: 'Power demand', value: '220V,50Hz/3380V,60HZ' },
            { label: 'Name', value: 'Handheld laser welding machine' },
            { label: 'Laser Power', value: '1000W/1500W/2000W' },
            { label: 'Laser wavelength', value: '1070-1080nm' },
            { label: 'Positioning system', value: 'Red light' },
            { label: 'Power stability', value: '98%' },
            { label: 'Gross power', value: '6000W' }
        ],
        applications: [
            'Elevator manufacturing',
            'Metal processing',
            'Machinery manufacturing',
            'Household appliances',
            'Aerospace industry',
            'Automotive manufacturing',
            'Kitchen equipment',
            'Steel structures',
            'Precision instruments',
            'Electronics industry',
            'Medical equipment',
            'Construction industry'
        ],
        advantages: [
            '5-10× faster than traditional welding',
            'Industrial-grade 120mm/s welding speed',
            'Beginner-friendly - start in 10 minutes',
            'No special training required',
            'Smooth, clean welds without deformation',
            'No post-weld grinding needed',
            'Wire feeder support included',
            'Multiple welding types: butt, filler, lap, stitch',
            'Suitable for 0.5mm to 6mm thickness',
            'High power stability (98%)',
            'Red light positioning system',
            'Continuous and modulated pulse modes'
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
            <main className="handheld-laser-main">
                {/* Product Hero Section */}
                <section className="handheld-laser-hero product-hero">
                    <div className="handheld-laser-hero-layout">
                        <div className="handheld-laser-hero-left">
                            <h1 className="handheld-laser-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="handheld-laser-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="handheld-laser-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="handheld-laser-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="handheld-laser-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="handheld-laser-hero-stats product-stats">
                                <div className="handheld-laser-stat">
                                    <span className="handheld-laser-stat-number">120mm/s</span>
                                    <span className="handheld-laser-stat-label">Speed</span>
                                </div>
                                <div className="handheld-laser-stat">
                                    <span className="handheld-laser-stat-number">5-10×</span>
                                    <span className="handheld-laser-stat-label">Faster</span>
                                </div>
                                <div className="handheld-laser-stat">
                                    <span className="handheld-laser-stat-number">1500W</span>
                                    <span className="handheld-laser-stat-label">Power</span>
                                </div>
                            </div>
                        </div>
                        <div className="handheld-laser-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="handheld-laser-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="handheld-laser-overview-section">
                    <div className="handheld-laser-overview-container">
                        <h2 className="handheld-laser-section-title">Product Overview</h2>
                        <p className="handheld-laser-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="handheld-laser-features-section">
                    <div className="handheld-laser-features-container">
                        <div className="handheld-laser-features-header">
                            <h2 className="handheld-laser-features-title">Key Features</h2>
                            <p className="handheld-laser-features-subtitle">
                                5-10× faster than traditional welding
                            </p>
                        </div>

                        <div className="handheld-laser-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="handheld-laser-feature-card">
                                    <div className="handheld-laser-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="handheld-laser-feature-title">{feature.title}</h3>
                                    <p className="handheld-laser-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="handheld-laser-specs-section">
                    <div className="handheld-laser-specs-container">
                        <h2 className="handheld-laser-section-title">Technical Specifications</h2>
                        <p className="handheld-laser-section-subtitle">
                            Complete technical details for TFZ-S Mini Handheld Laser Welding Machine
                        </p>
                        <div className="handheld-laser-specs-grid">
                            <div className="handheld-laser-spec-card">
                                <h3 className="handheld-laser-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="handheld-laser-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="handheld-laser-spec-item">
                                            <div className="handheld-laser-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="handheld-laser-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="handheld-laser-applications-section">
                    <div className="handheld-laser-applications-container">
                        <h2 className="handheld-laser-section-title">Application Industry</h2>
                        <p className="handheld-laser-applications-subtitle">
                            Professional laser welding solutions for diverse industrial applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="handheld-laser-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="handheld-laser-applications-image-grid">
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Elevator manufacturing" />
                                    <p>Elevator manufacturing</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Metal processing" />
                                    <p>Metal processing</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Machinery manufacturing" />
                                    <p>Machinery manufacturing</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Household appliances" />
                                    <p>Household appliances</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Aerospace industry" />
                                    <p>Aerospace industry</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Automotive manufacturing" />
                                    <p>Automotive manufacturing</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Kitchen equipment" />
                                    <p>Kitchen equipment</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Steel structures" />
                                    <p>Steel structures</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Precision instruments" />
                                    <p>Precision instruments</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Electronics industry" />
                                    <p>Electronics industry</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Medical equipment" />
                                    <p>Medical equipment</p>
                                </div>
                                <div className="handheld-laser-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Construction industry" />
                                    <p>Construction industry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="handheld-laser-advantages-section">
                    <div className="handheld-laser-advantages-container">
                        <h2 className="handheld-laser-section-title">Why Choose TFZ-S Handheld Laser Welding?</h2>
                        <div className="handheld-laser-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="handheld-laser-advantage-item">
                                    <div className="handheld-laser-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="handheld-laser-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="handheld-laser-modal-overlay" onClick={closeInquiryModal}>
                    <div className="handheld-laser-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="handheld-laser-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="handheld-laser-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="handheld-laser-inquiry-form">
                            <div className="handheld-laser-form-row">
                                <div className="handheld-laser-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="handheld-laser-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="handheld-laser-form-row">
                                <div className="handheld-laser-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="handheld-laser-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="handheld-laser-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="handheld-laser-phone-input">
                                    <select className="handheld-laser-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="handheld-laser-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laser welding needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="handheld-laser-form-actions">
                                <button type="submit" className="handheld-laser-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="handheld-laser-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
