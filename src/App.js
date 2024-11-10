import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Commissions from './pages/commissions';
import Home from './pages/home';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/commissions" element={<Commissions/>} />
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    );
};

export default App;