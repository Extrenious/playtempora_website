// Info.js
import React from 'react';
import Navbar from './Pagebits/Navbar';
import Footer from "./Pagebits/Footer";
import { Link } from 'react-router-dom';


function Info() {
  return (
    <div className="container text-center">
        <div className="row">
            <Navbar /> {/* Include the Navbar */}

        </div>
        <div className="PageHeader"></div>

        <div className="row">
          <h1 className="display-1 XLFont Font1">OMUNII PROPHECIES</h1>
        </div>

        <div className="Gap"></div>
        <div className="row">
          <h1 className="display-1 LFont Font1">Dawn</h1>
          <p  className="display-1 SFont Font1">It begins. A story. A tale. A fable.  </p>
          <div className="PageHeader"></div>

          <h1 className="display-1 LFont FadingTC1 Font1">Dusk</h1>
          <p  className="display-1 SFont FadingTC1 Font1">Kings and Kingdoms & War and Warlords
          </p>

          <div className="PageHeader"></div>

          <h1 className="display-1 LFont FadedTC1 Font1">Goat</h1>
          <p  className="display-1 SFont  FadedTC1 Font1">To <strong>Revolt</strong> / To <strong>Royale</strong> / To <strong>Siege</strong> 
          </p>

          <h1 className="display-1 LFont FadedTC2 Font1">Calamity</h1>
          <p className="display-1 SFont  FadedTC2 Font1">To <strong>Salem Expansion</strong> | Story of the Origins of <strong>Obscurity</strong> 
          </p>
        </div>
     
        <div className="Divider row">

        </div>

        
        <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link Font2Style1" to="https://docs.google.com/document/d/14zVwcz0ioYIqzQCLm5j8xsTg4V-bucgVstnvKIaMkV8/edit?usp=sharing">Tempora Development Bible </Link> <p> Game Design Document is a mess currently   </p>
            </li>
          </ul>
          <div className="row">
            <Footer /> {}
          </div>
      </div>
  );
}

export default Info;
