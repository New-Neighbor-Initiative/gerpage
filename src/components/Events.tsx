import "./Events.css"
import { useEffect, useState } from "react";
import { fetch as apiFetch } from "../api/api";

function Events(){
    const [events, setEvents] = useState<any>(null);
    useEffect(() => {
        apiFetch("/data/event_details.json")
          .then(res => res.json())
          .then(data => setEvents(data))
          .catch(() => console.error("Failed to load about data"));
      }, []);

    if (!events) return <p>Loading...</p>;

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <section id="event-section">
            <div className="event-grid">
                <p className="events-header">UPCOMING EVENT</p>
                <h1 className="events-title">{events.title}</h1>
                <div className="events-description">
                    <p>{events.description}</p>
                </div>
                <div className="events-photoWrap">
                    <img
                        className="events-photo"
                        src="/img/logo.png"
                        alt="Team photo"
                    />
                </div>
            </div>
            <a href="#contact-section" className="rsvp" 
                onClick={(e) => scrollTo(e, "contact-section")}>RSVP Now</a>
        </section>
    )
}

export default Events;