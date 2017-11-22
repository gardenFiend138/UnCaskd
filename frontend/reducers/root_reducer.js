import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
  sessionReducer
});

export default RootReducer;
