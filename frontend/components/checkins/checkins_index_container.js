import { connect } from 'react-redux';

import {
  fetchCheckins,
  fetchCheckin,
  updateCheckin,
  deleteCheckin,
  checkinsByUser
} from '../../actions/checkin_actions';
import { createCheer, deleteCheer } from '../../actions/cheers_actions';
import { fetchAllUsers } from '../../actions/users_actions';
import CheckinIndex from './checkin_index';

const mapStateToProps = state => {

  return ({
  checkins: Object.values(state.entities.checkins)
                  .map(checkin => checkin),
  currentUser: state.session.currentUser,
  cheers: state.entities.cheers,
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

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex);
