'use client';

import React, { useState, useEffect } from 'react';
import MobileMenu from './mobileMenu';

import Link from 'next/link';
import Image from 'next/image';

export default function Header(){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768.1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const logoSize = isMobile ? {height: 45, width: 60} : {height:100, width: 133};
    const logoSrc = '/assets/logo-dark.png';
    return (
        <div className='header'>
            <Link href="/"><Image src={logoSrc} height={logoSize.height} width={logoSize.width} alt='logo'/></Link>
            {isMobile ? (
                <MobileMenu color='black'/>
            ) : (
                <div className="menu-desktop">
                    <Link href="/"><h3>HOME</h3></Link>
                    <Link href="/about"><h3>ABOUT</h3></Link>
                    <Link href="/works"><h3>WORKS</h3></Link>
                    <Link href="/contact"><h3>CONTACT</h3></Link>
                </div>
            )}
        </div>
    )
}