import { merge } from 'lodash';

import RECEIVE_CURRENT_USER from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

export const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
