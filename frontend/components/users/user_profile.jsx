import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    console.log('my proooooops', this.props);

  }
  render() {

    return(
      <div className="user-profile-container" >

        <div className='user-profile'>
          <div className='user-personal-info'>
            <img src="http://cdn.hiconsumption.com/wp-content/uploads/2016/06/Glencairn-Crystal-Whiskey-Glass-.jpg"
              alt="profile picture" />
              <h1>{this.props.currentUser.username}</h1>
              </div>
              <div className="user-checkin-info">
                <ul>
                  <li>XX Check Ins </li>
                    <li>XX Unique</li>
                    </ul>
                  </div>

                </div>
              </div>
            );
          }
  }


export default UserProfile;
