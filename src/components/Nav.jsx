import React from 'react';
import {
  HashRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

const Nav = () => {
  const list = DateList();
  return (
    <nav>
      <Router>
        <Route path="/:year/:month">
          <ul>
            <li>
              <Link to="/">先週</Link>
            </li>
            {list}
          </ul>
        </Route>
      </Router>
    </nav >
  );
}

export default Nav;

const DateList = () => {
  const today = new Date();
  return [...Array(12)].map((v, i) => {
    const date = new Date(
      today.getFullYear(),
      today.getMonth() - 1 + i,
      today.getDate());
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return <ListItem key={i} index={i} year={year} month={month} />
  });
}

const ListItem = ({ index, year, month }) => {
  return (
    <li key={index}>
      <Link to={`/${year}/${month}`}>
        {`${year}年${month}月`}
      </Link>
    </li>
  );
}
