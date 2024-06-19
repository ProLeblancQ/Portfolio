import React from 'react';
import '../Styles/NavBar.css';


function Navbar({ onChangeLanguage }) {
  return (
    <nav className="navbar">
      <div className='Nav_Button'>
        <a href="/Assets/CV_AlternanceQL2024.pdf" target="_blank">
          <img src="/Assets/CV_Logo.png" alt="CV" />
        </a>
        <a href="https://www.linkedin.com/in/quentin-leblanc-b3994825b/" target="_blank">
          <img src="/Assets/LinkedinLogo.png" alt="LINKEDIN" />
        </a>
        <a href="https://github.com/ProLeblancQ" target="_blank">
          <img src="/Assets/GitLogo.png" alt="GITHUB" />
        </a>
      </div>
      <div id='language_container'>
        <button className='flag-button' onClick={() => onChangeLanguage('en')}>
          <img className='flag' src="/Assets/EnglishFlag.png" alt="EnglishFlag" />
        </button>
        <button className='flag-button' onClick={() => onChangeLanguage('fr')}>
          <img className='flag' src="/Assets/FrenchFlag.png" alt="FrenchFlag" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;