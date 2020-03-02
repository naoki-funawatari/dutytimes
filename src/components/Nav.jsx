import React from 'react';
import {
  HashRouter as Router,
  Link,
} from 'react-router-dom';

const Nav = () => {
  const list = DateList();
  return (
    <nav>
      <Router>
        <ul>
          <li>
            <Link to="/">当月</Link>
          </li>
          {list}
        </ul>
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
    return <ListItem index={i} year={year} month={month} />
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
