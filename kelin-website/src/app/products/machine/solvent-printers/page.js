import Header from '../../../components/Header';
import '../machine.css';

export const metadata = {
    title: 'Solvent Printers - Kelin Graphics System | Industrial Digital Printing',
    description: 'Discover our industrial solvent printers for heavy-duty outdoor applications, billboards, and long-term outdoor graphics.',
    keywords: 'solvent printers, industrial printing, outdoor billboards, heavy duty printing, commercial signage',
};

export default function SolventPrinters() {
    return (
        <div>
            <Header />
            <main className="machine-main">
                {/* Hero Section */}
                <section className="machine-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Solvent Printers</h1>
                        <p className="hero-subtitle">
                            Industrial-grade solvent printers for heavy-duty outdoor applications, billboards, and maximum durability graphics.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/luxor2.png" alt="Solvent Printers" className="hero-image" />
                    </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                    <div className="section-header">
                        <h2>Industrial Solvent Printing Solutions</h2>
                        <p>Heavy-duty solvent printers built for maximum productivity and durability</p>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/luxor2.png" alt="Heavy-Duty Solvent Printer" />
                            </div>
                            <div className="product-info">
                                <h3>Heavy-Duty Solvent Printer</h3>
                                <p>Industrial solvent printer designed for continuous operation and maximum outdoor durability.</p>
                                <ul>
                                    <li>Print width up to 3.2m</li>
                                    <li>Outdoor durability up to 5 years</li>
                                    <li>Industrial print heads</li>
                                    <li>Continuous operation capability</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/se.webp" alt="Billboard Solvent System" />
                            </div>
                            <div className="product-info">
                                <h3>Billboard Solvent System</h3>
                                <p>Specialized solvent printer for large format billboard production and outdoor advertising.</p>
                                <ul>
                                    <li>Ultra-wide format printing</li>
                                    <li>High-speed production mode</li>
                                    <li>Maximum ink density</li>
                                    <li>Weather-proof output</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <h2>Industrial Solvent Printer Advantages</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🏭</div>
                            <h3>Industrial Strength</h3>
                            <p>Built for heavy-duty commercial use with robust construction and reliable performance.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">⏰</div>
                            <h3>Maximum Durability</h3>
                            <p>Superior outdoor lifespan up to 5 years with excellent fade resistance and weatherproofing.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">📏</div>
                            <h3>Large Format</h3>
                            <p>Wide format capabilities for billboards, building wraps, and large-scale outdoor advertising.</p>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">💪</div>
                            <h3>Heavy-Duty Media</h3>
                            <p>Handles thick substrates and specialty materials for demanding applications.</p>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="section-header">
                        <h2>Applications</h2>
                        <p>Perfect for heavy-duty outdoor and industrial printing applications</p>
                    </div>

                    <div className="applications-list">
                        <div className="application-item">
                            <h4>Billboard Advertising</h4>
                            <p>Large format billboards and highway advertising displays</p>
                        </div>
                        <div className="application-item">
                            <h4>Building Wraps</h4>
                            <p>Massive building advertisements and construction site graphics</p>
                        </div>
                        <div className="application-item">
                            <h4>Fleet Graphics</h4>
                            <p>Commercial vehicle graphics and transportation advertising</p>
                        </div>
                        <div className="application-item">
                            <h4>Industrial Signage</h4>
                            <p>Heavy-duty industrial signs and safety signage systems</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}