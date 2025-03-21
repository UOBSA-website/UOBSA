import React from "react";
import SponsorForm from "../components/SponsorForm";
import SponsorCarousel from "../components/SponsorCarousel";
import FAQAccordion from "../components/FAQAccordion";
import ImpactGrid from "../components/ImpactGrid";
import "../styles/Sponsor.css";

const Sponsor = () => {
    return (
        <div>
            
            {/* Hero Section */}
            <section className="sponsor-hero">
                <h1>Support UOBSA – Empower the Next Generation</h1>
                <p>Your sponsorship helps fund cultural initiatives, student scholarships, and community-building events at the University of Ottawa.</p>
                <a href="#sponsor-form" className="sponsor-btn">Become a Sponsor</a>
            </section>

            {/* Why Sponsor Us Section */}
            <section className="why-sponsor">
                <h2>Why Sponsor Us?</h2>
                <div className="benefits-grid">
                    <div className="benefit">
                        <i className="fas fa-bullhorn"></i>
                        <h3>Visibility</h3>
                        <p>Brand exposure at major student events and on social media.</p>
                    </div>
                    <div className="benefit">
                        <i className="fas fa-handshake"></i>
                        <h3>Community Impact</h3>
                        <p>Support student-led initiatives that foster cultural connection.</p>
                    </div>
                    <div className="benefit">
                        <i className="fas fa-star"></i>
                        <h3>Exclusive Recognition</h3>
                        <p>Featured on our website, newsletters, and events.</p>
                    </div>
                </div>
            </section>

            {/* Past Sponsors Logo Carousel */}
            <SponsorCarousel />

            {/* Sponsorship Impact - Photo Grid */}
            <ImpactGrid />

            {/* Sponsor Form */}
            <section id="sponsor-form">
                <SponsorForm />
            </section>

            {/* FAQ Section */}
            <FAQAccordion />
        </div>
    );
};

export default Sponsor;
