import React from 'react';
import '../styles/Home.css';

const HeroSection = () => {
    const handleClick = () => {
        window.location.href = "https://docs.google.com/forms/d/1nFGpehGGdNqvCBO3jjcLsKQVQpIbQE_GLVO3kNUlVTo";
      };
    return (
        <div className="hero-section">
            <div className="text-overlay">
                <h1 className="university-text">University of Ottawa</h1>
                <h2 className="bsa-text">Bangladeshi Student Association</h2>
                <p className="motto">
                    A legacy of unity, culture, and empowerment bringing together Bangladeshi students and all who celebrate our rich heritage at the University of Ottawa.
                </p>
                <button className="btn-member" onClick={handleClick}>Become a Member</button>
            </div>
        </div>
    );
};

export default HeroSection;
