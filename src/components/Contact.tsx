import "./Contact.css"
import { useEffect, useState } from "react";
import { fetch as apiFetch } from "../api/api";
import cornerDetail from "../assets/top_left_corner_detail.svg";

function Contact() {
    const [contact, setContact] = useState<any>(null);
    useEffect(() => {
        apiFetch("/data/contact.json")
            .then(res => res.json())
            .then(data => setContact(data))
            .catch(() => console.error("Failed to load about data"));
    }, []);

    if (!contact) return <p>Loading...</p>;
    return (
        <div className="contact-section" id="contact-section">
            <div id="top-section">
                <div className="contact-title">
                    <h2>CONTACT US</h2>
                    <hr />
                </div>

                <div className="contact-card">
                    <img src={cornerDetail} className="corner-detail top-left" alt="" />
                    <img src={cornerDetail} className="corner-detail top-right" alt="" />
                    <img src={cornerDetail} className="corner-detail bottom-right" alt="" />
                    <img src={cornerDetail} className="corner-detail bottom-left" alt="" />

                    <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
                    <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required />
                    <textarea name="" placeholder="Your Message" className="contact-inputs" id="message-area" required></textarea>
                    <button type="submit" className="contact-button">SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;