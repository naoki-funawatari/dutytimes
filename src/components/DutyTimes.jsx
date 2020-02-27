import React from 'react';
import { useParams } from 'react-router-dom';
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
  const displayDate = new Date(+year, +month - 1, 1);

  return (
    <DateList
      year={displayDate.getFullYear()}
      month={displayDate.getMonth()}
    />
  );
}

export default DutyTimes;
