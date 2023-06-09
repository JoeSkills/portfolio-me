import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section section-spacing" id="Contact">
      <span className="contact-section__title">Say Hi😀</span>
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
          href="https://wa.me/08128795195?text=Hi, I would like to talk to you"
        >
          <FaWhatsapp />
          <span>Whatsapp</span>
        </a>
      </div>
      <div className="contact-section__design-credits">
        Designed & Built👷 By Joseph Oritseweyinmi with
        <span className="contact-section__design-credits__tech-credits">
          {' '}
          NextJs⚡
        </span>{' '}
        &{' '}
        <span className="contact-section__design-credits__tech-credits">
          Vercel
        </span>
      </div>
    </div>
  );
};

export default Contact;
