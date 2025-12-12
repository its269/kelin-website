import Header from '../../../components/Header';
import '../../product-detail.css';

export default function HeatPress() {
  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <h1 className="product-detail-title">Heat Press Machines</h1>
        <p className="product-detail-description">Professional heat transfer machines for textiles, promotional products, and specialty applications.</p>

        <div className="product-detail-section">
          <h3>Heat Press Types:</h3>
          <ul className="product-detail-list">
            <li>Flat Heat Presses</li>
            <li>Swing-away Presses</li>
            <li>Draw Heat Presses</li>
            <li>Cap Heat Presses</li>
            <li>Mug Heat Presses</li>
            <li>Multi-station Presses</li>
          </ul>
        </div>

        <div className="demo-notice">
          <p>This is a demonstration page for heat press equipment. Contact us for product training and support.</p>
        </div>
      </main>
    </div>
  );
}