"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import './promotional-display.css';

export default function PromotionalDisplayPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Product data with multiple images for slideshow
  const productData = {
    'Roll Up Banner': ['/promotional-display/roll-up-banner-aluminum.webp', '/promotional-display/roll-up-banner.webp'],
    'X Banner Stand': ['/promotional-display/x-banner-stand.webp', '/promotional-display/x-banner-stand(2).webp'],
    'Adjustable Banner Stand': ['/promotional-display/Adjustable Banner Stand(2).webp', '/promotional-display/Adjustable Banner Stand.webp'],
    'Feather Wing Banner': ['/promotional-display/Feather Wing Banner.webp', '/promotional-display/Feather Wing Banner(2).webp', '/promotional-display/Feather Wing Banner(3).webp', '/promotional-display/Feather Wing Banner(4).webp'],
    'Teardrop Banner Stand': ['/promotional-display/teardrop-banner-stand.webp', '/promotional-display/teardrop-banner-stand(2).webp', '/promotional-display/teardrop-banner-stand(3).webp', '/promotional-display/teardrop-banner-stand(4).webp', '/promotional-display/teardrop-banner-stand(5).webp'],
    'Single Sided Poster Stand': ['/promotional-display/single-sided-poster-stand-printed.webp', '/promotional-display/single-sided-poster-stand.webp', '/promotional-display/single-sided-poster-stand-closed-up.webp', '/promotional-display/single-sided-poster-stand-sets.webp'],
    'Double Sided Poster Stand': ['/promotional-display/double-sided-poster-stand.webp', '/promotional-display/double-sided-poster-stand-front.webp', '/promotional-display/double-sided-poster-stand-unprinted.webp'],
    'Iron Poster Stand': ['/promotional-display/iron poster stand.webp', '/promotional-display/iron poster stand(2).webp'],
    'Round Base Poster Banner': ['/promotional-display/round-base-poster-banner.webp', '/promotional-display/round-base-poster-banner(2).webp', '/promotional-display/round-base-poster-banner(3).webp', '/promotional-display/round-base-poster-banner(4).webp'],
    'Aluminum Easel Stand': ['/promotional-display/Aluminum Easel Stand(2).webp', '/promotional-display/Aluminum Easel Stand(3).webp', '/promotional-display/Aluminum Easel Stand.webp'],
    'Wooden Easel Stand': ['/promotional-display/wooden-easel-stand.webp', '/promotional-display/wooden-easel-stand(2).webp', '/promotional-display/wooden-easel-stand(3).webp', '/promotional-display/wooden-easel-stand(4).webp', '/promotional-display/wooden-easel-stand(5).webp', '/promotional-display/wooden-easel-stand(6).webp'],
    'Triangle Banner Easel Stand': ['/promotional-display/triangle-banner-easel-stand.webp', '/promotional-display/triangle-banner-easel-stand(2).webp', '/promotional-display/triangle-banner-easel-stand(3).webp', '/promotional-display/triangle-banner-easel-stand(4).webp', '/promotional-display/triangle-banner-easel-stand(5).webp'],
    'Human Standee': ['/promotional-display/human-standee.webp'],
    'Pop Up Structure': ['/promotional-display/pop-up-structure.webp', '/promotional-display/pop-up-structure(1).webp', '/promotional-display/pop-up-structure(2).webp', '/promotional-display/pop-up-structure(3).webp', '/promotional-display/pop-up-structure(4).webp', '/promotional-display/pop-up-structure(5).webp', '/promotional-display/pop-up-structure(6).webp', '/promotional-display/pop-up-structure(7).webp', '/promotional-display/pop-up-structure(8).webp', '/promotional-display/pop-up-structure(9).webp'],
    'Portable Backdrop': ['/promotional-display/portable-backdrop.webp', '/promotional-display/portable-backdrop(2).webp', '/promotional-display/portable-backdrop(3).webp', '/promotional-display/portable-backdrop(4).webp'],
    'Mini Promotional Booth': ['/promotional-display/promotional-booth-small.webp', '/promotional-display/promotional-booth-small(2).webp', '/promotional-display/promotional-booth-small(3).webp', '/promotional-display/promotional-booth-small(4).webp'],
    'Regular Promotional Booth': ['/promotional-display/promotional-booth-regular.webp', '/promotional-display/promotional-booth-regular(2).webp', '/promotional-display/promotional-booth-regular(3).webp'],
    'Semi Circle Promotional Booth': ['/promotional-display/promotional-booth-semi-circle.webp', '/promotional-display/promotional-booth-semi-circle(2).webp', '/promotional-display/promotional-booth-semi-circle(3).webp', '/promotional-display/promotional-booth-semi-circle(4).webp', '/promotional-display/promotional-booth-semi-circle(5).webp'],
    'Door Frame Banner Stand': ['/promotional-display/door-frame-banner-stand.webp', '/promotional-display/door-frame-banner-stand(2).webp', '/promotional-display/door-frame-banner-stand(3).webp', '/promotional-display/door-frame-banner-stand(4).webp', '/promotional-display/door-frame-banner-stand(5).webp'],
    'Aluminum Data Rack': ['/promotional-display/data-rack-aluminum.webp', '/promotional-display/data-rack-aluminum(2).webp'],
    'Iron Data Rack': ['/promotional-display/data-rack-iron.webp', '/promotional-display/data-rack-iron(2).webp'],
    'New Rotating Lightbox': ['/promotional-display/Rotating Lightbox Round 3 (1).webp', '/promotional-display/Primex Rotating Lightbox Round B (Upper) (3).webp', '/promotional-display/Primex Rotating Lightbox Round B (Upper) (4).webp'],
    'LED Menu Lightbox Double Poles Stand': ['/promotional-display/lead menu lightbox double poles stand(2).webp', '/promotional-display/lead menu lightbox double poles stand.webp'],
    'New Windproof Display': ['/promotional-display/Windproof Display  (2).webp']
  };

  const openLightbox = (productName) => {
    setSelectedProduct(productName);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct && productData[selectedProduct]) {
      setCurrentImageIndex((prev) =>
        prev === productData[selectedProduct].length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && productData[selectedProduct]) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? productData[selectedProduct].length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Header />
      <div className="promotional-display-container">
        <div className="promotional-display-header">
          <h1 className="promotional-display-title">Promotional Display Solutions</h1>
          <p className="promotional-display-description">
            Professional promotional displays, banners, and exhibition materials designed to maximize your brand visibility
            and create impactful marketing experiences. From trade shows to retail environments, we provide complete
            promotional display solutions that capture attention and drive results.
          </p>
        </div>

        {/* Banner & Display Systems */}
        <div className="promotional-display-category">
          <h2 className="promotional-display-category-title">Banner & Display Systems</h2>
          <div className="promotional-display-grid">
            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Roll Up Banner')}>
                <Image
                  src="/promotional-display/roll-up-banner-iron.webp"
                  alt="Roll Up Banner"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Roll Up Banner</h3>
                <p className="promotional-display-desc">
                  Portable retractable banners perfect for trade shows, presentations, and retail displays.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Easy setup and breakdown</li>
                    <li>Compact carrying case</li>
                    <li>Premium aluminum base</li>
                    <li>High-resolution graphics</li>
                    <li>Multiple size options</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Events</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('X Banner Stand')}>
                <Image
                  src="/promotional-display/x-banner-stand(2).webp"
                  alt="X Banner Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">X Banner Stand</h3>
                <p className="promotional-display-desc">
                  Lightweight and portable X-frame banner stands ideal for indoor events and promotions.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>X-shaped frame design</li>
                    <li>Quick assembly</li>
                    <li>Lightweight construction</li>
                    <li>Affordable solution</li>
                    <li>Easy graphic replacement</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Indoor Events</span>
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Presentations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Adjustable Banner Stand')}>
                <Image
                  src="/promotional-display/Adjustable Banner Stand.webp"
                  alt="Adjustable Banner Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Adjustable Banner Stand</h3>
                <p className="promotional-display-desc">
                  Versatile banner stands with adjustable height and width for various display needs.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Adjustable dimensions</li>
                    <li>Telescopic poles</li>
                    <li>Flexible sizing</li>
                    <li>Durable construction</li>
                    <li>Easy setup</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Exhibitions</span>
                    <span className="promotional-display-application-tag">Backdrops</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Feather Wing Banner')}>
                <Image
                  src="/promotional-display/Feather Wing Banner.webp"
                  alt="Feather Wing Banner"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Feather Wing Banner</h3>
                <p className="promotional-display-desc">
                  Eye-catching feather-shaped outdoor banners that flutter in the wind for maximum visibility.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Weather-resistant materials</li>
                    <li>Flexible fiberglass poles</li>
                    <li>Ground spike included</li>
                    <li>Wing-shaped design</li>
                    <li>Double-sided printing</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Outdoor Events</span>
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Automotive</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Teardrop Banner Stand')}>
                <Image
                  src="/promotional-display/teardrop-banner-stand.webp"
                  alt="Teardrop Banner Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Teardrop Banner Stand</h3>
                <p className="promotional-display-desc">
                  Unique teardrop-shaped banners perfect for outdoor events and high-visibility marketing.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Teardrop shape design</li>
                    <li>Wind-resistant structure</li>
                    <li>Ground spike or base options</li>
                    <li>Durable fabric material</li>
                    <li>Portable carrying bag</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Outdoor Promotions</span>
                    <span className="promotional-display-application-tag">Sports Events</span>
                    <span className="promotional-display-application-tag">Retail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Poster & Display Stands */}
        <div className="promotional-display-category">
          <h2 className="promotional-display-category-title">Poster & Display Stands</h2>
          <div className="promotional-display-grid">
            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Single Sided Poster Stand')}>
                <Image
                  src="/promotional-display/single-sided-poster-stand-printed.webp"
                  alt="Single Sided Poster Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Single Sided Poster Stand</h3>
                <p className="promotional-display-desc">
                  Professional single-sided poster stands for indoor advertising and information display.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Single-sided display</li>
                    <li>Snap frame design</li>
                    <li>Easy poster changes</li>
                    <li>Stable base</li>
                    <li>Multiple sizes available</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Lobbies</span>
                    <span className="promotional-display-application-tag">Events</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Double Sided Poster Stand')}>
                <Image
                  src="/promotional-display/double-sided-poster-stand.webp"
                  alt="Double Sided Poster Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Double Sided Poster Stand</h3>
                <p className="promotional-display-desc">
                  Double-sided poster stands for maximum visibility from multiple viewing angles.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Double-sided display</li>
                    <li>360-degree visibility</li>
                    <li>Weighted base</li>
                    <li>Quick poster changes</li>
                    <li>Durable frame</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Malls</span>
                    <span className="promotional-display-application-tag">Exhibitions</span>
                    <span className="promotional-display-application-tag">Hallways</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Iron Poster Stand')}>
                <Image
                  src="/promotional-display/iron poster stand.webp"
                  alt="Iron Poster Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Iron Poster Stand</h3>
                <p className="promotional-display-desc">
                  Heavy-duty iron poster stands for outdoor and high-traffic indoor locations.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Heavy iron construction</li>
                    <li>Weather-resistant finish</li>
                    <li>Stable and durable</li>
                    <li>Powder-coated frame</li>
                    <li>Long-lasting design</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Outdoor</span>
                    <span className="promotional-display-application-tag">Restaurants</span>
                    <span className="promotional-display-application-tag">Retail</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Round Base Poster Banner')}>
                <Image
                  src="/promotional-display/round-base-poster-banner.webp"
                  alt="Round Base Poster Banner"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Round Base Poster Banner</h3>
                <p className="promotional-display-desc">
                  Elegant poster banners with round weighted base for stability and professional appearance.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Circular weighted base</li>
                    <li>Stable design</li>
                    <li>Chrome finish options</li>
                    <li>Easy assembly</li>
                    <li>Professional look</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Hotels</span>
                    <span className="promotional-display-application-tag">Conferences</span>
                    <span className="promotional-display-application-tag">Lobbies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Easel & Specialty Stands */}
        <div className="promotional-display-category">
          <h2 className="promotional-display-category-title">Easel & Specialty Stands</h2>
          <div className="promotional-display-grid">
            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Aluminum Easel Stand')}>
                <Image
                  src="/promotional-display/Aluminum Easel Stand(2).webp"
                  alt="Aluminum Easel Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Aluminum Easel Stand</h3>
                <p className="promotional-display-desc">
                  Lightweight aluminum easel stands perfect for presentations and display boards.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Lightweight aluminum</li>
                    <li>Adjustable height</li>
                    <li>Foldable design</li>
                    <li>Portable and compact</li>
                    <li>Supports various sizes</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Presentations</span>
                    <span className="promotional-display-application-tag">Art Displays</span>
                    <span className="promotional-display-application-tag">Weddings</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Wooden Easel Stand')}>
                <Image
                  src="/promotional-display/wooden-easel-stand(6).webp"
                  alt="Wooden Easel Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Wooden Easel Stand</h3>
                <p className="promotional-display-desc">
                  Classic wooden easel stands providing elegant display solution for various settings.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Natural wood construction</li>
                    <li>Classic design</li>
                    <li>Adjustable ledge</li>
                    <li>Sturdy and stable</li>
                    <li>Premium finish</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Weddings</span>
                    <span className="promotional-display-application-tag">Restaurants</span>
                    <span className="promotional-display-application-tag">Art Galleries</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Triangle Banner Easel Stand')}>
                <Image
                  src="/promotional-display/triangle-banner-easel-stand.webp"
                  alt="Triangle Banner Easel Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Triangle Banner Easel Stand</h3>
                <p className="promotional-display-desc">
                  Unique triangular base easel stands offering superior stability and modern aesthetics.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Triangular base design</li>
                    <li>Enhanced stability</li>
                    <li>Modern appearance</li>
                    <li>Adjustable support</li>
                    <li>Easy setup</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Events</span>
                    <span className="promotional-display-application-tag">Galleries</span>
                    <span className="promotional-display-application-tag">Conferences</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Human Standee')}>
                <Image
                  src="/promotional-display/human-standee.webp"
                  alt="Human Standee"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Human Standee</h3>
                <p className="promotional-display-desc">
                  Life-size human cutout standees perfect for promotional displays and photo opportunities.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Life-size printing</li>
                    <li>Cardboard or foam board</li>
                    <li>Self-supporting design</li>
                    <li>Custom shapes available</li>
                    <li>High-quality printing</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Movie Promotions</span>
                    <span className="promotional-display-application-tag">Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition & Specialty Systems */}
        <div className="promotional-display-category">
          <h2 className="promotional-display-category-title">Exhibition & Specialty Systems</h2>
          <div className="promotional-display-grid">
            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Pop Up Structure')}>
                <Image
                  src="/promotional-display/pop-up-structure.webp"
                  alt="Pop Up Structure"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Pop Up Structure</h3>
                <p className="promotional-display-desc">
                  Large format pop-up display structures for trade shows and exhibitions with maximum impact.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Lightweight frame system</li>
                    <li>Magnetic panel attachment</li>
                    <li>Tool-free assembly</li>
                    <li>Wheeled shipping cases</li>
                    <li>Custom graphics</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Exhibitions</span>
                    <span className="promotional-display-application-tag">Conventions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Portable Backdrop')}>
                <Image
                  src="/promotional-display/portable-backdrop.webp"
                  alt="Portable Backdrop"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Portable Backdrop</h3>
                <p className="promotional-display-desc">
                  Portable backdrop systems perfect for photo booths, presentations, and event displays.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Lightweight and portable</li>
                    <li>Telescopic frame</li>
                    <li>Easy setup</li>
                    <li>Wrinkle-free graphics</li>
                    <li>Carrying bag included</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Photo Booths</span>
                    <span className="promotional-display-application-tag">Events</span>
                    <span className="promotional-display-application-tag">Presentations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Mini Promotional Booth')}>
                <Image
                  src="/promotional-display/promotional-booth-small(3).webp"
                  alt="Mini Promotional Booth"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Mini Promotional Booth</h3>
                <p className="promotional-display-desc">
                  Compact promotional booth perfect for small spaces and intimate trade show setups.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Compact modular design</li>
                    <li>Easy setup and transport</li>
                    <li>Counter and shelving options</li>
                    <li>Custom branding</li>
                    <li>Lightweight frame</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Small Trade Shows</span>
                    <span className="promotional-display-application-tag">Job Fairs</span>
                    <span className="promotional-display-application-tag">Pop-up Events</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Regular Promotional Booth')}>
                <Image
                  src="/promotional-display/promotional-booth-regular(3).webp"
                  alt="Regular Promotional Booth"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Regular Promotional Booth</h3>
                <p className="promotional-display-desc">
                  Standard promotional booth with complete features for professional trade show presence.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Full-size modular booth system</li>
                    <li>Multiple counter options</li>
                    <li>Custom branding panels</li>
                    <li>Professional lighting ready</li>
                    <li>Storage solutions included</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Exhibitions</span>
                    <span className="promotional-display-application-tag">Conventions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Semi Circle Promotional Booth')}>
                <Image
                  src="/promotional-display/promotional-booth-semi-circle.webp"
                  alt="Semi Circle Promotional Booth"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Semi Circle Promotional Booth</h3>
                <p className="promotional-display-desc">
                  Unique curved design booth that creates an inviting space and maximizes visibility.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Semi-circular curved design</li>
                    <li>360-degree visibility</li>
                    <li>Eye-catching appearance</li>
                    <li>Modular configuration</li>
                    <li>Premium finish options</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Premium Exhibitions</span>
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Product Launches</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Door Frame Banner Stand')}>
                <Image
                  src="/promotional-display/door-frame-banner-stand.webp"
                  alt="Door Frame Banner Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Door Frame Banner Stand</h3>
                <p className="promotional-display-desc">
                  Space-saving banner stands designed to fit in doorways and narrow spaces.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Doorway-sized design</li>
                    <li>Space-efficient</li>
                    <li>Easy installation</li>
                    <li>Tension-based system</li>
                    <li>Portable</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Retail Entrances</span>
                    <span className="promotional-display-application-tag">Events</span>
                    <span className="promotional-display-application-tag">Exhibitions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Aluminum Data Rack')}>
                <Image
                  src="/promotional-display/data-rack-aluminum(2).webp"
                  alt="Aluminum Data Rack"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Aluminum Data Rack</h3>
                <p className="promotional-display-desc">
                  Lightweight aluminum literature and brochure display racks with modern design.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Lightweight aluminum frame</li>
                    <li>Multiple pocket options</li>
                    <li>Portable and easy to move</li>
                    <li>Sleek modern appearance</li>
                    <li>Freestanding or wall-mount</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Offices</span>
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Lobbies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('Iron Data Rack')}>
                <Image
                  src="/promotional-display/data-rack-iron.webp"
                  alt="Iron Data Rack"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Iron Data Rack</h3>
                <p className="promotional-display-desc">
                  Heavy-duty iron literature racks providing durability and stability for high-traffic areas.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Sturdy iron construction</li>
                    <li>Heavy-duty stability</li>
                    <li>Multiple pocket configurations</li>
                    <li>Powder-coated finish</li>
                    <li>Long-lasting durability</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Reception Areas</span>
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Retail Stores</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('New Rotating Lightbox')}>
                <Image
                  src="/promotional-display/Rotating Lightbox Round 3 (1).webp"
                  alt="New Rotating Lightbox"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">New Rotating Lightbox</h3>
                <p className="promotional-display-desc">
                  Illuminated rotating lightboxes for dynamic advertising and maximum attention.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>360-degree rotation</li>
                    <li>LED illumination</li>
                    <li>Energy efficient</li>
                    <li>Programmable speed</li>
                    <li>Multiple graphic panels</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Malls</span>
                    <span className="promotional-display-application-tag">Exhibitions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('LED Menu Lightbox Double Poles Stand')}>
                <Image
                  src="/promotional-display/lead menu lightbox double poles stand.webp"
                  alt="LED Menu Lightbox Double Poles Stand"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">LED Menu Lightbox Double Poles Stand</h3>
                <p className="promotional-display-desc">
                  Illuminated menu display stands with dual support poles for restaurants and retail.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>LED backlit display</li>
                    <li>Double pole support</li>
                    <li>Weather-resistant option</li>
                    <li>Easy graphic changes</li>
                    <li>Energy-efficient LED</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Restaurants</span>
                    <span className="promotional-display-application-tag">Fast Food</span>
                    <span className="promotional-display-application-tag">Retail</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <div className="promotional-image-wrapper" onClick={() => openLightbox('New Windproof Display')}>
                <Image
                  src="/promotional-display/Windproof Display  (2).webp"
                  alt="New Windproof Display"
                  width={180}
                  height={135}
                  className="promotional-display-image"
                />
                <div className="promotional-image-overlay">
                  <span>Click to view gallery</span>
                </div>
              </div>
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">New Windproof Display</h3>
                <p className="promotional-display-desc">
                  Heavy-duty windproof displays designed to withstand outdoor weather conditions.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Wind-resistant design</li>
                    <li>Heavy base included</li>
                    <li>Weather-resistant materials</li>
                    <li>Reinforced structure</li>
                    <li>Outdoor rated</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Outdoor Events</span>
                    <span className="promotional-display-application-tag">Street Promotions</span>
                    <span className="promotional-display-application-tag">Retail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="promotional-display-info-section">
          <h2>Why Choose Kelin for Promotional Displays?</h2>
          <div className="promotional-display-info-grid">
            <div className="promotional-display-info-item">
              <h3>Professional Quality</h3>
              <p>
                High-resolution printing and premium materials ensure your promotional displays
                look professional and make a lasting impression on your audience.
              </p>
            </div>
            <div className="promotional-display-info-item">
              <h3>Custom Solutions</h3>
              <p>
                Every promotional display is customized to your brand specifications with
                attention to detail and quality craftsmanship.
              </p>
            </div>
            <div className="promotional-display-info-item">
              <h3>Fast Turnaround</h3>
              <p>
                Quick production and delivery times to meet your event deadlines and
                marketing campaign launch dates.
              </p>
            </div>
            <div className="promotional-display-info-item">
              <h3>Complete Service</h3>
              <p>
                From design consultation to installation support, we provide comprehensive
                service for all your promotional display needs.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="promotional-display-contact-section">
          <h2>Ready to Make an Impact?</h2>
          <p>
            Contact us today to discuss your promotional display needs and discover how we can help
            you create memorable marketing experiences that drive results.
          </p>
          <div className="promotional-display-contact-buttons">
            <Link href="/contact" className="btn-primary-promotional">
              Get Quote
            </Link>
            <Link href="/explore" className="btn-secondary-promotional">
              View Gallery
            </Link>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedProduct && (
          <div className="promotional-lightbox-overlay" onClick={closeLightbox}>
            <div className="promotional-lightbox-content" onClick={(e) => e.stopPropagation()}>
              {/* Lightbox Header */}
              <div className="promotional-lightbox-header">
                <h2 className="promotional-lightbox-title">{selectedProduct}</h2>
                <div className="promotional-lightbox-actions">
                  <Link href="/contact" className="promotional-inquiry-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Send Inquiry
                  </Link>
                  <button className="promotional-lightbox-close" onClick={closeLightbox}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Slideshow Container */}
              <div className="promotional-slideshow-container">
                <img
                  src={productData[selectedProduct][currentImageIndex]}
                  alt={selectedProduct}
                  className="promotional-slideshow-image"
                />

                {productData[selectedProduct].length > 1 && (
                  <>
                    <button className="promotional-slideshow-btn promotional-prev-btn" onClick={prevImage}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button className="promotional-slideshow-btn promotional-next-btn" onClick={nextImage}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Dot indicators */}
                    <div className="promotional-slideshow-dots">
                      {productData[selectedProduct].map((_, index) => (
                        <button
                          key={index}
                          className={`promotional-dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => goToImage(index)}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}