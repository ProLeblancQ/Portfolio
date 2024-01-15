import React from 'react';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import PCarousel from './Components/Carousel';
import './Styles/Homepage.css';

function App() {
  return (
    <div className="App">
      <div className="overlay-container-video">
        <video autoPlay loop muted className="background-video">
          <source src="/Assets/videoBG.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay-container">
        <Navbar />
      </div>
      <div className="overlay-container-Footer">
        <Footer />
      </div>
      <Welcome />
      <PCarousel />
    </div>
  );
}

export default App;
