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
import SplashPage from './splash_page/splash_page';
import Greeting from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer/footer';

const App = () => (
  <div>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
    </head>
    
    <Switch>
      <AuthRoute path='/' component={SplashPage} />
      <AuthRoute exact path='/login' component={SessionFormContainer} />
      <AuthRoute exact path='/signup' component={SessionFormContainer} />
    </Switch>

  </div>
);

export default App;
