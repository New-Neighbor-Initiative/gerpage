import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Team.css";
import { useEffect, useState } from "react";
import { fetch as apiFetch } from "../api/api";


function Team() {
  const [team, setTeam] = useState<any>(null);

  useEffect(() => {
    apiFetch("/data/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch(() => console.error("Failed to load team data"));
  }, []);

  if (!team) return <p>Loading...</p>;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // One department per slide
    slidesToScroll: 1,
  };

  return (
    <div id="team-section">
      <h1>{team.title}</h1>

      <section className="container">
        <Slider {...settings}>
          {Object.entries(team.content).map(([department, people]: any) => (
            <div key={department}>
              <div className="dept">
                <h2 className="dept-title">{department.replace("_", " ")}</h2>

                <div className="dept-ppl">
                  {people.map((person: any, idx: number) => (
                    <div key={`${department}-${person.name}-${idx}`} className="bubble-ppl">
                      <div className="img-container">
                        <img src={person.photo} alt={person.name} />
                      </div>

                      <div className="info">
                        <h3>{person.name}</h3>
                        <p className="position">{person.position}</p>

                        {person.bio ? (
                          <p className="bio">{person.bio}</p>
                        ) : (
                          <div className="intern-details">
                            {person.study && (
                              <p className="detail">
                                <span className="icon">🎓</span>
                                {person.study}
                              </p>
                            )}
                            {person.food && (
                              <p className="detail">
                                <span className="icon">🥟</span>
                                {person.food}
                              </p>
                            )}
                            {person.hobby && (
                              <p className="detail">
                                <span className="icon">🎨</span>
                                {person.hobby}
                              </p>
                            )}
                          </div>
                        )}

                        {person.linkedin ? (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-link"
                          >
                            Connect on LinkedIn
                          </a>
                        ) : (
                          <div className="linkedin-placeholder" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Team;
