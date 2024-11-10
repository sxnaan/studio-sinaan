import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="parallax">
            <div className="text-overlay">
                <div className="name">
                    <h1 className="firstname">SINAAN</h1>
                    <h1 className="lastname">ABDURREHMAN YOUNUS</h1>
                </div>
                <div className="details">
                    <h4><Link to="/about">about</Link></h4>
                    <h4><Link to="/portfolio">portfolio</Link></h4>
                    <h4><Link to="/commissions">commissions</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default Home;
