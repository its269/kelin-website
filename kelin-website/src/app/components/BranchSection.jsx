"use client";
import { useState } from "react";
import "./branch-section.css";

export default function BranchSection() {
    const [selectedBranch, setSelectedBranch] = useState(0);

    const branches = [
        {
            id: 'manila',
            name: 'Manila Branch',
            address: '3M COMPOUND FIRST STREET WAREHOUSE 11 SANTA ROSA II MARILAO BULACAN',
            phone: '(02) 8711 1188',
            mobile: '0917 678 0608 | 0908 196 0836',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 14.7571, lng: 120.9497 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.234!2d120.9497!3d14.7571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ1JzI1LjYiTiAxMjDCsDU2JzU5LjAiRQ!5e0!3m2!1sen!2sph!4v1000000000000!5m2!1sen!2sph'
        },
        {
            id: 'bacolod',
            name: 'Bacolod Branch',
            address: 'Adc Warehouse Door A10 Alijis Road, Purok Pagasa, Brgy Alijis, Bacolod City. Landmark: SHOPEE HUB ALIJIS',
            phone: '446 6429',
            mobile: '0956 651 0022 | 0999 509 4908',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 10.6769, lng: 122.9785 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.345!2d122.9785!3d10.6769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQwJzM2LjgiTiAxMjLCsDU4JzQyLjYiRQ!5e0!3m2!1sen!2sph!4v1000000000001!5m2!1sen!2sph'
        },
        {
            id: 'cebu',
            name: 'Cebu Branch',
            address: 'F. Cabahug St. Kasambagan Mabolo, Cebu City',
            phone: '(032) 265-1014',
            mobile: '0933 195 6565',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 10.3317, lng: 123.9012 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.678!2d123.9012!3d10.3317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDk5JzU0LjEiTiAxMjPCsDU0JzA0LjMiRQ!5e0!3m2!1sen!2sph!4v1000000000002!5m2!1sen!2sph'
        },
        {
            id: 'naga',
            name: 'Naga Branch',
            address: 'Besmark Commodities Inc. Compound Warehouse #8 Maharlika Highway Brgy. Del Rosario, Naga City',
            phone: '(054) 881 0968',
            mobile: '0998 257 8968 | 0906 459 8398',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 13.6218, lng: 123.1948 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.456!2d123.1948!3d13.6218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzE4LjUiTiAxMjPCsDExJzQxLjMiRQ!5e0!3m2!1sen!2sph!4v1000000000003!5m2!1sen!2sph'
        },
        {
            id: 'iloilo',
            name: 'Iloilo Branch',
            address: 'Golden Luck Warehouse Door B8 Ticud Coastal Road Lapaz, Iloilo City.',
            phone: '(033) 327-2958 | 393-3205',
            mobile: '0917 673 0056 | 0929 644 6886',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 10.7202, lng: 122.5621 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.789!2d122.5621!3d10.7202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQzJzEyLjciTiAxMjLCsDMzJzQzLjYiRQ!5e0!3m2!1sen!2sph!4v1000000000004!5m2!1sen!2sph'
        },
        {
            id: 'tacloban',
            name: 'Tacloban Branch',
            address: 'Brgy. 91, Abucay, Landmark: Heather Plus compound, Tacloban City',
            phone: '(053) 832 3327',
            mobile: '0945 475 4729',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 11.2447, lng: 125.0048 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.567!2d125.0048!3d11.2447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE0JzQxLjAiTiAxMjXCsDA2JzE3LjMiRQ!5e0!3m2!1sen!2sph!4v1000000000005!5m2!1sen!2sph'
        }
    ];

    const currentBranch = branches[selectedBranch];

    const nextBranch = () => {
        setSelectedBranch((prev) => (prev + 1) % branches.length);
    };

    const prevBranch = () => {
        setSelectedBranch((prev) => (prev - 1 + branches.length) % branches.length);
    };

    const getVisibleBranches = () => {
        const visible = [];
        for (let i = 0; i < Math.min(3, branches.length); i++) {
            const index = (selectedBranch + i) % branches.length;
            visible.push({ ...branches[index], index });
        }
        return visible;
    };

    return (
        <section className="branch-section">
            <h2 className="branches-label">BRANCHES</h2>
            <div className="branch-container">
                <div className="branch-map-container">
                    <div className="google-map">
                        <iframe
                            src={currentBranch.mapUrl}
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${currentBranch.name} Location`}
                        ></iframe>
                    </div>

                    <div className="branch-navigation">
                        <button className="nav-arrow nav-arrow-left" onClick={prevBranch}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15,18 9,12 15,6"></polyline>
                            </svg>
                        </button>

                        <div className="branch-buttons">
                            {getVisibleBranches().map((branch, idx) => (
                                <button
                                    key={branch.id}
                                    className={`branch-btn ${branch.index === selectedBranch ? 'active' : ''}`}
                                    onClick={() => setSelectedBranch(branch.index)}
                                >
                                    {branch.name}
                                </button>
                            ))}
                        </div>

                        <button className="nav-arrow nav-arrow-right" onClick={nextBranch}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="branch-info">
                    <div className="branch-header">
                        <h2>Find Us</h2>
                        <p className="branch-subtitle">{currentBranch.name}</p>
                    </div>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className="contact-content">
                                <p className="contact-label">Tel. No.:</p>
                                <p className="contact-value">{currentBranch.phone}</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                </svg>
                            </div>
                            <div className="contact-content">
                                <p className="contact-label">Mobile No.:</p>
                                <p className="contact-value">{currentBranch.mobile}</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="contact-content">
                                <p className="contact-label">Address:</p>
                                <p className="contact-value">{currentBranch.address}</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12,6 12,12 16,14"></polyline>
                                </svg>
                            </div>
                            <div className="contact-content">
                                <p className="contact-label">Hours:</p>
                                <p className="contact-value">{currentBranch.hours}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}