import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => dispatch (
  APIUtil.login(user).then( currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), errors => (dispatch(receiveSessionErrors(errors.json)))
));

export const signup = user => dispatch (
  APIUtil.signup(user).then( currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), errors => (dispatch(receiveSessionErrors(errors)))
));

export const logout = () => dispatch (
  APIUtil.logout().then( user => (dispatch(receiveCurrentUser(null))))
);

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
