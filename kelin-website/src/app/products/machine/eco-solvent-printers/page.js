import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: 'Eco-Solvent Printers - Kelin Graphics System | Professional Digital Printing',
    description: 'Explore our range of eco-solvent printers for professional outdoor signage, vehicle wraps, and large format printing applications.',
    keywords: 'eco-solvent printers, outdoor printing, vehicle wraps, large format printing, digital signage',
};

export default function EcoSolventPrinters() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Eco-Solvent Printers</h1>
                        <p className="hero-subtitle">
                            Professional eco-solvent printing solutions for outdoor signage, vehicle wraps, and durable graphics applications.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="Eco-Solvent Printers" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>Our Eco-Solvent Printer Range</h2>
                        <p>High-quality eco-solvent printers designed for professional outdoor applications</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="Wide Format Eco-Solvent Printer" />
                            </div>
                            <div className="product-info">
                                <h3>Wide Format Eco-Solvent Printer</h3>
                                <p>Professional outdoor printing with exceptional durability and color vibrancy for signage and vehicle graphics.</p>
                                <ul>
                                    <li>Print width up to 1.6m</li>
                                    <li>Outdoor durability up to 3 years</li>
                                    <li>High resolution printing</li>
                                    <li>Environmental friendly inks</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="Industrial Eco-Solvent System" />
                            </div>
                            <div className="product-info">
                                <h3>Industrial Eco-Solvent System</h3>
                                <p>Heavy-duty eco-solvent printer for high-volume commercial applications and continuous operation.</p>
                                <ul>
                                    <li>High-speed printing capability</li>
                                    <li>Bulk ink system</li>
                                    <li>Advanced head technology</li>
                                    <li>24/7 operation capability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>Why Choose Our Eco-Solvent Printers?</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🌿</div>
                            <h3>Environmentally Friendly</h3>
                            <p>Low VOC emissions and eco-friendly solvent inks that are safe for indoor use during printing.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">☀️</div>
                            <h3>Weather Resistant</h3>
                            <p>Excellent outdoor durability with UV resistance for long-lasting outdoor applications.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🎨</div>
                            <h3>Vibrant Colors</h3>
                            <p>Superior color gamut and saturation for eye-catching graphics and professional results.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h3>High Productivity</h3>
                            <p>Fast printing speeds with reliable performance for demanding commercial applications.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Perfect for a wide range of outdoor and commercial printing applications</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Outdoor Signage</h4>
                            <p>Billboards, street signs, and commercial outdoor displays</p>
                        </div>
                        <div className="application-item">
                            <h4>Vehicle Graphics</h4>
                            <p>Car wraps, fleet graphics, and transportation advertising</p>
                        </div>
                        <div className="application-item">
                            <h4>Building Wraps</h4>
                            <p>Large format building advertisements and architectural graphics</p>
                        </div>
                        <div className="application-item">
                            <h4>Banner Printing</h4>
                            <p>Event banners, promotional displays, and trade show graphics</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}