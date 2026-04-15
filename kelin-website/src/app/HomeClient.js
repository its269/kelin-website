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
import "./arial-bold-font.css";

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
      link: "/solutions-industrial-sublimation"
    },
    {
      id: 2,
      image: "/Solutions Category/Textile and Apparel.webp",
      title: "Textile and Apparel",
      description: "Complete textile printing solutions for fashion, sportswear, and custom apparel with advanced color management and fabric compatibility for professional results.",
      buttonText: "Learn More",
      link: "/solutions-textile-apparel"
    },
    {
      id: 3,
      image: "/Solutions Category/Direct to Film (DTF).webp",
      title: "Direct to Film (DTF)",
      description: "Revolutionary DTF printing technology for versatile fabric decoration, enabling full-color transfers on any textile with superior durability and flexibility.",
      buttonText: "Learn More",
      link: "/solutions-dtf"
    },
    {
      id: 4,
      image: "/Solutions Category/UV DTF.webp",
      title: "UV DTF",
      description: "Next-generation UV DTF printing for hard surfaces and specialty applications, delivering vibrant prints with instant curing and exceptional adhesion on diverse materials.",
      buttonText: "Learn More",
      link: "/solutions-uv-dtf"
    },
    {
      id: 5,
      image: "/Solutions Category/Threadwork.webp",
      title: "Threadwork",
      description: "Professional embroidery and knitting solutions for custom logos, designs, and decorative patterns with precision stitching technology for apparel and textiles.",
      buttonText: "Learn More",
      link: "/solutions-threadwork"
    },
    {
      id: 6,
      image: "/Solutions Category/Digital Printing Equipment.webp",
      title: "Digital Printing Equipment",
      description: "State-of-the-art digital printing machines for large format graphics, banners, and signage with high-speed production and exceptional print quality.",
      buttonText: "Learn More",
      link: "/solutions-digital-printing-equipment"
    },
    {
      id: 7,
      image: "/Solutions Category/Signage.webp",
      title: "Signages",
      description: "Comprehensive signage solutions including indoor and outdoor displays, channel letters, LED signs, and custom fabrication for commercial and retail applications.",
      buttonText: "Learn More",
      link: "/solutions-signages"
    },
    {
      id: 8,
      image: "/Solutions Category/Industrial Cutter.webp",
      title: "Industrial Cutter",
      description: "Heavy-duty industrial cutting machines for vinyl, fabric, leather, and specialty materials with precision control and automated workflow integration.",
      buttonText: "Learn More",
      link: "/solutions-industrial-cutter"
    },
    {
      id: 9,
      image: "/Solutions Category/Cutting Solutions.webp",
      title: "Cutting Solution",
      description: "Complete cutting solutions for graphics, packaging, and prototype development with CAM software integration and multi-tool compatibility for diverse materials.",
      buttonText: "Learn More",
      link: "/solutions-cutting-machines"
    },
    {
      id: 10,
      image: "/Solutions Category/Laser Machine Solution.webp",
      title: "Laser Machine Solution",
      description: "Advanced laser cutting and engraving systems for acrylic, wood, metal, and fabric with precision control for intricate designs and industrial production.",
      buttonText: "Learn More",
      link: "/solutions-laser-machines"
    },
    {
      id: 11,
      image: "/Solutions Category/Personalized Machine Solution.webp",
      title: "Personalized Machine Solution",
      description: "Custom-configured printing equipment tailored to your specific business needs, workflow requirements, and production goals with dedicated support and training.",
      buttonText: "Learn More",
      link: "/solutions-personalize-machines"
    },
    {
      id: 12,
      image: "/Solutions Category/Exhibition Displays.webp",
      title: "Exhibition Displays",
      description: "Professional trade show and exhibition display systems including portable booths, banner stands, and promotional structures for impactful brand presentations.",
      buttonText: "Learn More",
      link: "/solutions-exhibition-display"
    },
    {
      id: 13,
      image: "/Solutions Category/Substrates and Materials.webp",
      title: "Substrates and Materials",
      description: "Premium printing substrates, transfer papers, films, and specialty materials optimized for sublimation, DTF, UV, and eco-solvent printing applications.",
      buttonText: "Explore",
      link: "/solutions-substrates-materials"
    }
  ];

  return (
    <div className="main">
      <Header />
      <main className="home-container">
        <div className="marquee-container">
          <section className="hero-section">
            <div className="hero-section2">
              <div className="home-tagline-text">
                <div className="tagline">
                  <h1 className="hero1-title">YOUR TRUSTED<br></br>LONG-TERM PRINTING SOLUTIONS PROVIDER</h1>
                  <div className="button-categories">
                    <a href="/cutting-machine" className="btns">
                      <div className="btns-primary-cat">Cutting Machine</div>
                    </a>
                    <a href="/eco-solvent-printers" className="btns">
                      <div className="btns-secondary-cat">Eco-Solvent<br></br>Printer Machine</div>
                    </a>
                    <a href="/solvent-printers" className="btns">
                      <div className="btns-tertiary-cat">Solvent<br></br>Printer Machine</div>
                    </a>
                    <a href="/sublimation-dtf" className="btns">
                      <div className="btns-quaternary-cat">Sublimation<br></br>Printer Machine</div>
                    </a>
                    <a href="/embroidery-knitting" className="btns">
                      <div className="btns-quinary-cat">Embroidery<br></br>Knitting</div>
                    </a>
                  </div>
                </div>
                <div className="hero-image">
                  <Slideshow />
                </div>
              </div>
            </div>
            <img src="/background-elements.svg" alt="Decorative Element" className="decorative-element-home bg-elements-home" />
            <img src="/background-elements(2).svg" alt="Decorative Element 2" className="decorative-element-2-home bg-elements-home" />
          </section>

          <div className="marquee-logo">
            <MarqueeLogo />
          </div>
        </div>

        <div className="horizontal-click-scroll">
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
          <div className="luxor-components">
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
                <h4>HIGH-FUNCTION DESIGN SUPPORTING 4 APPLICATIONS</h4>
                <p><b>High-Quality Printing</b><br></br>Epson i3200(8)-U1 printhead, 1200DPI for high-resolution output.<br></br><br></br><b>Intelligent Ink Supply</b><br></br>New ink tank with auto circulation and low ink alarm.</p>
              </Link>
            </div>
          </div>
          <img src="/background-elements.svg" alt="LUXOR Background" className="luxor-background-elements luxor-bg-elements" />
          <img src="/background-elements(2).svg" alt="LUXOR Background" className="luxor-background-elements2 luxor-bg-elements" />
        </section>

        <NewsEventsSection />
        <div className="horizontally-scroll">
          <HorizontalScrollSection />
        </div>
        <BranchSection />
      </main>
    </div>
  );
}