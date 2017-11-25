import React from 'react';
import { Link } from 'react-router-dom';

const navbarLinks = () => {
  return(
    <header className='navbar'>
      <div className='nav-logo'>
        <h2>UnCaskd</h2>
        <h5>Discover the Best</h5>
      </div>
      <Link to='/lounge'>The Lounge</Link>
      <Link to='/whiskies'>Top Rated</Link>

    </header>
  );
};

export default navbarLinks;
