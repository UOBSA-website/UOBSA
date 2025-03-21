import React from "react";
import "../styles/Sponsor.css";
import event1 from "../assets/UOBSA-raffle.png";
import event2 from "../assets/DjArjun.jpg";
import event3 from "../assets/RamadanChaiTalk.JPG";

const ImpactGrid = () => {
    return (
        <section className="impact-grid">
            <h2>How Sponsorship Helps</h2>
            <div className="grid">
                <img src={event1} alt="Cultural Event" />
                <img src={event2} alt="Student Networking" />
                <img src={event3} alt="Scholarship Recipients" />
            </div>
        </section>
    );
};

export default ImpactGrid;
