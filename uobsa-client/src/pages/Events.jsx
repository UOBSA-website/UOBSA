import { useState } from "react";
import "../styles/Events.css";
import event1 from "../assets/networking.JPG";
import event2 from "../assets/upcomingEvent.png";
import choloKheli from "../assets/choloKheli.JPG";
import meyederMehndi from "../assets/meyederMehndi.JPG";
import dhamail from "../assets/dhamail.jpg";
import addaNight from "../assets/addaNight.JPG";

const Events = () => {
  const [activeTab, setActiveTab] = useState("current"); // State to toggle between tabs

  return (
    <div className="events-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Experience Culture & Community: UOBSA Events</h1>
          <p className="hero-subtitle">
            Join us for exciting events, from cultural celebrations to networking nights!
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="events-nav">
        <button 
          className={`nav-button ${activeTab === "current" ? "active" : ""}`}
          onClick={() => setActiveTab("current")}
        >
          Current Events
        </button>
        <button 
          className={`nav-button ${activeTab === "past" ? "active" : ""}`}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
      </div>

      {/* Display Current Events if activeTab is "current" */}
      {activeTab === "current" && (
        <section className="events-section">
        <h2 className="section-title">Current Events (2024 - 2025)</h2>
        <p className="section-subtitle">
          Stay updated on our latest events happening this academic year.
        </p>
        <div className="events-grid">
          {/* Event Card 1 */}
          <div className="event-card">
            <img src={event2} alt="Pohela Boishakh Celebration" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Pohela Boishakh Celebration</h3>
              <p className="event-date">📅 April 27, 2025</p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="event-card">
            <img src={event2} alt="Iftar Night" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">UOBSA Iftar Night</h3>
              <p className="event-date">📅 March 21, 2025</p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="event-card">
            <img src={event1} alt="UOBSA Networking Night" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">UOBSA Networking Night</h3>
              <p className="event-date">📅 February 26, 2025 </p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>
                    {/* Event Card 4 */}
                    <div className="event-card">
            <img src={choloKheli} alt="Cholo Kheli" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Cholo Kheli 2025</h3>
              <p className="event-date">📅 January 16, 2025 </p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>
                    {/* Event Card 5 */}
                    <div className="event-card">
            <img src={meyederMehndi} alt="Meyeder Mehndi" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Meyeder Mehndi</h3>
              <p className="event-date">📅 November 15, 2024 </p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>
                    {/* Event Card 6 */}
                    <div className="event-card">
            <img src={dhamail} alt="Dhamail" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Dhamail</h3>
              <p className="event-date">📅 October 10, 2024 </p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>
            {/* Event Card 7 */}
                              <div className="event-card">
            <img src={addaNight} alt="Adda Night" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Adda Night</h3>
              <p className="event-date">📅 September 20, 2024 </p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Display Past Events if activeTab is "past" */}
      {activeTab === "past" && (
        <section className="past-events-section">
        <h2 className="section-title">Past Events (Previous Years)</h2>
        <p className="section-subtitle">
          Stay updated on our latest events happening this academic year.
        </p>
        <div className="events-grid">
          {/* Event Card 1 */}
          <div className="event-card">
            <img src={event1} alt="Pohela Boishakh Celebration" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Pohela Boishakh Celebration</h3>
              <p className="event-date">📅 April 27, 2025</p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="event-card">
            <img src={event1} alt="Networking Night" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">UOBSA Networking Night</h3>
              <p className="event-date">📅 February 26, 2025</p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="event-card">
            <img src={event1} alt="Cholo Kheli" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Cholo Kheli 2025</h3>
              <p className="event-date">📅 January 16, 2025 </p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>
                    {/* Event Card 4 */}
                    <div className="event-card">
            <img src={event1} alt="Cholo Kheli" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Cholo Kheli 2025</h3>
              <p className="event-date">📅 January 16, 2025 </p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>
                    {/* Event Card 5 */}
                    <div className="event-card">
            <img src={event1} alt="Cholo Kheli" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Cholo Kheli 2025</h3>
              <p className="event-date">📅 January 16, 2025 </p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>
                    {/* Event Card 6 */}
                    <div className="event-card">
            <img src={event1} alt="Cholo Kheli" className="event-image" />
            <div className="event-details">
              <h3 className="event-name">Cholo Kheli 2025</h3>
              <p className="event-date">📅 January 16, 2025 </p>
              <p className="event-description">
              Pohela Boishakh marks the beginning of the Bengali New Year, a festival of joy, renewal, and cultural pride. 
      Join us for a vibrant evening filled with traditional Bengali performances, mesmerizing music, and colorful 
      festivities. Experience the beauty of Bengali culture through folk dances, poetry, and interactive activities. 
      Savor the flavors of authentic Bengali cuisine, including pitha, mishti, and traditional fish and rice dishes. 
      Whether you're reconnecting with your roots or discovering a new culture, this event promises an unforgettable 
      celebration of community, heritage, and togetherness.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default Events;
