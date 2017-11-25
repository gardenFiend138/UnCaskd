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
import Home from './home/home_page';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
    </head>
    
      <AuthRoute path='/' component={SplashPage} />
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <ProtectedRoute path='/home' component={Home} />
    </Switch>
    <Footer />
  </div>
);

export default App;
