import {React, useState } from 'react';
import { TextField, Button, Grid, Typography, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'

const Contact = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.toLocaleString('en-US', { month: 'long' });
    const day = today.getDate();

    const navigate = useNavigate();
    const [captchaVerified, setCaptchaVerified] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!captchaVerified) {
            alert('Please verify the CAPTCHA.');
            return;
        }
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert('Form submitted!');
                navigate('/');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
    };

    const commisionsOpen = true;
    const open = <span style={{"background-color":"#40826D", "color":"white", "font-weight":"bold"}}>&nbsp;OPEN&nbsp;</span>
    return (
        <>
            <ScrollToTop/>
            <Header />
            <div className='page-container'>
                <h1 className='page-title'>Contact</h1>
                <em>For general inquiries and other non-commision requests, please reach out via email at <b>hello@studiosinaan.com</b></em>
                <h2>Commissions</h2>
                <p>As of {month} {day}, {year} commisions are {commisionsOpen ? open : "closed"}</p> 
                <p>All commision requests are acknowledged within 1-3 days via email. The minimum size for a commission is 16x20" but special requests are always welcome. There is no maximum size. 
                Turnaround time varies on size and scope, but usually hovers around 2 months (including domestic shipping). Rushed orders can be placed and completed sooner for an additional fee.</p>
                
                <p>Commissions are private and will not be displayed on this site, 
                unless permission is explicitly granted by the client.</p>            
                <em>Reference images can be sent in the email thread triggered by the submission of this form.</em>


{/*                 <h4>Sample Commission Work</h4>
                <div className="commissions-container">
                    <img src="/commissions/IMG_5789.png" height={300}></img>
                    <img src="/commissions/IMG_8525.png" height={300}></img>
                </div> */}

                <br></br>
                <br></br>

                <h4>Commission Request Form</h4>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                variant="outlined"
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="date"
                                name="date"
                                label="Date Needed By"
                                fullWidth
                                variant="outlined"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="size"
                                name="size"
                                label="Preferred Size (e.g., 16x20)"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="details"
                                name="details"
                                label="Details"
                                fullWidth
                                variant="outlined"
                                multiline
                                rows={6}
                            />
                        </Grid>
                        <Grid item xs={12} container spacing={2}>
{/*                             <Grid item xs={12} sm={6}>
                                <ReCAPTCHA
                                    sitekey="6LdIoZ4qAAAAACrVdKc6z1EF6zYpD1md4MRN7roi"
                                    onChange={handleCaptchaChange}
                                />
                            </Grid> */}
                            <Grid item xs={12} sm={6} display="flex" justifyContent="flex-end" alignItems="center">
                                <Button type="submit" variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;