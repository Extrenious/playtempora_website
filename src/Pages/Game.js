// Game.js
import React from 'react';
import Navbar from './Pagebits/Navbar';
import Footer from "./Pagebits/Footer";

function Game() {
  return (
    <div className="container text-center">
      <div className="row">
            <Navbar /> {/* Include the Navbar */}
      </div>
      <div className="PageHeader"></div>

    <div className="row">
      <h1 className="display-1 Font2">Game</h1>
    </div>
 
    <div className="Divider row">
        Game Link will eventually be placed here...
    </div>

    <div className="row">
        <Footer /> {}
      </div>
  </div>
  );
}

export default Game;
