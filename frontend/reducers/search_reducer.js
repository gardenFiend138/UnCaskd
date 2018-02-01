import merge from 'lodash/merge';

import {
  RECEIVE_SEARCH_RESULTS,
} from '../actions/whiskey_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
console.log('search action in the reducer', action)
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.searchResults);
    default:
      return state;
  }
};

export default SearchReducer;
