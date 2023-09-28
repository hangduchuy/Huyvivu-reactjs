import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [fix, setFix] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const setFixed = () => {
    if (window.scrollY < 110) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', setFixed);


  return (
    <>
      <nav className={fix ? 'navbar' : 'navbar fixed shadow'}>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Huyvivu
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
                <i className="fas fa-angle-down ps-2"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Tours
                <i className="fas fa-angle-down ps-2"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Booking
                <i className="fas fa-angle-down ps-2"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Destinations
                <i className="fas fa-angle-down ps-2"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pages
                <i className="fas fa-angle-down ps-2"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
                <i className="fas fa-angle-down ps-2"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shortcodes
                <i className="fas fa-angle-down ps-2"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shop
                <i className="fas fa-angle-down ps-2"></i>
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <i className="fas fa-bars"></i>
              </Link>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <i className="fas fa-cart-plus"></i>
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'><i className="fas fa-bars"></i></Button>}
          {button && <Button buttonStyle='btn--outline'><i className="fas fa-cart-plus"></i></Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
