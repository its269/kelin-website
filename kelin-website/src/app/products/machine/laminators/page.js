import Header from '../../../components/Header';
import '../../product-detail.css';

export default function Laminators() {
  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <h1 className="product-detail-title">Laminators</h1>
        <p className="product-detail-description">Professional laminating equipment to protect and enhance your printed materials.</p>

        <div className="product-detail-section">
          <h3>Laminator Types:</h3>
          <ul className="product-detail-list">
            <li>Cold Roll Laminators</li>
            <li>Hot Roll Laminators</li>
            <li>Wide Format Laminators</li>
            <li>Pouch Laminators</li>
            <li>Mounting Systems</li>
            <li>Encapsulation Equipment</li>
          </ul>
        </div>

        <div className="demo-notice">
          <p>This is a demonstration page for laminating equipment. Contact us for equipment recommendations and support.</p>
        </div>
      </main>
    </div>
  );
}