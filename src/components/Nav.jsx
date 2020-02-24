import React from 'react';
import {
  HashRouter as Router,
  Link,
} from 'react-router-dom';

const Nav = () => {
  const list = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date();
    date.setMonth(i);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    list.push(
      <li key={i}>
        <Link to={`/${year}/${month}`}>
          {`${year}年${month}月`}
        </Link>
      </li>
    );
  }

  return (
    <nav>
      <Router>
        <ul>{list}</ul>
      </Router>
    </nav >
  );
}

export default Nav;
