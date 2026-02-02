import Header from '../components/Header';
import './about.css';

export const metadata = {
    title: 'About Us - Kelin Graphics System | Our Story & Values',
    description: 'Learn about Kelin Graphics System - your trusted partner since 2009, providing competitive printing solutions with integrity, innovation, and excellence.',
    keywords: 'about Kelin Graphics System, printing company, vision mission, core values, printing solutions Philippines',
    openGraph: {
        title: 'About Us - Kelin Graphics System',
        description: 'Trusted printing solutions partner since 2009 with uncompromising principles and innovative products.',
        type: 'website',
    },
};

export default function AboutUs() {
    return (
        <div>
            <Header />
            <main className="about-main">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="hero-page-content">
                        <div className="hero-page-text">
                            <h1 className="hero-page-title">About Kelin Graphics System</h1>
                            <p className="hero-page-subtitle">
                                Brightening the world of advertising since 2009, we are your trusted partner
                                for competitive, reliable, and cost-efficient printing solutions.
                            </p>
                            <div className="hero-page-stats">
                                <div className="stat">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Years of Excellence</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">3</span>
                                    <span className="stat-label">Major Regions Served</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">ISO</span>
                                    <span className="stat-label">Certified Products</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-page-visual">
                            <div className="floating-element element-1">
                                <img src="/innovation-icon.png" alt="Innovation" />
                            </div>
                            <div className="floating-element element-2">
                                <img src="/quality-icon.png" alt="Quality" />
                            </div>
                            <div className="floating-element element-3">
                                <img src="/support-icon.png" alt="Support" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="vision-mission">
                    <div className="vm-container">
                        <div className="vm-card vision-card">
                            <div className="vm-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h2>Our Vision</h2>
                            <p>
                                To be an enduring and trusted business partner, providing competitive,
                                reliable and cost efficient products and services, guided by our high
                                and uncompromising principles.
                            </p>
                        </div>

                        <div className="vm-card mission-card">
                            <div className="vm-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2>Our Mission</h2>
                            <p>
                                Our mission is to provide our valued customers with accessible and cost-effective
                                industrial solutions by being the catalyst for new and innovative products and
                                responsive service before, during and after sales.
                            </p>
                            <p className="mission-commitment">
                                We commit to this through empowerment of our people, and continuous improvement
                                of our technology and processes to meet the ever changing demands and needs of the times.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="core-values">
                    <div className="values-header">
                        <h2>Our Core Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Integrity</h3>
                            <p>We conduct business with honesty, transparency, and ethical principles in all our dealings.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M12.5 7C12.5 9.20914 10.7091 11 8.5 11C6.29086 11 4.5 9.20914 4.5 7C4.5 4.79086 6.29086 3 8.5 3C10.7091 3 12.5 4.79086 12.5 7ZM20 8V14M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Accountability</h3>
                            <p>We take responsibility for our actions and commitments, ensuring reliable service delivery.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Accuracy</h3>
                            <p>We deliver precise solutions and maintain the highest standards of quality in our products.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Innovation</h3>
                            <p>We continuously evolve and embrace new technologies to meet changing market demands.</p>
                        </div>
                    </div>
                </section>

                {/* Company Story */}
                <section className="company-story">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p className="story-highlight">
                                Kelin Graphics System has been brightening the world of advertising since its inception in 2009.
                            </p>
                            <p>
                                Since then, it has expanded the opportunities for existing printing businesses and new players
                                in Luzon, Visayas and Mindanao by being a catalyst for new products and initiatives.
                            </p>
                            <p>
                                Our reputation for dependability, trustworthiness, competitiveness and commitment to provide
                                ISO and C.E. certified products and reliable service before, during and after sales, has earned
                                us our excellent reputation in the industry.
                            </p>

                            <div className="story-features">
                                <div className="feature">
                                    <div className="feature-icon">
                                        <img src="/Industry-Leadership.png" alt="Industry Leadership" />
                                    </div>
                                    <div className="feature-text">
                                        <h4>Industry Leadership</h4>
                                        <p>Recognized for excellence across the Philippines</p>
                                    </div>
                                </div>
                                <div className="feature">
                                    <div className="feature-icon">
                                        <img src="/Certified-Quality.png" alt="Certified Quality" />
                                    </div>
                                    <div className="feature-text">
                                        <h4>Certified Quality</h4>
                                        <p>ISO and C.E. certified products and services</p>
                                    </div>
                                </div>
                                <div className="feature">
                                    <div className="feature-icon">
                                        <img src="/Nationwide-Reach.png" alt="Nationwide Reach" />
                                    </div>
                                    <div className="feature-text">
                                        <h4>Nationwide Reach</h4>
                                        <p>Serving Luzon, Visayas, and Mindanao</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="story-visual">
                            <img src="/se.webp" alt="Kelin Graphics System Journey" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}