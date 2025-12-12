import Header from '../../components/Header';
import Link from 'next/link';
import '../products.css';

export default function Machine() {
  return (
    <div>
      <Header />
      <main className="products-container">
        <h1 className="products-title">Machines & Equipment</h1>
        <p className="products-description">Professional printing machines and equipment for all your production needs.</p>

        <div className="products-grid">
          <div className="product-card">
            <h3>Printers</h3>
            <p>High-performance digital printers for various applications.</p>
            <Link href="/products/machine/printers" className="product-link">View Printers →</Link>
          </div>

          <div className="product-card">
            <h3>Cutters</h3>
            <p>Precision cutting machines for vinyl and other materials.</p>
            <Link href="/products/machine/cutters" className="product-link">View Cutters →</Link>
          </div>

          <div className="product-card">
            <h3>Laminators</h3>
            <p>Professional laminating equipment for protection and enhancement.</p>
            <Link href="/products/machine/laminators" className="product-link">View Laminators →</Link>
          </div>

          <div className="product-card">
            <h3>Heat Press</h3>
            <p>Heat transfer machines for textile and promotional products.</p>
            <Link href="/products/machine/heat-press" className="product-link">View Heat Press →</Link>
          </div>
        </div>
      </main>
    </div>
  );
}