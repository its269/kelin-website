import Header from '../../../components/Header';
import '../../product-detail.css';

export default function Printers() {
  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <h1 className="product-detail-title">Printers</h1>
        <p className="product-detail-description">Professional digital printers for wide format, signage, and specialty applications.</p>

        <div className="product-detail-section">
          <h3>Printer Categories:</h3>
          <ul className="product-detail-list">
            <li>Large Format Printers</li>
            <li>Eco-Solvent Printers</li>
            <li>UV Printers</li>
            <li>Latex Printers</li>
            <li>Sublimation Printers</li>
            <li>Textile Printers</li>
          </ul>
        </div>

        <div className="demo-notice">
          <p>This is a demonstration page for printer products. Contact us for detailed specifications and demonstrations.</p>
        </div>
      </main>
    </div>
  );
}