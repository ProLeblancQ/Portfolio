import React, { useState } from 'react';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import Bienvenue from './Components/Bienvenue';
import './Styles/Homepage.css';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <div className="overlay-container-video">
        <video autoPlay loop muted className="background-video">
          <source src="/Assets/videoBG.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay-container">
        <Navbar onChangeLanguage={handleLanguageChange} />
      </div>
      {language === 'en' ? <Welcome /> : <Bienvenue />}
      <div className="overlay-container-Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
