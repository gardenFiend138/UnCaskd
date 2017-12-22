import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// delete below before production
import { login, logout  } from './util/session_api_util';
import { fetchWhiskies  } from './util/whiskey_api_util';
import { checkinsByUser  } from './util/checkin_api_util';
// delete above before production

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');


 /// DELETE BEFORE PRODUCTION ///
  // window.login = login;
  window.store = store;
  window.fetchWhiskies = fetchWhiskies;
  window.checkinsByUser = checkinsByUser;
  /// DELETE BEFORE PRODUCTION ///

  ReactDOM.render(<Root store={store} />, root);
});
