import { connect } from 'react-redux';

import {
  fetchCheckins,
  fetchCheckin,
  updateCheckin,
  deleteCheckin,
  checkinsByUser
} from '../../actions/checkin_actions';
import {
  createCheer,
  deleteCheer,
  fetchAllCheers,
} from '../../actions/cheers_actions';
import { fetchAllUsers } from '../../actions/users_actions';
import { fetchWhiskies } from '../../actions/whiskey_actions';
import CheckinIndex from './checkin_index';

const mapStateToProps = state => {
  console.log('checkins in mstp', state.entities);
// debugger
  return ({
  checkins: Object.values(state.entities.checkins)
                  .map(checkin => checkin),
  currentLoggedInUser: state.session.currentUser,
  cheers: state.entities.cheers,
  recentCheckins: state.entities.checkins.recent_checkins,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: id => dispatch(fetchCheckin(id)),
  updateCheckin: checkin => dispatch(updateCheckin(checkin)),
  deleteCheckin: id => dispatch(deleteCheckin(id)),
  checkinsByUser: id => dispatch(checkinsByUser(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  createCheer: cheer => dispatch(createCheer(cheer))
    .then(dispatch(fetchCheckins())),
  deleteCheer: cheerId => dispatch(deleteCheer(cheerId))
    .then(dispatch(fetchCheckins())),
  fetchAllCheers: () => dispatch(fetchAllCheers()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex);
