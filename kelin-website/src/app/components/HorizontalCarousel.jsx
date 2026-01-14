"use client";
import { useRef, useEffect, useState } from 'react';
import styles from './HorizontalCarousel.module.css';

const HorizontalCarousel = ({
    title = "Featured Products",
    items = [],
    onViewMore = () => { }
}) => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // Default items if none provided
    const defaultItems = [
        {
            id: 1,
            image: "https://picsum.photos/id/1041/300/300",
            title: "Large Format Printer",
            alt: "Large Format Printer"
        },
        {
            id: 2,
            image: "/luxor2.png",
            title: "Cutting Plotters",
            alt: "Cutting Plotters"
        },
        {
            id: 3,
            image: "/mobile-luxor.png",
            title: "Heat Press Machines",
            alt: "Heat Press Machines"
        },
        {
            id: 4,
            image: "/one.jpg",
            title: "Vinyl Materials",
            alt: "Vinyl Materials"
        },
        {
            id: 5,
            image: "/se.webp",
            title: "Premium Inks",
            alt: "Premium Inks"
        }
    ];

    const carouselItems = items.length > 0 ? items : defaultItems;

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX);
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch handlers for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        const x = e.touches[0].pageX;
        const walk = (x - startX);
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // Update scale based on scroll position
    const updateScale = () => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const center = carousel.scrollLeft + carousel.clientWidth / 2;
        const items = carousel.querySelectorAll(`.${styles.item}`);

        let centerItemIndex = 0;
        let minDistance = Infinity;

        items.forEach((item, index) => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(center - itemCenter);

            // Track which item is closest to center
            if (distance < minDistance) {
                minDistance = distance;
                centerItemIndex = index;
            }

            // Calculate scale - center item is normal size (1.0), others are smaller (0.8)
            const maxScale = 1.0;
            const minScale = 0.8;
            const falloffDistance = 350;

            let scale = maxScale;
            if (distance > 0) {
                scale = Math.max(minScale, maxScale - (distance / falloffDistance) * (maxScale - minScale));
            }

            item.style.transform = `scale(${scale})`;

            // Add active class for the center item
            const isActive = scale > 0.95;
            item.classList.toggle(styles.active, isActive);
        });

        // Update active index state
        setActiveIndex(centerItemIndex);
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

    // Handle view more button click
    const handleViewMoreClick = (e, item) => {
        e.stopPropagation();
        onViewMore(item);
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Add scroll listener for scale updates
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
            <div className={styles.solutionsLabel}>SOLUTIONS</div>
            <h2 className={styles.title}>Turn ordinary surfaces into something extraordinary.</h2>
            <div className={styles.carouselWrapper}>
                <div
                    ref={carouselRef}
                    className={`${styles.carousel} ${isDragging ? styles.grabbing : styles.grab}`}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {carouselItems.map((item, index) => {
                        const isCenter = index === activeIndex;
                        return (
                            <div
                                key={item.id || index}
                                className={styles.item}
                                onClick={(e) => handleItemClick(e, index)}
                            >
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={item.image}
                                        alt={item.alt || item.title}
                                        draggable={false}
                                    />
                                </div>
                                {isCenter && (
                                    <>
                                        <div className={styles.itemTitle}>{item.title}</div>
                                        <button
                                            className={styles.btn}
                                            onClick={(e) => handleViewMoreClick(e, item)}
                                        >
                                            View More
                                        </button>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HorizontalCarousel;