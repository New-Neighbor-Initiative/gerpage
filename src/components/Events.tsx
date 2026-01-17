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

    return(
        <section id="event-section">
            <h1 className="events-title">{events.title}</h1>
            <div className="event-image-wrapper">
                <img
                src="/img/events-placer.webp"
                alt="Upcoming Event"
                className="event-image"
                />
            </div>

            <section id="schedule-section">
                <h2 className="schedule-title">Schedule</h2>
                <div className="schedule-day">
                <h3 className="schedule-date">{events.content.date}</h3>
                <hr className="schedule-divider" />

                {events.content.agenda.map((item: any, index: number) => (
                    <div key={index} className="schedule-row">
                    <div className="schedule-time">{item.time}</div>

                    <div className="schedule-info">
                        <div className="schedule-event">{item.activity}</div>
                        <div className="schedule-location">
                        {events.content.location.venue}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </section>
        </section>

    )
}

export default Events;