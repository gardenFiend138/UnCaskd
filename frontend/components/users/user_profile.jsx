import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import CheckinIndexItem from '../checkins/checkin_index_item';
import CheckinIndex from '../checkins/checkin_index';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  componentWillMount() {
    this.props.fetchAllUsers();
    this.getCurrentUserProfile(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // this.props.fetchAllUsers();
    this.getCurrentUserProfile(nextProps);
  }

  getCurrentUserProfile(someProps) {

    this.setState(
      {user: someProps.allUsers[this.props.match.params.id]}
    );
  }

  uniqueCheckins() {
    let result = [];

    this.state.user.checkins.forEach( checkin => {
      if (!result.includes(checkin.whiskey_id)) {
        result.push(checkin.whiskey_id);
      }
    });

    return result.length;
  }

  render() {
// debugger

    const user = this.state.user;
    // const user = this.props.allUsers[this.state.user.id]
    console.log('user in user profile', user)
    console.log('props in user profile', this.props)
    const checkins = user.checkins;
    // do this in the jBuilder instead; send over an array of IDs in
    // the order you want, and use that to get the order; just using
    // order in controller doesn't carry over since jBuilder returns
    // JSON object (order not preserved in hash -- duh);
    checkins.reverse();

    return(
      <div className="user-profile-container" >

        <div className='user-profile-header'>

          <div className='user-personal-info'>
            <img src={`${user.image_url}`}
              alt="profile picture" />
            <h1>{user.username}</h1>
          </div>

          <div className="user-checkin-info">
            <ul>
              <li>{checkins.length} Check Ins </li>
              <li>{this.uniqueCheckins()} Unique</li>
            </ul>
          </div>
        </div>

          <div className='index-container-checkins-user-show'>
            {
              checkins.map(checkin => (
                <CheckinIndexItem
                  checkin={checkin}
                  checkins={checkins}
                  currentUser={user}
                  currentLoggedInUser={this.props.currentUser}
                  userName={user.username}
                  whiskey={checkin.name}
                  key={checkin.id}
                  createCheer={this.props.createCheer}
                  deleteCheer={this.props.deleteCheer}
                />
              ))
            }
          </div>
      </div>
    );
  }
}


export default UserProfile;

// return(
//   <div className="user-profile-container" >
//
//     <div className='user-profile-header'>
//
//       <div className='user-personal-info'>
//         <img src={`${userCheckin.image_url}`}
//           alt="profile picture" />
//         <h1>{userCheckin.username}</h1>
//       </div>
//
//       <div className="user-checkin-info">
//         <ul>
//           <li>{checkins.length} Check Ins </li>
//           <li>{this.uniqueCheckins()} Unique</li>
//         </ul>
//       </div>
//     </div>
//
//       <div className='index-container-checkins'>
//         {
//           checkins.map(checkin => (
//             <CheckinIndexItem
//               checkin={checkin}
//               checkins={checkins}
//               userName={this.props.currentUser.username}
//               whiskey={checkin.name}
//               key={checkin.id}
//             />
//           ))
//         }
//       </div>
//   </div>
// );
