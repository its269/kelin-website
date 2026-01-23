import Header from '../components/Header';
import Link from 'next/link';
import './explore.css';

export const metadata = {
  title: 'Explore Products - Kelin Graphics System | Complete Printing Solutions',
  description: 'Explore our complete range of printing solutions including inks, materials, machines, accessories, and promotional displays.',
  keywords: 'printing solutions, explore products, printing equipment, inks, materials, accessories, promotional display',
  openGraph: {
    title: 'Explore Products - Kelin Graphics System',
    description: 'Complete range of professional printing solutions and equipment',
    type: 'website',
  },
};

export default function Explore() {
  const productCategories = [
    {
      id: 'inks',
      name: 'Inks',
      description: 'Premium quality inks designed for professional printing applications including eco-solvent, latex, UV-curable, and water-based formulations.',
      icon: '/inks.png',
      productCount: '12+',
      href: '/products/inks',
      image: '/se.webp',
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
      href: '/products/materials',
      image: '/se.webp',
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
      href: '/products/machine',
      image: '/se.webp',
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
      href: '/products/accessories',
      image: '/se.webp',
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
      href: '/products/promotional-display',
      image: '/se.webp',
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
        {/* Hero Section */}
        <section className="explore-hero">
          <div className="hero-content">
            <h1 className="hero-title">Explore Our Complete Solutions</h1>
            <p className="hero-subtitle">
              Discover our comprehensive range of professional printing products,
              from high-quality inks and materials to advanced machinery and accessories.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Product Categories</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="floating-card card-1">
                <img src="/se.webp" alt="Printing Solutions" />
              </div>
              <div className="floating-card card-2">
                <img src="/se.webp" alt="Materials" />
              </div>
              <div className="floating-card card-3">
                <img src="/se.webp" alt="Equipment" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="quick-navigation">
          <div className="section-header">
            <h2>Quick Category Access</h2>
            <p>Jump directly to any product category</p>
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
        <section className="product-categories">
          <div className="section-header">
            <h2>Product Categories</h2>
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
        </section>
      </main>
    </div>
  );
}