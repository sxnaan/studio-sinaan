import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'

import IMG_7908 from '../assets/IMG_7908.jpg'

const About = () => {
    return (
        <>
            <ScrollToTop/>
            <Header />
            <div className="page-container">                
                <h1 className='page-title'>About</h1>
                <p>SiNAAN ABDURREHMAN YOUNUS is a 23 year old mixed media artist from Baltimore.</p>
                <p>His first experiments in art were encouraged by Sarah Deacon at Perry Hall Middle School. 
                    He later studied fine art at the University of Maryland with Emily Conover, Brandon Donahue, and Cy Keener, amongst others. </p>
                    
                <p>He has worked across a full range of wet and dry media. He has also explored digital fabrication (3D printing/laser cutting) and augmented/virtual reality.</p>                
                
                <p>His work is driven by a single question – can we create the art that we enjoy consuming? <em>To him, it isn't just possible, but necessary for that answer to be yes.</em></p>
                <p>—</p>
                
                <b>Currently based in Chicago, working primarily with oil.</b>
                
                <br></br>
                <br></br>
                <img src={IMG_7908} height={300}></img>

                <br></br>
                <br></br>
            </div>
            <Footer />
        </>
    );
};

export default About;