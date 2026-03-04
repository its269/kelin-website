import Header from '../components/Header';
import Link from 'next/link';
import './products.css';

// 🔧 SSG METADATA EXPORT: Static metadata for products page
// This metadata is pre-rendered at build time for better SEO
export const metadata = {
  title: 'Products - Kelin Graphics System | Professional Printing Solutions',
  description: 'Browse our comprehensive range of professional printing products including inks, materials, accessories, promotional displays, and machines.',
  keywords: 'printing products, inks, materials, accessories, promotional display, printing machines, professional printing',
  openGraph: {
    title: 'Products - Kelin Graphics System',
    description: 'Comprehensive range of professional printing products and materials',
    type: 'website',
  },
};

// 🔧 SSG CODE PATTERN: Static function component
// No async, no data fetching = automatic SSG

export default function Products() {
  // 🔧 SSG CODE PATTERN: Static product data
  // This array is hardcoded = known at build time = perfect for SSG
  const products = [
    {
      id: 'inks',
      name: 'Inks',
      description: 'High-quality printing inks including sublimation, DTF, eco-solvent, and UV inks for vibrant, long-lasting results.',
      image: '/se.webp',
      alt: 'Printing Inks',
      href: '/inks',
      icon: '🎨',
      color: '#3b82f6'
    },
    {
      id: 'materials',
      name: 'Materials',
      description: 'Premium substrates including vinyl, tarpaulin, textiles, and specialty media for diverse printing applications.',
      image: '/se.webp',
      alt: 'Printing Materials',
      href: '/materials',
      icon: '📄',
      color: '#8b5cf6'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Essential tools and supplies including cutting tools, squeegees, and maintenance equipment for optimal results.',
      image: '/se.webp',
      alt: 'Printing Accessories',
      href: '/accessories',
      icon: '🔧',
      color: '#ec4899'
    },
    {
      id: 'promotional-display',
      name: 'Promotional Display',
      description: 'Professional display solutions including banners, stands, and exhibition materials for maximum brand visibility.',
      image: '/se.webp',
      alt: 'Promotional Display',
      href: '/promotional-display',
      icon: '📢',
      color: '#f59e0b'
    },
    {
      id: 'machine',
      name: 'Machines',
      description: 'Advanced printing equipment including UV printers, sublimation machines, cutters, and heat presses for professional production.',
      image: '/se.webp',
      alt: 'Printing Machines',
      href: '/machine',
      icon: '⚙️',
      color: '#10b981'
    }
  ];
  return (
    <div>
      {/* 🔧 SSG CODE PATTERN: Static component with no props */}
      <Header />
      <main className="products-container products-page-modern">
        {/* Hero Section */}
        <div className="products-hero">
          <div className="products-hero-content">
            <h1 className="products-hero-title">Our Products</h1>
            <p className="products-hero-description">
              Discover our comprehensive range of professional printing solutions designed to elevate your business.
              From high-quality inks to cutting-edge machinery, we provide everything you need for exceptional results.
            </p>
            <div className="products-stats">
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Product Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Products Available</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid-modern">
          {/* 🔧 SSG CODE PATTERN: Static array mapping */}
          {/* products array is hardcoded = rendered at build time */}
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="product-card-modern">
              <div className="product-card-header" style={{ background: `linear-gradient(135deg, ${product.color}15 0%, ${product.color}05 100%)` }}>
                <div className="product-icon" style={{ background: product.color }}>
                  {product.icon}
                </div>
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.alt} className="product-image-modern" />
                </div>
              </div>
              <div className="product-card-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-link-arrow">
                  <span>Explore Products</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="products-cta">
          <div className="products-cta-content">
            <h2>Need Help Finding the Right Product?</h2>
            <p>Our experts are ready to help you choose the perfect products for your specific needs.</p>
            <Link href="/contact" className="products-cta-button">
              Contact Our Team
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

// 🔧 SSG RESULT: This products page becomes a static .html file at build time
// Next.js detects: no async, no fetch(), hardcoded data = perfect for SSG