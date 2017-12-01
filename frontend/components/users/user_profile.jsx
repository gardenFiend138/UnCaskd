import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import CheckinIndexItem from '../checkins/checkin_index_item';
import CheckinIndex from '../checkins/checkin_index';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.checkins = this.props.currentUser.checkins;
  }

  uniqueCheckins() {
    let result = [];
    this.checkins.forEach( checkin => {
      if (!result.includes(checkin.whiskey_id)) {
        result.push(checkin.whiskey_id);
      }
    });

    return result.length;
  }
  render() {
    const checkins = this.props.currentUser.checkins;
    console.log(this.props)
// debugger;
    return(
      <div className="user-profile-container" >

        <div className='user-profile-header'>

          <div className='user-personal-info'>
            <img src="http://cdn.hiconsumption.com/wp-content/uploads/2016/06/Glencairn-Crystal-Whiskey-Glass-.jpg"
              alt="profile picture" />
            <h1>{this.props.currentUser.username}</h1>
          </div>

          <div className="user-checkin-info">
            <ul>
              <li>{checkins.length} Check Ins </li>
              <li>{this.uniqueCheckins()} Unique</li>
            </ul>
          </div>
        </div>

          <div className='index-container-checkins'>
            {
              checkins.map(checkin => (

                <CheckinIndexItem
                  checkin={checkin}
                  checkins={checkins}
                  userName={this.props.currentUser.username}
                  whiskey={checkin.name}
                  key={checkin.id}
                />

              ))
            }
          </div>


      </div>


            );
          }
  }


export default UserProfile;
