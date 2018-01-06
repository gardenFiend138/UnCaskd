import * as APIUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';

export const receiveUsersErrors = errors => ({
  type: RECEIVE_USERS_ERRORS,
  errors
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers().then( users => (
    dispatch(receiveAllUsers(users))
  ), err => (
    dispatch(receiveUsersErrors(err.responseJSON))
  ))
);
