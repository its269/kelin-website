import Header from '../components/Header';
import Link from 'next/link';
import '../products/products.css';

export default function Machine() {
    const machines = [
        {
            id: 'eco-solvent-printers',
            name: 'Eco Solvent Printers',
            description: 'High-performance eco-solvent printers for durable indoor and outdoor graphics with vibrant color output.',
            image: '/dummy-image-square.jpg',
            features: ['Outdoor Durable', 'Vibrant Colors', 'Large Format'],
            href: '/eco-solvent-printers',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 6,2 18,2 18,9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                </svg>
            )
        },
        {
            id: 'solvent-printers',
            name: 'Solvent Printers',
            description: 'Industrial solvent printing solutions for high-volume production and long-lasting outdoor applications.',
            image: '/dummy-image-square.jpg',
            features: ['Industrial Output', 'High Speed', 'Weather Resistant'],
            href: '/solvent-printers',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 6,2 18,2 18,9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                </svg>
            )
        },
        {
            id: 'cutting-machine',
            name: 'Cutting Machines',
            description: 'Precision cutting machines for vinyl, paper, and various materials with computer-controlled accuracy.',
            image: '/dummy-image-square.jpg',
            features: ['Precision Cutting', 'Multi-Material', 'Computer Control'],
            href: '/cutting-machine',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="20" y1="4" x2="8.12" y2="15.88" />
                    <line x1="14.47" y1="14.48" x2="20" y2="20" />
                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
            )
        },
        {
            id: 'sublimation-dtf',
            name: 'Sublimation and DTF',
            description: 'Specialized sublimation and DTF printing systems for textile transfer, apparel, and custom product production.',
            image: '/dummy-image-square.jpg',
            features: ['Textile Transfer', 'High Color Accuracy', 'Production Ready'],
            href: '/sublimation-dtf',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                </svg>
            )
        },
        {
            id: 'uv-printers',
            name: 'UV Printers',
            description: 'UV printing machines for rigid and flexible media with instant curing and high-detail output.',
            image: '/dummy-image-square.jpg',
            features: ['Instant Curing', 'Rigid Media', 'Detail Precision'],
            href: '/uv-printers',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 6,2 18,2 18,9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                </svg>
            )
        },
        {
            id: 'heatpress',
            name: 'Heatpress',
            description: 'Heatpress machines for transfer printing, sublimation workflow, and custom merchandise production.',
            image: '/dummy-image-square.jpg',
            features: ['Even Pressure', 'Temperature Control', 'Transfer Ready'],
            href: '/heatpress',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                </svg>
            )
        },
        {
            id: 'laminator',
            name: 'Laminator',
            description: 'Laminator solutions for finishing, protection, and improved print durability across applications.',
            image: '/dummy-image-square.jpg',
            features: ['Hot/Cold Options', 'Smooth Finish', 'Protection Layer'],
            href: '/laminator',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
            )
        },
        {
            id: 'laser-machine',
            name: 'Laser Machines',
            description: 'Laser cutting and engraving systems for precise fabrication and material processing.',
            image: '/dummy-image-square.jpg',
            features: ['Precision Laser', 'Fast Processing', 'Multi-Material'],
            href: '/laser-machine',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="2" x2="12" y2="8" />
                    <line x1="8" y1="14" x2="16" y2="14" />
                    <line x1="10" y1="18" x2="14" y2="18" />
                    <path d="M5 22h14" />
                    <path d="M7 10h10v10H7z" />
                </svg>
            )
        },
        {
            id: 'embroidery-knitting',
            name: 'Embroidery and Knitting',
            description: 'Embroidery and knitting machines for automated textile decoration and garment production.',
            image: '/dummy-image-square.jpg',
            features: ['Automated Stitching', 'Textile Ready', 'Production Efficiency'],
            href: '/embroidery-knitting',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                    <circle cx="8" cy="7" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="16" cy="17" r="1" />
                </svg>
            )
        },
        {
            id: '3d-printer',
            name: '3D Printer',
            description: '3D printer solutions for rapid prototyping, custom parts, and creative production workflows.',
            image: '/dummy-image-square.jpg',
            features: ['Rapid Prototyping', 'Custom Parts', 'Precision Build'],
            href: '/3d-printer',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M8 8h8v8H8z" />
                </svg>
            )
        }
    ];
    return (
        <div>
            <Header />
            <main className="products-container machine-page">
                <div className="page-header">
                    <div className="header-content">
                        <h1 className="products-title">Machines & Equipment</h1>
                        <p className="products-description">
                            Professional printing machines and equipment for all your production needs.
                            From high-performance digital printers to precision cutting machines.
                        </p>
                    </div>
                    <div className="header-stats">
                        <div className="stat">
                            <span className="stat-number">10</span>
                            <span className="stat-label">Machine Types</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Models Available</span>
                        </div>
                    </div>
                </div>

                <div className="machines-grid">
                    {machines.map((machine) => (
                        <div key={machine.id} className="machine-card">
                            <div className="machine-image-container">
                                <img src={machine.image} alt={machine.name} className="machine-image" />
                                <div className="machine-overlay">
                                    <div className="machine-icon">
                                        {machine.icon}
                                    </div>
                                </div>
                            </div>

                            <div className="machine-content">
                                <h3 className="machine-title">{machine.name}</h3>
                                <p className="machine-description">{machine.description}</p>

                                <div className="machine-features">
                                    {machine.features.map((feature, index) => (
                                        <span key={index} className="feature-tag">{feature}</span>
                                    ))}
                                </div>

                                <Link href={machine.href} className="machine-link">
                                    <span>Explore {machine.name}</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7,7 17,7 17,17" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cta-section">
                    <h3>Need Help Choosing?</h3>
                    <p>Our experts can help you select the right equipment for your specific needs.</p>
                    <Link href="/contact" className="cta-button">Contact Our Experts</Link>
                </div>
            </main>
        </div>
    );
}
