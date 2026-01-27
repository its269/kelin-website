import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: 'Sublimation & DTF Machine - Kelin Graphics System | Heat Transfer Printing',
    description: 'Professional sublimation and DTF (Direct-to-Film) printing machines for custom apparel, mugs, and promotional items.',
    keywords: 'sublimation printing, DTF printing, heat transfer, custom apparel, promotional printing, direct to film',
};

export default function SublimationDTF() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Sublimation & DTF Machine</h1>
                        <p className="hero-subtitle">
                            Advanced sublimation and DTF printing solutions for custom apparel, promotional items, and heat transfer applications.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="Sublimation DTF Machine" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>Heat Transfer Printing Solutions</h2>
                        <p>Complete sublimation and DTF printing systems for professional results</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="Sublimation Printer" />
                            </div>
                            <div className="product-info">
                                <h3>Sublimation Printer</h3>
                                <p>High-quality sublimation printer for custom apparel, mugs, and promotional items.</p>
                                <ul>
                                    <li>Vibrant color reproduction</li>
                                    <li>Multiple size options</li>
                                    <li>Fast printing speeds</li>
                                    <li>Professional sublimation inks</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="DTF Printing System" />
                            </div>
                            <div className="product-info">
                                <h3>DTF Printing System</h3>
                                <p>Complete DTF (Direct-to-Film) printing solution with shake powder and curing capabilities.</p>
                                <ul>
                                    <li>All-in-one DTF solution</li>
                                    <li>Automatic powder application</li>
                                    <li>Precise temperature control</li>
                                    <li>High adhesion results</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>Advanced Printing Features</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🎨</div>
                            <h3>Vibrant Colors</h3>
                            <p>Exceptional color reproduction with professional-grade sublimation and DTF inks.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🔥</div>
                            <h3>Heat Transfer</h3>
                            <p>Perfect heat transfer technology for durable and long-lasting prints.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">👕</div>
                            <h3>Versatile Materials</h3>
                            <p>Compatible with polyester, cotton blends, ceramics, and various substrates.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">⚙️</div>
                            <h3>Easy Operation</h3>
                            <p>User-friendly interface and automated features for efficient production.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Perfect for custom printing and promotional product creation</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Custom Apparel</h4>
                            <p>T-shirts, hoodies, jerseys, and custom clothing</p>
                        </div>
                        <div className="application-item">
                            <h4>Promotional Items</h4>
                            <p>Mugs, mouse pads, keychains, and corporate gifts</p>
                        </div>
                        <div className="application-item">
                            <h4>Personalization</h4>
                            <p>Photo gifts, custom designs, and personalized products</p>
                        </div>
                        <div className="application-item">
                            <h4>Small Batch Production</h4>
                            <p>On-demand printing, limited editions, and custom orders</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}