import merge from 'lodash/merge';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_USERS_ERRORS,
  RECEIVE_USER,
  CLEAR_CURRENT_USER_PROFILE,
} from '../actions/users_actions';

const initialState = {};

const UsersReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, { users: action.users });
    case RECEIVE_USER:
      return merge({}, state, { user: action.user });
    case CLEAR_CURRENT_USER_PROFILE:
      return initialState;
    case RECEIVE_USERS_ERRORS:
      return state;
    default:
      return state;
  }
};

export default UsersReducer;
