import {
  RECEIVE_ALL_USERS,
  RECEIVE_USERS_ERRORS,
  RECEIVE_USER,
} from '../actions/users_actions';

const _nullErrors = [];

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS_ERRORS:
      return _nullErrors;
    case RECEIVE_ALL_USERS:
      return _nullErrors;
    case RECEIVE_USER:
      return _nullErrors;
    default:
      return state;
  }
};
