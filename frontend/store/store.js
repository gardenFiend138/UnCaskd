import {
  createStore,
  applyMiddleware
  // thunk,
  // logger
 } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {

  return createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
};

// const configureStore = (preloadedState = {}) => {
//   return createStore(
//     RootReducer,
//     preloadedState,
//     applyMiddleware()
//   );
// };




export default configureStore;
