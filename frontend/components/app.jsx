import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import SplashPageContainer from './splash_page/splash_page_container';
const App = () => (
  <div>
    <header>
      <h1>Welcome to UnCaskd!</h1>
    </header>
    <Switch>
      <Route path='/login' component={SessionFormContainer} />
      <Route path='/signup' component={SessionFormContainer} />
      <Route path='/users/show' component={SplashPageContainer} />
    </Switch>
  </div>
);

export default App;
