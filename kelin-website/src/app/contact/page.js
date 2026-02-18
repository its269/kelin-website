"use client";
import { useState } from 'react';
import Header from '../components/Header';
import './contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                subject: '',
                message: '',
                inquiryType: 'general'
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="contact-page">
                <div className="contact-hero">
                    <div className="container">
                        <h1 className="contact-title">Get in Touch</h1>
                        <p className="contact-subtitle">
                            Ready to transform your printing business? Let's discuss your needs and find the perfect solution.
                        </p>
                    </div>
                </div>

                <div className="contact-content">
                    <div className="container">
                        <div className="contact-grid">
                            {/* Contact Information */}
                            <div className="contact-info">
                                <h2>Contact Information</h2>
                                <p className="contact-description">
                                    Connect with our expert team for personalized assistance with your printing solutions.
                                </p>

                                <div className="contact-details">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Email</h3>
                                            <p>info@kelinph.com</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59534 1.99522 8.06618 2.16708 8.43547 2.48353C8.80476 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2002 21.5265 15.5776C21.8437 15.955 22.0122 16.4341 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Phone</h3>
                                            <p>+1 (555) 123-4567</p>
                                            <p>+1 (555) 123-4568</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Address</h3>
                                            <p>123 Innovation Drive</p>
                                            <p>Tech City, TC 12345</p>
                                            <p>United States</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Business Hours</h3>
                                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                                            <p>Saturday: 9:00 AM - 4:00 PM</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="contact-form-container">
                                <h2>Send us a Message</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours.</p>

                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="company">Company Name</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                placeholder="Enter your company name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inquiryType">Inquiry Type</label>
                                        <select
                                            id="inquiryType"
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleInputChange}
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="sales">Sales & Pricing</option>
                                            <option value="support">Technical Support</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="careers">Careers</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Brief description of your inquiry"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="6"
                                            placeholder="Please provide details about your inquiry..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>

                                    {submitStatus === 'success' && (
                                        <div className="form-status success">
                                            <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="form-status error">
                                            <p>Sorry, there was an error sending your message. Please try again.</p>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}