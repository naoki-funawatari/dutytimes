import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RootRedirect from './RootRedirect';
import DutyTimes from './DutyTimes';
import NotFound from './NotFound';

const Main = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={RootRedirect} />
          <Route path="/:year/:month" component={DutyTimes} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </main>
  );
}

export default Main;
