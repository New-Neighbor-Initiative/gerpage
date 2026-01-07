import "./About.css"
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

    return(
        <div id="about-section">
            <h1>{about.title}</h1>
            <div className="about-content">
                <div className = "bubble-about" id="mission">
                    <h2>Our Mission</h2>
                    <p>{about.content.text}</p>
                </div>
                <div className = "bubble-about" id = "statistics">
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}

export default About;