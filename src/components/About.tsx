import "./About.css";
import { useEffect, useState } from "react";
import { fetch as apiFetch } from "../api/api";


function About(){
    const [about, setAbout] = useState<any>(null);
    useEffect(() => {
        apiFetch("/data/about_us.json")
          .then(res => res.json())
          .then(data => setAbout(data))
          .catch(() => console.error("Failed to load about data"));
      }, []);

    if (!about) return <p>Loading...</p>;

    return (
      <section id="about-section">
        <div className="about-container">
          <h1 className="about-title">{about.title}</h1>
            <section>
              <div className="mission-grid">
                <div className="mission-photoWrap">
                  <img
                      className="mission-photo"
                      src="/img/logo.png"
                      alt="Team photo"/>
                    </div>
                    <div className="mission-content">
                      <h2 className="mission-title">Our Mission</h2>
                      <div className="mission-accent" />
                      <p className="mission-text">{about.content.text}</p>
                    </div>
                </div>
                </section>
          </div>
        </section>
      );
    }

export default About;