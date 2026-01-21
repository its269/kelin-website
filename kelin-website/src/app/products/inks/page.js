import Header from '../../components/Header';
import Image from 'next/image';
import '../product-detail.css';
import './inks.css';

// Static metadata for SEO
export const metadata = {
  title: 'Professional Printing Inks | Kelin - High-Quality Solvent, Eco-Solvent & UV Inks',
  description: 'Discover Kelin\'s comprehensive range of professional printing inks including solvent, eco-solvent, UV-curable, latex, and water-based inks. Perfect for outdoor signage, indoor displays, and specialty applications.',
  keywords: 'printing inks, solvent inks, eco-solvent inks, UV inks, latex inks, water-based inks, outdoor signage, digital printing, wide format printing',
  openGraph: {
    title: 'Professional Printing Inks | Kelin',
    description: 'High-quality printing inks for various applications and substrates. Excellent weather resistance, vibrant colors, and superior performance.',
    type: 'website',
    url: '/products/inks',
    images: [
      {
        url: '/KELIN-LOGO-01.png',
        width: 1200,
        height: 630,
        alt: 'Kelin Professional Printing Inks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Printing Inks | Kelin',
    description: 'High-quality printing inks for various applications and substrates.',
    images: ['/KELIN-LOGO-01.png'],
  },
  alternates: {
    canonical: '/products/inks',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Static ink products data for SSG 
const getInkProductsData = () => {
  return [
    {
      id: 1,
      name: "Solvent Inks",
      image: "/KELIN-LOGO-01.png",
      description: "High-performance solvent-based inks designed for outdoor applications and durable signage.",
      features: [
        "Excellent weather resistance",
        "Vibrant color reproduction",
        "Fast drying properties",
        "Compatible with various substrates"
      ],
      applications: ["Outdoor banners", "Vehicle wraps", "Billboards", "PVC signage"],
      specifications: {
        "Viscosity": "8-12 cP",
        "Surface Tension": "28-32 dyne/cm",
        "Color Gamut": "95% Pantone coverage",
        "Shelf Life": "24 months"
      },
      schema: {
        "@type": "Product",
        "name": "Solvent Inks",
        "description": "High-performance solvent-based inks designed for outdoor applications and durable signage.",
        "brand": {
          "@type": "Brand",
          "name": "Kelin"
        },
        "category": "Printing Inks"
      }
    },
    {
      id: 2,
      name: "Eco-Solvent Inks",
      image: "/KELIN-LOGO-01.png",
      description: "Environmentally friendly inks with low odor and reduced VOC emissions, perfect for indoor and outdoor use.",
      features: [
        "Low VOC emissions",
        "Minimal odor",
        "Excellent adhesion",
        "Scratch resistant finish"
      ],
      applications: ["Indoor posters", "Retail displays", "Exhibition graphics", "Photo prints"],
      specifications: {
        "Viscosity": "10-14 cP",
        "Surface Tension": "30-34 dyne/cm",
        "Color Gamut": "92% Pantone coverage",
        "Shelf Life": "18 months"
      },
      schema: {
        "@type": "Product",
        "name": "Eco-Solvent Inks",
        "description": "Environmentally friendly inks with low odor and reduced VOC emissions, perfect for indoor and outdoor use.",
        "brand": {
          "@type": "Brand",
          "name": "Kelin"
        },
        "category": "Printing Inks"
      }
    },
    {
      id: 3,
      name: "UV-Curable Inks",
      image: "/KELIN-LOGO-01.png",
      description: "Instant-curing UV inks that provide exceptional durability and print quality for demanding applications.",
      features: [
        "Instant curing",
        "Superior durability",
        "No heat required",
        "Excellent color density"
      ],
      applications: ["Rigid substrates", "Industrial labels", "Packaging", "Electronics"],
      specifications: {
        "Viscosity": "12-16 cP",
        "Surface Tension": "25-30 dyne/cm",
        "Color Gamut": "98% Pantone coverage",
        "Shelf Life": "36 months"
      },
      schema: {
        "@type": "Product",
        "name": "UV-Curable Inks",
        "description": "Instant-curing UV inks that provide exceptional durability and print quality for demanding applications.",
        "brand": {
          "@type": "Brand",
          "name": "Kelin"
        },
        "category": "Printing Inks"
      }
    },
    {
      id: 4,
      name: "Latex Inks",
      image: "/KELIN-LOGO-01.png",
      description: "Water-based latex inks offering excellent image quality with environmental sustainability.",
      features: [
        "Water-based formula",
        "Odorless printing",
        "Stretchable prints",
        "Indoor air quality safe"
      ],
      applications: ["Wallpaper", "Textile printing", "Point-of-sale", "Interior decoration"],
      specifications: {
        "Viscosity": "6-10 cP",
        "Surface Tension": "32-36 dyne/cm",
        "Color Gamut": "90% Pantone coverage",
        "Shelf Life": "12 months"
      },
      schema: {
        "@type": "Product",
        "name": "Latex Inks",
        "description": "Water-based latex inks offering excellent image quality with environmental sustainability.",
        "brand": {
          "@type": "Brand",
          "name": "Kelin"
        },
        "category": "Printing Inks"
      }
    },
    {
      id: 5,
      name: "Water-Based Inks",
      image: "/KELIN-LOGO-01.png",
      description: "Eco-friendly water-based inks ideal for textile and paper applications with vibrant color output.",
      features: [
        "100% eco-friendly",
        "Non-toxic formula",
        "Excellent wash fastness",
        "Bright color reproduction"
      ],
      applications: ["T-shirt printing", "Fabric banners", "Paper prints", "Art reproductions"],
      specifications: {
        "Viscosity": "8-12 cP",
        "Surface Tension": "35-40 dyne/cm",
        "Color Gamut": "88% Pantone coverage",
        "Shelf Life": "15 months"
      },
      schema: {
        "@type": "Product",
        "name": "Water-Based Inks",
        "description": "Eco-friendly water-based inks ideal for textile and paper applications with vibrant color output.",
        "brand": {
          "@type": "Brand",
          "name": "Kelin"
        },
        "category": "Printing Inks"
      }
    }
  ];
};

// Generate structured data for SEO
const generateStructuredData = (inkProducts) => {
  const products = inkProducts.map(product => product.schema);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Professional Printing Inks",
    "description": "Comprehensive range of high-quality printing inks for various applications",
    "url": "https://www.kelinph.com/products/inks",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          ...product,
          "@id": `https://www.kelinph.com/products/inks#${product.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.kelinph.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://www.kelinph.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Inks",
          "item": "https://www.kelinph.com/products/inks"
        }
      ]
    }
  };
};

export default function Inks() {
  // Get static data at build time
  const inkProducts = getInkProductsData();
  const structuredData = generateStructuredData(inkProducts);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div>
        <Header />
        <main className="ink-blog-container">
          {/* Hero Section */}
          <header className="ink-hero">
            <h1 className="ink-hero-title">Professional Printing Inks</h1>
            <p className="ink-hero-description">
              Discover our comprehensive range of high-quality printing inks designed for various applications,
              from outdoor signage to fine art reproduction. Each ink type is formulated to deliver exceptional
              performance, durability, and color accuracy.
            </p>
          </header>

          {/* Introduction Section */}
          <section className="ink-intro">
            <h2>Why Choose Our Inks?</h2>
            <p>
              Our printing inks are developed using advanced formulations that ensure consistent quality,
              excellent color reproduction, and superior performance across various substrates. Whether you're
              printing outdoor banners, indoor displays, or specialty applications, we have the right ink
              solution for your needs.
            </p>
          </section>

          {/* Products Section */}
          <section className="ink-products" role="main" aria-label="Ink Products">
            {inkProducts.map((product, index) => (
              <article key={product.id} className="ink-product-card" itemScope itemType="https://schema.org/Product">
                <div className="ink-product-image">
                  <Image
                    src={product.image}
                    alt={`${product.name} - Professional printing ink`}
                    width={300}
                    height={200}
                    className="product-img"
                    priority={index < 2} // Prioritize loading first 2 images
                    itemProp="image"
                  />
                </div>

                <div className="ink-product-content">
                  <h2 className="ink-product-title" itemProp="name">{product.name}</h2>
                  <p className="ink-product-description" itemProp="description">{product.description}</p>

                  <div className="ink-features">
                    <h3>Key Features</h3>
                    <ul className="feature-list" itemProp="features">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="ink-applications">
                    <h3>Applications</h3>
                    <div className="application-tags" itemProp="applicationCategory">
                      {product.applications.map((app, index) => (
                        <span key={index} className="app-tag">{app}</span>
                      ))}
                    </div>
                  </div>

                  <div className="ink-specifications">
                    <h3>Technical Specifications</h3>
                    <div className="spec-grid" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-label" itemProp="name">{key}:</span>
                          <span className="spec-value" itemProp="value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Additional Info Section */}
          <section className="ink-additional-info" aria-label="Additional Information">
            <h2>Technical Support & Compatibility</h2>
            <div className="info-grid">
              <article className="info-card">
                <h3>🔧 Technical Support</h3>
                <p>
                  Our technical team provides comprehensive support for ink selection,
                  color matching, and troubleshooting to ensure optimal printing results.
                </p>
              </article>
              <article className="info-card">
                <h3>🖨️ Printer Compatibility</h3>
                <p>
                  Our inks are compatible with major printer brands including Roland,
                  Mimaki, Mutoh, HP, Epson, and many other industrial printing systems.
                </p>
              </article>
              <article className="info-card">
                <h3>📦 Custom Solutions</h3>
                <p>
                  We offer custom ink formulations for specific applications and
                  requirements. Contact us to discuss your unique printing needs.
                </p>
              </article>
            </div>
          </section>

          {/* CTA Section */}
          <section className="ink-cta" aria-label="Call to Action">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact our specialists today to find the perfect ink solution for your printing needs.
              We provide samples, technical data sheets, and personalized recommendations.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary" type="button" aria-label="Request ink samples">
                Request Samples
              </button>
              <button className="cta-secondary" type="button" aria-label="Get technical support">
                Technical Support
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}