import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: 'Laser Machine - Kelin Graphics System | Precision Laser Cutting & Engraving',
    description: 'Professional laser cutting and engraving machines for precision work on various materials including wood, acrylic, metal, and fabric.',
    keywords: 'laser cutter, laser engraving, CO2 laser, fiber laser, precision cutting, custom engraving',
};

export default function LaserMachine() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Laser Machine</h1>
                        <p className="hero-subtitle">
                            Precision laser cutting and engraving machines for detailed work on wood, acrylic, metal, fabric, and various materials.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="Laser Machine" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>Laser Technology Solutions</h2>
                        <p>Professional laser cutting and engraving systems for precision applications</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="CO2 Laser System" />
                            </div>
                            <div className="product-info">
                                <h3>CO2 Laser System</h3>
                                <p>Versatile CO2 laser for cutting and engraving wood, acrylic, fabric, and non-metal materials.</p>
                                <ul>
                                    <li>High precision laser beam</li>
                                    <li>Variable power control</li>
                                    <li>Large working area</li>
                                    <li>Advanced motion control</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="Fiber Laser System" />
                            </div>
                            <div className="product-info">
                                <h3>Fiber Laser System</h3>
                                <p>High-power fiber laser for metal cutting, marking, and industrial applications.</p>
                                <ul>
                                    <li>Metal cutting capability</li>
                                    <li>High-speed processing</li>
                                    <li>Excellent beam quality</li>
                                    <li>Industrial grade performance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>Laser Technology Features</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h3>Precision Cutting</h3>
                            <p>Ultra-precise laser cutting with minimal kerf width and excellent edge quality.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🎨</div>
                            <h3>Detailed Engraving</h3>
                            <p>High-resolution engraving for intricate designs and personalization.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🔧</div>
                            <h3>Material Versatility</h3>
                            <p>Compatible with wood, acrylic, metal, fabric, leather, and specialty materials.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">💻</div>
                            <h3>CAD Integration</h3>
                            <p>Direct CAD file processing and advanced software control systems.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Precision laser processing for various industries and applications</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Custom Signage</h4>
                            <p>Acrylic signs, wooden plaques, and architectural elements</p>
                        </div>
                        <div className="application-item">
                            <h4>Personalization</h4>
                            <p>Awards, gifts, jewelry, and custom engravings</p>
                        </div>
                        <div className="application-item">
                            <h4>Industrial Parts</h4>
                            <p>Precision components, gaskets, and manufacturing parts</p>
                        </div>
                        <div className="application-item">
                            <h4>Creative Arts</h4>
                            <p>Artistic projects, crafts, and decorative items</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}