import Header from '../components/Header';
import './privacy-policy.css';

export const metadata = {
    title: 'Privacy Policy - Kelin Graphics System',
    description: 'Privacy Policy for Kelin Graphics System - How we collect, use and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <div>
            <Header />
            <main className="privacy-policy-main">
                <div className="privacy-policy-container">
                    <h1 className="privacy-policy-title">Privacy Policy</h1>
                    <p className="privacy-policy-date">Last updated: February 14, 2026</p>

                    <section className="privacy-section">
                        <h2>Introduction</h2>
                        <p>
                            Kelin Graphics System ("we," "our," or "us") respects your privacy and is committed to
                            protecting your personal data. This privacy policy explains how we collect, use, and
                            safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2>Information We Collect</h2>
                        <h3>Personal Information</h3>
                        <p>We may collect the following personal information:</p>
                        <ul>
                            <li>Name and contact details when you contact us or fill out forms</li>
                            <li>Email address for newsletters and communications</li>
                            <li>Phone number for customer support</li>
                            <li>Company information for business inquiries</li>
                        </ul>

                        <h3>Automatically Collected Information</h3>
                        <p>When you visit our website, we automatically collect:</p>
                        <ul>
                            <li>IP address and location data</li>
                            <li>Browser type and version</li>
                            <li>Pages visited and time spent on our site</li>
                            <li>Referral sources</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2>How We Use Cookies</h2>
                        <p>
                            We use cookies and similar tracking technologies to improve your browsing experience.
                            Cookies help us:
                        </p>
                        <ul>
                            <li>Remember your preferences and settings</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Provide personalized content and recommendations</li>
                            <li>Ensure website security and functionality</li>
                        </ul>
                        <p>
                            You can control cookie settings through your browser preferences. However, disabling
                            cookies may affect website functionality.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2>How We Use Your Information</h2>
                        <p>We use your personal information to:</p>
                        <ul>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Process orders and manage business relationships</li>
                            <li>Send newsletters and marketing communications (with consent)</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2>Information Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may
                            share your information only in the following circumstances:
                        </p>
                        <ul>
                            <li>With your explicit consent</li>
                            <li>To comply with legal requirements</li>
                            <li>With service providers who assist in our operations (under strict confidentiality)</li>
                            <li>In case of business transfer or merger</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2>Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal
                            data against unauthorized access, alteration, disclosure, or destruction. However, no
                            internet transmission is completely secure.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2>Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal data we hold</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to data processing</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or how we handle your personal data,
                            please contact us:
                        </p>
                        <div className="privacy-contact">
                            <p><strong>Kelin Graphics System</strong></p>
                            <p>Email: privacy@kelin-graphics.com</p>
                            <p>Phone: +1 (555) 123-4567</p>
                        </div>
                    </section>

                    <section className="privacy-section">
                        <h2>Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes
                            by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}