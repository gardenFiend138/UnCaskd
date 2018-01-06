import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchAllUsers } from '../../actions/users_actions';
import { fetchCheckins, checkinsByUser } from '../../actions/checkin_actions';
import UserProfile from './user_profile';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    allCheckins: Object.values(state.entities.checkins).map(checkin => checkin),
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCheckins: () => dispatch(fetchCheckins()),
  checkinsByUser: (userId) => dispatch(checkinsByUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
