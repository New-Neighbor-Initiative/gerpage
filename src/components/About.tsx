import "./About.css";

import { useEffect, useState } from "react";
import { fetch as apiFetch } from "../api/api";


function About() {
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

        </div>

      </div>
    </section>
  );
}

export default About;