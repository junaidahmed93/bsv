import React from 'react';
 import Home from './components';
import {
  browserHistory,
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Link,
  IndexLink
} from 'react-router';
export default (
    <Router history={browserHistory}>
        <Route path="/Home" component={Home} />
    </Router>
)