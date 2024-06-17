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
          <h1 className='title'>About me ! </h1>
          hi, I'm Quentin 
          <br />
          <p> I am currently looking for an apprenticeship in web development to obtain a Bachelor's degree (bac +4)
          as an Application Designer and Developer.
          After years in the culinary field, I transitioned to web and mobile development 💻.
          <br />
          I love challenges, teamwork, and continuous learning.
          My unique background gives me precision and creativity, which I now apply in my new career.
          </p> 
        </p>
      </div>
    </div>
  );
}

export default Welcome;
