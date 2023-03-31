import React, { useState, useEffect } from 'react';

const Intro = () => {
  const [text, setText] = useState();
  const [fullText, setFullText] = useState([
    'Web Developer',
    'Web Development Hobbyist',
    'Student',
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(fullText[index]);
        setIndex(index + 1);
      }, 4000);
    } else {
      setIndex(0);
    }
  }, [index]);

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
        <div className="fading-text__text">{text}</div>
      </div>
    </div>
  );
};

export default Intro;
