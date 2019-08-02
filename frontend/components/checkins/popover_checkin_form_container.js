import { connect } from 'react-redux';

import {
  createCheckin,
  updateCheckin,
  deleteCheckin,
  fetchCheckins,
} from '../../actions/checkin_actions';
import CheckinPopover from './popover_checkin_form';

const mapStateToProps = (state, ownProps) => {
  return({
    errors: state.errors.checkin
  });
};

// possibly comment back in fetchCheckins on reateCheckin; still laggy to render 
const mapDispatchToProps = (dispatch, { location }) => {
  // const formType = location.pathname.slice(1);
  // const processForm = (formType === 'checkins/new') ? createCheckin : updateCheckin;
  return {
    createCheckin: (checkin) => dispatch(createCheckin(checkin)),
      // .then(dispatch(fetchCheckins())),
    updateCheckin: (checkin) => dispatch(updateCheckin(checkin)),
      // .then(dispatch(fetchCheckins())),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinPopover);
