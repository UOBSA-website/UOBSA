import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="text-overlay">
                    <h1 className="university-text">University of Ottawa</h1>
                    <h2 className="bsa-text">Bangladeshi Student Association</h2>
                    <button
                        className="btn-member"
                        onClick={() => (window.location.href = '/about')}
                        >
                        Become a Member
                    </button>
                </div>
            </div>

            {/* Video Section */}
            <div className="video-section">
                <div className="video-container">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Sponsor Form Section */}
            <div className="sponsor-section">
                <h2 className="sponsor-heading">Become a Sponsor</h2>
                <form className="sponsor-form">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="company">Company Name:</label>
                    <input type="text" id="company" name="company" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
