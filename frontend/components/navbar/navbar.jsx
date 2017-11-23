import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className='navbar'>
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className='header-group'>
    <h2 className="header-name">Welcome back {currentUser.username}!</h2>
    <button className='header-button' onCLick={logout}>Log Out</button>
  </hgroup>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Navbar;
