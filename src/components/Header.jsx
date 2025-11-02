import React, { useEffect, useState } from "react";
import feather from "feather-icons";
import profilephoto from '../assets/profile-photo.jpg'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  useEffect(() => {
    feather.replace();
  }, [navOpen, darkMode]);

  const handleNavClick = () => setNavOpen((o) => !o);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <header className="topbar">
        <button
          id="burger"
          aria-label="Toggle navigation"
          className={navOpen ? "active" : ""}
          onClick={handleNavClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="logo-container">
          {/* Use public/profile-photo.jpg so no import needed */}
          <img src={profilephoto} alt="Pavan Kumar" className="profile-pic" />
          <h1 className="logo">Pavan Kumar</h1>
        </div>

        <button
          id="themeToggle"
          aria-label="Toggle dark mode"
          onClick={() => setDarkMode((d) => !d)}
        >
          <i data-feather={darkMode ? "sun" : "moon"}></i>
        </button>
      </header>

      <nav id="drawer" className={`drawer ${navOpen ? "nav-open" : ""}`}>
        <a href="#about" className="nav-link" onClick={closeNav}>About</a>
        <a href="#skills" className="nav-link" onClick={closeNav}>Skills</a>
        <a href="#services" className="nav-link" onClick={closeNav}>Services</a>
        <a href="#experience" className="nav-link" onClick={closeNav}>Experience</a>
        <a href="#portfolio" className="nav-link" onClick={closeNav}>Portfolio</a>
        <a href="#education" className="nav-link" onClick={closeNav}>Education</a>
        <a href="#contact" className="nav-link" onClick={closeNav}>Contact</a>
      </nav>
    </>
  );
}
