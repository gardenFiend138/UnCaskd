import { connect } from 'react-redux';

import {
  fetchWhiskey,
  fetchWhiskies,
  fetchTopRatedWhiskies
} from '../../../actions/whiskey_actions';
import WhiskeyIndex from './whiskey_index';

const mapStateToProps = state => {
  return ({
  whiskies: Object.keys(state.entities.whiskies)
                  .map(id => state.entities.whiskies[id]),
  checkins: Object.keys(state.entities.checkins)
                  .map(checkin => state.entities.checkins),
  currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchWhiskies: () => dispatch(fetchWhiskies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiskeyIndex);
