import React from 'react';
import './Navbar.css';

function Navbar() {
   
    return (
        <>
        <nav>
          <div className="navbar">
              <h1 class="nav-logo">Coursify</h1>
              <div className="navmenu">
                  <div className="navlink">Home</div>
                  <div className="navlink">About Us</div>
                  <div className="navlink">Features</div>
                  <div className="navlink">Product</div>
                  <div className="navlink">Feedback</div>
                  <div className="navlink">Pricing</div>
                  <button className="btn">Request a Demo</button>
              </div>
          </div>

       </nav> 
       </>
    )
}

export default Navbar