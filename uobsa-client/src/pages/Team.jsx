import React, { useState } from "react";
import "../styles/Team.css";
import mehedi from "../assets/BSATeamHeadshots/Mehedi.jpg";
import rusafi from "../assets/BSATeamHeadshots/Rusafi.jpg";
import elina from "../assets/BSATeamHeadshots/Elina.jpg";
import sreejita from "../assets/BSATeamHeadshots/Sreejita.jpg";
import mahi from "../assets/BSATeamHeadshots/Mahi.jpg";
import iqtina from "../assets/BSATeamHeadshots/Iqtina.jpg";
import sammita from "../assets/BSATeamHeadshots/Sammita.jpg";
import shreya from "../assets/BSATeamHeadshots/Shreya.jpg";
import shuvosree from "../assets/BSATeamHeadshots/Shuvosree.jpg";
import intisaar from "../assets/BSATeamHeadshots/Intisaar.jpg";
import fabiha from "../assets/BSATeamHeadshots/Fabiha.jpg";


const teams = [
  {
    name: "Executive Team",
    members: [
      { name: "Elina Alam", role: "Co-President", image: elina, funFact: "Loves playing chess." },
      { name: "Sreejita Das", role: "Co-President", image: sreejita, funFact: "Enjoys hiking on weekends." },
    ],
  },
  {
    name: "Marketing Team",
    members: [
      { name: "Mahi Haque", role: "Vice President of Media", image: mahi, funFact: "Has a collection of rare sneakers." },
      { name: "Iqtina Jaber", role: "Vice President of Design", image: iqtina, funFact: "Loves digital painting." },
      { name: "Alishfa Hossain", role: "Director of Marketing", image: "https://via.placeholder.com/150", funFact: "Loves digital painting." },
    ],
  },
  {
    name: "Tech Team",
    members: [
      { name: "Mehedi Hossain", role: "Vice President of IT", image: mehedi, funFact: "Built his first website at age 12." },
      { name: "Rusafi Kamal", role: "Director of IT", image: rusafi, funFact: "Enjoys coding AI projects in his free time." },
    ],
  },
  {
    name: "External Team",
    members: [
      { name: "Mobashera Mohsin", role: "Vice President of External", image: "https://via.placeholder.com/150", funFact: "Built his first website at age 12." },
    ],
  },
  {
    name: "Internal Team",
    members: [
      { name: "Fabiha Adiba", role: "Director of Internal", image: fabiha, funFact: "Built his first website at age 12." },
    ],
  },
  {
    name: "Events Team",
    members: [
      { name: "Sammita Chowdhury", role: "Co-Vice President of Events", image: sammita, funFact: "Built his first website at age 12." },
      { name: "Shreya Pal", role: "Co-Vice President of Events", image: shreya, funFact: "Enjoys coding AI projects in his free time." },
      { name: "Tanaz Ali", role: "Director of Events", image: "https://via.placeholder.com/150", funFact: "Enjoys coding AI projects in his free time." },
    ],
  },
  {
    name: "Finance Team",
    members: [
      { name: "Shuvosree Chowdhury", role: "Vice President of Finance", image: shuvosree, funFact: "Built his first website at age 12." },
    ],
  },
  {
    name: "Francophone Affairs",
    members: [
      { name: "Intisaar Najmeen", role: "Vice President of Francophone Affairs", image: intisaar, funFact: "Built his first website at age 12." },
    ],
  },
  {
    name: "First Year Representatives",
    members: [
      { name: "Umaymah Khandker", role: "", image: "https://via.placeholder.com/150", funFact: "Built his first website at age 12." },
      { name: "Nusrat Mamun", role: "", image: "https://via.placeholder.com/150", funFact: "Enjoys coding AI projects in his free time." },
    ],
  },
];

const TeamCard = ({ member }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="team-card" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img className="member-image" src={member.image} alt={member.name} />
          <h3 className="team-name">{member.name}</h3>
          <p className="team-role">{member.role}</p>
        </div>
        <div className="card-back">
          <p className="fun-fact">Fun Fact: {member.funFact}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="team-page">
      <h1 className="team-title">Meet the UOBSA Team</h1>
      {teams.map((team, index) => (
        <div key={index} className="team-section">
          <h2 className="team-section-title">{team.name}</h2>
          <div className="team-grid">
            {team.members.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;