// Info.js
import React from 'react';
import Navbar from './Pagebits/Navbar';
import Footer from "./Pagebits/Footer";


function Info() {
  return (
    <div className="container text-center">
        <div className="row">
            <Navbar /> {/* Include the Navbar */}

        </div>
        <div className="PageHeader"></div>

        <div className="row">
          <h1 className="display-1 Font2">Info</h1>
        </div>
        <div className="PageHeader"></div>

        <div className=" row">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link Font2Style1" to="/Info/Lore">Lore Information</a>
            </li>
            <li className="nav-item">
              <a className="nav-link Font2Style1" to="/Info/Dev">Developer information</a>
            </li>
        
          </ul>
        </div>

        <div className="Divider row">

        </div>

        <div className="Divider row">

        <a className="nav-link Font2Style1" to="/SiteInfo">Website information</a>
        </div>

        <div className="row">
            <Footer /> {}
          </div>
      </div>
  );
}

export default Info;
