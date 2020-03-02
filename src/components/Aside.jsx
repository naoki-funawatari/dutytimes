import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PasteArea from './PasteArea';

const Aside = () => {
  return (
    <aside>
      <Router>
        <Switch>
          <Route path="/:year/:month" component={PasteArea} />
        </Switch>
      </Router>
    </aside>
  );
}

export default Aside;
