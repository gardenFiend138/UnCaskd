import { connect } from 'react-redux';

import WhiskeyShow from './whiskey_show';
import {
  fetchWhiskey,
  fetchWhiskies,
  updateWhiskey
} from '../../../actions/whiskey_actions';


const mapStateToProps = (state, ownProps) => {

  return ({
  whiskey: state.entities.whiskies[ownProps.match.params.id]
  });
};

const mapDispatchToProps = dispatch => ({
  updateWhiskey: whiskey => dispatch(updateWhiskey(whiskey)),
  fetchWhiskey: id => dispatch(fetchWhiskey(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiskeyShow);
