import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { searchWhiskeyDatabase } from '../../actions/whiskey_actions';
import WhiskeySearch from '../search/search_container';
import Navbar from './navbar';

// Destructuring session here so we have direct access to currentUser
// when we map the state to props
const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  searchWhiskeyDatabase: query => dispatch(searchWhiskeyDatabase(query)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
