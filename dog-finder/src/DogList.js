import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <div id="dog-list">
            <h2>Click on a dog for more info!</h2>
            <div id="dogs-pic">
                {dogs.map(dog => (
                    <div id={dog.name}>
                        <img src={`/${dog.src}.jpg`} alt={dog.name} />
                        <Link to={`/dogs/${dog.name.toLoweCase()}`}>{dog.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;
