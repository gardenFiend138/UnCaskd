import merge from 'lodash/merge';

import{
  RECEIVE_CHECKIN,
  RECEIVE_ALL_CHECKINS,
  RECEIVE_USER_CHECKINS,
  RECEIVE_CHECKIN_ERRORS,
  REMOVE_CHECKIN
} from '../actions/checkin_actions';

import { RECEIVE_ALL_CHEERS } from '../actions/cheers_actions';
import { RECEIVE_ALL_USERS } from '../actions/users_actions';
// import { RECEIVE_NEW_CHEERS } from '../actions/cheers_actions';

const CheckinReducer = (state = {}, action) => {
  Object.freeze(state);
console.log('action in the checkin reducer', action);
console.log('state in the checkin reducer', state);
// debugger
  switch (action.type) {
    case RECEIVE_CHECKIN:
      const checkin = {[action.checkin.id]: action.checkin};
      const recent_checkins = state.recent_checkins;
      const checkins = merge({}, state.checkins, checkin);
      return {recent_checkins, checkins};
    case RECEIVE_ALL_CHECKINS:
      return merge({}, action.checkins);
    case RECEIVE_USER_CHECKINS:
      return merge({}, action.checkins);
    case REMOVE_CHECKIN:
      let newState = merge({}, state);
      delete newState[action.checkinId];
      return newState;
    case RECEIVE_ALL_CHEERS:
      return state;
    case RECEIVE_ALL_USERS:
      return state;
    case RECEIVE_CHECKIN_ERRORS:
      return state;
    default:
      return state;
  }
};

export default CheckinReducer;
