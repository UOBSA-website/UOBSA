import React, { useEffect, useRef, useState } from "react";
import "../styles/Sponsor.css";

// Import all sponsor images dynamically
const importAll = (r) => r.keys().map(r);
const sponsorLogos = importAll(require.context("../assets/sponsors", false, /\.(png|PNG|jpe?g|svg)$/));

const SponsorCarousel = () => {
    const trackRef = useRef(null);
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        if (sponsorLogos.length > 0) {
            // Duplicate images to ensure continuous scrolling effect
            setLogos([...sponsorLogos, ...sponsorLogos, ...sponsorLogos]); // Tripling for seamless flow
        }
    }, []);

    return (
        <section className="sponsor-carousel">
            <h2>Our Past Sponsors</h2>
            <div className="carousel-container">
                <div className="carousel-track" ref={trackRef}>
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Sponsor ${index + 1}`} className="sponsor-logo" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SponsorCarousel;
