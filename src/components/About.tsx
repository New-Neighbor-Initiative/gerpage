import { useEffect, useState } from "react";
import { getAllParkNames } from "../api/nps";

function About(){
    const [parkNames, setParkNames] = useState([]);

    useEffect(() => {
        async function loadNames() {
        const names = await getAllParkNames();
        setParkNames(names);
        }
        loadNames();
    }, []);

    return (
        <div className="About" id="about-section">
            <h2 className="title">About</h2>
            <div className="goal">
                <h3 className="head">Our Goal</h3>
                <p>We are dedicated to preserving unimpaired the natural and cultural resources and values of the national park system for the enjoyment, education, and inspiration of this and future generations</p>
            </div>
            <div className="everypark">
                <h3 className="head">All Parks</h3>
                <ul className="parks-grid">
                    {parkNames.map((name, index) => (
                        <li key={index} className="park-item">{name}</li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default About;