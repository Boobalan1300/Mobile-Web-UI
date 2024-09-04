

import React, { useState } from "react";
import logo_black from "../images/logo-black.png";

const NavBarComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop-75,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="align">
        <div>
          <img src={logo_black} className="navbar-logo navbar-logo-sm" alt="Logo" />
        </div>
        <div>
          <span className="navbar-toggle" onClick={ToggleMenu}>
            &#9776;
          </span>
        </div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li className="info-nav" onClick={() => scrollToSection("home")}>HOME</li>
        <li className="info-nav" onClick={() => scrollToSection("about")}>ABOUT</li>

        <li className="info-nav" onClick={() => scrollToSection("team")}>TEAM</li>
        <li className="info-nav" onClick={() => scrollToSection("testimonials")}>TESTIMONIALS</li>
        <li className="info-nav" onClick={() => scrollToSection("faq")}>FAQ</li>
        <li className="info-nav" onClick={() => scrollToSection("contact")}>CONTACT</li>
      </ul>
    </nav>
  );
};

export default NavBarComponent;
