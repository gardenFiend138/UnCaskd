import { connect } from 'react-redux';

import { fetchCheckins, fetchCheckin, updateCheckin, deleteCheckin } from '../../actions/checkin_actions';
import CheckinIndex from './checkin_index';

const mapStateToProps = state => {
  
  return ({
  checkins: Object.values(state.entities.checkins)
                  .map(checkin => checkin),

  });
};

const mapDispatchToProps = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: id => dispatch(fetchCheckin(id)),
  updateCheckin: checkin => dispatch(updateCheckin(checkin)),
  deleteCheckin: id => dispatch(deleteCheckin(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex);
