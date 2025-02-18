import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import works from '@/data/works.json';

const Works = () => {
    const pane1 = works
        .filter(work => work.display.featured && work.display.pane === 1)
        .sort((a, b) => a.display.position! - b.display.position!);
        
    const pane2 = works
        .filter(work => work.display.featured && work.display.pane === 2)
        .sort((a, b) => a.display.position! - b.display.position!);

    const pane3 = works
        .filter(work => work.display.featured && work.display.pane === 3)
        .sort((a, b) => a.display.position! - b.display.position!);

    return (
        <>
        <div className='page-container'>
            <h1 className="page-title">Works</h1>
            <div className="portfolio-grid-2-col">
                {
                    pane1.map(work => (
                        <Link key={work.id} href={`/works/${work.id}`}>
                          <Image 
                            src={work.src} 
                            width={work.display.height} 
                            height={work.display.width} 
                            layout="intrinsic"
                            alt={work.title} 
                          />
                        </Link>
                    ))
                }
            </div>
            <div className='portfolio-grid-1-col'>
                {
                    pane2.map(work => (
                        <Link key={work.id} href={`/works/${work.id}`}>
                          <Image 
                            src={work.src} 
                            width={work.display.height} 
                            height={work.display.width} 
                            layout="intrinsic"
                            alt={work.title} 
                          />
                        </Link>
                    ))
                }
            </div>
            <div className="portfolio-grid-2-col">
                {
                    pane3.map(work => (
                        <Link key={work.id} href={`/works/${work.id}`}>                          
                          <Image 
                            src={work.src} 
                            width={work.display.height} 
                            height={work.display.width} 
                            layout="intrinsic"
                            alt={work.title} 
                          />
                        </Link>
                    ))
                }
            </div>
        </div>
        </>
    );
};

export default Works;