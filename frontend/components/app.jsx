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
import Navbar from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Welcome to UnCaskd!</h1>
      </Link>
      <Navbar />
    </header>
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <Route path='/home' component={SplashPageContainer} />
    </Switch>
  </div>
);

export default App;
