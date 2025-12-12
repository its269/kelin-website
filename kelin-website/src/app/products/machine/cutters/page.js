import Header from '../../../components/Header';
import '../../product-detail.css';

export default function Cutters() {
  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <h1 className="product-detail-title">Cutters</h1>
        <p className="product-detail-description">Precision cutting machines for vinyl, paper, fabric, and other materials.</p>

        <div className="product-detail-section">
          <h3>Cutter Types:</h3>
          <ul className="product-detail-list">
            <li>Vinyl Cutting Plotters</li>
            <li>Flatbed Cutters</li>
            <li>Roll-fed Cutters</li>
            <li>Laser Cutters</li>
            <li>CNC Routing Machines</li>
            <li>Kiss-cut Plotters</li>
          </ul>
        </div>

        <div className="demo-notice">
          <p>This is a demonstration page for cutting equipment. Contact us for product demonstrations and pricing.</p>
        </div>
      </main>
    </div>
  );
}