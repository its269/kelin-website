"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef } from 'react';
import './automatic-uv-crystal-flat-pasting.css';

export default function AutomaticUVCrystalFlatPasting() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/uv-machines/Automatic UV Crystal Flat Pasting Machine 3.82m x 1.72m (1).png');

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
        name: 'AUTOMATIC UV CRYSTAL FLAT PASTING MACHINE',
        model: 'UV CRYSTAL LAMINATING MACHINE',
        images: [
            '/uv-machines/Automatic UV Crystal Flat Pasting Machine 3.82m x 1.72m (1).png',
            '/uv-machines/Automatic UV Crystal Flat Pasting Machine 3.82m x 1.72m (1).png',
        ],
        shortDescription: 'FULLY INTEGRATED 3-IN-1 OPERATION - Lamination, Gluing, and UV Curing. Integrates UV glue, hot melt adhesive, and crystal film covering in one system—eliminating separate machines and enhancing workflow efficiency.',
        detailedDescription: 'The Automatic UV Crystal Flat Pasting Machine offers a fully integrated 3-in-1 operation combining lamination, gluing, and UV curing in one compact unit. With a lamination width up to 1260mm, this versatile machine features smart touchscreen control, high temperature-resistant silicone shaft, and large format capability—perfect for advertising billboards, background walls, and decorative industries.',
        features: [
            {
                title: 'Smart Touchscreen Control System',
                description: '7-inch display with CNC control for speed, temperature, glue, and size settings for precise operation.',
                icon: 'precision'
            },
            {
                title: 'High Temperature-Resistant Silicone Shaft',
                description: 'Ensures uniform gluing and heating without damaging materials, ideal for sensitive or high-detail lamination applications.',
                icon: 'accuracy'
            },
            {
                title: 'Versatile Media Compatibility',
                description: 'Supports a wide range of materials, including oil painting cloth, wallpaper, tin film, hot melt adhesives, and UV-coated film, offering broad usability for advertising and decorative industries.',
                icon: 'media'
            },
            {
                title: 'Large Format Capability',
                description: 'Handles media sizes up to 1260mm wide and fits large-scale projects with its 3820mm length and 1720mm width—perfect for sensation signage.',
                icon: 'durability'
            }
        ],
        specifications: [
            { label: 'Rated Voltage', value: 'AC 220V/50 Hz' },
            { label: 'Rated Power', value: '500W-3600W' },
            { label: 'Control Method', value: '7-inch touch screen/high-speed microcomputer chip control' },
            { label: 'Scope of Application', value: 'Production of advertising billboards, background walls, etc.' },
            { label: 'Working Voltage', value: 'AC 220V/50 Hz | AC 380V/50 Hz' },
            { label: 'Applicable Size', value: 'Up to 1260 mm width' },
            { label: 'Overall Dimensions', value: '3820 mm x 1720 mm x 1450 mm (h)' }
        ],
        applications: [
            'Advertising Billboard Production',
            'Background Wall Decoration',
            'Oil Painting Cloth Lamination',
            'Wallpaper Application',
            'Tin Film Covering',
            'Hot Melt Adhesive Applications',
            'UV-Coated Film Lamination',
            'Large Format Signage',
            'Commercial Interior Graphics',
            'Decorative Industry Applications',
            'Exhibition Display Graphics',
            'Retail Environment Decoration'
        ],
        advantages: [
            '3-in-1 integrated system: lamination, gluing, and UV curing',
            'Smart 7-inch touchscreen with CNC control',
            'High temperature-resistant silicone shaft for uniform application',
            'Large format capability up to 1260mm width',
            'Versatile media compatibility for diverse materials',
            'Eliminates need for multiple separate machines',
            'Enhanced workflow efficiency and productivity',
            'Precise speed and temperature control',
            'Ideal for advertising and decorative industries',
            'Professional-grade lamination quality',
            'Robust construction for industrial use',
            'Cost-efficient integrated solution'
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
            <main className="auto-uv-crystal-main">
                {/* Product Hero Section */}
                <section className="auto-uv-crystal-hero product-hero">
                    <div className="auto-uv-crystal-hero-layout">
                        <div className="auto-uv-crystal-hero-left">
                            <h1 className="auto-uv-crystal-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="auto-uv-crystal-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="auto-uv-crystal-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="auto-uv-crystal-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="auto-uv-crystal-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="auto-uv-crystal-hero-stats product-stats">
                                <div className="auto-uv-crystal-stat">
                                    <span className="auto-uv-crystal-stat-number">1260mm</span>
                                    <span className="auto-uv-crystal-stat-label">Max Width</span>
                                </div>
                                <div className="auto-uv-crystal-stat">
                                    <span className="auto-uv-crystal-stat-number">3-in-1</span>
                                    <span className="auto-uv-crystal-stat-label">Integration</span>
                                </div>
                                <div className="auto-uv-crystal-stat">
                                    <span className="auto-uv-crystal-stat-number">7"</span>
                                    <span className="auto-uv-crystal-stat-label">Touch Control</span>
                                </div>
                            </div>
                        </div>
                        <div className="auto-uv-crystal-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="auto-uv-crystal-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="auto-uv-crystal-overview-section">
                    <div className="auto-uv-crystal-overview-container">
                        <h2 className="auto-uv-crystal-section-title">Product Overview</h2>
                        <p className="auto-uv-crystal-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="auto-uv-crystal-features-section">
                    <div className="auto-uv-crystal-features-container">
                        <div className="auto-uv-crystal-features-header">
                            <h2 className="auto-uv-crystal-features-title">Key Features</h2>
                            <p className="auto-uv-crystal-features-subtitle">
                                Advanced UV crystal laminating technology for professional applications
                            </p>
                        </div>

                        <div className="auto-uv-crystal-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="auto-uv-crystal-feature-card">
                                    <div className="auto-uv-crystal-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="auto-uv-crystal-feature-title">{feature.title}</h3>
                                    <p className="auto-uv-crystal-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="auto-uv-crystal-specs-section">
                    <div className="auto-uv-crystal-specs-container">
                        <h2 className="auto-uv-crystal-section-title">Technical Specifications</h2>
                        <p className="auto-uv-crystal-section-subtitle">
                            Complete technical details for Automatic UV Crystal Flat Pasting Machine
                        </p>
                        <div className="auto-uv-crystal-specs-grid">
                            <div className="auto-uv-crystal-spec-card">
                                <h3 className="auto-uv-crystal-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="auto-uv-crystal-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="auto-uv-crystal-spec-item">
                                            <div className="auto-uv-crystal-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="auto-uv-crystal-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="auto-uv-crystal-applications-section">
                    <div className="auto-uv-crystal-applications-container">
                        <h2 className="auto-uv-crystal-section-title">Applications</h2>
                        <p className="auto-uv-crystal-applications-subtitle">
                            Professional UV crystal laminating solutions for diverse applications
                        </p>
                        <div
                            ref={scrollRef}
                            className="auto-uv-crystal-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="auto-uv-crystal-applications-image-grid">
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="T-Shirt Printing" />
                                    <p>T-Shirt Printing</p>
                                </div>
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Mug Printing" />
                                    <p>Mug Printing</p>
                                </div>
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Signage & Banners" />
                                    <p>Signage & Banners</p>
                                </div>
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Promotional Products" />
                                    <p>Promotional Products</p>
                                </div>
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Custom Apparel" />
                                    <p>Custom Apparel</p>
                                </div>
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Phone Cases" />
                                    <p>Phone Cases</p>
                                </div>
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Sportswear" />
                                    <p>Sportswear</p>
                                </div>
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Home Decor" />
                                    <p>Home Decor</p>
                                </div>
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Packaging" />
                                    <p>Packaging</p>
                                </div>
                                <div className="auto-uv-crystal-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Labels & Stickers" />
                                    <p>Labels & Stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="auto-uv-crystal-advantages-section">
                    <div className="auto-uv-crystal-advantages-container">
                        <h2 className="auto-uv-crystal-section-title">Why Choose Automatic UV Crystal Flat Pasting Machine?</h2>
                        <div className="auto-uv-crystal-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="auto-uv-crystal-advantage-item">
                                    <svg className="auto-uv-crystal-advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <p className="auto-uv-crystal-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="auto-uv-crystal-modal-overlay" onClick={closeInquiryModal}>
                    <div className="auto-uv-crystal-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="auto-uv-crystal-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="auto-uv-crystal-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="auto-uv-crystal-inquiry-form">
                            <div className="auto-uv-crystal-form-row">
                                <div className="auto-uv-crystal-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="auto-uv-crystal-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="auto-uv-crystal-form-row">
                                <div className="auto-uv-crystal-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="auto-uv-crystal-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="auto-uv-crystal-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="auto-uv-crystal-phone-input">
                                    <select className="auto-uv-crystal-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="auto-uv-crystal-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laminating needs, expected volume, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="auto-uv-crystal-form-actions">
                                <button type="submit" className="auto-uv-crystal-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="auto-uv-crystal-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}