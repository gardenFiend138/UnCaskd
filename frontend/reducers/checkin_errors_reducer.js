import merge from 'lodash/merge';

import {
  RECEIVE_CHECKIN_ERRORS
} from '../actions/checkin_actions';
// do I need another case in here???

const _nullErrors = [];

export default (state = [], action) => {

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHECKIN_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
