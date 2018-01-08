import React from 'react';
import { Link } from 'react-router-dom';


const dropDown = ({currentUser, logout }) => {
  return(

    <ul className='dropdown-menu'>
      <li>Profile</li>
      <li>Friends</li>
      <li><Link onClick={() => logout()}>Sign Out</Link></li>
    </ul>
  );
};

// need currentUser to have checkins for this;
// call in the greeting in navbar
const returningUserGreeting = ({ currentUser }) => {
  if (currentUser.checkins) {
    return 'Welcome, ';
  }

  return 'Welcome back, ';
};


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

        <li><Link to='/whiskies'>All Whiskies</Link></li>
      </ul>

      <ul className='nav-right'>
        <li className='user-greeting'>Welcome back, {currentUser.username}!</li>
        <li className='dropdown'><img className='profile-pic' src={`${currentUser.image_url}`} alt="photo"></img>
          <div className='dropdown-menu'>
            <ul>
              <li><Link to={`/users/${currentUser.id}`}>Profile</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><button onClick={logout}>Log Out</button></li>


            </ul>
          </div>
        </li>
      </ul>
    </header>

  );
};

export default navbarLinks;
// when top rated whiskies pag eimplemented
// <li><Link to='/whiskies'>Top Rated</Link></li>
// search bar--implement funcitonality
// <li><input type='text' placeholder='Search...' /></li>
