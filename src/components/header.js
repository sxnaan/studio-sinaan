import logo_dark from '../assets/sinaan-dark.png'
import logo_light from '../assets/sinaan-light.png'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './mobileMenu';

export default function Header(){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768.1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const logoSize = isMobile ? 40 : 120;
    const logo = logo_dark;
    return (
        <div className='header'>
            <Link to="/"><img src={logo} height={logoSize}></img></Link>
            {isMobile ? (
                <MobileMenu color='black'/>
            ) : (
                <div className="menu-desktop">
                    <Link to="/"><h3>HOME</h3></Link>
                    <Link to="/about"><h3>ABOUT</h3></Link>
                    <Link to="/works"><h3>WORKS</h3></Link>
                    <Link to="/contact"><h3>CONTACT</h3></Link>
                </div>
            )}
        </div>
    )
}