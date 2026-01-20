"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import "./horizontal-scroll.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
            icon: "/innovation-icon.png"
        },
        {
            title: "Quality",
            subtitle: "Premium Materials",
            description: "Industry-leading materials and equipment from trusted global manufacturers and suppliers.",
            icon: "/quality-icon.png"
        },
        {
            title: "Support",
            subtitle: "Expert Assistance",
            description: "Professional technical support and comprehensive training for all your printing requirements.",
            icon: "/support-icon.png"
        },
        {
            title: "Solutions",
            subtitle: "Custom Approach",
            description: "Tailored printing solutions designed to meet your specific business needs and objectives.",
            icon: "/solutions-icon.png"
        },
        {
            title: "Scale",
            subtitle: "Enterprise Ready",
            description: "Scalable solutions that grow with your business, from small projects to large-scale operations.",
            icon: "/scale-icon.png"
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
                            <div className="section-icon">
                                <Image
                                    src={section.icon}
                                    alt={`${section.title} icon`}
                                    width={48}
                                    height={48}
                                    priority
                                />
                            </div>
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