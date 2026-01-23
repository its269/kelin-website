"use client";
import Header from "./components/Header";
import BranchSection from "./components/BranchSection";
import MarqueeLogo from "./components/MarqueeLogo";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import FeaturedCarousel from "./components/FeaturedCarousel";
import TextSection from "./components/TextSection";
import NewsEventsSection from "./components/NewsEventsSection";
import Image from "next/image";
import "./home.css";

// 🔧 SSG CODE PATTERN: Default export function component
// This is the basic pattern for SSG in Next.js App Router
export default function Home() {
  // Sample data for the carousel
  const carouselItems = [
    {
      id: 1,
      image: "https://picsum.photos/id/1011/300/300",
      title: "Industrial Sublimation",
      buttonText: "View More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1025/300/300",
      title: "Textile and Apparel",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1035/300/300",
      title: "Direct to Film (DTF)",
      buttonText: "View More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 4,
      image: "https://picsum.photos/id/1041/300/300",
      title: "UV DTF",
      buttonText: "Explore",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 5,
      image: "https://picsum.photos/id/1062/300/300",
      title: "Threadwork",
      buttonText: "View More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 6,
      image: "https://picsum.photos/id/1015/300/300",
      title: "Digital Printing Equipment",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 7,
      image: "https://picsum.photos/id/1018/300/300",
      title: "Signages",
      buttonText: "View More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 8,
      image: "https://picsum.photos/id/1019/300/300",
      title: "Industrial Cutter",
      buttonText: "Explore",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 9,
      image: "https://picsum.photos/id/1020/300/300",
      title: "Cutting Solution",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 10,
      image: "https://picsum.photos/id/1021/300/300",
      title: "Laser Machine Solution",
      buttonText: "View More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 11,
      image: "https://picsum.photos/id/1022/300/300",
      title: "Personalized Machine Solution",
      buttonText: "Explore",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 12,
      image: "https://picsum.photos/id/1023/300/300",
      title: "Industrial Sublimation",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 13,
      image: "https://picsum.photos/id/1024/300/300",
      title: "Exhibition Displays",
      buttonText: "View More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 14,
      image: "https://picsum.photos/id/1026/300/300",
      title: "Substrates and Materials",
      buttonText: "Explore",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    }
  ];

  // 🔧 SSG CODE PATTERN: No async function, no data fetching
  // - No "async" keyword = no server-side data fetching
  // - No fetch() calls = no dynamic data at build time
  // - This tells Next.js to pre-render this as static HTML
  return (
    <div className="main">
      {/* 🔧 SSG CODE PATTERN: Static component imports */}
      {/* These components have no props = no dynamic data = SSG friendly */}
      <Header />
      <main className="home-container">
        <div className="marquee-container">
          <section className="hero-section">
            {/* 🔧 SSG CODE PATTERN: Hardcoded static content */}
            {/* These strings are known at build time = perfect for SSG */}
            <div className="home-tagline-text">
              <div className="tagline">
                <p className="kgs">KGS</p>
                <h1 className="hero1-title">YOUR TRUSTED<br></br>LONG-TERM PRINTING SOLUTIONS PROVIDER</h1>
              </div>
              <p className="hero-description">
                <b>Powering high-quality output at any scale.</b><br></br>From your vision to powerful,
                large-scale prints.
              </p>
            </div>

            {/* 🔧 SSG CODE PATTERN: Static navigation links */}
            {/* href values are hardcoded = pre-rendered in static HTML */}
            <div className="hero-buttons">
              <div className="btn">
                <a href="/explore" className="btn-primary">Cutting Machine</a>
              </div>
              <div className="btn">
                <a href="/about" className="btn-secondary">Eco-Solvent<br></br>Printer Machine</a>
              </div>
              <div className="btn">
                <a href="/support" className="btn-tertiary">Solvent<br></br>Printer Machine</a>
              </div>
              <div className="btn">
                <a href="/resources" className="btn-quaternary">Sublimation<br></br>Printer Machine</a>
              </div>
              <div className="btn">
                <a href="/blog" className="btn-quinary">DTF<br></br>Printer Machine</a>
              </div>
            </div>
          </section>

          <div className="marquee-logo">
            <MarqueeLogo />
          </div>
        </div>
        <div className="horizontal-click-scroll">
          {/* Featured Carousel */}
          <FeaturedCarousel
            items={carouselItems}
            label="LUXOR PRINTERS"
            title={
              <>
                Turn ordinary surfaces into <br className="desktop-break" />
                something extraordinary.
              </>
            }
          />
        </div>
        <section className="features-section">
          {/* 🔧 SSG CODE PATTERN: Static array rendering */}
          {/* This grid is hardcoded, not from API = SSG compatible */}
          <TextSection
            label="LUXOR"
            title={
              <>
                The perfect printing solution, your way.<br className="desktop-break" />

              </>
            }
            description="Whether you need high-quality DTF printing, precise UV printing, or professional direct-to-film solutions, LUXOR delivers exceptional results for your business."
            layout="reverse"
          />
          <div className="features-grid">
            <div className="feature-card">
              <div className="laminator-image">
                <Image
                  src="/DTF UV Printer SF604-i3200 2ft. - High Res (1).png"
                  alt="LUXOR SF60-4 DTF UV Printer"
                  width={250}
                  height={200}
                  className="product-card-image"
                  priority
                />
              </div>
              <h3>LUXOR SF60-4 | DTF UV PRINTER</h3>
              <h4>ADVANCE W+CMYK+V PRINTING CAPABILITY</h4>
              <p><b>Import THK Guide Rail</b><br></br>THK mute linear guide - stable, durable, and quiet.<br></br><br></br><b>Double chain Design</b><br></br>Ink Chain and Cable Chain separation, avoid signal disturb, ensure communicate Smoothly</p>
            </div>
            <div className="feature-card">
              <div className="laminator-image">
                <Image
                  src="/LUXOR UV-A3 RTR.png"
                  alt="LUXOR UV-A3 Flatbed Printer"
                  width={250}
                  height={200}
                  className="product-card-image"
                  priority
                />
              </div>
              <h3>LUXOR UV-A3 WITH CYLINDER AND RTR | FLATBED PRINTER</h3>
              <h4>HIGH-FUNCTION DESIGN  SUPPORTING 4 APPLICATIONS</h4>
              <p><b>High-Quality Printing</b><br></br>Epson i3200(8)-U1 printhead, 1200DPI for high-resolution output.<br></br><br></br><b>Intelligent Ink Supply</b><br></br>New ink tank with auto circulation and low ink alarm.</p>
            </div>
            <div className="feature-card">
              <div className="laminator-image">
                <Image
                  src="/DTF UV Printer SF303-i3200 2ft (1).png"
                  alt="LUXOR SF30-3 DTF UV Printer"
                  width={250}
                  height={200}
                  className="product-card-image"
                  priority
                />
              </div>
              <h3>LUXOR SF30-3 | DTF UV PRINTER </h3>
              <h4>BRILLIANT COLOR PRINTING WITH VARNISH</h4>
              <p><b>Air-cooled LED UV Lamp</b><br></br>30% Lower Energy Consumption.<br></br><br></br><b>CMYK + W + V Ink Printing</b><br></br>Original ink, printing bright, high degree of color reduction.</p>
            </div>
          </div>
        </section>
        <div className="horizontally-scroll">
          <HorizontalScrollSection />
        </div>

        {/* News & Events Section */}
        <NewsEventsSection />

        {/* 🔧 SSG CODE PATTERN: Component with no props */}
        {/* No props passed = no dynamic data = SSG will pre-render this */}
        <BranchSection />
      </main>
    </div>
  );
}

// 🔧 SSG RESULT: This entire component becomes a static .html file at build time
// Next.js detects: no async, no fetch(), no dynamic data = perfect for SSG
