import merge from 'lodash/merge';

import { RECEIVE_NEW_CHEERS } from '../actions/cheers_actions';

const CheerReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NEW_CHEERS:
      return merge({}, state, action.cheer);
    default:
      return state;
  }
};

export default CheerReducer;
