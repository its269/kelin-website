import Header from '../components/Header';
import './news.css';

export default function NewsAndEvents() {
  return (
    <div>
      <Header />
      <main className="events-main">
        {/* Hero Section */}
        <section className="events-hero">
          <div className="hero-content">
            <h1 className="hero-title">News & Events</h1>
            <p className="hero-subtitle">
              Stay connected with the latest innovations, industry updates, and exciting developments from Kelin Graphics System.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">News Updates</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Industry Events</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Community Members</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="floating-card card-1">
                <img src="/KELIN-LOGO-01.png" alt="News Updates" />
              </div>
              <div className="floating-card card-2">
                <img src="/KELIN-LOGO-01.png" alt="Industry Events" />
              </div>
              <div className="floating-card card-3">
                <img src="/KELIN-LOGO-01.png" alt="Community" />
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="news-section">
          <div className="section-header">
            <h2>Latest News</h2>
            <p>Stay updated with our latest announcements and product releases</p>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-header">
                <span className="news-category">Product Launch</span>
                <span className="news-date">December 1, 2025</span>
              </div>
              <h3>New Product Launch - Advanced UV Printers</h3>
              <p>We're excited to announce the launch of our new line of advanced UV printers, offering enhanced productivity and print quality for professional applications.</p>
            </div>

            <div className="news-card">
              <div className="news-header">
                <span className="news-category">Trade Show</span>
                <span className="news-date">November 15, 2025</span>
              </div>
              <h3>Trade Show Participation - SGIA Expo 2025</h3>
              <p>Visit us at booth #1234 during SGIA Expo to see our latest products and technologies in action. Experience live demonstrations and meet our expert team.</p>
            </div>

            <div className="news-card">
              <div className="news-header">
                <span className="news-category">Partnership</span>
                <span className="news-date">October 28, 2025</span>
              </div>
              <h3>Industry Partnership Announcement</h3>
              <p>Strategic partnership with leading technology providers to enhance our digital printing solutions and expand market reach globally.</p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="events-section">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Visit us at these exciting exhibitions and trade shows</p>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-header">
                <span className="event-type">Exhibition</span>
                <span className="event-date">July 16-18, 2026</span>
              </div>
              <h3>Graphic Expo</h3>
              <p>Meet us at SMX Manila (MOA) for the premier graphics and printing exhibition. Discover our latest innovations and connect with industry experts.</p>
            </div>

            <div className="event-card">
              <div className="event-header">
                <span className="event-type">Exhibition</span>
                <span className="event-date">July 16-18, 2026</span>
              </div>
              <h3>Pack Print Plas (Visayas)</h3>
              <p>Join us at Waterfront Cebu City for this specialized packaging and printing exhibition serving the Visayas region.</p>
            </div>

            <div className="event-card">
              <div className="event-header">
                <span className="event-type">Exhibition</span>
                <span className="event-date">July 2-4, 2026</span>
              </div>
              <h3>Print Philippines (PrintCon)</h3>
              <p>Visit our booth at SMX Manila (MOA) during the Philippines' leading print technology exhibition and conference.</p>
            </div>

            <div className="event-card">
              <div className="event-header">
                <span className="event-type">Exhibition</span>
                <span className="event-date">September 4-6, 2026</span>
              </div>
              <h3>PhilConstruct (Mindanao)</h3>
              <p>Explore our construction and building solutions at SMX Davao (SM Lanang) for the Mindanao construction industry.</p>
            </div>

            <div className="event-card">
              <div className="event-header">
                <span className="event-type">Exhibition</span>
                <span className="event-date">October 8-10, 2026</span>
              </div>
              <h3>Pack Print Plas (Manila)</h3>
              <p>Don't miss our participation at SMX Manila (MOA) for the main packaging, printing, and plastics exhibition in the Philippines.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}