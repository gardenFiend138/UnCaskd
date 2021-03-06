import { connect } from 'react-redux';

import WhiskeyShow from './whiskey_show';
import {
  fetchWhiskey,
  fetchWhiskies,
  updateWhiskey
} from '../../../actions/whiskey_actions';
import { fetchCheckins, fetchCheckin, deleteCheckin } from '../../../actions/checkin_actions';
import { createCheer, deleteCheer } from '../../../actions/cheers_actions';
import { fetchAllUsers } from '../../../actions/users_actions';
import { fetchAllCheers } from '../../../actions/cheers_actions';

const mapStateToProps = (state, ownProps) => {
// console.log('whiskey in mstp', state.entities.whiskies[ownProps.match.params.id]);
  return ({
  whiskey: state.entities.whiskies[ownProps.match.params.id],
  currentLoggedInUser: state.session.currentUser,
  });
};

// chained fetchCheckins to the beginning of fetchWhiskey to see if that
// fixed the bug of when a cheers is created on the checkin index, it does not
// show up on the whiskey show or profile page until the page is refreshed;
// it seems that it's not fetching the checkins as I need it to when it hits
// the index item component; should I be making a fetch on mount of the index?
// that would be tons of requests though, since the index item is hit for every
// checkin that's fetched...
const mapDispatchToProps = dispatch => ({
  updateWhiskey: whiskey => dispatch(updateWhiskey(whiskey)),
  fetchWhiskey: id => dispatch(fetchCheckins())
    .then(dispatch(fetchWhiskey(id))),
  createCheer: cheer => dispatch(createCheer(cheer))
    .then(dispatch(fetchWhiskies())),
  deleteCheer: cheerId => dispatch(deleteCheer(cheerId))
    .then(dispatch(fetchWhiskies())),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchAllCheers: () => dispatch(fetchAllCheers()),
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: (checkinId) => dispatch(fetchCheckin(fetchCheckin)),
  deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiskeyShow);
