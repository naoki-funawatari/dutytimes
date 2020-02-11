import React, { useState, useEffect } from 'react';
import DateList from './DateList';

const fetchDisplayDate = async () => {
  // const res = await fetch('https://ntp-a1.nict.go.jp/cgi-bin/json');
  // const json = await res.json();
  // const today = new Date(json.st * 1000);
  // const displayDate = new Date(
  //   today.getFullYear(),
  //   today.getMonth(),
  //   today.getDate() - 7
  // );
  // return displayDate;
  return new Promise(resolve => {
    setTimeout(() => { resolve(new Date()) }, 1000);
  });
}

const DutyTimes = props => {
  const [displayDate, setDisplayDate] = useState(new Date(0));

  useEffect(() => {
    let fetched = false;
    if (!fetched) {
      (async () => {
        setDisplayDate(await fetchDisplayDate());
      })();
    }
    const cleanup = () => { fetched = true; }
    return cleanup;
  }, []);

  return (
    <DateList
      year={displayDate.getFullYear()}
      month={displayDate.getMonth()}
    />
  );
}

export default DutyTimes;
