import "./Events.css"
import { useEffect, useState } from "react";
import { fetch as apiFetch } from "../api/api";

function Events(){
    const [events, setEvents] = useState<any>(null);
    useEffect(() => {
        apiFetch("/data/event_detials.json")
          .then(res => res.json())
          .then(data => setEvents(data))
          .catch(() => console.error("Failed to load about data"));
      }, []);

    if (!events) return <p>Loading...</p>;
    return(
        <div id="event-section">
            <h2>{events.title}</h2>
        </div>

    )
}

export default Events;