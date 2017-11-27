import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = ({ currentUser }) => (
  <div>
    <ul>
      <li>{currentUser.username}</li>
      <li>Number of checkins</li>
      <li>Number of unique checkins</li>
      <li>Friends</li>
      <li>???</li>
      <li><img src={`currentUser.image_url`} alt='profile_pic' /></li>
    </ul>
  </div>
);

export default UserProfile;
