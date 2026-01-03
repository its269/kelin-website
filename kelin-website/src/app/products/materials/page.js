import Header from '../../components/Header';
import '../product-detail.css';

export default function Materials() {
  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <h1 className="product-detail-title">Materials</h1>
        <p className="product-detail-description">Premium printing materials and substrates for all your project needs.</p>

        <div className="product-detail-section">
          <h3>Material Categories:</h3>
          <ul className="product-detail-list">
            <li>Vinyl Films</li>
            <li>Banner Materials</li>
            <li>Canvas</li>
            <li>Adhesive Films</li>
            <li>Transfer Papers</li>
            <li>Rigid Substrates</li>
          </ul>
        </div>
      </main>
    </div>
  );
}