import React from 'react';
import "../styles/About.css";
import teamPic from "../assets/team2.JPG";

const About = () => {
    return (
        <div className="about-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to UOBSA</h1>
          <p className="welcome-text">
            A vibrant community celebrating Bengali culture, fostering friendships, and supporting students at UOttawa.
          </p>
        </div>
      </section>

      {/* Full Team Image Below */}
      <section className="team-image-section">
        <img src={teamPic} alt="UOBSA Team" className="team-image" />
      </section>
    
      <div className="mission-join-container">
        {/* Our Mission */}
        <section className="our-mission-section">
          <h2>Our Mission</h2>
          <ul>
            <li>✅ To create a welcoming space for Bengali students and those interested in Bengali culture.</li>
            <li>✅ To organize cultural, social, and academic events that bring our community together.</li>
            <li>✅ To provide support for students navigating university life in a new country.</li>
          </ul>
        </section>

        {/* Why Join Us */}
        <section className="why-join-section">
          <h2>Why Join Us?</h2>
          <div className="why-join-grid">
            <div className="join-item">🎉 <strong>Cultural Events</strong> – Pohela Boishakh, Durga Puja, Ramadan celebrations, and more!</div>
            <div className="join-item">🤝 <strong>Networking Opportunities</strong> – Connect with Bengali alumni and professionals.</div>
            <div className="join-item">🎓 <strong>Academic & Career Support</strong> – Study groups, career advice, and mentorship.</div>
            <div className="join-item">🏡 <strong>A Strong Community</strong> – Make lifelong friends and celebrate our shared heritage.</div>
          </div>
        </section>
      </div>
    
      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join Us Today!</h2>
        <p>Interested in becoming part of the UOBSA family? Join us today and stay updated with our upcoming events!</p>
        <div className="cta-buttons">
          <a href="https://docs.google.com/forms/d/1nFGpehGGdNqvCBO3jjcLsKQVQpIbQE_GLVO3kNUlVTo" className="cta-button join">Become a Member</a>
        </div>
      </section>
        </div>
      );
};

export default About;
