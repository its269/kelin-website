"use client";
import Image from "next/image";
import Link from "next/link";
import "./news-events.css";

export default function NewsEventsSection() {
    const newsEvents = [
        {
            id: 1,
            title: "New DTF Printer Launch Event",
            date: "January 15, 2026",
            category: "Product Launch",
            image: "/events1.png",
            description: "Join us for the exclusive launch of our latest DTF printer technology featuring enhanced precision and efficiency."
        },
        {
            id: 2,
            title: "Printing Industry Expo 2026",
            date: "February 20, 2026",
            category: "Trade Show",
            image: "/events1.png",
            description: "Visit our booth at the largest printing industry exhibition in the Philippines. Discover innovative solutions and networking opportunities."
        },
        {
            id: 3,
            title: "Advanced Lamination Workshop",
            date: "March 10, 2026",
            category: "Training",
            image: "/events1.png",
            description: "Learn advanced lamination techniques from industry experts. Hands-on training with our latest equipment and materials."
        }
    ];

    return (
        <section className="news-events-section">
            <div className="news-events-container">
                <div className="news-events-header">
                    <h2 className="news-events-title">News & Events</h2>
                    <p className="news-events-subtitle">Stay updated with our latest announcements and upcoming events</p>
                </div>

                <div className="news-events-grid">
                    {newsEvents.map((event) => (
                        <div key={event.id} className="news-event-card">
                            <div className="event-image-container">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={300}
                                    height={200}
                                    className="event-image"
                                />
                                <div className="event-category">{event.category}</div>
                            </div>
                            <div className="event-content">
                                <div className="event-date">{event.date}</div>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.description}</p>
                                <Link href={`/events/${event.id}`} className="event-link">
                                    Read More
                                    <svg className="event-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7H17V17" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-all-container">
                    <Link href="/events" className="view-all-button">
                        <span>View All News & Events</span>
                        <div className="view-all-arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12H19" />
                                <path d="M12 5L19 12L12 19" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}