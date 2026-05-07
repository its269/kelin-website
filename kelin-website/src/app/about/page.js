import Header from '../components/Header';
import './about.css';
import MilestoneSlider from './MilestoneSlider';

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
                {/* Background Pattern */}
                {/* <div className="bg-pattern"></div> */}

                <div className="about-container" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {/* Hero Section */}
                    <div className="about-bg-header">
                        <section className="about-hero">
                            <h1 className="section-title text-center" style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>ABOUT KELIN GRAPHICS SYSTEM</h1>

                            <div className="hero-content-wrapper">
                                <div className="hero-stats-group">
                                    <div className="stat-box">
                                        <span className="stat-val">15+</span>
                                        <span className="stat-desc">Years of Excellence</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="stat-val">3</span>
                                        <span className="stat-desc">Major Regions Served</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="stat-val">ISO</span>
                                        <span className="stat-desc">Certified Products</span>
                                    </div>
                                </div>

                                <div className="hero-text-group">
                                    <p>
                                        Brightening the world of advertising since 2009,
                                        we are your trusted partner for competitive, reliable,
                                        and cost-efficient printing solutions.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <img src="/background-elements.svg" alt="" aria-hidden="true" className="decorative-element-about bg-elements-about" />
                        <img src="/background-elements(2).svg" alt="" aria-hidden="true" className="decorative-element-2-about bg-elements-about" />
                    </div>

                    {/* Vision & Mission */}
                    <section className="vision-mission-section">
                        <div className="vm-grid">
                            {/* Vision Card */}
                            <div className="vm-box">
                                <div className="vm-top-shadow"></div>
                                <div className="vm-icon-circle">
                                    <img src="/about-us/Vision.png" alt="Vision Icon" width="48" />
                                </div>
                                <h2 className="vm-title">OUR VISION</h2>
                                <hr className="vm-divider" />
                                <p className="vm-desc">
                                    To be an enduring and trusted business partner, providing competitive, reliable and cost efficient products and services, guided by our high and uncompromising principles.
                                </p>
                                <img src="/Hexagon Pattern BG.png" alt="" aria-hidden="true" className="vm-bg-pattern" />
                            </div>
                            {/* Mission Card */}
                            <div className="vm-box">
                                <div className="vm-top-shadow"></div>
                                <div className="vm-icon-circle">
                                    <img src="/about-us/Mission.png" alt="Mission Icon" width="48" />
                                </div>
                                <h2 className="vm-title">OUR MISSION</h2>
                                <hr className="vm-divider" />
                                <p className="vm-desc">
                                    Our mission is to provide our valued customers with accessible and cost-effective industrial solutions by being the catalyst for new and innovative products and responsive service before, during and after sales.
                                </p>
                                <p className="vm-desc" style={{ marginTop: '12px' }}>
                                    We commit to this through empowerment of our people, and continuous improvement of our technology and processes to meet the ever changing demands and needs of the times.
                                </p>
                                <img src="/Hexagon Pattern BG.png" alt="" aria-hidden="true" className="vm-bg-pattern" />
                            </div>
                        </div>
                    </section>

                    {/* Core Values */}
                    <section className="core-values-section">
                        <div className="cv-header">
                            <h2 style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>OUR CORE VALUES</h2>
                            <p>The values that guide how we work and how we serve.</p>
                        </div>

                        <div className="cv-grid-5">
                            <div className="cv-item">
                                <div className="cv-icon">
                                    <img src="/about-us/Integrity.png" alt="Integrity Icon" width="53" />
                                </div>
                                <h3 style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>INTEGRITY</h3>
                                <p>We conduct business with honesty, transparency, and ethical principles in all our dealings.</p>
                            </div>

                            <div className="cv-item">
                                <div className="cv-icon">
                                    <img src="/about-us/Accountability.png" alt="Accountability Icon" width="53" />
                                </div>
                                <h3 style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>ACCOUNTABILITY</h3>
                                <p>We take responsibility for our actions and commitments, ensuring reliable service delivery.</p>
                            </div>

                            <div className="cv-item">
                                <div className="cv-icon">
                                    <img src="/about-us/Accuracy.png" alt="Accuracy Icon" width="53" />
                                </div>
                                <h3 style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>ACCURACY</h3>
                                <p>We deliver precise solutions and maintain the highest standards of quality in our products.</p>
                            </div>

                            <div className="cv-item">
                                <div className="cv-icon">
                                    <img src="/about-us/Innovation.png" alt="Innovation Icon" width="53" />
                                </div>
                                <h3 style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>INNOVATION</h3>
                                <p>We continuously evolve and embrace new technologies to meet changing market demands.</p>
                            </div>

                            <div className="cv-item">
                                <div className="cv-icon">
                                    <img src="/about-us/Empathy.png" alt="Empathy Icon" width="53" />
                                </div>
                                <h3 style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>EMPATHY</h3>
                                <p>We continuously evolve and embrace new technologies to meet changing market demands.</p>
                            </div>
                        </div>
                    </section>

                    {/* Our Story */}
                    <div className="story-section-bg">
                        <section className="story-section">
                            <div className="story-layout">
                                <div className="story-visual-side">
                                    {/* Use an actual image tag here to match the pink abstract art, or keep as a stylized placeholder */}
                                    <div className="abstract-visual-placeholder">
                                        <img src="/dummy-image-square.jpg" alt="Abstract Kelin Graphics Art" />
                                    </div>
                                </div>

                                <div className="story-text-side">
                                    <h2 style={{ fontFamily: 'Bebas, Arial, sans-serif' }}>OUR STORY</h2>
                                    <div className="story-highlight-box">
                                        Kelin Graphics System has been brightening the world of advertising since its inception in 2009.
                                    </div>
                                    <p>
                                        Since then, it has expanded the opportunities for existing printing businesses and
                                        new players in Luzon, Visayas and Mindanao by being a catalyst for new products
                                        and initiatives.
                                    </p>
                                    <p>
                                        Our reputation for dependability, trustworthiness, competitiveness and commitment to
                                        provide ISO and C.E. certified products and reliable service before, during and
                                        after sales, has earned us our excellent reputation in the industry.
                                    </p>

                                    <div className="story-features-list">
                                        <div className="story-feature">
                                            <div className="sf-icon">
                                                <img src="/about-us/Industry-Leadership.png" alt="Industry Leadership Icon" width="54" />
                                            </div>
                                            <div className="sf-text">
                                                <h4 style={{ fontFamily: 'Arial, sans-serif' }}>Industry Leadership</h4>
                                                <p>Recognized for excellence across the Philippines</p>
                                            </div>
                                        </div>

                                        <div className="story-feature">
                                            <div className="sf-icon">
                                                <img src="/about-us/Certified-Quality.png" alt="Certified Quality Icon" width="54" />
                                            </div>
                                            <div className="sf-text">
                                                <h4 style={{ fontFamily: 'Arial, sans-serif' }}>Certified Quality</h4>
                                                <p>ISO and C.E. certified products and services</p>
                                            </div>
                                        </div>

                                        <div className="story-feature">
                                            <div className="sf-icon">
                                                <img src="/about-us/Nationwide-Reach.png" alt="Nationwide Reach Icon" width="54" />
                                            </div>
                                            <div className="sf-text">
                                                <h4 style={{ fontFamily: 'Arial, sans-serif' }}>Nationwide Reach</h4>
                                                <p>Serving Luzon, Visayas, and Mindanao</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Milestone Section */}
                    <MilestoneSlider />

                </div>
            </main>
        </div>
    );
}