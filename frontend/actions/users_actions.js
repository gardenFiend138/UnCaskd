import * as APIUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const CLEAR_CURRENT_USER_PROFILE = 'CLEAR_CURRENT_USER_PROFILE';

export const receiveUsersErrors = errors => ({
  type: RECEIVE_USERS_ERRORS,
  errors
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const clearCurrentUserProfile = () => ({
  type: CLEAR_CURRENT_USER_PROFILE,
});

export const clearCurrentUsrrProfile = () => dispatch => (
  dispatch(clearCurrentUserProfile())
);

export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers().then( users => (
    dispatch(receiveAllUsers(users))
  ), err => (
    dispatch(receiveUsersErrors(err.responseJSON))
  ))
);

export const fetchUser = (userId) => dispatch => (
  APIUtil.fetchUser(userId).then( user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveUsersErrors(err.responseJSON))
  ))
);
