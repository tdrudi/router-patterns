import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import './DogDetails.css'


function DogDetails({ dogs }) {
    const { name } = useParams();
    const dogInfo = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

    if (!dogInfo)
        return <Navigate to="/dogs" />

    return (
        <div id="dog-container">
            <div id="dog-pic">
                <img src={`/${dogInfo.src}.jpg`} alt={dogInfo.name} />
            </div>
            <div id="dog-details">


                <h2>My name is {dogInfo.name}</h2>
                <h3>I am {dogInfo.age} years old!</h3>
                <ul>
                    {dogInfo.facts.map((f, idx) => (
                        <li key={idx}>{f}</li>
                    ))}
                </ul>
                <Link to="/dogs">Home</Link>
            </div>
        </div>
    );
}

export default DogDetails;