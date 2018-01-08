import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import CheckinIndexItem from '../checkins/checkin_index_item';
import CheckinIndex from '../checkins/checkin_index';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.allUsers[this.props.match.params.id]
    };

  }

  componentDidMount() {
    // this.props.fetchAllUsers();
    // this.fetchUser(this.props.match.params.id);
    // this.checkinsByUserId();
    // if (this.props.match.params.id !== this.state.currentUser.id) {
    //   this.getCurrentUser();
    // }
    window.scrollTo(0,0);
  }

  componentWillReceiveProps() {
    // if (this.props.match.params.id !== this.state.currentUser.id) {
      this.getCurrentUser();
    // }
  }

  getCurrentUser() {
    this.setState({user: this.props.allUsers[this.props.match.params.id]});
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

// new bug: when you click profile when viewing another user's profile, it breaks
  render() {
    const user = this.props.allUsers[this.props.match.params.id]
    const checkins = user.checkins;
    console.log('props: ', this.props);
    console.log('all users: ', this.props.allUsers);
console.log('user: ', user);
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

          <div className='index-container-checkins'>
            {
              checkins.map(checkin => (
                <CheckinIndexItem
                  checkin={checkin}
                  checkins={checkins}
                  userName={user.username}
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
