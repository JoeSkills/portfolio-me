import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section" id="Contact">
      <span className="contact-section__title">Get In Touch</span>
      <div className="contact-section__desc">
        I’m always open to discussing web design or web development related
        topics.
      </div>
      <a
        className="contact-section__btn"
        href="mailto:josephoritseweyinmi5@gmail.com?subject=Hi, I Want To Talk To You"
      >
        Let's Chat
      </a>
      <div className="contact-section__social-media-links">
        <a
          className="contact-section__social-media-links__link social--facebook"
          href="https://web.facebook.com/joseph.oritseweyinmi"
        >
          <FaFacebookF />
          <span>Facebook</span>
        </a>
        <a
          className="contact-section__social-media-links__link social--whatsapp"
          href="mailto:josephoritseweyinmi5@gmail.com?subject=Hi, I Want To Talk To You"
        >
          <FaWhatsapp />
          <span>Whatsapp</span>
        </a>
      </div>
      <div className="contact-section__design-credits">
        Designed & Built By Joseph Oritseweyinmi
      </div>
    </div>
  );
};

export default Contact;
