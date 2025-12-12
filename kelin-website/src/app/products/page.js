import Header from '../components/Header';
import Link from 'next/link';
import './products.css';

export default function Products() {
  return (
    <div>
      <Header />
      <main className="products-container">
        <h1 className="products-title">Our Products</h1>
        <p className="products-description">Browse our comprehensive range of printing products and materials.</p>
        
        <div className="products-grid">
          <div className="product-card">
            <h3>Inks</h3>
            <p>High-quality inks for all your printing needs.</p>
            <Link href="/products/inks" className="product-link">Learn More →</Link>
          </div>
          
          <div className="product-card">
            <h3>Materials</h3>
            <p>Premium printing materials and substrates.</p>
            <Link href="/products/materials" className="product-link">Learn More →</Link>
          </div>
          
          <div className="product-card">
            <h3>Accessories</h3>
            <p>Essential accessories for your printing setup.</p>
            <Link href="/products/accessories" className="product-link">Learn More →</Link>
          </div>
          
          <div className="product-card">
            <h3>Promotional Display</h3>
            <p>Eye-catching displays for marketing.</p>
            <Link href="/products/promotional-display" className="product-link">Learn More →</Link>
          </div>
          
          <div className="product-card">
            <h3>Machine</h3>
            <p>Professional printing machines and equipment.</p>
            <Link href="/products/machine" className="product-link">Learn More →</Link>
          </div>
        </div>
      </main>
    </div>
  );
}