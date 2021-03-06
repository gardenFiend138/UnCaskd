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

const CheckinReducer = (state = {}, action) => {
  Object.freeze(state);

  let recentCheckins = state.recentCheckins;
  switch (action.type) {
    case RECEIVE_CHECKIN:
      const checkin = {[action.checkin.id]: action.checkin};
      const checkins = Object.assign({}, state.checkins, checkin);
      recentCheckins = action.checkin.recent_checkins;

      return { checkins, recentCheckins };
    case RECEIVE_ALL_CHECKINS:

      return merge({}, state, action.checkins);
    case RECEIVE_USER_CHECKINS:
      return merge({}, action.checkins);
    case REMOVE_CHECKIN:
    console.log(action)
      let newState = Object.assign({}, state);
      delete newState.checkins[action.checkinId];
      return newState;
    case RECEIVE_CHECKIN_ERRORS:
      return state;
    default:
      return state;
  }
};

export default CheckinReducer;
