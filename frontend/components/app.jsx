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
import Navbar from './navbar/navbar_container';
import WhiskeyForm from './whiskey/whiskey_form/whiskey_form_container';
import WhiskeyIndex from './whiskey/whiskey_index/whiskey_index_container';
import UserProfile from './users/user_profile_container';
import WhiskeyShow from './whiskey/whiskey_show/whiskey_show_container';
import CheckinForm from './checkins/checkin_form_container';
import CheckinIndex from './checkins/checkins_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <AuthRoute path='/' component={SplashPage} />
      <ProtectedRoute path='/' component={Navbar} />
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <ProtectedRoute path='/home' component={CheckinIndex} />
      <ProtectedRoute path='/whiskies/new' component={WhiskeyForm} />
      <ProtectedRoute path='/whiskies/:id' component={WhiskeyShow} />
      <ProtectedRoute path='/whiskies' component={WhiskeyIndex} />
      <ProtectedRoute path='/users/:id' component={UserProfile} />
      <ProtectedRoute path='/checkins/new' component={CheckinForm} />
    </Switch>
    <Footer />
  </div>
);

export default App;
