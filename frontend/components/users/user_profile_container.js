import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchCheckins } from '../../actions/checkin_actions';
import UserProfile from './user_profile';

const mapStateToProps = state => {
  return({
  currentUser: state.session.currentUser,
  allCheckins: state.entities.checkins

});
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCheckins: () => dispatch(fetchCheckins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
