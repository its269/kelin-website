import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: 'UV Printers - Kelin Graphics System | Industrial UV Printing Solutions',
    description: 'Professional UV printers for direct printing on rigid materials, promotional items, and industrial applications.',
    keywords: 'UV printer, UV printing, flatbed printer, direct printing, rigid materials, industrial printing',
};

export default function UVPrinters() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">UV Printers</h1>
                        <p className="hero-subtitle">
                            Advanced UV printing technology for direct printing on rigid materials, promotional items, and industrial applications.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="UV Printer" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>UV Printing Solutions</h2>
                        <p>Professional UV printers for versatile direct printing applications</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="Flatbed UV Printer" />
                            </div>
                            <div className="product-info">
                                <h3>Flatbed UV Printer</h3>
                                <p>Large format flatbed UV printer for direct printing on rigid materials and objects.</p>
                                <ul>
                                    <li>Direct printing capability</li>
                                    <li>Variable thickness handling</li>
                                    <li>Instant UV curing</li>
                                    <li>High-resolution printing</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="Industrial UV System" />
                            </div>
                            <div className="product-info">
                                <h3>Industrial UV System</h3>
                                <p>Heavy-duty UV printing system for high-volume production and industrial applications.</p>
                                <ul>
                                    <li>Automated feeding system</li>
                                    <li>Multi-layer printing</li>
                                    <li>Industrial grade components</li>
                                    <li>Continuous production capability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>UV Printing Advantages</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">💎</div>
                            <h3>Instant Curing</h3>
                            <p>UV LED curing technology for immediate print finishing and handling.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🎯</div>
                            <h3>Direct Printing</h3>
                            <p>Print directly on rigid materials without transfer processes or media.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🌈</div>
                            <h3>Vibrant Colors</h3>
                            <p>Exceptional color gamut and print quality with UV-curable inks.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🛡️</div>
                            <h3>Durability</h3>
                            <p>Weather-resistant and scratch-resistant prints for long-lasting results.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Versatile UV printing for various materials and industries</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Rigid Signage</h4>
                            <p>Acrylic, aluminum, PVC, and composite panel printing</p>
                        </div>
                        <div className="application-item">
                            <h4>Promotional Products</h4>
                            <p>Pens, USB drives, phone cases, and custom items</p>
                        </div>
                        <div className="application-item">
                            <h4>Industrial Marking</h4>
                            <p>Component marking, serial numbers, and industrial labels</p>
                        </div>
                        <div className="application-item">
                            <h4>Decorative Items</h4>
                            <p>Glass, ceramic, wood, and specialty material decoration</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}