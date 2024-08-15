import React from 'react';
import { Link } from 'react-router-dom';


function ColorsList({ colors }) {
    return (
        <div id="colors-container">
            <h2>Please select a color:</h2>
            <ul>
                {colors.map(color => (
                    <li key={color.name}>
                        <Link to={`/colors/${color.name}`}>
                            {color.name.toUpperCase()}
                        </Link></li>
                ))}
            </ul>
        </div>

    )
}
export default ColorsList;