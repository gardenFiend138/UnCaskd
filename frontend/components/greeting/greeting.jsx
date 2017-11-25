import React from 'react';
import { Link } from 'react-router-dom';

const loginGuest = (login) => (
  login({'username': 'guest', 'password': 'password'})
);

const sessionLinks = (login) => (
    <header>
      <nav className='greeting-container'>

        <div className="guest">
          <Link to="/">
            <button onClick={() => loginGuest(login)}>
              GUEST LOGIN
            </button>
          </Link>
        </div>

        <div className="member">
          <Link to="/login">
            <button>LOGIN</button>
          </Link>

          <Link to="/signup">
            <button>SIGN UP</button>
          </Link>
        </div>
      </nav>
    </header>
  );


const personalGreeting = (currentUser, logout) => (
  <hgroup className='header-group'>
    <h2 className="header-name">Welcome back {currentUser.username}!</h2>
    <button className='header-button' onClick={logout}>Log Out</button>
  </hgroup>
);
// We pass in login here so we have access to it in session links for our guest login
const Greeting = ({ currentUser, logout, login }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(login)
);

export default Greeting;
