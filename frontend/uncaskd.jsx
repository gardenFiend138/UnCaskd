import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');


 /// DELETE BEFORE PRODUCTION ///
  window.store = store;
  /// DELETE BEFORE PRODUCTION ///

  ReactDOM.render(<Root store={store} />, root);
});
