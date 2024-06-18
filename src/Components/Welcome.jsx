import React from 'react';
import '../Styles/Welcome.css';

function Welcome() {
  return (
    <div className='overlay-container-Welcome'>
      <div className='image-container'>
        <div className='Photo'><img src="/Assets/PhotoQLV2.png" alt="MyFace" /></div>
      </div>
      <div className='text-container'>
        <p>
          <h1 className='title'>About me ! </h1>
          <p>
          Hi, I'm Quentin and welcome to my portfolio. Here you can find how to contact me, info on some of my projects, and more.
          <br />
          I am currently looking for an apprenticeship in web development to obtain a Bachelor's degree (bac +4) as an Application Designer and Developer. I'm also open to working directly without this last degree.
          <br />
          After years in the culinary field, I transitioned to web and mobile development 💻. I initially thought this career change was impossible due to my educational background, which was heavily oriented towards the culinary arts. However, I was able to fulfill this dream at ForEach Academy.
          <br />
          I love challenges, teamwork, and continuous learning. My unique background gives me precision and creativity, which I now apply to my new career.
          </p> 
        </p>
      </div>
    </div>
  );
}

export default Welcome;
