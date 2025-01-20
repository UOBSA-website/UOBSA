// src/components/Footer.jsx
import React from 'react';
import '../styles/main.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Social Media Icons Aligned to the Left */}
            <ul className="footer-links">
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
                            alt="Facebook" 
                            className="social-icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/733/733558.png" 
                            alt="Instagram" 
                            className="social-icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="mailto:uobsa@example.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
                            alt="Email" 
                            className="social-icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" 
                            alt="Discord" 
                            className="social-icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/3046/3046122.png" 
                            alt="TikTok" 
                            className="social-icon"
                        />
                    </a>
                </li>
            </ul>
            
            {/* Footer Text on the Right Side */}
            <p className="footer-text">© 2025 University of Ottawa Bangladeshi Student Association</p>
        </footer>
    );
};

export default Footer;
