import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import UserProfile from './user_profile';

const mapStateToProps = ({ session }) => {
  
  return({
  currentUser: session.currentUser
});
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
