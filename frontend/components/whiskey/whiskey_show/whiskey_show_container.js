import { connect } from 'react-redux';

import WhiskeyShow from './whiskey_show';
import {
  fetchWhiskey,
  fetchWhiskies,
  updateWhiskey
} from '../../../actions/whiskey_actions';
import { fetchCheckins } from '../../../actions/checkin_actions';
import { createCheer, deleteCheer } from '../../../actions/cheers_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
  whiskey: state.entities.whiskies[ownProps.match.params.id],
  currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => ({
  updateWhiskey: whiskey => dispatch(updateWhiskey(whiskey)),
  fetchWhiskey: id => dispatch(fetchWhiskey(id)),
  createCheer: cheer => dispatch(createCheer(cheer))
    .then(dispatch(fetchCheckins())),
  deleteCheer: cheerId => dispatch(deleteCheer(cheerId))
    .then(dispatch(fetchCheckins())),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiskeyShow);
