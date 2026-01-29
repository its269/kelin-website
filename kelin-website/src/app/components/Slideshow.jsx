"use client";

import { useEffect, useState } from "react";
import "./Slideshow.css";

const images = [
    "/DTF UV Printer SF303-i3200 2ft (1).png",
    "/DTF UV Printer SF604-i3200 2ft. - High Res (1).png",
    "/LUXOR UV-A3 RTR.png",
];

export default function Slideshow() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`slide ${index === current ? "active" : ""}`}
                >
                    <img src={img} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}
