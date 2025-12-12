import Header from '../../components/Header';
import '../product-detail.css';

export default function Accessories() {
  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <h1 className="product-detail-title">Accessories</h1>
        <p className="product-detail-description">Essential accessories and tools to complement your printing setup.</p>

        <div className="product-detail-section">
          <h3>Accessory Categories:</h3>
          <ul className="product-detail-list">
            <li>Cutting Tools</li>
            <li>Application Tools</li>
            <li>Measurement Tools</li>
            <li>Cleaning Supplies</li>
            <li>Storage Solutions</li>
            <li>Safety Equipment</li>
          </ul>
        </div>

        <div className="demo-notice">
          <p>This is a demonstration page for printing accessories. Browse our complete catalog for all available items.</p>
        </div>
      </main>
    </div>
  );
}