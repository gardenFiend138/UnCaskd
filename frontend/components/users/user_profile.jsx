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
      userCheckin: []
    };

    this.checkins = this.props.currentUser.id == this.props.match.params.id ?
              this.props.currentUser.checkins :
              this.state.userCheckins;
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.checkinsByUserId();
    window.scrollTo(0,0);
  }

  componentWillReceiveProps() {
    if (this.props.match.params.id !== this.state.userCheckin.user_id) {
      this.checkinsByUserId();
    }
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
    this.setState({userCheckin: userCheckins[0]});
    return userCheckins;
  }

  uniqueCheckins() {
    let result = [];

    this.state.userCheckins.forEach( checkin => {
      if (!result.includes(checkin.whiskey_id)) {
        result.push(checkin.whiskey_id);
      }
    });

    return result.length;
  }

  render() {
    const checkins = this.state.userCheckins;
    const userCheckin = this.state.userCheckin;

    return(
      <div className="user-profile-container" >

        <div className='user-profile-header'>

          <div className='user-personal-info'>
            <img src={`${userCheckin.image_url}`}
              alt="profile picture" />
            <h1>{userCheckin.username}</h1>
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
