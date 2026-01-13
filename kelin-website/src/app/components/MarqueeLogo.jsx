import "./marquee-logo.css";

export default function MarqueeLogo() {
    // Array of logo images - you can add more logos here
    const logos = [
        { src: "/LOGOSSS.png", alt: "Kelin Logo" },
        { src: "/LOGOSSS.png", alt: "Kelin Logo" },
        { src: "/LOGOSSS.png", alt: "Kelin Logo" },
        { src: "/LOGOSSS.png", alt: "Kelin Logo" },
        { src: "/LOGOSSS.png", alt: "Kelin Logo" },
        { src: "/LOGOSSS.png", alt: "Kelin Logo" },
    ];

    return (
        <div className="marquee-wrapper">
            <div className="fade-marquee-left"></div>
            <div className="marquee-content">
                {/* First set of logos */}
                <div className="marquee-logos">
                    {logos.map((logo, index) => (
                        <div key={`first-${index}`} className="marquee-item">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="marquee-logo-img"
                            />
                        </div>
                    ))}
                </div>

                {/* Duplicate set for seamless scrolling */}
                <div className="marquee-logos">
                    {logos.map((logo, index) => (
                        <div key={`second-${index}`} className="marquee-item">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="marquee-logo-img"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="fade-marquee-right"></div>
        </div>
    );
}