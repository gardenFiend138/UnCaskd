import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import whiskey from './whiskey_errors_reducer';

export default combineReducers({
  session
});
