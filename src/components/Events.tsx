import "./Events.css"
import { useEffect, useState } from "react";
import { fetch as apiFetch } from "../api/api";

function Events() {
    const [events, setEvents] = useState<any>(null);
    useEffect(() => {
        apiFetch("/data/event_details.json")
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(() => console.error("Failed to load about data"));
    }, []);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!events) return <p>Loading...</p>;

    return (
        <section id="home-section">
            <div className="hero-content">
                <div className="hero-text-block">
                    <span className="hero-eyebrow">Upcoming Event</span>
                    <h1 className="hero-title">{events.title}</h1>
                    <p className="hero-description">{events.description}</p>
                    <div className="hero-cta-group">
                        <a href="#schedule-section" className="cta-button primary" onClick={(e) => scrollTo(e, "schedule-section")}>View Schedule</a>
                        <a href="#contact-section" className="cta-button secondary" onClick={(e) => scrollTo(e, "contact-section")}>RSVP Now</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img
                        src="https://github.com/NNIDC/object-store/blob/0367ac37e876f96b365c224168d061c0eba3bc08/assets/flyer.png?raw=true"
                        alt="Event Preview"
                        className="hero-image"
                    />
                </div>
            </div>

            <section id="schedule-section">
                <h2 className="schedule-title">Event Schedule</h2>
                <div className="schedule-card">
                    <div className="schedule-header">
                        <span className="schedule-date">{events.content.date}</span>
                        <span className="schedule-location">{events.content.location.venue}</span>
                    </div>

                    <div className="schedule-timeline">
                        {events.content.agenda.map((item: any, index: number) => (
                            <div key={index} className="schedule-row">
                                <div className="time-col">{item.time}</div>
                                <div className="info-col">
                                    <h4 className="activity-name">{item.activity}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Events;