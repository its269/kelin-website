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

    return (
        <section className="branch-section">
            <div className="branch-header">
                <h2 className="section-title">Our Branches</h2>
                <p className="section-subtitle">Visit us at any of our branches nationwide</p>
            </div>

            <div className="branch-container">
                <div className="branch-selector">
                    <div className="branch-tabs">
                        {branches.map((branch, index) => (
                            <button
                                key={branch.id}
                                className={`branch-tab ${index === selectedBranch ? 'active' : ''}`}
                                onClick={() => setSelectedBranch(index)}
                            >
                                <span className="branch-city">{branch.name.replace(' Branch', '')}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="branch-content">
                    <div className="map-container">
                        <iframe
                            src={currentBranch.mapUrl}
                            className="branch-map"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${currentBranch.name} Location`}
                        />
                    </div>

                    <div className="branch-details">
                        <h3 className="branch-name">{currentBranch.name}</h3>

                        <div className="contact-grid">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Address</span>
                                    <span className="contact-value">{currentBranch.address}</span>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Phone</span>
                                    <span className="contact-value">{currentBranch.phone}</span>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                        <line x1="12" y1="18" x2="12.01" y2="18" />
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Mobile</span>
                                    <span className="contact-value">{currentBranch.mobile}</span>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12,6 12,12 16,14" />
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Hours</span>
                                    <span className="contact-value">{currentBranch.hours}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}