"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BranchSection from "./components/BranchSection";
import MarqueeLogo from "./components/MarqueeLogo";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import FeaturedCarousel from "./components/FeaturedCarousel";
import TextSection from "./components/TextSection";
import NewsEventsSection from "./components/NewsEventsSection";
import Slideshow from "./components/Slideshow";
import Image from "next/image";
import Link from "next/link";
import "./home.css";
import "./bison-font.css";
import "./montserrat-font.css";

// 🔧 SSG CODE PATTERN: Default export function component
// This is the basic pattern for SSG in Next.js App Router
export default function Home() {
  const [activeSolution, setActiveSolution] = useState(null);

  // Sample data for the carousel
  const carouselItems = [
    {
      id: 1,
      image: "/Solutions Category/Industrial Sublimation.webp",
      title: "Industrial Sublimation",
      description: "High-volume sublimation printing solutions for textiles, promotional products, and personalized items with vibrant, long-lasting color transfer technology.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 2,
      image: "/Solutions Category/Textile and Apparel.webp",
      title: "Textile and Apparel",
      description: "Complete textile printing solutions for fashion, sportswear, and custom apparel with advanced color management and fabric compatibility for professional results.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 3,
      image: "/Solutions Category/Direct to Film (DTF).webp",
      title: "Direct to Film (DTF)",
      description: "Revolutionary DTF printing technology for versatile fabric decoration, enabling full-color transfers on any textile with superior durability and flexibility.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 4,
      image: "/Solutions Category/UV DTF.webp",
      title: "UV DTF",
      description: "Next-generation UV DTF printing for hard surfaces and specialty applications, delivering vibrant prints with instant curing and exceptional adhesion on diverse materials.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 5,
      image: "/Solutions Category/Threadwork.webp",
      title: "Threadwork",
      description: "Professional embroidery and knitting solutions for custom logos, designs, and decorative patterns with precision stitching technology for apparel and textiles.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 6,
      image: "/Solutions Category/Digital Printing Equipment.webp",
      title: "Digital Printing Equipment",
      description: "State-of-the-art digital printing machines for large format graphics, banners, and signage with high-speed production and exceptional print quality.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 7,
      image: "/Solutions Category/Signage.webp",
      title: "Signages",
      description: "Comprehensive signage solutions including indoor and outdoor displays, channel letters, LED signs, and custom fabrication for commercial and retail applications.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 8,
      image: "/Solutions Category/Industrial Cutter.webp",
      title: "Industrial Cutter",
      description: "Heavy-duty industrial cutting machines for vinyl, fabric, leather, and specialty materials with precision control and automated workflow integration.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 9,
      image: "/Solutions Category/Cutting Solutions.webp",
      title: "Cutting Solution",
      description: "Complete cutting solutions for graphics, packaging, and prototype development with CAM software integration and multi-tool compatibility for diverse materials.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 10,
      image: "/Solutions Category/Laser Machine Solution.webp",
      title: "Laser Machine Solution",
      description: "Advanced laser cutting and engraving systems for acrylic, wood, metal, and fabric with precision control for intricate designs and industrial production.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 11,
      image: "/Solutions Category/Personalized Machine Solution.webp",
      title: "Personalized Machine Solution",
      description: "Custom-configured printing equipment tailored to your specific business needs, workflow requirements, and production goals with dedicated support and training.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 12,
      image: "/Solutions Category/Exhibition Displays.webp",
      title: "Exhibition Displays",
      description: "Professional trade show and exhibition display systems including portable booths, banner stands, and promotional structures for impactful brand presentations.",
      buttonText: "Learn More",
      onButtonClick: (item) => console.log(`Button clicked for ${item.title}`)
    },
    {
      id: 13,
      image: "/Solutions Category/Substrates and Materials.webp",
      title: "Substrates and Materials",
      description: "Premium printing substrates, transfer papers, films, and specialty materials optimized for sublimation, DTF, UV, and eco-solvent printing applications.",
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
                {/* <p className="kgs">KGS</p> */}
                <h1 className="hero1-title">YOUR TRUSTED<br></br>LONG-TERM PRINTING SOLUTIONS PROVIDER</h1>
              </div>
              <div className="hero-image">
                {/* <img src="/DTF UV Printer SF604-i3200 2ft. - High Res (1).png" alt="Kelin Graphics System Logo" className="kelin-logo-hero" /> */}
                {/* <b>Powering high-quality output at any scale.</b><br></br>From your vision to powerful,
                large-scale prints. */}
                <Slideshow />
              </div>
            </div>

            {/* 🔧 SSG CODE PATTERN: Static navigation links */}
            {/* href values are hardcoded = pre-rendered in static HTML */}
            <div className="hero-buttons">
              <a href="/cutting-machine" className="btn">
                <div className="btn-primary-cat">Cutting Machine</div>
              </a>
              <a href="/eco-solvent-printers" className="btn">
                <div className="btn-secondary-cat">Eco-Solvent<br></br>Printer Machine</div>
              </a>
              <a href="/solvent-printers" className="btn">
                <div className="btn-tertiary-cat">Solvent<br></br>Printer Machine</div>
              </a>
              <a href="/sublimation-dtf" className="btn">
                <div className="btn-quaternary-cat">Sublimation<br></br>Printer Machine</div>
              </a>
              <a href="/embroidery-knitting" className="btn">
                <div className="btn-quinary-cat">Embroidery<br></br>Knitting</div>
              </a>
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
            label="SOLUTIONS"
            title={
              <>
                Turn ordinary surfaces into <br className="desktop-break" />
                something extraordinary.
              </>
            }
            onActiveItemChange={setActiveSolution}
          />
        </div>
        <section className="features-section-landing">
          {/* 🔧 SSG CODE PATTERN: Static array rendering */}
          {/* This grid is hardcoded, not from API = SSG compatible */}
          <TextSection
            label="LUXOR"
            title={
              <>
                The perfect printing solution, tailored by you.<br className="desktop-break" />

              </>
            }
            description="Whether you need high-quality DTF printing, precise UV printing, or professional direct-to-film solutions, LUXOR delivers exceptional results for your business."
            layout="reverse"
          />
          <div className="features-grid">
            <Link href="/dtf-uv-printer-sf604-i3200" className="feature-card">
              <div className="luxor-image">
                <Image
                  src="/Luxor-sf60-4.webp"
                  alt="LUXOR SF60-4 DTF UV Printer"
                  width={250}
                  height={200}
                  className="product-card-image"
                  priority
                />
              </div>
              {/* <h3>LUXOR SF60-4 | DTF UV PRINTER</h3> */}
              <h4>ADVANCE W+CMYK+V PRINTING CAPABILITY</h4>
              <p><b>Import THK Guide Rail</b><br></br>THK mute linear guide - stable, durable, and quiet.<br></br><br></br><b>Double chain Design</b><br></br>Ink Chain and Cable Chain separation, avoid signal disturb, ensure communicate Smoothly</p>
            </Link>
            <Link href="/dtf-uv-printer-sf303-f1080" className="feature-card">
              <div className="luxor-image">
                <Image
                  src="/Luxor-UV.webp"
                  alt="LUXOR SF30-3 DTF UV Printer"
                  width={250}
                  height={200}
                  className="product-card-image"
                  priority
                />
              </div>
              {/*  <h3>LUXOR SF30-3 | DTF UV PRINTER </h3> */}
              <h4>BRILLIANT COLOR PRINTING WITH VARNISH</h4>
              <p><b>Air-cooled LED UV Lamp</b><br></br>30% Lower Energy Consumption.<br></br><br></br><b>CMYK + W + V Ink Printing</b><br></br>Original ink, printing bright, high degree of color reduction.</p>
            </Link>
            <Link href="/luxor-rtr-uv" className="feature-card">
              <div className="luxor-image">
                <Image
                  src="/Luxor-sf30-3.webp"
                  alt="LUXOR UV-A3 Flatbed Printer"
                  width={250}
                  height={200}
                  className="product-card-image"
                  priority
                />
              </div>
              {/* <h3>LUXOR UV-A3 WITH CYLINDER AND RTR | FLATBED PRINTER</h3> */}
              <h4>HIGH-FUNCTION DESIGN  SUPPORTING 4 APPLICATIONS</h4>
              <p><b>High-Quality Printing</b><br></br>Epson i3200(8)-U1 printhead, 1200DPI for high-resolution output.<br></br><br></br><b>Intelligent Ink Supply</b><br></br>New ink tank with auto circulation and low ink alarm.</p>
            </Link>
          </div>
        </section>

        {/* News & Events Section */}
        <NewsEventsSection />
        <div className="horizontally-scroll">
          <HorizontalScrollSection />
        </div>
        {/* 🔧 SSG CODE PATTERN: Component with no props */}
        {/* No props passed = no dynamic data = SSG will pre-render this */}
        <BranchSection />
      </main>
    </div>
  );
}

// 🔧 SSG RESULT: This entire component becomes a static .html file at build time
// Next.js detects: no async, no fetch(), no dynamic data = perfect for SSG
