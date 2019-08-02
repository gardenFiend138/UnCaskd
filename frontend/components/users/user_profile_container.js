import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import {
  fetchAllUsers,
  fetchUser,
  clearCurrentUserProfile,
} from '../../actions/users_actions';
import {
  fetchCheckins,
  fetchCheckin,
  checkinsByUser,
  deleteCheckin,
  updateCheckin,
  } from '../../actions/checkin_actions';
import {
  createCheer,
  deleteCheer,
  fetchAllCheers
} from '../../actions/cheers_actions';
import UserProfile from './user_profile';

const mapStateToProps = state => {
  const currentLoggedInUser = state.session.currentUser;
  const currentUserProfile = state.entities.users.user;

  return({
    currentUserProfile,
    currentLoggedInUser,
    allUsers: state.entities.users.users,
    checkins: state.entities.checkins.checkins,
    allUserCheckinIds: currentUserProfile && currentUserProfile.user_checkin_ids,
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: (checkinId) => dispatch(fetchCheckin(checkinId)),
  checkinsByUser: (userId) => dispatch(checkinsByUser(userId)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  createCheer: cheer => dispatch(createCheer(cheer)),
  deleteCheer: cheerId => dispatch(deleteCheer(cheerId)),
  deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
  updateCheckin: checkin => dispatch(updateCheckin(checkin)),
  clearCurrentUserProfile: () => dispatch(clearCurrentUserProfile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
