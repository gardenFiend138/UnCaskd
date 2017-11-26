import { connect } from 'react-redux';

import { addWhiskey, updateWhiskey } from '../../../actions/whiskey_actions';
import WhiskeyForm from './whiskey_form';

const mapStateToProps = (state) => ({
  errors: state.errors.whiskey
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  console.log(location.pathname.slice(1));
  const processForm = (formType === 'whiskies/new') ? addWhiskey : updateWhiskey;
  return {
    processForm: whiskey => dispatch(processForm(whiskey)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiskeyForm);
