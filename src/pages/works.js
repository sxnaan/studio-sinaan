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
                        <Link to={`/works/${work.id}`}><img src={work.src} alt={work.title}></img></Link>
                    ))
                }
            </div>
            <div className='portfolio-grid-1-col'>
                {
                    pane2.map(work => (
                        <Link to={`/works/${work.id}`}><img src={work.src} alt={work.title}></img></Link>
                    ))
                }
            </div>
            <div class="portfolio-grid-2-col">
                {
                    pane3.map(work => (
                        <Link to={`/works/${work.id}`}><img src={work.src} alt={work.title}></img></Link>
                    ))
                }
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Works;