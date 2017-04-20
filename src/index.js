import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { browserHistory, Router, Route, IndexRoute, IndexRedirect, Link, IndexLink } from 'react-router';
import Routes from './routes';

import { Home } from './components';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={Home} />
            {/*<IndexRedirect to="/home" />*/}
          </Router>

        </Provider>
      </div>
    )
  }
}
ReactDOM.render(
  <RootComponent />,
  document.getElementById('root')
);
