"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

        // Create ScrollTrigger
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

                // Update active section
                const currentIndex = Math.floor(self.progress * sections.length);
                sections.forEach((section, index) => {
                    if (index === currentIndex) {
                        gsap.to(section, { opacity: 1, scale: 1, duration: 0.3 });
                    } else {
                        gsap.to(section, { opacity: 0.3, scale: 0.9, duration: 0.3 });
                    }
                });
            }
        });

        // Section reveal animations
        sections.forEach((section, index) => {
            gsap.fromTo(section,
                {
                    opacity: index === 0 ? 1 : 0.3,
                    scale: index === 0 ? 1 : 0.9,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: tween,
                        start: "left center",
                        end: "right center",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
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
            icon: "🚀"
        },
        {
            title: "Quality",
            subtitle: "Premium Materials",
            description: "Industry-leading materials and equipment from trusted global manufacturers and suppliers.",
            icon: "💎"
        },
        {
            title: "Support",
            subtitle: "Expert Assistance",
            description: "Professional technical support and comprehensive training for all your printing requirements.",
            icon: "🛠️"
        },
        {
            title: "Solutions",
            subtitle: "Custom Approach",
            description: "Tailored printing solutions designed to meet your specific business needs and objectives.",
            icon: "🎯"
        },
        {
            title: "Scale",
            subtitle: "Enterprise Ready",
            description: "Scalable solutions that grow with your business, from small projects to large-scale operations.",
            icon: "📈"
        }
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