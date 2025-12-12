import Header from '../../components/Header';
import '../product-detail.css';

export default function Inks() {
  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <h1 className="product-detail-title">Inks</h1>
        <p className="product-detail-description">High-quality printing inks for various applications and substrates.</p>

        <div className="product-detail-section">
          <h3>Available Ink Types:</h3>
          <ul className="product-detail-list">
            <li>Solvent Inks</li>
            <li>Eco-Solvent Inks</li>
            <li>UV-Curable Inks</li>
            <li>Latex Inks</li>
            <li>Water-Based Inks</li>
          </ul>
        </div>

        <div className="demo-notice">
          <p>This is a demonstration page for ink products. Contact us for detailed product specifications and pricing.</p>
        </div>
      </main>
    </div>
  );
}