import React from 'react';
import DateRow from './DateRow';

const DateList = ({ year, month }) => {
  const endOfMonth = new Date(year, month + 1, 0);
  const numberOfDays = endOfMonth.getDate();
  const weekday = ['日', '月', '火', '水', '木', '金', '土'];
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td colSpan="2">{year} 年 {month + 1} 月</td>
            <td>
            </td>
            <td></td>
          </tr>
          {[...new Array(numberOfDays).keys()].map((i, v) => {
            const wdNumber = (new Date(year, month, i + 1)).getDay();
            const wdString = weekday[wdNumber];
            return (
              <DateRow
                key={i}
                id={i}
                day={i + 1}
                wdNumber={wdNumber}
                wdString={wdString}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default DateList;
