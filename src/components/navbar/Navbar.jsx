import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { createBroweserRouter } from "react-router-dom";
// import logo from '../../assets/logo-removebg.png';

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About Us</a>
    </p>
    <p>
      <a href="#possibility">Portfolio</a>
    </p>
    <p>
      <a href="#features">Contact</a>
    </p>
    <p>
      <a href="#blog">Resources</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="dpr__navbar">
      <div className="dpr__navbar-links">
        <div className="dpr__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className="dpr__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dpr__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="dpr__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onclick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onclick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="dpr__navbar-menu_container scale-up-center">
            <div className="dpr__navbar-menu_container-links">
              <Menu />
              <div className="dpr__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
