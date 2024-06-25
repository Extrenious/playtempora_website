// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light BG4">
      <a className="navbar-brand Font1  MFont FancyTC2 " href="/Home">Tempora</a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNav}
        aria-controls="navbarNavAltMarkup"
        aria-expanded={isNavOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`  collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link  SFont Font2Style1" to="/Home">Home</Link>
          </li>
     
          <li className="nav-item">
            <Link className="nav-link SFont Font2Style1" to="/Info">Info</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
