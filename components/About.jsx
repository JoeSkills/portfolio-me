import React from 'react';
import Image from 'next/image';
import myImg from '../public/Ai-Avatar.png';

const About = () => {
  return (
    <div className="about-section section-spacing" id="About Me">
      <span className="heading about">Who Am I ?🤔</span>
      <div className="about-section__wrapper">
        <div className="about-body">
          I started my coding journey 4 years ago. I'm naturally curious🤔 and
          I'm always improving my web design skills. In my spare time I love
          watching movies🎥, playing games🎮 and building my own projects. I
          have experience on both frontend and backend technologies. My
          preferred tools are NodeJs, React and MongoDB.
        </div>

        <div className="about-section__img-wrapper">
          <Image src={myImg} alt="my image" className="my-img about" />
        </div>
      </div>
      <button
        href="https://github.com/JoeSkills"
        className="btn btn--green about-btn-github"
      >
        Check Me Out On Github
      </button>
    </div>
  );
};

export default About;
