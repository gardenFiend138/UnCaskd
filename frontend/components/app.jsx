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
import WhiskeyForm from './whiskey/whiskey_form/whiskey_form_container';
import WhiskeyIndex from './whiskey/whiskey_index/whiskey_index';
import UserProfile from './users/user_profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <AuthRoute path='/' component={SplashPage} />
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <ProtectedRoute path='/home' component={Home} />
      <ProtectedRoute path='/whiskies/new' component={WhiskeyForm} />
      <ProtectedRoute path='/whiskies' component={WhiskeyIndex} />
      <ProtectedRoute path='/users/:id' component={UserProfile} />
    </Switch>
    <Footer />
  </div>
);

export default App;
