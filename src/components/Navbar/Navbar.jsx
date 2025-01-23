import React, { useState } from "react";
import "./Navbar.css";
import githubLogo from "../../assets/images/github.png";
import linknLogo from "../../assets/images/logo-linkedin.png";
import logo from "../../assets/images/H.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="logo1">
            <a href="#accueil">
              <img src={logo} alt="Logo" className="logoimg" />
            </a>
          </div>
          <div className={`nav1 ${menuOpen ? "active" : ""}`}>
            <a href="#accueil" className="accueil">
              Accueil
            </a>
            <a href="#projects">Projets</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="logo">
            <a href="https://github.com/HugoLavi">
              <img src={githubLogo} alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/hugo-lavieuville/">
              <img src={linknLogo} alt="LinkedIn logo" />
            </a>
          </div>
          <button className="burger-menu" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
