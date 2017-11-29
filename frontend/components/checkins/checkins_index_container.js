import { connect } from 'react-redux';

import { fetchCheckins } from '../../../actions/checkin_actions';
import CheckinIndex from './checkin_index';

const mapStateToProps = state => {
  return ({
  checkins: Object.keys(state.entities.checkins)
                  .map(id => state.entities.checkins[id])
  });
};

const mapDispatchToProps = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex);
