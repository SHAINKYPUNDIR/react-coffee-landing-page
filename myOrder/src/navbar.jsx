import React from "react";
import './index.css'


function Navbar(){
  return(
    <div className="background-container">
      <ul className="navbar">
        <li>Store</li>
        <li>Contact</li>
        <li>About us</li>
        <li>Services</li>
      </ul>
    <img src="logo.jpg" alt="no img" className="logoImage" />
    <h2 className="tagline">"Code Ka Nasha, Coffee Ke Sath</h2><br/>
    <h4 className="tagline-two">Nirantar Anand, Nirantar Coding"</h4>
    <button className="Main-Button">Explore</button>
    </div>
  )
  function Tag(){
    return(
        <>
        <h3 className="tagline">"Code Ka Nasha, Coffee Ke Sath: [Aapki Business Ka Naam] Nirantar Anand, Nirantar Coding"</h3>
        </>
        
      )
  }
}

export default Navbar
