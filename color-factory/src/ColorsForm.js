import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ColorForm.css';

function ColorsForm({ addColor }) {
    const [colorName, setColorName] = useState('');
    const [hue, setHue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({
            name: colorName,
            hue: hue
        });

        navigate('/colors');
    }


    return (
        <div id="colors-form">
            <form onSubmit={handleSubmit}>
                <h1>Add a New Color</h1>
                <label htmlFor="color-name">Color Name:</label>
                <input id="color-name"
                    type="text"
                    value={colorName}
                    onChange={(e) => setColorName(e.target.value)} />
                <label htmlFor="color-hue">Color:</label>
                <input id="color-hue"
                    type="color"
                    value={hue}
                    onChange={(e) => setHue(e.target.value)} />
                <button type="submit">Add color</button>
                <p><Link to='/colors'>Cancel</Link></p>
            </form>
        </div >
    )
}
export default ColorsForm;