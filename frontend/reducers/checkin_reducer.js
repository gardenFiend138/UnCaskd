import merge from 'lodash/merge';

import{
  RECEIVE_CHECKIN,
  RECEIVE_ALL_CHECKINS,
  RECEIVE_USER_CHECKINS,
  RECEIVE_CHECKIN_ERRORS,
  REMOVE_CHECKIN
} from '../actions/checkin_actions';
// import { RECEIVE_NEW_CHEERS } from '../actions/cheers_actions';

const CheckinReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHECKIN:
      const checkin = {[action.checkin.id]: action.checkin};
      return merge({}, state, checkin);
    case RECEIVE_ALL_CHECKINS:
      return merge({}, action.checkins);
    case RECEIVE_USER_CHECKINS:
      return merge({}, action.checkins);
    case REMOVE_CHECKIN:
      let newState = merge({}, state);
      delete newState[action.checkinId];
      return newState;
    case RECEIVE_CHECKIN_ERRORS:
      return state;
    default:
      return state;
  }
};

export default CheckinReducer;
