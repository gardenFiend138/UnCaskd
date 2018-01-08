import merge from 'lodash/merge';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_USERS_ERRORS,
  RECEIVE_USER
} from '../actions/users_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    case RECEIVE_USER:
      return merge({}, action.user);
    case RECEIVE_USERS_ERRORS:
      return state;
    default:
      return state;
  }
};

export default UsersReducer;
