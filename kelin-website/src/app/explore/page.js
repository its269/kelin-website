import Header from '../components/Header';
import './explore.css';

export default function Explore() {
  return (
    <div>
      <Header />
      <main className="explore-container">
        <h1 className="explore-title">Explore Our Solutions</h1>
        <p className="explore-description">Discover the wide range of printing and graphics solutions we offer.</p>

        <div className="featured-section">
          <h3 className="featured-title">Featured Solutions:</h3>
          <ul className="featured-list">
            <li>Digital Printing Services</li>
            <li>Large Format Graphics</li>
            <li>Custom Signage Solutions</li>
            <li>Vehicle Wrapping</li>
          </ul>
        </div>
      </main>
    </div>
  );
}