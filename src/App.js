import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from '../src/Components/Home/Home';
import Overview from '../src/Components/Overview/Overview';
import Economic from '../src/Components/Economics/Economics';
import Safety from '../src/Components/Safety/Safety';
import Sources from '../src/Components/Sources/Sources';


import './App.css';
import '../src/styles/main.css';

const App = () => (
  <div className="bg">
    <Router>
      <Switch>
        <Redirect exact from="/" to="/overview" />

        <Route
          path="/home"
          component={Home}
        />

        <Route
          path="/overview"
          component={Overview}
        />

        <Route
          path="/economic"
          component={Economic}
        />

        <Route
          path="/safety"
          component={Safety}
        />

        <Route
          path="/sources"
          component={Sources}
        />

        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
