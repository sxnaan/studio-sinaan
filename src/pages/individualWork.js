import React from 'react';
import Menu from '../components/menu'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'

import works from '../lib/works.json'

const IndividualWork = ({id}) => {
    // use the id as an index
    // convert the id to an int and then subtract one 
    const idx = Number(id) - 1;
    const work = works[idx];
    
    return (
        <>
        <ScrollToTop/>
        <Menu />
        <div className='page-container'>
            <div class="portfolio-grid-1-col">
                <img src={work.src} alt={work.title}></img>
            </div>

            <h1 className='piece-title'>{work.title}</h1>
            <h3>{work.media[0]} on {work.surface}</h3>
            <h3>{work.x}x{work.y}</h3>
        </div>
        <Footer />
        </>
    );
};

export default IndividualWork;