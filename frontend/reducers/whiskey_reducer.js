import merge from 'lodash/merge';

import {
  RECEIVE_WHISKEY,
  RECEIVE_ALL_WHISKIES,
  RECEIVE_TOP_WHISKIES,
  RECEIVE_WHISKEY_ERRORS,
  CLEAR_WHISKEY_ERRORS
} from '../actions/whiskey_actions';

const WhiskeyReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WHISKEY:
      const whiskey = {[action.whiskey.id]: action.whiskey};
      return merge({}, state, whiskey);
    case RECEIVE_ALL_WHISKIES:
      return merge({}, action.whiskies);
    case RECEIVE_TOP_WHISKIES:
      return merge({}, action.topWhiskies);
    case RECEIVE_WHISKEY_ERRORS:
      return state;
    case CLEAR_WHISKEY_ERRORS:
      return state;
    default:
      return state;
  }
};

export default WhiskeyReducer;
