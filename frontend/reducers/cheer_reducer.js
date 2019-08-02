import merge from 'lodash/merge';

import {
  RECEIVE_NEW_CHEERS,
  REMOVE_CHEER,
  RECEIVE_ALL_CHEERS,
} from '../actions/cheers_actions';

const CheerReducer = (state = {}, action) => {
  Object.freeze(state);

// look into how receive new cheers is being merged in state;
  switch (action.type) {
    case RECEIVE_NEW_CHEERS:
      let newCheer = {[action.cheer.id]: action.cheer};
      return merge({}, state, newCheer);
    case REMOVE_CHEER:
      let newState = merge({}, state);
      delete newState[action.cheerId.id];
      return newState;
    case RECEIVE_ALL_CHEERS:
      return merge({}, state, action.cheers);
    default:
      return state;
  }
};

export default CheerReducer;
