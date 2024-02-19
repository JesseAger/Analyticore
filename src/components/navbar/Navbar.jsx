import React from 'react';
//import {RiMenu3line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
// import logo from '../../assets/logo-removebg.png';


const navbar = () => {
  return (
    <div className='dpr__navbar'>
      <div className='dpr__navbar-links'>
          <div className='dpr__navbar-links_logo'>
            {/* <img src={logo} alt="logo" /> */}
          </div>
          <div className='dpr__navbar-links_container'>
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About Us</a></p>
            <p><a href="#possibility">Portfolio</a></p>
            <p><a href="#features">Contact</a></p>
            <p><a href="#blog">Resources</a></p>
          </div>
      </div>

    </div>
  )
}

export default navbar
