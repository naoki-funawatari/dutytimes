import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import DateList from './DateList';

// const fetchDisplayDate = async () => {
//   // const res = await fetch('https://ntp-a1.nict.go.jp/cgi-bin/json');
//   // const json = await res.json();
//   // const today = new Date(json.st * 1000);
//   // const displayDate = new Date(
//   //   today.getFullYear(),
//   //   today.getMonth(),
//   //   today.getDate() - 7
//   // );
//   // return displayDate;
//   return new Promise(resolve => {
//     setTimeout(() => { resolve(new Date()) }, 100);
//   });
// }

const DutyTimes = () => {
  const { year, month } = useParams();

  if (year === undefined || month === undefined) {
    const today = new Date();
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return (
      <Redirect to={`/${year}/${month}`} />
    );
  }

  const displayDate = new Date(+year, +month - 1, 1);
  return (
    <DateList
      year={displayDate.getFullYear()}
      month={displayDate.getMonth()}
    />
  );
}

export default DutyTimes;
