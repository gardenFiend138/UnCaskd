import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Greeting from '../greeting/greeting_container';
import Footer from '../footer/footer';

  const motto = () => {
    return(
      <div className='motto'>
        <h1>UnCaskd</h1>
        <h5>DISCOVER THE BEST</h5>
      </div>
    );
  };

  const SplashPage = () =>{

    return(
        <div className="splash-page">
          <Greeting />
          {motto()}
        </div>
    );
  };

export default SplashPage;
