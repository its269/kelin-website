"use client";

import { useEffect, useState } from "react";
import styles from "./Slideshow.module.css";

const images = [
    "luxor.png",
    "https://picsum.photos/800/450?random=2",
    "https://picsum.photos/800/450?random=3",
];

export default function Slideshow() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slideshowContainer}>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    className={`${styles.slide} ${index === current ? styles.active : ""
                        }`}
                    alt="slideshow"
                />
            ))}
        </div>
    );
}
