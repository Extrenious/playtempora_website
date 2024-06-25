import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomeRender } from './components/HomeRender';
import 'process/browser';

import Home from './Pages/Home';
import Info from './Pages/Info';
import HOF from './Pages/HOF';
import ThinkTank from './Pages/ThinkTank';
import Community from './Pages/Community';
import Contact from './Pages/Contact';

import SiteInfo from './Pages/SiteInfo';


import LoreInfo from './Pages/LoreInfo';
import DevInfo from './Pages/DevInfo';

import UpdateLog from './components/Updatelog';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/primary.css';
import './css/secondary.css';
import './css/Colors.css';
import './css/Fonts.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialContent />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/HOF" element={<HOF />} />
        <Route path="/ThinkTank" element={<ThinkTank />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Community" element={<Community />} />

        <Route path="/SiteInfo" element={<SiteInfo />} />

        <Route path="/UpdateLog" element={<UpdateLog />} />
        <Route path="/Info/Dev" element={<DevInfo />} />
        <Route path="/Info/Lore" element={<LoreInfo />} />
      </Routes>
    </Router>
  );
}

function InitialContent() {
  const bigTemporaRef = useRef(null);
  const medTemporaRef = useRef(null);
  const comingSoonRef = useRef(null);

  useEffect(() => {
    const changeTextOnClick = HomeRender();

    let counter = 0;
    const intervalId = setInterval(() => {
      if (bigTemporaRef.current && medTemporaRef.current && comingSoonRef.current) {
        changeTextOnClick();
        counter++;
        if (counter >= 2500 && bigTemporaRef.current.textContent === "Tempora") {
          clearInterval(intervalId);
        }
      }
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="full-page">
      <header className="mb-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 id="BigTempora" ref={bigTemporaRef}> </h3> {/* Added placeholder content */}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 id="MedTempora" ref={medTemporaRef}>Loading...</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p id="ComingSoon" ref={comingSoonRef}></p> {/* Added placeholder content */}
            </div>
          </div>
        </div>
        <nav className="row">
          <div className="col text-center Font1">
            <Link to="/Home" className="nav-link Font1S2">Home</Link>
          </div>
        </nav>
      </header>
      <main>
        {/* Your main content here */}
      </main>
    </div>
  );
}

export default App;
