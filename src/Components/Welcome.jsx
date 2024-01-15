import React from 'react';
import '../Styles/Welcome.css';

function Welcome() {
  return (
    <div className='overlay-container-Welcome'>
      <div className='image-container'>
        <div className='Photo'><img src="/Assets/PhotoQLV2.png" alt="QL" /></div>
      </div>
      <div className='text-container'>
        <p>
          Welcome to my portfolio!
          <br />
          Former chef, now working in web and mobile development. Here, you can find my different projects and participations. Images and summaries of projects, the code will be in detail directly on my GitHub.
          Explore my work and don't hesitate to contact me to discuss future collaborations.
          <br /> 
          thanks for visiting!
        </p>
      </div>
    </div>
  );
}

export default Welcome;
