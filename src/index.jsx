import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';

class App extends Component {
  render () {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            { routes.map((route, idx) => <Route key={idx} {...route} />) }
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));