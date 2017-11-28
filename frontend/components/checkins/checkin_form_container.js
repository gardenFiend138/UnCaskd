import { connect } from 'react-redux';

import {
  createCheckin,
  updateCheckin,
  deleteCheckin
} from '../../actions/checkin_actions';
import CheckinForm from './whiskey_form';

const mapStateToProps = (state) => {
  return({
    errors: state.errors.checkin
  });
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'checkin/new') ? createCheckin : updateCheckin;
  return {
    processForm: checkin => dispatch(processForm(checkin)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinForm);
