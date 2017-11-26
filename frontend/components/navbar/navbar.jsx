import React from 'react';
import { Link } from 'react-router-dom';

const navbarLinks = ({ currentUser, logout }) => {
  return(
    <header className='navbar'>
      <ul className='nav-left'>
        <li className='nav-logo'>
          <Link to='/home'>
            <h3>UnCaskd</h3>
            <h5>Discover the Best</h5>
          </Link>
        </li>
        <li><Link to='/lounge'>The Lounge</Link></li>
        <li><Link to='/whiskies'>Top Rated</Link></li>
      </ul>

      <ul className='nav-right'>
        <li className='user-greeting'>Welcome back, {currentUser.username}!</li>
        <li><img className='profile-pic' src='/assets/barrel-52934_1280.jpg' alt="photo"></img></li>
        <li><input type='text' placeholder='Search...' /></li>

      </ul>
    </header>
  );
};

export default navbarLinks;
