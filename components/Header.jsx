import React, { useState, useRef, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FiX } from 'react-icons/fi';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef();

  const handleMenuToggle = () => {
    navRef.current.classList.toggle('responsive-nav');
    setShowMenu(() => !showMenu);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showMenu && navRef.current && !navRef.current.contains(e.target)) {
        navRef.current.classList.toggle('responsive-nav');
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showMenu]);

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
                  <a
                    href={`#${item}`}
                    className="nav-links-child"
                    key={index}
                    onClick={handleMenuToggle}
                  >
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
