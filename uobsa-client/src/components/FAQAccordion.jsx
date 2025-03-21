import React, { useState } from "react";
import "../styles/Sponsor.css"; // Ensure styles are applied

const FAQAccordion = () => {
    // State to track which question is open
    const [openIndex, setOpenIndex] = useState(null);

    // FAQ Data (Can be modified dynamically)
    const faqData = [
        {
            question: "How does my sponsorship benefit the UOBSA community?",
            answer: "Your sponsorship directly funds cultural events, student scholarships, and networking opportunities, helping students connect with professionals and celebrate Bangladeshi heritage."
        },
        {
            question: "What recognition do sponsors receive?",
            answer: "Sponsors receive brand exposure at major student events, recognition on our website and social media, and a chance to network with engaged students."
        },
        {
            question: "Is my sponsorship tax-deductible?",
            answer: "Yes! Depending on your sponsorship level, we can provide tax receipts as we collaborate with registered student organizations."
        },
        {
            question: "How do I become a sponsor?",
            answer: "Simply fill out the sponsorship form below, and our team will get in touch with the next steps!"
        }
    ];

    // Function to toggle FAQ items
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion">
                {faqData.map((item, index) => (
                    <div key={index} className={`accordion-item ${openIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
                        <h3>{item.question} <span>{openIndex === index ? "−" : "+"}</span></h3>
                        {openIndex === index && <p>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQAccordion;
