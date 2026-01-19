import "./marquee-logo.css";

export default function MarqueeLogo() {
    // Array of all machine logos from marquee-logo directory
    const logos = [
        { src: "/marquee-logo/1.png", alt: "Machine Logo 1" },
        { src: "/marquee-logo/2.png", alt: "Machine Logo 2" },
        { src: "/marquee-logo/3.png", alt: "Machine Logo 3" },
        { src: "/marquee-logo/4.png", alt: "Machine Logo 4" },
        { src: "/marquee-logo/5.png", alt: "Machine Logo 5" },
        { src: "/marquee-logo/6.png", alt: "Machine Logo 6" },
        { src: "/marquee-logo/7.png", alt: "Machine Logo 7" },
        { src: "/marquee-logo/8.png", alt: "Machine Logo 8" },
        { src: "/marquee-logo/9.png", alt: "Machine Logo 9" },
        { src: "/marquee-logo/10.png", alt: "Machine Logo 10" },
        { src: "/marquee-logo/11.png", alt: "Machine Logo 11" },
        { src: "/marquee-logo/12.png", alt: "Machine Logo 12" },
        { src: "/marquee-logo/13.png", alt: "Machine Logo 13" },
        { src: "/marquee-logo/14.png", alt: "Machine Logo 14" },
        { src: "/marquee-logo/15.png", alt: "Machine Logo 15" },
        { src: "/marquee-logo/16.png", alt: "Machine Logo 16" },
        { src: "/marquee-logo/17.png", alt: "Machine Logo 17" },
        { src: "/marquee-logo/18.png", alt: "Machine Logo 18" },
        { src: "/marquee-logo/19.png", alt: "Machine Logo 19" },
        { src: "/marquee-logo/20.png", alt: "Machine Logo 20" },
        { src: "/marquee-logo/21.png", alt: "Machine Logo 21" },
        { src: "/marquee-logo/22.png", alt: "Machine Logo 22" },
        { src: "/marquee-logo/23.png", alt: "Machine Logo 23" },
        { src: "/marquee-logo/24.png", alt: "Machine Logo 24" },
        { src: "/marquee-logo/25.png", alt: "Machine Logo 25" },
        { src: "/marquee-logo/26.png", alt: "Machine Logo 26" },
        { src: "/marquee-logo/27.png", alt: "Machine Logo 27" },
        { src: "/marquee-logo/28.png", alt: "Machine Logo 28" },
        { src: "/marquee-logo/29.png", alt: "Machine Logo 29" },
        { src: "/marquee-logo/30.png", alt: "Machine Logo 30" },
        { src: "/marquee-logo/31.png", alt: "Machine Logo 31" },
        { src: "/marquee-logo/32.png", alt: "Machine Logo 32" },
        { src: "/marquee-logo/33.png", alt: "Machine Logo 33" },
        { src: "/marquee-logo/34.png", alt: "Machine Logo 34" },
        { src: "/marquee-logo/35.png", alt: "Machine Logo 35" },
        { src: "/marquee-logo/36.png", alt: "Machine Logo 36" },
        { src: "/marquee-logo/37.png", alt: "Machine Logo 37" },
        { src: "/marquee-logo/38.png", alt: "Machine Logo 38" },
        { src: "/marquee-logo/39.png", alt: "Machine Logo 39" },
        { src: "/marquee-logo/40.png", alt: "Machine Logo 40" },
        { src: "/marquee-logo/41.png", alt: "Machine Logo 41" },
        { src: "/marquee-logo/42.png", alt: "Machine Logo 42" },
        { src: "/marquee-logo/43.png", alt: "Machine Logo 43" },
        { src: "/marquee-logo/44.png", alt: "Machine Logo 44" },
        { src: "/marquee-logo/45.png", alt: "Machine Logo 45" },
        { src: "/marquee-logo/46.png", alt: "Machine Logo 46" },
        { src: "/marquee-logo/47.png", alt: "Machine Logo 47" },
        { src: "/marquee-logo/48.png", alt: "Machine Logo 48" },
        { src: "/marquee-logo/49.png", alt: "Machine Logo 49" },
        { src: "/marquee-logo/50.png", alt: "Machine Logo 50" },
        { src: "/marquee-logo/51.png", alt: "Machine Logo 51" },
        { src: "/marquee-logo/52.png", alt: "Machine Logo 52" },
        { src: "/marquee-logo/53.png", alt: "Machine Logo 53" },
        { src: "/marquee-logo/54.png", alt: "Machine Logo 54" },
        { src: "/marquee-logo/55.png", alt: "Machine Logo 55" },
        { src: "/marquee-logo/56.png", alt: "Machine Logo 56" },
        { src: "/marquee-logo/57.png", alt: "Machine Logo 57" },
        { src: "/marquee-logo/58.png", alt: "Machine Logo 58" },
        { src: "/marquee-logo/59.png", alt: "Machine Logo 59" }
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