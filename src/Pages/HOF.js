// HOF.js Hall of fame
import React from 'react';
import Navbar from './Pagebits/Navbar';
import Footer from "./Pagebits/Footer";

function HOF() {
  return (
    <div className="container  text-center">
        <div className="row">
            <Navbar /> {/* Include the Navbar */}

        </div>
        <div className="PageHeader"></div>

        <div className="row">
          <h1 className="display-1 Font2">Hall Of Fame</h1>
        </div>
        
        <div className="Divider row">
          Eventually Sets of leaderboards will be placed here 
        </div>

       
        <div className="row">
            <Footer /> {}
          </div>
      </div>
  );
}

export default HOF;
