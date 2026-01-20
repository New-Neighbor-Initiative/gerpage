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
        <div className="contact-section" id="contact-section">
            <div id="top-section">
                <div className="contact-title">
                    <h2>CONTACT US</h2>
                    <hr />
                </div>
                <input type="text" name="name" placeholder="Your Name" className = "contact-inputs" required/>
                <input type="email" name="email" placeholder="Your Email" className = "contact-inputs" required/>
                <textarea name="" placeholder = "Your Message" className = "contact-inputs" id = "message-area" required></textarea>
                <button type = "submit" className = "contact-button">SEND</button>
            </div>
            <div className="footnote-section">
                <img src="https://drive.google.com/drive/u/0/folders/1zXwKehlfIlkOZCNajgZ4PKXNq6U1mTJD" alt="logo" />
            </div>
        </div>
        

    )

}

export default Contact;