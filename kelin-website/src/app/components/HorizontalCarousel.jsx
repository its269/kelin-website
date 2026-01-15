'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './HorizontalCarousel.module.css';

const HorizontalCarousel = ({ items, onViewMore }) => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const deltaX = e.pageX - startX;
        carouselRef.current.scrollLeft = scrollLeft - deltaX;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Touch handlers for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const deltaX = e.touches[0].pageX - startX;
        carouselRef.current.scrollLeft = scrollLeft - deltaX;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // Update scale based on center position
    const updateScale = () => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const center = carousel.scrollLeft + carousel.clientWidth / 2;
        const items = carousel.querySelectorAll(`.${styles.item}`);

        items.forEach(item => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(center - itemCenter);

            // Scale calculation matching the HTML sample
            const scale = Math.max(0.8, 1.25 - distance / 420);
            item.style.transform = `scale(${scale})`;

            // Add active class for items close to center
            item.classList.toggle(styles.active, scale > 1.12);
        });
    };

    // Click to center an item
    const handleItemClick = (e, index) => {
        e.preventDefault();
        const item = carouselRef.current.children[index];
        item.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
    };

    // Set up event listeners and initial scaling
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Add scroll listener for scaling updates
        carousel.addEventListener('scroll', updateScale);

        // Add mouse event listeners
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);

        // Initial scale update
        updateScale();

        return () => {
            carousel.removeEventListener('scroll', updateScale);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDragging, startX, scrollLeft]);

    return (
        <div className={styles.carouselSection}>
            {/* Header Section */}
            <div className={styles.headerSection}>
                <div className={styles.solutionsLabel}>SOLUTIONS</div>
                <h2 className={styles.sectionTitle}>Turn ordinary surfaces into something extraordinary.</h2>
            </div>

            {/* Carousel */}
            <div className={styles.carouselWrapper}>
                <div
                    ref={carouselRef}
                    className={`${styles.carousel} ${isDragging ? styles.grabbing : styles.grab}`}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={styles.item}
                            onClick={(e) => handleItemClick(e, index)}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.image}
                                    alt={item.title || item.name}
                                    draggable={false}
                                />
                            </div>
                            <div className={`${styles.itemContent} ${styles.hidden}`}>
                                <div className={styles.title}>{item.title || item.name}</div>
                                <button
                                    className={styles.btn}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onViewMore(item);
                                    }}
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalCarousel;