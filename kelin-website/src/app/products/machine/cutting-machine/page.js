import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: 'Cutting Machine - Kelin Graphics System | Precision Vinyl and Material Cutting',
    description: 'Professional cutting machines for vinyl, decals, labels, and various materials. Precision cutting solutions for signage and graphics.',
    keywords: 'cutting machine, vinyl cutter, plotter, decal cutting, signage cutting, precision cutting',
};

export default function CuttingMachine() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Cutting Machine</h1>
                        <p className="hero-subtitle">
                            Precision cutting machines for vinyl, decals, labels, and various materials with advanced cutting technology.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="Cutting Machine" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>Professional Cutting Solutions</h2>
                        <p>Precision cutting machines for all your vinyl and material cutting needs</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="Vinyl Cutting Plotter" />
                            </div>
                            <div className="product-info">
                                <h3>Vinyl Cutting Plotter</h3>
                                <p>Professional vinyl cutting plotter for signage, decals, and decorative applications.</p>
                                <ul>
                                    <li>Cutting width up to 1.35m</li>
                                    <li>High precision servo motors</li>
                                    <li>Advanced cutting software</li>
                                    <li>Multiple material compatibility</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="Industrial Cutting System" />
                            </div>
                            <div className="product-info">
                                <h3>Industrial Cutting System</h3>
                                <p>Heavy-duty cutting system for high-volume production and industrial applications.</p>
                                <ul>
                                    <li>Automated material handling</li>
                                    <li>High-speed cutting capability</li>
                                    <li>Industrial grade construction</li>
                                    <li>Continuous operation design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>Cutting Machine Features</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🎯</div>
                            <h3>Precision Cutting</h3>
                            <p>High-precision servo motors and advanced blade technology for accurate cutting results.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h3>High Speed</h3>
                            <p>Fast cutting speeds for increased productivity and efficient workflow.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🔧</div>
                            <h3>Versatile Materials</h3>
                            <p>Compatible with vinyl, paper, cardboard, fabric, and specialty materials.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">💻</div>
                            <h3>Smart Software</h3>
                            <p>Advanced cutting software with automatic nesting and material optimization.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Perfect for various cutting applications across multiple industries</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Vinyl Graphics</h4>
                            <p>Signs, decals, window graphics, and vehicle decals</p>
                        </div>
                        <div className="application-item">
                            <h4>Labels & Stickers</h4>
                            <p>Custom labels, stickers, and product identification</p>
                        </div>
                        <div className="application-item">
                            <h4>Packaging</h4>
                            <p>Package prototypes, displays, and custom packaging</p>
                        </div>
                        <div className="application-item">
                            <h4>Textile Cutting</h4>
                            <p>Fabric cutting, apparel patterns, and textile applications</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}