import * as APIUtil from '../util/whiskey_api_util';

export const RECEIVE_WHISKEY = 'RECEIVE_WHISKEY';
export const RECEIVE_ALL_WHISKIES = 'RECEIVE_ALL_WHISKIES';
export const RECEIVE_TOP_WHISKIES = 'RECEIVE_TOP_WHISKIES';
export const RECEIVE_WHISKEY_ERRORS = 'RECEIVE_WHISKEY_ERRORS';
export const CLEAR_WHISKEY_ERRORS = 'CLEAR_WHISKEY_ERRORS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const clearWhiskeyErrors = () => ({
  type: CLEAR_WHISKEY_ERRORS
});

export const receiveWhiskey = whiskey => ({
  type: RECEIVE_WHISKEY,
  whiskey
});

export const receiveAllWhiskies = whiskies => ({
  type: RECEIVE_ALL_WHISKIES,
  whiskies
});

export const receiveTopWhiskies = topWhiskies => ({
  type: RECEIVE_TOP_WHISKIES,
  topWhiskies
});

export const receiveWhiskeyErrors = errors => ({
  type: RECEIVE_WHISKEY_ERRORS,
  errors
});

export const searchWhiskeyDatabase = query => dispatch => (
  APIUtil.searchWhiskeyDatabase(query).then( searchResults => (
    dispatch(receiveSearchResults(searchResults))
  ))
);

export const addWhiskey = whiskey => dispatch => (
  APIUtil.addWhiskey(whiskey).then(whiskey => (
    dispatch(receiveWhiskey(whiskey))
  ), err => (
    dispatch(receiveWhiskeyErrors(err.responseJSON))
  ))
);

export const updateWhiskey = whiskey => dispatch => (
  APIUtil.updateWhiskey(whiskey).then(whiskey => (
    dispatch(receiveWhiskey(whiskey))
  ), err => (
    dispatch(receiveWhiskeyErrors(err.responseJSON))
  ))
);

export const fetchWhiskey = whiskeyId => dispatch => (
  APIUtil.fetchWhiskey(whiskeyId).then(whiskey => (
    dispatch(receiveWhiskey(whiskey))
  ), err => (
    dispatch(receiveWhiskeyErrors(err.responseJSON))
  ))
);

export const fetchWhiskies = () => dispatch => (
  APIUtil.fetchWhiskies().then(whiskies => (
    dispatch(receiveAllWhiskies(whiskies))
  ), err => (
    dispatch(receiveWhiskeyErrors(err.responseJSON))
  ))
);

export const fetchTopRatedWhiskies = () => dispatch => (
  APIUtil.fetchTopRatedWhiskies().then( topWhiskies => (
    dispatch(receiveTopWhiskies(topWhiskies))
  ), err => (
    dispatch(receiveWhiskeyErrors(err.responseJSON))
  ))
);
