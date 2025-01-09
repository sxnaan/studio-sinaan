import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';
import works from './lib/works.json';
import theme from './lib/theme'; // Import the custom theme

import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import Contact from './pages/contact';
import IndividualWork from './pages/individualWork';

const App = () => {
    return (
        <ThemeProvider theme={theme}> {/* Wrap the application with ThemeProvider */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/contact" element={<Contact />} />
                    {
                        works.map(work => (
                            (work.display.featured) ? (
                                <Route path={`/works/${work.id}`} element={<IndividualWork work={work} />} />
                            ) : (
                                <></>
                            )
                        ))
                    }
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;