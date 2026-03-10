"use client";
import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './sublimation-dtf.css';

export default function SublimationDTF() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const sublimationDTFMachines = [
        {
            id: 'sublimation-printer-fd6198e',
            name: 'Sublimation Printer FD6198E',
            image: '/sublimation_dtf/SUBL Sublimation Printer FD6198E (1).png',
            description: 'INDUSTRIAL SUBLIMATION PRINTING - High-resolution sublimation printer FD6198E with industrial-grade components for continuous operation and superior print quality.',
            specs: [
                'Print Resolution: 1440 DPI',
                'Print Width: 61 inches',
                'Speed: High production',
                'Ink System: 8-color'
            ],
            badge: 'Industrial',
            price: 'Contact us for more details',
            link: '/sublimation-printer-fd6198e'
        },
        {
            id: 'kirin-da182t-plus',
            name: 'Kirin DA182T Plus Sublimation Printer',
            image: '/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).png',
            description: 'PREMIUM SUBLIMATION PRINTING - Kirin DA182T Plus with advanced print head technology and premium ink system for exceptional color reproduction and print quality.',
            specs: [
                'Print Head: Advanced Technology',
                'Color System: 6-color',
                'Print Speed: High efficiency',
                'Media Handling: Professional'
            ],
            badge: 'Premium',
            price: 'Contact us for more details',
            link: '/kirin'
        },
        {
            id: 'r2000-roller-sublimation',
            name: 'R2000 Roller Type Sublimation Machine GS 1200',
            image: '/sublimation_dtf/SUBL R2000 Roller Type Sublimation Machine GS 1200 (1).png',
            description: 'HIGH-PERFORMANCE ROLLER SUBLIMATION - Professional roller-type sublimation machine with GS 1200 technology for continuous heat transfer applications and large-scale production.',
            specs: [
                'Print Width: up to 1200mm',
                'Speed: up to 120 sqm/hr',
                'Temperature: 200°C max',
                'Pressure: Automatic control'
            ],
            badge: 'Professional',
            price: 'Contact us for more details',
            link: '/r2000-roller'
        },
        {
            id: 'dual-pneumatic-sublimation',
            name: 'Dual Pneumatic Sublimation Machine 80cm x 100cm',
            image: '/sublimation_dtf/SUBL Dual Pneumatic Sublimation Machine 80cm x 100cm (1).png',
            description: 'PRECISION DUAL PNEUMATIC SYSTEM - Advanced dual pneumatic sublimation press with large 80x100cm platen for oversized garments and professional applications.',
            specs: [
                'Platen Size: 80cm x 100cm',
                'Dual Pneumatic: Yes',
                'Temperature: Up to 220°C',
                'Pressure: Adjustable'
            ],
            badge: 'Large Format',
            price: 'Contact us for more details',
            link: '/dual-pneumatic'
        },
        {
            id: 'smart-sublimation',
            name: 'Smart Sublimation',
            image: '/sublimation_dtf/SUBL Smart Sublimation (1).png',
            description: 'INTELLIGENT SUBLIMATION SOLUTION - Smart sublimation system with automated controls, temperature monitoring, and intelligent pressure adjustment for consistent results.',
            specs: [
                'Smart Controls: Touchscreen',
                'Auto Temperature: Yes',
                'Digital Timer: Precision',
                'Safety Features: Advanced'
            ],
            badge: 'Smart Tech',
            price: 'Contact us for more details',
            link: '/smart-sublimation'
        },
        // {
        //     id: 'dtf-uv-printer-sf303',
        //     name: 'DTF UV Printer SF303-i3200 2ft',
        //     image: '/sublimation_dtf/DTF UV Printer SF303-i3200 2ft (1).png',
        //     description: 'COMPACT DTF UV PRINTING - Professional 2ft DTF UV printer SF303 with i3200 print head technology for direct-to-film applications and custom transfers.',
        //     specs: [
        //         'Print Width: 24 inches (2ft)',
        //         'Print Head: i3200',
        //         'UV Curing: LED system',
        //         'Film Handling: Automatic'
        //     ],
        //     badge: 'Compact',
        //     price: 'Contact us for more details',
        //     link: '/products/dtf/sf303-i3200'
        // },
        // {
        //     id: 'dtf-uv-printer-sf604',
        //     name: 'DTF UV Printer SF604-i3200 2ft - High Res',
        //     image: '/sublimation_dtf/DTF UV Printer SF604-i3200 2ft. - High Res (1).png',
        //     description: 'HIGH-RESOLUTION DTF PRINTING - Premium DTF UV printer SF604 with enhanced i3200 technology and high-resolution capabilities for superior print quality.',
        //     specs: [
        //         'Print Width: 24 inches (2ft)',
        //         'Resolution: High definition',
        //         'Print Head: Enhanced i3200',
        //         'Quality: Professional grade'
        //     ],
        //     badge: 'High Resolution',
        //     price: 'Contact us for more details',
        //     link: '/products/dtf/sf604-high-res'
        // },
        // {
        //     id: 'luxor-rtr',
        //     name: 'Luxor RTR',
        //     image: '/sublimation_dtf/DTF Luxor RTR (1).png',
        //     description: 'ROLL-TO-ROLL DTF SYSTEM - Advanced Luxor RTR system for continuous roll-to-roll DTF printing with automated feeding and take-up for efficient production.',
        //     specs: [
        //         'System Type: Roll-to-Roll',
        //         'Automation: Full feeding',
        //         'Production: Continuous',
        //         'Efficiency: Maximum'
        //     ],
        //     badge: 'Automated',
        //     price: 'Contact us for more details',
        //     link: '/products/dtf/luxor-rtr'
        // },
        {
            id: 'smart-dtf-powder-shaker-w650',
            name: 'Smart DTF Powder Shaker W650-4C',
            image: '/sublimation_dtf/Powder shaker D650 Model.png',
            description: 'INTELLIGENT POWDER APPLICATION - Smart DTF powder shaker W650 with 4-color capability and intelligent powder distribution for consistent DTF film preparation.',
            specs: [
                'Width Capacity: 650mm',
                'Color System: 4-color',
                'Distribution: Intelligent',
                'Operation: Automated'
            ],
            badge: 'Smart',
            price: 'Contact us for more details',
            link: '/smart-dtf-powder-shaker'
        },
        {
            id: 'smart-dtf-machine',
            name: 'SMART DTF Machine',
            image: '/sublimation_dtf/DTF SMART DTF Machine (1).png',
            description: 'COMPLETE DTF SOLUTION - All-in-one smart DTF machine with integrated printing, powder application, and curing system for streamlined DTF production workflow.',
            specs: [
                'System: All-in-one',
                'Integration: Complete workflow',
                'Smart Controls: Yes',
                'Production: Streamlined'
            ],
            badge: 'All-in-One',
            price: 'Contact us for more details',
            link: '/smart-dtf-machine'
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
            <main className="sublimation-dtf-main">
                {/* Hero Section */}
                <section className="sublimation-dtf-hero">
                    <div className="sublimation-dtf-hero-content">
                        <h1 className="sublimation-dtf-hero-title">
                            Professional Sublimation & DTF Machines
                        </h1>
                        <p className="sublimation-dtf-hero-subtitle">
                            Advanced heat transfer and direct-to-film printing solutions for custom apparel, promotional items, and professional applications.
                        </p>
                    </div>
                </section>

                {/* Machines Section */}
                <section className="sublimation-dtf-machines-section">
                    <div className="sublimation-dtf-section-header">
                        <h2 className="sublimation-dtf-section-title">Sublimation & DTF Machine Collection</h2>
                        <p className="sublimation-dtf-section-subtitle">
                            Professional heat transfer solutions for every application
                        </p>
                    </div>

                    <div className="sublimation-dtf-machines-grid">
                        {sublimationDTFMachines.map((machine, index) => (
                            <div key={machine.id} className="sublimation-dtf-machine-card">
                                <div className="sublimation-dtf-machine-image">
                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    <div className="sublimation-dtf-machine-badge">
                                        {machine.badge}
                                    </div>
                                </div>
                                <div className="sublimation-dtf-machine-content">
                                    <h3 className="sublimation-dtf-machine-title">{machine.name}</h3>
                                    <p className="sublimation-dtf-machine-description">
                                        {machine.description}
                                    </p>
                                    <div className="sublimation-dtf-machine-specs">
                                        {machine.specs.map((spec, specIndex) => (
                                            <div key={specIndex} className="sublimation-dtf-spec-item">
                                                <div className="sublimation-dtf-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="sublimation-dtf-machine-action">
                                        <Link
                                            href={machine.link}
                                            className="sublimation-dtf-view-btn"
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
                                            className="sublimation-dtf-machine-price sublimation-dtf-clickable-price"
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
                <section className="sublimation-dtf-features-section">
                    <div className="sublimation-dtf-section-header">
                        <h2 className="sublimation-dtf-section-title">Advanced Features</h2>
                        <p className="sublimation-dtf-section-subtitle">
                            Professional heat transfer technology for superior results
                        </p>
                    </div>

                    <div className="sublimation-dtf-features-grid">
                        <div className="sublimation-dtf-feature-card">
                            <div className="sublimation-dtf-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>High-Resolution Printing</h3>
                            <p>Advanced print head technology delivers exceptional print quality with vibrant colors and sharp details for professional results.</p>
                        </div>

                        <div className="sublimation-dtf-feature-card">
                            <div className="sublimation-dtf-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3>Fast Production Speed</h3>
                            <p>High-speed printing and heat transfer capabilities maximize productivity and efficiency for commercial applications.</p>
                        </div>

                        <div className="sublimation-dtf-feature-card">
                            <div className="sublimation-dtf-feature-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3>Versatile Applications</h3>
                            <p>Compatible with various substrates including textiles, ceramics, metals, and specialty materials for diverse applications.</p>
                        </div>


                    </div>
                </section>


            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="sublimation-dtf-modal-overlay" onClick={closeInquiryModal}>
                    <div className="sublimation-dtf-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="sublimation-dtf-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button
                                className="sublimation-dtf-close-btn"
                                onClick={closeInquiryModal}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="sublimation-dtf-inquiry-form">
                            <div className="sublimation-dtf-form-row">
                                <div className="sublimation-dtf-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="sublimation-dtf-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="sublimation-dtf-form-row">
                                <div className="sublimation-dtf-form-group">
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
                                <div className="sublimation-dtf-form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="sublimation-dtf-phone-input">
                                        <select name="countryCode" className="sublimation-dtf-country-select" defaultValue="+63">
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

                            <div className="sublimation-dtf-form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" />
                            </div>

                            <div className="sublimation-dtf-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your sublimation/DTF machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="sublimation-dtf-form-actions">
                                <button type="submit" className="sublimation-dtf-btn-primary">
                                    Send Inquiry
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="sublimation-dtf-btn-secondary">
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