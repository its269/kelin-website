import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: 'Embroidery & Knitting Machine - Kelin Graphics System | Textile Production Equipment',
    description: 'Professional embroidery and knitting machines for custom apparel, logo embroidery, and textile production.',
    keywords: 'embroidery machine, knitting machine, custom embroidery, logo embroidery, textile production, apparel decoration',
};

export default function EmbroideryKnitting() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Embroidery & Knitting Machine</h1>
                        <p className="hero-subtitle">
                            Professional embroidery and knitting machines for custom apparel decoration, logo embroidery, and textile production.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="Embroidery Knitting Machine" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>Textile Production Solutions</h2>
                        <p>Professional embroidery and knitting equipment for custom textile applications</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="Multi-Head Embroidery Machine" />
                            </div>
                            <div className="product-info">
                                <h3>Multi-Head Embroidery Machine</h3>
                                <p>High-speed multi-head embroidery system for commercial logo and design embroidery.</p>
                                <ul>
                                    <li>Multiple embroidery heads</li>
                                    <li>High-speed stitching</li>
                                    <li>Automatic thread cutting</li>
                                    <li>Large embroidery area</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="Industrial Knitting System" />
                            </div>
                            <div className="product-info">
                                <h3>Industrial Knitting System</h3>
                                <p>Advanced knitting machine for custom textile production and pattern creation.</p>
                                <ul>
                                    <li>Computerized pattern control</li>
                                    <li>Multi-color capability</li>
                                    <li>Automatic yarn feeding</li>
                                    <li>Production efficiency</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>Textile Production Features</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🎯</div>
                            <h3>Precision Stitching</h3>
                            <p>High-precision embroidery with consistent stitch quality and accuracy.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h3>High Speed</h3>
                            <p>Fast production speeds for efficient commercial embroidery operations.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🎨</div>
                            <h3>Multi-Color Design</h3>
                            <p>Advanced multi-color embroidery and knitting capabilities.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">💻</div>
                            <h3>Computer Control</h3>
                            <p>Advanced computerized control systems for pattern creation and editing.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Professional textile decoration and production applications</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Logo Embroidery</h4>
                            <p>Corporate logos, team emblems, and brand identification</p>
                        </div>
                        <div className="application-item">
                            <h4>Custom Apparel</h4>
                            <p>Uniforms, polo shirts, jackets, and branded clothing</p>
                        </div>
                        <div className="application-item">
                            <h4>Promotional Items</h4>
                            <p>Caps, bags, towels, and promotional textiles</p>
                        </div>
                        <div className="application-item">
                            <h4>Fashion Design</h4>
                            <p>Decorative embroidery, fashion elements, and custom patterns</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}