import {
  createStore,
  applyMiddleware,
  thunk,
  logger
 } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};


export default configureStore;
