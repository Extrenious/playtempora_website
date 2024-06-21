// LoreInfo.js
import React from 'react';
import Navbar from './Pagebits/Navbar';
import Footer from "./Pagebits/Footer";
import LoreDocumentViewer from "../hooks/LoreDocumentViewer";


function LoreInfo() {
  return (
    <div className="container text-center">
        <div className="row">
            <Navbar /> {/* Include the Navbar */}

        </div>
        <div className="PageHeader"></div>

        <div className="row">
          <h1 className="display-1 Font2">Lore</h1>
        </div>

        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li className="breadcrumb-item Font2Style1"><a href="/Info">Info</a></li>
                <li className ="breadcrumb-item active Font2Style1" aria-current="page">Lore</li>
            </ol>
        </nav>
       
        <div className="centercontainer row">
          <LoreDocumentViewer />

        </div>

        <div className="Divider row">

        </div>

        <div className="Divider row">
        </div>

        <div className="row">
            <Footer /> {}
          </div>
      </div>
  );
}

export default LoreInfo; 