import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: 'Laminator Machine - Kelin Graphics System | Professional Laminating Solutions',
    description: 'Professional laminating machines for sign protection, document lamination, and finishing applications.',
    keywords: 'laminator, laminating machine, sign lamination, document protection, cold lamination, hot lamination',
};

export default function Laminator() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Laminator Machine</h1>
                        <p className="hero-subtitle">
                            Professional laminating machines for sign protection, document preservation, and finishing applications with superior quality results.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="Laminator Machine" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>Laminating Solutions</h2>
                        <p>Professional laminating equipment for protection and finishing</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="Cold Laminator" />
                            </div>
                            <div className="product-info">
                                <h3>Cold Laminator</h3>
                                <p>Professional cold laminating machine for pressure-sensitive films and sign protection.</p>
                                <ul>
                                    <li>Wide format capability</li>
                                    <li>Adjustable pressure rollers</li>
                                    <li>Smooth application system</li>
                                    <li>Bubble-free lamination</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="Hot Laminator" />
                            </div>
                            <div className="product-info">
                                <h3>Hot Laminator</h3>
                                <p>Thermal laminating system for document protection and professional finishing.</p>
                                <ul>
                                    <li>Temperature control system</li>
                                    <li>Multiple film compatibility</li>
                                    <li>Professional grade heating</li>
                                    <li>Consistent temperature distribution</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>Laminating Features</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🛡️</div>
                            <h3>Superior Protection</h3>
                            <p>Excellent protection against UV, moisture, and physical damage.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">🎯</div>
                            <h3>Precision Application</h3>
                            <p>Accurate laminate placement with consistent pressure and alignment.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">💨</div>
                            <h3>Bubble-Free Results</h3>
                            <p>Advanced roller systems eliminate air bubbles for perfect finishes.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">📏</div>
                            <h3>Wide Format</h3>
                            <p>Handle large format prints and signs with professional quality.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Professional laminating for various protection and finishing needs</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Sign Protection</h4>
                            <p>Outdoor signs, banners, and graphics protection</p>
                        </div>
                        <div className="application-item">
                            <h4>Document Preservation</h4>
                            <p>Important documents, certificates, and records</p>
                        </div>
                        <div className="application-item">
                            <h4>Menu Boards</h4>
                            <p>Restaurant menus, price lists, and information boards</p>
                        </div>
                        <div className="application-item">
                            <h4>Educational Materials</h4>
                            <p>Charts, posters, and classroom materials</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}