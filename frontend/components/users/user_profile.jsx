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

    this.checkins = this.props.currentUser.checkins;

  }


  // componentDidMount() {
  //   console.log(this.checkinsByUserId());
  // }

  // checkinsByUserId = () => {
  //   let userCheckins = [];
  //
  //   Object.values(this.state.entities.checkins).forEach( (checkin) => {
  //     if (checkin.user_id === this.props.match.params.id) {
  //       userCheckins.push(checkin);
  //     }
  //   });
  //   return userCheckins;
  // }

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
// debugger
// this.props.checkinsByUser(this.props.match.params.id).then( res => console.log('checkins by user: ', res));
// if (this.props.allCheckins) {
//   console.log('user checkins: ', this.checkinsByUser());
// }
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
