'use client';

import { useState } from 'react';

const milestones = [
    {
        title: "Foundation",
        year: "2009",
        description: "Foundation of the Kelin Graphics",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Breakthrough",
        year: "2010",
        description: "Extending workforce and launching of Apollo Solvent Printer in the Market.",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Expansion",
        year: "2011",
        description: "First Branch located in Davao City, Coming of Smart Eco solvent Machine",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Market Leader",
        year: "2012",
        description: "Introduction of UV LED Machine, Branch in CDO and Cebu",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Market Leader",
        year: "2015",
        description: "Introduction of Bending and Welding Machine, Expansion in Ilo-Ilo City.",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Dominating Western Visayas",
        year: "2016",
        description: "Bacolod branch opening, and introduction of Laser Fiber",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Uninterrupted Growth",
        year: "2017",
        description: "Dominating Visayas thru, Tacloban Branch.",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Steady Progression",
        year: "2018",
        description: "Reaching our fellow Chabakano and Bicolano by opening Zamboanga and Naga Branch",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Market Extension",
        year: "2020",
        description: "Extending our Market in Textile and Garments Industry",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Opening branch in GENSAN",
        year: "2021",
        description: "Opening a new branch expands reach, improves customer access, and drives growth through location, compliance, staffing, and marketing.",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Showcasing Nationwide Expansion",
        year: "2023",
        description: "North Luzon domination thru, Tarlac, La Union, Isabela Branch, Extending hands to Pagadian City",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Ongoing",
        year: "Live & Improving",
        description: "",
        image: "/dummy-image-square.jpg",
    },
    {
        title: "Next Phase",
        year: "202X",
        description: "",
        image: "/dummy-image-square.jpg",
    },
];

export default function MilestoneSlider() {
    const [current, setCurrent] = useState(0);

    const goNext = () => {
        if (current < milestones.length - 1) setCurrent(current + 1);
    };

    const goPrev = () => {
        if (current > 0) setCurrent(current - 1);
    };

    const slide = milestones[current];
    const isFirst = current === 0;
    const isLast = current === milestones.length - 1;

    return (
        <section className="milestone-section">
            <img src="/background-elements.svg" alt="" aria-hidden="true" className="decorative-element-about bg-elements-about" />
            <img src="/background-elements(2).svg" alt="" aria-hidden="true" className="decorative-element-2-about bg-elements-about" />

            <h2 className="milestone-title" style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>
                KELIN GRAPHICS SYSTEM MILESTONE
            </h2>

            <div className="milestone-slider-wrapper">
                {/* Left Arrow */}
                <button
                    className={`milestone-arrow milestone-arrow-left${isFirst ? ' milestone-arrow-disabled' : ''}`}
                    onClick={goPrev}
                    disabled={isFirst}
                    aria-label="Previous milestone"
                >
                    &#171;
                </button>

                {/* Slide Content */}
                <div className="milestone-slide">
                    {/* Image Card */}
                    <div className="milestone-image-card">
                        <img
                            src={slide.image}
                            alt={`${slide.title} ${slide.year}`}
                            className="milestone-img"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="milestone-text">
                        <h3 className="milestone-heading" style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>
                            {slide.title}&nbsp;<span className="milestone-year">{slide.year}</span>
                        </h3>
                        <hr className="milestone-divider" />
                        {slide.description && (
                            <p className="milestone-desc">{slide.description}</p>
                        )}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    className={`milestone-arrow milestone-arrow-right${isLast ? ' milestone-arrow-disabled' : ''}`}
                    onClick={goNext}
                    disabled={isLast}
                    aria-label="Next milestone"
                >
                    &#187;
                </button>
            </div>

            {/* Dot Navigation */}
            <div className="milestone-dots">
                {milestones.map((_, i) => (
                    <button
                        key={i}
                        className={`milestone-dot${i === current ? ' milestone-dot-active' : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to milestone ${i + 1}`}
                    />
                ))}
            </div>

            {/* Mobile Nav Row (replaces side arrows on small screens) */}
            <div className="milestone-mobile-nav">
                <button
                    className="milestone-mobile-btn"
                    onClick={goPrev}
                    disabled={isFirst}
                    aria-label="Previous milestone"
                >
                    &#171;
                </button>
                <span className="milestone-mobile-counter">{current + 1} / {milestones.length}</span>
                <button
                    className="milestone-mobile-btn"
                    onClick={goNext}
                    disabled={isLast}
                    aria-label="Next milestone"
                >
                    &#187;
                </button>
            </div>
        </section>
    );
}
