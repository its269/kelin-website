import Link from 'next/link';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <Link href="/" className="logo-link">
                                KELIN GRAPHICS SYSTEM
                            </Link>
                        </div>
                        <p className="footer-description">
                            YOUR TRUSTED LONG-TERM PRINTING SOLUTIONS PROVIDER
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link href="/explore">Explore</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">News & Events</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-section">
                        <h4 className="footer-title">Products</h4>
                        <ul className="footer-links">
                            <li><Link href="/products/inks">Inks</Link></li>
                            <li><Link href="/products/materials">Materials</Link></li>
                            <li><Link href="/products/machine">Machines</Link></li>
                            <li><Link href="/products/accessories">Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="footer-title">Contact</h4>
                        <div className="footer-contact-container">
                            <div className="footer-contact">
                                <p>
                                    <strong>Address:</strong><br />
                                    3M COMPOUND FIRST STREET WAREHOUSE 11 SANTA ROSA II MARILAO BULACAN
                                </p>
                                <p>
                                    <strong>Mobile:</strong><br />
                                    0917 678 0608 | 0908 196 0836
                                </p>
                                <p>
                                    <strong>Telephone:</strong><br />
                                    (02) 8711-1888
                                </p>
                                <p>
                                    <strong>Hours:</strong><br />
                                    Mon-Sat: 9:00 am–6:00 pm
                                </p>
                                <p>
                                    <strong>Email:</strong><br />
                                    info@kelinph.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Kelin Graphics System. All rights reserved.
                    </p>
                    <div className="footer-social">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/KelinGraphicsPH"
                            className="social-link"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/kelingraphicsph/"
                            className="social-link"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/instagram(2).png" alt="Instagram" width="20" height="20" />
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://www.youtube.com/@kelinph"
                            className="social-link"
                            aria-label="YouTube"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>

                        {/* Shopee (Updated to match your attachment) */}
                        <a
                            href="https://shopee.ph/kelingraphicsph"
                            className="social-link"
                            aria-label="Shopee"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/shopee.png" alt="Shopee" width="20" />
                        </a>

                        {/* Lazada (Updated to match your attachment) */}
                        <a
                            href="https://www.lazada.com.ph/shop/kelin-graphics-system/"
                            className="social-link"
                            aria-label="Lazada"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/lazada (2).png" alt="Lazada" width="20" />
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:info@kelinph.com"
                            className="social-link"
                            aria-label="Email"
                        >
                            <img src="/email.png" alt="Email" width="20" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}