import { connect } from 'react-redux';
import WhiskeySearch from './search';
import { searchWhiskeyDatabase }  from '../../actions/whiskey_actions';


const mapStateToProps = ({ entities }) => ({
  // searchResults: Object.keys(entities.searchResults).map(res => res),
});

const mapDispatchToProps = dispatch => ({
  searchWhiskeyDatabase: query => dispatch(searchWhiskeyDatabase(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiskeySearch);
