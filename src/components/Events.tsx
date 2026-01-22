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
                        <a href="#contact-section" className="cta-button primary" onClick={(e) => scrollTo(e, "contact-section")}>RSVP Now</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img
                        src="https://github.com/NNIDC/object-store/blob/6a59bada982a945c005ca18e5e5ba37db04fef80/assets/flyer2.png?raw=true"
                        alt="Event Preview"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    )
}

export default Events;