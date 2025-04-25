'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from '@/components/mobileMenu';

import Image from 'next/image';
import logoSrc from '../components/assets/sinaan-outline.svg';

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
            <div className='massive-img'>
                <Image
                    src={logoSrc}
                    alt="Logo"
                    className="logo"
                />
            </div>

            <div className="text-overlay">
                <div className='name-container'>
                    <div className="name">
                        <h1 className="firstname">SiNAAN</h1>
                        <h1 className="lastname">ABDURREHMAN YOUNUS</h1>
                    </div>
                </div>
                
                <div className="details">
                    {isMobile ? (
                        <MobileMenu color="#fcc474"/>
                    ) : (
                        <>
                        <h4><Link href="/about">bio</Link></h4>
                        <h4><Link href="/works">works</Link></h4>
                        <h4><Link href="/contact">contact</Link></h4>
                        </>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
