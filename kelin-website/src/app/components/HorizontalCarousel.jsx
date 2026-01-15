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
    const [isSnapping, setIsSnapping] = useState(false);
    const snapTimeoutRef = useRef(null);
    const animationFrameRef = useRef(null);
    const lastScrollTime = useRef(0);
    const dragDistance = useRef(0);

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

    // Mouse drag handlers optimized for smooth performance
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(carouselRef.current.scrollLeft);
        dragDistance.current = 0;

        // Clear any pending snap
        if (snapTimeoutRef.current) {
            clearTimeout(snapTimeoutRef.current);
        }

        // Cancel any pending animations
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);

            // Cancel any pending animation
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            // More conservative desktop snapping
            if (dragDistance.current > 60) {
                snapTimeoutRef.current = setTimeout(() => {
                    snapToNearest();
                }, 200);
            } else {
                updateActiveIndexOnly();
            }
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();

        const x = e.pageX;
        const currentDrag = x - startX;
        dragDistance.current = Math.abs(currentDrag);

        // Direct scroll for desktop too
        const newScrollLeft = scrollLeft - currentDrag;
        carouselRef.current.scrollLeft = newScrollLeft;
    };

    // Touch handlers optimized for mobile performance
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
        setScrollLeft(carouselRef.current.scrollLeft);
        dragDistance.current = 0; // Reset drag distance

        // Clear any pending snap
        if (snapTimeoutRef.current) {
            clearTimeout(snapTimeoutRef.current);
        }

        // Cancel any pending animations
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    };

    const handleTouchMove = (e) => {
        if (!isDragging || !carouselRef.current) return;

        const x = e.touches[0].pageX;
        const currentDrag = x - startX;
        dragDistance.current = Math.abs(currentDrag);

        // Direct 1:1 scroll mapping for precise control
        const newScrollLeft = scrollLeft - currentDrag;

        // Apply scroll directly without animation frame for immediate response
        carouselRef.current.scrollLeft = newScrollLeft;

        // Prevent default to avoid page scrolling
        e.preventDefault();
    };

    const handleTouchEnd = (e) => {
        if (isDragging) {
            setIsDragging(false);

            // Cancel any pending animation
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            // Much more conservative snapping - only for large drags
            if (dragDistance.current > 80) {
                snapTimeoutRef.current = setTimeout(() => {
                    snapToNearest();
                }, 300); // Longer delay
            } else {
                // For small drags, just update the active index without snapping
                updateActiveIndexOnly();
            }
        }
        e.preventDefault();
    };

    // Update active index without snapping (for small drags)
    const updateActiveIndexOnly = () => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const items = carousel.querySelectorAll(`.${styles.item}`);

        if (items.length === 0) return;

        const center = carousel.scrollLeft + carousel.clientWidth / 2;
        let nearestIndex = 0;
        let minDistance = Infinity;

        items.forEach((item, index) => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(center - itemCenter);

            if (distance < minDistance) {
                minDistance = distance;
                nearestIndex = index;
            }
        });

        setActiveIndex(nearestIndex);
    };

    // Smooth custom scroll animation instead of browser's scrollIntoView
    const smoothScrollTo = (targetScrollLeft, duration = 600) => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const startScrollLeft = carousel.scrollLeft;
        const distance = targetScrollLeft - startScrollLeft;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);

            carousel.scrollLeft = startScrollLeft + (distance * easeOut);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                setIsSnapping(false);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    // Optimized gentle snap for mobile and desktop
    const snapToNearest = () => {
        if (!carouselRef.current || isSnapping) return;

        const carousel = carouselRef.current;
        const items = carousel.querySelectorAll(`.${styles.item}`);

        if (items.length === 0) return;

        const center = carousel.scrollLeft + carousel.clientWidth / 2;
        let nearestIndex = 0;
        let minDistance = Infinity;

        items.forEach((item, index) => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(center - itemCenter);

            if (distance < minDistance) {
                minDistance = distance;
                nearestIndex = index;
            }
        });

        // Very conservative snapping - only for significant misalignment
        const isMobile = window.innerWidth <= 768;
        const snapThreshold = isMobile ? 100 : 80;

        if (minDistance > snapThreshold) {
            setIsSnapping(true);
            const targetItem = items[nearestIndex];
            const itemCenter = targetItem.offsetLeft + targetItem.offsetWidth / 2;
            const targetScrollLeft = itemCenter - carousel.clientWidth / 2;

            // Use custom smooth scroll with longer duration
            smoothScrollTo(targetScrollLeft, 800);
        }

        // Always update active index
        setActiveIndex(nearestIndex);
    };

    // Optimized scale update with performance throttling
    const updateScale = () => {
        if (!carouselRef.current || isDragging) return; // Don't update during dragging

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

            // Calculate scale with optimized smooth transitions
            const maxScale = 1.0;
            const minScale = 0.8;
            const falloffDistance = 300;

            let scale = maxScale;
            if (distance > 0) {
                // Simplified easing for better performance
                const normalizedDistance = Math.min(distance / falloffDistance, 1);
                const easedDistance = normalizedDistance * normalizedDistance;
                scale = maxScale - (easedDistance * (maxScale - minScale));
                scale = Math.max(minScale, scale);
            }

            // Use transform3d for hardware acceleration
            item.style.transform = `scale3d(${scale}, ${scale}, 1)`;

            // Add active class for the center item
            const isActive = scale > 0.9;
            item.classList.toggle(styles.active, isActive);
        });

        // Update activeIndex only when not snapping
        if (!isSnapping && !isDragging) {
            setActiveIndex(centerItemIndex);
        }
    };

    // Click to center an item with smooth custom animation (works on mobile and desktop)
    const handleItemClick = (e, index) => {
        e.preventDefault();
        e.stopPropagation();

        // Don't center if currently dragging or already snapping
        if (isDragging || isSnapping) return;

        // Don't center if it's already the active item
        if (index === activeIndex) return;

        setIsSnapping(true);
        const item = carouselRef.current.children[index];
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const targetScrollLeft = itemCenter - carouselRef.current.clientWidth / 2;

        // Use smooth custom scroll with optimized duration for mobile
        const isMobile = window.innerWidth <= 768;
        const duration = isMobile ? 500 : 700;

        smoothScrollTo(targetScrollLeft, duration);
        setActiveIndex(index);
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

            // Clear all pending timeouts and animations
            if (snapTimeoutRef.current) {
                clearTimeout(snapTimeoutRef.current);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
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
                                className={`${styles.item} ${isCenter ? styles.activeItem : ''}`}
                                onClick={(e) => handleItemClick(e, index)}
                                style={{ cursor: isCenter ? 'default' : 'pointer' }}
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