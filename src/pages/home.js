import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/mobileMenu';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
        <div className="parallax">
            <div className="text-overlay">
                <div className="name">
                    <h1 className="firstname">SiNAAN</h1>
                    <h1 className="lastname">ABDURREHMAN YOUNUS</h1>
                </div>
                
                <div className="details">
                    {isMobile ? (
                        <MobileMenu color="white"/>
                    ) : (
                        <>
                        <h4><Link to="/about">about</Link></h4>
                        <h4><Link to="/works">works</Link></h4>
                        <h4><Link to="/contact">contact</Link></h4>
                        </>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
