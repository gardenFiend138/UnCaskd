import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import CheckinIndexItem from '../checkins/checkin_index_item';
import CheckinIndex from '../checkins/checkin_index';
import LoadingSpinner from '../loading_spinner';
import { userCheckins } from '../checkins/helpers/checkin_helpers';
import { uniqueCheckins } from './helpers/users_helpers';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      allUserCheckinIds: [],
    };
  }

  componentDidMount() {
    this.props.fetchCheckins();
    this.props.fetchAllUsers();
    this.props.fetchUser(this.props.match.params.id);
    this.getCurrentUser(this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.match.params.id !== nextProps.match.params.id
      || this.state.allUserCheckinIds !== nextState.allUserCheckinIds
      || nextProps.checkins !== this.props.checkins
      || nextProps.recentCheckins !== this.props.recentCheckins
    );
  }

  componentDidUpdate(prevState) {
    if (prevState.user !== this.state.user) {
      window.scrollTo(0,0);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getCurrentUser(nextProps);
  }

  componentWillUnmount() {
    this.props.clearCurrentUserProfile();
  }

  getCurrentUser(props) {
    const user = props.allUsers && props.allUsers[props.match.params.id];
    user && this.setState({
      user,
      allUserCheckinIds: user.all_user_checkin_ids,
    });
  }

  render() {
    const { currentUserProfile, allUserCheckinIds, checkins } = this.props;
    const profilePageLoaded = /* currentUserProfile && allUserCheckinIds && checkins && */ this.state.user && this.state.allUserCheckinIds;
    const user = this.state.user;
    const allUserCheckins = userCheckins(this.state.allUserCheckinIds, checkins);

    return( !profilePageLoaded ? <LoadingSpinner /> :
      <div className="user-profile-container" >
        <div className='user-profile-header'>

          <div className='user-personal-info'>
            <img src={`${user.image_url}`}
              alt="profile picture" />
            <h1>{user.username}</h1>
          </div>

          <div className="user-checkin-info">
            <ul>
              <li>{allUserCheckins.length} Check Ins </li>
              <li>{uniqueCheckins(this.props)} Unique</li>
            </ul>
          </div>
        </div>
          <div className='index-container-checkins-user-show'>
            {
              allUserCheckins.map(checkin => (
                <CheckinIndexItem
                  checkin={checkin}
                  checkins={allUserCheckins}
                  currentUser={user}
                  currentLoggedInUser={this.props.currentLoggedInUser}
                  userName={user.username}
                  whiskey={checkin.whiskey}
                  key={checkin.id}
                  createCheer={this.props.createCheer}
                  deleteCheer={this.props.deleteCheer}
                  deleteCheckin={this.props.deleteCheckin}
                  updateCheckin={() => this.props.updateCheckin}
                  fetchCheckin={this.props.fetchCheckin}
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
