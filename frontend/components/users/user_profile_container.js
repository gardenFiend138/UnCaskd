import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchAllUsers, fetchUser } from '../../actions/users_actions';
import { fetchCheckins, checkinsByUser } from '../../actions/checkin_actions';
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
  checkinsByUser: (userId) => dispatch(checkinsByUser(userId)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  createCheer: cheer => dispatch(createCheer(cheer))
    .then(dispatch(fetchAllUsers()))
    .then(dispatch(fetchAllCheers())),
  deleteCheer: cheerId => dispatch(deleteCheer(cheerId))
    .then(dispatch(fetchAllUsers()))
    .then(dispatch(fetchAllCheers())),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
