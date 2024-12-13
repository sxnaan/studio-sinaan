import React from 'react';
import { TextField } from '@mui/material';
import { Form } from 'react-router-dom';

import Menu from '../components/menu'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'

const Contact = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.toLocaleString('en-US', { month: 'long' });
    const day = today.getDate();

    console.log(`${month} ${day}, ${year}`);
    
    const commisionsOpen = true;
    const open = <span style={{"background-color":"#40826D", "color":"white", "font-weight":"bold"}}>&nbsp;OPEN&nbsp;</span>
    return (
        <>
            <ScrollToTop/>
            <Menu />
            <div className='page-container'>
                <h1 className='page-title'>Contact</h1>
                <p>As of {month} {day}, {year} commisions are {commisionsOpen ? open : "closed"}</p>
                <p>All commision requests will be addressed within 1-3 days via email. The minimum size for a commission is 16x20" but special requests are always welcome. 
                Turnaround time varies on size and scope, but usually hovers around 2 months (including domestic shipping). Rushed orders can be placed and completed sooner for an additional fee.</p>
                
                <p>Commissions are private and will not be displayed under the "Works" section of this site, 
                unless permission is explicitly granted by the client.</p>            
                <br></br>
                <p>The form below can be used to submit commision requests as well as general inquiries.</p> 
                <em>Reference images for commissions can be sent in the email thread triggered by the submission of this form.</em>

                <br></br>
                <br></br>
                <TextField id="name" label="Name" variant="outlined" />                
            </div>
            <Footer />
        </>
    );
};

export default Contact;