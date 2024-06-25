// ThinkTank.js
import React from 'react';
import Navbar from './Pagebits/Navbar';
import Footer from "./Pagebits/Footer";

function ThinkTank() {
  return (
    <div className="container text-center">
      <div className="row">
            <Navbar /> {/* Include the Navbar */}
      </div>
      <div className="PageHeader"></div>

    <div className="row">
      <h1 className="display-1 Font2">ThinkTank</h1>
    </div>
 
    <div className="PageHeader row"> </div>
    <iframe className= "BG1" src="https://docs.google.com/forms/d/e/1FAIpQLSeASu_Tl8TLE3Z1X9LtaV3IR5kOnzUyC76isIUmQsYex80U6g/viewform?embedded=true" width="700" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   
    <div className="PageHeader row"> </div>
    <div className="row">
        <Footer /> {}
      </div>
  </div>
  );
}

export default ThinkTank;
