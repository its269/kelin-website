"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './hanniu-k1390-co2-laser-150w-ccd.css';

export default function HanniuK1390CO2Laser150WCCD() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 150w with CCD.webp');
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
        name: 'Hanniu K1390',
        model: 'CO2 LASER CUTTING MACHINE WITH CCD',
        images: [
            '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 150w with CCD.webp',
            '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 150w with CCD.webp',
        ],
        shortDescription: 'Industrial-grade CO2 laser cutting machine with CCD vision system for precision cutting at 64000 mm/min engraving speed, delivering accurate border detection and contour recognition.',
        detailedDescription: 'The Hanniu K1390 CO2 Laser Cutting Machine with CCD combines ultra high-definition camera technology with automatic positioning for accurate border detection and contour recognition. Featuring an all-in-one standalone operation with computer-integrated software, this machine offers industrial-grade speed of up to 64000 mm/min with a smart CCD camera and auto border detection system for freely converted precision cutting.',
        features: [
            {
                title: 'All-In-One Standalone Operation',
                description: 'With a computer with a single machine, the software is easy to operate and humanized, providing seamless integration and user-friendly controls.',
                icon: 'computer'
            },
            {
                title: 'Smart CCD Camera with Auto Border Detection',
                description: 'Equipped with industrial camera, CCD automatic positioning system automatically looks for the border, camera and array cutting can be freely converted for enhanced precision.',
                icon: 'camera'
            },
            {
                title: 'Enhanced Precision with Large-View Camera',
                description: 'The larger camera recognizes the amplitude, cutting more accurate, finer lines, and cutting the product better with superior accuracy.',
                icon: 'precision'
            },
            {
                title: 'Suitable Material',
                description: 'Works with fabric, leather, plexiglass, acrylic, plastic, rubber, tile, wood products, bamboo, products, wool paper, materials, ceramic sand other non-metallic materials.',
                icon: 'materials'
            }
        ],
        specifications: [
            { label: 'Model', value: 'AK-1390N' },
            { label: 'Laser power', value: '80W/90W/100W/130W/150W' },
            { label: 'Resolution', value: '0.025mm' },
            { label: 'Resetting Positioning accuracy', value: '+0.1mm' },
            { label: 'Support humidity', value: '5%-95%(non condensed water)' },
            { label: 'Power', value: 'AC220V+10%,50Hz/60Hz+1/3800W' },
            { label: 'Net weight', value: '450KG' },
            { label: 'Engraving area', value: '1300x900mm' },
            { label: 'Engraving speed', value: '0-64000mm/min' },
            { label: 'Minimum shaping character', value: 'Chinese Character: 2mm Letter: 1mm' },
            { label: 'Transmission', value: 'Linear Guide' },
            { label: 'Graphic format supported', value: 'BMP,GIF,JPG,PCX,TGA,TIFF,PLT,CDR,DMG,DXF etc' },
            { label: 'Cooling method', value: 'Water' },
            { label: 'Dimension', value: '1900x1520x1030mm' }
        ],
        applications: [
            'Fabric cutting',
            'Leather processing',
            'Plexiglass cutting',
            'Acrylic engraving',
            'Plastic materials',
            'Rubber cutting',
            'Tile engraving',
            'Wood products',
            'Bamboo crafts',
            'Paper materials',
            'Ceramic processing',
            'Non-metallic materials'
        ],
        advantages: [
            'Industrial-grade 64000 mm/min engraving speed',
            'CCD vision system for precision cutting',
            'Automatic border detection',
            'Ultra high-definition camera positioning',
            'All-in-one standalone computer operation',
            'Easy-to-use humanized software',
            'Large-view camera for enhanced accuracy',
            'Array cutting and free conversion',
            'Linear guide transmission system',
            'Water cooling method',
            'Supports multiple graphic formats',
            'Suitable for diverse non-metallic materials'
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
            <main className="hanniu-k1390-main">
                {/* Product Hero Section */}
                <section className="hanniu-k1390-hero product-hero">
                    <div className="hanniu-k1390-hero-layout">
                        <div className="hanniu-k1390-hero-left">
                            <h1 className="hanniu-k1390-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="hanniu-k1390-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="hanniu-k1390-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="hanniu-k1390-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="hanniu-k1390-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="hanniu-k1390-hero-stats product-stats">
                                <div className="hanniu-k1390-stat">
                                    <span className="hanniu-k1390-stat-number">64000</span>
                                    <span className="hanniu-k1390-stat-label">mm/min</span>
                                </div>
                                <div className="hanniu-k1390-stat">
                                    <span className="hanniu-k1390-stat-number">CCD</span>
                                    <span className="hanniu-k1390-stat-label">Vision</span>
                                </div>
                                <div className="hanniu-k1390-stat">
                                    <span className="hanniu-k1390-stat-number">150W</span>
                                    <span className="hanniu-k1390-stat-label">Power</span>
                                </div>
                            </div>
                        </div>
                        <div className="hanniu-k1390-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="hanniu-k1390-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="hanniu-k1390-overview-section">
                    <div className="hanniu-k1390-overview-container">
                        <h2 className="hanniu-k1390-section-title">Product Overview</h2>
                        <p className="hanniu-k1390-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="hanniu-k1390-features-section">
                    <div className="hanniu-k1390-features-container">
                        <div className="hanniu-k1390-features-header">
                            <h2 className="hanniu-k1390-features-title">Key Features</h2>
                            <p className="hanniu-k1390-features-subtitle">
                                CCD vision system for precision cutting
                            </p>
                        </div>

                        <div className="hanniu-k1390-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="hanniu-k1390-feature-card">
                                    <div className="hanniu-k1390-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="hanniu-k1390-feature-title">{feature.title}</h3>
                                    <p className="hanniu-k1390-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="hanniu-k1390-specs-section">
                    <div className="hanniu-k1390-specs-container">
                        <h2 className="hanniu-k1390-section-title">Technical Specifications</h2>
                        <p className="hanniu-k1390-section-subtitle">
                            Complete technical details for K1390 CO2 Laser Cutting Machine with CCD
                        </p>
                        <div className="hanniu-k1390-specs-grid">
                            <div className="hanniu-k1390-spec-card">
                                <h3 className="hanniu-k1390-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="hanniu-k1390-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="hanniu-k1390-spec-item">
                                            <div className="hanniu-k1390-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="hanniu-k1390-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="hanniu-k1390-applications-section">
                    <div className="hanniu-k1390-applications-container">
                        <h2 className="hanniu-k1390-section-title">Application Materials</h2>
                        <p className="hanniu-k1390-applications-subtitle">
                            Professional CO2 laser cutting for diverse non-metallic materials
                        </p>
                        <div
                            ref={scrollRef}
                            className="hanniu-k1390-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="hanniu-k1390-applications-image-grid">
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Fabric cutting" />
                                    <p>Fabric cutting</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Leather processing" />
                                    <p>Leather processing</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Plexiglass cutting" />
                                    <p>Plexiglass cutting</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Acrylic engraving" />
                                    <p>Acrylic engraving</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Plastic materials" />
                                    <p>Plastic materials</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Rubber cutting" />
                                    <p>Rubber cutting</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0000_6.jpg" alt="Tile engraving" />
                                    <p>Tile engraving</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0001_5.jpg" alt="Wood products" />
                                    <p>Wood products</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0002_4.jpg" alt="Bamboo crafts" />
                                    <p>Bamboo crafts</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0003_3.jpg" alt="Paper materials" />
                                    <p>Paper materials</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0004_2.jpg" alt="Ceramic processing" />
                                    <p>Ceramic processing</p>
                                </div>
                                <div className="hanniu-k1390-application-image-item">
                                    <img src="/application/_0005_1.jpg" alt="Non-metallic materials" />
                                    <p>Non-metallic materials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="hanniu-k1390-advantages-section">
                    <div className="hanniu-k1390-advantages-container">
                        <h2 className="hanniu-k1390-section-title">Why Choose K1390 CO2 Laser with CCD?</h2>
                        <div className="hanniu-k1390-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="hanniu-k1390-advantage-item">
                                    <div className="hanniu-k1390-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="hanniu-k1390-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="hanniu-k1390-modal-overlay" onClick={closeInquiryModal}>
                    <div className="hanniu-k1390-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="hanniu-k1390-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="hanniu-k1390-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="hanniu-k1390-inquiry-form">
                            <div className="hanniu-k1390-form-row">
                                <div className="hanniu-k1390-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="hanniu-k1390-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="hanniu-k1390-form-row">
                                <div className="hanniu-k1390-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="hanniu-k1390-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>

                            <div className="hanniu-k1390-form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <div className="hanniu-k1390-phone-input">
                                    <select className="hanniu-k1390-country-select" name="countryCode" defaultValue="+63">
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

                            <div className="hanniu-k1390-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laser cutting needs, materials, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="hanniu-k1390-form-actions">
                                <button type="submit" className="hanniu-k1390-btn-primary">Send Inquiry</button>
                                <button type="button" onClick={closeInquiryModal} className="hanniu-k1390-btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
