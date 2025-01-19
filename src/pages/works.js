import React from 'react';
import Menu from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'

import { Link } from 'react-router-dom';
import works from '../lib/works.json';

const Works = () => {
    const pane1 = works
        .filter(work => work.display.featured && work.display.pane === 1)
        .sort((a, b) => a.display.position - b.display.position);
        
    const pane2 = works
        .filter(work => work.display.featured && work.display.pane === 2)
        .sort((a, b) => a.display.position - b.display.position);

    const pane3 = works
        .filter(work => work.display.featured && work.display.pane === 3)
        .sort((a, b) => a.display.position - b.display.position);

    return (
        <>
        <ScrollToTop/>
        <Menu />
        <div className='page-container'>
            <h1 className="page-title">Works</h1>
            <div class="portfolio-grid-2-col">
                {
                    pane1.map(work => (
                        <>
                        <Link to={`http://www.studiosinaan.com${work.src}`} target='_blank'><img src={work.src} alt={work.title}></img></Link>
                        <div className='work-details'>
                        <h3><b>{work.media.length === 1 ? (
                            <>{work.media[0]}</>
                        ) : (
                            <>{work.media.join(', ')}</>
                        )} on {work.surface}</b></h3>
                        <h3>{work.season} Collection, {work.year}</h3>
                        <h3>{work.x}x{work.y}</h3>
                        </div>
                        </>
                    ))
                }
            </div>
            <div className='portfolio-grid-1-col'>
                {
                    pane2.map(work => (
                        <Link to={`http://www.studiosinaan.com${work.src}`} target='_blank'><img src={work.src} alt={work.title}></img></Link>
                    ))
                }
            </div>
            <div class="portfolio-grid-2-col">
                {
                    pane3.map(work => (
                        <Link to={`http://www.studiosinaan.com${work.src}`} target='_blank'><img src={work.src} alt={work.title}></img></Link>
                    ))
                }
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Works;