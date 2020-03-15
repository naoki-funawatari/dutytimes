

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>ページが見つかりません</h1>
      <br />
      <p><Link to="/">トップページ</Link></p>
    </>
  );
}

export default NotFound;
