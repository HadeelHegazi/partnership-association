import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Your Figma Header design goes here */}
      <div className="header-container">
        <div className="logo">
          <h1>🤝 Partnership Association</h1>
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
