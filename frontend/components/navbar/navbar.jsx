import React from 'react';
import { Link } from 'react-router-dom';

const navbarLinks = () => {
  return(
    <header className='navbar'>
      <ul className='nav-left'>
        <li><div className='nav-logo'>
          <h2>UnCaskd</h2>
          <h5>Discover the Best</h5>
        </div></li>
        <li><Link to='/lounge'>The Lounge</Link></li>
        <li><Link to='/whiskies'>Top Rated</Link></li>
      </ul>
      <ul className='nav-user'>
        <li>Profile</li>
        <li>Friends</li>
        <li><Link to={}</li>
      </ul>
    </header>
  );
};

export default navbarLinks;
