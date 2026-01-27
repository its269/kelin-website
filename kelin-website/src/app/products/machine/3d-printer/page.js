import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: '3D Printer - Kelin Graphics System | Professional 3D Printing Solutions',
    description: 'Professional 3D printers for prototyping, manufacturing, and creative applications with advanced printing technology.',
    keywords: '3D printer, additive manufacturing, prototyping, 3D printing, rapid prototyping, custom manufacturing',
};

export default function ThreeDPrinter() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">3D Printer</h1>
                        <p className="hero-subtitle">
                            Advanced 3D printing solutions for prototyping, custom manufacturing, and creative applications with precision and reliability.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="3D Printer" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>3D Printing Solutions</h2>
                        <p>Professional 3D printing equipment for various manufacturing and creative needs</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="FDM 3D Printer" />
                            </div>
                            <div className="product-info">
                                <h3>FDM 3D Printer</h3>
                                <p>Fused Deposition Modeling 3D printer for reliable prototyping and production applications.</p>
                                <ul>
                                    <li>Large build volume</li>
                                    <li>Heated print bed</li>
                                    <li>Multi-material support</li>
                                    <li>Precise layer adhesion</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="Resin 3D Printer" />
                            </div>
                            <div className="product-info">
                                <h3>Resin 3D Printer</h3>
                                <p>High-resolution resin 3D printer for detailed miniatures and precision applications.</p>
                                <ul>
                                    <li>Ultra-high resolution</li>
                                    <li>Smooth surface finish</li>
                                    <li>Fine detail capability</li>
                                    <li>Professional grade quality</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>3D Printing Advantages</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🎯</div>
                            <h3>Precision Printing</h3>
                            <p>High-accuracy 3D printing with consistent layer adhesion and dimensional accuracy.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🔧</div>
                            <h3>Material Variety</h3>
                            <p>Compatible with various filaments including PLA, ABS, PETG, and specialty materials.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h3>Rapid Prototyping</h3>
                            <p>Fast turnaround for prototypes, custom parts, and design iterations.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">💡</div>
                            <h3>Creative Freedom</h3>
                            <p>Unlimited design possibilities with complex geometries and custom shapes.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Versatile 3D printing applications across multiple industries</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Prototyping</h4>
                            <p>Product prototypes, concept models, and design validation</p>
                        </div>
                        <div className="application-item">
                            <h4>Custom Parts</h4>
                            <p>Replacement parts, custom fixtures, and specialized components</p>
                        </div>
                        <div className="application-item">
                            <h4>Educational Tools</h4>
                            <p>Teaching aids, models, and educational demonstrations</p>
                        </div>
                        <div className="application-item">
                            <h4>Creative Projects</h4>
                            <p>Art pieces, decorative items, and personalized objects</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}