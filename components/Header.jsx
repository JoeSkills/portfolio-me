import React, { useState, useRef } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FiX } from 'react-icons/fi';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef();

  const handleMenuToggle = () => {
    navRef.current.classList.toggle('responsive-nav');
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <a href="/"> Joseph</a>
      </div>

      <div className="nav-links-wrapper">
        {showMenu ? (
          <FiX
            style={{ width: '30px', height: '30px' }}
            onClick={handleMenuToggle}
            className="nav-btn nav-close-btn"
          />
        ) : (
          <BiMenu
            style={{ width: '30px', height: '30px' }}
            onClick={handleMenuToggle}
            className="nav-btn"
          />
        )}
        <div className="nav-menu"></div>

        {
          <div className="nav-links-container" ref={navRef}>
            {['About Me', 'My Projects', 'My Skills', 'Contact'].map(
              (item, index) => {
                return (
                  <a href={`#${item}`} className="nav-links-child" key={index}>
                    {' '}
                    {item}
                  </a>
                );
              }
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
