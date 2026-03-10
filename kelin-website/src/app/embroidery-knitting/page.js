"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './embroidery-knitting.css';

export default function EmbroideryKnittingMachine() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const embroideryMachines = [
        {
            id: 'promaker-1201',
            name: 'Promaker Embroidery 1201',
            image: '/embroidery_knitting/Promaker Embroidery 1201.png',
            description: 'PROFESSIONAL EMBROIDERY MACHINE - High-precision single-head embroidery machine with advanced stitch control and professional-grade embroidery capabilities with industrial max speed up to 1200 RPM.',
            specs: [
                'Type: Single-head embroidery',
                'Model: Promaker 1201',
                'Embroidery Area: 360mm x 200mm',
                'Max Speed: 1200 RPM with mater jump'
            ],
            badge: 'Professional',
            price: 'Contact us for more details',
            link: '/promaker-embroidery-1201'
        },
        {
            id: 'promaker-1202',
            name: 'Promaker Embroidery 1202',
            image: '/embroidery_knitting/Promaker Embroidery 1202.png',
            description: 'ADVANCED EMBROIDERY SYSTEM - Enhanced dual-head embroidery machine with improved features and superior precision for high-quality embroidery production with industrial max speed up to 1200 RPM.',
            specs: [
                'Type: Dual-head embroidery',
                'Model: Promaker 1202',
                'Embroidery Area: 1430mm x 620mm',
                'Max Speed: 1200 RPM with mater jump'
            ],
            badge: 'Advanced',
            price: 'Contact us for more details',
            link: '/promaker-embroidery-1202'
        },
        {
            id: 'promaker-1204',
            name: 'Promaker Embroidery 1804',
            image: '/embroidery_knitting/Promaker Embroidery 1204.png',
            description: 'PREMIUM EMBROIDERY SOLUTION - Top-tier embroidery machine with 4-head capability and professional features for large-scale embroidery operations with industrial max speed up to 1200 RPM.',
            specs: [
                'Type: Premium 4-head embroidery',
                'Model: Promaker 1804',
                'Embroidery Area: 1400mm x 2400mm',
                'Max Speed: 1200 RPM with mater jump'
            ],
            badge: 'Premium',
            price: 'Contact us for more details',
            link: '/promaker-embroidery-1204'
        },
        {
            id: 'smartex-knitting-gsce',
            name: 'Smartex Knitting Machine GS-CE152',
            image: '/embroidery_knitting/Smartex Knitting Machine GSCE-1-52.png',
            description: 'PROFESSIONAL KNITTING SYSTEM - Advanced knitting machine with 128-section precision stitch control and maximum knitting speed 1.4 m/s for industrial-grade textile manufacturing.',
            specs: [
                'Type: Computerized knitting',
                'Model: GS-CE152',
                'Knitting Width: 52 inches',
                'Max Speed: 1.4 m/s'
            ],
            badge: 'Knitting Pro',
            price: 'Contact us for more details',
            link: '/smartex-knitting-gsce-1-52'
        }
    ];

    const openInquiryModal = (machine) => {
        setSelectedMachine(machine);
        setInquiryModalOpen(true);
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
        setSelectedMachine(null);
    };

    const handleInquirySubmit = (e) => {
        e.preventDefault();
        alert('Inquiry submitted successfully!');
        closeInquiryModal();
    };

    return (
        <div>
            <Header />
            <main className="embroidery-main">
                {/* Hero Section */}
                <section className="embroidery-hero">
                    <div className="embroidery-hero-content">
                        <h1 className="embroidery-hero-title">
                            Professional Embroidery & Knitting Machines
                        </h1>
                        <p className="embroidery-hero-subtitle">
                            Advanced embroidery and knitting solutions for textile manufacturing with precision stitch control and professional-grade capabilities for commercial applications.
                        </p>
                    </div>
                </section>

                {/* Machines Section */}
                <section className="embroidery-machines-section">
                    <div className="embroidery-section-header">
                        <h2 className="embroidery-section-title">Embroidery & Knitting Machine Collection</h2>
                        <p className="embroidery-section-subtitle">
                            Professional textile manufacturing solutions for every application
                        </p>
                    </div>

                    <div className="embroidery-machines-grid">
                        {embroideryMachines.map((machine, index) => (
                            <div key={machine.id} className="embroidery-machine-card">
                                <div className="embroidery-machine-image">
                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    <div className="embroidery-machine-badge">
                                        {machine.badge}
                                    </div>
                                </div>
                                <div className="embroidery-machine-content">
                                    <h3 className="embroidery-machine-title">{machine.name}</h3>
                                    <p className="embroidery-machine-description">
                                        {machine.description}
                                    </p>
                                    <div className="embroidery-machine-specs">
                                        {machine.specs.map((spec, specIndex) => (
                                            <div key={specIndex} className="embroidery-spec-item">
                                                <div className="embroidery-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="embroidery-machine-action">
                                        <Link
                                            href={machine.link}
                                            className="embroidery-view-btn"
                                        >
                                            Read More
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                        <span
                                            className="embroidery-machine-price embroidery-clickable-price"
                                            onClick={() => openInquiryModal(machine)}
                                        >
                                            {machine.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features Section */}
                <section className="embroidery-features-section">
                    <div className="embroidery-features-container">
                        <div className="embroidery-features-header">
                            <h2 className="embroidery-features-title">Advanced Textile Technology</h2>
                            <p className="embroidery-section-subtitle">
                                Cutting-edge embroidery and knitting technology for superior results
                            </p>
                        </div>

                        <div className="embroidery-features-grid">
                            <div className="embroidery-feature-card">
                                <div className="embroidery-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <h3>Precision Stitching</h3>
                                <p>Advanced stitch control systems deliver exceptional embroidery accuracy with precise positioning for professional-quality textile work.</p>
                            </div>

                            <div className="embroidery-feature-card">
                                <div className="embroidery-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                </div>
                                <h3>High-Speed Production</h3>
                                <p>Superior embroidery and knitting speeds with consistent quality, maximizing productivity for commercial textile manufacturing.</p>
                            </div>

                            <div className="embroidery-feature-card">
                                <div className="embroidery-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                    </svg>
                                </div>
                                <h3>Versatile Materials</h3>
                                <p>Compatible with various fabrics, threads, and textile materials for diverse embroidery and knitting applications across industries.</p>
                            </div>
                        </div>
                    </div>
                </section>


            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="embroidery-modal-overlay" onClick={closeInquiryModal}>
                    <div className="embroidery-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="embroidery-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button
                                className="embroidery-close-btn"
                                onClick={closeInquiryModal}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="embroidery-inquiry-form">
                            <div className="embroidery-form-row">
                                <div className="embroidery-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="embroidery-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="embroidery-form-row">
                                <div className="embroidery-form-group">
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
                                <div className="embroidery-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="embroidery-phone-input">
                                        <select name="countryCode" className="embroidery-country-select" defaultValue="+63">
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

                            <div className="embroidery-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="embroidery-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your embroidery or knitting machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="embroidery-form-actions">
                                <button type="submit" className="embroidery-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="embroidery-btn-secondary">
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