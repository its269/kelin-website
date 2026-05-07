"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import "./horizontal-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
    const containerRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const sectionsRef = useRef([]);
    const [showSkip, setShowSkip] = useState(false);

    const sections = [
        { title: "Innovation", subtitle: "Cutting-Edge Technology", description: "Advanced printing solutions.", icon: "/innovation-icon.png", image: "/INNOVATION.png" },
        { title: "Quality", subtitle: "Premium Materials", description: "Industry-leading materials.", icon: "/quality-icon.png", image: "/QUALITY.png" },
        { title: "Support", subtitle: "Expert Assistance", description: "Professional technical support.", icon: "/support-icon.png", image: "/SUPPORT.png" },
        { title: "Solutions", subtitle: "Custom Approach", description: "Tailored printing solutions.", icon: "/solutions-icon.png", image: "/SOLUTIONS.png" },
        { title: "Scale", subtitle: "Enterprise Ready", description: "Scalable solutions.", icon: "/scale-icon.png", image: "/SCALE.png" },
    ];

    useEffect(() => {
        // 1. Create a GSAP Context
        let ctx = gsap.context(() => {
            const scrollContainer = scrollContainerRef.current;
            const sectionsElements = sectionsRef.current;

            if (!scrollContainer || sectionsElements.length === 0) return;

            const getScrollAmount = () => {
                return -(scrollContainer.scrollWidth - window.innerWidth);
            };

            const tween = gsap.to(sectionsElements, {
                x: getScrollAmount,
                ease: "none",
            });

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${scrollContainer.scrollWidth - window.innerWidth}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    // Toggle Skip Button
                    if (self.progress > 0.05 && self.progress < 0.95) {
                        setShowSkip(true);
                    } else {
                        setShowSkip(false);
                    }

                    // Update Progress Bar
                    const progressFill = containerRef.current?.querySelector('.progress-fill');
                    if (progressFill) {
                        progressFill.style.width = `${self.progress * 100}%`;
                    }
                }
            });
        }, containerRef); // Scope the context to the main container

        // 2. Cleanup: Revert everything!
        return () => ctx.revert();
    }, []);

    const skipToBottom = () => {
        const st = ScrollTrigger.getById("horizontal-trigger") || ScrollTrigger.getAll()[0];
        if (st) {
            window.scrollTo({
                top: st.end + 50,
                behavior: 'smooth'
            });
        }
    };

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <div ref={containerRef} className="horizontal-scroll-container">
            <button
                className={`skip-button ${showSkip ? 'visible' : ''}`}
                onClick={skipToBottom}
            >
                Skip Section <span>↓</span>
            </button>

            <div className="scroll-indicator">
                <div className="scroll-text">Scroll to explore</div>
                <div className="scroll-arrow">↓</div>
            </div>

            <div ref={scrollContainerRef} className="horizontal-scroll-content">
                {sections.map((section, index) => (
                    <div key={index} ref={addToRefs} className="scroll-section">
                        <div className="section-content">
                            <div className="desktop-content">
                                <Image src={section.image} alt={section.title} width={1000} height={1000} priority />
                            </div>
                            <div className="mobile-content">
                                <div className="section-icon">
                                    <Image src={section.icon} alt={section.title} width={48} height={48} priority />
                                </div>
                                <h2 className="section-title">{section.title}</h2>
                                <h3 className="section-subtitle">{section.subtitle}</h3>
                                <p className="section-description">{section.description}</p>
                                <div className="section-number">0{index + 1}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>
            <img src="/background-elements.svg" alt="background elements" className="horizontal-scroll-background-right horizontal-scroll-background-horizontal" />
            <img src="/background-elements(2).svg" alt="background elements" className="horizontal-scroll-background-left horizontal-scroll-background-horizontal" />
        </div>
    );
}