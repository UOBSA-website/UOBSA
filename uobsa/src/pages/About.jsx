
import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-section">
            <h1 className="about-heading">About Us</h1>

            {/* About Description in English */}
            <div className="about-description">
                <h2 className="subheading">Our Mission</h2>
                <p>
                    The University of Ottawa Bangladeshi Student Association (UOBSA) is dedicated to fostering a sense of community among Bangladeshi students. Our mission is to celebrate our culture, support one another academically and socially, and promote cross-cultural understanding on campus.
                </p>
            </div>

            {/* About Description in Bangla */}
            <div className="about-description">
                <h2 className="subheading">আমাদের উদ্দেশ্য</h2>
                <p>
                    অটোয়া বিশ্ববিদ্যালয়ের বাংলাদেশি স্টুডেন্ট অ্যাসোসিয়েশন (UOBSA) বাংলাদেশি ছাত্রদের মধ্যে একাত্মতার বোধ গড়ে তোলার জন্য প্রতিশ্রুতিবদ্ধ। আমাদের উদ্দেশ্য হল আমাদের সংস্কৃতিকে উদযাপন করা, একে অপরকে একাডেমিক এবং সামাজিকভাবে সমর্থন করা এবং ক্যাম্পাসে আন্তঃসাংস্কৃতিক বোঝাপড়া প্রচার করা।
                </p>
            </div>

            {/* Image Section */}
            <div className="about-images">
                <img src="/images/sample1.jpg" alt="Event 1" className="about-image" />
                <img src="/images/sample2.jpg" alt="Event 2" className="about-image" />
                <img src="/images/sample3.jpg" alt="Event 3" className="about-image" />
            </div>

            {/* Sponsor Form */}
            <div className="about-form">
                <h2 className="form-heading">Become a Member</h2>
                <form>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required />

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default About;
