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
    
            <div className="mission-block">
              <div className="mission-accent" />
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-text">{about.content.text}</p>

              <div className="mission-accent" />
              <h2 className="mission-title">Our Story</h2>
            </div>

            <section className="story-section">
                <div className="story-grid">
                    <div className="story-text">

                    <h2 className="story-title">New Neighbor Initiative</h2>
                    <p>
                        NNI Engineering DC is dedicated to fostering innovation and excellence in 
                        engineering. Our team is composed of passionate professionals committed to 
                        delivering top-notch solutions and services to our clients. We believe in 
                        the power of collaboration, integrity, and continuous learning to drive success 
                        and make a positive impact in the industry.
                    </p>

                    <p>
                        NNI Engineering DC is dedicated to fostering innovation and excellence in 
                        engineering. Our team is composed of passionate professionals committed to 
                        delivering top-notch solutions and services to our clients. We believe in 
                        the power of collaboration, integrity, and continuous learning to drive success 
                        and make a positive impact in the industry.
                    </p>

                    </div>

                    <div className="story-photoWrap">
                    <img
                        className="story-photo"
                        src="/img/logo.png"
                        alt="Team photo"
                    />
                    </div>
                </div>
                </section>

          </div>
        </section>
      );
    }

export default About;