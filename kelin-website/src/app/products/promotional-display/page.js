import Header from '../../components/Header';
import '../product-detail.css';

export default function PromotionalDisplay() {
  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <h1 className="product-detail-title">Promotional Display</h1>
        <p className="product-detail-description">Eye-catching promotional displays and marketing materials to boost your brand visibility.</p>

        <div className="product-detail-section">
          <h3>Display Solutions:</h3>
          <ul className="product-detail-list">
            <li>Roll-up Banners</li>
            <li>Pop-up Displays</li>
            <li>Trade Show Graphics</li>
            <li>Point of Sale Displays</li>
            <li>Floor Graphics</li>
            <li>Window Displays</li>
          </ul>
        </div>

        <div className="demo-notice">
          <p>This is a demonstration page for promotional display products. Contact us for custom display solutions.</p>
        </div>
      </main>
    </div>
  );
}