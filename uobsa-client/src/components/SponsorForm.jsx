import React, { useState } from 'react';
import '../styles/Home.css';

const SponsorSection = () => {
    const [sponsorSubmitted, setSponsorSubmitted] = useState(false);

    const handleSponsorSubmit = (event) => {
        event.preventDefault();
        setSponsorSubmitted(true);
    };

    return (
        <div className="sponsor-section">
            <h2 className="sponsor-heading">Join Us as a Sponsor</h2>
            <p className="sponsor-text">
                Join us in making a lasting impact. Your sponsorship helps us create meaningful 
                opportunities, events, and support for our community.
            </p>

            {sponsorSubmitted ? (
                <div className="success-message">
                    ✅ <p>Thank you for your support! We will contact you shortly.</p>
                </div>
            ) : (
                <form className="sponsor-form" onSubmit={handleSponsorSubmit}>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="company">Company Name:</label>
                    <input type="text" id="company" name="company" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit" className="submit-btn">Join as a Sponsor</button>
                </form>
            )}
        </div>
    );
};

export default SponsorSection;