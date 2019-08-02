import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import whiskey from './whiskey_errors_reducer';
import checkin from './checkin_errors_reducer';
import users from './users_errors_reducer';

export default combineReducers({
  session,
  whiskey,
  checkin,
  users
});
