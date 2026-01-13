"use client";
import { useEffect } from 'react';

export default function ScrollProgressHandler() {
    useEffect(() => {
        const updateProgress = () => {
            const container = document.querySelector('.horizontal-scroll-container');
            const progressFill = document.querySelector('.progress-fill');
            const sections = document.querySelectorAll('.scroll-section');

            if (!container || !progressFill) return;

            const containerRect = container.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerHeight = containerRect.height;

            // Use the same horizontal zone calculation as the main component
            const horizontalZoneHeight = containerHeight * 0.8;

            if (containerTop <= 0 && Math.abs(containerTop) < horizontalZoneHeight) {
                // We're in the horizontal scroll zone
                const scrollProgress = Math.abs(containerTop) / horizontalZoneHeight;
                const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

                // Update progress bar
                progressFill.style.width = `${clampedProgress * 100}%`;

                // Update section visibility based on horizontal scroll progress
                const currentIndex = Math.min(Math.floor(clampedProgress * sections.length), sections.length - 1);
                sections.forEach((section, index) => {
                    if (index === currentIndex) {
                        section.style.opacity = '1';
                        section.style.transform = 'scale(1)';
                    } else {
                        section.style.opacity = '0.3';
                        section.style.transform = 'scale(0.9)';
                    }
                });
            } else if (containerTop > 0) {
                // Before horizontal scroll zone
                progressFill.style.width = '0%';
                sections.forEach((section, index) => {
                    section.style.opacity = index === 0 ? '1' : '0.3';
                    section.style.transform = index === 0 ? 'scale(1)' : 'scale(0.9)';
                });
            } else {
                // After horizontal scroll zone - show completion
                progressFill.style.width = '100%';
                sections.forEach((section, index) => {
                    section.style.opacity = index === sections.length - 1 ? '1' : '0.3';
                    section.style.transform = index === sections.length - 1 ? 'scale(1)' : 'scale(0.9)';
                });
            }
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress(); // Initial call

        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    return null; // This component doesn't render anything
}