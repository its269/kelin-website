import Header from '../../components/Header';
import Link from 'next/link';
import '../products.css';

export default function Machine() {
  const machines = [
    {
      id: 'printers',
      name: 'Digital Printers',
      description: 'High-performance digital printers for large format and specialty applications with superior print quality.',
      image: '/se.webp',
      features: ['Large Format', 'High Resolution', 'Multiple Media'],
      href: '/products/machine/printers',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6,9 6,2 18,2 18,9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
      )
    },
    {
      id: 'cutters',
      name: 'Cutting Machines',
      description: 'Precision cutting machines for vinyl, paper, and various materials with computer-controlled accuracy.',
      image: '/se.webp',
      features: ['Precision Cutting', 'Multi-Material', 'Computer Control'],
      href: '/products/machine/cutters',
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
      id: 'laminators',
      name: 'Laminating Equipment',
      description: 'Professional laminating machines for document protection, enhancement, and finishing applications.',
      image: '/se.webp',
      features: ['Hot & Cold Lamination', 'Variable Speed', 'Professional Grade'],
      href: '/products/machine/laminators',
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
      id: 'heat-press',
      name: 'Heat Press Machines',
      description: 'Heat transfer machines for textile printing, sublimation, and promotional product customization.',
      image: '/se.webp',
      features: ['Digital Control', 'Even Pressure', 'Multi-Application'],
      href: '/products/machine/heat-press',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
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
              <span className="stat-number">4</span>
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