import "./Team.css"
import { useEffect, useState } from "react";
import { fetch as apiFetch } from "../api/api";

function Team(){
    const [team, setTeam] = useState<any>(null);
    useEffect(() => {
        apiFetch("/data/team.json")
          .then(res => res.json())
          .then(data => setTeam(data))
          .catch(() => console.error("Failed to load about data"));
      }, []);

    if (!team) return <p>Loading...</p>;
    return(
        <div id="team-section">
            <h1>{team.title}</h1>
            {Object.entries(team.content).map(([department, people]: any) => (
                <div key={department} className="dept">
                <h2 className = "dept-title">
                    {department.replace("_", " ")}
                </h2>

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

    )
}

export default Team;