import React, { useState } from 'react'; // ADDED: useState import for managing component state
import './Navbar.css'; // Component-specific CSS

const Navbar = ({ translations, onLanguageChange, currentLanguage, langData }) => {
  // ADDED: State to control the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ADDED: Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* ADDED: Hamburger Icon Button for Mobile */}
        {/* The 'open' class is conditionally added for styling the 'X' animation */}
        <button className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* MODIFIED: Conditionally add 'open' class to nav-links for mobile visibility */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* ADDED: onClick handler to close menu when a link is clicked */}
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>{translations.home}</a></li>
          {/* ADDED: onClick handler to close menu when a link is clicked */}
          <li><a href='#services' onClick={() => setIsMobileMenuOpen(false)}>{translations.services}</a></li>
          {/* ADDED: onClick handler to close menu when a link is clicked */}
        
          
          {/* ADDED: onClick handler to close menu when a link is clicked 
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>{translations.blog}</a></li>*/}
          
          {/* ADDED: onClick handler to close menu when a link is clicked
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>{translations.pages}</a></li> */}
          <li><a href="#ContactSection" onClick={() => setIsMobileMenuOpen(false)}>{translations.about}</a></li>
          {/* ADDED: onClick handler to close menu when a link is clicked */}
          <li><a href="#ContactSection" onClick={() => setIsMobileMenuOpen(false)}>{translations.contact}</a></li>
        </ul>
      </div>

      <div className="navbar-center">
        <span className="logo-initial">M</span>
        <span className="logo-text">Millionair Mansion</span>
      </div>

      <div className="navbar-right">
        <div className="social-icons">
          <a href="https://web.facebook.com/PJTheMillionMansion" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <button className="book-room-btn"><a href="https://www.booking.com/hotel/th/million-mansion.th.html?aid=357002&label=gog235jc-1FCAso3QFCD21pbGxpb24tbWFuc2lvbkgmWANo3QGIAQGYASa4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AsXsmcMGwAIB0gIkMzJlMDc1OGMtNmIzMC00YWViLWIwODEtMmU0Mjc0Y2YzMjA02AIF4AIB&sid=78a209893623fcd1feb157a3095d5ea3&dest_id=-3414440&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1751545453&srpvid=85cd573491dc050a&type=total&ucfs=1&" target="_blank">{translations.bookARoom}</a></button>
        <div className="language-switcher">
          <select onChange={(e) => onLanguageChange(e.target.value)} value={currentLanguage}>
            <option value="en">{langData.en}</option>
            <option value="th">{langData.th}</option>
            <option value="zh">{langData.zh}</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;