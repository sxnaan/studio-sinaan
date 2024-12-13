import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import works from './lib/works.json';

import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import Contact from './pages/contact';
import IndividualWork from './pages/individualWork';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works/>} />
                <Route path="/contact" element={<Contact/>} />
                {
                    works.map(work => (
                        <Route path={`/works/${work.id}`} element={<IndividualWork id={work.id}/>} />
                    ))
                }
            </Routes>
        </Router>
    );
};

export default App;