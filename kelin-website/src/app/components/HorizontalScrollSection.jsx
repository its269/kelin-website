"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./horizontal-scroll.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// SVG Icon Components
const RocketIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5 21C5 21 8.5 18 12 18C15.5 18 19 21 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 14L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const DiamondIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L16 8H8L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M6 8L12 22L18 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const ToolIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3L19 2L22 5L17.7 9.3C18.1 10.1 18.3 11 18.3 12C18.3 15.6 15.6 18.3 12 18.3C8.4 18.3 5.7 15.6 5.7 12C5.7 8.4 8.4 5.7 12 5.7C13 5.7 13.9 5.9 14.7 6.3Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M9.2 14.8L2 22L6 22L13.8 14.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const TargetIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
);

const ChartIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 7H21V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export default function HorizontalScrollSection() {
    const containerRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const scrollContainer = scrollContainerRef.current;
        const sections = sectionsRef.current;

        if (!container || !scrollContainer || sections.length === 0) return;

        // Calculate total scroll distance
        const getScrollAmount = () => {
            let racesWidth = scrollContainer.scrollWidth;
            return -(racesWidth - window.innerWidth);
        };

        // Create horizontal scroll animation
        const tween = gsap.to(sections, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });

        // Create ScrollTrigger for normal horizontal scroll
        ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: () => `+=${scrollContainer.scrollWidth - window.innerWidth}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                // Update progress bar
                const progressFill = container.querySelector('.progress-fill');
                if (progressFill) {
                    progressFill.style.width = `${self.progress * 100}%`;
                }
            }
        });


        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Update refs when sections change
    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    const sections = [
        {
            title: "Innovation",
            subtitle: "Cutting-Edge Technology",
            description: "Advanced printing solutions that push the boundaries of what's possible in modern manufacturing.",
            icon: <RocketIcon />
        },
        {
            title: "Quality",
            subtitle: "Premium Materials",
            description: "Industry-leading materials and equipment from trusted global manufacturers and suppliers.",
            icon: <DiamondIcon />
        },
        {
            title: "Support",
            subtitle: "Expert Assistance",
            description: "Professional technical support and comprehensive training for all your printing requirements.",
            icon: <ToolIcon />
        },
        {
            title: "Solutions",
            subtitle: "Custom Approach",
            description: "Tailored printing solutions designed to meet your specific business needs and objectives.",
            icon: <TargetIcon />
        },
        {
            title: "Scale",
            subtitle: "Enterprise Ready",
            description: "Scalable solutions that grow with your business, from small projects to large-scale operations.",
            icon: <ChartIcon />
        },
    ];

    return (
        <div ref={containerRef} className="horizontal-scroll-container">
            <div className="scroll-indicator">
                <div className="scroll-text">Scroll to explore</div>
                <div className="scroll-arrow">↓</div>
            </div>

            <div ref={scrollContainerRef} className="horizontal-scroll-content">
                {sections.map((section, index) => (
                    <div key={index} ref={addToRefs} className="scroll-section">
                        <div className="section-content">
                            <div className="section-icon">{section.icon}</div>
                            <h2 className="section-title">{section.title}</h2>
                            <h3 className="section-subtitle">{section.subtitle}</h3>
                            <p className="section-description">{section.description}</p>
                            <div className="section-number">0{index + 1}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>
        </div>
    );
}