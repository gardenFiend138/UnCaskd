import merge from 'lodash/merge';

import { RECEIVE_WHISKEY, RECEIVE_ALL_WHISKIES, RECEIVE_WHISKEY_ERRORS } from '../actions/whiskey_actions';

const whiskeyReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WHISKEY:
      const whiskey = {[action.whiskey.id]: action.whiskey};
      return merge({}, state, whiskey);
    case RECEIVE_ALL_WHISKIES:
      return action.whiskies;
    default:
      return state;
  }
};
