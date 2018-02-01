import merge from 'lodash/merge';

import {
  RECEIVE_SEARCH_RESULTS,
} from '../actions/whiskey_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.searchResults);
    default:
      return state;
  }
};

export default SearchReducer;
