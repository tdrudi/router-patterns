import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'
import ColorsList from './ColorsList';

function Home({ colors }) {
    return (
        <div id="home-container">
            <h1>Welcome to the Color Factory</h1>
            <div id="new-colors">
                <h2><Link to='/colors/new'>ADD A COLOR</Link></h2>
            </div>
            <ColorsList colors={colors} />
        </div>
    );
}

export default Home;
