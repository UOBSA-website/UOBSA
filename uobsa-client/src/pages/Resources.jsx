import React, { useState } from "react";
import "../styles/Resources.css";

const resources = {
  academic: [
    { name: "Tutoring Services", link: "#" },
    { name: "Scholarship Listings", link: "#" },
    { name: "Past Exam Papers", link: "#" },
    { name: "Writing Centre", link: "#" },
  ],
  career: [
    { name: "Resume Templates", link: "#" },
    { name: "Internship & Job Boards", link: "#" },
    { name: "Networking Events", link: "#" },
  ],
  community: [
    { name: "Bengali Cultural Guides", link: "#" },
    { name: "Local Bengali Restaurants", link: "#" },
    { name: "Join Our Student Group", link: "#" },
  ],
  health: [
    { name: "Mental Health Support", link: "#" },
    { name: "Medical Services", link: "#" },
    { name: "Bengali-speaking Doctors", link: "#" },
  ],
  immigration: [
    { name: "Student Visa Guide", link: "#" },
    { name: "PR Pathways", link: "#" },
    { name: "Legal Aid Services", link: "#" },
  ],
};

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <div className="resources-container">
      <header>
        <h1>Find the Support You Need</h1>
        <p>Resources to help you succeed academically, professionally, and personally.</p>
        <input type="text" placeholder="Search resources..." onChange={handleSearchChange} />
      </header>

      <div className="categories">
        {Object.keys(resources).map((category) => (
          <div key={category} className="card" onClick={() => handleCategoryClick(category)}>
            <h2>{category.toUpperCase()}</h2>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="resource-section">
          <h3>{selectedCategory.toUpperCase()}</h3>
          <ul>
            {resources[selectedCategory]
              .filter((resource) => resource.name.toLowerCase().includes(searchQuery))
              .map((resource, index) => (
                <li key={index}>
                  <a href={resource.link}>{resource.name}</a>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Resources;