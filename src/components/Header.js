import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/logo.png';
import '../styles/header.css';

const Header = () => {
  const [link, setLink] = useState('');
  const styles = {
    padding: '0 15px',
    color: '#0290ff',
  };
  const handleClick = (e) => {
    setLink(e.target.classList.toggle('active-link'));
  };
  return (
    <div>
      <nav>
        <div className="logo-title">
          <img className="logo-img" src={logoImg} alt="logo" />
          <h1 className="title">Space Travelers&apos; Hub</h1>
        </div>
        <div className="links">
          <Link to="/" style={styles} className="link" onClick={handleClick}>
            Rockets
            {' '}
            {link}
          </Link>
          <Link
            to="/missions"
            style={styles}
            className="link"
            onClick={handleClick}
          >
            Missions
          </Link>
          |
          <Link
            to="/myprofile"
            style={styles}
            className="link"
            onClick={handleClick}
          >
            My Profile
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
