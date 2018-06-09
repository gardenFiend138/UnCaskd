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
import { orderCheckins } from './helpers/checkin_helpers';

const mapStateToProps = state => {
  const recentCheckins = state.entities.checkins.recentCheckins
  const checkins = Object.values(state.entities.checkins)
                  .map(checkin => checkin);
  return ({
    recentCheckins: recentCheckins,
    checkins: orderCheckins(checkins, recentCheckins),
    currentLoggedInUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins()),
  updateCheckin: checkin => dispatch(updateCheckin(checkin)),
  deleteCheckin: id => dispatch(deleteCheckin(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  createCheer: cheer => dispatch(createCheer(cheer)),
  deleteCheer: cheerId => dispatch(deleteCheer(cheerId)),
  fetchAllCheers: () => dispatch(fetchAllCheers()),
  fetchWhiskies: () => dispatch(fetchWhiskies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex);
