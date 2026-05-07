"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import './accessories.css';

export default function AccessoriesDisplayPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Comprehensive Product Data extracted from the image
  const categories = [
    {
      title: "Cutting & Shaping Tools",
      products: [
        {
          name: 'Cordless Electric Scissors & Blades',
          desc: 'Portable electric scissors and replacement cutter blades.',
          specs: 'Standard cordless unit; replacement blades sold separately.',
          features: ['Fast and effortless cutting', 'Ergonomic design', 'Easily replaceable blades'],
          images: [
            { src: '/assets/Accessories/Electric Scissor.webp', label: 'Electric Scissors' },
            { src: '/assets/Accessories/Electric Scissor - Balde.webp', label: 'Replacement Blade' },
          ]
        },
        {
          name: 'Grid Lines Cutting Mat',
          desc: 'Self-healing cutting mats with grid lines for precise measuring and cutting.',
          specs: 'Available sizes: 60cm x 90cm (2ft x 3ft) and 120cm x 180cm (4ft x 6ft).',
          features: ['Surface protection', 'Measurement grid', 'Self-healing material'],
          images: [{ src: '/assets/Accessories/Cutting Mat.webp', label: 'Grid Lines Cutting Mat' }]
        },
        {
          name: 'Acrylic Letter Making Bender Machine Tool',
          desc: 'Specialized tool for shaping and bending acrylic for channel letters.',
          specs: 'Manual operation tool for acrylic fabrication.',
          features: ['Precise angle bending', 'Durable construction', 'Essential for signage making'],
          images: [
            { src: '/assets/Accessories/Acrylic bender 1.webp', label: 'Acrylic Bender' },
            { src: '/assets/Accessories/Acrylic bender 2.webp', label: 'Acrylic Bender (Detail)' },
          ]
        }
      ]
    },
    {
      title: "Tapes & Adhesives",
      products: [
        {
          name: 'ARKI Cyano Adhesive',
          desc: 'Fast-acting, strong cyanoacrylate adhesive.',
          specs: 'Size: 30g bottle.',
          features: ['Quick drying', 'High bond strength', 'Versatile application'],
          images: [{ src: '/assets/Accessories/Arki.webp', label: 'ARKI Cyano Adhesive' }]
        },
        {
          name: 'Double Sided Foam Tape (S333P White)',
          desc: 'High-tack double-sided foam tape for mounting and cushioning.',
          specs: 'Size: 20mm x 10m and 20mm x 25m.',
          features: ['Excellent gap filling', 'Strong adhesion', 'Vibration dampening'],
          images: [{ src: '/assets/Accessories/Foam tape.webp', label: 'Double Sided Foam Tape (S333P)' }]
        },
        {
          name: 'Double Sided PET Tape (S338 Red)',
          desc: 'Heavy-duty double-sided PET tape for secure bonding.',
          specs: 'Size: 20mm width. Available in 5m, 10m, and 25m lengths.',
          features: ['High temperature resistance', 'Strong tensile strength', 'Clear bond line'],
          images: [{ src: '/assets/Accessories/Red Banner Tape.webp', label: 'Double Sided PET Tape (S338)' }]
        },
        {
          name: 'Double Sided Banner Tape (S335)',
          desc: 'Specialized tape designed for hemming and seaming banners.',
          specs: 'Size: 20mm x 25m.',
          features: ['Weather resistant', 'Hemming alternative', 'High initial tack'],
          images: [{ src: '/assets/Accessories/Yellow tape.webp', label: 'Double Sided Banner Tape (S335)' }]
        },
        {
          name: 'Reflective Tape',
          desc: 'High-visibility safety and hazard warning tape.',
          specs: 'Size: 50mm x 10m. Variants: S501 (Black/Yellow) and S502 (Red/White).',
          features: ['High retro-reflectivity', 'Self-adhesive', 'Durable outdoor use'],
          images: [{ src: '/assets/Accessories/Reflective tape.webp', label: 'Reflective Tape' }]
        }
      ]
    },
    {
      title: "Finishing & Application Hardware",
      products: [
        {
          name: 'Eyelet #2 & Punchers',
          desc: 'Banner finishing hardware and punching machines.',
          specs: 'Eyelet #2 pack (1880 pcs, 10mm x 19mm x 5.7mm). Machines: Press Puncher, Semi-automatic Puncher, Manual Puncher.',
          features: ['Rust resistant eyelets', 'Efficient banner finishing', 'Multiple machine options'],
          images: [{ src: '/dummy-image-square.jpg', label: 'Eyelet #2 & Punchers' }]
        },
        {
          name: 'Application Squeegees',
          desc: 'Tools for applying vinyl, stickers, and films smoothly.',
          specs: 'Variants: 10x7cm No Logo (Velvet/Standard), 10x14cm White, and Cotton Squeegee with handle (14x9cm).',
          features: ['Smooth application', 'Bubble and wrinkle removal', 'Scratch-free velvet options'],
          images: [{ src: '/dummy-image-square.jpg', label: 'Application Squeegees' }]
        }
      ]
    },
    {
      title: "Cleaning & Maintenance Supplies",
      products: [
        {
          name: 'Swab (Print Head Use)',
          desc: 'Specialized cleaning swabs for delicate printer components.',
          specs: 'Lint-free, solvent-compatible swabs.',
          features: ['Safe for printheads', 'High absorbency', 'Leaves no residue'],
          images: [{ src: '/dummy-image-square.jpg', label: 'Swab (Print Head Use)' }]
        },
        {
          name: 'Wiper Polyester',
          desc: 'Cleanroom-grade polyester wipers for general maintenance.',
          specs: 'Quantity: 150 pcs per pack.',
          features: ['Lint-free material', 'Durable and tear-resistant', 'Chemical resistant'],
          images: [{ src: '/dummy-image-square.jpg', label: 'Wiper Polyester' }]
        },
        {
          name: 'Glass Wiper Rubber Strip',
          desc: 'Handheld wiper for cleaning large glass or flat surfaces.',
          specs: 'Yellow Handle, Size: 11.8cm x 14.5cm.',
          features: ['Streak-free cleaning', 'Comfortable grip handle', 'Durable rubber edge'],
          images: [{ src: '/dummy-image-square.jpg', label: 'Glass Wiper Rubber Strip' }]
        }
      ]
    }
  ];

  const openLightbox = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Header />
      <div className="accessories-container">
        <div className="accessories-header">
          <h1 className="accessories-title">Premium Accessories & Tools</h1>
          <p className="accessories-description">
            High-quality tools, hardware, and maintenance supplies designed for professional signage and printing operations.
          </p>
        </div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="accessories-category">
            <h2 className="accessories-category-title">{category.title}</h2>
            <div className="accessories-grid">
              {category.products.map((product, prodIndex) => (
                <div key={prodIndex} className="accessories-card">
                  <div className="accessories-image-wrapper" onClick={() => openLightbox(product)}>
                    <Image src={product.images[0].src} alt={product.name} fill sizes="(max-width: 768px) 100vw, 350px" className="accessories-image" priority={catIndex === 0 && prodIndex === 0} />
                    <div className="accessories-image-overlay"><span>Click to view gallery</span></div>
                  </div>
                  <div className="accessories-info">
                    <h3 className="accessories-name">{product.name}</h3>
                    <p className="accessories-desc">{product.desc}</p>
                    <div className="accessories-features">
                      <h4>Specifications:</h4>
                      <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '10px' }}>{product.specs}</p>
                      <h4>Features:</h4>
                      <ul>
                        {product.features.map((f, i) => (
                          <li key={i}>
                            <svg className="accessories-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Lightbox Modal */}
        {selectedProduct && (
          <div className="accessories-lightbox-overlay" onClick={closeLightbox}>
            <div className="accessories-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="accessories-lightbox-header">
                <h2 className="accessories-lightbox-title">{selectedProduct.name}</h2>
                <div className="accessories-lightbox-actions">
                  <Link href="/contact" className="accessories-inquiry-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Send Inquiry
                  </Link>
                  <button className="accessories-lightbox-close" onClick={closeLightbox}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="accessories-slideshow-container">
                <div className="accessories-slideshow-image-wrapper">
                  <img
                    src={selectedProduct.images[currentImageIndex].src}
                    alt={selectedProduct.images[currentImageIndex].label}
                    className="accessories-slideshow-image"
                  />
                  <div className="accessories-slideshow-label">
                    {selectedProduct.images[currentImageIndex].label}
                  </div>
                </div>

                {selectedProduct.images.length > 1 && (
                  <>
                    <button className="accessories-slideshow-btn accessories-prev-btn" onClick={prevImage}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <button className="accessories-slideshow-btn accessories-next-btn" onClick={nextImage}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>

                    <div className="accessories-slideshow-dots">
                      {selectedProduct.images.map((_, index) => (
                        <button
                          key={index}
                          className={`accessories-dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => goToImage(index)}
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