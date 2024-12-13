import React from 'react';
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../components/drawer';

const Home = () => {
    return (
        <>
        <div className="parallax">
            <div className="text-overlay">
                <div className="name">
                    <h1 className="firstname">SiNAAN</h1>
                    <h1 className="lastname">ABDURREHMAN YOUNUS</h1>
                </div>
                <div className="details">
                    {/* <TemporaryDrawer /> */} 
                    <h4><Link to="/about">about</Link></h4>
                    <h4><Link to="/works">works</Link></h4>
                    <h4><Link to="/contact">contact</Link></h4>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
