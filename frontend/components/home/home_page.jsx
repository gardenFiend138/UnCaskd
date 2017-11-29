
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Checkins from '../checkins/popover_checkin_form_container';
import CheckinIndex from '../checkins/checkin_index';

const HomePage = () => {
  return(
    <div className="home-page">
      <CheckinIndex />
      HOME PAGE CHECKIN INDEX PLEASE
    </div>
  );
};

export default HomePage;
