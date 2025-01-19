import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'
import { Link } from 'react-router-dom'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import works from '../lib/works.json';


function getPrev(work){
    // only called if prev exists
    if (work.display.position === 1){
        // if we're the first in the pane, we need to get the last in the previous pane
        return works.filter(w => w.display.pane === (work.display.pane - 1)).sort((a, b) => a.display.position - b.display.position).pop();
    } else {
        // otherwise, just get the previous in the same pane
        return works.filter(w => w.display.pane === work.display.pane && w.display.position === (work.display.position - 1))[0];
    }   
}

function getNext(work) {
    // only called if next exists
    if (work.display.position === works.filter(w => w.display.pane === work.display.pane).length){        
        // if we're the last in the pane, we need to get the first in the next pane
        return works.filter(w => w.display.pane === (work.display.pane + 1)).sort((a, b) => a.display.position - b.display.position)[0];
    } else {
        // otherwise, just get the next in the same pane
        return works.filter(w => w.display.pane === work.display.pane && w.display.position === (work.display.position + 1))[0];
    }
}

function getLink(work){
    return `/works/${work.id}`
}

const IndividualWork = ({work}) => {    
    return (
        <>
        <ScrollToTop />
        <Header />

        <div className='breadcrumbs'>
            <Link to='/works'><p className='breadcrumb'>Works</p></Link>
            <p>&nbsp;/&nbsp;</p>
            <p>{work.year}</p>
            <p>&nbsp;/&nbsp;</p>
            <p>{work.season}</p>
        </div>

        <div className='page-container'>
            <hr className='breadcrumbs-divider'></hr>
            
            <div className = 'work-container'>
                <div className = 'work-display'>
                    <img src={work.src} alt={work.title}></img>
                </div>

                <div className = 'work-info'>
                    <h1 className='work-title'>{work.title}</h1>
                    <div className='work-details'>
                        <h3><b>{work.media.length === 1 ? (
                            <>{work.media[0]}</>
                        ) : (
                            <>{work.media.join(', ')}</>
                        )} on {work.surface}</b></h3>
                        <h3>{work.season} Collection, {work.year}</h3>
                        <h3>{work.x}x{work.y}</h3>
                    </div>
                </div>
            </div>
{/*             
            <div className='work-nav'>
                        {(pane !== 1 || position !== 1) ? (
                            <Link to={getLink(getPrev(work))}><ChevronLeftIcon fontSize='large'/> <h3>Prev</h3></Link>
                        ): <h3></h3>}
                        {(pane !== 3 || position !== 2) ? (
                            <Link to={getLink(getNext(work))}><h3>Next</h3><ChevronRightIcon fontSize='large'/></Link>
                        ): <></>}
            </div> */}
            {/*
            ok so we need to use the MUI pagination here eventually
            */}

        </div>
        <Footer />
        </>
    );
};

export default IndividualWork;