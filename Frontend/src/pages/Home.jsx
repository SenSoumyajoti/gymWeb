import React, { useState } from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isFacilitiesHovered, setIsFacilitiesHovered] = useState(false);

  const handleClick = () => {
    navigate("/join");
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="../assets/Untitleddesign.jpg" alt="ShapeX Logo" />
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#training">Training</a>
            <div
              className="facilities-dropdown"
              onMouseEnter={() => setIsFacilitiesHovered(true)}
              onMouseLeave={() => setIsFacilitiesHovered(false)}
            >
              <span style={{ color: isFacilitiesHovered ? "#88c600" : "white" }}>
                Facilities
              </span>
              {isFacilitiesHovered && (
                <div className="dropdown-content">
                  <a href="#gym">Gym</a>
                  <a href="#pool">Pool</a>
                  <a href="#spa">Spa</a>
                </div>
              )}
            </div>
            <a href="#centers">Centers</a>
            <a href="#aboutus">About us</a>
            <a href="#blog">Blog</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div>
            <a className="register-btn" onClick={handleClick}>
              Register
            </a>
          </div>
        </nav>
        <section className="hero-section">
          <span>IMPROVE YOUR</span>
          <h1>FITNESS</h1>
          <p>Join With Our Opening Offer</p>
          <button className="join-btn" onClick={handleClick}>
            JOIN NOW
          </button>
        </section>
      </header>
      <section id="gallery" className="gallery-section">
        
      </section>
      <section id="aboutus" className="about-us-section">
        <h2>About Us</h2>
        <p>
          Welcome to ShapeX! We are dedicated to helping you achieve your fitness
          goals with state-of-the-art facilities and expert trainers.
        </p>
      </section>
    </div>
  );
}

export default Home;