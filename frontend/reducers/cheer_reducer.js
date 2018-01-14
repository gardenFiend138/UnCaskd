import merge from 'lodash/merge';

import { RECEIVE_NEW_CHEERS } from '../actions/cheers_actions';
// import{ RECEIVE_ALL_CHECKINS } from '../actions/checkin_actions';

const CheerReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NEW_CHEERS:
    console.log('heres the action', action);
      return merge({}, state, action.cheer);
    default:
      return state;
  }
};

export default CheerReducer;
