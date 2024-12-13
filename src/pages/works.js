import React from 'react';
import Menu from '../components/menu'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'

import { Link } from 'react-router-dom';

const Works = () => {
    const STILL_LIFE_1 = '/works/2021/fall/IMG_1325.png';
    const DRAGONFRUIT_1 = '/works/2022/spring/IMG_2421.png';
    const DRAGONFRUIT_2 = '/works/2022/spring/IMG_2422.png';
    const DRAGONFRUIT_3 = '/works/2022/spring/IMG_2423.png';
    const ACRYLIC_COLLAGE = '/works/2022/spring/IMG_2430.png';
    const CALIFORNIA_AVE = '/works/2022/summer/IMG_2655.png';
    const MOTHER_AND_SON = '/works/2022/fall/IMG_2820.png';
    const SELF_PORTRAIT_1 = '/works/2022/fall/IMG_2830.png';
    const SELF_PORTRAIT_2 = '/works/2022/fall/IMG_2831.png';
    const SUPERIMPOSITION = '/works/2022/fall/IMG_2840.png';
    const LINDA_1 = '/works/2023/spring/IMG_3678.png';
    const LINDA_2 = '/works/2023/spring/IMG_3679.png';
    const TEARS = '/works/2023/summer/IMG_3721.png';
    const DREAMS = '/works/2024/spring/IMG_4124.jpeg';
        
    return (
        <>
        <ScrollToTop/>
        <Menu />
        <div className='page-container'>
            <h1 className="page-title">Works</h1>
            <div class="portfolio-grid-2-col">
                <img src={MOTHER_AND_SON} alt="Art Piece 1"></img>
                <Link to="/works/001"><img src={STILL_LIFE_1} alt="Art Piece 1"></img></Link>
                <img src={LINDA_1} alt="Art Piece 1"></img>
                <img src={LINDA_2} alt="Art Piece 1"></img>
                <img src={SUPERIMPOSITION} alt="Art Piece 1"></img>
                <img src={TEARS} alt="Art Piece 1"></img>
                <Link to="/works/002"><img src={DRAGONFRUIT_1} alt="Art Piece 1"></img></Link>
                <Link to="/works/003"><img src={DRAGONFRUIT_2} alt="Art Piece 1"></img></Link>
                <Link to="/works/004"><img src={DRAGONFRUIT_3} alt="Art Piece 1"></img></Link>
                <img src={CALIFORNIA_AVE} alt="Art Piece 1"></img>
            </div>
            <div className='portfolio-grid-1-col'>
                <img src={DREAMS} alt="Art Piece 1"></img>
            </div>
            <div class="portfolio-grid-2-col">
                <img src={SELF_PORTRAIT_1} alt="Art Piece 1"></img>
                <img src={SELF_PORTRAIT_2} alt="Art Piece 1"></img>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Works;