'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import './explore.css';

export default function Explore() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    {
      src: '/slider/Carousel1.png',
      alt: 'Printing Solutions',
      title: 'Built for Every Stage of Printing',
      description: 'Discover an integrated range of professional printing products, featuring premium-grade inks, reliable materials, innovative machinery, and productivity-driven accessories.',
      buttonLink: '/products'
    },
    {
      src: '/slider/Carousel2.png',
      alt: 'Materials',
      title: 'Precision Engineering for Perfect Results',
      description: 'Advanced machinery designed for professional channel letter fabrication, delivering consistent quality and efficiency for your signage business.',
      buttonLink: '/machine'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const productCategories = [
    {
      id: 'inks',
      name: 'Inks',
      description: 'Premium quality inks designed for professional printing applications including eco-solvent, latex, UV-curable, and water-based formulations.',
      icon: '/inks.png',
      productCount: '12+',
      href: '/inks',
      image: '/cat_inks.webp',
      products: [
        { name: 'Eco-Solvent Inks', desc: 'Environmental-friendly outdoor graphics' },
        { name: 'Latex Inks', desc: 'Water-based indoor/outdoor solutions' },
        { name: 'UV-Curable Inks', desc: 'Instant curing for rigid substrates' }
      ]
    },
    {
      id: 'materials',
      name: 'Materials',
      description: 'High-performance printing materials and substrates for every application, from flexible vinyls to rigid panels and specialty textiles.',
      icon: '/materials.png',
      productCount: '8+',
      href: '/materials',
      image: '/cat_materials.webp',
      products: [
        { name: 'Vinyl Films', desc: 'Adhesive and non-adhesive options' },
        { name: 'Canvas & Textiles', desc: 'Fabric materials for soft signage' },
        { name: 'Rigid Substrates', desc: 'Boards and panels for displays' }
      ]
    },
    {
      id: 'machines',
      name: 'Machines',
      description: 'State-of-the-art printing and finishing equipment including printers, cutters, laminators, and heat presses for professional production.',
      icon: '/machines.png',
      productCount: '10+',
      href: '/machine',
      image: '/cat_machine.webp',
      products: [
        { name: 'Digital Printers', desc: 'Wide format printing solutions' },
        { name: 'Cutting Plotters', desc: 'Precision cutting equipment' },
        { name: 'Laminators', desc: 'Hot and cold lamination systems' }
      ]
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Essential accessories and consumables including maintenance kits, software solutions, and professional installation tools.',
      icon: '/accessories.png',
      productCount: '15+',
      href: '/accessories',
      image: '/cat_accessories.webp',
      products: [
        { name: 'Maintenance Kits', desc: 'Keep equipment running smoothly' },
        { name: 'RIP Software', desc: 'Color management solutions' },
        { name: 'Installation Tools', desc: 'Professional application tools' }
      ]
    },
    {
      id: 'promotional-display',
      name: 'Promotional Display',
      description: 'Eye-catching display solutions for marketing including banner stands, pop-up displays, and exhibition systems.',
      icon: '/display.png',
      productCount: '6+',
      href: '/promotional-display',
      image: '/cat_promotional-display.webp',
      products: [
        { name: 'Banner Stands', desc: 'Portable retractable systems' },
        { name: 'Pop-up Displays', desc: 'Trade show exhibitions' },
        { name: 'Display Frames', desc: 'Wall-mounted solutions' }
      ]
    }
  ];

  return (
    <div>
      <Header />
      <main className="explore-main">
        {/* Hero Section with Image Slider */}
        <section className="explore-hero-slider">
          <div className="hero-slider-wrapper">
            <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {sliderImages.map((image, index) => (
                <div key={index} className="hero-slide">
                  <img src={image.src} alt={image.alt} />
                  <div className="slide-overlay"></div>
                  <div className="slide-text-overlay">
                    <div className="slide-text-content">
                      <h1 className="slide-title">{image.title}</h1>
                      <p className="slide-description">{image.description}</p>
                    </div>
                    <Link href={image.buttonLink} className="slide-explore-btn">
                      EXPLORE NOW
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls-bottom">
              <div className="slider-dots">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="quick-navigation">
          <div className="section-header">
            <h2>Quick Category Access</h2>
            <p>Navigate directly to any product category with ease.</p>
          </div>
          <div className="quick-nav-grid">
            {productCategories.map((category) => (
              <Link key={category.id} href={category.href} className="quick-nav-card">
                <div className="nav-icon">
                  <img src={category.icon} alt={category.name} />
                </div>
                <h3>{category.name}</h3>
                <span className="product-count">{category.productCount} Products</span>
                <div className="nav-arrow">→</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <div className="explore-main-content">
          <section className="product-categories">
            <div className="section-header">
              <h2 className="categories-h2">Product Categories</h2>
              <p>Comprehensive solutions for all your printing needs</p>
            </div>

            <div className="categories-grid">
              {productCategories.map((category, index) => (
                <div key={category.id} className={`category-showcase ${index % 2 === 1 ? 'reversed' : ''}`}>
                  <div className="category-content">
                    <div className="category-info">
                      <div className="category-header">
                        <span className="category-icon">
                          <img src={category.icon} alt={category.name} />
                        </span>
                        <h3 className="category-name">{category.name}</h3>
                      </div>
                      <p className="category-description">{category.description}</p>
                      <div className="category-products">
                        {category.products.map((product, idx) => (
                          <div key={idx} className="product-item">
                            <h4>{product.name}</h4>
                            <p>{product.desc}</p>
                          </div>
                        ))}
                      </div>
                      <Link href={category.href} className="category-link">
                        Explore {category.name} →
                      </Link>
                    </div>
                    <div className="category-visual">
                      <img src={category.image} alt={category.name} />
                      <div className="visual-overlay">
                        <span className="product-badge">{category.productCount} Products</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <img src="/background-elements.svg" alt="Decorative Element" className="decorative-element bg-elements" />
          <img src="/background-elements(2).svg" alt="Decorative Element 2" className="decorative-element-2 bg-elements" /> */}
          </section>
          <img src="/background-elements.svg" alt="Decorative Element" className="decorative-element bg-elements" />
          <img src="/background-elements(2).svg" alt="Decorative Element 2" className="decorative-element-2 bg-elements" />
        </div>
      </main>
    </div>
  );
}