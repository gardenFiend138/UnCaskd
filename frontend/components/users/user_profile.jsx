import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import CheckinIndexItem from '../checkins/checkin_index_item';
import CheckinIndex from '../checkins/checkin_index';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userCheckins: [],
    };

    this.checkins = this.props.currentUser.id == this.props.match.params.id ?
              this.props.currentUser.checkins :
              this.state.userCheckins;

  }

  componentDidMount() {
    console.log('checkins by user: ', this.checkinsByUserId());
    this.checkinsByUserId();
  }

  checkinsByUserId() {
    let userCheckins = [];

    this.props.allCheckins.forEach( checkin => {
      if (checkin.user_id == this.props.match.params.id) {
        console.log(checkin);
        userCheckins.push(checkin);
      }
    });

    this.setState({userCheckins: userCheckins});
    return userCheckins;
  }

  uniqueCheckins() {
    let result = [];

    console.log('uique checkins: ', this.checkins);
    this.state.userCheckins.forEach( checkin => {
      if (!result.includes(checkin.whiskey_id)) {
        result.push(checkin.whiskey_id);
      }
    });

    return result.length;
  }

  render() {

    const checkins = this.state.userCheckins;

console.log('first checkin: ', checkins[0]);
    // const user = this.props.currentUser.id == this.props.match.params.id ?
    //           this.props.currentUser :
    //           this.userCheckins;

    // <div className='user-personal-info'>
    //   <img src={`${checkin.image_url}`}
    //     alt="profile picture" />
    //   <h1>{checkin.username}</h1>
    // </div>

    return(
      <div className="user-profile-container" >

        <div className='user-profile-header'>



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
