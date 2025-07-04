import React, { useState, useEffect } from 'react';
import './Contact.css'; // Component-specific CSS

const ContactSection = ({ translations }) => {
  const contactImages = [
    '/Room02.jpg',
    '/Room01.jpg',
    '/hero-bg.jpg' 
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % contactImages.length
      );
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [contactImages.length]);

  // Function to go to the next image
  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % contactImages.length);
  };

  // Function to go to the previous image
  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + contactImages.length) % contactImages.length // Handle negative index
    );
  };

  return (
    <section id='ContactSection' className="why-choose-us-section">
      <div className="why-choose-us-image-container">
        {/* Carousel Wrapper */}
        <div className="carousel-wrapper">
          <div
            className="carousel-slides"
            // Style to move the slides. Each slide is 100% width of its parent.
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
              width: `${contactImages.length * 100}%` // Total width for all slides side-by-side
            }}
          >
            {contactImages.map((imagePath, index) => (
              <img
                key={index}
                src={imagePath}
                alt={`Contact Slide ${index + 1}`}
                className="why-choose-us-image carousel-slide"
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="carousel-arrow prev-arrow" onClick={goToPrevSlide}>
          &#10094; {/* Left arrow Unicode character */}
        </button>
        <button className="carousel-arrow next-arrow" onClick={goToNextSlide}>
          &#10095; {/* Right arrow Unicode character */}
        </button>

      </div> {/* End of why-choose-us-image-container */}

      <div className="why-choose-us-content">
        <p className="why-choose-us-tagline">{translations.tagline}</p>
        <h2 className="why-choose-us-title">{translations.title}</h2>
        <p className="why-choose-us-description">{translations.description}</p>

        <div className="why-choose-us-cards">
          <div className="why-choose-us-card card-green-border">
            <p className="card-title">{translations.award1Title}<i class="fas fa-phone"></i></p>
            <p ><a href="https://web.facebook.com/PJTheMillionMansion" target='_blank'><i class="fab fa-facebook"></i> {translations.contactInfo01}</a></p>
            <p ><a  href="https://line.me/ti/p/@002aocyl" target="_blank" title="Add us on LINE">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
                alt="LINE"
                width="15"
                height="15"
                style={{ verticalAlign: 'middle' }}
              />
             {translations.contactInfo02}</a></p>
            <p ><i class="fas fa-mobile-alt"></i>{translations.contactInfo}</p>
          </div>
          <div className="why-choose-us-card card-dark-green-bg">
            <a href="https://maps.app.goo.gl/SyuxvgyA4uFzGKcS6" target='_blank'>
            
              <p className="card-title white-text">{translations.award2Title}<i class="fas fa-map-marker"></i></p>
            
          </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;