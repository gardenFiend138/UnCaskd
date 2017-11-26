import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import whiskey from './whiskey_reducer';


const rootReducer = combineReducers({
  session,
  errors,
  whiskey
});

export default rootReducer;
