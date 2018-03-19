import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchAllUsers, fetchUser } from '../../actions/users_actions';
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
  return({
    currentUser: state.session.currentUser,
    allUsers: state.entities.users,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
