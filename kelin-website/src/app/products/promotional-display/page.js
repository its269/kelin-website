import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import './promotional-display.css';

export const metadata = {
  title: 'Promotional Display Solutions - Kelin',
  description: 'Professional promotional displays, banners, and exhibition materials for effective marketing and brand visibility.',
};

export default function PromotionalDisplayPage() {
  return (
    <div>
      <Header />
      <div className="promotional-display-container">
        <div className="promotional-display-header">
          <h1 className="promotional-display-title">Promotional Display Solutions</h1>
          <p className="promotional-display-description">
            Professional promotional displays, banners, and exhibition materials designed to maximize your brand visibility
            and create impactful marketing experiences. From trade shows to retail environments, we provide complete
            promotional display solutions that capture attention and drive results.
          </p>
        </div>

        {/* Banner & Display Systems */}
        <div className="promotional-display-category">
          <h2 className="promotional-display-category-title">Banner & Display Systems</h2>
          <div className="promotional-display-grid">
            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-1.jpg"
                alt="Roll-Up Banners"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Roll-Up Banners</h3>
                <p className="promotional-display-desc">
                  Portable retractable banners perfect for trade shows, presentations, and retail displays.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Easy setup and breakdown</li>
                    <li>Compact carrying case</li>
                    <li>Premium aluminum base</li>
                    <li>High-resolution graphics</li>
                    <li>Multiple size options</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Events</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-2.jpg"
                alt="Pop-Up Displays"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Pop-Up Displays</h3>
                <p className="promotional-display-desc">
                  Large format curved and straight pop-up displays for maximum visual impact at exhibitions.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Lightweight aluminum frame</li>
                    <li>Magnetic panel attachment</li>
                    <li>Wheeled shipping cases</li>
                    <li>Tool-free assembly</li>
                    <li>Custom graphics</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Exhibitions</span>
                    <span className="promotional-display-application-tag">Conventions</span>
                    <span className="promotional-display-application-tag">Backdrops</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-3.jpg"
                alt="Tension Fabric Displays"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Tension Fabric Displays</h3>
                <p className="promotional-display-desc">
                  Modern fabric displays with silicone edge graphics for seamless, professional appearance.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Seamless fabric graphics</li>
                    <li>Lightweight aluminum frame</li>
                    <li>Washable fabric prints</li>
                    <li>Easy graphic changes</li>
                    <li>Premium finish</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Corporate</span>
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Museums</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-4.jpg"
                alt="Feather Flags"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Feather Flags</h3>
                <p className="promotional-display-desc">
                  Eye-catching outdoor flags that flutter in the wind for maximum visibility and attention.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Weather-resistant materials</li>
                    <li>Flexible fiberglass poles</li>
                    <li>Ground spike included</li>
                    <li>Multiple sizes available</li>
                    <li>Double-sided printing</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Outdoor Events</span>
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Automotive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signage & Banners */}
        <div className="promotional-display-category">
          <h2 className="promotional-display-category-title">Signage & Banners</h2>
          <div className="promotional-display-grid">
            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-5.jpg"
                alt="Vinyl Banners"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Vinyl Banners</h3>
                <p className="promotional-display-desc">
                  Durable outdoor vinyl banners for long-term advertising and promotional campaigns.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>13oz premium vinyl material</li>
                    <li>UV-resistant inks</li>
                    <li>Reinforced hems</li>
                    <li>Grommets every 2 feet</li>
                    <li>Custom sizes available</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Outdoor Advertising</span>
                    <span className="promotional-display-application-tag">Construction</span>
                    <span className="promotional-display-application-tag">Events</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-6.jpg"
                alt="Mesh Banners"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Mesh Banners</h3>
                <p className="promotional-display-desc">
                  Perforated mesh banners ideal for windy conditions and building wraps.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Wind-resistant mesh material</li>
                    <li>50% air flow through</li>
                    <li>Fade-resistant printing</li>
                    <li>Reinforced edges</li>
                    <li>Large format capability</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Building Wraps</span>
                    <span className="promotional-display-application-tag">Fencing</span>
                    <span className="promotional-display-application-tag">Scaffolding</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-7.jpg"
                alt="A-Frame Signs"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">A-Frame Signs</h3>
                <p className="promotional-display-desc">
                  Portable sidewalk signs perfect for retail storefronts and promotional messaging.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Heavy-duty metal frame</li>
                    <li>Double-sided display</li>
                    <li>Easy poster changes</li>
                    <li>Spring-loaded corners</li>
                    <li>Weather-resistant</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Retail</span>
                    <span className="promotional-display-application-tag">Restaurants</span>
                    <span className="promotional-display-application-tag">Services</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-8.jpg"
                alt="Table Throws"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Table Throws</h3>
                <p className="promotional-display-desc">
                  Professional table covers that transform any table into a branded display surface.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Premium fabric construction</li>
                    <li>Wrinkle-resistant material</li>
                    <li>Machine washable</li>
                    <li>Custom graphics</li>
                    <li>Fitted or draped styles</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Job Fairs</span>
                    <span className="promotional-display-application-tag">Conferences</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition & Backdrop Systems */}
        <div className="promotional-display-category">
          <h2 className="promotional-display-category-title">Exhibition & Backdrop Systems</h2>
          <div className="promotional-display-grid">
            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-9.jpg"
                alt="Step & Repeat Backdrops"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Step & Repeat Backdrops</h3>
                <p className="promotional-display-desc">
                  Professional event backdrops featuring repeated logos for photo opportunities and branding.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Seamless pattern design</li>
                    <li>High-resolution printing</li>
                    <li>Telescopic stand system</li>
                    <li>Easy assembly</li>
                    <li>Custom sizing</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Red Carpet Events</span>
                    <span className="promotional-display-application-tag">Press Conferences</span>
                    <span className="promotional-display-application-tag">Awards Shows</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-10.jpg"
                alt="Trade Show Backdrops"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Trade Show Backdrops</h3>
                <p className="promotional-display-desc">
                  Large format backdrops designed specifically for trade show booths and exhibitions.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Modular design system</li>
                    <li>Multiple panel options</li>
                    <li>Professional lighting ready</li>
                    <li>Portable shipping cases</li>
                    <li>Quick setup</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Trade Shows</span>
                    <span className="promotional-display-application-tag">Exhibitions</span>
                    <span className="promotional-display-application-tag">Product Launches</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-11.jpg"
                alt="Hanging Banners"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Hanging Banners</h3>
                <p className="promotional-display-desc">
                  Overhead banners and ceiling displays for maximum visibility in large venues.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Lightweight materials</li>
                    <li>Reinforced hanging points</li>
                    <li>Double-sided printing</li>
                    <li>Custom shapes available</li>
                    <li>Fire retardant options</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Convention Centers</span>
                    <span className="promotional-display-application-tag">Retail Stores</span>
                    <span className="promotional-display-application-tag">Airports</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promotional-display-card">
              <Image
                src="/marquee-logo/inks/ink-product-12.jpg"
                alt="Portable Display Stands"
                width={180}
                height={135}
                className="promotional-display-image"
              />
              <div className="promotional-display-info">
                <h3 className="promotional-display-name">Portable Display Stands</h3>
                <p className="promotional-display-desc">
                  Versatile display stands that can be configured for various promotional needs.
                </p>
                <div className="promotional-display-features">
                  <h4>Features:</h4>
                  <ul>
                    <li>Adjustable height</li>
                    <li>Tool-free assembly</li>
                    <li>Compact storage</li>
                    <li>Multiple mounting options</li>
                    <li>Durable construction</li>
                  </ul>
                </div>
                <div className="promotional-display-applications">
                  <h4>Applications:</h4>
                  <div className="promotional-display-application-tags">
                    <span className="promotional-display-application-tag">Presentations</span>
                    <span className="promotional-display-application-tag">Lobbies</span>
                    <span className="promotional-display-application-tag">Showrooms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="promotional-display-info-section">
          <h2>Why Choose Kelin for Promotional Displays?</h2>
          <div className="promotional-display-info-grid">
            <div className="promotional-display-info-item">
              <h3>Professional Quality</h3>
              <p>
                High-resolution printing and premium materials ensure your promotional displays
                look professional and make a lasting impression on your audience.
              </p>
            </div>
            <div className="promotional-display-info-item">
              <h3>Custom Solutions</h3>
              <p>
                Every promotional display is customized to your brand specifications with
                attention to detail and quality craftsmanship.
              </p>
            </div>
            <div className="promotional-display-info-item">
              <h3>Fast Turnaround</h3>
              <p>
                Quick production and delivery times to meet your event deadlines and
                marketing campaign launch dates.
              </p>
            </div>
            <div className="promotional-display-info-item">
              <h3>Complete Service</h3>
              <p>
                From design consultation to installation support, we provide comprehensive
                service for all your promotional display needs.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="promotional-display-contact-section">
          <h2>Ready to Make an Impact?</h2>
          <p>
            Contact us today to discuss your promotional display needs and discover how we can help
            you create memorable marketing experiences that drive results.
          </p>
          <div className="promotional-display-contact-buttons">
            <Link href="/contact" className="btn-primary-promotional">
              Get Quote
            </Link>
            <Link href="/explore" className="btn-secondary-promotional">
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}