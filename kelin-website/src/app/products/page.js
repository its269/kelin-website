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
      description: 'High-quality inks for all your printing needs.',
      image: '/se.webp',
      alt: 'Printing Inks',
      href: '/products/inks'
    },
    {
      id: 'materials',
      name: 'Materials',
      description: 'Premium printing materials and substrates.',
      image: '/se.webp',
      alt: 'Printing Materials',
      href: '/products/materials'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Essential accessories for your printing setup.',
      image: '/se.webp',
      alt: 'Printing Accessories',
      href: '/products/accessories'
    },
    {
      id: 'promotional-display',
      name: 'Promotional Display',
      description: 'Eye-catching displays for marketing.',
      image: '/se.webp',
      alt: 'Promotional Display',
      href: '/products/promotional-display'
    },
    {
      id: 'machine',
      name: 'Machine',
      description: 'Professional printing machines and equipment.',
      image: '/se.webp',
      alt: 'Printing Machines',
      href: '/products/machine'
    }
  ];
  return (
    <div>
      {/* 🔧 SSG CODE PATTERN: Static component with no props */}
      <Header />
      <main className="products-container">
        {/* 🔧 SSG CODE PATTERN: Hardcoded static content */}
        <h1 className="products-title">Our Products</h1>
        <p className="products-description">Browse our comprehensive range of printing products and materials.</p>

        <div className="products-grid">
          {/* 🔧 SSG CODE PATTERN: Static array mapping */}
          {/* products array is hardcoded = rendered at build time */}
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                {/* 🔧 SSG CODE PATTERN: Static image paths */}
                <img src={product.image} alt={product.alt} className="product-image" />
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                {/* 🔧 SSG CODE PATTERN: Static navigation links */}
                <Link href={product.href} className="product-link">View More →</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// 🔧 SSG RESULT: This products page becomes a static .html file at build time
// Next.js detects: no async, no fetch(), hardcoded data = perfect for SSG