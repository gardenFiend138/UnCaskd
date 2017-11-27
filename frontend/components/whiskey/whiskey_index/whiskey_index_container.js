import { connect } from 'react-redux';

import { fetchWhiskey, fetchWhiskies } from '../../../actions/whiskey_actions';
import WhiskeyShow from '../whiskey_show/whiskey_show';
import WhiskeyIndex from './whiskey_index';

const mapStateToProps = (state, { match }) => {
  const whiskeyId = parseInt(match.prams.whiskeyId);
  const whiskies = fetchWhiskies();
  return(
    whiskies,
    whiskeyId
  );

};

const mapDispatchToProps = dispatch => ({
  fetchWhiskey: id => dispatch(fetchWhiskey(id)),
  fetchWhiskies: () => dispatch(fetchWhiskies())
});

export default connect(
  null,
  mapDispatchToProps
)(WhiskeyIndex);
