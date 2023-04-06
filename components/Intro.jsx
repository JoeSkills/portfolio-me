import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="main-intro">
        Hi🤗, I'm
        <br />
        Joseph Oritseweyinmi. <br />
        I'm A Web Developer.
      </div>

      <a
        href="mailto:josephoritseweyinmi5@gmail.com?subject=Hi, I Want To Talk To You"
        className="contact-me-btn"
      >
        Contact Me
      </a>
      <div className="fading-text">
        <Typewriter
          options={{
            strings: ['Web Developer', 'Web Development Hobbyist', 'Student'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Intro;
