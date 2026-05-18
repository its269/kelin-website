"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './about-section.css';

const slideshowImages = [
    { src: '/laser-machines/Handheld Fiber Laser.webp', alt: 'Handheld Fiber Laser' },
    { src: '/uv-machines/Luxor RTR (1).webp', alt: 'Luxor RTR UV Printer' },
    // { src: '/cutting-machines/bk4 (1).webp', alt: 'iECHO BK4 Cutting Machine' },
    { src: '/sublimation_dtf/SUBL Smart Sublimation (1).webp', alt: 'Smart Sublimation Machine' },
    { src: '/eco-solvent-machines/Apollo.webp', alt: 'Apollo Eco Solvent Printer' },
    { src: '/embroidery_knitting/Promaker Embroidery 1201.webp', alt: 'Promaker Embroidery Machine' },
    { src: '/heatpress/Sapphire Heatpress (2).webp', alt: 'Sapphire Heat Press' },
    { src: '/laminator/Cold Laminator (1).webp', alt: 'Cold Laminator' },
    { src: '/laser-machines/K-Sign Desktop Laser B330.webp', alt: 'K-Sign Desktop Laser B330' },
    { src: '/sublimation_dtf/DTF SMART DTF Machine (1).webp', alt: 'Smart DTF Machine' },
    { src: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.webp', alt: 'Hanniu CO2 Laser 300W' },
    { src: '/uv-machines/SMART UV Printer.webp', alt: 'Smart UV Printer' },
];

export default function AboutSection() {
    const [current, setCurrent] = useState(0);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % slideshowImages.length);
                setFading(false);
            }, 500);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about-section">
            <div className="about-section-inner">
                {/* Text Side */}
                <div className="about-section-text">
                    <span className="about-section-label">WHO WE ARE</span>
                    <h2 className="about-section-title">
                        Your trusted printing<br />solutions partner since 2009.
                    </h2>
                    <p className="about-section-desc">
                        Kelin Graphics System is the Philippines' leading distributor of wide-format
                        printers, cutting machines, UV printers, DTF systems, sublimation machines,
                        laser machines, and finishing equipment.
                    </p>
                    <p className="about-section-desc">
                        Based in Santa Cruz, Manila, we have been brightening the advertising and
                        printing industry for over 15 years — delivering competitive, reliable, and
                        cost-efficient printing solutions backed by dedicated after-sales support
                        and nationwide service.
                    </p>
                    <div className="about-section-highlights">
                        <div className="about-highlight">
                            <span className="about-highlight-num">15+</span>
                            <span className="about-highlight-lbl">Years in Business</span>
                        </div>
                        <div className="about-highlight">
                            <span className="about-highlight-num">500+</span>
                            <span className="about-highlight-lbl">Machines Installed</span>
                        </div>
                        <div className="about-highlight">
                            <span className="about-highlight-num">3</span>
                            <span className="about-highlight-lbl">Regions Served</span>
                        </div>
                    </div>
                    <Link href="/about" className="about-section-btn">
                        Read More About Us
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Slideshow Side */}
                <div className="about-section-image-wrap">
                    <div className="about-section-image-card">
                        <img
                            src={slideshowImages[current].src}
                            alt={slideshowImages[current].alt}
                            className={`about-section-img about-slideshow-img${fading ? ' about-slideshow-fading' : ''}`}
                        />
                        <div className="about-section-badge">
                            <span className="about-badge-num">2009</span>
                            <span className="about-badge-lbl">Established</span>
                        </div>
                    </div>
                    {/* Decorative accent */}
                    <div className="about-section-accent" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}
