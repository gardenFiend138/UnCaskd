import * as APIUtil from '../util/whiskey_api_util';

export const RECEIVE_WHISKEY = 'RECEIVE_WHISKEY';
export const RECEIVE_ALL_WHISKIES = 'RECEIVE_ALL_WHISKIES';
export const RECEIVE_WHISKEY_ERRORS = 'RECEIVE_WHISKEY_ERRORS';

export const receiveWhiskey = whiskey => ({
  type: RECEIVE_WHISKEY,
  whiskey
});

export const receiveAllWhiskies = whiskies => ({
  type: RECEIVE_ALL_WHISKIES,
  whiskies
});

export const receiveErrors = errors => ({
  type: RECEIVE_WHISKEY_ERRORS,
  errors
});

export const addWhiskey = whiskey => dispatch => (
  APIUtil.addWhiskey(whiskey).then(whiskey => (
    dispatch(receiveWhiskey(whiskey))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateWhiskey = whiskey => dispatch => (
  APIUtil.updateWhiskey(whiskey).then(whiskey => (
    dispatch(receiveWhiskey(whiskey))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchWhiskey = whiskeyId => dispatch => (
  APIUtil.fetchWhiskey(whiskeyId).then(whiskey => (
    dispatch(receiveWhiskey(whiskey))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchWhiskies = () => dispatch => (
  APIUtil.fetchWhiskies().then(whiskies => (
    dispatch(receiveAllWhiskies(whiskies))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
