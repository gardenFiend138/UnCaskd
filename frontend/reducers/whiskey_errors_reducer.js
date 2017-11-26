import {
  RECEIVE_WHISKEY_ERRORS,
  RECEIVE_WHISKEY,
  RECEIVE_ALL_WHISKIES
} from '../actions/whiskey_actions';

const _nullErrors = [];

export default (state = [], action) => {

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_WHISKEY_ERRORS:
      return action.errors;
    case RECEIVE_WHISKEY:
      return _nullErrors;
    case RECEIVE_ALL_WHISKIES:
      return _nullErrors;
    default:
      return state;
  }
};
