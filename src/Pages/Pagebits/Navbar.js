// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand Font1Style2 " href="/">Tempora</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link Font2Style1" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link Font2Style1" to="/HOF">HOF</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link Font2Style1" to="/Info">Info</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link Font2Style1" to="/Community">Community</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
