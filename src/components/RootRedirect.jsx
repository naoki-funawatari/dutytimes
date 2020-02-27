import React from 'react';
import { Redirect } from 'react-router-dom';

const RootRedirect = () => {
  const today = new Date();
  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return (<Redirect to={`/${year}/${month}`} />);
}

export default RootRedirect;
