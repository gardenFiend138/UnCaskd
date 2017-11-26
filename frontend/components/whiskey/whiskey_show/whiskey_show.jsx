import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import WhiskeyForm from '../whiskey_form/whiskey_form_container';

const WhiskeyShow = () => {
  return(
    <div className="whiskey-show-page">
      <Navbar />
      <div>
        <button>
        <Link to='api/whiskies/new'>Add Whiskey</Link>
        </button>
      </div>
    </div>
  );
};
