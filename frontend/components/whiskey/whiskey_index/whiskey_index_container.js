import { connect } from 'react-redux';

import { fetchWhiskey, fetchWhiskies } from '../../../actions/whiskey_actions';
import WhiskeyShow from '../whiskey_show/whiskey_show';
import WhiskeyIndex from './whiskey_index';

const mapStateToProps = state => {
debugger;
  return ({
  whiskies: Object.keys(state.entities.whiskies)
                  .map(id => state.entities.whiskies[id])
  });
};

const mapDispatchToProps = dispatch => ({
  fetchWhiskey: id => dispatch(fetchWhiskey(id)),
  fetchWhiskies: () => dispatch(fetchWhiskies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiskeyIndex);
