import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Resources from './pages/Resources';

const App = () => {
    return (
      <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
        <Footer />
      </>
    );
};

export default App;