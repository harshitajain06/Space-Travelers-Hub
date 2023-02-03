import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../images/logo.png';
import '../styles/header.css';

const Header = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <div>
      <nav>
        <div className="logo-title">
          <img className="logo-img" src={logoImg} alt="logo" />
          <h1 className="title">Space Travelers&apos; Hub</h1>
        </div>
        <div className="links">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Rockets
          </NavLink>
          <NavLink
            to="/missions"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Missions
          </NavLink>
          |
          <NavLink
            to="/myprofile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Profile
          </NavLink>
        </div>
      </nav>
      <hr />
    </div>
  );
};
export default Header;
