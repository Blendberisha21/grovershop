import React, { useState } from 'react';
import './index.css';
import logo from '../images/logo.png';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="header">
      <div className="left">
        <img src={logo} alt="alt" />
      </div>
      <input
        type="checkbox"
        id="check"
        checked={isMenuVisible}
        onChange={toggleMenu}
      />
      <label htmlFor="check" className="checkbtn">
        <svg className="hamburger" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </label>
      <div className={`middle ${isMenuVisible ? 'open' : ''}`}>
        <ul>
          <li> <a href="#" onClick={toggleMenu}>Home</a></li>
          <li> <a href="#serve" onClick={toggleMenu}>Service</a></li>
          <li> <a href="#choose" onClick={toggleMenu}>Menu</a></li>
          <li> <a href="#delivery" onClick={toggleMenu}>Shop</a> </li>
        </ul>
      </div>
      <div className="right">
        <input className="input" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
