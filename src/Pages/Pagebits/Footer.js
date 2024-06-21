// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-body-tertiary  text-center text-lg-start">

    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Contact</h5>
  
          <p>
            Currently I wont be listening contact information if you wish to reach me you can try reaching out through the communities we have if there listed. eventually ill leave email and contact information later one.
          </p>
        </div>
  
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Thoughts?</h5>
  
          <p>
            Thoughts? Suggestons!? Feedback? IDEAS!?!?!? well i'd love to here them. If you have a nice lil mechanic idea or idea for a magic spell if you wish to share I might consider adding it to the game you can tell me here here at ... <Link className="text-body" href="/ThinkTank">Tempora ThinkTank</Link>
          </p>
        </div>
      </div>
    </div>
  
    <div className="text-center p-3" >
        <p>Copyright &copy;  2024 Extrenious. All rights reserved.</p>      
    </div>
  </footer>
  );
}

export default Footer;
