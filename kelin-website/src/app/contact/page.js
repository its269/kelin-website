"use client";
import { useState } from 'react';
import Header from '../components/Header';
import './contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        countryCode: '+63',
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
            const response = await fetch('https://formspree.io/f/mvzwzkkd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _replyto: formData.email,
                    _subject: `New Inquiry from Contact Page - ${formData.subject}`,
                    _cc: 'info@kelinph.com',
                    'Page Source': 'Contact Page',
                    'Page URL': typeof window !== 'undefined' ? window.location.href : '',
                    'Submitted At': new Date().toLocaleString('en-US', {
                        timeZone: 'Asia/Manila',
                        dateStyle: 'full',
                        timeStyle: 'long'
                    })
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    countryCode: '+63',
                    phone: '',
                    subject: '',
                    message: '',
                    inquiryType: 'general'
                });
            } else {
                setSubmitStatus('error');
            }
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
                                            <h3>Telephone</h3>
                                            <p>(02) 8711-1888</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59534 1.99522 8.06618 2.16708 8.43547 2.48353C8.80476 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2002 21.5265 15.5776C21.8437 15.955 22.0122 16.4341 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Mobile</h3>
                                            <p>0917 678 0608</p>
                                            <p>0908 196 0836</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Website</h3>
                                            <p>www.kelinph.com</p>
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
                                            <p>3M Compound First Street Warehouse 11</p>
                                            <p>Santa Rosa II, Marilao, Bulacan</p>
                                            <p>Philippines</p>
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
                                            <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
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
                                            <div className="contact-phone-input">
                                                <select
                                                    name="countryCode"
                                                    value={formData.countryCode}
                                                    onChange={handleInputChange}
                                                    className="contact-country-select"
                                                >
                                                    <option value="+63">🇵🇭 +63</option>
                                                    <option value="+1">🇺🇸 +1</option>
                                                    <option value="+1">🇨🇦 +1</option>
                                                    <option value="+52">🇲🇽 +52</option>
                                                    <option value="+54">🇦🇷 +54</option>
                                                    <option value="+55">🇧🇷 +55</option>
                                                    <option value="+56">🇨🇱 +56</option>
                                                    <option value="+57">🇨🇴 +57</option>
                                                    <option value="+58">🇻🇪 +58</option>
                                                    <option value="+51">🇵🇪 +51</option>
                                                    <option value="+593">🇪🇨 +593</option>
                                                    <option value="+595">🇵🇾 +595</option>
                                                    <option value="+598">🇺🇾 +598</option>
                                                    <option value="+591">🇧🇴 +591</option>
                                                    <option value="+592">🇬🇾 +592</option>
                                                    <option value="+597">🇸🇷 +597</option>

                                                    <option value="+44">🇬🇧 +44</option>
                                                    <option value="+353">🇮🇪 +353</option>
                                                    <option value="+33">🇫🇷 +33</option>
                                                    <option value="+49">🇩🇪 +49</option>
                                                    <option value="+34">🇪🇸 +34</option>
                                                    <option value="+39">🇮🇹 +39</option>
                                                    <option value="+31">🇳🇱 +31</option>
                                                    <option value="+32">🇧🇪 +32</option>
                                                    <option value="+41">🇨🇭 +41</option>
                                                    <option value="+43">🇦🇹 +43</option>
                                                    <option value="+45">🇩🇰 +45</option>
                                                    <option value="+46">🇸🇪 +46</option>
                                                    <option value="+47">🇳🇴 +47</option>
                                                    <option value="+48">🇵🇱 +48</option>
                                                    <option value="+420">🇨🇿 +420</option>
                                                    <option value="+421">🇸🇰 +421</option>
                                                    <option value="+36">🇭🇺 +36</option>
                                                    <option value="+40">🇷🇴 +40</option>
                                                    <option value="+359">🇧🇬 +359</option>
                                                    <option value="+30">🇬🇷 +30</option>
                                                    <option value="+351">🇵🇹 +351</option>
                                                    <option value="+354">🇮🇸 +354</option>
                                                    <option value="+356">🇲🇹 +356</option>
                                                    <option value="+357">🇨🇾 +357</option>
                                                    <option value="+372">🇪🇪 +372</option>
                                                    <option value="+371">🇱🇻 +371</option>
                                                    <option value="+370">🇱🇹 +370</option>
                                                    <option value="+386">🇸🇮 +386</option>
                                                    <option value="+385">🇭🇷 +385</option>
                                                    <option value="+381">🇷🇸 +381</option>
                                                    <option value="+382">🇲🇪 +382</option>
                                                    <option value="+387">🇧🇦 +387</option>
                                                    <option value="+389">🇲🇰 +389</option>
                                                    <option value="+355">🇦🇱 +355</option>
                                                    <option value="+373">🇲🇩 +373</option>
                                                    <option value="+380">🇺🇦 +380</option>
                                                    <option value="+375">🇧🇾 +375</option>
                                                    <option value="+7">🇷🇺 +7</option>

                                                    <option value="+86">🇨🇳 +86</option>
                                                    <option value="+81">🇯🇵 +81</option>
                                                    <option value="+82">🇰🇷 +82</option>
                                                    <option value="+852">🇭🇰 +852</option>
                                                    <option value="+853">🇲🇴 +853</option>
                                                    <option value="+886">🇹🇼 +886</option>
                                                    <option value="+65">🇸🇬 +65</option>
                                                    <option value="+60">🇲🇾 +60</option>
                                                    <option value="+66">🇹🇭 +66</option>
                                                    <option value="+84">🇻🇳 +84</option>
                                                    <option value="+62">🇮🇩 +62</option>
                                                    <option value="+673">🇧🇳 +673</option>
                                                    <option value="+856">🇱🇦 +856</option>
                                                    <option value="+855">🇰🇭 +855</option>
                                                    <option value="+95">🇲🇲 +95</option>
                                                    <option value="+91">🇮🇳 +91</option>
                                                    <option value="+92">🇵🇰 +92</option>
                                                    <option value="+880">🇧🇩 +880</option>
                                                    <option value="+94">🇱🇰 +94</option>
                                                    <option value="+977">🇳🇵 +977</option>
                                                    <option value="+975">🇧🇹 +975</option>
                                                    <option value="+960">🇲🇻 +960</option>
                                                    <option value="+93">🇦🇫 +93</option>
                                                    <option value="+98">🇮🇷 +98</option>
                                                    <option value="+964">🇮🇶 +964</option>
                                                    <option value="+962">🇯🇴 +962</option>
                                                    <option value="+966">🇸🇦 +966</option>
                                                    <option value="+971">🇦🇪 +971</option>
                                                    <option value="+968">🇴🇲 +968</option>
                                                    <option value="+974">🇶🇦 +974</option>
                                                    <option value="+973">🇧🇭 +973</option>
                                                    <option value="+965">🇰🇼 +965</option>
                                                    <option value="+90">🇹🇷 +90</option>
                                                    <option value="+972">🇮🇱 +972</option>

                                                    <option value="+20">🇪🇬 +20</option>
                                                    <option value="+27">🇿🇦 +27</option>
                                                    <option value="+234">🇳🇬 +234</option>
                                                    <option value="+254">🇰🇪 +254</option>
                                                    <option value="+255">🇹🇿 +255</option>
                                                    <option value="+256">🇺🇬 +256</option>
                                                    <option value="+251">🇪🇹 +251</option>
                                                    <option value="+212">🇲🇦 +212</option>
                                                    <option value="+213">🇩🇿 +213</option>
                                                    <option value="+216">🇹🇳 +216</option>
                                                    <option value="+218">🇱🇾 +218</option>
                                                    <option value="+233">🇬🇭 +233</option>
                                                    <option value="+221">🇸🇳 +221</option>
                                                    <option value="+225">🇨🇮 +225</option>
                                                    <option value="+237">🇨🇲 +237</option>
                                                    <option value="+243">🇨🇩 +243</option>
                                                    <option value="+242">🇨🇬 +242</option>
                                                    <option value="+240">🇬🇶 +240</option>
                                                    <option value="+241">🇬🇦 +241</option>
                                                    <option value="+250">🇷🇼 +250</option>
                                                    <option value="+257">🇧🇮 +257</option>
                                                    <option value="+260">🇿🇲 +260</option>
                                                    <option value="+263">🇿🇼 +263</option>
                                                    <option value="+258">🇲🇿 +258</option>
                                                    <option value="+264">🇳🇦 +264</option>
                                                    <option value="+267">🇧🇼 +267</option>
                                                    <option value="+266">🇱🇸 +266</option>
                                                    <option value="+268">🇸🇿 +268</option>
                                                    <option value="+261">🇲🇬 +261</option>
                                                    <option value="+230">🇲🇺 +230</option>
                                                    <option value="+248">🇸🇨 +248</option>

                                                    <option value="+61">🇦🇺 +61</option>
                                                    <option value="+64">🇳🇿 +64</option>
                                                    <option value="+675">🇵🇬 +675</option>
                                                    <option value="+679">🇫🇯 +679</option>
                                                    <option value="+685">🇼🇸 +685</option>
                                                    <option value="+676">🇹🇴 +676</option>
                                                    <option value="+678">🇻🇺 +678</option>
                                                    <option value="+691">🇫🇲 +691</option>
                                                    <option value="+692">🇲🇭 +692</option>
                                                    <option value="+680">🇵🇼 +680</option>
                                                    <option value="+688">🇹🇻 +688</option>
                                                    <option value="+682">🇨🇰 +682</option>
                                                    <option value="+683">🇳🇺 +683</option>

                                                </select>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="123 456 7890"
                                                    pattern="[0-9\\s\\-\\(\\)]{7,15}"
                                                    title="Please enter a valid phone number"
                                                />
                                            </div>
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