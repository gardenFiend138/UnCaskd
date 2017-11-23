import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';


const loginGuest = () => (
  login({'username': 'guest', 'password': 'password'})
);

const sessionLinks = (currentUser) => (
    <div>
      <nav className='greeting-container'>

        <div className="guest">
          <Link to="/">
            <button onClick={loginGuest}>
              Guest Login
            </button>
          </Link>
        </div>

        <div className="member">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/signup">
            <button>Sign Up!</button>
          </Link>
        </div>
      </nav>
    </div>
  );


const personalGreeting = (currentUser, logout) => (
  <hgroup className='header-group'>
    <h2 className="header-name">Welcome back {currentUser.username}!</h2>
    <button className='header-button' onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
