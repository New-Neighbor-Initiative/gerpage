import "./Contact.css"
import { useEffect, useState } from "react";
import { fetch as apiFetch } from "../api/api";

function Contact(){
    const [contact, setContact] = useState<any>(null);
    useEffect(() => {
        apiFetch("/data/contact.json")
          .then(res => res.json())
          .then(data => setContact(data))
          .catch(() => console.error("Failed to load about data"));
      }, []);

    if (!contact) return <p>Loading...</p>;
    return(
        <div id="contacts-section">
            <div className="Contact" id="contact-section">
                <h2 className="title">CONTACT US</h2>
            </div>
            <div className="bubble-contacts" id="footer">
                <p><img src="gmail-logo.webp"/> Email: {contact.content.email}</p>
                <p>Instagram: {contact.content.email}</p>
            </div>
        </div>

    )
}

export default Contact;