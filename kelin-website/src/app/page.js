import Header from "./components/Header";
import BranchSection from "./components/BranchSection";
import "./home.css";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <main className="home-container">
        <section className="hero-section">
          <h1 className="hero-title">Welcome to Kelin Graphics System</h1>
          <p className="hero-description">
            Your trusted partner for professional printing solutions, equipment, and materials.
            Discover our comprehensive range of products and services.
          </p>
          <div className="hero-buttons">
            <a href="/explore" className="btn-primary">Explore Solutions</a>
            <a href="/products" className="btn-secondary">Browse Products</a>
          </div>
        </section>

        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <h3>Quality Products</h3>
              <p>Premium printing materials and equipment from trusted manufacturers.</p>
            </div>
            <div className="feature-card">
              <h3>Expert Support</h3>
              <p>Professional technical support and training for all your printing needs.</p>
            </div>
            <div className="feature-card">
              <h3>Custom Solutions</h3>
              <p>Tailored printing solutions to meet your specific business requirements.</p>
            </div>
          </div>
        </section>

        <BranchSection />
      </main>
    </div>
  );
}
