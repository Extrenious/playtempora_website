// SiteInfo.js
import React from 'react';
import Navbar from './Pagebits/Navbar';
import Footer from "./Pagebits/Footer";

function SiteInfo() {
  return (
    <div className="container text-center">
      <div className="row">
        <Navbar /> {/* Include the Navbar */}
      </div>
      <div className="PageHeader"></div>

      <div className="row">
        <h1 className="display-1 Font2">Website About</h1>
      </div>
 
      <div className="Divider row"></div>

      <div className="row">
        <h1 className="display-1 Font2">Color Scheme</h1>
      </div>

      <div className="row"></div>

      <div className="row colorgrid Font1">
        <div className="circle-container">
          <div className="beveled-circle BG1"></div>
          <div className="circle-name"><h1>Fulvous</h1></div>
        </div>

        <div className="circle-container">
          <div className="beveled-circle BG2"></div>
          <div className="circle-name"><h1>Jonquil</h1></div>
        </div>

        <div className="circle-container">
          <div className="beveled-circle BG3"></div>
          <div className="circle-name"><h1>Old Gold</h1></div>
        </div>

        <div className="circle-container">
          <div className="beveled-circle BG4"></div>
          <div className="circle-name"><h1>Tan</h1></div>
        </div>

        <div className="circle-container">
          <div className="beveled-circle BG5"></div>
          <div className="circle-name"><h1>Coffee</h1></div>
        </div>

        <div className="circle-container">
          <div className="beveled-circle BG6"></div>
          <div className="circle-name"><h1>Bistre</h1></div>
        </div>
      </div>

      <div className="Gap row"></div>

      
     <div className="row">
        <h1 className="display-1 Font2">Color Transitions</h1>
      </div>

      <div className= "circle-container Font3">
        <div className ="beveled-circle FancyBG1"></div>
        <div className="circle-name"><h1>Rainbow Background Transition</h1></div>
        <div className ="beveled-circle FancyBG2"></div>
        <div className="circle-name"><h1> Background Transition </h1></div>

        <div className ="beveled-circle FancyBG3"></div>
        <div className="circle-name"><h1>Transition 3</h1></div>
      </div>

      <div className="row">
        <h1 className = "FancyTC1"> Rainbow text Transition </h1>
        <h1 className = "FancyTC2"> Text Transition 2</h1>
        <h1 className = "FancyTC3"> Text Transition 3</h1>
        <h1 className = "FancyTC4"> Text Transition 4</h1>
        <h1 className = "FadingTC1"> Fading Transition 5</h1>

      </div>

      <div className="Gap row"></div>



      <div className="row">
        <h1 className="display-1 Font2">Fonts</h1>
      </div>
      <div className="PageHeader row"></div>

    -
    <div className="row Font1 inline-elements">
        <div className="Container">
            <p className = "XLFont">Cinzel Decorative</p>
            <p className = "LFont">ABCDEFG</p>
            <p className = "MFont">abcdefg</p>
            <p className = "SFont FB">ABCDEFG | abcdefg</p>
        </div>
    </div>
    <div className="PageHeader row"></div>

      -
    <div className="row Font2 inline-elements">
    <div className="Container">
            <p className = "XLFont">Cinzel </p>
            <p className = "LFont">ABCDEFG</p>
            <p className = "MFont">abcdefg</p>
            <p className = "SFont FB">ABCDEFG | abcdefg</p>
        </div>
    </div>
    <div className="PageHeader row"></div>

      -
    <div className="row Font3 inline-elements">
    <div className="Container">
            <p className = "XLFont">Cormorant garamond</p>
            <p className = "LFont">ABCDEFG</p>
            <p className = "MFont">abcdefg</p>
            <p className = "SFont FB">ABCDEFG | abcdefg</p>
        </div>
    </div>
    <div className="PageHeader row"></div>


    <h1 className="display-1 Font2">Website TODO</h1>
    <div className="PageHeader row Font3"></div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">setup Hall Of Fame</li>
      <li class="list-group-item">Create Text shadow anims </li>
      <li class="list-group-item">Setup Devlogs page </li>
      <li class="list-group-item">Setup Communtiy page </li>
     
    </ul>

      
      <div className = "Divider "></div>
      <div className="row">
        <Footer /> {/* Include the Footer */}
      </div>
    </div>
  );
}

export default SiteInfo;
