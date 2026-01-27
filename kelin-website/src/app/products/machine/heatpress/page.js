import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: 'Heat Press Machine - Kelin Graphics System | Professional Heat Transfer Equipment',
    description: 'Professional heat press machines for vinyl transfers, sublimation, and custom apparel production.',
    keywords: 'heat press, heat transfer machine, vinyl pressing, sublimation press, apparel printing, custom shirts',
};

export default function HeatPress() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Heat Press Machine</h1>
                        <p className="hero-subtitle">
                            Professional heat press machines for vinyl transfers, sublimation printing, and custom apparel production with precise temperature control.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="Heat Press Machine" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>Heat Press Solutions</h2>
                        <p>Professional heat press equipment for all your transfer and pressing needs</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="Swing Heat Press" />
                            </div>
                            <div className="product-info">
                                <h3>Swing Heat Press</h3>
                                <p>Professional swing-away heat press for t-shirts, bags, and flat substrates.</p>
                                <ul>
                                    <li>Digital temperature control</li>
                                    <li>Even pressure distribution</li>
                                    <li>Safety auto-release</li>
                                    <li>Multiple size options</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="Pneumatic Heat Press" />
                            </div>
                            <div className="product-info">
                                <h3>Pneumatic Heat Press</h3>
                                <p>Air-operated heat press for consistent pressure and professional production environments.</p>
                                <ul>
                                    <li>Pneumatic pressure system</li>
                                    <li>Consistent force application</li>
                                    <li>Heavy-duty construction</li>
                                    <li>Industrial grade performance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>Heat Press Features</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🌡️</div>
                            <h3>Precise Temperature</h3>
                            <p>Digital temperature control with consistent heat distribution for perfect transfers.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">⏱️</div>
                            <h3>Timer Control</h3>
                            <p>Built-in timer system for consistent pressing times and quality results.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">💪</div>
                            <h3>Even Pressure</h3>
                            <p>Uniform pressure distribution across the entire pressing surface.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🔒</div>
                            <h3>Safety Features</h3>
                            <p>Auto-release mechanisms and safety systems for operator protection.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Perfect for various heat transfer and pressing applications</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Vinyl Transfer</h4>
                            <p>Heat transfer vinyl, decals, and custom graphics</p>
                        </div>
                        <div className="application-item">
                            <h4>Sublimation</h4>
                            <p>Sublimation transfers for polyester garments and items</p>
                        </div>
                        <div className="application-item">
                            <h4>Custom Apparel</h4>
                            <p>T-shirts, hoodies, bags, and promotional clothing</p>
                        </div>
                        <div className="application-item">
                            <h4>Promotional Items</h4>
                            <p>Mouse pads, ceramic tiles, and specialty substrates</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}