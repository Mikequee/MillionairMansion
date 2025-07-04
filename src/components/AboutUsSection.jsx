import React from 'react';
import './AboutUsSection.css'; // Component-specific CSS

const AboutUsSection = ({ translations }) => {
  return (
    <section id='services' className="about-us-section">
      <div  className="about-content">
        <h2 className="about-us-title">{translations.title}</h2>
        <p className="about-us-subtitle">{translations.subtitle}</p>
        {/* Add more content and images as needed based on your design */}
        <div className="about-container">
          {/* Example image placeholders */}
          <div className="about-container-card"><h1><i className="fas fa-home"></i>{translations.head}</h1><p>{translations.AboutService}</p></div>
          <div className="about-container-card"><h1><i className="fas fa-circle"></i>{translations.head01}</h1><p>{translations.AboutService01}</p></div>
          <div className="about-container-card"><h1><i className="fa-solid fa-glass-cheers"></i>{translations.head02}</h1><p>{translations.AboutService02}</p></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;