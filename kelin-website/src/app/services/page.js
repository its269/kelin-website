import Header from '../components/Header';
import './about.css';

export default function AboutUs() {
  return (
    <div>
      <Header />
      <main className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">Learn more about Kelin Graphics System and our commitment to excellence in printing solutions.</p>

        <div className="about-section">
          <h3>Our Story</h3>
          <p>Kelin Graphics System has been a leading provider of printing equipment, materials, and solutions for over [X] years. We specialize in delivering high-quality products and exceptional service to businesses of all sizes.</p>
        </div>

        <div className="about-section">
          <h3>Our Mission</h3>
          <p>To provide innovative printing solutions that help our customers achieve their business goals while maintaining the highest standards of quality and service.</p>
        </div>

        <div className="about-section">
          <h3>What We Offer:</h3>
          <ul className="about-list">
            <li>Comprehensive product selection</li>
            <li>Expert technical support</li>
            <li>Training and education</li>
            <li>Custom solutions</li>
            <li>Nationwide service network</li>
          </ul>
        </div>

        <div className="demo-notice">
          <p>This is a demonstration page. Contact us to learn more about our company and services.</p>
        </div>
      </main>
    </div>
  );
}