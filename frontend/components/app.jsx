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
import Greeting from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
      <Greeting />
    </header>
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <Route path='/home' component={SplashPageContainer} />
    </Switch>
    <footer>
      <a href="https://github.com/gardenFiend138/UnCaskd" target="_blank">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/guy-wassather-678740b7" target="_blank">
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      <a href="https://www.codewars.com/users/gardenfiend138" target="_blank">
        <i class="fa fa-code" aria-hidden="true"></i>
      </a>
    </footer>
  </div>
);

export default App;
