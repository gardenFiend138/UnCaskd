import merge from 'lodash/merge';

import {
  RECEIVE_CHECKIN,
  RECEIVE_ALL_CHECKINS,
  RECEIVE_CHECKIN_ERRORS,
  REMOVE_CHECKIN
} from '../actions/checkin_actions';

const _nullErrors = [];

export default (state = [], action) => {

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHECKIN_ERRORS:
      return action.errors;
    case RECEIVE_ALL_CHECKINS:
     return _nullErrors;
    case RECEIVE_CHECKIN:
      return _nullErrors;
    case REMOVE_CHECKIN:
      return _nullErrors;
    default:
      return state;
  }
};
