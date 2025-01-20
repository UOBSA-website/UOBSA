// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/main.css';
import logo from '../assets/logo2.png';

const Header = () => {
    return (
        <nav className="navbar">
            {/* Logo on the Left */}
            <div className="logo-container">
                <NavLink to="/">
                    <img src={logo} alt="UOBSA Logo" className="logo-img" />
                </NavLink>
            </div>

            {/* Navigation Links with Underline Effect */}
            <ul className="nav-links">
                <li><NavLink exact="true" to="/" className="nav-item" activeclassname="active-link">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-item" activeclassname="active-link">About</NavLink></li>
                <li><NavLink to="/team" className="nav-item" activeclassname="active-link">Team</NavLink></li>
                <li><NavLink to="/events" className="nav-item" activeclassname="active-link">Events</NavLink></li>
                <li><NavLink to="/sponsors" className="nav-item" activeclassname="active-link">Sponsors</NavLink></li>
                <li><NavLink to="/resources" className="nav-item" activeclassname="active-link">Resources</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;
