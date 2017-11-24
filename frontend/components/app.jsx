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
import Motto from './splash_page/motto';
import Greeting from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
    </head>
    <header>
      // <Link to="/" className="header-link"></Link>
      <Greeting />
    </header>
    <Route path='/' component={Motto} />
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </Switch>
    <footer>
      <a href="https://github.com/gardenFiend138/UnCaskd" target="_blank">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/guy-wassather-678740b7" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      <a href="https://www.codewars.com/users/gardenfiend138" target="_blank">
        <i className="fa fa-code" aria-hidden="true"></i>
      </a>
    </footer>
  </div>
);

export default App;
