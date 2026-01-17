
import "./Team.css";
import { useEffect, useRef, useState } from "react";
import { fetch as apiFetch } from "../api/api";

function Team() {
  const [team, setTeam] = useState<any>(null);

  // ✅ ref to the slider div
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    apiFetch("/data/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch(() => console.error("Failed to load about data"));
  }, []);

  const scrollNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({ left: -slider.clientWidth, behavior: "smooth" });
  };

  

  if (!team) return <p>Loading...</p>;

  return (
    <div id="team-section">
      <h1>{team.title}</h1>

      <section className="container">
        <div className="slider-wrapper">
          <button
            className="slide-btn prev"
            aria-label="Previous slide"
            onClick={scrollPrev}
            type="button"
          >
            &#10094;
          </button>

          <div className="slider" ref={sliderRef}>
            <div className="slider-content">
              {Object.entries(team.content).map(([department, people]: any) => (
                <div key={department} className="dept">
                  <h2 className="dept-title">{department.replace("_", " ")}</h2>

                  <div className="dept-ppl">
                    {people.map((person: any) => (
                        <div key={person.name} className="bubble-ppl">
                          <img src={person.photo} alt={person.name} />
                          <h3>{person.position}</h3>
                          <p>{person.name}</p>
                        </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="slide-btn next"
            aria-label="Next slide"
            onClick={scrollNext}
            type="button"
          >
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
}

export default Team;
