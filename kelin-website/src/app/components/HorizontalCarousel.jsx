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
    const touchStartTime = useRef(0);
    const [isTap, setIsTap] = useState(false);
    const lastDragX = useRef(0);
    const dragSensitivity = useRef(0.8); // Control drag sensitivity

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
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.pageX);
        lastDragX.current = e.pageX;
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

        // Add cursor style
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);

            // Reset cursor and user selection
            document.body.style.cursor = '';
            document.body.style.userSelect = '';

            // Cancel any pending animation
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            // Conservative desktop snapping only for significant drags
            if (dragDistance.current > 80) {
                snapTimeoutRef.current = setTimeout(() => {
                    snapToNearest();
                }, 150);
            } else {
                updateActiveIndexOnly();
            }
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();

        const currentX = e.pageX;
        const deltaX = (currentX - lastDragX.current) * dragSensitivity.current;
        lastDragX.current = currentX;

        // Track total drag distance
        dragDistance.current += Math.abs(deltaX);

        // Apply controlled scroll movement
        const currentScroll = carouselRef.current.scrollLeft;
        carouselRef.current.scrollLeft = currentScroll - deltaX;
    };

    // Touch handlers optimized for mobile performance
    const handleTouchStart = (e) => {
        touchStartTime.current = Date.now();
        setIsDragging(true);
        setIsTap(true);
        const touchX = e.touches[0].pageX;
        setStartX(touchX);
        lastDragX.current = touchX;
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

    const handleTouchMove = (e) => {
        if (!isDragging || !carouselRef.current) return;

        const currentX = e.touches[0].pageX;
        const deltaX = (currentX - lastDragX.current) * dragSensitivity.current;
        lastDragX.current = currentX;

        // Track total drag distance for tap detection
        dragDistance.current += Math.abs(deltaX);

        // If moved more than 15px total, it's no longer a tap
        if (dragDistance.current > 15) {
            setIsTap(false);
        }

        // Apply controlled scroll movement
        const currentScroll = carouselRef.current.scrollLeft;
        carouselRef.current.scrollLeft = currentScroll - deltaX;

        // Prevent default to avoid page scrolling
        e.preventDefault();
    };

    const handleTouchEnd = (e) => {
        if (isDragging) {
            const touchDuration = Date.now() - touchStartTime.current;
            const wasTap = isTap && touchDuration < 300 && dragDistance.current < 15;

            setIsDragging(false);
            setIsTap(false);

            // Cancel any pending animation
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            // If it was a tap, allow the click event
            if (wasTap) {
                return;
            }

            // No snapping for mobile - just update active index
            updateActiveIndexOnly();
        }
        e.preventDefault();
    };    // Update active index without snapping (for small drags)
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

    // Optimized gentle snap for desktop only
    const snapToNearest = () => {
        if (!carouselRef.current || isSnapping) return;

        // Skip snapping for mobile devices
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            updateActiveIndexOnly();
            return;
        }

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

        // Conservative snapping for desktop only
        const snapThreshold = 80;

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

    // Click to center an item smoothly
    const handleItemClick = (e, index) => {
        e.preventDefault();
        e.stopPropagation();

        // Don't center if currently dragging and it's not a tap
        if (isDragging && !isTap) return;

        const item = carouselRef.current.children[index];
        item.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });

        // Update active index immediately for visual feedback
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