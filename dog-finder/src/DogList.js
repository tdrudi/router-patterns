import React from "react";
import { Link } from "react-router-dom";
import './DogList.css'

function DogList({ dogs }) {
    return (
        <div id="dog-list">
            <h2>Click on a dog for more info!</h2>
            <div id="dogs-pic">
                {dogs.map(dog => (
                    <div key={dog.name}>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                            <img src={`/${dog.src}.jpg`} alt={dog.name} />
                            {dog.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;
