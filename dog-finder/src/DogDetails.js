import React from "react";
import { Link, Navigate } from "react-router-dom";

function DogDetails({ dog }) {
    if (!dog)
        return <Navigate to="/dogs" />

    return (
        <div id="dog-details">
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            <h2>{dog.name}</h2>
            <h3>{dog.age}</h3>
            <ul>
                {dog.facts.map((fact, idx) => {
                    <li key={idx}>{fact}</li>
                })}
            </ul>
            <Link to="/dogs">Home</Link>
        </div>
    )
}

export default DogDetails;