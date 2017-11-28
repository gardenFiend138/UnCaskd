import { connect } from 'react-redux';

import { addWhiskey, updateWhiskey } from '../../../actions/whiskey_actions';
import WhiskeyForm from './whiskey_form';

const mapStateToProps = (state) => {
  const numberOfWhiskies = Object.keys(state.entities.whiskies);
  console.log(numberOfWhiskies.length);
  return({
    errors: state.errors.whiskey,
    newIndex: numberOfWhiskies + 1

  });
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
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
