import { combineReducers } from 'redux';

import whiskies from './whiskey_reducer';
import checkins from './checkin_reducer';
import users from './users_reducer';

export default combineReducers({
  whiskies,
  checkins,
  users
});
