"use client";
import { useState, useEffect } from 'react';
import './CookieConsent.css';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);

        // Enable analytics/tracking here if needed
        if (typeof window.gtag !== 'undefined') {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setShowBanner(false);

        // Disable analytics/tracking here if needed
        if (typeof window.gtag !== 'undefined') {
            window.gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    };

    const handleClose = () => {
        setShowBanner(false);
        // Don't set localStorage, so banner will show again on next visit
    };

    if (!showBanner) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-banner">
                <button
                    className="cookie-close-btn"
                    onClick={handleClose}
                    aria-label="Close cookie banner"
                >
                    ×
                </button>

                <div className="cookie-content">
                    <h3 className="cookie-title">Cookie Notice</h3>
                    <p className="cookie-text">
                        Our website uses cookies and similar technologies stored on your device to
                        help improve your online experience. You may find more details in our{' '}
                        <a href="/privacy-policy" className="cookie-link">Privacy Policy</a>.
                    </p>
                </div>

                <div className="cookie-actions">
                    <button
                        className="cookie-btn cookie-btn-accept"
                        onClick={handleAccept}
                    >
                        Got it!
                    </button>
                    <button
                        className="cookie-btn cookie-btn-decline"
                        onClick={handleDecline}
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
}