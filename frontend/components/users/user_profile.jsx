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

  }


  componentDidMount() {
    // this.props.checkinsByUser();

  }

  componentDidMount() {
    console.log('checkins by user: ', this.checkinsByUserId());
  }

  checkinsByUserId() {
    let userCheckins = [];
// debugger
    this.props.allCheckins.forEach( checkin => {
      if (checkin.user_id == this.props.match.params.id) {
        console.log(checkin);
        userCheckins.push(checkin);
      }
    });
    // Object.values(this.props.allCheckins).forEach( (checkin) => {
    //   if (checkin.user_id === this.props.match.params.id) {
    //     userCheckins.push(checkin);
    //   }
    // });
    this.setState({userCheckins: userCheckins});
    return userCheckins;
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

  console.log('Profile screen props: ', this.props);
  console.log(this.props);

  this.checkins = this.props.currentUser.id == this.props.match.params.id ?
                this.props.currentUser.checkins :
                this.state.userCheckins;



    const checkins = this.checkins;

    return(
      <div className="user-profile-container" >

        <div className='user-profile-header'>

          <div className='user-personal-info'>
            <img src={`${this.props.currentUser.image_url}`}
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
