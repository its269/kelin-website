import Header from '../components/Header';
import './news.css';

export default function NewsAndEvents() {
  return (
    <div>
      <Header />
      <main className="news-container">
        <h1 className="news-title">News and Events</h1>
        <p className="news-description">Stay updated with the latest news, product launches, and industry events from Kelin Graphics System.</p>

        <div className="news-section">
          <h3>Latest News</h3>

          <div className="news-card">
            <h4>New Product Launch - Advanced UV Printers</h4>
            <p className="news-date">December 1, 2025</p>
            <p>We're excited to announce the launch of our new line of advanced UV printers, offering enhanced productivity and print quality.</p>
          </div>

          <div className="news-card">
            <h4>Trade Show Participation - SGIA Expo 2025</h4>
            <p className="news-date">November 15, 2025</p>
            <p>Visit us at booth #1234 during SGIA Expo to see our latest products and technologies in action.</p>
          </div>
        </div>

        <div className="news-section">
          <h3>Upcoming Events</h3>

          <div className="news-card">
            <h4>Product Training Webinar</h4>
            <p className="news-date">December 20, 2025</p>
            <p>Join our experts for a comprehensive training session on our latest printing technologies.</p>
          </div>
        </div>

        <div className="demo-notice">
          <p>This is a demonstration page for news and events. Subscribe to our newsletter for the latest updates.</p>
        </div>
      </main>
    </div>
  );
}