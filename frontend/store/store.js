import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
    // composeWithDevTools(applyMiddleware(thunk, logger))
  );
};

export default configureStore;
