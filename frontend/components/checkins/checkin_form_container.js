import { connect } from 'react-redux';

import {
  createCheckin,
  updateCheckin,
  deleteCheckin
} from '../../actions/checkin_actions';
import CheckinForm from './checkin_form';

const mapStateToProps = (state, ownProps) => {
  return({
    errors: state.errors.checkin
  });
};

const mapDispatchToProps = (dispatch, { location }) => {

  // const formType = location.pathname.slice(1);
  // const processForm = (formType === 'checkins/new') ? createCheckin : updateCheckin;
  return ({
    createCheckin: checkin => dispatch(createCheckin(checkin))
    // processForm: checkin => dispatch(createCheckin(checkin))
    // formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinForm);
