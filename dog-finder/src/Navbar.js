import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar({ dogs }) {


    return (
        <div id="navbar">
            <ul>
                <li key="all"><Link to='/dogs'>Home</Link></li>
                {dogs.map(d => (
                    <li key={d.name}><Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link></li>
                ))}
            </ul>
        </div >
    );
}

export default Navbar;