import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/join')
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
            <a href="#facilities">Facilities</a>
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
          <span>IMPROVE YOUR FITNESS</span>
          <h1>Join With Our Opening Offer</h1>
          <button className="join-btn" onClick={handleClick}>
            JOIN NOW
          </button>
        </section>
      </header>
    </div>
  );
}

export default Home;
