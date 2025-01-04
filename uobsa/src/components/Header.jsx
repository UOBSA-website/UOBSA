import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">UOBSA</Link>
            <ul className="nav-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
            <button className="btn-member">Become a Member</button>
        </nav>
    );
};

export default Header;