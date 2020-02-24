import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DutyTimes from './DutyTimes';

const Main = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/:year/:month" component={DutyTimes} />
          <Route path="/" component={DutyTimes} />
        </Switch>
      </Router>
    </main>
  );
}

export default Main;
