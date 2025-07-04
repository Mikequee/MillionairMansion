import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

import en from './assets/data/en.json';
import th from './assets/data/th.json';
import zh from './assets/data/zh.json'; // ADDED: Import the new Chinese translation file

import './index.css'; // Your main CSS file

// ADDED: Create an object to map language codes to their respective translation data
const allTranslations = {
  en: en,
  th: th,
  zh: zh // ADDED: Map 'zh' to the imported Chinese data
};

function App() {
  // MODIFIED: Set default language if you want, or retrieve from localStorage
  const [language, setLanguage] = useState('en');
  // MODIFIED: Initialize translations based on the initial language
  const [translations, setTranslations] = useState(allTranslations[language]);

  useEffect(() => {
    // MODIFIED: Use the allTranslations object to set the correct translation data
    if (allTranslations[language]) {
      setTranslations(allTranslations[language]);
    } else {
      // Fallback to default language if selected language is not found
      setTranslations(allTranslations['en']);
      console.warn(`Translation for language '${language}' not found, falling back to English.`);
    }
  }, [language]); // Dependency array: run this effect whenever 'language' changes

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="app-container">
      <Navbar translations={translations.navbar} onLanguageChange={handleLanguageChange} currentLanguage={language} langData={translations.language} />
      <HeroSection translations={translations.heroSection} />
      <AboutUsSection translations={translations.aboutUsSection} />
      <ContactSection translations={translations.ContactSection}/>
      <Footer/>
      {/* Add other sections here */}
    </div>
  );
}

export default App;