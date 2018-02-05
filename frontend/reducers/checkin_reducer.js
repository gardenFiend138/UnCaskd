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
// console.log('action in the checkin reducer', action);
  const recentCheckins = state.recentCheckins;
  switch (action.type) {
    case RECEIVE_CHECKIN:
      const checkin = {[action.checkin.id]: action.checkin};
      const checkins = merge({}, state, checkin);
      return merge({}, state, checkin);
      // return {checkins, recentCheckins};
    case RECEIVE_ALL_CHECKINS:
    // console.log('receive all checkins', action);
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
