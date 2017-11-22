import {
  createStore,
  applyMiddleware,
  thunk,
  logger
 } from 'redux';



import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
};

export default configureStore;
