import { connect } from 'react-redux';

import { fetchWhiskey, fetchWhiskies } from '../../../actions/whiskey_actions';
import WhiskeyShow from '../whiskey_show/whiskey_show';
import WhiskeyIndex from './whiskey_index';

const mapStateToProps = (state, ownProps) => ({
  whiskies: this.state.entities.whiskies

});

const mapDispatchToProps = (dispatch) => {(
  fetchWhiskey: id => dispatch(fetchWhiskey(id)),
  fetchWhiskies: () => dispatch(fetchWhiskies())
)};

export default connect(
  null,
  mapDispatchToProps
)(WhiskeyIndex);
