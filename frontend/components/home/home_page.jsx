
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Checkins from '../checkins/popover_checkin_form_container';

const HomePage = () => {
  return(
    <div className="home-page">

      <div className='test'>
        <form>
          <label> Label for text area
          <textarea>
          </textarea>
        </label>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
