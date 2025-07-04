import React, { useState, useEffect } from 'react'; // ADDED: useState and useEffect
import './HeroSection.css'; // Component-specific CSS

const HeroSection = ({ translations }) => {
  // ADDED: Array of image paths for the carousel
  const heroImages = [
    '/hero-bg.jpg',
    '/Room04.jpg',
    '/Room02.jpg', // Make sure these paths are correct relative to your public folder
    
    // Add more image paths as needed (e.g., '/images/hero-bg-4.jpg')
  ];

  // ADDED: State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ADDED: Function to go to the next slide
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % heroImages.length // Loop back to 0 if at the last image
    );
  };

  // ADDED: Function to go to the previous slide
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + heroImages.length) % heroImages.length // Loop back to last if at the first image
    );
  };

  // ADDED: Apply the current background image dynamically
  const heroStyle = {
    backgroundImage: `url(${heroImages[currentImageIndex]})`
  };

  return (
    // MODIFIED: Apply the dynamic background style to the section
    <section className="hero-section" style={heroStyle}>
      <div className="hero-content">
        <h1>{translations.title}</h1>
        <p>{translations.subtitle}</p>
      </div>
      <div className="hero-arrows">
        {/* ADDED: onClick handlers to call the slide functions */}
        <button className="arrow left-arrow" onClick={prevSlide}>&#x276E;</button>
        <button className="arrow right-arrow" onClick={nextSlide}>&#x276F;</button>
      </div>
    </section>
  );
};

export default HeroSection;
