import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import './ColorDetail.css'
function ColorDetail({ colors }) {
    const { color } = useParams();
    const colorDetail = colors.find(c => c.name === color);

    if (!colorDetail) {
        return <Navigate to='/colors' />;
    }

    return (
        <div id="color-detail"
            style={{ backgroundColor: colorDetail.hue }} >
            <h1>Color: {colorDetail.name.toUpperCase()}</h1>
            <p>This is {colorDetail.name.toLowerCase()}... what do you think?</p>
            <Link to='/colors'>Back</Link>
        </div >
    )
}

export default ColorDetail;