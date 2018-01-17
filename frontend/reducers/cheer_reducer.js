import merge from 'lodash/merge';

import {
  RECEIVE_NEW_CHEERS,
  REMOVE_CHEER
} from '../actions/cheers_actions';

const CheerReducer = (state = {}, action) => {
  Object.freeze(state);
console.log('here is the state in the cheer reducer', state);
console.log('here is the action in the cheer reducer', action);
  switch (action.type) {
    case RECEIVE_NEW_CHEERS:
      return merge({}, state, action.cheer);
    case REMOVE_CHEER:
      let newState = merge({}, state);

      delete newState[action.cheerId.id];
      return newState;
    default:
      return state;
  }
};

export default CheerReducer;
