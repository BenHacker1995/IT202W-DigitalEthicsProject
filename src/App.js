import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from '../src/Components/Home/Home';

import './App.css';

const App = () => (
  <div className="bg">
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route
          path="/home"
          component={Home}
        />

        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
