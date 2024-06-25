// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div className = "container text-center">
             <div className="PageHeader row"></div>

            <h1 className = " Font1 " >404 - Page Not Found</h1>
            <div className="PageHeader row"></div>

            <p  className = " Font3 FBR " >Sorry, the page you are looking for does not exist. Here are some links you might find useful:</p>

            <div className=" row">


          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link Font2Style1" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link Font2Style1" to="/Info">Info</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link Font2Style1" to="/ThinkTank">Think Tank</Link>
            </li>

    
       
        
          </ul>

          <h1 className="display-1 LFont Font2">Pages Coming Soon</h1>

          <ul className = "list-group list-group-flush BG4">
            <li className = "list-group-item BG4"> 
              Game 
            </li>
            <li className = "list-group-item BG4"> 
              Community
            </li>
            <li className = "list-group-item BG4"> 
              Contact
            </li>
            <li className = "list-group-item BG4"> 
              Hall Of Fame
            </li>
          </ul>
    
        </div>

            <ul>
               
                {/* Add more links as needed */}
            </ul>
        </div>
    );
}

export default NotFound;
