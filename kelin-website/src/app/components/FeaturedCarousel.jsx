'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './FeaturedCarousel.module.css';

const FeaturedCarousel = ({ items = [], title = "Featured Subjects", label }) => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });

    // Update active state - only center item is active
    const updateActiveItem = () => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const center = carousel.scrollLeft + carousel.clientWidth / 2;
        const itemElements = carousel.querySelectorAll(`.${styles.item}`);

        let closestItem = null;
        let closestDistance = Infinity;

        itemElements.forEach(item => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(center - itemCenter);

            // Remove active class from all items first
            item.classList.remove(styles.active);

            // Find the closest item to center
            if (distance < closestDistance) {
                closestDistance = distance;
                closestItem = item;
            }
        });

        // Only the center-most item becomes active
        if (closestItem) {
            closestItem.classList.add(styles.active);
        }
    };

    // Handle mouse down for drag functionality
    const handleMouseDown = (e) => {
        if (!carouselRef.current) return;

        setIsDragging(true);
        setDragStart({
            x: e.pageX,
            scrollLeft: carouselRef.current.scrollLeft
        });
    };

    // Handle mouse up
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle mouse move for dragging
    const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;

        e.preventDefault();
        const x = e.pageX;
        const walk = x - dragStart.x;
        carouselRef.current.scrollLeft = dragStart.scrollLeft - walk;
    };

    // Handle item click to center it
    const handleItemClick = (index) => {
        if (!carouselRef.current) return;

        const itemElements = carouselRef.current.querySelectorAll(`.${styles.item}`);
        if (itemElements[index]) {
            itemElements[index].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            });
        }
    };

    // Handle button click
    const handleButtonClick = (item, e) => {
        e.stopPropagation(); // Prevent item click
        if (item.onButtonClick) {
            item.onButtonClick(item);
        }
    };

    // Center middle item on first load and set up event listeners
    useEffect(() => {
        if (!carouselRef.current || items.length === 0) return;

        const carousel = carouselRef.current;

        // Add scroll event listener
        carousel.addEventListener('scroll', updateActiveItem);

        // Add global mouse event listeners
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            carousel.removeEventListener('scroll', updateActiveItem);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [items, isDragging, dragStart]);

    // Initial setup after component mounts
    useEffect(() => {
        if (!carouselRef.current || items.length === 0) return;

        const carousel = carouselRef.current;
        const middleIndex = Math.floor(items.length / 2);
        const itemElements = carousel.querySelectorAll(`.${styles.item}`);

        if (itemElements[middleIndex]) {
            setTimeout(() => {
                itemElements[middleIndex].scrollIntoView({
                    behavior: "instant",
                    inline: "center",
                    block: "nearest"
                });
                updateActiveItem();
            }, 100);
        }
    }, [items]);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselTextContainer}>
                <div className={styles.carouselChildTextContainer}>
                    {label && <div className={styles.label}>{label}</div>}
                    <h2 className={styles.title}>{title}</h2>
                </div>
            </div>
            <div className={styles.carouselWrapper}>

                <div
                    className={`${styles.carousel} ${isDragging ? styles.grabbing : ''}`}
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                >
                    {items.map((item, index) => (
                        <div
                            key={item.id || index}
                            className={styles.item}
                            onClick={() => handleItemClick(index)}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    draggable={false}
                                />
                            </div>
                            <div className={styles.itemTitle}>{item.title}</div>
                            <button
                                className={styles.btn}
                                onClick={(e) => handleButtonClick(item, e)}
                            >
                                {item.buttonText || 'View More'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.carouselLeftFade}>

            </div>
            <div className={styles.carouselRightFade}>

            </div>
        </div>
    );
};

export default FeaturedCarousel;